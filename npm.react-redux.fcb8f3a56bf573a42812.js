"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[794],{vvQw:function(t,e,n){n.d(e,{zt:function(){return k},I0:function(){return N},v9:function(){return y}});var o=n("at8e"),r=n("ejks"),u=n("i8i4");let c=function(t){t()};const s=()=>c;var i=n("q1tI");const a=Symbol.for("react-redux-context"),l="undefined"!=typeof globalThis?globalThis:{};function f(){var t;if(!i.createContext)return{};const e=null!=(t=l[a])?t:l[a]=new Map;let n=e.get(i.createContext);return n||(n=i.createContext(null),e.set(i.createContext,n)),n}const b=f();function d(t=b){return function(){return(0,i.useContext)(t)}}const S=d();let p=()=>{throw new Error("uSES not initialized!")};const v=(t,e)=>t===e;function h(t=b){const e=t===b?S:d(t);return function(t,n={}){const{equalityFn:o=v,stabilityCheck:r,noopCheck:u}="function"==typeof n?{equalityFn:n}:n,{store:c,subscription:s,getServerState:a,stabilityCheck:l,noopCheck:f}=e(),b=((0,i.useRef)(!0),(0,i.useCallback)({[t.name](e){return t(e)}}[t.name],[t,l,r])),d=p(s.addNestedSub,c.getState,a||c.getState,b,o);return(0,i.useDebugValue)(d),d}}const y=h();n("2mql"),n("TOwV");const C={notify(){},get:()=>[]};const x="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect;let g=null;var k=function({store:t,context:e,children:n,serverState:o,stabilityCheck:r="once",noopCheck:u="once"}){const c=i.useMemo((()=>{const e=function(t,e){let n,o=C,r=0,u=!1;function c(){l.onStateChange&&l.onStateChange()}function i(){r++,n||(n=e?e.addNestedSub(c):t.subscribe(c),o=function(){const t=s();let e=null,n=null;return{clear(){e=null,n=null},notify(){t((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(t){let o=!0,r=n={callback:t,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){o&&null!==e&&(o=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}())}function a(){r--,n&&0===r&&(n(),n=void 0,o.clear(),o=C)}const l={addNestedSub:function(t){i();const e=o.subscribe(t);let n=!1;return()=>{n||(n=!0,e(),a())}},notifyNestedSubs:function(){o.notify()},handleChangeWrapper:c,isSubscribed:function(){return u},trySubscribe:function(){u||(u=!0,i())},tryUnsubscribe:function(){u&&(u=!1,a())},getListeners:()=>o};return l}(t);return{store:t,subscription:e,getServerState:o?()=>o:void 0,stabilityCheck:r,noopCheck:u}}),[t,o,r,u]),a=i.useMemo((()=>t.getState()),[t]);x((()=>{const{subscription:e}=c;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[c,a]);const l=e||b;return i.createElement(l.Provider,{value:c},n)};function w(t=b){const e=t===b?S:d(t);return function(){const{store:t}=e();return t}}const m=w();function E(t=b){const e=t===b?m:w(t);return function(){return e().dispatch}}const N=E();var q,M;q=r.useSyncExternalStoreWithSelector,p=q,(t=>{g=t})(o.useSyncExternalStore),M=u.unstable_batchedUpdates,c=M}}]);