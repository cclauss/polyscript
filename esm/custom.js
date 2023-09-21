import '@ungap/with-resolvers';
import { $$ } from 'basic-devtools';

import { assign, create, defineProperty, nodeInfo } from './utils.js';
import { getDetails } from './script-handler.js';
import { registry as defaultRegistry, selectors, prefixes, configs } from './interpreters.js';
import { getRuntimeID } from './loader.js';
import { io } from './interpreter/_utils.js';
import { addAllListeners } from './listeners.js';
import { Hook } from './worker/hooks.js';
import workerURL from './worker/url.js';
import { XWorker } from './index.js';

export const CUSTOM_SELECTORS = new Set;

/**
 * @typedef {Object} Runtime custom configuration
 * @prop {object} interpreter the bootstrapped interpreter
 * @prop {(url:string, options?: object) => Worker} XWorker an XWorker constructor that defaults to same interpreter on the Worker.
 * @prop {object} config a cloned config used to bootstrap the interpreter
 * @prop {(code:string) => any} run an utility to run code within the interpreter
 * @prop {(code:string) => Promise<any>} runAsync an utility to run code asynchronously within the interpreter
 * @prop {(path:string, data:ArrayBuffer) => void} writeFile an utility to write a file in the virtual FS, if available
 */

const types = new Map();
const waitList = new Map();

// REQUIRES INTEGRATION TEST
/* c8 ignore start */
/**
 * @param {Element} node any DOM element registered via define.
 */
export const handleCustomType = (node) => {
    for (const selector of CUSTOM_SELECTORS) {
        if (node.matches(selector)) {
            const type = types.get(selector);
            const { resolve } = waitList.get(type);
            const { options, known } = registry.get(type);
            if (!known.has(node)) {
                known.add(node);
                const {
                    interpreter: runtime,
                    config,
                    version,
                    env,
                    onInterpreterReady,
                    onerror,
                } = options;

                let error;
                try {
                    const worker = workerURL(node);
                    if (worker) {
                        const xworker = XWorker.call(new Hook(null, options), worker, {
                            ...nodeInfo(node, type),
                            version,
                            type: runtime,
                            custom: type,
                            config: node.getAttribute('config') || config || {},
                            async: node.hasAttribute('async')
                        });
                        defineProperty(node, 'xworker', { value: xworker });
                        resolve({ type, xworker });
                        return;
                    }
                }
                // let the custom type handle errors via its `io`
                catch (workerError) {
                    error = workerError;
                }

                const name = getRuntimeID(runtime, version);
                const id = env || `${name}${config ? `|${config}` : ''}`;
                const { interpreter: engine, XWorker: Worker } = getDetails(
                    type,
                    id,
                    name,
                    version,
                    config,
                    runtime
                );
                engine.then((interpreter) => {
                    const module = create(defaultRegistry.get(runtime));

                    const {
                        onBeforeRun,
                        onBeforeRunAsync,
                        onAfterRun,
                        onAfterRunAsync,
                    } = options;

                    const hooks = new Hook(interpreter, options);

                    const XWorker = function XWorker(...args) {
                        return Worker.apply(hooks, args);
                    };

                    // These two loops mimic a `new Map(arrayContent)` without needing
                    // the new Map overhead so that [name, [before, after]] can be easily destructured
                    // and new sync or async patches become easy to add (when the logic is the same).

                    // patch sync
                    for (const [name, [before, after]] of [
                        ['run', [onBeforeRun, onAfterRun]],
                    ]) {
                        const method = module[name];
                        module[name] = function (interpreter, code, ...args) {
                            if (before) before.call(this, resolved, node);
                            const result = method.call(this, interpreter, code, ...args);
                            if (after) after.call(this, resolved, node);
                            return result;
                        };
                    }

                    // patch async
                    for (const [name, [before, after]] of [
                        ['runAsync', [onBeforeRunAsync, onAfterRunAsync]],
                    ]) {
                        const method = module[name];
                        module[name] = async function (interpreter, code, ...args) {
                            if (before) await before.call(this, resolved, node);
                            const result = await method.call(
                                this,
                                interpreter,
                                code,
                                ...args
                            );
                            if (after) await after.call(this, resolved, node);
                            return result;
                        };
                    }

                    module.registerJSModule(interpreter, 'polyscript', { XWorker });

                    const resolved = {
                        type,
                        interpreter,
                        XWorker,
                        io: io.get(interpreter),
                        config: structuredClone(configs.get(name)),
                        run: module.run.bind(module, interpreter),
                        runAsync: module.runAsync.bind(module, interpreter),
                        runEvent: module.runEvent.bind(module, interpreter),
                    };

                    resolve(resolved);

                    if (error) onerror?.(error, node);

                    onInterpreterReady?.(resolved, node);
                });
            }
        }
    }
};

