let e,t,n=0,l=!1,s=!1;const r="undefined"!=typeof window?window:{},o=r.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},i=(()=>(o.head.attachShadow+"").indexOf("[native")>-1)(),a=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),u=new WeakMap,f=e=>u.get(e),m=(e,t)=>u.set(t.s=e,t),p=e=>console.error(e),w=new Map,d=new Map,h=[],$=[],y=[],b=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.t?v(_):c.raf(_))},g=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(s){p(s)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},_=()=>{n++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){p(t)}e.length=0})(h);const e=2==(6&c.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;g($,e),g(y,e),$.length>0&&(y.push(...$),$.length=0),(l=h.length+$.length+y.length>0)?c.raf(_):n=0},v=e=>Promise.resolve().then(e),j=b($,!0),S={},M=e=>"object"==(e=typeof e)||"function"===e,O=()=>r.CSS&&r.CSS.supports&&r.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_resume("./p-73bc5e11.js").then(()=>{c.o=r.__stencil_cssshim}),R=()=>{c.o=r.__stencil_cssshim;const e=Array.from(o.querySelectorAll("script")).find(e=>new RegExp("/resume(\\.esm)?\\.js($|\\?|#)").test(e.src)||"resume"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,r.location.href)).href,U(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_resume("./p-3b66a627.js").then(()=>t))},U=(e,t)=>{const n=`__sc_import_${"resume".replace(/\s|-/g,"_")}`;try{r[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;r[n]=l=>{const c=new URL(l,e).href;let i=s.get(c);if(!i){const e=o.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(t=>{e.onload=()=>{t(r[n].m),e.remove()}}),s.set(c,i),o.head.appendChild(e)}return i}}},L=new WeakMap,P=e=>"sc-"+e,k=(e,t,...n)=>{let l=null,s=!1,r=!1,o=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!M(l))&&(l=String(l)),s&&r?o[o.length-1].i+=l:o.push(s?x(null,l):l),r=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const i=x(e,null);return i.u=t,o.length>0&&(i.p=o),i},x=(e,t)=>({t:0,h:e,i:t,$:null,p:null,u:null}),C={},A=(e,t,n,l,s,r)=>{if(n===l)return;let o=((e,t)=>t in e)(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=T(n),r=T(l);t.remove(...s.filter(e=>e&&!r.includes(e))),t.add(...r.filter(e=>e&&!s.includes(e)))}else{const i=M(l);if((o||i&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?o=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(c){}null==l||!1===l?e.removeAttribute(t):(!o||4&r||s)&&!i&&e.setAttribute(t,l=!0===l?"":l)}},E=/\s/,T=e=>e?e.split(E):[],F=(e,t,n,l)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,r=e&&e.u||S,o=t.u||S;for(l in r)l in o||A(s,l,r[l],void 0,n,t.t);for(l in o)A(s,l,r[l],o[l],n,t.t)},W=(t,n,l)=>{let r,c,i=n.p[l],a=0;if(null!==i.i)r=i.$=o.createTextNode(i.i);else{if(s||(s="svg"===i.h),r=i.$=o.createElementNS(s?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.h),s&&"foreignObject"===i.h&&(s=!1),F(null,i,s),null!=e&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),i.p)for(a=0;a<i.p.length;++a)c=W(t,i,a),c&&r.appendChild(c);"svg"===i.h?s=!1:"foreignObject"===r.tagName&&(s=!0)}return r},q=(e,n,l,s,r,o)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);r<=o;++r)s[r]&&(c=W(null,l,r),c&&(s[r].$=c,i.insertBefore(c,n)))},B=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.$.remove()},H=(e,t)=>e.h===t.h,N=(e,t)=>{const n=t.$=e.$,l=e.p,r=t.p,o=t.h,c=t.i;null===c?(s="svg"===o||"foreignObject"!==o&&s,F(e,t,s),null!==l&&null!==r?((e,t,n,l)=>{let s,r=0,o=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],m=l[u];for(;r<=c&&o<=u;)null==i?i=t[++r]:null==a?a=t[--c]:null==f?f=l[++o]:null==m?m=l[--u]:H(i,f)?(N(i,f),i=t[++r],f=l[++o]):H(a,m)?(N(a,m),a=t[--c],m=l[--u]):H(i,m)?(N(i,m),e.insertBefore(i.$,a.$.nextSibling),i=t[++r],m=l[--u]):H(a,f)?(N(a,f),e.insertBefore(a.$,i.$),a=t[--c],f=l[++o]):(s=W(t&&t[o],n,o),f=l[++o],s&&i.$.parentNode.insertBefore(s,i.$));r>c?q(e,null==l[u+1]?null:l[u+1].$,n,l,o,u):o>u&&B(t,r,c)})(n,l,t,r):null!==r?(null!==e.i&&(n.textContent=""),q(n,null,t,r,0,r.length-1)):null!==l&&B(l,0,l.length-1),s&&"svg"===o&&(s=!1)):e.i!==c&&(n.data=c)},V=(e,t)=>{t&&!e.g&&t["s-p"].push(new Promise(t=>e.g=t))},z=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const s=t.s,r=()=>D(e,t,n,s,l);return V(t,t._),K(void 0,()=>j(r))},D=(n,l,s,r,c)=>{const a=n["s-rc"];c&&((e,t)=>{const n=((e,t)=>{let n=P(t.v),l=d.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=L.get(e=e.head||e);s||L.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(i&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(n,s),((n,l,s,r)=>{t=n.tagName;const o=l.j||x(null,null),c=(i=r)&&i.h===C?r:k(null,null,r);var i;c.h=null,c.t|=4,l.j=c,c.$=o.$=n.shadowRoot||n,e=n["s-sc"],N(o,c)})(n,l,0,G(r)),l.t&=-17,l.t|=2,a&&(a.forEach(e=>e()),n["s-rc"]=void 0);{const e=n["s-p"],t=()=>I(n,l,s);0===e.length?t():(Promise.all(e).then(t),l.t|=4,e.length=0)}},G=e=>{try{e=e.render()}catch(t){p(t)}return e},I=(e,t,n)=>{const l=t._;64&t.t||(t.t|=64,e.classList.add("hydrated"),t.S(e),l||J()),t.g&&(t.g(),t.g=void 0),512&t.t&&v(()=>z(e,t,n,!1)),t.t&=-517},J=()=>{o.documentElement.classList.add("hydrated"),c.t|=2},K=(e,t)=>e&&e.then?e.then(t):t(),Q=(e,t,n)=>{if(t.M){const l=Object.entries(t.M),s=e.prototype;if(l.forEach(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return t=e,f(this).O.get(t);var t},set(n){((e,t,n,l)=>{const s=f(this),r=s.R,o=s.O.get(t),c=s.t,i=s.s;var a,u;u=l.M[t][0],(n=null==(a=n)||M(a)?a:4&u?"false"!==a&&(""===a||!!a):1&u?String(a):a)===o||8&c&&void 0!==o||(s.O.set(t,n),i&&2==(18&c)&&z(r,s,l,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){c.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},X=(e,t={})=>{const n=[],l=t.exclude||[],s=o.head,m=r.customElements,h=s.querySelector("meta[charset]"),$=o.createElement("style"),y=[];o.querySelectorAll("[sty-id]");let b,g=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",o.baseURI).href,t.syncQueue&&(c.t|=4),e.forEach(e=>e[1].forEach(t=>{const s={t:t[0],v:t[1],M:t[2],U:t[3]};s.M=t[2],!i&&1&s.t&&(s.t|=8);const r=s.v,o=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,R:e,O:new Map};t.L=new Promise(e=>t.S=e),e["s-p"]=[],e["s-rc"]=[],u.set(e,t)})(e=this),1&s.t&&(i?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){b&&(clearTimeout(b),b=null),g?y.push(this):c.jmp(()=>((e,t)=>{if(0==(1&c.t)){const n=()=>{},l=f(e);if(!(1&l.t)){l.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){V(l,l._=t);break}}t.M&&Object.entries(t.M).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),v(()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){t.t|=32;{if((s=(e=>{const t=e.v.replace(/-/g,"_"),n=e.P,l=w.get(n);return l?l[t]:__sc_import_resume(`./${n}.entry.js`).then(e=>(w.set(n,e),e[t]),p)})(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(Q(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(c){p(c)}t.t&=-9,e()}const e=P(n.v);if(!d.has(e)&&s.style){const t=()=>{};let l=s.style;8&n.t&&(l=await __sc_import_resume("./p-93e23355.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=d.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,d.set(e,l)})(e,l,!!(1&n.t)),t()}}const r=t._,o=()=>z(e,t,n,!0);r&&r["s-rc"]?r["s-rc"].push(o):o()})(e,l,t))}n()}})(this,s))}disconnectedCallback(){c.jmp(()=>{})}forceUpdate(){((e,t)=>{{const n=f(e);n.R.isConnected&&2==(18&n.t)&&z(e,n,t,!1)}})(this,s)}componentOnReady(){return f(this).L}};s.P=e[0],l.includes(r)||m.get(r)||(n.push(r),m.define(r,Q(o,s,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),s.insertBefore($,h?h.nextSibling:s.firstChild),g=!1,y.length>0?y.forEach(e=>e.connectedCallback()):c.jmp(()=>b=setTimeout(J,30,"timeout"))},Y=e=>{const t=new URL(e,c.l);return t.origin!==r.location.origin?t.href:t.pathname};export{O as a,X as b,Y as g,k as h,R as p,m as r};