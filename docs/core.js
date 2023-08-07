const e=(e,t=document)=>[...t.querySelectorAll(e)],t=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const n=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return n(new r[e](t),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new r[a](i),o)};return s})(new Map,e)(0),s="",{toString:o}={},{keys:a}=Object,i=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=o.call(e).slice(8,-1);switch(r){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},c=([e,t])=>0===e&&("function"===t||"symbol"===t),l=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[l,u]=i(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([l,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([l,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([l,r],n);for(const t of a(n))!e&&c(i(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([l,{source:e,flags:t}],n)}case 5:{const t=[],r=s([l,t],n);for(const[r,s]of n)(e||!c(i(r))&&!c(i(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([l,t],n);for(const r of n)!e&&c(i(r))||t.push(o(r));return r}}const{message:f}=n;return s([l,{name:u,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:u,stringify:f}=JSON,p={json:!0,lossy:!0};var d=Object.freeze({__proto__:null,parse:e=>n(u(e)),stringify:e=>f(l(e,p))});const h="0811fd41-1b6b-49f1-8344-96210ac283f1",g="M"+h,y="T"+h;var w=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:m,Map:b,SharedArrayBuffer:v,Uint16Array:E}=globalThis,{BYTES_PER_ELEMENT:S}=m,{BYTES_PER_ELEMENT:A}=E,{isArray:P}=Array,{notify:$,wait:M,waitAsync:k}=Atomics,{fromCharCode:j}=String,_=(e,t)=>e?(k||w)(t,0):(M(t,0),{value:{then:e=>e()}}),O=new WeakSet,x=new WeakMap;let T=0;const W=(e,{parse:t,stringify:r,transform:n}=JSON)=>{if(!x.has(e)){const s=(t,...r)=>e.postMessage({[h]:r},{transfer:t});x.set(e,new Proxy(new b,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,o)=>"then"===o?null:(...r)=>{const a=T++;let i=new m(new v(S)),c=[];O.has(r.at(-1)||c)&&O.delete(c=r.pop()),s(c,a,i,o,n?r.map(n):r);const l=e!==globalThis;return _(l,i).value.then((()=>{const e=i[0];if(!e)return;const r=A*e;return i=new m(new v(r+r%S)),s([],a,i),_(l,i).value.then((()=>t(j(...new E(i.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new b;e.addEventListener("message",(async e=>{const s=e.data?.[h];if(P(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=await t.get(e)(...s);if(void 0!==i){const e=r(i);n.set(o,e),a[0]=e.length}}}else{const e=n.get(o);n.delete(o);for(let t=new E(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}$(a,0)}}))}return!!t.set(n,s)}}))}return x.get(e)};W.transfer=(...e)=>(O.add(e),e);const R="object",F="function",B="number",L="string",J="undefined",I="symbol",{defineProperty:H,getOwnPropertyDescriptor:C,getPrototypeOf:N,isExtensible:D,ownKeys:U,preventExtensions:z,set:q,setPrototypeOf:Q}=Reflect,{assign:X,create:G}=Object,Y=N(Int8Array),K="isArray",V=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},Z=(e,t)=>[e,t],ee=e=>t=>{const r=typeof t;switch(r){case R:if(null==t)return Z("null",t);if(t===globalThis)return Z(R,null);case F:return e(r,t);case"boolean":case B:case L:case J:case"bigint":return Z(r,t);case I:if(te.has(t))return Z(r,te.get(t))}throw new Error(`Unable to handle this ${r} type`)},te=new Map(U(Symbol).filter((e=>typeof Symbol[e]===I)).map((e=>[Symbol[e],e]))),re=e=>{for(const[t,r]of te)if(r===e)return t};function ne(){return this}const se="apply",oe="construct",ae="defineProperty",ie="deleteProperty",ce="get",le="getOwnPropertyDescriptor",ue="getPrototypeOf",fe="has",pe="isExtensible",de="ownKeys",he="preventExtensions",ge="set",ye="setPrototypeOf",we="delete";var me=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;H(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?X(G(globalThis),...a):globalThis,p=ee(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return Z(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(we,Z(L,e))})),h=([e,r])=>{switch(e){case R:if(null==r)return f;if(typeof r===B)return l.get(r);if(!(r instanceof Y))for(const e in r)r[e]=h(r[e]);return r;case F:if(typeof r===L){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(se,Z(F,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case I:return re(r)}return r},g={[se]:(e,t,r)=>p(e.apply(t,r)),[oe]:(e,t)=>p(new e(...t)),[ae]:(e,t,r)=>p(H(e,t,r)),[ie]:(e,t)=>p(delete e[t]),[ue]:e=>p(N(e)),[ce]:(e,t)=>p(e[t]),[le]:(e,t)=>{const r=C(e,t);return r?Z(R,V(r,p)):Z(J,r)},[fe]:(e,t)=>p(t in e),[pe]:e=>p(D(e)),[de]:e=>Z(R,U(e).map(p)),[he]:e=>p(z(e)),[ge]:(e,t,r)=>p(q(e,t,r)),[ye]:(e,t)=>p(Q(e,t)),[we](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case se:r[0]=h(r[0]),r[1]=r[1].map(h);break;case oe:r[0]=r[0].map(h);break;case ae:{const[e,t]=r;r[0]=h(e);const{get:n,set:s,value:o}=t;n&&(t.get=h(n)),s&&(t.set=h(s)),o&&(t.value=h(o));break}default:r=r.map(h)}return g[e](h(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),be=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===F?e():e,a=e=>typeof e===R&&!!e&&s in e,i=Array[K],c=ee(((e,a)=>{if(s in a)return o(a[s]);if(e===F){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return Z(e,r.get(a))}if(!(a instanceof Y))for(const e in a)a[e]=c(a[e]);return Z(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(we,c(e))})),h=e=>{const[t,r]=e;if(!p.has(r)){const n=t===F?ne.bind(e):e,s=new Proxy(n,w),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},g=e=>{const[t,r]=e;switch(t){case R:return null===r?globalThis:typeof r===B?h(e):r;case F:return typeof r===L?n.get(r):h(e);case I:return re(r)}return r},y=(e,t,...r)=>g(f(e,o(t),...r)),w={[se]:(e,t,r)=>y(se,e,c(t),r.map(c)),[oe]:(e,t)=>y(oe,e,t.map(c)),[ae]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===F&&(r.get=c(n)),typeof s===F&&(r.set=c(s)),typeof o===F&&(r.value=c(o)),y(ae,e,c(t),r)},[ie]:(e,t)=>y(ie,e,c(t)),[ue]:e=>y(ue,e),[ce]:(e,t)=>t===s?e:y(ce,e,c(t)),[le]:(e,t)=>{const r=y(le,e,c(t));return r&&V(r,g)},[fe]:(e,t)=>t===s||y(fe,e,c(t)),[pe]:e=>y(pe,e),[de]:e=>y(de,e).map(g),[he]:e=>y(he,e),[ge]:(e,t,r)=>y(ge,e,c(t),c(r)),[ye]:(e,t)=>y(ye,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case se:return g(t).apply(g(s),o.map(g));case we:{const e=g(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([R,null],w),b=m.Array[K];return H(Array,K,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window");const ve=new WeakMap,Ee=(e,...t)=>{const r=W(e,...t);if(!ve.has(r)){const t=e instanceof Worker?me:be;ve.set(r,t(r,g,y))}return ve.get(r)};Ee.transfer=W.transfer;(({prototype:e},t)=>{if(!(t in e)){const{construct:r}=Reflect;Object.defineProperty(e,t,{configurable:!0,value(){return r(this,arguments)}})}})(Function,"new");const{isArray:Se}=Array,{assign:Ae,create:Pe,defineProperties:$e,defineProperty:Me,entries:ke}=Object,{all:je,resolve:_e}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Oe=(e,t=location.href)=>new URL(e,t).href,xe=e=>e.arrayBuffer(),Te=e=>e.json(),We=e=>e.text(),Re=[["beforeRun","codeBeforeRunWorker"],["beforeRunAsync","codeBeforeRunWorkerAsync"],["afterRun","codeAfterRunWorker"],["afterRunAsync","codeAfterRunWorkerAsync"]];class Fe{constructor(e,t){this.interpreter=e,this.onWorkerReady=t.onWorkerReady;for(const[e,r]of Re)this[e]=t[r]?.()}get stringHooks(){const e={};for(const[t]of Re)this[t]&&(e[t]=this[t]);return e}}var Be=(...e)=>function(t,r){const n=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))});const p="0811fd41-1b6b-49f1-8344-96210ac283f1",d="M"+p,g="T"+p;var y=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:h,SharedArrayBuffer:m,Uint16Array:b}=globalThis,{BYTES_PER_ELEMENT:v}=w,{BYTES_PER_ELEMENT:S}=b,{isArray:P}=Array,{notify:A,wait:E,waitAsync:M}=Atomics,{fromCharCode:j}=String,$=(e,t)=>e?(M||y)(t,0):(E(t,0),{value:{then:e=>e()}}),_=new WeakSet,x=new WeakMap;let k=0;const T=(e,{parse:t,stringify:r,transform:n}=JSON)=>{if(!x.has(e)){const s=(t,...r)=>e.postMessage({[p]:r},{transfer:t});x.set(e,new Proxy(new h,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,o)=>"then"===o?null:(...r)=>{const a=k++;let i=new w(new m(v)),c=[];_.has(r.at(-1)||c)&&_.delete(c=r.pop()),s(c,a,i,o,n?r.map(n):r);const l=e!==globalThis;return $(l,i).value.then((()=>{const e=i[0];if(!e)return;const r=S*e;return i=new w(new m(r+r%v)),s([],a,i),$(l,i).value.then((()=>t(j(...new b(i.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new h;e.addEventListener("message",(async e=>{const s=e.data?.[p];if(P(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=await t.get(e)(...s);if(void 0!==i){const e=r(i);n.set(o,e),a[0]=e.length}}}else{const e=n.get(o);n.delete(o);for(let t=new b(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}A(a,0)}}))}return!!t.set(n,s)}}))}return x.get(e)};T.transfer=(...e)=>(_.add(e),e);const O="object",F="function",W="number",R="string",B="undefined",J="symbol",{defineProperty:L,getOwnPropertyDescriptor:I,getPrototypeOf:H,isExtensible:C,ownKeys:D,preventExtensions:N,set:U,setPrototypeOf:z}=Reflect,{assign:q,create:K}=Object,Y=H(Int8Array),G="isArray",V=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},Q=(e,t)=>[e,t],X=e=>t=>{const r=typeof t;switch(r){case O:if(null==t)return Q("null",t);if(t===globalThis)return Q(O,null);case F:return e(r,t);case"boolean":case W:case R:case B:case"bigint":return Q(r,t);case J:if(Z.has(t))return Q(r,Z.get(t))}throw new Error(`Unable to handle this ${r} type`)},Z=new Map(D(Symbol).filter((e=>typeof Symbol[e]===J)).map((e=>[Symbol[e],e]))),ee=e=>{for(const[t,r]of Z)if(r===e)return t};function te(){return this}const re="apply",ne="construct",se="defineProperty",oe="deleteProperty",ae="get",ie="getOwnPropertyDescriptor",ce="getPrototypeOf",le="has",ue="isExtensible",fe="ownKeys",pe="preventExtensions",de="set",ge="setPrototypeOf",ye="delete";var we=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;L(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?q(K(globalThis),...a):globalThis,p=X(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return Q(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(ye,Q(R,e))})),g=([e,r])=>{switch(e){case O:if(null==r)return f;if(typeof r===W)return l.get(r);if(!(r instanceof Y))for(const e in r)r[e]=g(r[e]);return r;case F:if(typeof r===R){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(re,Q(F,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case J:return ee(r)}return r},y={[re]:(e,t,r)=>p(e.apply(t,r)),[ne]:(e,t)=>p(new e(...t)),[se]:(e,t,r)=>p(L(e,t,r)),[oe]:(e,t)=>p(delete e[t]),[ce]:e=>p(H(e)),[ae]:(e,t)=>p(e[t]),[ie]:(e,t)=>{const r=I(e,t);return r?Q(O,V(r,p)):Q(B,r)},[le]:(e,t)=>p(t in e),[ue]:e=>p(C(e)),[fe]:e=>Q(O,D(e).map(p)),[pe]:e=>p(N(e)),[de]:(e,t,r)=>p(U(e,t,r)),[ge]:(e,t)=>p(z(e,t)),[ye](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case re:r[0]=g(r[0]),r[1]=r[1].map(g);break;case ne:r[0]=r[0].map(g);break;case se:{const[e,t]=r;r[0]=g(e);const{get:n,set:s,value:o}=t;n&&(t.get=g(n)),s&&(t.set=g(s)),o&&(t.value=g(o));break}default:r=r.map(g)}return y[e](g(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),he=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===F?e():e,a=e=>typeof e===O&&!!e&&s in e,i=Array[G],c=X(((e,a)=>{if(s in a)return o(a[s]);if(e===F){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return Q(e,r.get(a))}if(!(a instanceof Y))for(const e in a)a[e]=c(a[e]);return Q(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(ye,c(e))})),g=e=>{const[t,r]=e;if(!p.has(r)){const n=t===F?te.bind(e):e,s=new Proxy(n,h),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},y=e=>{const[t,r]=e;switch(t){case O:return null===r?globalThis:typeof r===W?g(e):r;case F:return typeof r===R?n.get(r):g(e);case J:return ee(r)}return r},w=(e,t,...r)=>y(f(e,o(t),...r)),h={[re]:(e,t,r)=>w(re,e,c(t),r.map(c)),[ne]:(e,t)=>w(ne,e,t.map(c)),[se]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===F&&(r.get=c(n)),typeof s===F&&(r.set=c(s)),typeof o===F&&(r.value=c(o)),w(se,e,c(t),r)},[oe]:(e,t)=>w(oe,e,c(t)),[ce]:e=>w(ce,e),[ae]:(e,t)=>t===s?e:w(ae,e,c(t)),[ie]:(e,t)=>{const r=w(ie,e,c(t));return r&&V(r,y)},[le]:(e,t)=>t===s||w(le,e,c(t)),[ue]:e=>w(ue,e),[fe]:e=>w(fe,e).map(y),[pe]:e=>w(pe,e),[de]:(e,t,r)=>w(de,e,c(t),c(r)),[ge]:(e,t)=>w(ge,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case re:return y(t).apply(y(s),o.map(y));case ye:{const e=y(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([O,null],h),b=m.Array[G];return L(Array,G,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window");const me=new WeakMap,be=(e,...t)=>{const r=T(e,...t);if(!me.has(r)){const t=e instanceof Worker?we:he;me.set(r,t(r,d,g))}return me.get(r)};be.transfer=T.transfer,(({prototype:e},t)=>{if(!(t in e)){const{construct:r}=Reflect;Object.defineProperty(e,t,{configurable:!0,value(){return r(this,arguments)}})}})(Function,"new");const{isArray:ve}=Array,{assign:Se,create:Pe,defineProperties:Ae,defineProperty:Ee,entries:Me}=Object,{all:je,resolve:$e}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),_e=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const xe=e=>e.arrayBuffer(),ke=e=>e.json(),Te=e=>e.text(),Oe=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),Fe=new WeakMap,We=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Fe.set(t,r),t}}},Re=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},Be=e=>{const t=e.split("/");return t.pop(),t.join("/")},Je=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},Le=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},Ie=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},He=new WeakMap,Ce=(e,t,r)=>je((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(ve(n))return n.map((r=>({url:Ie([e,r]),path:Ie([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Ie([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(_e(t,He.get(e))))(r,n).then(xe).then((r=>e.writeFile(t,s,r)))))),De=(e,t,r)=>{e.registerJsModule(t,r)},Ne=(e,t)=>e.runPython(Oe(t)),Ue=(e,t)=>e.runPythonAsync(Oe(t)),ze=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)};var qe={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=We();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Ce(this,a,t.fetch),a},registerJSModule:De,run:Ne,runAsync:Ue,runEvent:ze,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>Re({FS:e,PATH:t,PATH_FS:r},n,s)};const Ke={dict_converter:Object.fromEntries};var Ye={type:"pyodide",module:(e="0.23.4")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=We(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Ce(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:De,run:Ne,runAsync:Ue,runEvent:ze,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(Ke):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>Re({FS:e,PATH:t,PATH_FS:r},n,s)};const Ge="ruby-wasm-wasi",Ve=Ge.replace(/\\W+/g,"_");var Qe={type:Ge,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Ce(this,o,t.fetch),o},registerJSModule(e,t,r){const n=[\'require "js"\'];for(const[e,t]of Me(r)){const r=`__module_${Ve}_${e}`;globalThis[r]=t,n.push(`$${e}=JS.global[:${r}]`)}this.run(e,n.join(";"))},run:(e,t)=>e.eval(Oe(t)),runAsync:(e,t)=>e.evalAsync(Oe(t)),async runEvent(e,t,r){if(/^xworker\\.(on\\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${Ve}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${Ge}`)}};var Xe={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=We(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Ce(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{for(const[t,n]of Me(r))e.global.set(t,n)},run:(e,t)=>e.doStringSync(Oe(t)),runAsync:(e,t)=>e.doString(Oe(t)),runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(Je(e,Be(t)),t=Le(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const Ze=new Map,et=new Map,tt=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=Ze.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{et.set(t,e);const a=e?.fetch;return a&&He.set(a,o),s(n,e,r)}))}}),rt=e=>{for(const t of[].concat(e.type))Ze.set(t,e)};for(const e of[qe,Ye,Qe,Xe])rt(e);const nt=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let st,ot,at;const it=(e,t)=>{addEventListener(e,t||(async t=>{try{await st,ot(`xworker.on${e}`,t)}catch(e){postMessage(e)}}),!!t&&{once:!0})},{parse:ct,stringify:lt}=f,{proxy:ut,window:ft,isWindowProxy:pt}=be(self,{parse:ct,stringify:lt,transform:e=>at?at(e):e}),dt={sync:ut,window:ft,isWindowProxy:pt,onmessage:console.info,onerror:console.error,onmessageerror:console.warn,postMessage:postMessage.bind(self)};it("message",(({data:{options:e,config:t,code:r,hooks:n}})=>{st=(async()=>{try{const{type:s,version:o,config:a,async:i}=e,c=await((e,t,r={})=>{if(t)if(t.endsWith(".json"))r=fetch(t).then(ke),t=_e(t);else if(t.endsWith(".toml"))r=fetch(t).then(Te).then(nt),t=_e(t);else if(!t.endsWith(".txt")){try{r=JSON.parse(t)}catch(e){r=nt(t)}t=_e("./config.txt")}return $e(r).then((r=>tt[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(s,o),t,a),l=Pe(Ze.get(s)),u="run"+(i?"Async":"");if(n){const{beforeRun:e,beforeRunAsync:t,afterRun:r,afterRunAsync:s}=n,o=r||s,a=e||t;if(o){const e=l[u].bind(l);l[u]=(t,r)=>e(t,`${r}\\n${o}`)}if(a){const e=l[u].bind(l);l[u]=(t,r)=>e(t,`${a}\\n${r}`)}}return l.registerJSModule(c,"polyscript",{xworker:dt}),ot=l.runEvent.bind(l,c),at=l.transform.bind(l,c),await l[u](c,r),c}catch(e){postMessage(e)}})(),it("error"),it("message"),it("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:s}=n,o=this instanceof Fe;if(e.length){const[t,n]=e;(r=Ae({},r||{type:t,version:n})).type||(r.type=t)}const a=Oe("string"==typeof r.config?r.config:"./config.txt"),i=fetch(t).then(We).then((e=>{const t=o?this.stringHooks:void 0;s.call(n,{options:r,config:a,code:e,hooks:t})}));return $e(n,{postMessage:{value:(e,...t)=>i.then((()=>s.call(n,e,...t)))},sync:{value:Ee(n,d).proxy},onerror:{writable:!0,configurable:!0,value:console.error}}),o&&this.onWorkerReady?.(this.interpreter,n),n.addEventListener("message",(e=>{const{data:t}=e;t instanceof Error&&(e.stopImmediatePropagation(),n.onerror(Object.create(e,{type:{value:"error"},error:{value:t}})))})),n};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Le=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),Je=new WeakMap,Ie=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Je.set(t,r),t}}},He=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},Ce=e=>{const t=e.split("/");return t.pop(),t.join("/")},Ne=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},De=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},Ue=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},ze=new WeakMap,qe=(e,t,r)=>je((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Se(n))return n.map((r=>({url:Ue([e,r]),path:Ue([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Ue([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Oe(t,ze.get(e))))(r,n).then(xe).then((r=>e.writeFile(t,s,r)))))),Qe=(e,t,r)=>{e.registerJsModule(t,r)},Xe=(e,t)=>e.runPython(Le(t)),Ge=(e,t)=>e.runPythonAsync(Le(t)),Ye=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)};var Ke={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Ie();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await qe(this,a,t.fetch),a},registerJSModule:Qe,run:Xe,runAsync:Ge,runEvent:Ye,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>He({FS:e,PATH:t,PATH_FS:r},n,s)};const Ve={dict_converter:Object.fromEntries};var Ze={type:"pyodide",module:(e="0.23.4")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Ie(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:Qe,run:Xe,runAsync:Ge,runEvent:Ye,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(Ve):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>He({FS:e,PATH:t,PATH_FS:r},n,s)};const et="ruby-wasm-wasi",tt=et.replace(/\W+/g,"_");var rt={type:et,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await qe(this,o,t.fetch),o},registerJSModule(e,t,r){const n=['require "js"'];for(const[e,t]of ke(r)){const r=`__module_${tt}_${e}`;globalThis[r]=t,n.push(`$${e}=JS.global[:${r}]`)}this.run(e,n.join(";"))},run:(e,t)=>e.eval(Le(t)),runAsync:(e,t)=>e.evalAsync(Le(t)),async runEvent(e,t,r){if(/^xworker\.(on\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${tt}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${et}`)}};var nt={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Ie(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await qe(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{for(const[t,n]of ke(r))e.global.set(t,n)},run:(e,t)=>e.doStringSync(Le(t)),runAsync:(e,t)=>e.doString(Le(t)),runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(Ne(e,Ce(t)),t=De(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const st=new Map,ot=new Map,at=[],it=[],ct=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=st.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ot.set(t,e);const a=e?.fetch;return a&&ze.set(a,o),s(n,e,r)}))}}),lt=e=>{for(const t of[].concat(e.type))st.set(t,e),at.push(`script[type="${t}"]`),it.push(`${t}-`)};for(const e of[Ke,Ze,rt,nt])lt(e);const ut=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),ft=(e,t,r={})=>{if(t)if(t.endsWith(".json"))r=fetch(t).then(Te),t=Oe(t);else if(t.endsWith(".toml"))r=fetch(t).then(We).then(ut),t=Oe(t);else if(!t.endsWith(".txt")){try{r=JSON.parse(t)}catch(e){r=ut(t)}t=Oe("./config.txt")}return _e(r).then((r=>ct[e](r,t)))},pt=(e,t="")=>`${e}@${t}`.replace(/@$/,""),dt=(e,t)=>{const r=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(e);return r.getElementById(t)||((e,t=document)=>t.querySelector(e))(t,r)},ht=new WeakMap,gt={get(){let e=ht.get(this);return e||(e=document.createElement(`${this.type}-script`),ht.set(this,e),vt(this)),e},set(e){"string"==typeof e?ht.set(this,dt(this,e)):(ht.set(this,e),vt(this))}},yt=new WeakMap,wt=new Map,mt=(e,t)=>{const r=e?.value;return r?t+r:""},bt=(e,t,r,n,s)=>{if(!wt.has(t)){const o={interpreter:ft(r,s),queue:_e(),XWorker:Be(e,n)};wt.set(t,o),wt.has(e)||wt.set(e,o)}return wt.get(t)},vt=async e=>{if(yt.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=pt(i,c),u=mt(s,"");let f=mt(r,"|");const p=mt(n,"")||`${l}${f}`;f=f.slice(1);const d=bt(i,p,l,c,f);yt.set(Me(e,"target",gt),d),u&&ht.set(e,dt(e,u));const h=a?fetch(a).then(We):e.textContent;d.queue=d.queue.then((()=>(async(e,t,r,n)=>{const s=st.get(e.type);s.experimental&&console.warn(`The ${e.type} interpreter is experimental`);const[o,a]=await je([yt.get(e).interpreter,t]);try{return Me(document,"currentScript",{configurable:!0,get:()=>e}),s.registerJSModule(o,"polyscript",{XWorker:r}),s[n?"runAsync":"run"](o,a)}finally{delete document.currentScript}})(e,h,d.XWorker,!!t)))}},Et=new Proxy(Pe(null),{get:(e,t)=>St(t)}),St=async e=>{if(wt.has(e)){const{interpreter:t,queue:r}=wt.get(e);return(await je([t,r]))[0]}const t=wt.size?`Available interpreters are: ${[...wt.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},At=async e=>{const{type:r,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of t(`./@*[${it.map((e=>`name()="${e}${r}"`)).join(" or ")}]`,n)){s=s.slice(0,-(r.length+1));const t=await St(a.getAttribute(`${s}-env`)||s);st.get(s).runEvent(t,o,e)}},Pt=e=>{for(let{name:r,ownerElement:n}of t(`.//@*[${it.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))r=r.slice(r.lastIndexOf("-")+1),"env"!==r&&n.addEventListener(r,At)},$t=[],Mt=new Map,kt=new Map,jt=e=>{for(const t of $t)if(e.matches(t)){const r=Mt.get(t),{resolve:n}=kt.get(r),{options:s,known:o}=_t.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,version:a,config:i,env:c,onInterpreterReady:l}=s,u=pt(t,a),f=c||`${u}${i?`|${i}`:""}`,{interpreter:p,XWorker:d}=bt(t,f,u,a,i);p.then((o=>{const a=Pe(st.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:f,onAfterRunAsync:p}=s,h=new Fe(o,s),g=function(...e){return d.apply(h,e)};for(const[t,[r,n]]of[["run",[i,f]]]){const s=a[t];a[t]=function(t,o){r&&r.call(this,y,e);const a=s.call(this,t,o);return n&&n.call(this,y,e),a}}for(const[t,[r,n]]of[["runAsync",[c,p]]]){const s=a[t];a[t]=async function(t,o){r&&await r.call(this,y,e);const a=await s.call(this,t,o);return n&&await n.call(this,y,e),a}}a.registerJSModule(o,"polyscript",{XWorker:g});const y={type:r,interpreter:o,XWorker:g,io:Je.get(o),config:structuredClone(ot.get(u)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o),runEvent:a.runEvent.bind(a,o)};n(y),l?.(y,e)}))}}},_t=new Map,Ot=(t,r)=>{if(st.has(t)||_t.has(t))throw new Error(`<script type="${t}"> already registered`);if(!st.has(r?.interpreter))throw new Error("Unspecified interpreter");st.set(t,st.get(r?.interpreter)),xt(t);const n=[`script[type="${t}"]`,`${t}-script`];for(const e of n)Mt.set(e,t);$t.push(...n),it.push(`${t}-`),_t.set(t,{options:Ae({env:t},r),known:new WeakSet}),Pt(document),e(n.join(",")).forEach(jt)},xt=e=>(kt.has(e)||kt.set(e,Promise.withResolvers()),kt.get(e).promise),Tt=Be(),Wt=at.join(","),Rt=new MutationObserver((t=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of t)if("attributes"!==r){for(const t of o)if(1===t.nodeType)if(Pt(t),t.matches(Wt))vt(t);else{if(e(Wt,t).forEach(vt),!$t.length)continue;jt(t),e($t.join(","),t).forEach(jt)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of it)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,At)}break}}}})),Ft=e=>(Rt.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:Bt}=Element.prototype;Ae(Element.prototype,{attachShadow(e){return Ft(Bt.call(this,e))}}),Pt(Ft(document)),e(Wt,document).forEach(vt);export{Tt as XWorker,Ot as define,Et as env,xt as whenDefined};
