import{X as k,Y as D,G as I,C as $,Z as B,z as b,_ as R,$ as F,a0 as G,T as p,a1 as f,V as P,a2 as E,a3 as O,a4 as A,a5 as U,a6 as W,a7 as S,a8 as w,a9 as j,aa as q,ab as z,ac as X,ad as Z,ae as J,af as K,p as Q,m as x,c as ee}from"./runtime.BPwkeZwP.js";const re=new Set,C=new Set;function T(e){var M;var r=this,t=r.ownerDocument,l=e.type,n=((M=e.composedPath)==null?void 0:M.call(e))||[],a=n[0]||e.target,s=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var m=n.indexOf(r);if(m===-1)return;d<=m&&(s=d)}if(a=n[s]||e.target,a!==r){k(e,"currentTarget",{configurable:!0,get(){return a||t}});var N=B,u=b;D(null),I(null);try{for(var o,i=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+l];if(h!==void 0&&!a.disabled)if($(h)){var[H,...Y]=h;H.apply(a,[e,...Y])}else h.call(a,e)}catch(g){o?i.push(g):o=g}if(e.cancelBubble||c===r||c===null)break;a=c}if(o){for(let g of i)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=r,delete e.currentTarget,D(N),I(u)}}}function te(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function v(e,r){var t=b;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function fe(e,r){var t=(r&F)!==0,l=(r&G)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return v(f,null),f;n===void 0&&(n=te(a?e:"<!>"+e),t||(n=R(n)));var s=l?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=R(s),d=s.lastChild;v(_,d)}else v(s,s);return s}}function ue(e=""){if(!p){var r=E(e+"");return v(r,r),r}var t=f;return t.nodeType!==3&&(t.before(t=E()),O(t)),v(t,t),t}function de(){if(p)return v(f,null),f;var e=document.createDocumentFragment(),r=document.createComment(""),t=E();return e.append(r,t),v(r,t),e}function ce(e,r){if(p){b.nodes_end=f,P();return}e!==null&&e.before(r)}const ae=["touchstart","touchmove"];function ne(e){return ae.includes(e)}function le(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function oe(e,r){return V(e,r)}function _e(e,r){A(),r.intro=r.intro??!1;const t=r.target,l=p,n=f;try{for(var a=R(t);a&&(a.nodeType!==8||a.data!==U);)a=W(a);if(!a)throw S;w(!0),O(a),P();const s=V(e,{...r,anchor:a});if(f===null||f.nodeType!==8||f.data!==j)throw q(),S;return w(!1),s}catch(s){if(s===S)return r.recover===!1&&z(),A(),X(t),w(!1),oe(e,r);throw s}finally{w(l),O(n)}}const y=new Map;function V(e,{target:r,anchor:t,props:l={},events:n,context:a,intro:s=!0}){A();var _=new Set,d=u=>{for(var o=0;o<u.length;o++){var i=u[o];if(!_.has(i)){_.add(i);var c=ne(i);r.addEventListener(i,T,{passive:c});var h=y.get(i);h===void 0?(document.addEventListener(i,T,{passive:c}),y.set(i,1)):y.set(i,h+1)}}};d(Z(re)),C.add(d);var m=void 0,N=J(()=>{var u=t??r.appendChild(E());return K(()=>{if(a){Q({});var o=ee;o.c=a}n&&(l.$$events=n),p&&v(u,null),m=e(u,l)||{},p&&(b.nodes_end=f),a&&x()}),()=>{var c;for(var o of _){r.removeEventListener(o,T);var i=y.get(o);--i===0?(document.removeEventListener(o,T),y.delete(o)):y.set(o,i)}C.delete(d),L.delete(m),u!==t&&((c=u.parentNode)==null||c.removeChild(u))}});return L.set(m,N),m}let L=new WeakMap;function ve(e){const r=L.get(e);r&&r()}const se="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);export{ce as a,ue as b,de as c,_e as h,oe as m,le as s,fe as t,ve as u};
