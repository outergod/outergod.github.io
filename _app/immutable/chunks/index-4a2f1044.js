function B(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(O)}function I(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function st(t,n,e,r){if(t){const c=P(t,n,e,r);return t[0](c)}}function P(t,n,e,r){return t[1]&&r?H(e.ctx.slice(),t[1](r(n))):e.ctx}function at(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function ft(t,n,e,r,c,s){if(c){const l=P(n,e,r,s);t.p(l,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&i.push(f)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,y=>n[e[y]].claim_order,u))-1;r[i]=e[f]+1;const a=f+1;e[a]=i,c=Math.max(a,c)}const s=[],l=[];let o=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(s.push(n[i-1]);o>=i;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);s.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<s.length&&l[i].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(l[i],f)}}function W(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){w&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function pt(){return A(" ")}function yt(){return A("")}function Y(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function gt(t,n){for(const e in n)Y(t,e,n[e])}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,r,c=!1){tt(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function L(t,n,e,r){return T(t,c=>c.nodeName===n,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>r(n))}function xt(t,n,e){return L(t,n,e,V)}function bt(t,n,e){return L(t,n,e,X)}function nt(t,n){return T(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>A(n),!0)}function $t(t){return nt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,r){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function vt(t,n,e){t.classList[e?"add":"remove"](n)}function Et(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function N(){if(!m)throw new Error("Function called outside component initialization");return m}function At(t){N().$$.on_mount.push(t)}function Nt(t){N().$$.after_update.push(t)}function St(t,n){return N().$$.context.set(t,n),n}const d=[],q=[],b=[],M=[],z=Promise.resolve();let v=!1;function D(){v||(v=!0,z.then(F))}function jt(){return D(),z}function E(t){b.push(t)}const k=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),et(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];k.has(e)||(k.add(e),e())}b.length=0}while(d.length);for(;M.length;)M.pop()();v=!1,k.clear(),h(t)}function et(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const $=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function qt(){_.r||p(_.c),_=_.p}function it(t,n){t&&t.i&&($.delete(t),t.i(n))}function Mt(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function Bt(t,n){const e={},r={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=n[s];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(e[i]=o[i],c[i]=1);t[s]=o}else for(const i in l)c[i]=1}for(const l in r)l in e||(e[l]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Tt(t,n){t&&t.l(n)}function rt(t,n,e,r){const{fragment:c,on_mount:s,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),r||E(()=>{const i=s.map(O).filter(I);l?l.push(...i):p(i),t.$$.on_mount=[]}),o.forEach(E)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,r,c,s,l,o=[-1]){const i=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:B,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||i.$$.root};l&&l(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...S)=>{const j=S.length?S[0]:y;return u.ctx&&c(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&lt(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){J();const a=Z(n.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),K(),F()}h(i)}class zt{$destroy(){ct(this,1),this.$destroy=B}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Bt as A,Ot as B,ct as C,H as D,jt as E,st as F,ft as G,_t as H,at as I,W as J,X as K,bt as L,gt as M,dt as N,ut as O,vt as P,mt as Q,Et as R,zt as S,Z as a,Y as b,xt as c,U as d,V as e,kt as f,ht as g,nt as h,Lt as i,wt as j,pt as k,yt as l,$t as m,B as n,Ct as o,Mt as p,qt as q,it as r,ot as s,A as t,St as u,Nt as v,At as w,Pt as x,Tt as y,rt as z};
