const e=(e,t=document)=>[...t.querySelectorAll(e)],t=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const n=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return n(new r[e](t),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new r[a](i),o)};return s})(new Map,e)(0),s="",{toString:o}={},{keys:a}=Object,i=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=o.call(e).slice(8,-1);switch(r){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},c=([e,t])=>0===e&&("function"===t||"symbol"===t),l=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[l,u]=i(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([l,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([l,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([l,r],n);for(const t of a(n))!e&&c(i(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([l,{source:e,flags:t}],n)}case 5:{const t=[],r=s([l,t],n);for(const[r,s]of n)(e||!c(i(r))&&!c(i(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([l,t],n);for(const r of n)!e&&c(i(r))||t.push(o(r));return r}}const{message:f}=n;return s([l,{name:u,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:u,stringify:f}=JSON,p={json:!0,lossy:!0};var d=Object.freeze({__proto__:null,parse:e=>n(u(e)),stringify:e=>f(l(e,p))});const y="891249cd-eb53-4bc8-ae48-b0a5a277d24a",h="M"+y,g="T"+y;var w=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:m,Map:b,SharedArrayBuffer:v,Uint16Array:E}=globalThis,{BYTES_PER_ELEMENT:S}=m,{BYTES_PER_ELEMENT:A}=E,{isArray:k}=Array,{notify:$,wait:P,waitAsync:M}=Atomics,{fromCharCode:j}=String,x=(e,t)=>e?(M||w)(t,0):(P(t,0),{value:{then:e=>e()}}),T=new WeakSet,_=new WeakMap;let W=0;const O=(e,{parse:t,stringify:r,transform:n}=JSON)=>{if(!_.has(e)){const s=(t,...r)=>e.postMessage({[y]:r},{transfer:t});let o=!1;_.set(e,new Proxy(new b,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,a)=>"then"===a?null:(...r)=>{const i=W++;let c=new m(new v(S)),l=[];T.has(r.at(-1)||l)&&T.delete(l=r.pop()),s(l,i,c,a,n?r.map(n):r);const u=e!==globalThis;let f=0;return o&&u&&(f=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${a}(...args) is awaited`)),x(u,c).value.then((()=>{clearTimeout(f);const e=c[0];if(!e)return;const r=A*e;return c=new m(new v(r+r%S)),s([],i,c),x(u,c).value.then((()=>t(j(...new E(c.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new b;e.addEventListener("message",(async e=>{const s=e.data?.[y];if(k(s)){e.stopImmediatePropagation();const[a,i,...c]=s;if(c.length){const[e,s]=c;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);o=!0;try{const o=await t.get(e)(...s);if(void 0!==o){const e=r(o);n.set(a,e),i[0]=e.length}}finally{o=!1}}else{const e=n.get(a);n.delete(a);for(let t=new E(i.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}$(i,0)}}))}return!!t.set(n,s)}}))}return _.get(e)};O.transfer=(...e)=>(T.add(e),e);const R="object",F="function",L="number",B="string",J="undefined",I="symbol",{defineProperty:H,getOwnPropertyDescriptor:D,getPrototypeOf:N,isExtensible:C,ownKeys:U,preventExtensions:q,set:z,setPrototypeOf:Q}=Reflect,{assign:X,create:Y}=Object,V=N(Int8Array),G="isArray",K=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},Z=(e,t)=>[e,t],ee=e=>t=>{const r=typeof t;switch(r){case R:if(null==t)return Z("null",t);if(t===globalThis)return Z(R,null);case F:return e(r,t);case"boolean":case L:case B:case J:case"bigint":return Z(r,t);case I:if(te.has(t))return Z(r,te.get(t))}throw new Error(`Unable to handle this ${r} type`)},te=new Map(U(Symbol).filter((e=>typeof Symbol[e]===I)).map((e=>[Symbol[e],e]))),re=e=>{for(const[t,r]of te)if(r===e)return t};function ne(){return this}const se="apply",oe="construct",ae="defineProperty",ie="deleteProperty",ce="get",le="getOwnPropertyDescriptor",ue="getPrototypeOf",fe="has",pe="isExtensible",de="ownKeys",ye="preventExtensions",he="set",ge="setPrototypeOf",we="delete";var me=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;H(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?X(Y(globalThis),...a):globalThis,p=ee(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return Z(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(we,Z(B,e))})),y=([e,r])=>{switch(e){case R:if(null==r)return f;if(typeof r===L)return l.get(r);if(!(r instanceof V))for(const e in r)r[e]=y(r[e]);return r;case F:if(typeof r===B){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(se,Z(F,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case I:return re(r)}return r},h={[se]:(e,t,r)=>p(e.apply(t,r)),[oe]:(e,t)=>p(new e(...t)),[ae]:(e,t,r)=>p(H(e,t,r)),[ie]:(e,t)=>p(delete e[t]),[ue]:e=>p(N(e)),[ce]:(e,t)=>p(e[t]),[le]:(e,t)=>{const r=D(e,t);return r?Z(R,K(r,p)):Z(J,r)},[fe]:(e,t)=>p(t in e),[pe]:e=>p(C(e)),[de]:e=>Z(R,U(e).map(p)),[ye]:e=>p(q(e)),[he]:(e,t,r)=>p(z(e,t,r)),[ge]:(e,t)=>p(Q(e,t)),[we](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case se:r[0]=y(r[0]),r[1]=r[1].map(y);break;case oe:r[0]=r[0].map(y);break;case ae:{const[e,t]=r;r[0]=y(e);const{get:n,set:s,value:o}=t;n&&(t.get=y(n)),s&&(t.set=y(s)),o&&(t.value=y(o));break}default:r=r.map(y)}return h[e](y(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),be=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===F?e():e,a=e=>typeof e===R&&!!e&&s in e,i=Array[G],c=ee(((e,a)=>{if(s in a)return o(a[s]);if(e===F){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return Z(e,r.get(a))}if(!(a instanceof V))for(const e in a)a[e]=c(a[e]);return Z(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(we,c(e))})),y=e=>{const[t,r]=e;if(!p.has(r)){const n=t===F?ne.bind(e):e,s=new Proxy(n,w),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},h=e=>{const[t,r]=e;switch(t){case R:return null===r?globalThis:typeof r===L?y(e):r;case F:return typeof r===B?n.get(r):y(e);case I:return re(r)}return r},g=(e,t,...r)=>h(f(e,o(t),...r)),w={[se]:(e,t,r)=>g(se,e,c(t),r.map(c)),[oe]:(e,t)=>g(oe,e,t.map(c)),[ae]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===F&&(r.get=c(n)),typeof s===F&&(r.set=c(s)),typeof o===F&&(r.value=c(o)),g(ae,e,c(t),r)},[ie]:(e,t)=>g(ie,e,c(t)),[ue]:e=>g(ue,e),[ce]:(e,t)=>t===s?e:g(ce,e,c(t)),[le]:(e,t)=>{const r=g(le,e,c(t));return r&&K(r,h)},[fe]:(e,t)=>t===s||g(fe,e,c(t)),[pe]:e=>g(pe,e),[de]:e=>g(de,e).map(h),[ye]:e=>g(ye,e),[he]:(e,t,r)=>g(he,e,c(t),c(r)),[ge]:(e,t)=>g(ge,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case se:return h(t).apply(h(s),o.map(h));case we:{const e=h(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([R,null],w),b=m.Array[G];return H(Array,G,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window"),ve="function"==typeof Worker?Worker:class{};const Ee=new WeakMap,Se=(e,...t)=>{const r=O(e,...t);if(!Ee.has(r)){const t=e instanceof ve?me:be;Ee.set(r,t(r,h,g))}return Ee.get(r)};Se.transfer=O.transfer;const{isArray:Ae}=Array,{assign:ke,create:$e,defineProperties:Pe,defineProperty:Me,entries:je}=Object,{all:xe,resolve:Te}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),_e=(e,t=location.href)=>new URL(e,t).href,We=e=>e.arrayBuffer(),Oe=e=>e.json(),Re=e=>e.text(),Fe=[["beforeRun","codeBeforeRunWorker"],["beforeRunAsync","codeBeforeRunWorkerAsync"],["afterRun","codeAfterRunWorker"],["afterRunAsync","codeAfterRunWorkerAsync"]];class Le{constructor(e,t){this.interpreter=e,this.onWorkerReady=t.onWorkerReady;for(const[e,r]of Fe)this[e]=t[r]?.()}get stringHooks(){const e={};for(const[t]of Fe)this[t]&&(e[t]=this[t]);return e}}var Be=(...e)=>function(t,r){const n=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))});const p="891249cd-eb53-4bc8-ae48-b0a5a277d24a",d="M"+p,y="T"+p;var g=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,onmessage%3D(%7Bdata%3Ab%7D)%3D%3E(Atomics.wait(b%2C0)%2CpostMessage(0))");r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:h,SharedArrayBuffer:m,Uint16Array:b}=globalThis,{BYTES_PER_ELEMENT:v}=w,{BYTES_PER_ELEMENT:S}=b,{isArray:P}=Array,{notify:A,wait:E,waitAsync:M}=Atomics,{fromCharCode:j}=String,$=(e,t)=>e?(M||g)(t,0):(E(t,0),{value:{then:e=>e()}}),_=new WeakSet,k=new WeakMap;let x=0;const T=(e,{parse:t,stringify:r,transform:n}=JSON)=>{if(!k.has(e)){const s=(t,...r)=>e.postMessage({[p]:r},{transfer:t});let o=!1;k.set(e,new Proxy(new h,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,a)=>"then"===a?null:(...r)=>{const i=x++;let c=new w(new m(v)),l=[];_.has(r.at(-1)||l)&&_.delete(l=r.pop()),s(l,i,c,a,n?r.map(n):r);const u=e!==globalThis;let f=0;return o&&u&&(f=setTimeout(console.warn,1e3,`💀🔒 - Possible deadlock if proxy.${a}(...args) is awaited`)),$(u,c).value.then((()=>{clearTimeout(f);const e=c[0];if(!e)return;const r=S*e;return c=new w(new m(r+r%v)),s([],i,c),$(u,c).value.then((()=>t(j(...new b(c.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new h;e.addEventListener("message",(async e=>{const s=e.data?.[p];if(P(s)){e.stopImmediatePropagation();const[a,i,...c]=s;if(c.length){const[e,s]=c;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);o=!0;try{const o=await t.get(e)(...s);if(void 0!==o){const e=r(o);n.set(a,e),i[0]=e.length}}finally{o=!1}}else{const e=n.get(a);n.delete(a);for(let t=new b(i.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}A(i,0)}}))}return!!t.set(n,s)}}))}return k.get(e)};T.transfer=(...e)=>(_.add(e),e);const O="object",F="function",W="number",R="string",B="undefined",J="symbol",{defineProperty:L,getOwnPropertyDescriptor:I,getPrototypeOf:H,isExtensible:C,ownKeys:D,preventExtensions:N,set:U,setPrototypeOf:z}=Reflect,{assign:q,create:K}=Object,Y=H(Int8Array),G="isArray",V=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},Q=(e,t)=>[e,t],X=e=>t=>{const r=typeof t;switch(r){case O:if(null==t)return Q("null",t);if(t===globalThis)return Q(O,null);case F:return e(r,t);case"boolean":case W:case R:case B:case"bigint":return Q(r,t);case J:if(Z.has(t))return Q(r,Z.get(t))}throw new Error(`Unable to handle this ${r} type`)},Z=new Map(D(Symbol).filter((e=>typeof Symbol[e]===J)).map((e=>[Symbol[e],e]))),ee=e=>{for(const[t,r]of Z)if(r===e)return t};function te(){return this}const re="apply",ne="construct",se="defineProperty",oe="deleteProperty",ae="get",ie="getOwnPropertyDescriptor",ce="getPrototypeOf",le="has",ue="isExtensible",fe="ownKeys",pe="preventExtensions",de="set",ye="setPrototypeOf",ge="delete";var we=((e,t)=>{const r=t&&new WeakMap;if(t){const{addEventListener:e}=EventTarget.prototype;L(EventTarget.prototype,"addEventListener",{value(t,n,...s){return s.at(0)?.invoke&&(r.has(this)||r.set(this,new Map),r.get(this).set(t,[].concat(s[0].invoke)),delete s[0].invoke),e.call(this,t,n,...s)}})}const n=t&&(e=>{const{currentTarget:t,target:n,type:s}=e;for(const o of r.get(t||n)?.get(s)||[])e[o]()});return(r,s,o,...a)=>{let i=0;const c=new Map,l=new Map,{[o]:u}=r,f=a.length?q(K(globalThis),...a):globalThis,p=X(((e,t)=>{if(!c.has(t)){let e;for(;l.has(e=i++););c.set(t,e),l.set(e,t)}return Q(e,c.get(t))})),d=new FinalizationRegistry((e=>{u(ge,Q(R,e))})),y=([e,r])=>{switch(e){case O:if(null==r)return f;if(typeof r===W)return l.get(r);if(!(r instanceof Y))for(const e in r)r[e]=y(r[e]);return r;case F:if(typeof r===R){if(!l.has(r)){const e=function(...e){return t&&e.at(0)instanceof Event&&n(...e),u(re,Q(F,r),p(this),e.map(p))},s=new WeakRef(e);l.set(r,s),d.register(e,r,s)}return l.get(r).deref()}return l.get(r);case J:return ee(r)}return r},g={[re]:(e,t,r)=>p(e.apply(t,r)),[ne]:(e,t)=>p(new e(...t)),[se]:(e,t,r)=>p(L(e,t,r)),[oe]:(e,t)=>p(delete e[t]),[ce]:e=>p(H(e)),[ae]:(e,t)=>p(e[t]),[ie]:(e,t)=>{const r=I(e,t);return r?Q(O,V(r,p)):Q(B,r)},[le]:(e,t)=>p(t in e),[ue]:e=>p(C(e)),[fe]:e=>Q(O,D(e).map(p)),[pe]:e=>p(N(e)),[de]:(e,t,r)=>p(U(e,t,r)),[ye]:(e,t)=>p(z(e,t)),[ge](e){c.delete(l.get(e)),l.delete(e)}};return r[s]=(e,t,...r)=>{switch(e){case re:r[0]=y(r[0]),r[1]=r[1].map(y);break;case ne:r[0]=r[0].map(y);break;case se:{const[e,t]=r;r[0]=y(e);const{get:n,set:s,value:o}=t;n&&(t.get=y(n)),s&&(t.set=y(s)),o&&(t.value=y(o));break}default:r=r.map(y)}return g[e](y(t),...r)},{proxy:r,[e.toLowerCase()]:f,[`is${e}Proxy`]:()=>!1}}})("Window",!0),he=(e=>{let t=0;const r=new Map,n=new Map,s=Symbol(),o=e=>typeof e===F?e():e,a=e=>typeof e===O&&!!e&&s in e,i=Array[G],c=X(((e,a)=>{if(s in a)return o(a[s]);if(e===F){if(!n.has(a)){let e;for(;n.has(e=String(t++)););r.set(a,e),n.set(e,a)}return Q(e,r.get(a))}if(!(a instanceof Y))for(const e in a)a[e]=c(a[e]);return Q(e,a)}));return(t,l,u)=>{const{[l]:f}=t,p=new Map,d=new FinalizationRegistry((e=>{p.delete(e),f(ge,c(e))})),y=e=>{const[t,r]=e;if(!p.has(r)){const n=t===F?te.bind(e):e,s=new Proxy(n,h),o=new WeakRef(s);p.set(r,o),d.register(s,r,o)}return p.get(r).deref()},g=e=>{const[t,r]=e;switch(t){case O:return null===r?globalThis:typeof r===W?y(e):r;case F:return typeof r===R?n.get(r):y(e);case J:return ee(r)}return r},w=(e,t,...r)=>g(f(e,o(t),...r)),h={[re]:(e,t,r)=>w(re,e,c(t),r.map(c)),[ne]:(e,t)=>w(ne,e,t.map(c)),[se]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===F&&(r.get=c(n)),typeof s===F&&(r.set=c(s)),typeof o===F&&(r.value=c(o)),w(se,e,c(t),r)},[oe]:(e,t)=>w(oe,e,c(t)),[ce]:e=>w(ce,e),[ae]:(e,t)=>t===s?e:w(ae,e,c(t)),[ie]:(e,t)=>{const r=w(ie,e,c(t));return r&&V(r,g)},[le]:(e,t)=>t===s||w(le,e,c(t)),[ue]:e=>w(ue,e),[fe]:e=>w(fe,e).map(g),[pe]:e=>w(pe,e),[de]:(e,t,r)=>w(de,e,c(t),c(r)),[ye]:(e,t)=>w(ye,e,c(t))};t[u]=(e,t,s,o)=>{switch(e){case re:return g(t).apply(g(s),o.map(g));case ge:{const e=g(t);r.delete(n.get(e)),n.delete(e)}}};const m=new Proxy([O,null],h),b=m.Array[G];return L(Array,G,{value:e=>a(e)?b(e):i(e)}),{[e.toLowerCase()]:m,[`is${e}Proxy`]:a,proxy:t}}})("Window"),me="function"==typeof Worker?Worker:class{};const be=new WeakMap,ve=(e,...t)=>{const r=T(e,...t);if(!be.has(r)){const t=e instanceof me?we:he;be.set(r,t(r,d,y))}return be.get(r)};ve.transfer=T.transfer;const{isArray:Se}=Array,{assign:Pe,create:Ae,defineProperties:Ee,defineProperty:Me,entries:je}=Object,{all:$e,resolve:_e}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),ke=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const xe=e=>e.arrayBuffer(),Te=e=>e.json(),Oe=e=>e.text(),Fe=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),We=new WeakMap,Re=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return We.set(t,r),t}}},Be=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},Je=e=>{const t=e.split("/");return t.pop(),t.join("/")},Le=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},Ie=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},He=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Ce=new WeakMap,De=(e,t,r)=>$e((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Se(n))return n.map((r=>({url:He([e,r]),path:He([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:He([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(ke(t,Ce.get(e))))(r,n).then(xe).then((r=>e.writeFile(t,s,r)))))),Ne=(e,t,r)=>{e.registerJsModule(t,r)},Ue=(e,t,...r)=>{try{return e.runPython(Fe(t),...r)}catch(t){We.get(e).stderr(t)}},ze=async(e,t,...r)=>{try{return await e.runPythonAsync(Fe(t),...r)}catch(t){We.get(e).stderr(t)}},qe=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){We.get(e).stderr(t)}};var Ke={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Re();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await De(this,a,t.fetch),a},registerJSModule:Ne,run:Ue,runAsync:ze,runEvent:qe,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>Be({FS:e,PATH:t,PATH_FS:r},n,s)};const Ye={dict_converter:Object.fromEntries};var Ge={type:"pyodide",module:(e="0.23.4")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Re(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await De(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:Ne,run:Ue,runAsync:ze,runEvent:qe,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(Ye):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>Be({FS:e,PATH:t,PATH_FS:r},n,s)};const Ve="ruby-wasm-wasi",Qe=Ve.replace(/\\W+/g,"_");var Xe={type:Ve,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await De(this,o,t.fetch),o},registerJSModule(e,t,r){const n=[\'require "js"\'];for(const[e,t]of je(r)){const r=`__module_${Qe}_${e}`;globalThis[r]=t,n.push(`$${e}=JS.global[:${r}]`)}this.run(e,n.join(";"))},run:(e,t,...r)=>e.eval(Fe(t),...r),runAsync:(e,t,...r)=>e.evalAsync(Fe(t),...r),async runEvent(e,t,r){if(/^xworker\\.(on\\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${Qe}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${Ve}`)}};var Ze={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Re(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await De(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{for(const[t,n]of je(r))e.global.set(t,n)},run:(e,t,...r)=>{try{return e.doStringSync(Fe(t),...r)}catch(t){We.get(e).stderr(t)}},runAsync:async(e,t,...r)=>{try{return await e.doString(Fe(t),...r)}catch(t){We.get(e).stderr(t)}},runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){We.get(e).stderr(t)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(Le(e,Je(t)),t=Ie(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const et=new Map,tt=new Map,rt=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=et.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{tt.set(t,e);const a=e?.fetch;return a&&Ce.set(a,o),s(n,e,r)}))}}),nt=e=>{for(const t of[].concat(e.type))et.set(t,e)};for(const e of[Ke,Ge,Xe,Ze])nt(e);const st=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let ot,at,it;const ct=(e,t)=>{addEventListener(e,t||(async t=>{try{await ot,at(`xworker.on${e}`,t)}catch(e){postMessage(e)}}),!!t&&{once:!0})},{parse:lt,stringify:ut}=f,{proxy:ft,window:pt,isWindowProxy:dt}=ve(self,{parse:lt,stringify:ut,transform:e=>it?it(e):e}),yt={sync:ft,window:pt,isWindowProxy:dt,onmessage:console.info,onerror:console.error,onmessageerror:console.warn,postMessage:postMessage.bind(self)};ct("message",(({data:{options:e,config:t,code:r,hooks:n}})=>{ot=(async()=>{try{const{type:s,version:o,config:a,async:i}=e,c=await((e,t,r={})=>{if(t)if(t.endsWith(".json"))r=fetch(t).then(Te),t=ke(t);else if(t.endsWith(".toml"))r=fetch(t).then(Oe).then(st),t=ke(t);else if(!t.endsWith(".txt")){try{r=JSON.parse(t)}catch(e){r=st(t)}t=ke("./config.txt")}return _e(r).then((r=>rt[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(s,o),t,a),l=Ae(et.get(s)),u="run"+(i?"Async":"");if(n){const{beforeRun:e,beforeRunAsync:t,afterRun:r,afterRunAsync:s}=n,o=r||s,a=e||t;if(o){const e=l[u].bind(l);l[u]=(t,r,...n)=>e(t,`${r}\\n${o}`,...n)}if(a){const e=l[u].bind(l);l[u]=(t,r,...n)=>e(t,`${a}\\n${r}`,...n)}}return l.registerJSModule(c,"polyscript",{xworker:yt}),at=l.runEvent.bind(l,c),it=l.transform.bind(l,c),await l[u](c,r),c}catch(e){postMessage(e)}})(),ct("error"),ct("message"),ct("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:s}=n,o=this instanceof Le;if(e.length){const[t,n]=e;(r=ke({},r||{type:t,version:n})).type||(r.type=t)}const{config:a}=r,i=_e(a&&"string"==typeof a?a:"./config.txt"),c=fetch(t).then(Re).then((e=>{const t=o?this.stringHooks:void 0;s.call(n,{options:r,config:i,code:e,hooks:t})}));return Pe(n,{postMessage:{value:(e,...t)=>c.then((()=>s.call(n,e,...t)))},sync:{value:Se(n,d).proxy},onerror:{writable:!0,configurable:!0,value:console.error}}),o&&this.onWorkerReady?.(this.interpreter,n),n.addEventListener("message",(e=>{const{data:t}=e;t instanceof Error&&(e.stopImmediatePropagation(),n.onerror(Object.create(e,{type:{value:"error"},error:{value:t}})))})),n},Je=e=>{const{worker:t}=e.attributes;if(t){let{value:r}=t;if(!r){if(e.childElementCount){const{innerHTML:t,localName:n,type:s}=e,o=s||n.replace(/-script$/,"");console.warn(`Deprecated: use <script type="${o}"> for an always safe content parsing:\n`,t),r=t}else r=e.textContent;for(const e of r.split(/[\r\n]+/))if(e.trim().length){if(/^(\s+)/.test(e)){const e=`^${RegExp.$1}`;r=r.replace(new RegExp(e,"gm"),"")}break}return URL.createObjectURL(new Blob([r],{type:"text/plain"}))}return r}};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Ie=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),He=new WeakMap,De=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return He.set(t,r),t}}},Ne=({FS:e,PATH:t,PATH_FS:r},n,s)=>{const o=r.resolve(n);return e.mkdirTree(t.dirname(o)),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},Ce=e=>{const t=e.split("/");return t.pop(),t.join("/")},Ue=(e,t)=>{const r=[];for(const n of t.split("/"))"."!==n&&(r.push(n),n&&e.mkdir(r.join("/")))},qe=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},ze=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Qe=new WeakMap,Xe=(e,t,r)=>xe((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Ae(n))return n.map((r=>({url:ze([e,r]),path:ze([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:ze([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(_e(t,Qe.get(e))))(r,n).then(We).then((r=>e.writeFile(t,s,r)))))),Ye=(e,t,r)=>{e.registerJsModule(t,r)},Ve=(e,t,...r)=>{try{return e.runPython(Ie(t),...r)}catch(t){He.get(e).stderr(t)}},Ge=async(e,t,...r)=>{try{return await e.runPythonAsync(Ie(t),...r)}catch(t){He.get(e).stderr(t)}},Ke=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){He.get(e).stderr(t)}};var Ze={type:"micropython",module:(e="1.20.0-297")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=De();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Xe(this,a,t.fetch),a},registerJSModule:Ye,run:Ve,runAsync:Ge,runEvent:Ke,transform:(e,t)=>t,writeFile:({FS:e,_module:{PATH:t,PATH_FS:r}},n,s)=>Ne({FS:e,PATH:t,PATH_FS:r},n,s)};const et={dict_converter:Object.fromEntries};var tt={type:"pyodide",module:(e="0.23.4")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=De(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Xe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:Ye,run:Ve,runAsync:Ge,runEvent:Ke,transform:(e,t)=>t instanceof e.ffi.PyProxy?t.toJs(et):t,writeFile:({FS:e,PATH:t,_module:{PATH_FS:r}},n,s)=>Ne({FS:e,PATH:t,PATH_FS:r},n,s)};const rt="ruby-wasm-wasi",nt=rt.replace(/\W+/g,"_");var st={type:rt,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Xe(this,o,t.fetch),o},registerJSModule(e,t,r){const n=['require "js"'];for(const[e,t]of je(r)){const r=`__module_${nt}_${e}`;globalThis[r]=t,n.push(`$${e}=JS.global[:${r}]`)}this.run(e,n.join(";"))},run:(e,t,...r)=>e.eval(Ie(t),...r),runAsync:(e,t,...r)=>e.evalAsync(Ie(t),...r),async runEvent(e,t,r){if(/^xworker\.(on\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${nt}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${rt}`)}};var ot={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=De(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Xe(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{for(const[t,n]of je(r))e.global.set(t,n)},run:(e,t,...r)=>{try{return e.doStringSync(Ie(t),...r)}catch(t){He.get(e).stderr(t)}},runAsync:async(e,t,...r)=>{try{return await e.doString(Ie(t),...r)}catch(t){He.get(e).stderr(t)}},runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,r)}catch(t){He.get(e).stderr(t)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(Ue(e,Ce(t)),t=qe(e,t),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const at=new Map,it=new Map,ct=[],lt=[],ut=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=at.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{it.set(t,e);const a=e?.fetch;return a&&Qe.set(a,o),s(n,e,r)}))}}),ft=e=>{for(const t of[].concat(e.type))at.set(t,e),ct.push(`script[type="${t}"]`),lt.push(`${t}-`)};for(const e of[Ze,tt,st,ot])ft(e);const pt=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),dt=(e,t,r={})=>{if(t)if(t.endsWith(".json"))r=fetch(t).then(Oe),t=_e(t);else if(t.endsWith(".toml"))r=fetch(t).then(Re).then(pt),t=_e(t);else if(!t.endsWith(".txt")){try{r=JSON.parse(t)}catch(e){r=pt(t)}t=_e("./config.txt")}return Te(r).then((r=>ut[e](r,t)))},yt=(e,t="")=>`${e}@${t}`.replace(/@$/,""),ht=(e,t)=>{const r=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(e);return r.getElementById(t)||((e,t=document)=>t.querySelector(e))(t,r)},gt=new WeakMap,wt={get(){let e=gt.get(this);return e||(e=document.createElement(`${this.type}-script`),gt.set(this,e),St(this)),e},set(e){"string"==typeof e?gt.set(this,ht(this,e)):(gt.set(this,e),St(this))}},mt=new WeakMap,bt=new Map,vt=(e,t)=>{const r=e?.value;return r?t+r:""},Et=(e,t,r,n,s,o=e)=>{if(!bt.has(t)){const a={interpreter:dt(r,s),queue:Te(),XWorker:Be(e,n)};bt.set(t,a),bt.has(e)||bt.set(e,a),bt.has(o)||bt.set(o,a)}return bt.get(t)},St=async e=>{if(mt.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=yt(i,c);let u=vt(r,"|");const f=vt(n,"")||`${l}${u}`;u=u.slice(1);const p=Je(e);if(p){const r=new(Be(i,c))(p,{async:!!t,config:u});return void mt.set(Me(e,"xworker",{value:r}),{xworker:r})}const d=vt(s,""),y=Et(i,f,l,c,u);mt.set(Me(e,"target",wt),y),d&&gt.set(e,ht(e,d));const h=a?fetch(a).then(Re):e.textContent;y.queue=y.queue.then((()=>(async(e,t,r,n)=>{const s=at.get(e.type);s.experimental&&console.warn(`The ${e.type} interpreter is experimental`);const[o,a]=await xe([mt.get(e).interpreter,t]);try{return Me(document,"currentScript",{configurable:!0,get:()=>e}),s.registerJSModule(o,"polyscript",{XWorker:r}),s[n?"runAsync":"run"](o,a)}finally{delete document.currentScript}})(e,h,y.XWorker,!!t)))}},At=new Proxy($e(null),{get:(e,t)=>kt(t)}),kt=async e=>{if(bt.has(e)){const{interpreter:t,queue:r}=bt.get(e);return(await xe([t,r]))[0]}const t=bt.size?`Available interpreters are: ${[...bt.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},$t=async e=>{const{type:r,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of t(`./@*[${lt.map((e=>`name()="${e}${r}"`)).join(" or ")}]`,n)){s=s.slice(0,-(r.length+1));const t=await kt(a.getAttribute(`${s}-env`)||s);at.get(s).runEvent(t,o,e)}},Pt=e=>{for(let{name:r,ownerElement:n}of t(`.//@*[${lt.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))r=r.slice(r.lastIndexOf("-")+1),"env"!==r&&n.addEventListener(r,$t)},Mt=[],jt=new Map,xt=new Map,Tt=e=>{for(const t of Mt)if(e.matches(t)){const r=jt.get(t),{resolve:n}=xt.get(r),{options:s,known:o}=_t.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,config:a,version:i,env:c,onInterpreterReady:l}=s,u=Je(e);if(u){const o=Ft.call(new Le(null,s),u,{version:i,type:t,config:a||{},async:e.hasAttribute("async")});return Me(e,"xworker",{value:o}),void n({type:r,xworker:o})}const f=yt(t,i),p=c||`${f}${a?`|${a}`:""}`,{interpreter:d,XWorker:y}=Et(r,p,f,i,a,t);d.then((o=>{const a=$e(at.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:u,onAfterRunAsync:p}=s,d=new Le(o,s),h=function(...e){return y.apply(d,e)};for(const[t,[r,n]]of[["run",[i,u]]]){const s=a[t];a[t]=function(t,o,...a){r&&r.call(this,g,e);const i=s.call(this,t,o,...a);return n&&n.call(this,g,e),i}}for(const[t,[r,n]]of[["runAsync",[c,p]]]){const s=a[t];a[t]=async function(t,o,...a){r&&await r.call(this,g,e);const i=await s.call(this,t,o,...a);return n&&await n.call(this,g,e),i}}a.registerJSModule(o,"polyscript",{XWorker:h});const g={type:r,interpreter:o,XWorker:h,io:He.get(o),config:structuredClone(it.get(f)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o),runEvent:a.runEvent.bind(a,o)};n(g),l?.(g,e)}))}}},_t=new Map;let Wt=0;const Ot=(t,r)=>{let n=null==t;if(n)t="_ps"+Wt++;else if(at.has(t)||_t.has(t))throw new Error(`<script type="${t}"> already registered`);if(!at.has(r?.interpreter))throw new Error("Unspecified interpreter");at.set(t,at.get(r.interpreter));const s=[`script[type="${t}"]`];if(Rt(t),n){const{onInterpreterReady:e}=r;r={...r,onInterpreterReady(r,n){Mt.splice(Mt.indexOf(t),1),at.delete(t),_t.delete(t),xt.delete(t),n.remove(),e?.(r)}},document.head.append(ke(document.createElement("script"),{type:t}))}else s.push(`${t}-script`),lt.push(`${t}-`);for(const e of s)jt.set(e,t);Mt.push(...s),_t.set(t,{options:ke({env:t},r),known:new WeakSet}),n||Pt(document),e(s.join(",")).forEach(Tt)},Rt=e=>(xt.has(e)||xt.set(e,Promise.withResolvers()),xt.get(e).promise),Ft=Be(),Lt=ct.join(","),Bt=new MutationObserver((t=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of t)if("attributes"!==r){for(const t of o)if(1===t.nodeType)if(Pt(t),t.matches(Lt))St(t);else{if(e(Lt,t).forEach(St),!Mt.length)continue;Tt(t),e(Mt.join(","),t).forEach(Tt)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of lt)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,$t)}break}}}})),Jt=e=>(Bt.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:It}=Element.prototype;ke(Element.prototype,{attachShadow(e){return Jt(It.call(this,e))}}),Pt(Jt(document)),e(Lt,document).forEach(St);export{Ft as XWorker,Ot as define,At as env,Rt as whenDefined};
