function wt(){import("data:text/javascript,")}const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};D();function h(){}function R(t){return t()}function F(){return Object.create(null)}function S(t){t.forEach(R)}function K(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function w(t,e){t.appendChild(e)}function M(t,e,o){t.insertBefore(e,o||null)}function x(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function T(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function k(){return J(" ")}function d(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function Q(t){return Array.from(t.childNodes)}let U;function m(t){U=t}const f=[],P=[],_=[],X=[],V=Promise.resolve();let I=!1;function W(){I||(I=!0,V.then(q))}function Y(t){_.push(t)}const L=new Set;let v=0;function q(){const t=U;do{for(;v<f.length;){const e=f[v];v++,m(e),Z(e.$$)}for(m(null),f.length=0,v=0;P.length;)P.pop()();for(let e=0;e<_.length;e+=1){const o=_[e];L.has(o)||(L.add(o),o())}_.length=0}while(f.length);for(;X.length;)X.pop()();I=!1,L.clear(),m(t)}function Z(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}const $=new Set;let tt;function z(t,e){t&&t.i&&($.delete(t),t.i(e))}function H(t,e,o,a){if(t&&t.o){if($.has(t))return;$.add(t),tt.c.push(()=>{$.delete(t),a&&(o&&t.d(1),a())}),t.o(e)}}function O(t){t&&t.c()}function j(t,e,o,a){const{fragment:r,on_mount:n,on_destroy:s,after_update:p}=t.$$;r&&r.m(e,o),a||Y(()=>{const i=n.map(R).filter(K);s?s.push(...i):S(i),t.$$.on_mount=[]}),p.forEach(Y)}function N(t,e){const o=t.$$;o.fragment!==null&&(S(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(f.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,o,a,r,n,s,p=[-1]){const i=U;m(t);const c=t.$$={fragment:null,ctx:null,props:n,update:h,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:F(),dirty:p,skip_bound:!1,root:e.target||i.$$.root};s&&s(c.root);let u=!1;if(c.ctx=o?o(t,e.props||{},(l,b,...y)=>{const B=y.length?y[0]:b;return c.ctx&&r(c.ctx[l],c.ctx[l]=B)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](B),u&&et(t,l)),b}):[],c.update(),u=!0,S(c.before_update),c.fragment=a?a(c.ctx):!1,e.target){if(e.hydrate){const l=Q(e.target);c.fragment&&c.fragment.l(l),l.forEach(x)}else c.fragment&&c.fragment.c();e.intro&&z(t.$$.fragment),j(t,e.target,e.anchor,e.customElement),q()}m(i)}class C{$destroy(){N(this,1),this.$destroy=h}$on(e,o){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(o),()=>{const r=a.indexOf(o);r!==-1&&a.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ot(t){let e;return{c(){e=g("div"),e.innerHTML='<button type="button" class="photon-logo"><span>P</span></button>',d(e,"class","p-4 w-full inline-flex justify-center")},m(o,a){M(o,e,a)},p:h,i:h,o:h,d(o){o&&x(e)}}}class rt extends C{constructor(e){super(),A(this,e,null,ot,E,{})}}function at(t){let e,o;return{c(){e=T("svg"),o=T("path"),d(o,"stroke-linecap","round"),d(o,"stroke-linejoin","round"),d(o,"d","M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class",t[0]),d(e,"fill","none"),d(e,"viewBox","0 0 24 24"),d(e,"stroke","currentColor"),d(e,"stroke-width","2")},m(a,r){M(a,e,r),w(e,o)},p(a,[r]){r&1&&d(e,"class",a[0])},i:h,o:h,d(a){a&&x(e)}}}function nt(t,e,o){let{className:a}=e;return t.$$set=r=>{"className"in r&&o(0,a=r.className)},[a]}class it extends C{constructor(e){super(),A(this,e,nt,at,E,{className:0})}}function st(t){let e,o,a,r,n,s,p,i,c,u,l;return r=new it({props:{className:"w-12 h-12"}}),{c(){e=g("form"),o=g("div"),a=g("div"),O(r.$$.fragment),n=k(),s=g("div"),s.innerHTML='<p class="text-lg">Drag and Drop</p>',p=k(),i=g("div"),i.innerHTML='<p class="text-sm italic">or</p>',c=k(),u=g("div"),u.innerHTML=`<label for="upload-image" class="btn btn-info-dark cursor-pointer"><span>Browse Image</span> 
        <input type="file" class="hidden" id="upload-image"/></label>`,d(a,"class","mb-6 flex justify-center"),d(s,"class","text-center mb-6"),d(i,"class","text-center mb-6"),d(u,"class","flex justify-center"),d(o,"class","border border-gray-400 border-dashed p-6"),d(e,"class","p-3 border border-gray-300 shadow-md text-gray-500 w-72 md:w-1/3 bg-white")},m(b,y){M(b,e,y),w(e,o),w(o,a),j(r,a,null),w(o,n),w(o,s),w(o,p),w(o,i),w(o,c),w(o,u),l=!0},p:h,i(b){l||(z(r.$$.fragment,b),l=!0)},o(b){H(r.$$.fragment,b),l=!1},d(b){b&&x(e),N(r)}}}class ct extends C{constructor(e){super(),A(this,e,null,st,E,{})}}function dt(t){let e,o,a,r,n,s,p;return o=new rt({}),s=new ct({}),{c(){e=g("main"),O(o.$$.fragment),a=k(),r=g("div"),n=g("div"),O(s.$$.fragment),d(n,"class","min-h-[calc(100vh-80px)] flex items-center justify-center"),d(r,"class","container mx-auto")},m(i,c){M(i,e,c),j(o,e,null),w(e,a),w(e,r),w(r,n),j(s,n,null),p=!0},p:h,i(i){p||(z(o.$$.fragment,i),z(s.$$.fragment,i),p=!0)},o(i){H(o.$$.fragment,i),H(s.$$.fragment,i),p=!1},d(i){i&&x(e),N(o),N(s)}}}class lt extends C{constructor(e){super(),A(this,e,null,dt,E,{})}}new lt({target:document.getElementById("app")});export{wt as __vite_legacy_guard};