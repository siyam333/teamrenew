var Wo=Object.defineProperty;var Uo=(n,e,t)=>e in n?Wo(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var vn=(n,e,t)=>(Uo(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function R(){}const es=n=>n;function Vo(n,e){for(const t in e)n[t]=e[t];return n}function Hi(n){return n()}function Bs(){return Object.create(null)}function Oe(n){n.forEach(Hi)}function St(n){return typeof n=="function"}function te(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Pt;function Hs(n,e){return n===e?!0:(Pt||(Pt=document.createElement("a")),Pt.href=e,n===Pt.href)}function jo(n){return Object.keys(n).length===0}function qo(n,...e){if(n==null){for(const s of e)s(void 0);return R}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function zo(n,e,t){n.$$.on_destroy.push(qo(e,t))}function Go(n,e,t,s){if(n){const i=Wi(n,e,t,s);return n[0](i)}}function Wi(n,e,t,s){return n[1]&&s?Vo(t.ctx.slice(),n[1](s(e))):t.ctx}function Ko(n,e,t,s){if(n[2]&&s){const i=n[2](s(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|i[l];return r}return e.dirty|i}return e.dirty}function Yo(n,e,t,s,i,r){if(i){const o=Wi(e,t,s,r);n.p(o,i)}}function Qo(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function Xo(n){return n&&St(n.destroy)?n.destroy:R}const Ui=typeof window<"u";let Vi=Ui?()=>window.performance.now():()=>Date.now(),ts=Ui?n=>requestAnimationFrame(n):R;const Ue=new Set;function ji(n){Ue.forEach(e=>{e.c(n)||(Ue.delete(e),e.f())}),Ue.size!==0&&ts(ji)}function qi(n){let e;return Ue.size===0&&ts(ji),{promise:new Promise(t=>{Ue.add(e={c:n,f:t})}),abort(){Ue.delete(e)}}}function v(n,e){n.appendChild(e)}function zi(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function $o(n){const e=E("style");return e.textContent="/* empty */",Jo(zi(n),e),e.sheet}function Jo(n,e){return v(n.head||n,e),e.sheet}function D(n,e,t){n.insertBefore(e,t||null)}function N(n){n.parentNode&&n.parentNode.removeChild(n)}function E(n){return document.createElement(n)}function se(n){return document.createTextNode(n)}function M(){return se(" ")}function Zo(){return se("")}function Se(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function w(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function el(n){return Array.from(n.childNodes)}function rt(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ws(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function tl(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}const Wt=new Map;let Ut=0;function nl(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function sl(n,e){const t={stylesheet:$o(e),rules:{}};return Wt.set(n,t),t}function Gi(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let C=0;C<=1;C+=a){const A=e+(t-e)*r(C);c+=C*100+`%{${o(A,1-A)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${nl(u)}_${l}`,d=zi(n),{stylesheet:f,rules:p}=Wt.get(d)||sl(d,n);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${h} ${s}ms linear ${i}ms 1 both`,Ut+=1,h}function On(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),Ut-=i,Ut||il())}function il(){ts(()=>{Ut||(Wt.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&N(e)}),Wt.clear())})}let dt;function ot(n){dt=n}function an(){if(!dt)throw new Error("Function called outside component initialization");return dt}function cn(n){an().$$.on_mount.push(n)}function rl(n,e){return an().$$.context.set(n,e),e}function ns(n){return an().$$.context.get(n)}function ol(n){return an().$$.context.has(n)}const Be=[],H=[];let Ve=[];const Us=[],Ki=Promise.resolve();let Mn=!1;function Yi(){Mn||(Mn=!0,Ki.then(Qi))}function ll(){return Yi(),Ki}function Ge(n){Ve.push(n)}const yn=new Set;let Pe=0;function Qi(){if(Pe!==0)return;const n=dt;do{try{for(;Pe<Be.length;){const e=Be[Pe];Pe++,ot(e),al(e.$$)}}catch(e){throw Be.length=0,Pe=0,e}for(ot(null),Be.length=0,Pe=0;H.length;)H.pop()();for(let e=0;e<Ve.length;e+=1){const t=Ve[e];yn.has(t)||(yn.add(t),t())}Ve.length=0}while(Be.length);for(;Us.length;)Us.pop()();Mn=!1,yn.clear(),ot(n)}function al(n){if(n.fragment!==null){n.update(),Oe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ge)}}function cl(n){const e=[],t=[];Ve.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),Ve=e}let et;function Xi(){return et||(et=Promise.resolve(),et.then(()=>{et=null})),et}function Vt(n,e,t){n.dispatchEvent(tl(`${e?"intro":"outro"}${t}`))}const Bt=new Set;let me;function $i(){me={r:0,c:[],p:me}}function Ji(){me.r||Oe(me.c),me=me.p}function W(n,e){n&&n.i&&(Bt.delete(n),n.i(e))}function z(n,e,t,s){if(n&&n.o){if(Bt.has(n))return;Bt.add(n),me.c.push(()=>{Bt.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Zi={duration:0};function hl(n,e,t){const s={direction:"in"};let i=e(n,t,s),r=!1,o,l,a=0;function c(){o&&On(n,o)}function u(){const{delay:d=0,duration:f=300,easing:p=es,tick:_=R,css:C}=i||Zi;C&&(o=Gi(n,0,1,f,d,p,C,a++)),_(0,1);const A=Vi()+d,B=A+f;l&&l.abort(),r=!0,Ge(()=>Vt(n,!0,"start")),l=qi(g=>{if(r){if(g>=B)return _(1,0),Vt(n,!0,"end"),c(),r=!1;if(g>=A){const L=p((g-A)/f);_(L,1-L)}}return r})}let h=!1;return{start(){h||(h=!0,On(n),St(i)?(i=i(s),Xi().then(u)):u())},invalidate(){h=!1},end(){r&&(c(),r=!1)}}}function ul(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=me;l.r+=1;let a;function c(){const{delay:u=0,duration:h=300,easing:d=es,tick:f=R,css:p}=i||Zi;p&&(o=Gi(n,1,0,h,u,d,p));const _=Vi()+u,C=_+h;Ge(()=>Vt(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),qi(A=>{if(r){if(A>=C)return f(0,1),Vt(n,!1,"end"),--l.r||Oe(l.c),!1;if(A>=_){const B=d((A-_)/h);f(1-B,B)}}return r})}return St(i)?Xi().then(()=>{i=i(s),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=a),u&&i.tick&&i.tick(1,0),r&&(o&&On(n,o),r=!1)}}}function Z(n){n&&n.c()}function Q(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),Ge(()=>{const r=n.$$.on_mount.map(Hi).filter(St);n.$$.on_destroy?n.$$.on_destroy.push(...r):Oe(r),n.$$.on_mount=[]}),i.forEach(Ge)}function X(n,e){const t=n.$$;t.fragment!==null&&(cl(t.after_update),Oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function dl(n,e){n.$$.dirty[0]===-1&&(Be.push(n),Yi(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ce(n,e,t,s,i,r,o=null,l=[-1]){const a=dt;ot(n);const c=n.$$={fragment:null,ctx:[],props:r,update:R,not_equal:i,bound:Bs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Bs(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&dl(n,h)),d}):[],c.update(),u=!0,Oe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=el(e.target);c.fragment&&c.fragment.l(h),h.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&W(n.$$.fragment),Q(n,e.target,e.anchor),Qi()}ot(a)}class he{constructor(){vn(this,"$$");vn(this,"$$set")}$destroy(){X(this,1),this.$destroy=R}$on(e,t){if(!St(t))return R;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!jo(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fl);const pl="/teamrenew/assets/car-BNT9nL-q.jpg",_l="/teamrenew/assets/Shell-Bh8An6x2.png",er="/teamrenew/assets/App_logo-iz4EWB72.png",ml="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMyElEQVR4nO1de3AdZRX/3TQpBdJH2gZR+zCJUHDUOoiKSO2DWhkZRjttaauAPEpQRKWog9Q+RYGqbcdhUOlgKeXhCNVIq/KHTxCfQSwtIAVtG8ACaRraatskTe51DnOusx7O3nu+b3fv3Zu5v5mdySQ5u99+5/vO+zsLVFFFFVVUUcXgxTAAkwFcCGApgHsB/BHAdgD/BNANoBdAP//8IoB/APgdgE0AVgG4FMC7ANSW+2UqEXUAzgGwHMBvAPQAyMV0/QfAIwBuAfBBAEPK/bJpRQ2AcwHcBeBQjAwodu0DsBHA+TEzZyUqFOMB3ATg+RIyIRdyPc8TSWOKgpV8v4rCWwHcwbLfMlm7AfwUwLcAXAlgKoC3A2gC0MBibgj//GYApwKYyf97M4CfAHjJ+KxjAO4E0BKBGRXDkCZWyv1FJuVfrJBJGU+I8flvAfBxAPcAeNXImAkezEg9Q45jC+lIgQn4N8vzGaxTkkYd76KNRcZ1GMANAIY6MCPVDKGX3lnghelvlwM4sYxjJFF3LYDnCozzGbbMLMxIJUNqebADIQMmP+KSlJmeNQDmAXg2ZMxZAN8O7JYwZqSOIRMB/ClkoC8DuBhABulFHYDPFNAz5JiuLaKDUoPz2GOWAyRFfhuAUagcnMwGQNwmdsn8lIsA9CkD2APgLFQuzgfQWWnM+GyIvngQwGhUPk4C8FBEZqwo1WC/GiKiFqdcV/go/dTvjMXKwykgOCeBFTqHV9kPAPwVwC7WV318dbN4/AuA+3ihfBTA2BjHkXqdkRUPPwhgekz3P5OtmR3Kc1wuon2K42YUyo+C1DLjPEWBH+RJjILhAK7jCcwldD0J4CoAJ3iML5XMmKiYtj0Rd0YDv8D+BBkhry4ASwAcbxzj/DQyo05x+voj6AxS+pcZzMp+fi5FfBcBmCKivbX880QOcVA4Zh3rk2NF7v0Ci99izDiWNmaAJ0QOgBS7D1o41Rr2Yr0A2pjZIyKMeQRHeduKhPwpxP+mSmLGTEW5tnmatnMBHCggSpbFbB3l8UYAN3K2UHs2icyPFGHGMf592UPoO5XEEYkJFxDzvlkg570EQD2Sx0i2urTQOzm41wNYEJEZIzn0QnMXO5YqMv39jvcgWX93CDMeZPlfajRzMYVFHLkyI69rae5iRZOykihQ6MqMLcpLHgVwNcqLDOvBYwkwI5/kinWx3aeE0Ec5vvDdIanaM5AeTA2JVLvqjDHKfSgdHFtBgsyBUz7DBZrOeJZ3XpowP0YF/nnlPqfEMcg7xI23OVpVc0OY8QakC/NjtqbqlMwjFW5EwnjFbqeSThc/44AiptK2M+YpzCCp8ImI971M3LOPy5S8cZO44U6HHHhGcfqOxqAzWtgIIL32OPssfaw4d3N6dSN73pTxi3NnNPMqzzjskl1x5URqlIpCCkf4ro5cBGtqCICFAH5vNE/zFzmxvwAwKyZmdPD/0LtZca0iIbyKvs9V6qaspToNSmyK/AwfzOISnFzEi/In7/FkRlOAGXS94uC8NvDuDT4nbIEUxF3iJiQGrJDlMT52+PEA1sfACDnhN7KV6KLAT1FSDVSdb8VGQft9x7l4re5IVqFTRaE1nyFD6BQOcUEjgPYiq50mZBqA03jnnsBln1P5b486MqqYNXWroHnVYZd8WNB2F6mEfB3OUeSetbzzOkHb5RibagTw9xB98ACASQ73mswOaaFso9W0beQEXJCWCjusyl0uUq0KMhTLI9jPMtNHUVsXMdWuTNquiGVE00Oq3139jK8J+qcdaDcJWjrZZYYMtlEVugVnCrpexxD6emXSHo4hDB+X09es7LZ3G2kvFXQkUs1n+uQxMmtJ/lolV2LFrBBmOMnaEnjgcrFSWMiCiYKuh0WZSe4GCcnZsmKHoJ3j4Gc8o4iptOyMIC5RisateFHQvsNCdKEg2upQN5UVL05haAsWKgr8LESDq59hLdAYLd4zy1lIC34mxlMsj/8algkiyqFbMEfQ/Rl2SA/8AUSDjwf+S4f7SyuQivEsuFnQUWiqKGS1N53Ts2CFoFvjEJuSK24S/OEbDsk6BP42eBY2yHASmeTOq5UcLZ8kFpXqWHC14vSVSmf83HPxXSno7vc0XMhAKIrtgohOu1rwmKCjuikfRi6HW3pgM0cVuj0U+CrPrN4UQUfpWgveJugoX1IUuwWRNQa1R9DRiVcLHhd00xyYUajK0WJNTRc0tKgsaFIK7Sw4WdCRs1oUXYKI8sOlpDvVSLc5IjPy+kvWClgwUtBREs5asBeko1BMUcgModUxi4tuuJGuUAsOEl8W1CsJNAvqBF1fknSDgSEHjPcYrnjPFhxXSrpKEVltBRjyQ+M9Jgk6SqpZMFbQ7UuSrtxKfbrDZGo1VMTgccZ7zIhJqe9Kkq7UZu+9Ec3e+1k5HuSdYWWGltk0OWrsmwXp6MiDBe8UdE9YiB4tsWP46RgdQ1f8TTy71UjXKugoumGBNLOpKsc5dNLqmdRa45ljyEYMnVhxuhhv1kE8rxO01mLqT/kk/pZ5TmyU4KLclZuRPH4snkmt/6yQWc3Znoz8ik/4nU4VwZhzzorKP2v4fYGyWs9GcviAYgxQ9aK1rKdfnCWxWpQydkZlts6KxyVBtd3ngZygelp5LjE5bjQqFuEOhyIOefCTrEQrOnwMpmHssfqYvmsEHbXWczkul0sghRvEUBZNcjda42dQzrisdtCVQbojLierfi2IraWTZ0QscvhuCFPi2CmNCjNyXG8Fh6yoLJizNiK4QtC5JMRep9it9rmWV3fxK4axMZBTHKizI+oMKabo+oPj+b9VPn5EiL+1JIrS2+sgYxdHLJQbq+iTvGj5EZurVpyuWFPBbg5WZZyP1MrIAB3KserIlwWtU81AnRK8IxlvQb0Sn3I99Di2QEe6HDt0Kzn0cRo/s55/nsF/k06f3BkuzNC8+k6H4vNZSvDTuQL+TnETKr72FXmHHWJbQfH1nQKT6nNlWWe4HlNuUQwd6lRqhXS26VSaM2ZEOI4wikv2ffwZbRxxNKLZ4WhN5ZFRGpftdUgT1PP5e59w1P+hRrGbyVLwLShzKU7WxjKfYz8ubZqybFnNi9ALWB64yXGbDnjGvXZHaer2dSUp73Kk7WElIRO1fVMTt1a6hyPMXWxe93J+4TG2Cls9xKTEe5UE2q8c6Gv50xlBejqf4o1xyoAozGHFBKUQodMhCVVONCsV892OTL5YWZCRDn1qFenbHbfcbEXMPJfCY9GyOkR2uaZ3uAB21CjmOzm+kdGi1Dt90vEesoQyzxRahWlDiyJmfETNIkHfF4MI/R9kW4xXHLsAZZRzdnlrJapOiRPvUxy4/JlAF6kwRmn/FFtrDXBw8XDE7VfLwcacIld9ra+4kGFrSmtu1ubhxK1XXAaX1LIJN4iHDHjEl2pDdkreT2lCeURUWIPkDR7MmKI0lP5SEgMfqpThd3h0rc6wTtH8iSMcjLQ6XVEwgsMhWgOzLOuMjEfI5wUlZmY6KeXrNcuJ3OLp6HwspIwnx6byioQSVCdx1LbQs12sqTwyyoGcAdfTtj5YrbzEFz3vRVbHb0MmJseWyRZOK0f5qkIDe/pbQz4WEHT6fD+x9GXlfuRYJ4465QzJgENOWltZFxk+2tXPxQXr2AufymbzaBanQ/nnZo5ZtfL/thu+ebXXMRwisUDRG4+U8kOWmgfew/1RfDGSw/Rh3UKTuDo5URRFZ81UrLN9SVhVxfAhZSCHRIMXH9SzCSoLJuK8nuDk0okxxLpk3qjXoQ1J7FiobNVDEXdKEPT92m9wsinsW1aWa4CrQ1bH0Iw/uDMOKc8pez/fzykT0OPYec5qUs4OfKC4nT9OvD8Q7d3Pv2vnaPBSpnHNDlp0huZEXoOUQPta2QA7RIPpgy4Ztqa03erS06UkuCZkoFsTWKHlwBiOJsj3I7/sC0gpFoZs5Q6uZKlUTFE88LwCL7vOsFhfXSEi7HsV9oGwMRwo1Hb+vnJaU64YX6CjWydXQpbie7e+qOF8hraw8k5fyf2MpD+9+iQXQpTMm3X49OpTRT69mliwsBSYFlKJGMwcLirRJyrCUM/tMrRMYXABJR4oLBXq2DMudJT5KJ8XvKBEu6aGe0vezgmksHEd5p0eZxV+ajCBKyCLfT7oJXbsLo8zD80JsCvYsdRStcGrj9OuFacrfCfmdqWVYC7k6uDTR2u5JmsaHywKi/ZO5gOWVzHNQ0rRX9jVw+npOBdCxWAcd/q0TlYuwWsPZwkj100NBtTwqt+g9MZN8jrAFSVTB1mIJ1YM4dar13MjfS3n7XsdYf/oFo7WDkpFnTSGsr6Yy8eIN/GkbisQ7d3G/7OJE1BzuQNolQFVVFFFFVVgsOK/CQ2naFV2iSEAAAAASUVORK5CYII=",gl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH8UlEQVR4nO2deagXVRTHP6/SelmmrRBUVqZRlpHRHrao7Vnavm9Eyx8tUpSlREgWUUkYEYVRmRJUkhUlttBiVK8syVwqWo2yTFvU0p6/iQNnYPj53m/uzO/OnTu/d79wQHwzc8/33pl7zz33nPODgICAgICAgICAgICAgICAgICAHoW+wFHAecBY4FhgB1oA2wKXAk8C7wOLga+Ad4CpwCnAlviJ3YAJwAfABiCqkxqwALhJB7BSkLfrYWBNF8Tq5W9gErANfqAfMAX410D3WFbqi1gJjAZ+zUAuluXA8JJ13wf4MofuscwAeuExru5mOjCV9cAlJQ7OH03oHsuLwGZ4iLE6LzdLcL0uwq7Xyq8t6B7LXXi4oNp4+2L5DejvUP+pFnUX6QSG4RGmWSYocq8j3QfqV2tbf5nqvMDOwH8FEFwD9HGg/10F6B7pdD8AD3BVQikxTV8H7gHOBg7Q6U/2CW06bckbezJwu+6HOhuQHONA/wUN2pcX7y1gPHCS6t5fuQinXYAharneCcwGVifuvwYPMA94FTgn54ZtJ2Cimtn1HfQIxWLzbgyb74Cbge1zPLMdOAN4CXgPD7C3pef01XUnOV2+QrHYo25gVgDXAb0tPX8wLYhDgG+0wz4puK2hicF5DtiRHoDdgcuBp4CPdH+xStcamcbmq1kr69Cm3TxDOupD4G1HBs44XVe6wqbqM5yqui9XLuLeWao+xseBc313oB6pa1EWS2eZLqS9upnybilY514N3Evyt2uBnzLwES/KdGAQHkHm60ebNEk/A/bHHwxNse7SRL7K2xp8lc4gRwXvWto3/AOcXzYh4ELVxQYn+Zo2KYuIvB0zLRFJyq1lEQJuKIDP3WWRuaIAMrHcWAKfmwriIvusUa7JbA38XOAARbofcYXrCubyhetzousLJhSpKTvG0TFJM2dYpnIRDteepQ4IRcDalFPWYXpc/raa7GtVlun/yd8ObHD/0RYNgjTpwOFOP3IofwGH1umwL/Bmhme8ofckcZjGQ7jkIuZ74bjPMakI+BO4QI+SL6nzGJuKDMbF+oyLdOBd8xAvf+HT27clEItaRL4vevN6qAcko4rLwUUO0P0eEIwqLrJEFII2Pcgqm2BUcfmhqGnucA/IRS0i9VapFTzoAbGoRUSWCqtoUwukbGJRi8iPtqe5Iz0gFbWYyJJhDQ95QChqMZEMCiuQnfcvHhCKWkyW2wqyP8EDMlGLykgbA/SkB0SiFhWJaW8KW1jOWgjCRk5giUTNDYmvDp1KoX0gB4a5MSsMEEW/oBLRmjuZNksibRBy9cE/2teZcWXodFy9dJflGaDXLTW+QU8zf9R0DMmEXlixwa+pzjOUwzLlZCvYZG6eoPJGiVXNZs7N0CNsySl6QgM9yh6EqAs9p6mOF2qQpkndhzzSqX1ujHGOOmG+Zjlsp4HyPjhkv9PkLcn8PhX41FG70ufGcKVULJIVsavuCSYXlNQbpch6DdNt17TNOY7bl5fVCENK6JxIc4jOVB2GOoy9i4AlieyKs0vcnNeHhnWJySUpFy/GUsAIzQ9930Gb83SKRROBbRTjyCvS9w2xiSfrQBxY0W4xvaUreSfhavEhIOb7tHSV4R4oGcvExJdks0xLLF8nsrgnesA3loYFpR7L8cCa5qKO14cP1gIUffTfw7UmwkcZp49awk8l68M6i50gHpL9EmtOzQO+scgYdOu5XpUjH1NS2U2xJ/BMhg3eKi0WIbjD4gBJemLWGkMu+MacZSw2wtgMD1msVUTy4sAMVtqreo/k1yyyMDgLEyeZczzk262H+wXDm1/L69yrQ78MHXSS3nOihQGSE2J0E+orXxmLjfC5obI2i9VtZqj0/MQ9zWQlyL1oyNMCj/nKWGQOq1ps6U2qRz/Dz/84vf6LJgYoJj6yAnyPSN40PeXiDU3OwWkYZmDxzLQQ4RpHdD5bAb5PJwtRpFkyMoBFY0aKDqu1LsO+OT3tnVqXtI+BV9oHvqvixONRKRfWMpqWeTHQ4K0a1UQg5RTDMDKf+I402UVLUSNX6EjRZZJe10sPuUwHZ24iDf7uCvGdYGJey67YFSZkqAPaW7+kzpSaOVPqahS8VCG+z6PWSqOLXBYbPyZFl0Vd3CNr0gNqof2t8rkaBLLm1GNJhfiKxdplKcqkyFzpCoNSdFlhoY2VFeIr1VxSQ6u2cqjwVim6rLPQxvoK8ZWxSfUSu1S4r4nCTaJyfH9PuWgvxwVq0yrSN4vK8V1ScSMhKyrHd7ZHZmfanmyWhTYqxzdt4yYng67wseFGtRlUju/xKRfV9GSwaOxl4PoYYaGdyvHtYxB6K8e2RWOmgbO03UI7leQ708D93qgwXrM4yOBtmm6xvcrxTfNoR2r9FHGA1d/wd+OOs9hm5fi26e8kpN00p6Qj4A7sopJ8TzO4MVa6n6U3KWvQiE1Uku8rhg9Y2uRvtB2U4ecwZ1McKsd3QIbgxZoe22bx/g7UBdo04nKlBhcWhUryzRLAGCveoZGfR6t/KQ6F3VvdGRN0U5Y1xPZ0ikcl+aad9LmQ8cWOS/X5PtBKBe9ala/rN6vm+MtpCb6jDY6JbdWtOYvyMbqKfMXaeblAZWcXbK31GL6nGLjIs0hHQZtQejrfkerxzVPYYbU6Am0cHbhCZfm2a8OT9PRvkZ75r1NZobFds/SaEZaODMpCT+MbEBAQEBAQEBAQEBCAa/wPSyTzXroFJkAAAAAASUVORK5CYII=";function Vs(n,{delay:e=0,duration:t=400,easing:s=es}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*i}`}}const Le=[];function ss(n,e=R){let t;const s=new Set;function i(l){if(te(n,l)&&(n=l,t)){const a=!Le.length;for(const c of s)c[1](),Le.push(c,n);if(a){for(let c=0;c<Le.length;c+=2)Le[c][0](Le[c+1]);Le.length=0}}}function r(l){i(l(n))}function o(l,a=R){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||R),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}function js(n){let e,t,s,i,r,o;return{c(){e=E("span"),t=E("span"),s=se(n[2]),w(t,"class","svelte-102gccc"),w(e,"class","wholerollwrap svelte-102gccc")},m(l,a){D(l,e,a),v(e,t),v(t,s),o=!0},p(l,a){(!o||a&4)&&rt(s,l[2])},i(l){o||(l&&Ge(()=>{o&&(r&&r.end(1),i=hl(e,Vs,{duration:4e3}),i.start())}),o=!0)},o(l){i&&i.invalidate(),l&&(r=ul(e,Vs,{duration:0})),o=!1},d(l){l&&N(e),l&&r&&r.end()}}}function vl(n){let e,t,s,i,r,o,l,a,c,u=n[2],h,d,f=js(n);return{c(){e=E("div"),e.innerHTML=`<div class="svelte-102gccc"><img src="${gl}" alt="" class="svelte-102gccc"/> <p class="svelte-102gccc"><span class="svelte-102gccc">Vision</span><br/> To pioneer the next generation of solutions by solving the problems of tomorrow</p></div> <div class="svelte-102gccc"><img src="${ml}" alt="" class="svelte-102gccc"/> <p class="svelte-102gccc"><span class="svelte-102gccc">Mission</span><br/>To create the most energy efficient electric vehicle while incorporating cutting edge technology. </p></div>`,t=M(),s=E("main"),i=E("div"),r=E("div"),r.innerHTML=`<p class="svelte-102gccc">Shell Eco-marathon is one of the world’s leading
                energy-efficiency engineering programmes for students. It aims
                to push the boundaries of what is technically possible and
                inspire young people to become leading scientists and engineers
                of future energy solutions. <br/><br/>
                The programme provides a platform for high school and university
                teams to explore every aspect of design and technology, using their
                Science, Technology, Engineering, and Maths (STEM) skills to build
                their own ultra-energy-efficient cars, and then take them out on
                the track in competition. <br/><br/>
                This time we team <span class="team_name svelte-102gccc">ReNew</span>
                representing
                <a href="https://www.kct.ac.in/" class="svelte-102gccc">Kumaraguru College of Technology</a> are participating in this prestegious competetion to show what
                our institution can bring out.</p>`,o=M(),l=E("div"),l.innerHTML=`<div class="svelte-102gccc"><img src="${_l}" alt="" class="svelte-102gccc"/></div> <div class="svelte-102gccc"><img src="${er}" alt="" class="svelte-102gccc"/></div>`,a=M(),c=E("div"),f.c(),w(e,"class","abtus svelte-102gccc"),w(r,"class","description svelte-102gccc"),w(l,"class","images svelte-102gccc"),w(i,"class","wrap svelte-102gccc"),w(s,"class","svelte-102gccc"),w(c,"class","animate svelte-102gccc")},m(p,_){D(p,e,_),D(p,t,_),D(p,s,_),v(s,i),v(i,r),n[10](r),v(i,o),v(i,l),n[11](l),D(p,a,_),D(p,c,_),f.m(c,null),h||(d=[Se(r,"mouseenter",n[4]),Se(r,"mouseleave",n[5]),Se(l,"mouseenter",n[6]),Se(l,"mouseleave",n[7]),Xo(n[9].call(null,i)),Se(i,"entry",n[8]),Se(i,"exit",yl)],h=!0)},p(p,[_]){_&4&&te(u,u=p[2])?($i(),z(f,1,1,R),Ji(),f=js(p),f.c(),W(f,1),f.m(c,null)):f.p(p,_)},i(p){W(f)},o(p){z(f)},d(p){p&&(N(e),N(t),N(s),N(a),N(c)),n[10](null),n[11](null),f.d(p),h=!1,Oe(d)}}}function yl(){}function wl(n,e,t){let s,i=0,r=["Powered with HYDROGEN fuel cell","Own manufactured Motor Controller For BLDC"],o=ss(r[1]);zo(n,o,g=>t(2,s=g)),l();function l(){setTimeout(()=>{o.set(r[i]),i++,i>=r.length&&(i=0),l()},4e3)}let a,c;function u(){t(1,c.style.transform="scale(1.05)",c),t(1,c.style.transition="all 0.5s",c)}function h(){t(1,c.style.transform="scale(1)",c),t(1,c.style.transition="all 1s",c)}function d(){t(0,a.style.transform="scale(1.05)",a),t(0,a.style.transition="all 0.5s",a)}function f(){t(0,a.style.transform="scale(1)",a),t(0,a.style.transition="all 1s",a)}function p(){t(0,a.style.transform="translateY(0em)",a),t(1,c.style.transform="translateY(0em)",c)}let _=null;function C(g){typeof IntersectionObserver<"u"?(_=new IntersectionObserver(L=>{L.forEach(Fs=>{const Ho=Fs.isIntersecting?"entry":"exit";Fs.target.dispatchEvent(new CustomEvent(Ho))})}),_.observe(g)):console.warn("IntersectionObserver is not supported on this environment.")}function A(g){H[g?"unshift":"push"](()=>{c=g,t(1,c)})}function B(g){H[g?"unshift":"push"](()=>{a=g,t(0,a)})}return[a,c,s,o,u,h,d,f,p,C,A,B]}class Cl extends he{constructor(e){super(),ce(this,e,wl,vl,te,{})}}const El="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='96px'%20height='96px'%3e%3cpath%20fill='%234caf50'%20d='M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z'/%3e%3cpath%20fill='%231e88e5'%20d='M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z'/%3e%3cpolygon%20fill='%23e53935'%20points='35,11.2%2024,19.45%2013,11.2%2012,17%2013,23.7%2024,31.95%2035,23.7%2036,17'/%3e%3cpath%20fill='%23c62828'%20d='M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z'/%3e%3cpath%20fill='%23fbc02d'%20d='M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0%20C43.076,8,45,9.924,45,12.298z'/%3e%3c/svg%3e",bl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='24'%20cy='24'%20r='20'%20fill='%230077B5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.7747%2014.2839C18.7747%2015.529%2017.8267%2016.5366%2016.3442%2016.5366C14.9194%2016.5366%2013.9713%2015.529%2014.0007%2014.2839C13.9713%2012.9783%2014.9193%2012%2016.3726%2012C17.8267%2012%2018.7463%2012.9783%2018.7747%2014.2839ZM14.1199%2032.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.2393%2022.9446C22.2393%2021.1357%2022.1797%2019.5935%2022.1201%2018.3182H26.0351L26.2432%2020.305H26.3322C26.9254%2019.3854%2028.4079%2017.9927%2030.8101%2017.9927C33.7752%2017.9927%2035.9995%2019.9502%2035.9995%2024.219V32.821H31.4922V24.7838C31.4922%2022.9144%2030.8404%2021.6399%2029.2093%2021.6399C27.9633%2021.6399%2027.2224%2022.4999%2026.9263%2023.3297C26.8071%2023.6268%2026.7484%2024.0412%2026.7484%2024.4574V32.821H22.2411V22.9446H22.2393Z'%20fill='white'/%3e%3c/svg%3e",Il="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='96px'%20height='96px'%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8ma'%20cx='19.38'%20cy='42.035'%20r='44.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fd5'/%3e%3cstop%20offset='.328'%20stop-color='%23ff543f'/%3e%3cstop%20offset='.348'%20stop-color='%23fc5245'/%3e%3cstop%20offset='.504'%20stop-color='%23e64771'/%3e%3cstop%20offset='.643'%20stop-color='%23d53e91'/%3e%3cstop%20offset='.761'%20stop-color='%23cc39a4'/%3e%3cstop%20offset='.841'%20stop-color='%23c837ab'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8ma)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8mb'%20cx='11.786'%20cy='5.54'%20r='29.813'%20gradientTransform='matrix(1%200%200%20.6663%200%201.849)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234168c9'/%3e%3cstop%20offset='.999'%20stop-color='%234168c9'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8mb)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cpath%20fill='%23fff'%20d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z%20M24,19c-2.757,0-5,2.243-5,5%20s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'/%3e%3ccircle%20cx='31.5'%20cy='16.5'%20r='1.5'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12%20C37,33.86,33.859,37,30,37z%20M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'/%3e%3c/svg%3e";function Sl(n){let e;return{c(){e=E("main"),e.innerHTML=`<div class="svelte-6dl0w5"><p class="title svelte-6dl0w5">Team ReNew</p> <p class="svelte-6dl0w5">Address : <br/>Kumaraguru College of Technology <br/> Chinnavedampatti,
            Coimbatore, Tamil Nadu 641049</p> <div class="contact svelte-6dl0w5"><div class="svelte-6dl0w5"><a href="mailto: team.renew@kct.ac.in" class="svelte-6dl0w5"><img src="${El}" alt="" class="svelte-6dl0w5"/></a></div> <div class="svelte-6dl0w5"><a href="https://www.linkedin.com/in/team-renew-45266a295/" class="svelte-6dl0w5"><img src="${bl}" alt="" class="svelte-6dl0w5"/></a></div> <div class="svelte-6dl0w5"><a href="https://www.instagram.com/teamrenew_kct/" class="svelte-6dl0w5"><img src="${Il}" alt="" class="svelte-6dl0w5"/></a></div></div></div> <div class="map svelte-6dl0w5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.11434101264!2d76.98745576980639!3d11.076465331153605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f81b7514a15f%3A0x155e29f8d14154fc!2sKumaraguru%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1716911081806!5m2!1sen!2sin" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="svelte-6dl0w5"></iframe></div>`,w(e,"class","svelte-6dl0w5")},m(t,s){D(t,e,s)},p:R,i:R,o:R,d(t){t&&N(e)}}}class Tl extends he{constructor(e){super(),ce(this,e,null,Sl,te,{})}}const Al="/teamrenew/assets/maxon-Bip0JnWq.png",Rl="/teamrenew/assets/hydrogen-ByiQrZYs.png";function Nl(n){let e,t,s,i,r,o,l,a,c,u;return{c(){e=E("main"),t=E("div"),s=E("div"),s.innerHTML=`<img src="${Al}" alt="" class="svelte-1f31b66"/>`,i=M(),r=E("div"),r.innerHTML=`<p class="svelte-1f31b66">The maxon EC-i 52 brushless motor is a high-performance drive
                designed for industrial applications.</p>`,o=M(),l=E("div"),a=E("div"),a.innerHTML=`<img src="${Rl}" alt="" class="svelte-1f31b66"/>`,c=M(),u=E("div"),u.innerHTML='<p class="svelte-1f31b66">The Protium-375 is a remarkable hydrogen fuel cell system developed by Spectronik. It’s specifically designed for the Eco-Marathon category, where students in Science, Technology, Engineering, and Mathematics (STEM) compete to engineer the world’s most energy-efficient vehicles.</p>',w(s,"class","imagewrap svelte-1f31b66"),w(r,"class","des svelte-1f31b66"),w(t,"class","scalable svelte-1f31b66"),w(a,"class","imagewrap svelte-1f31b66"),w(u,"class","des svelte-1f31b66"),w(l,"class","scalable svelte-1f31b66"),w(e,"class","svelte-1f31b66")},m(h,d){D(h,e,d),v(e,t),v(t,s),n[6](s),v(t,i),v(t,r),n[7](r),n[8](t),v(e,o),v(e,l),v(l,a),n[9](a),v(l,c),v(l,u),n[10](u),n[11](l)},p:R,i:R,o:R,d(h){h&&N(e),n[6](null),n[7](null),n[8](null),n[9](null),n[10](null),n[11](null)}}}function xl(n,e,t){let s,i,r,o,l,a;cn(()=>{r.addEventListener("mouseover",()=>{window.innerWidth>1e3&&(t(3,o.style.width="20em",o),t(3,o.style.height="30em",o),t(2,r.style.width="40em",r),t(2,r.style.height="20em",r),t(5,a.style.width="20em",a),t(4,l.style.width="40em",l),t(5,a.style.transition="all 1s",a),t(4,l.style.transition="all 1s",l),t(3,o.style.transition="all 1s",o),t(2,r.style.transition="all 1s",r),t(4,l.style.filter="blur(0em)",l),t(5,a.style.filter="blur(1.5em)",a))}),o.addEventListener("mouseover",()=>{window.innerWidth>1e3&&(t(2,r.style.width="20em",r),t(2,r.style.height="30em",r),t(3,o.style.width="40em",o),t(3,o.style.height="20em",o),t(5,a.style.width="40em",a),t(4,l.style.width="20em",l),t(5,a.style.transition="all 1s",a),t(4,l.style.transition="all 1s",l),t(2,r.style.transition="all 1s",r),t(3,o.style.transition="all 1s",o),t(4,l.style.filter="blur(1.5em)",l),t(5,a.style.filter="blur(0)",a))})});function c(_){H[_?"unshift":"push"](()=>{r=_,t(2,r)})}function u(_){H[_?"unshift":"push"](()=>{l=_,t(4,l)})}function h(_){H[_?"unshift":"push"](()=>{s=_,t(0,s)})}function d(_){H[_?"unshift":"push"](()=>{o=_,t(3,o)})}function f(_){H[_?"unshift":"push"](()=>{a=_,t(5,a)})}function p(_){H[_?"unshift":"push"](()=>{i=_,t(1,i)})}return[s,i,r,o,l,a,c,u,h,d,f,p]}class kl extends he{constructor(e){super(),ce(this,e,xl,Nl,te,{})}}const Dl="/teamrenew/assets/google-DBIJS0XQ.png",Ol="/teamrenew/assets/propel-DlR7CWLl.png",Ml="/teamrenew/assets/volvo-BEq9vgix.png";function Pl(n){let e;return{c(){e=E("main"),e.innerHTML=`<h2 class="svelte-zr974n">Our sponsers</h2> <div class="images svelte-zr974n"><img src="${Dl}" alt="" class="svelte-zr974n"/> <img src="${Ol}" alt="" class="svelte-zr974n"/> <img src="${Ml}" alt="" class="svelte-zr974n"/></div>`,w(e,"class","svelte-zr974n")},m(t,s){D(t,e,s)},p:R,i:R,o:R,d(t){t&&N(e)}}}class Ll extends he{constructor(e){super(),ce(this,e,null,Pl,te,{})}}const Fl="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='100px'%20height='100px'%3e%3cpath%20d='M%200%207.5%20L%200%2012.5%20L%2050%2012.5%20L%2050%207.5%20Z%20M%200%2022.5%20L%200%2027.5%20L%2050%2027.5%20L%2050%2022.5%20Z%20M%200%2037.5%20L%200%2042.5%20L%2050%2042.5%20L%2050%2037.5%20Z'/%3e%3c/svg%3e",Bl="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='24px'%20height='24px'%3e%3cpath%20d='M%204.7070312%203.2929688%20L%203.2929688%204.7070312%20L%2010.585938%2012%20L%203.2929688%2019.292969%20L%204.7070312%2020.707031%20L%2012%2013.414062%20L%2019.292969%2020.707031%20L%2020.707031%2019.292969%20L%2013.414062%2012%20L%2020.707031%204.7070312%20L%2019.292969%203.2929688%20L%2012%2010.585938%20L%204.7070312%203.2929688%20z'/%3e%3c/svg%3e";function Hl(n){let e,t,s,i,r,o,l,a,c,u,h,d,f,p,_,C,A,B;return{c(){e=E("nav"),t=E("div"),s=E("img"),r=M(),o=E("ul"),l=E("li"),l.innerHTML='<a href="/" class="svelte-16nmpjj">HOME</a>',a=M(),c=E("li"),c.innerHTML='<a href="/team" class="svelte-16nmpjj">ABOUT US</a>',u=M(),h=E("li"),h.innerHTML='<a href="/dashboard" class="svelte-16nmpjj">DASHBOARD</a>',d=M(),f=E("header"),p=E("div"),_=E("img"),A=M(),B=E("div"),B.innerHTML=`<img src="${er}" alt="" class="svelte-16nmpjj"/>`,Hs(s.src,i=Bl)||w(s,"src",i),w(s,"alt","cross"),w(s,"class","svelte-16nmpjj"),w(t,"class","cross svelte-16nmpjj"),w(l,"class","svelte-16nmpjj"),w(c,"class","svelte-16nmpjj"),w(h,"class","svelte-16nmpjj"),w(o,"class","svelte-16nmpjj"),w(e,"class","svelte-16nmpjj"),Hs(_.src,C=Fl)||w(_,"src",C),w(_,"alt","menu"),w(_,"class","svelte-16nmpjj"),w(p,"class","menu svelte-16nmpjj"),w(B,"class","logo svelte-16nmpjj"),w(f,"class","svelte-16nmpjj")},m(g,L){D(g,e,L),v(e,t),v(t,s),n[6](s),v(e,r),v(e,o),v(o,l),n[7](l),v(o,a),v(o,c),n[8](c),v(o,u),v(o,h),n[9](h),n[10](e),D(g,d,L),D(g,f,L),v(f,p),v(p,_),n[11](_),v(f,A),v(f,B)},p:R,i:R,o:R,d(g){g&&(N(e),N(d),N(f)),n[6](null),n[7](null),n[8](null),n[9](null),n[10](null),n[11](null)}}}function Wl(n,e,t){let s,i,r,o,l,a;cn(()=>{s.addEventListener("click",()=>{t(1,i.style.transform="translateX(0)",i),t(3,o.style.transform="translateX(0)",o),t(4,l.style.transform="translateX(0)",l),t(5,a.style.transform="translateX(0)",a)}),r.addEventListener("click",()=>{t(1,i.style.transform="translateX(-200vw)",i),t(3,o.style.transform="translateX(-100vw)",o),t(4,l.style.transform="translateX(-100vw)",l),t(5,a.style.transform="translateX(-100vw)",a)})});function c(_){H[_?"unshift":"push"](()=>{r=_,t(2,r)})}function u(_){H[_?"unshift":"push"](()=>{o=_,t(3,o)})}function h(_){H[_?"unshift":"push"](()=>{l=_,t(4,l)})}function d(_){H[_?"unshift":"push"](()=>{a=_,t(5,a)})}function f(_){H[_?"unshift":"push"](()=>{i=_,t(1,i)})}function p(_){H[_?"unshift":"push"](()=>{s=_,t(0,s)})}return[s,i,r,o,l,a,c,u,h,d,f,p]}class is extends he{constructor(e){super(),ce(this,e,Wl,Hl,te,{})}}const Ul="/teamrenew/assets/video-wwxMqBxy.mov";function Vl(n){let e,t,s,i,r,o,l,a,c,u,h,d,f,p,_,C,A,B;return e=new is({}),h=new Cl({}),f=new kl({}),_=new Ll({}),A=new Tl({}),{c(){Z(e.$$.fragment),t=M(),s=E("div"),i=E("div"),i.innerHTML=`<video autoplay="" muted="" loop="" class="svelte-1g0bk5f"><source src="${Ul}"/></video>`,r=M(),o=E("div"),l=E("h2"),l.textContent="ReNew",a=M(),c=E("main"),c.innerHTML=`<div class="wrap svelte-1g0bk5f"><div class="imgwrap svelte-1g0bk5f"><img src="${pl}" alt="car" class="svelte-1g0bk5f"/></div></div>`,u=M(),Z(h.$$.fragment),d=M(),Z(f.$$.fragment),p=M(),Z(_.$$.fragment),C=M(),Z(A.$$.fragment),w(i,"class","videowrap svelte-1g0bk5f"),w(l,"class","title svelte-1g0bk5f"),w(o,"class","entry svelte-1g0bk5f"),w(s,"class","wrapentry svelte-1g0bk5f"),w(c,"class","svelte-1g0bk5f")},m(g,L){Q(e,g,L),D(g,t,L),D(g,s,L),v(s,i),v(s,r),v(s,o),v(o,l),n[3](l),n[4](s),D(g,a,L),D(g,c,L),n[5](c),D(g,u,L),Q(h,g,L),D(g,d,L),Q(f,g,L),D(g,p,L),Q(_,g,L),D(g,C,L),Q(A,g,L),B=!0},p:R,i(g){B||(W(e.$$.fragment,g),W(h.$$.fragment,g),W(f.$$.fragment,g),W(_.$$.fragment,g),W(A.$$.fragment,g),B=!0)},o(g){z(e.$$.fragment,g),z(h.$$.fragment,g),z(f.$$.fragment,g),z(_.$$.fragment,g),z(A.$$.fragment,g),B=!1},d(g){g&&(N(t),N(s),N(a),N(c),N(u),N(d),N(p),N(C)),X(e,g),n[3](null),n[4](null),n[5](null),X(h,g),X(f,g),X(_,g),X(A,g)}}}function jl(n,e,t){let s,i,r;function o(c){H[c?"unshift":"push"](()=>{i=c,t(1,i)})}function l(c){H[c?"unshift":"push"](()=>{s=c,t(0,s)})}function a(c){H[c?"unshift":"push"](()=>{r=c,t(2,r)})}return[s,i,r,o,l,a]}class ql extends he{constructor(e){super(),ce(this,e,jl,Vl,te,{})}}const zl="/teamrenew/assets/asvita-B2R7-K-i.jpg",Gl="/teamrenew/assets/prathish-B20AatD2.jpg",Kl="/teamrenew/assets/siyam-D0lKySUI.jpg",Yl="/teamrenew/assets/dhanush-CxtRIiNv.jpg",Ql="/teamrenew/assets/harini-Cx0aj60S.jpg",Xl="/teamrenew/assets/uthith-BAKq0BGp.jpg",$l="/teamrenew/assets/pratheesh-BVz0HTeu.jpg",Jl="/teamrenew/assets/vikkram-C1ICpaOy.jpg";function Zl(n){let e,t,s,i,r,o,l,a,c,u,h;return{c(){e=E("main"),t=E("div"),t.innerHTML='<p class="svelte-150o3cx">The Team</p>',s=M(),i=E("div"),r=E("div"),r.innerHTML=`<div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${Gl}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Prathish</h3> <p class="svelte-150o3cx">Captain</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem. Lorem</p></div> <div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${zl}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Asvitha</h3> <p class="svelte-150o3cx">Manager</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem. Lorem</p></div> <div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${Xl}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Uthith</h3> <p class="svelte-150o3cx">Electrical Lead</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.</p></div>`,o=M(),l=E("div"),l.innerHTML=`<div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${$l}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Pratheesh</h3> <p class="svelte-150o3cx">Hydeogen fuel cell analyst</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.</p></div> <div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${Kl}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Siyam</h3> <p class="svelte-150o3cx">Embedded Lead</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.</p></div> <div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${Yl}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Dhanush</h3> <p class="svelte-150o3cx">Electrical and Embedded</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.</p></div>`,a=M(),c=E("div"),c.innerHTML=`<div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${Ql}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Harini</h3></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.</p></div> <div class="svelte-150o3cx"><div class="details svelte-150o3cx"><img src="${Jl}" alt="" class="svelte-150o3cx"/> <h3 class="svelte-150o3cx">Vikkram</h3> <p class="svelte-150o3cx">Mechanical</p></div> <p class="svelte-150o3cx">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium repellendus est voluptas molestias ex, facilis
                    fugit et error at accusamus quis? Repellat, odio expedita
                    harum voluptas architecto ipsum. Corporis, autem.</p></div>`,w(t,"class","head svelte-150o3cx"),w(r,"class","section1 svelte-150o3cx"),w(l,"class","section2 svelte-150o3cx"),w(c,"class","section3 svelte-150o3cx"),w(i,"class","wrap svelte-150o3cx"),Ws(i,"--translateY",n[3]),w(e,"class","svelte-150o3cx")},m(d,f){D(d,e,f),v(e,t),v(e,s),v(e,i),v(i,r),v(i,o),v(i,l),v(i,a),v(i,c),n[5](i),u||(h=Se(window,"mousemove",n[4]),u=!0)},p(d,[f]){f&8&&Ws(i,"--translateY",d[3])},i:R,o:R,d(d){d&&N(e),n[5](null),u=!1,h()}}}function ea(n,e,t){let s=0,i=0,r,o="10em";cn(()=>{setTimeout(()=>{t(3,o="0em")},5)});const l=c=>t(0,{pageX:s,pageY:i}=c,s,t(1,i));function a(c){H[c?"unshift":"push"](()=>{r=c,t(2,r)})}return[s,i,r,o,l,a]}class ta extends he{constructor(e){super(),ce(this,e,ea,Zl,te,{})}}function Pn(n,e=!1){return n=n.slice(n.startsWith("/#")?2:0,n.endsWith("/*")?-2:void 0),n.startsWith("/")||(n="/"+n),n==="/"&&(n=""),e&&!n.endsWith("/")&&(n+="/"),n}function na(n,e){n=Pn(n,!0),e=Pn(e,!0);let t=[],s={},i=!0,r=n.split("/").map(l=>l.startsWith(":")?(t.push(l.slice(1)),"([^\\/]+)"):l).join("\\/"),o=e.match(new RegExp(`^${r}$`));return o||(i=!1,o=e.match(new RegExp(`^${r}`))),o?(t.forEach((l,a)=>s[l]=o[a+1]),{exact:i,params:s,part:o[0].slice(0,-1)}):null}function tr(n,e,t){if(t==="")return n;if(t[0]==="/")return t;let s=o=>o.split("/").filter(l=>l!==""),i=s(n);return"/"+(e?s(e):[]).map((o,l)=>i[l]).join("/")+"/"+t}function qs(n,e,t,s){let i=[e,"data-"+e].reduce((r,o)=>{let l=n.getAttribute(o);return t&&n.removeAttribute(o),l===null?r:l},!1);return!s&&i===""?!0:i||s||!1}function sa(n){let e=n.split("&").map(t=>t.split("=")).reduce((t,s)=>{let i=s[0];if(!i)return t;let r=s.length>1?s[s.length-1]:!0;return typeof r=="string"&&r.includes(",")&&(r=r.split(",")),t[i]===void 0?t[i]=[r]:t[i].push(r),t},{});return Object.entries(e).reduce((t,s)=>(t[s[0]]=s[1].length>1?s[1]:s[1][0],t),{})}function ia(n){return Object.entries(n).map(([e,t])=>t?t===!0?e:`${e}=${Array.isArray(t)?t.join(","):t}`:null).filter(e=>e).join("&")}function zs(n,e){return n?e+n:""}function nr(n){throw new Error("[Tinro] "+n)}var ie={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(n,e,t,s){return n===this.HISTORY?e&&e():n===this.HASH?t&&t():s&&s()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},rs,sr,ir,jt="",ne=ra();function ra(){let n=ie.getDefault(),e,t=o=>window.onhashchange=window.onpopstate=rs=null,s=o=>e&&e(wn(n)),i=o=>{o&&(n=o),t(),n!==ie.OFF&&ie.run(n,l=>window.onpopstate=s,l=>window.onhashchange=s)&&s()},r=o=>{let l=Object.assign(wn(n),o);return l.path+zs(ia(l.query),"?")+zs(l.hash,"#")};return{mode:i,get:o=>wn(n),go(o,l){oa(n,o,l),s()},start(o){e=o,i()},stop(){e=null,i(ie.OFF)},set(o){this.go(r(o),!o.path)},methods(){return la(this)},base:o=>jt=o}}function oa(n,e,t){!t&&(sr=ir);let s=i=>history[`${t?"replace":"push"}State`]({},"",i);ie.run(n,i=>s(jt+e),i=>s(`#${e}`),i=>rs=e)}function wn(n){let e=window.location,t=ie.run(n,i=>(jt?e.pathname.replace(jt,""):e.pathname)+e.search+e.hash,i=>String(e.hash.slice(1)||"/"),i=>rs||"/"),s=t.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return ir=t,{url:t,from:sr,path:s[1]||"",query:sa(s[2]||""),hash:s[3]||""}}function la(n){let e=()=>n.get().query,t=o=>n.set({query:o}),s=o=>t(o(e())),i=()=>n.get().hash,r=o=>n.set({hash:o});return{hash:{get:i,set:r,clear:()=>r("")},query:{replace:t,clear:()=>t(""),get(o){return o?e()[o]:e()},set(o,l){s(a=>(a[o]=l,a))},delete(o){s(l=>(l[o]&&delete l[o],l))}}}}var ft=aa();function aa(){let{subscribe:n}=ss(ne.get(),e=>{ne.start(e);let t=ca(ne.go);return()=>{ne.stop(),t()}});return{subscribe:n,goto:ne.go,params:ha,meta:fa,useHashNavigation:e=>ne.mode(e?ie.HASH:ie.HISTORY),mode:{hash:()=>ne.mode(ie.HASH),history:()=>ne.mode(ie.HISTORY),memory:()=>ne.mode(ie.MEMORY)},base:ne.base,location:ne.methods()}}function ca(n){let e=t=>{let s=t.target.closest("a[href]"),i=s&&qs(s,"target",!1,"_self"),r=s&&qs(s,"tinro-ignore"),o=t.ctrlKey||t.metaKey||t.altKey||t.shiftKey;if(i=="_self"&&!r&&!o&&s){let l=s.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(l)||(t.preventDefault(),n(l.startsWith("/")?l:s.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function ha(){return ns("tinro").meta.params}var qt="tinro",ua=rr({pattern:"",matched:!0});function da(n){let e=ns(qt)||ua;(e.exact||e.fallback)&&nr(`${n.fallback?"<Route fallback>":`<Route path="${n.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let t=n.fallback?"fallbacks":"childs",s=ss({}),i=rr({fallback:n.fallback,parent:e,update(r){i.exact=!r.path.endsWith("/*"),i.pattern=Pn(`${i.parent.pattern||""}${r.path}`),i.redirect=r.redirect,i.firstmatch=r.firstmatch,i.breadcrumb=r.breadcrumb,i.match()},register:()=>(i.parent[t].add(i),async()=>{i.parent[t].delete(i),i.parent.activeChilds.delete(i),i.router.un&&i.router.un(),i.parent.match()}),show:()=>{n.onShow(),!i.fallback&&i.parent.activeChilds.add(i)},hide:()=>{n.onHide(),i.parent.activeChilds.delete(i)},match:async()=>{i.matched=!1;let{path:r,url:o,from:l,query:a}=i.router.location,c=na(i.pattern,r);if(!i.fallback&&c&&i.redirect&&(!i.exact||i.exact&&c.exact)){let u=tr(r,i.parent.pattern,i.redirect);return ft.goto(u,!0)}i.meta=c&&{from:l,url:o,query:a,match:c.part,pattern:i.pattern,breadcrumbs:i.parent.meta&&i.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:s.subscribe},i.breadcrumb&&i.meta&&i.meta.breadcrumbs.push({name:i.breadcrumb,path:c.part}),s.set(i.meta),c&&!i.fallback&&(!i.exact||i.exact&&c.exact)&&(!i.parent.firstmatch||!i.parent.matched)?(n.onMeta(i.meta),i.parent.matched=!0,i.show()):i.hide(),c&&i.showFallbacks()}});return rl(qt,i),cn(()=>i.register()),i}function fa(){return ol(qt)?ns(qt).meta:nr("meta() function must be run inside any `<Route>` child component only")}function rr(n){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,async showFallbacks(){if(!this.fallback&&(await ll(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let t=this;for(;t.fallbacks.size==0;)if(t=t.parent,!t)return;t&&t.fallbacks.forEach(s=>{if(s.redirect){let i=tr("/",s.parent.pattern,s.redirect);ft.goto(i,!0)}else s.show()})}},start(){this.router.un||(this.router.un=ft.subscribe(t=>{this.router.location=t,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,n),e.start(),e}const pa=n=>({params:n&2,meta:n&4}),Gs=n=>({params:n[1],meta:n[2]});function Ks(n){let e;const t=n[9].default,s=Go(t,n,n[8],Gs);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&262)&&Yo(s,t,i,i[8],e?Ko(t,i[8],r,pa):Qo(i[8]),Gs)},i(i){e||(W(s,i),e=!0)},o(i){z(s,i),e=!1},d(i){s&&s.d(i)}}}function _a(n){let e,t,s=n[0]&&Ks(n);return{c(){s&&s.c(),e=Zo()},m(i,r){s&&s.m(i,r),D(i,e,r),t=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&W(s,1)):(s=Ks(i),s.c(),W(s,1),s.m(e.parentNode,e)):s&&($i(),z(s,1,1,()=>{s=null}),Ji())},i(i){t||(W(s),t=!0)},o(i){z(s),t=!1},d(i){i&&N(e),s&&s.d(i)}}}function ma(n,e,t){let{$$slots:s={},$$scope:i}=e,{path:r="/*"}=e,{fallback:o=!1}=e,{redirect:l=!1}=e,{firstmatch:a=!1}=e,{breadcrumb:c=null}=e,u=!1,h={},d={};const f=da({fallback:o,onShow(){t(0,u=!0)},onHide(){t(0,u=!1)},onMeta(p){t(2,d=p),t(1,h=d.params)}});return n.$$set=p=>{"path"in p&&t(3,r=p.path),"fallback"in p&&t(4,o=p.fallback),"redirect"in p&&t(5,l=p.redirect),"firstmatch"in p&&t(6,a=p.firstmatch),"breadcrumb"in p&&t(7,c=p.breadcrumb),"$$scope"in p&&t(8,i=p.$$scope)},n.$$.update=()=>{n.$$.dirty&232&&f.update({path:r,redirect:l,firstmatch:a,breadcrumb:c})},[u,h,d,r,o,l,a,c,i,s]}class Cn extends he{constructor(e){super(),ce(this,e,ma,_a,te,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}var Ys={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw $e(e)},$e=function(n){return new Error("Firebase Database ("+or.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ga=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},os={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ga(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new va;const d=r<<2|l>>4;if(s.push(d),c!==64){const f=l<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class va extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ar=function(n){const e=lr(n);return os.encodeByteArray(e,!0)},zt=function(n){return ar(n).replace(/\./g,"")},Ln=function(n){try{return os.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){return cr(void 0,n)}function cr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!wa(t)||(n[t]=cr(n[t],e[t]));return n}function wa(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=()=>Ca().__FIREBASE_DEFAULTS__,ba=()=>{if(typeof process>"u"||typeof Ys>"u")return;const n=Ys.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ia=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ln(n[1]);return e&&JSON.parse(e)},hr=()=>{try{return Ea()||ba()||Ia()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sa=n=>{var e,t;return(t=(e=hr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ta=n=>{const e=Sa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ur=()=>{var n;return(n=hr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zt(JSON.stringify(t)),zt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ra())}function Na(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fr(){return or.NODE_ADMIN===!0}function xa(){try{return typeof indexedDB=="object"}catch{return!1}}function ka(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="FirebaseError";class Tt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Da,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Oa(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,l,s)}}function Oa(n,e){return n.replace(Ma,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ma=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){return JSON.parse(n)}function U(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=pt(Ln(r[0])||""),t=pt(Ln(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Pa=function(n){const e=_r(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},La=function(n){const e=_r(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ke(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Xs(r)&&Xs(o)){if(!Fn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Xs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function mr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){return n&&n._delegate?n._delegate:n}class _t{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ls;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Va(e))try{this.getOrInitializeService({instanceIdentifier:Te})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Te){return this.instances.has(e)}getOptions(e=Te){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ua(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Te){return this.component?this.component.multipleInstances?e:Te:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ua(n){return n===Te?void 0:n}function Va(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const qa={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},za=k.INFO,Ga={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Ka=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ga[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=za,this._logHandler=Ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Ya=(n,e)=>e.some(t=>n instanceof t);let $s,Js;function Qa(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xa(){return Js||(Js=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vr=new WeakMap,Bn=new WeakMap,yr=new WeakMap,En=new WeakMap,as=new WeakMap;function $a(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ge(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&vr.set(t,n)}).catch(()=>{}),as.set(e,n),e}function Ja(n){if(Bn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Bn.set(n,e)}let Hn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Za(n){Hn=n(Hn)}function ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(bn(this),e,...t);return yr.set(s,e.sort?e.sort():[e]),ge(s)}:Xa().includes(n)?function(...e){return n.apply(bn(this),e),ge(vr.get(this))}:function(...e){return ge(n.apply(bn(this),e))}}function tc(n){return typeof n=="function"?ec(n):(n instanceof IDBTransaction&&Ja(n),Ya(n,Qa())?new Proxy(n,Hn):n)}function ge(n){if(n instanceof IDBRequest)return $a(n);if(En.has(n))return En.get(n);const e=tc(n);return e!==n&&(En.set(n,e),as.set(e,n)),e}const bn=n=>as.get(n);function nc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=ge(o);return s&&o.addEventListener("upgradeneeded",a=>{s(ge(o.result),a.oldVersion,a.newVersion,ge(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const sc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],In=new Map;function Zs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(In.get(e))return In.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ic.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sc.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return In.set(e,r),r}Za(n=>({...n,get:(e,t,s)=>Zs(e,t)||n.get(e,t,s),has:(e,t)=>!!Zs(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wn="@firebase/app",ei="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new gr("@firebase/app"),lc="@firebase/app-compat",ac="@firebase/analytics-compat",cc="@firebase/analytics",hc="@firebase/app-check-compat",uc="@firebase/app-check",dc="@firebase/auth",fc="@firebase/auth-compat",pc="@firebase/database",_c="@firebase/database-compat",mc="@firebase/functions",gc="@firebase/functions-compat",vc="@firebase/installations",yc="@firebase/installations-compat",wc="@firebase/messaging",Cc="@firebase/messaging-compat",Ec="@firebase/performance",bc="@firebase/performance-compat",Ic="@firebase/remote-config",Sc="@firebase/remote-config-compat",Tc="@firebase/storage",Ac="@firebase/storage-compat",Rc="@firebase/firestore",Nc="@firebase/vertexai-preview",xc="@firebase/firestore-compat",kc="firebase",Dc="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]",Oc={[Wn]:"fire-core",[lc]:"fire-core-compat",[cc]:"fire-analytics",[ac]:"fire-analytics-compat",[uc]:"fire-app-check",[hc]:"fire-app-check-compat",[dc]:"fire-auth",[fc]:"fire-auth-compat",[pc]:"fire-rtdb",[_c]:"fire-rtdb-compat",[mc]:"fire-fn",[gc]:"fire-fn-compat",[vc]:"fire-iid",[yc]:"fire-iid-compat",[wc]:"fire-fcm",[Cc]:"fire-fcm-compat",[Ec]:"fire-perf",[bc]:"fire-perf-compat",[Ic]:"fire-rc",[Sc]:"fire-rc-compat",[Tc]:"fire-gcs",[Ac]:"fire-gcs-compat",[Rc]:"fire-fst",[xc]:"fire-fst-compat",[Nc]:"fire-vertex","fire-js":"fire-js",[kc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Map,Mc=new Map,Vn=new Map;function ti(n,e){try{n.container.addComponent(e)}catch(t){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yt(n){const e=n.name;if(Vn.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;Vn.set(e,n);for(const t of Kt.values())ti(t,n);for(const t of Mc.values())ti(t,n);return!0}function Pc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new pr("app","Firebase",Lc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=Dc;function wr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Un,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ve.create("bad-app-name",{appName:String(i)});if(t||(t=ur()),!t)throw ve.create("no-options");const r=Kt.get(i);if(r){if(Fn(t,r.options)&&Fn(s,r.config))return r;throw ve.create("duplicate-app",{appName:i})}const o=new ja(i);for(const a of Vn.values())o.addComponent(a);const l=new Fc(t,s,o);return Kt.set(i,l),l}function Hc(n=Un){const e=Kt.get(n);if(!e&&n===Un&&ur())return wr();if(!e)throw ve.create("no-app",{appName:n});return e}function je(n,e,t){var s;let i=(s=Oc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(l.join(" "));return}Yt(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="firebase-heartbeat-database",Uc=1,mt="firebase-heartbeat-store";let Sn=null;function Cr(){return Sn||(Sn=nc(Wc,Uc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),Sn}async function Vc(n){try{const t=(await Cr()).transaction(mt),s=await t.objectStore(mt).get(Er(n));return await t.done,s}catch(e){if(e instanceof Tt)Ne.warn(e.message);else{const t=ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ne.warn(t.message)}}}async function ni(n,e){try{const s=(await Cr()).transaction(mt,"readwrite");await s.objectStore(mt).put(e,Er(n)),await s.done}catch(t){if(t instanceof Tt)Ne.warn(t.message);else{const s=ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ne.warn(s.message)}}}function Er(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=1024,qc=30*24*60*60*1e3;class zc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=si();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=qc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=si(),{heartbeatsToSend:s,unsentEntries:i}=Gc(this._heartbeatsCache.heartbeats),r=zt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function si(){return new Date().toISOString().substring(0,10)}function Gc(n,e=jc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ii(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ii(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Kc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xa()?ka().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ni(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ni(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ii(n){return zt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){Yt(new _t("platform-logger",e=>new rc(e),"PRIVATE")),Yt(new _t("heartbeat",e=>new zc(e),"PRIVATE")),je(Wn,ei,n),je(Wn,ei,"esm2017"),je("fire-js","")}Yc("");var Qc="firebase",Xc="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(Qc,Xc,"app");var ri={};const oi="@firebase/database",li="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br="";function $c(n){br=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:pt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return pe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jc(e)}}catch{}return new Zc},Re=Ir("localStorage"),eh=Ir("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new gr("@firebase/database"),th=function(){let n=1;return function(){return n++}}(),Sr=function(n){const e=Ha(n),t=new Ba;t.update(e);const s=t.digest();return os.encodeByteArray(s)},Rt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rt.apply(null,s):typeof s=="object"?e+=U(s):e+=s,e+=" "}return e};let lt=null,ai=!0;const nh=function(n,e){m(!e,"Can't turn on custom loggers persistently."),qe.logLevel=k.VERBOSE,lt=qe.log.bind(qe)},K=function(...n){if(ai===!0&&(ai=!1,lt===null&&eh.get("logging_enabled")===!0&&nh()),lt){const e=Rt.apply(null,n);lt(e)}},Nt=function(n){return function(...e){K(n,...e)}},jn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rt(...n);qe.error(e)},fe=function(...n){const e=`FIREBASE FATAL ERROR: ${Rt(...n)}`;throw qe.error(e),new Error(e)},ee=function(...n){const e="FIREBASE WARNING: "+Rt(...n);qe.warn(e)},sh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ih=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ye="[MIN_NAME]",xe="[MAX_NAME]",Je=function(n,e){if(n===e)return 0;if(n===Ye||e===xe)return-1;if(e===Ye||n===xe)return 1;{const t=ci(n),s=ci(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},rh=function(n,e){return n===e?0:n<e?-1:1},tt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+U(e))},cs=function(n){if(typeof n!="object"||n===null)return U(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=U(e[s]),t+=":",t+=cs(n[e[s]]);return t+="}",t},Ar=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function J(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Rr=function(n){m(!Tr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},oh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ah(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const ch=new RegExp("^-?(0*)\\d{1,10}$"),hh=-2147483648,uh=2147483647,ci=function(n){if(ch.test(n)){const e=Number(n);if(e>=hh&&e<=uh)return e}return null},xt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ee("Exception was thrown by user callback.",t),e},Math.floor(0))}},dh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},at=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ee(e)}}class Ht{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ht.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="5",Nr="v",xr="s",kr="r",Dr="f",Or=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mr="ls",Pr="p",qn="ac",Lr="websocket",Fr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Re.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Re.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _h(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Hr(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Lr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_h(n)&&(t.ns=n.namespace);const i=[];return J(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.counters_={}}incrementCounter(e,t=1){pe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ya(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={},An={};function us(n){const e=n.toString();return Tn[e]||(Tn[e]=new mh),Tn[e]}function gh(n,e){const t=n.toString();return An[t]||(An[t]=e()),An[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="start",yh="close",wh="pLPCommand",Ch="pRTLPCB",Wr="id",Ur="pw",Vr="ser",Eh="cb",bh="seg",Ih="ts",Sh="d",Th="dframe",jr=1870,qr=30,Ah=jr-qr,Rh=25e3,Nh=3e4;class He{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nt(e),this.stats_=us(t),this.urlFn=a=>(this.appCheckToken&&(a[qn]=this.appCheckToken),Hr(t,Fr,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nh)),ih(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ds((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hi)this.id=l,this.password=a;else if(o===yh)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[hi]="t",s[Vr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Eh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Nr]=hs,this.transportSessionId&&(s[xr]=this.transportSessionId),this.lastSessionId&&(s[Mr]=this.lastSessionId),this.applicationId&&(s[Pr]=this.applicationId),this.appCheckToken&&(s[qn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Or.test(location.hostname)&&(s[kr]=Dr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){He.forceAllow_=!0}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){return He.forceAllow_?!0:!He.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oh()&&!lh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ar(t),i=Ar(s,Ah);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Th]="t",s[Wr]=e,s[Ur]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=U(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ds{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=th(),window[wh+this.uniqueCallbackIdentifier]=e,window[Ch+this.uniqueCallbackIdentifier]=t,this.myIFrame=ds.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){K("frame writing exception"),l.stack&&K(l.stack),K(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wr]=this.myID,e[Ur]=this.myPW,e[Vr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qr+s.length<=jr;){const o=this.pendingSegs.shift();s=s+"&"+bh+i+"="+o.seg+"&"+Ih+i+"="+o.ts+"&"+Sh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Rh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=16384,kh=45e3;let Qt=null;typeof MozWebSocket<"u"?Qt=MozWebSocket:typeof WebSocket<"u"&&(Qt=WebSocket);class re{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nt(this.connId),this.stats_=us(t),this.connURL=re.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Nr]=hs,typeof location<"u"&&location.hostname&&Or.test(location.hostname)&&(o[kr]=Dr),t&&(o[xr]=t),s&&(o[Mr]=s),i&&(o[qn]=i),r&&(o[Pr]=r),Hr(e,Lr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Re.set("previous_websocket_failure",!0);try{let s;fr(),this.mySock=new Qt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qt!==null&&!re.forceDisallow_}static previouslyFailed(){return Re.isInMemoryStorage||Re.get("previous_websocket_failure")===!0}markConnectionHealthy(){Re.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=pt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ar(t,xh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[He,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=re&&re.isAvailable();let s=t&&!re.previouslyFailed();if(e.webSocketOnly&&(t||ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[re];else{const i=this.transports_=[];for(const r of gt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=6e4,Oh=5e3,Mh=10*1024,Ph=100*1024,Rn="t",ui="d",Lh="s",di="r",Fh="e",fi="o",pi="a",_i="n",mi="p",Bh="h";class Hh{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nt("c:"+this.id+":"),this.transportManager_=new gt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=at(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ph?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rn in e){const t=e[Rn];t===pi?this.upgradeIfSecondaryHealthy_():t===di?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=tt("t",e),s=tt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_i,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=tt("t",e),s=tt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=tt(Rn,e);if(ui in e){const s=e[ui];if(t===Bh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===_i){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Lh?this.onConnectionShutdown_(s):t===di?this.onReset_(s):t===Fh?jn("Server Error: "+s):t===fi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hs!==s&&ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),at(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):at(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Oh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Re.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Gr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xt}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=32,vi=768;class x{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new x("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ce(n){return n.pieces_.length-n.pieceNum_}function O(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new x(n.pieces_,e)}function Kr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Yr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new x(e,0)}function V(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof x)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new x(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=S(n),s=S(e);if(t===null)return e;if(t===s)return Y(O(n),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Xr(n,e){if(Ce(n)!==Ce(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function oe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ce(n)>Ce(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Uh{constructor(e,t){this.errorPrefix_=t,this.parts_=Yr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hn(this.parts_[s]);$r(this)}}function Vh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hn(e),$r(n)}function jh(n){const e=n.parts_.pop();n.byteLength_-=hn(e),n.parts_.length>0&&(n.byteLength_-=1)}function $r(n){if(n.byteLength_>vi)throw new Error(n.errorPrefix_+"has a key path longer than "+vi+" bytes ("+n.byteLength_+").");if(n.parts_.length>gi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gi+") or object contains a cycle "+Ae(n))}function Ae(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Gr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new fs}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=1e3,qh=60*5*1e3,yi=30*1e3,zh=1.3,Gh=3e4,Kh="server_kill",wi=3;class de extends zr{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=de.nextPersistentConnectionId_++,this.log_=Nt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nt,this.maxReconnectDelay_=qh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!fr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(U(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ls,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;de.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&pe(e,"w")){const s=Ke(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||La(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Pa(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):jn("Unrecognized action received from server: "+U(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gh&&(this.reconnectDelay_=nt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+de.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){m(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Hh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ee(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ee(h),a())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qs(this.interruptReasons_)&&(this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>cs(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new x(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){K("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wi&&(this.reconnectDelay_=yi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){K("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+br.replace(/\./g,"-")]=1,dr()?e["framework.cordova"]=1:Na()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xt.getInstance().currentlyOnline();return Qs(this.interruptReasons_)&&e}}de.nextPersistentConnectionId_=0;de.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new b(Ye,e),i=new b(Ye,t);return this.compare(s,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;class Jr extends un{static get __EMPTY_NODE(){return Lt}static set __EMPTY_NODE(e){Lt=e}compare(e,t){return Je(e.name,t.name)}isDefinedOn(e){throw $e("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(xe,Lt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Lt)}toString(){return".key"}}const ze=new Jr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class q{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??q.RED,this.left=i??$.EMPTY_NODE,this.right=r??$.EMPTY_NODE}copy(e,t,s,i,r){return new q(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return $.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}q.RED=!0;q.BLACK=!1;class Yh{copy(e,t,s,i,r){return this}insert(e,t,s){return new q(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ${constructor(e,t=$.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,q.BLACK,null,null))}remove(e){return new $(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,q.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ft(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ft(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ft(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ft(this.root_,null,this.comparator_,!0,e)}}$.EMPTY_NODE=new Yh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n,e){return Je(n.name,e.name)}function ps(n,e){return Je(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;function Xh(n){zn=n}const Zr=function(n){return typeof n=="number"?"number:"+Rr(n):"string:"+n},eo=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pe(e,".sv"),"Priority must be a string or number.")}else m(n===zn||n.isEmpty(),"priority of unexpected type.");m(n===zn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;class j{constructor(e,t=j.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eo(this.priorityNode_)}static set __childrenNodeConstructor(e){Ci=e}static get __childrenNodeConstructor(){return Ci}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new j(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:S(e)===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:j.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=S(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Ce(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,j.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Rr(this.value_):e+=this.value_,this.lazyHash_=Sr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===j.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof j.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=j.VALUE_TYPE_ORDER.indexOf(t),r=j.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}j.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to,no;function $h(n){to=n}function Jh(n){no=n}class Zh extends un{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Je(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(xe,new j("[PRIORITY-POST]",no))}makePost(e,t){const s=to(e);return new b(t,new j("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new Zh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=Math.log(2);class tu{constructor(e){const t=r=>parseInt(Math.log(r)/eu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $t=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new q(d,h.node,q.BLACK,null,null);{const f=parseInt(u/2,10)+a,p=i(a,f),_=i(f+1,c);return h=n[f],d=t?t(h):h,new q(d,h.node,q.BLACK,p,_)}},r=function(a){let c=null,u=null,h=n.length;const d=function(p,_){const C=h-p,A=h;h-=p;const B=i(C+1,A),g=n[C],L=t?t(g):g;f(new q(L,g.node,_,null,B))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const _=a.nextBitIsOne(),C=Math.pow(2,a.count-(p+1));_?d(C,q.BLACK):(d(C,q.BLACK),d(C,q.RED))}return u},o=new tu(n.length),l=r(o);return new $(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn;const Fe={};class ue{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Fe&&F,"ChildrenNode.ts has not been loaded"),Nn=Nn||new ue({".priority":Fe},{".priority":F}),Nn}get(e){const t=Ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $?t:null}hasIndex(e){return pe(this.indexSet_,e.toString())}addIndex(e,t){m(e!==ze,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=$t(s,e.getCompare()):l=Fe;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ue(u,c)}addToIndexes(e,t){const s=Gt(this.indexes_,(i,r)=>{const o=Ke(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Fe)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(b.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),$t(l,o.getCompare())}else return Fe;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new ue(s,this.indexSet_)}removeFromIndexes(e,t){const s=Gt(this.indexes_,i=>{if(i===Fe)return i;{const r=t.get(e.name);return r?i.remove(new b(e.name,r)):i}});return new ue(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st;class y{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&eo(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return st||(st=new y(new $(ps),null,ue.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?st:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new b(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?st:this.priorityNode_;return new y(i,o,r)}}updateChild(e,t){const s=S(e);if(s===null)return t;{m(S(e)!==".priority"||Ce(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(O(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,l)=>{t[o]=l.val(e),s++,r&&y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zr(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Sr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kt?-1:0}withIndex(e){if(e===ze||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ze||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ze?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nu extends y{constructor(){super(new $(ps),y.EMPTY_NODE,ue.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const kt=new nu;Object.defineProperties(b,{MIN:{value:new b(Ye,y.EMPTY_NODE)},MAX:{value:new b(xe,kt)}});Jr.__EMPTY_NODE=y.EMPTY_NODE;j.__childrenNodeConstructor=y;Xh(kt);Jh(kt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=!0;function G(n,e=null){if(n===null)return y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new j(t,G(e))}if(!(n instanceof Array)&&su){const t=[];let s=!1;if(J(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=G(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new b(o,a)))}}),t.length===0)return y.EMPTY_NODE;const r=$t(t,Qh,o=>o.name,ps);if(s){const o=$t(t,F.getCompare());return new y(r,G(e),new ue({".priority":o},{".priority":F}))}else return new y(r,G(e),ue.Default)}else{let t=y.EMPTY_NODE;return J(n,(s,i)=>{if(pe(n,s)&&s.substring(0,1)!=="."){const r=G(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(G(e))}}$h(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends un{constructor(e){super(),this.indexPath_=e,m(!I(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Je(e.name,t.name):r}makePost(e,t){const s=G(e),i=y.EMPTY_NODE.updateChild(this.indexPath_,s);return new b(t,i)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,kt);return new b(xe,e)}toString(){return Yr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends un{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Je(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const s=G(e);return new b(t,s)}toString(){return".value"}}const ou=new ru;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){return{type:"value",snapshotNode:n}}function Qe(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function yt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(vt(t,l)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Qe(t,s)):o.trackChildChange(yt(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(vt(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(yt(i,r,o))}else s.trackChildChange(Qe(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.indexedFilter_=new _s(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wt.getStartPost_(e),this.endPost_=wt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new b(t,s))||(s=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=y.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(y.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,l)=>{r.matches(new b(o,l))||(i=i.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new wt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new b(t,s))||(s=y.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const l=e;m(l.numChildren()===this.limit_,"");const a=new b(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(yt(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(vt(t,h));const _=l.updateImmediateChild(t,y.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Qe(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(vt(c.name,c.node)),r.trackChildChange(Qe(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ye}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new ms;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cu(n){return n.loadsAllData()?new _s(n.getIndex()):n.hasLimit()?new au(n):new wt(n)}function Ei(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===ou?t="$value":n.index_===ze?t="$key":(m(n.index_ instanceof iu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=U(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=U(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+U(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=U(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+U(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function bi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends zr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Nt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jt.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ei(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ke(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Jt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ei(e._queryParams),s=e._path.toString(),i=new ls;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fa(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=pt(l.responseText)}catch{ee("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ee("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return{value:null,children:new Map}}function io(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=S(e);n.children.has(s)||n.children.set(s,Zt());const i=n.children.get(s);e=O(e),io(i,e,t)}}function Gn(n,e,t){n.value!==null?t(e,n.value):uu(n,(s,i)=>{const r=new x(e.toString()+"/"+s);Gn(i,r,t)})}function uu(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&J(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=10*1e3,fu=30*1e3,pu=5*60*1e3;class _u{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new du(e);const s=Ii+(fu-Ii)*Math.random();at(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;J(e,(i,r)=>{r>0&&pe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),at(this.reportStats_.bind(this),Math.floor(Math.random()*2*pu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(le||(le={}));function ro(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=le.ACK_USER_WRITE,this.source=ro()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new x(e));return new en(T(),t,this.revert)}}else return m(S(this.path)===e,"operationForChild called for unrelated child."),new en(O(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){this.source=e,this.path=t,this.type=le.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new Ct(this.source,T()):new Ct(this.source,O(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=le.OVERWRITE}operationForChild(e){return I(this.path)?new ke(this.source,T(),this.snap.getImmediateChild(e)):new ke(this.source,O(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=le.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new x(e));return t.isEmpty()?null:t.value?new ke(this.source,T(),t.value):new Et(this.source,T(),t)}else return m(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Et(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gu(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lu(o.childName,o.snapshotNode))}),it(n,i,"child_removed",e,s,t),it(n,i,"child_added",e,s,t),it(n,i,"child_moved",r,s,t),it(n,i,"child_changed",e,s,t),it(n,i,"value",e,s,t),i}function it(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>yu(n,l,a)),o.forEach(l=>{const a=vu(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function vu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function yu(n,e,t){if(e.childName==null||t.childName==null)throw $e("Should only compare child_ events.");const s=new b(e.childName,e.snapshotNode),i=new b(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e){return{eventCache:n,serverCache:e}}function ct(n,e,t,s){return dn(new Ee(e,t,s),n.serverCache)}function oo(n,e,t,s){return dn(n.eventCache,new Ee(e,t,s))}function tn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function De(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn;const wu=()=>(xn||(xn=new $(rh)),xn);class P{constructor(e,t=wu()){this.value=e,this.children=t}static fromObject(e){let t=new P(null);return J(e,(s,i)=>{t=t.set(new x(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(I(e))return null;{const s=S(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(O(e),t);return r!=null?{path:V(new x(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=S(e),s=this.children.get(t);return s!==null?s.subtree(O(e)):new P(null)}}set(e,t){if(I(e))return new P(t,this.children);{const s=S(e),r=(this.children.get(s)||new P(null)).set(O(e),t),o=this.children.insert(s,r);return new P(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const t=S(e),s=this.children.get(t);if(s){const i=s.remove(O(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=S(e),s=this.children.get(t);return s?s.get(O(e)):null}}setTree(e,t){if(I(e))return t;{const s=S(e),r=(this.children.get(s)||new P(null)).setTree(O(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new P(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(V(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(O(e),V(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=S(e),r=this.children.get(i);return r?r.foreachOnPath_(O(e),V(t,i),s):new P(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(V(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new P(null))}}function ht(n,e,t){if(I(e))return new ae(new P(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Y(i,e);return r=r.updateChild(o,t),new ae(n.writeTree_.set(i,r))}else{const i=new P(t),r=n.writeTree_.setTree(e,i);return new ae(r)}}}function Si(n,e,t){let s=n;return J(t,(i,r)=>{s=ht(s,V(e,i),r)}),s}function Ti(n,e){if(I(e))return ae.empty();{const t=n.writeTree_.setTree(e,new P(null));return new ae(t)}}function Kn(n,e){return Me(n,e)!=null}function Me(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function Ai(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new b(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new b(s,i.value))}),e}function ye(n,e){if(I(e))return n;{const t=Me(n,e);return t!=null?new ae(new P(t)):new ae(n.writeTree_.subtree(e))}}function Yn(n){return n.writeTree_.isEmpty()}function Xe(n,e){return lo(T(),n.writeTree_,e)}function lo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=lo(V(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(V(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n,e){return uo(e,n)}function Cu(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=ht(n.visibleWrites,e,t)),n.lastWriteId=s}function Eu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function bu(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Iu(l,s.path)?i=!1:oe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Su(n),!0;if(s.snap)n.visibleWrites=Ti(n.visibleWrites,s.path);else{const l=s.children;J(l,a=>{n.visibleWrites=Ti(n.visibleWrites,V(s.path,a))})}return!0}else return!1}function Iu(n,e){if(n.snap)return oe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&oe(V(n.path,t),e))return!0;return!1}function Su(n){n.visibleWrites=ao(n.allWrites,Tu,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Tu(n){return n.visible}function ao(n,e,t){let s=ae.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)oe(t,o)?(l=Y(t,o),s=ht(s,l,r.snap)):oe(o,t)&&(l=Y(o,t),s=ht(s,T(),r.snap.getChild(l)));else if(r.children){if(oe(t,o))l=Y(t,o),s=Si(s,l,r.children);else if(oe(o,t))if(l=Y(o,t),I(l))s=Si(s,T(),r.children);else{const a=Ke(r.children,S(l));if(a){const c=a.getChild(O(l));s=ht(s,T(),c)}}}else throw $e("WriteRecord should have .snap or .children")}}return s}function co(n,e,t,s,i){if(!s&&!i){const r=Me(n.visibleWrites,e);if(r!=null)return r;{const o=ye(n.visibleWrites,e);if(Yn(o))return t;if(t==null&&!Kn(o,T()))return null;{const l=t||y.EMPTY_NODE;return Xe(o,l)}}}else{const r=ye(n.visibleWrites,e);if(!i&&Yn(r))return t;if(!i&&t==null&&!Kn(r,T()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(oe(c.path,e)||oe(e,c.path))},l=ao(n.allWrites,o,e),a=t||y.EMPTY_NODE;return Xe(l,a)}}}function Au(n,e,t){let s=y.EMPTY_NODE;const i=Me(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ye(n.visibleWrites,e);return t.forEachChild(F,(o,l)=>{const a=Xe(ye(r,new x(o)),l);s=s.updateImmediateChild(o,a)}),Ai(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ye(n.visibleWrites,e);return Ai(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ru(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,t);if(Kn(n.visibleWrites,r))return null;{const o=ye(n.visibleWrites,r);return Yn(o)?i.getChild(t):Xe(o,i.getChild(t))}}function Nu(n,e,t,s){const i=V(e,t),r=Me(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ye(n.visibleWrites,i);return Xe(o,s.getNode().getImmediateChild(t))}else return null}function xu(n,e){return Me(n.visibleWrites,e)}function ku(n,e,t,s,i,r,o){let l;const a=ye(n.visibleWrites,e),c=Me(a,T());if(c!=null)l=c;else if(t!=null)l=Xe(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Du(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function nn(n,e,t,s){return co(n.writeTree,n.treePath,e,t,s)}function ys(n,e){return Au(n.writeTree,n.treePath,e)}function Ri(n,e,t,s){return Ru(n.writeTree,n.treePath,e,t,s)}function sn(n,e){return xu(n.writeTree,V(n.treePath,e))}function Ou(n,e,t,s,i,r){return ku(n.writeTree,n.treePath,e,t,s,i,r)}function ws(n,e,t){return Nu(n.writeTree,n.treePath,e,t)}function ho(n,e){return uo(V(n.treePath,e),n.writeTree)}function uo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,yt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,vt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Qe(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,yt(s,e.snapshotNode,i.oldSnap));else throw $e("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const fo=new Pu;class Cs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ee(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ws(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:De(this.viewCache_),r=Ou(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n){return{filter:n}}function Fu(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Bu(n,e,t,s,i){const r=new Mu;let o,l;if(t.type===le.OVERWRITE){const c=t;c.source.fromUser?o=Qn(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=rn(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===le.MERGE){const c=t;c.source.fromUser?o=Wu(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Xn(n,e,c.path,c.children,s,i,l,r))}else if(t.type===le.ACK_USER_WRITE){const c=t;c.revert?o=ju(n,e,c.path,s,i,r):o=Uu(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===le.LISTEN_COMPLETE)o=Vu(n,e,t.path,s,r);else throw $e("Unknown operation type: "+t.type);const a=r.getChanges();return Hu(e,o,a),{viewCache:o,changes:a}}function Hu(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(so(tn(e)))}}function po(n,e,t,s,i,r){const o=e.eventCache;if(sn(s,t)!=null)return e;{let l,a;if(I(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=De(e),u=c instanceof y?c:y.EMPTY_NODE,h=ys(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=nn(s,De(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=S(t);if(c===".priority"){m(Ce(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ri(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=O(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ri(s,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ws(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ct(e,l,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function rn(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(I(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),f,null)}else{const f=S(t);if(!a.isCompleteForPath(t)&&Ce(t)>1)return e;const p=O(t),C=a.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(a.getNode(),C):c=u.updateChild(a.getNode(),f,C,p,fo,null)}const h=oo(e,c,a.isFullyInitialized()||I(t),u.filtersNodes()),d=new Cs(i,h,r);return po(n,h,t,i,d,l)}function Qn(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Cs(i,e,r);if(I(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ct(e,c,!0,n.filter.filtersNodes());else{const h=S(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=ct(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=O(t),f=l.getNode().getImmediateChild(h);let p;if(I(d))p=s;else{const _=u.getCompleteChild(h);_!=null?Kr(d)===".priority"&&_.getChild(Qr(d)).isEmpty()?p=_:p=_.updateChild(d,s):p=y.EMPTY_NODE}if(f.equals(p))a=e;else{const _=n.filter.updateChild(l.getNode(),h,p,d,u,o);a=ct(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Ni(n,e){return n.eventCache.isCompleteForChild(e)}function Wu(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=V(t,a);Ni(e,S(u))&&(l=Qn(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=V(t,a);Ni(e,S(u))||(l=Qn(n,l,u,c,i,r,o))}),l}function xi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xn(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;I(t)?c=s:c=new P(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=xi(n,f,d);a=rn(n,a,new x(h),p,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),_=xi(n,p,d);a=rn(n,a,new x(h),_,i,r,o,l)}}),a}function Uu(n,e,t,s,i,r,o){if(sn(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(I(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return rn(n,e,t,a.getNode().getChild(t),i,r,l,o);if(I(t)){let c=new P(null);return a.getNode().forEachChild(ze,(u,h)=>{c=c.set(new x(u),h)}),Xn(n,e,t,c,i,r,l,o)}else return e}else{let c=new P(null);return s.foreach((u,h)=>{const d=V(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Xn(n,e,t,c,i,r,l,o)}}function Vu(n,e,t,s,i){const r=e.serverCache,o=oo(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return po(n,o,t,s,fo,i)}function ju(n,e,t,s,i,r){let o;if(sn(s,t)!=null)return e;{const l=new Cs(s,e,i),a=e.eventCache.getNode();let c;if(I(t)||S(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=nn(s,De(e));else{const h=e.serverCache.getNode();m(h instanceof y,"serverChildren would be complete if leaf node"),u=ys(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=S(t);let h=ws(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,O(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,y.EMPTY_NODE,O(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nn(s,De(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||sn(s,T())!=null,ct(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _s(s.getIndex()),r=cu(s);this.processor_=Lu(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(y.EMPTY_NODE,l.getNode(),null),u=new Ee(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ee(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=dn(h,u),this.eventGenerator_=new mu(this.query_)}get query(){return this.query_}}function zu(n){return n.viewCache_.serverCache.getNode()}function Gu(n){return tn(n.viewCache_)}function Ku(n,e){const t=De(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function ki(n){return n.eventRegistrations_.length===0}function Yu(n,e){n.eventRegistrations_.push(e)}function Di(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Oi(n,e,t,s){e.type===le.MERGE&&e.source.queryId!==null&&(m(De(n.viewCache_),"We should always have a full cache before handling merges"),m(tn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Bu(n.processor_,i,e,t,s);return Fu(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,_o(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Qu(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(Qe(r,o))}),t.isFullyInitialized()&&s.push(so(t.getNode())),_o(n,s,t.getNode(),e)}function _o(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return gu(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;class mo{constructor(){this.views=new Map}}function Xu(n){m(!on,"__referenceConstructor has already been defined"),on=n}function $u(){return m(on,"Reference.ts has not been loaded"),on}function Ju(n){return n.views.size===0}function Es(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Oi(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Oi(o,e,t,s));return r}}function go(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=nn(t,i?s:null),a=!1;l?a=!0:s instanceof y?(l=ys(t,s),a=!1):(l=y.EMPTY_NODE,a=!1);const c=dn(new Ee(l,a,!1),new Ee(s,i,!1));return new qu(e,c)}return o}function Zu(n,e,t,s,i,r){const o=go(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Yu(o,t),Qu(o,t)}function ed(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=be(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(Di(c,t,s)),ki(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(Di(a,t,s)),ki(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!be(n)&&r.push(new($u())(e._repo,e._path)),{removed:r,events:o}}function vo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function we(n,e){let t=null;for(const s of n.views.values())t=t||Ku(s,e);return t}function yo(n,e){if(e._queryParams.loadsAllData())return pn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function wo(n,e){return yo(n,e)!=null}function be(n){return pn(n)!=null}function pn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;function td(n){m(!ln,"__referenceConstructor has already been defined"),ln=n}function nd(){return m(ln,"Reference.ts has not been loaded"),ln}let sd=1;class Mi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=Du(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function id(n,e,t,s,i){return Cu(n.pendingWriteTree_,e,t,s,i),i?Ot(n,new ke(ro(),e,t)):[]}function We(n,e,t=!1){const s=Eu(n.pendingWriteTree_,e);if(bu(n.pendingWriteTree_,e)){let r=new P(null);return s.snap!=null?r=r.set(T(),!0):J(s.children,o=>{r=r.set(new x(o),!0)}),Ot(n,new en(s.path,r,t))}else return[]}function Dt(n,e,t){return Ot(n,new ke(gs(),e,t))}function rd(n,e,t){const s=P.fromObject(t);return Ot(n,new Et(gs(),e,s))}function od(n,e){return Ot(n,new Ct(gs(),e))}function ld(n,e,t){const s=bs(n,t);if(s){const i=Is(s),r=i.path,o=i.queryId,l=Y(r,e),a=new Ct(vs(o),l);return Ss(n,r,a)}else return[]}function Co(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||wo(o,e))){const a=ed(o,e,t,s);Ju(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>be(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=ud(d);for(let p=0;p<f.length;++p){const _=f[p],C=_.query,A=To(n,_);n.listenProvider_.startListening(ut(C),bt(n,C),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(ut(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(_n(d));n.listenProvider_.stopListening(ut(d),f)}))}dd(n,c)}return l}function Eo(n,e,t,s){const i=bs(n,s);if(i!=null){const r=Is(i),o=r.path,l=r.queryId,a=Y(o,e),c=new ke(vs(l),a,t);return Ss(n,o,c)}else return[]}function ad(n,e,t,s){const i=bs(n,s);if(i){const r=Is(i),o=r.path,l=r.queryId,a=Y(o,e),c=P.fromObject(t),u=new Et(vs(l),a,c);return Ss(n,o,u)}else return[]}function cd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Y(d,i);r=r||we(f,p),o=o||be(f)});let l=n.syncPointTree_.get(i);l?(o=o||be(l),r=r||we(l,T())):(l=new mo,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=y.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const _=we(p,T());_&&(r=r.updateImmediateChild(f,_))}));const c=wo(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=_n(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=fd();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=fn(n.pendingWriteTree_,i);let h=Zu(l,e,t,u,r,a);if(!c&&!o&&!s){const d=yo(l,e);h=h.concat(pd(n,e,d))}return h}function bo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=Y(o,e),c=we(l,a);if(c)return c});return co(i,e,r,t,!0)}function hd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=Y(c,t);s=s||we(u,h)});let i=n.syncPointTree_.get(t);i?s=s||we(i,T()):(i=new mo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ee(s,!0,!1):null,l=fn(n.pendingWriteTree_,e._path),a=go(i,e,l,r?o.getNode():y.EMPTY_NODE,r);return Gu(a)}function Ot(n,e){return Io(e,n.syncPointTree_,null,fn(n.pendingWriteTree_,T()))}function Io(n,e,t,s){if(I(n.path))return So(n,e,t,s);{const i=e.get(T());t==null&&i!=null&&(t=we(i,T()));let r=[];const o=S(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=ho(s,o);r=r.concat(Io(l,a,c,u))}return i&&(r=r.concat(Es(i,n,s,t))),r}}function So(n,e,t,s){const i=e.get(T());t==null&&i!=null&&(t=we(i,T()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=ho(s,o),u=n.operationForChild(o);u&&(r=r.concat(So(u,l,a,c)))}),i&&(r=r.concat(Es(i,n,s,t))),r}function To(n,e){const t=e.query,s=bt(n,t);return{hashFn:()=>(zu(e)||y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ld(n,t._path,s):od(n,t._path);{const r=ah(i,t);return Co(n,t,null,r)}}}}function bt(n,e){const t=_n(e);return n.queryToTagMap.get(t)}function _n(n){return n._path.toString()+"$"+n._queryIdentifier}function bs(n,e){return n.tagToQueryMap.get(e)}function Is(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new x(n.substr(0,e))}}function Ss(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=fn(n.pendingWriteTree_,e);return Es(s,t,i,null)}function ud(n){return n.fold((e,t,s)=>{if(t&&be(t))return[pn(t)];{let i=[];return t&&(i=vo(t)),J(s,(r,o)=>{i=i.concat(o)}),i}})}function ut(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(nd())(n._repo,n._path):n}function dd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=_n(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function fd(){return sd++}function pd(n,e,t){const s=e._path,i=bt(n,e),r=To(n,t),o=n.listenProvider_.startListening(ut(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)m(!be(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!I(c)&&u&&be(u))return[pn(u).query];{let d=[];return u&&(d=d.concat(vo(u).map(f=>f.query))),J(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(ut(u),bt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ts(t)}node(){return this.node_}}class As{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=V(this.path_,e);return new As(this.syncTree_,t)}node(){return bo(this.syncTree_,this.path_)}}const _d=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Pi=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return md(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gd(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},md=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},gd=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},vd=function(n,e,t,s){return Rs(e,new As(t,n),s)},yd=function(n,e,t){return Rs(n,new Ts(e),t)};function Rs(n,e,t){const s=n.getPriority().val(),i=Pi(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Pi(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new j(l,G(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new j(i))),o.forEachChild(F,(l,a)=>{const c=Rs(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function xs(n,e){let t=e instanceof x?e:new x(e),s=n,i=S(t);for(;i!==null;){const r=Ke(s.node.children,i)||{children:{},childCount:0};s=new Ns(i,s,r),t=O(t),i=S(t)}return s}function Ze(n){return n.node.value}function Ao(n,e){n.node.value=e,$n(n)}function Ro(n){return n.node.childCount>0}function wd(n){return Ze(n)===void 0&&!Ro(n)}function mn(n,e){J(n.node.children,(t,s)=>{e(new Ns(t,n,s))})}function No(n,e,t,s){t&&!s&&e(n),mn(n,i=>{No(i,e,!0,s)}),t&&s&&e(n)}function Cd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Mt(n){return new x(n.parent===null?n.name:Mt(n.parent)+"/"+n.name)}function $n(n){n.parent!==null&&Ed(n.parent,n.name,n)}function Ed(n,e,t){const s=wd(t),i=pe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,$n(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,$n(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=/[\[\].#$\/\u0000-\u001F\u007F]/,Id=/[\[\].#$\u0000-\u001F\u007F]/,kn=10*1024*1024,xo=function(n){return typeof n=="string"&&n.length!==0&&!bd.test(n)},ko=function(n){return typeof n=="string"&&n.length!==0&&!Id.test(n)},Sd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ko(n)},Do=function(n,e,t){const s=t instanceof x?new Uh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ae(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ae(s)+" with contents = "+e.toString());if(Tr(e))throw new Error(n+"contains "+e.toString()+" "+Ae(s));if(typeof e=="string"&&e.length>kn/3&&hn(e)>kn)throw new Error(n+"contains a string greater than "+kn+" utf8 bytes "+Ae(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(J(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xo(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ae(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vh(s,o),Do(n,l,s),jh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ae(s)+" in addition to actual children.")}},Oo=function(n,e,t,s){if(!ko(t))throw new Error(mr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Td=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oo(n,e,t)},Ad=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Sd(t))throw new Error(mr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Xr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ie(n,e,t){Nd(n,t),xd(n,s=>oe(s,e)||oe(e,s))}function xd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(kd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function kd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();lt&&K("event: "+t.toString()),xt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="repo_interrupt",Od=25;class Md{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zt(),this.transactionQueueTree_=new Ns,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Pd(n,e,t){if(n.stats_=us(n.repoInfo_),n.forceRestClient_||dh())n.server_=new Jt(n.repoInfo_,(s,i,r,o)=>{Li(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new de(n.repoInfo_,e,(s,i,r,o)=>{Li(n,s,i,r,o)},s=>{Fi(n,s)},s=>{Fd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=gh(n.repoInfo_,()=>new _u(n.stats_,n.server_)),n.infoData_=new hu,n.infoSyncTree_=new Mi({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=Dt(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ks(n,"connected",!1),n.serverSyncTree_=new Mi({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ie(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ld(n){const t=n.infoData_.getNode(new x(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Mo(n){return _d({timestamp:Ld(n)})}function Li(n,e,t,s,i){n.dataUpdateCount++;const r=new x(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Gt(t,c=>G(c));o=ad(n.serverSyncTree_,r,a,i)}else{const a=G(t);o=Eo(n.serverSyncTree_,r,a,i)}else if(s){const a=Gt(t,c=>G(c));o=rd(n.serverSyncTree_,r,a)}else{const a=G(t);o=Dt(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ms(n,r)),Ie(n.eventQueue_,l,o)}function Fi(n,e){ks(n,"connected",e),e===!1&&Wd(n)}function Fd(n,e){J(e,(t,s)=>{ks(n,t,s)})}function ks(n,e,t){const s=new x("/.info/"+e),i=G(t);n.infoData_.updateSnapshot(s,i);const r=Dt(n.infoSyncTree_,s,i);Ie(n.eventQueue_,s,r)}function Bd(n){return n.nextWriteId_++}function Hd(n,e,t){const s=hd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=G(i).withIndex(e._queryParams.getIndex());cd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Dt(n.serverSyncTree_,e._path,r);else{const l=bt(n.serverSyncTree_,e);o=Eo(n.serverSyncTree_,e._path,r,l)}return Ie(n.eventQueue_,e._path,o),Co(n.serverSyncTree_,e,t,null,!0),r},i=>(Ds(n,"get for query "+U(e)+" failed: "+i),Promise.reject(new Error(i))))}function Wd(n){Ds(n,"onDisconnectEvents");const e=Mo(n),t=Zt();Gn(n.onDisconnect_,T(),(i,r)=>{const o=vd(i,r,n.serverSyncTree_,e);io(t,i,o)});let s=[];Gn(t,T(),(i,r)=>{s=s.concat(Dt(n.serverSyncTree_,i,r));const o=qd(n,i);Ms(n,o)}),n.onDisconnect_=Zt(),Ie(n.eventQueue_,T(),s)}function Ud(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dd)}function Ds(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),K(t,...e)}function Po(n,e,t){return bo(n.serverSyncTree_,e,t)||y.EMPTY_NODE}function Os(n,e=n.transactionQueueTree_){if(e||gn(n,e),Ze(e)){const t=Fo(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Vd(n,Mt(e),t)}else Ro(e)&&mn(e,t=>{Os(n,t)})}function Vd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Po(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Y(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Ds(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(We(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();gn(n,xs(n.transactionQueueTree_,e)),Os(n,n.transactionQueueTree_),Ie(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)xt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ee("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Ms(n,e)}},o)}function Ms(n,e){const t=Lo(n,e),s=Mt(t),i=Fo(n,t);return jd(n,i,s),s}function jd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Y(t,a.path);let u=!1,h;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(We(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Od)u=!0,h="maxretry",i=i.concat(We(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Po(n,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){Do("transaction failed: Data returned ",f,a.path);let p=G(f);typeof f=="object"&&f!=null&&pe(f,".priority")||(p=p.updatePriority(d.getPriority()));const C=a.currentWriteId,A=Mo(n),B=yd(p,d,A);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=B,a.currentWriteId=Bd(n),o.splice(o.indexOf(C),1),i=i.concat(id(n.serverSyncTree_,a.path,B,a.currentWriteId,a.applyLocally)),i=i.concat(We(n.serverSyncTree_,C,!0))}else u=!0,h="nodata",i=i.concat(We(n.serverSyncTree_,a.currentWriteId,!0))}Ie(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}gn(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)xt(s[l]);Os(n,n.transactionQueueTree_)}function Lo(n,e){let t,s=n.transactionQueueTree_;for(t=S(e);t!==null&&Ze(s)===void 0;)s=xs(s,t),e=O(e),t=S(e);return s}function Fo(n,e){const t=[];return Bo(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Bo(n,e,t){const s=Ze(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);mn(e,i=>{Bo(n,i,t)})}function gn(n,e){const t=Ze(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ao(e,t.length>0?t:void 0)}mn(e,s=>{gn(n,s)})}function qd(n,e){const t=Mt(Lo(n,e)),s=xs(n.transactionQueueTree_,e);return Cd(s,i=>{Dn(n,i)}),Dn(n,s),No(s,i=>{Dn(n,i)}),t}function Dn(n,e){const t=Ze(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(We(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ao(e,void 0):t.length=r+1,Ie(n.eventQueue_,Mt(e),i);for(let o=0;o<s.length;o++)xt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Gd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ee(`Invalid query segment '${t}' in query '${n}'`)}return e}const Bi=function(n,e){const t=Kd(n),s=t.namespace;t.domain==="firebase.com"&&fe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||sh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Br(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new x(t.pathString)}},Kd=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=zd(n.substring(u,h)));const d=Gd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+U(this.snapshot.exportVal())}}class Qd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:Kr(this._path)}get ref(){return new _e(this._repo,this._path)}get _queryIdentifier(){const e=bi(this._queryParams),t=cs(e);return t==="{}"?"default":t}get _queryObject(){return bi(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof Ps))return!1;const t=this._repo===e._repo,s=Xr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wh(this._path)}}class _e extends Ps{constructor(e,t){super(e,t,new ms,!1)}get parent(){const e=Qr(this._path);return e===null?null:new _e(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class It{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new x(e),s=Jn(this.ref,e);return new It(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new It(i,Jn(this.ref,s),F)))}hasChild(e){const t=new x(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $d(n,e){return n=At(n),n._checkNotDeleted("ref"),n._root}function Jn(n,e){return n=At(n),S(n._path)===null?Td("child","path",e):Oo("child","path",e),new _e(n._repo,V(n._path,e))}function Jd(n){n=At(n);const e=new Xd(()=>{}),t=new Ls(e);return Hd(n._repo,n,t).then(s=>new It(s,new _e(n._repo,n._path),n._queryParams.getIndex()))}class Ls{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Yd("value",this,new It(e.snapshotNode,new _e(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Qd(this,e,t):null}matches(e){return e instanceof Ls?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Xu(_e);td(_e);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="FIREBASE_DATABASE_EMULATOR_HOST",Zn={};let ef=!1;function tf(n,e,t,s){n.repoInfo_=new Br(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function nf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Bi(r,i),l=o.repoInfo,a;typeof process<"u"&&ri&&(a=ri[Zd]),a?(r=`http://${a}?ns=${l.namespace}`,o=Bi(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new ph(n.name,n.options,e);Ad("Invalid Firebase Database URL",o),I(o.path)||fe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=rf(l,n,c,new fh(n.name,t));return new of(u,n)}function sf(n,e){const t=Zn[e];(!t||t[n.key]!==n)&&fe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ud(n),delete t[n.key]}function rf(n,e,t,s){let i=Zn[e.name];i||(i={},Zn[e.name]=i);let r=i[n.toURLString()];return r&&fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Md(n,ef,t,s),i[n.toURLString()]=r,r}class of{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Pd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _e(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fe("Cannot call "+e+" on a deleted database.")}}function lf(n=Hc(),e){const t=Pc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ta("database");s&&af(t,...s)}return t}function af(n,e,t,s={}){n=At(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&fe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&fe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ht(Ht.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Aa(s.mockUserToken,n.app.options.projectId);r=new Ht(o)}tf(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){$c(Bc),Yt(new _t("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),je(oi,li,n),je(oi,li,"esm2017")}de.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};de.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};cf();function hf(n){let e,t,s,i,r,o,l,a,c,u,h,d;return{c(){e=E("main"),t=E("span"),s=M(),i=E("p"),r=se(n[0]),o=se(" days:"),l=se(n[1]),a=se(" hr's:"),c=se(n[2]),u=se("min's:"),h=se(n[3]),d=se(" sec's"),w(t,"class","loader svelte-1av7kuw"),w(i,"class","svelte-1av7kuw"),w(e,"class","svelte-1av7kuw")},m(f,p){D(f,e,p),v(e,t),v(e,s),v(e,i),v(i,r),v(i,o),v(i,l),v(i,a),v(i,c),v(i,u),v(i,h),v(i,d)},p(f,[p]){p&1&&rt(r,f[0]),p&2&&rt(l,f[1]),p&4&&rt(c,f[2]),p&8&&rt(h,f[3])},i:R,o:R,d(f){f&&N(e)}}}function uf(n,e,t){wr({apiKey:"AIzaSyCy5xjv_3u_iBtK8W4_LrPyNnhYwG83o4s",authDomain:"renew-df06b.firebaseapp.com",databaseURL:"https://renew-df06b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"renew-df06b",storageBucket:"renew-df06b.appspot.com",messagingSenderId:"222991340556",appId:"1:222991340556:web:11669eed094efbd4e88a29"});const i=lf(),r=$d(i);let o,l,a;function c(){Jd(Jn(r,"parameters")).then(_=>{if(_.exists()){let C=_.val();t(4,o=C.speed),t(5,l=C.capacitor_voltage),t(6,a=C.distance)}else console.log("No data available")}).catch(_=>{console.error(_)})}setInterval(c,1e3);var u=new Date("July 2, 2024 0:0:0").getTime();let h,d,f,p;return setInterval(function(){var _=new Date().getTime(),C=u-_;t(0,h=Math.floor(C/(1e3*60*60*24))),t(1,d=Math.floor(C%(1e3*60*60*24)/(1e3*60*60))),t(2,f=Math.floor(C%(1e3*60*60)/(1e3*60))),t(3,p=Math.floor(C%(1e3*60)/1e3))},1e3),n.$$.update=()=>{n.$$.dirty&112},[h,d,f,p,o,l,a]}class df extends he{constructor(e){super(),ce(this,e,uf,hf,te,{})}}function ff(n){let e,t;return e=new ql({}),{c(){Z(e.$$.fragment)},m(s,i){Q(e,s,i),t=!0},i(s){t||(W(e.$$.fragment,s),t=!0)},o(s){z(e.$$.fragment,s),t=!1},d(s){X(e,s)}}}function pf(n){let e,t,s,i;return e=new is({}),s=new ta({}),{c(){Z(e.$$.fragment),t=M(),Z(s.$$.fragment)},m(r,o){Q(e,r,o),D(r,t,o),Q(s,r,o),i=!0},i(r){i||(W(e.$$.fragment,r),W(s.$$.fragment,r),i=!0)},o(r){z(e.$$.fragment,r),z(s.$$.fragment,r),i=!1},d(r){r&&N(t),X(e,r),X(s,r)}}}function _f(n){let e,t,s,i;return e=new is({}),s=new df({}),{c(){Z(e.$$.fragment),t=M(),Z(s.$$.fragment)},m(r,o){Q(e,r,o),D(r,t,o),Q(s,r,o),i=!0},i(r){i||(W(e.$$.fragment,r),W(s.$$.fragment,r),i=!0)},o(r){z(e.$$.fragment,r),z(s.$$.fragment,r),i=!1},d(r){r&&N(t),X(e,r),X(s,r)}}}function mf(n){let e,t,s,i,r,o,l;return t=new Cn({props:{path:"/",$$slots:{default:[ff]},$$scope:{ctx:n}}}),i=new Cn({props:{path:"/team/*",$$slots:{default:[pf]},$$scope:{ctx:n}}}),o=new Cn({props:{path:"/dashboard/*",$$slots:{default:[_f]},$$scope:{ctx:n}}}),{c(){e=E("main"),Z(t.$$.fragment),s=M(),Z(i.$$.fragment),r=M(),Z(o.$$.fragment)},m(a,c){D(a,e,c),Q(t,e,null),v(e,s),Q(i,e,null),v(e,r),Q(o,e,null),l=!0},p(a,[c]){const u={};c&1&&(u.$$scope={dirty:c,ctx:a}),t.$set(u);const h={};c&1&&(h.$$scope={dirty:c,ctx:a}),i.$set(h);const d={};c&1&&(d.$$scope={dirty:c,ctx:a}),o.$set(d)},i(a){l||(W(t.$$.fragment,a),W(i.$$.fragment,a),W(o.$$.fragment,a),l=!0)},o(a){z(t.$$.fragment,a),z(i.$$.fragment,a),z(o.$$.fragment,a),l=!1},d(a){a&&N(e),X(t),X(i),X(o)}}}function gf(n){return ft.subscribe(e=>window.scrollTo(0,0)),ft.mode.hash(),[]}class vf extends he{constructor(e){super(),ce(this,e,gf,mf,te,{})}}new vf({target:document.getElementById("app")});
