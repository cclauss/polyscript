const e=(e,t=document)=>[...t.querySelectorAll(e)],t=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const n=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return n(new r[e](t),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new r[a](i),o)};return s})(new Map,e)(0),s="",{toString:o}={},{keys:a}=Object,i=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=o.call(e).slice(8,-1);switch(r){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},c=([e,t])=>0===e&&("function"===t||"symbol"===t),l=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[l,u]=i(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([l,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([l,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([l,r],n);for(const t of a(n))!e&&c(i(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([l,{source:e,flags:t}],n)}case 5:{const t=[],r=s([l,t],n);for(const[r,s]of n)(e||!c(i(r))&&!c(i(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([l,t],n);for(const r of n)!e&&c(i(r))||t.push(o(r));return r}}const{message:f}=n;return s([l,{name:u,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:u,stringify:f}=JSON,p={json:!0,lossy:!0};var d=Object.freeze({__proto__:null,parse:e=>n(u(e)),stringify:e=>f(l(e,p))});const g="3099687a-04a9-4406-a08e-fd1602cb2a81",y="M"+g,h="T"+g;var w=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:m,Map:b,SharedArrayBuffer:v,Uint16Array:E}=globalThis,{BYTES_PER_ELEMENT:S}=m,{BYTES_PER_ELEMENT:A}=E,{isArray:$}=Array,{notify:k,wait:P,waitAsync:x}=Atomics,{fromCharCode:M}=String,j=(e,t)=>e?(x||w)(t,0):(P(t,0),{value:{then:e=>e()}}),T=new WeakSet,_=new WeakMap;let R=0;const O=(e,{parse:t,stringify:r,transform:n}=JSON)=>{if(!_.has(e)){const s=(t,...r)=>e.postMessage({[g]:r},{transfer:t});let o=!1;_.set(e,new Proxy(new b,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,a)=>"then"===a?null:(...r)=>{const i=R++;let c=new m(new v(S)),l=[];T.has(r.at(-1)||l)&&T.delete(l=r.pop()),s(l,i,c,a,n?r.map(n):r);const u=e!==globalThis;let f=0;return o&&u&&(f=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${a}(...args) is awaited`)),j(u,c).value.then((()=>{clearTimeout(f);const e=c[0];if(!e)return;const r=A*e;return c=new m(new v(r+r%S)),s([],i,c),j(u,c).value.then((()=>t(M(...new E(c.buffer).slice(0,e)))))}))},set(t,s,a){if(!t.size){const s=new b;e.addEventListener("message",(async e=>{const a=e.data?.[g];if($(a)){e.stopImmediatePropagation();const[i,c,...l]=a;if(l.length){const[e,a]=l;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);o=!0;try{const o=await t.get(e)(...a);if(void 0!==o){const e=r(n?n(o):o);s.set(i,e),c[0]=e.length}}finally{o=!1}}else{const e=s.get(i);s.delete(i);for(let t=new E(c.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}k(c,0)}}))}return!!t.set(s,a)}}))}return _.get(e)};O.transfer=(...e)=>(T.add(e),e);const W="object",F="function",B="number",I="string",L="undefined",J="symbol",{defineProperty:C,getOwnPropertyDescriptor:N,getPrototypeOf:D,isExtensible:H,ownKeys:U,preventExtensions:q,set:z,setPrototypeOf:Q}=Reflect,{assign:X,create:Y}=Object,K=D(Int8Array),G="isArray",V=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},Z=(e,t)=>[e,t],ee=e=>t=>{const r=typeof t;switch(r){case W:if(null==t)return Z("null",t);if(t===globalThis)return Z(W,null);case F:return e(r,t);case"boolean":case B:case I:case L:case"bigint":return Z(r,t);case J:if(te.has(t))return Z(r,te.get(t))}throw new Error(`Unable to handle this ${r} type`)},te=new Map(U(Symbol).filter((e=>typeof Symbol[e]===J)).map((e=>[Symbol[e],e]))),re=e=>{for(const[t,r]of te)if(r===e)return t};function ne(){return this}const se="apply",oe="construct",ae="defineProperty",ie="deleteProperty",ce="get",le="getOwnPropertyDescriptor",ue="getPrototypeOf",fe="has",pe="isExtensible",de="ownKeys",ge="preventExtensions",ye="set",he="setPrototypeOf",we="delete";var me=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;C(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?X(Y(globalThis),...a):globalThis,p=ee(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return Z(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(we,Z(I,e))})),g=([e,r])=>{switch(e){case W:if(null==r)return f;if(typeof r===B)return l.get(r);if(!(r instanceof K))for(const e in r)r[e]=g(r[e]);return r;case F:if(typeof r===I){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(se,Z(F,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case J:return re(r)}return r},y={[se]:(e,t,r)=>p(e.apply(t,r)),[oe]:(e,t)=>p(new e(...t)),[ae]:(e,t,r)=>p(C(e,t,r)),[ie]:(e,t)=>p(delete e[t]),[ue]:e=>p(D(e)),[ce]:(e,t)=>p(e[t]),[le]:(e,t)=>{const r=N(e,t);return r?Z(W,V(r,p)):Z(L,r)},[fe]:(e,t)=>p(t in e),[pe]:e=>p(H(e)),[de]:e=>Z(W,U(e).map(p)),[ge]:e=>p(q(e)),[ye]:(e,t,r)=>p(z(e,t,r)),[he]:(e,t)=>p(Q(e,t)),[we](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case se:r[0]=g(r[0]),r[1]=r[1].map(g);break;case oe:r[0]=r[0].map(g);break;case ae:{const[e,t]=r;r[0]=g(e);const{get:n,set:s,value:o}=t;n&&(t.get=g(n)),s&&(t.set=g(s)),o&&(t.value=g(o));break}default:r=r.map(g)}return y[e](g(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),be=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===F?e():e,a=e=>typeof e===W&&!!e&&s in e,i=Array[G],c=ee(((e,a)=>{if(s in a)return o(a[s]);if(e===F){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return Z(e,r.get(a))}if(!(a instanceof K))for(const e in a)a[e]=c(a[e]);return Z(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(we,c(e))})),g=e=>{const[t,r]=e;if(!p.has(r)){const n=t===F?ne.bind(e):e,s=new Proxy(n,w),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},y=e=>{const[t,r]=e;switch(t){case W:return null===r?globalThis:typeof r===B?g(e):r;case F:return typeof r===I?n.get(r):g(e);case J:return re(r)}return r},h=(e,t,...r)=>y(f(e,o(t),...r)),w={[se]:(e,t,r)=>h(se,e,c(t),r.map(c)),[oe]:(e,t)=>h(oe,e,t.map(c)),[ae]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===F&&(r.get=c(n)),typeof s===F&&(r.set=c(s)),typeof o===F&&(r.value=c(o)),h(ae,e,c(t),r)},[ie]:(e,t)=>h(ie,e,c(t)),[ue]:e=>h(ue,e),[ce]:(e,t)=>t===s?e:h(ce,e,c(t)),[le]:(e,t)=>{const r=h(le,e,c(t));return r&&V(r,y)},[fe]:(e,t)=>t===s||h(fe,e,c(t)),[pe]:e=>h(pe,e),[de]:e=>h(de,e).map(y),[ge]:e=>h(ge,e),[ye]:(e,t,r)=>h(ye,e,c(t),c(r)),[he]:(e,t)=>h(he,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case se:return y(t).apply(y(s),o.map(y));case we:{const e=y(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([W,null],w),b=m.Array[G];return C(Array,G,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window"),ve="function"==typeof Worker?Worker:class{};const Ee=new WeakMap,Se=(e,...t)=>{const r=O(e,...t);if(!Ee.has(r)){const t=e instanceof ve?me:be;Ee.set(r,t(r,y,h))}return Ee.get(r)};Se.transfer=O.transfer;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Ae=e=>e.arrayBuffer(),$e=e=>e.json(),ke=e=>e.text();const Pe={object(...e){return this.string(function(e){for(var t=e[0],r=1,n=arguments.length;r<n;r++)t+=arguments[r]+e[r];return t}(...e))},string(e){for(const t of e.split(/[\r\n]+/))if(t.trim().length){/^(\s+)/.test(t)&&(e=e.replace(new RegExp("^"+RegExp.$1,"gm"),""));break}return e}},xe=(e,...t)=>Pe[typeof e](e,...t),{isArray:Me}=Array,{assign:je,create:Te,defineProperties:_e,defineProperty:Re,entries:Oe}=Object,{all:We,resolve:Fe}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Be=(e,t=location.href)=>new URL(e,t.replace(/^blob:/,"")).href;let Ie=0;const Le=(e,t)=>({id:e.id||(e.id=`${t}-w${Ie++}`),tag:e.tagName}),Je=new WeakMap,Ce=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Je.set(t,r),t}}},Ne=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},De=e=>{const t=e.split("/");return t.pop(),t.join("/")},He=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},Ue=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},qe=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},ze=new WeakMap,Qe=(e,t,r)=>We((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Me(n))return n.map((r=>({url:qe([e,r]),path:qe([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:qe([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Be(t,ze.get(e))))(r,n).then(Ae).then((r=>e.writeFile(t,s,r)))))),Xe=(e,t,r)=>{e.registerJsModule(t,r)},Ye=(e,t,...r)=>{try{return e.runPython(xe(t),...r)}catch(t){Je.get(e).stderr(t)}},Ke=async(e,t,...r)=>{try{return await e.runPythonAsync(xe(t),...r)}catch(t){Je.get(e).stderr(t)}},Ge=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){Je.get(e).stderr(t)}};var Ve={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Ce();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Qe(this,a,t.fetch),a},registerJSModule:Xe,run:Ye,runAsync:Ke,runEvent:Ge,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>Ne({FS:e,PATH:t,PATH_FS:r},n,s)};const Ze={dict_converter:Object.fromEntries};var et={type:"pyodide",module:(e="0.23.4")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Ce(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:Xe,run:Ye,runAsync:Ke,runEvent:Ge,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(Ze):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>Ne({FS:e,PATH:t,PATH_FS:r},n,s)};const tt="ruby-wasm-wasi",rt=tt.replace(/\W+/g,"_");var nt={type:tt,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Qe(this,o,t.fetch),o},registerJSModule(e,t,r){const n=`__module_${rt}_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS.global[:${n}]`),delete globalThis[n]},run:(e,t,...r)=>e.eval(xe(t),...r),runAsync:(e,t,...r)=>e.evalAsync(xe(t),...r),async runEvent(e,t,r){if(/^xworker\.(on\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${rt}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${tt}`)}};var st={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Ce(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Qe(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{e.global.set(t,r)},run:(e,t,...r)=>{try{return e.doStringSync(xe(t),...r)}catch(t){Je.get(e).stderr(t)}},runAsync:async(e,t,...r)=>{try{return await e.doString(xe(t),...r)}catch(t){Je.get(e).stderr(t)}},runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){Je.get(e).stderr(t)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(He(e,De(t)),t=Ue(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const ot=new Map,at=new Map,it=[],ct=[],lt=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=ot.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{at.set(t,e);const a=e?.fetch;return a&&ze.set(a,o),s(n,e,r)}))}}),ut=e=>{for(const t of[].concat(e.type))ot.set(t,e),it.push(`script[type="${t}"]`),ct.push(`${t}-`)};for(const e of[Ve,et,nt,st])ut(e);const ft=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),pt=e=>{let t=typeof e;return"string"===t&&/\.(json|toml|txt)$/.test(e)?t=RegExp.$1:e="./config.txt",[Be(e),t]},dt=(e,t,r={})=>{if(t){const[e,n]=pt(t);if("json"===n)r=fetch(e).then($e);else if("toml"===n)r=fetch(e).then(ke).then(ft);else if("string"===n)try{r=JSON.parse(t)}catch(e){r=ft(t)}else"object"===n&&t&&(r=t);t=e}return Fe(r).then((r=>lt[e](r,t)))},gt=(e,t="")=>`${e}@${t}`.replace(/@$/,""),yt=[["beforeRun","codeBeforeRunWorker"],["beforeRunAsync","codeBeforeRunWorkerAsync"],["afterRun","codeAfterRunWorker"],["afterRunAsync","codeAfterRunWorkerAsync"]];class ht{constructor(e,t){this.interpreter=e,this.onWorkerReady=t.onWorkerReady;for(const[e,r]of yt)this[e]=t[r]?.()}get stringHooks(){const e={};for(const[t]of yt)this[t]&&(e[t]=xe(this[t]));return e}}var wt=(...e)=>function(t,r){const n=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))});const p="3099687a-04a9-4406-a08e-fd1602cb2a81",d="M"+p,g="T"+p;var y=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:h,SharedArrayBuffer:m,Uint16Array:b}=globalThis,{BYTES_PER_ELEMENT:v}=w,{BYTES_PER_ELEMENT:S}=b,{isArray:E}=Array,{notify:P,wait:A,waitAsync:$}=Atomics,{fromCharCode:M}=String,j=(e,t)=>e?($||y)(t,0):(A(t,0),{value:{then:e=>e()}}),k=new WeakSet,x=new WeakMap;let T=0;const _=(e,{parse:t,stringify:r,transform:n}=JSON)=>{if(!x.has(e)){const s=(t,...r)=>e.postMessage({[p]:r},{transfer:t});let o=!1;x.set(e,new Proxy(new h,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,a)=>"then"===a?null:(...r)=>{const i=T++;let c=new w(new m(v)),l=[];k.has(r.at(-1)||l)&&k.delete(l=r.pop()),s(l,i,c,a,n?r.map(n):r);const u=e!==globalThis;let f=0;return o&&u&&(f=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${a}(...args) is awaited`)),j(u,c).value.then((()=>{clearTimeout(f);const e=c[0];if(!e)return;const r=S*e;return c=new w(new m(r+r%v)),s([],i,c),j(u,c).value.then((()=>t(M(...new b(c.buffer).slice(0,e)))))}))},set(t,s,a){if(!t.size){const s=new h;e.addEventListener("message",(async e=>{const a=e.data?.[p];if(E(a)){e.stopImmediatePropagation();const[i,c,...l]=a;if(l.length){const[e,a]=l;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);o=!0;try{const o=await t.get(e)(...a);if(void 0!==o){const e=r(n?n(o):o);s.set(i,e),c[0]=e.length}}finally{o=!1}}else{const e=s.get(i);s.delete(i);for(let t=new b(c.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}P(c,0)}}))}return!!t.set(s,a)}}))}return x.get(e)};_.transfer=(...e)=>(k.add(e),e);const O="object",F="function",R="number",W="string",B="undefined",J="symbol",{defineProperty:C,getOwnPropertyDescriptor:I,getPrototypeOf:L,isExtensible:H,ownKeys:D,preventExtensions:N,set:U,setPrototypeOf:z}=Reflect,{assign:q,create:K}=Object,Y=L(Int8Array),G="isArray",V=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},Q=(e,t)=>[e,t],X=e=>t=>{const r=typeof t;switch(r){case O:if(null==t)return Q("null",t);if(t===globalThis)return Q(O,null);case F:return e(r,t);case"boolean":case R:case W:case B:case"bigint":return Q(r,t);case J:if(Z.has(t))return Q(r,Z.get(t))}throw new Error(`Unable to handle this ${r} type`)},Z=new Map(D(Symbol).filter((e=>typeof Symbol[e]===J)).map((e=>[Symbol[e],e]))),ee=e=>{for(const[t,r]of Z)if(r===e)return t};function te(){return this}const re="apply",ne="construct",se="defineProperty",oe="deleteProperty",ae="get",ie="getOwnPropertyDescriptor",ce="getPrototypeOf",le="has",ue="isExtensible",fe="ownKeys",pe="preventExtensions",de="set",ge="setPrototypeOf",ye="delete";var we=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;C(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?q(K(globalThis),...a):globalThis,p=X(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return Q(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(ye,Q(W,e))})),g=([e,r])=>{switch(e){case O:if(null==r)return f;if(typeof r===R)return l.get(r);if(!(r instanceof Y))for(const e in r)r[e]=g(r[e]);return r;case F:if(typeof r===W){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(re,Q(F,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case J:return ee(r)}return r},y={[re]:(e,t,r)=>p(e.apply(t,r)),[ne]:(e,t)=>p(new e(...t)),[se]:(e,t,r)=>p(C(e,t,r)),[oe]:(e,t)=>p(delete e[t]),[ce]:e=>p(L(e)),[ae]:(e,t)=>p(e[t]),[ie]:(e,t)=>{const r=I(e,t);return r?Q(O,V(r,p)):Q(B,r)},[le]:(e,t)=>p(t in e),[ue]:e=>p(H(e)),[fe]:e=>Q(O,D(e).map(p)),[pe]:e=>p(N(e)),[de]:(e,t,r)=>p(U(e,t,r)),[ge]:(e,t)=>p(z(e,t)),[ye](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case re:r[0]=g(r[0]),r[1]=r[1].map(g);break;case ne:r[0]=r[0].map(g);break;case se:{const[e,t]=r;r[0]=g(e);const{get:n,set:s,value:o}=t;n&&(t.get=g(n)),s&&(t.set=g(s)),o&&(t.value=g(o));break}default:r=r.map(g)}return y[e](g(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),he=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===F?e():e,a=e=>typeof e===O&&!!e&&s in e,i=Array[G],c=X(((e,a)=>{if(s in a)return o(a[s]);if(e===F){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return Q(e,r.get(a))}if(!(a instanceof Y))for(const e in a)a[e]=c(a[e]);return Q(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(ye,c(e))})),g=e=>{const[t,r]=e;if(!p.has(r)){const n=t===F?te.bind(e):e,s=new Proxy(n,h),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},y=e=>{const[t,r]=e;switch(t){case O:return null===r?globalThis:typeof r===R?g(e):r;case F:return typeof r===W?n.get(r):g(e);case J:return ee(r)}return r},w=(e,t,...r)=>y(f(e,o(t),...r)),h={[re]:(e,t,r)=>w(re,e,c(t),r.map(c)),[ne]:(e,t)=>w(ne,e,t.map(c)),[se]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===F&&(r.get=c(n)),typeof s===F&&(r.set=c(s)),typeof o===F&&(r.value=c(o)),w(se,e,c(t),r)},[oe]:(e,t)=>w(oe,e,c(t)),[ce]:e=>w(ce,e),[ae]:(e,t)=>t===s?e:w(ae,e,c(t)),[ie]:(e,t)=>{const r=w(ie,e,c(t));return r&&V(r,y)},[le]:(e,t)=>t===s||w(le,e,c(t)),[ue]:e=>w(ue,e),[fe]:e=>w(fe,e).map(y),[pe]:e=>w(pe,e),[de]:(e,t,r)=>w(de,e,c(t),c(r)),[ge]:(e,t)=>w(ge,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case re:return y(t).apply(y(s),o.map(y));case ye:{const e=y(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([O,null],h),b=m.Array[G];return C(Array,G,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window"),me="function"==typeof Worker?Worker:class{};const be=new WeakMap,ve=(e,...t)=>{const r=_(e,...t);if(!be.has(r)){const t=e instanceof me?we:he;be.set(r,t(r,d,g))}return be.get(r)};ve.transfer=_.transfer;const Se={object(...e){return this.string(function(e){for(var t=e[0],r=1,n=arguments.length;r<n;r++)t+=arguments[r]+e[r];return t}(...e))},string(e){for(const t of e.split(/[\\r\\n]+/))if(t.trim().length){/^(\\s+)/.test(t)&&(e=e.replace(new RegExp("^"+RegExp.$1,"gm"),""));break}return e}},Ee=(e,...t)=>Se[typeof e](e,...t),{isArray:Pe}=Array,{assign:Ae,create:$e,defineProperties:Me,defineProperty:je,entries:ke}=Object,{all:xe,resolve:Te}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),_e=(e,t=location.href)=>new URL(e,t.replace(/^blob:/,"")).href,Oe=(e,t,r=!1,n=CustomEvent)=>{e.dispatchEvent(new n(`${t}:ready`,{bubbles:!0,detail:{worker:r}}))};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Fe=e=>e.arrayBuffer(),Re=e=>e.json(),We=e=>e.text(),Be=new WeakMap,Je=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Be.set(t,r),t}}},Ce=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},Ie=e=>{const t=e.split("/");return t.pop(),t.join("/")},Le=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},He=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},De=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ne=new WeakMap,Ue=(e,t,r)=>xe((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Pe(n))return n.map((r=>({url:De([e,r]),path:De([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:De([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(_e(t,Ne.get(e))))(r,n).then(Fe).then((r=>e.writeFile(t,s,r)))))),ze=(e,t,r)=>{e.registerJsModule(t,r)},qe=(e,t,...r)=>{try{return e.runPython(Ee(t),...r)}catch(t){Be.get(e).stderr(t)}},Ke=async(e,t,...r)=>{try{return await e.runPythonAsync(Ee(t),...r)}catch(t){Be.get(e).stderr(t)}},Ye=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){Be.get(e).stderr(t)}};var Ge={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Je();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Ue(this,a,t.fetch),a},registerJSModule:ze,run:qe,runAsync:Ke,runEvent:Ye,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>Ce({FS:e,PATH:t,PATH_FS:r},n,s)};const Ve={dict_converter:Object.fromEntries};var Qe={type:"pyodide",module:(e="0.23.4")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Je(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Ue(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:ze,run:qe,runAsync:Ke,runEvent:Ye,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(Ve):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>Ce({FS:e,PATH:t,PATH_FS:r},n,s)};const Xe="ruby-wasm-wasi",Ze=Xe.replace(/\\W+/g,"_");var et={type:Xe,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Ue(this,o,t.fetch),o},registerJSModule(e,t,r){const n=`__module_${Ze}_${t}`;globalThis[n]=r,this.run(e,`require "js";$${t}=JS.global[:${n}]`),delete globalThis[n]},run:(e,t,...r)=>e.eval(Ee(t),...r),runAsync:(e,t,...r)=>e.evalAsync(Ee(t),...r),async runEvent(e,t,r){if(/^xworker\\.(on\\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${Ze}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${Xe}`)}};var tt={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Je(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Ue(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{e.global.set(t,r)},run:(e,t,...r)=>{try{return e.doStringSync(Ee(t),...r)}catch(t){Be.get(e).stderr(t)}},runAsync:async(e,t,...r)=>{try{return await e.doString(Ee(t),...r)}catch(t){Be.get(e).stderr(t)}},runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){Be.get(e).stderr(t)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(Le(e,Ie(t)),t=He(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const rt=new Map,nt=new Map,st=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=rt.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{nt.set(t,e);const a=e?.fetch;return a&&Ne.set(a,o),s(n,e,r)}))}}),ot=e=>{for(const t of[].concat(e.type))rt.set(t,e)};for(const e of[Ge,Qe,et,tt])ot(e);const at=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),it=(e,t,r={})=>{if(t){const[e,n]=(e=>{let t=typeof e;return"string"===t&&/\\.(json|toml|txt)$/.test(e)?t=RegExp.$1:e="./config.txt",[_e(e),t]})(t);if("json"===n)r=fetch(e).then(Re);else if("toml"===n)r=fetch(e).then(We).then(at);else if("string"===n)try{r=JSON.parse(t)}catch(e){r=at(t)}else"object"===n&&t&&(r=t);t=e}return Te(r).then((r=>st[e](r,t)))};try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let ct,lt,ut;const ft=(e,t)=>{addEventListener(e,t||(async t=>{try{await ct,lt(`xworker.on${e}`,t)}catch(e){postMessage(e)}}),!!t&&{once:!0})},{parse:pt,stringify:dt}=f,{proxy:gt,window:yt,isWindowProxy:wt}=ve(self,{parse:pt,stringify:dt,transform:e=>ut?ut(e):e}),ht={sync:gt,window:yt,isWindowProxy:wt,onmessage:console.info,onerror:console.error,onmessageerror:console.warn,postMessage:postMessage.bind(self)};ft("message",(({data:{options:e,config:t,code:r,hooks:n}})=>{ct=(async()=>{try{const{id:s,tag:o,type:a,custom:i,version:c,config:l,async:u}=e,f=await it(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(a,c),t,l),p=$e(rt.get(a)),d="run"+(u?"Async":"");if(n){const{beforeRun:e,beforeRunAsync:t,afterRun:r,afterRunAsync:s}=n,o=r||s,a=e||t;if(o){const e=p[d].bind(p);p[d]=(t,r,...n)=>e(t,`${r}\\n${o}`,...n)}if(a){const e=p[d].bind(p);p[d]=(t,r,...n)=>e(t,`${a}\\n${r}`,...n)}}const{CustomEvent:g,document:y}=yt,w=s&&y.getElementById(s)||null;let h="";return p.registerJSModule(f,"polyscript",{xworker:ht,get target(){return!h&&w&&("SCRIPT"===o?w.after(Ae(y.createElement(`script-${i||a}`),{id:h=`${s}-target`})):(h=s,w.replaceChildren(),w.style.display="block")),h}}),lt=p.runEvent.bind(p,f),ut=p.transform.bind(p,f),w&&Oe(w,i||a,!0,g),await p[d](f,r),f}catch(e){postMessage(e)}})(),ft("error"),ft("message"),ft("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:s}=n,o=this instanceof ht;if(e.length){const[t,n]=e;(r=je({},r||{type:t,version:n})).type||(r.type=t)}const[a]=pt(r.config),i=fetch(t).then(ke).then((e=>{const t=o?this.stringHooks:void 0;s.call(n,{options:r,config:a,code:e,hooks:t})}));return _e(n,{postMessage:{value:(e,...t)=>i.then((()=>s.call(n,e,...t)))},sync:{value:Se(n,d).proxy},onerror:{writable:!0,configurable:!0,value:console.error}}),o&&this.onWorkerReady?.(this.interpreter,n),n.addEventListener("message",(e=>{const{data:t}=e;t instanceof Error&&(e.stopImmediatePropagation(),n.onerror(Object.create(e,{type:{value:"error"},error:{value:t}})))})),n};const mt="Invalid content",bt="Invalid worker attribute",vt="Invalid worker attribute";var Et=e=>{const{src:t,worker:r}=e.attributes;if(r){let{value:n}=r;if(n)throw new SyntaxError(vt);if(n=t?.value,!n){if(t)throw new SyntaxError(bt);if(e.childElementCount){const{innerHTML:t,localName:r,type:s}=e,o=s||r.replace(/-script$/,"");console.warn(`Deprecated: use <script type="${o}"> for an always safe content parsing:\n`,t),n=t}else n=e.textContent;return URL.createObjectURL(new Blob([xe(n)],{type:"text/plain"}))}return n}if(t&&e.textContent.replace(/\/\*[\s\S]*?\*\//g,"").replace(/^\s*(?:\/\/|#).*/gm,"").trim())throw new SyntaxError(mt)};const St=(e,t)=>{const r=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(e);return r.getElementById(t)||((e,t=document)=>t.querySelector(e))(t,r)},At=new WeakMap,$t={get(){let e=At.get(this);return e||(e=document.createElement(`${this.type}-script`),At.set(this,e),Tt(this)),e},set(e){"string"==typeof e?At.set(this,St(this,e)):(At.set(this,e),Tt(this))}},kt=new WeakMap,Pt=new Map,xt=async(e,t,r,n)=>{const{type:s}=e,o=ot.get(s);o.experimental&&console.warn(`The ${s} interpreter is experimental`);const[a,i]=await We([kt.get(e).interpreter,t]);try{return Re(document,"currentScript",{configurable:!0,get:()=>e}),o.registerJSModule(a,"polyscript",{XWorker:r}),((e,t,r=!1,n=CustomEvent)=>{e.dispatchEvent(new n(`${t}:ready`,{bubbles:!0,detail:{worker:r}}))})(e,s),o[n?"runAsync":"run"](a,i)}finally{delete document.currentScript}},Mt=(e,t)=>{const r=e?.value;return r?t+r:""},jt=(e,t,r,n,s,o=e)=>{if(!Pt.has(t)){const a={interpreter:dt(r,s),queue:Fe(),XWorker:wt(e,n)};Pt.set(t,a),Pt.has(e)||Pt.set(e,a),Pt.has(o)||Pt.set(o,a)}return Pt.get(t)},Tt=async e=>{if(kt.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=gt(i,c);let u=Mt(r,"|");const f=Mt(n,"")||`${l}${u}`;u=u.slice(1);const p=Et(e);if(p){const r=new(wt(i,c))(p,{...Le(e,i),async:!!t,config:u});return void kt.set(Re(e,"xworker",{value:r}),{xworker:r})}const d=Mt(s,""),g=jt(i,f,l,c,u);kt.set(Re(e,"target",$t),g),d&&At.set(e,St(e,d));const y=a?fetch(a).then(ke):e.textContent;g.queue=g.queue.then((()=>xt(e,y,g.XWorker,!!t)))}},_t=new Proxy(Te(null),{get:(e,t)=>Rt(t)}),Rt=async e=>{if(Pt.has(e)){const{interpreter:t,queue:r}=Pt.get(e);return(await We([t,r]))[0]}const t=Pt.size?`Available interpreters are: ${[...Pt.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},Ot=async e=>{const{type:r,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of t(`./@*[${ct.map((e=>`name()="${e}${r}"`)).join(" or ")}]`,n)){s=s.slice(0,-(r.length+1));const t=await Rt(a.getAttribute(`${s}-env`)||s);ot.get(s).runEvent(t,o,e)}},Wt=e=>{for(let{name:r,ownerElement:n}of t(`.//@*[${ct.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))r=r.slice(r.lastIndexOf("-")+1),"env"!==r&&n.addEventListener(r,Ot)},Ft=[],Bt=new Map,It=new Map,Lt=e=>{for(const t of Ft)if(e.matches(t)){const r=Bt.get(t),{resolve:n}=It.get(r),{options:s,known:o}=Jt.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,config:a,version:i,env:c,onInterpreterReady:l,onerror:u}=s;let f;try{const o=Et(e);if(o){const c=Ht.call(new ht(null,s),o,{...Le(e,r),version:i,type:t,custom:r,config:e.getAttribute("config")||a||{},async:e.hasAttribute("async")});return Re(e,"xworker",{value:c}),void n({type:r,xworker:c})}}catch(e){f=e}const p=gt(t,i),d=c||`${p}${a?`|${a}`:""}`,{interpreter:g,XWorker:y}=jt(r,d,p,i,a,t);g.then((o=>{const a=Te(ot.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:d,onAfterRunAsync:g}=s,h=new ht(o,s),w=function(...e){return y.apply(h,e)};for(const[t,[r,n]]of[["run",[i,d]]]){const s=a[t];a[t]=function(t,o,...a){r&&r.call(this,m,e);const i=s.call(this,t,o,...a);return n&&n.call(this,m,e),i}}for(const[t,[r,n]]of[["runAsync",[c,g]]]){const s=a[t];a[t]=async function(t,o,...a){r&&await r.call(this,m,e);const i=await s.call(this,t,o,...a);return n&&await n.call(this,m,e),i}}a.registerJSModule(o,"polyscript",{XWorker:w});const m={type:r,interpreter:o,XWorker:w,io:Je.get(o),config:structuredClone(at.get(p)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o),runEvent:a.runEvent.bind(a,o)};n(m),f&&u?.(f,e),l?.(m,e)}))}}},Jt=new Map;let Ct=0;const Nt=(t,r)=>{let n=null==t;if(n)t="_ps"+Ct++;else if(ot.has(t)||Jt.has(t))throw new Error(`<script type="${t}"> already registered`);if(!ot.has(r?.interpreter))throw new Error("Unspecified interpreter");ot.set(t,ot.get(r.interpreter));const s=[`script[type="${t}"]`];if(Dt(t),n){const{onInterpreterReady:e}=r;r={...r,onInterpreterReady(r,n){Ft.splice(Ft.indexOf(t),1),ot.delete(t),Jt.delete(t),It.delete(t),n.remove(),e?.(r)}},document.head.append(je(document.createElement("script"),{type:t}))}else s.push(`${t}-script`),ct.push(`${t}-`);for(const e of s)Bt.set(e,t);Ft.push(...s),Jt.set(t,{options:je({env:t},r),known:new WeakSet}),n||Wt(document),e(s.join(",")).forEach(Lt)},Dt=e=>(It.has(e)||It.set(e,Promise.withResolvers()),It.get(e).promise),Ht=wt(),Ut=it.join(","),qt=new MutationObserver((t=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of t)if("attributes"!==r){for(const t of o)if(1===t.nodeType)if(Wt(t),t.matches(Ut))Tt(t);else{if(e(Ut,t).forEach(Tt),!Ft.length)continue;Lt(t),e(Ft.join(","),t).forEach(Lt)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of ct)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,Ot)}break}}}})),zt=e=>(qt.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:Qt}=Element.prototype;je(Element.prototype,{attachShadow(e){return zt(Qt.call(this,e))}}),Wt(zt(document)),e(Ut,document).forEach(Tt);export{mt as INVALID_CONTENT,bt as INVALID_SRC_ATTR,vt as INVALID_WORKER_ATTR,Ht as XWorker,Nt as define,_t as env,Dt as whenDefined};
//# sourceMappingURL=core.js.map