/**
 * @type {Map<string, {options:object, known:WeakSet<Element>}>}
 */
const registry = new Map();

/**
 * @typedef {Object} CustomOptions custom configuration
 * @prop {'pyodide' | 'micropython' | 'wasmoon' | 'ruby-wasm-wasi'} interpreter the interpreter to use
 * @prop {string} [version] the optional interpreter version to use
 * @prop {string} [config] the optional config to use within such interpreter
 * @prop {(environment: object, node: Element) => void} [onInterpreterReady] the callback that will be invoked once
 */

let dontBotherCount = 0;

/**
 * Allows custom types and components on the page to receive interpreters to execute any code
 * @param {string} type the unique `<script type="...">` identifier
 * @param {CustomOptions} options the custom type configuration
 */
export const define = (type, options) => {
    // allow no-type to be bootstrapped out of the box
    let dontBother = type == null;

    if (dontBother)
        type = `_ps${dontBotherCount++}`;
    else if (registry.has(type))
        throw new Error(`<script type="${type}"> already registered`);

    if (!defaultRegistry.has(options?.interpreter))
        throw new Error('Unspecified interpreter');

    // allows reaching out the interpreter helpers on events
    if (!defaultRegistry.has(type))
        defaultRegistry.set(type, defaultRegistry.get(options.interpreter));

    // allows selector -> registry by type
    const custom = [`script[type="${type}"]`];

    // ensure a Promise can resolve once a custom type has been bootstrapped
    whenDefined(type);

    if (dontBother) {
        // add a script then cleanup everything once that's ready
        const { onInterpreterReady } = options;
        options = {
            ...options,
            onInterpreterReady(resolved, node) {
                CUSTOM_SELECTORS.delete(type);
                defaultRegistry.delete(type);
                registry.delete(type);
                waitList.delete(type);
                node.remove();
                onInterpreterReady?.(resolved);
            }
        };
        document.head.append(
            assign(document.createElement('script'), { type })
        );
    }
    else {
        custom.push(`${type}-script`);
        if (!prefixes.includes(`${type}-`))
            prefixes.push(`${type}-`);
    }

    for (const selector of custom) {
        types.set(selector, type);
        CUSTOM_SELECTORS.add(selector);
        const i = selectors.indexOf(selector);
        if (-1 < i) selectors.splice(i, 1);
    }

    // ensure always same env for this custom type
    registry.set(type, {
        options: assign({ env: type }, options),
        known: new WeakSet(),
    });

    if (!dontBother) addAllListeners(document);
    $$(custom.join(',')).forEach(handleCustomType);
};

/**
 * Resolves whenever a defined custom type is bootstrapped on the page
 * @param {string} type the unique `<script type="...">` identifier
 * @returns {Promise<object>}
 */
export const whenDefined = (type) => {
    if (!waitList.has(type)) waitList.set(type, Promise.withResolvers());
    return waitList.get(type).promise;
};
/* c8 ignore stop */
