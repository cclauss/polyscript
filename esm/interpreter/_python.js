import { clean, io } from './_utils.js';

// REQUIRES INTEGRATION TEST
/* c8 ignore start */
export const registerJSModule = (interpreter, name, value) => {
    interpreter.registerJsModule(name, value);
};

export const run = (interpreter, code) => {
    try {
        return interpreter.runPython(clean(code));
    }
    catch (error) {
        io.get(interpreter).stderr(error);
    }
};

export const runAsync = async (interpreter, code) => {
    try {
        return await interpreter.runPythonAsync(clean(code));
    }
    catch (error) {
        io.get(interpreter).stderr(error);
    }
};

export const runEvent = async (interpreter, code, event) => {
    // allows method(event) as well as namespace.method(event)
    // it does not allow fancy brackets names for now
    const [name, ...keys] = code.split('.');
    let target = interpreter.globals.get(name);
    let context;
    for (const key of keys) [context, target] = [target, target[key]];
    try {
        await target.call(context, event);
    }
    catch (error) {
        io.get(interpreter).stderr(error);
    }
};
/* c8 ignore stop */
