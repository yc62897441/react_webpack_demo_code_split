!function(){"use strict";var e,t,n,r,o={230:function(e,t,n){var r=n(294),o=n(745),u=n(998),l=n(890),i=n(572),c="SWITCH_LOADING";function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={isLoading:!1},s=n(644),d=n(894),m=n(932),v=(0,l.UY)({controlReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type===c?f(f({},e),{},{isLoading:t.payload}):e}}),b=(0,l.MT)(v,(0,l.qC)((0,s.md)(d.Z),(0,m.ZP)((0,m.S)()))),h=n(655),g=n(335),y=n(294),O=function(){var e=(0,u.v9)((function(e){return e.controlReducer.isLoading})),t=(0,u.I0)();return y.createElement("div",null,"HomePage",y.createElement("div",null,"測試：redux 【",e.toString(),"】",y.createElement("button",{onClick:function(){t({type:c,payload:!e})}},"改變 redux")))},E=n(294),j=[{name:"Home",url:"/"},{name:"A",url:"/A"},{name:"B",url:"/B"},{name:"C",url:"/C"}],P=function(){return E.createElement("div",null,(null==j?void 0:j.length)>0&&j.map((function(e){return E.createElement(h.rU,{key:e.url,to:e.url},e.name)})))},w=n(294),S=function(e){var t=e.children;return w.createElement("div",null,w.createElement(P,null),t)},k=(0,r.lazy)((function(){return Promise.all([n.e(913),n.e(434)]).then(n.bind(n,434))})),A=(0,r.lazy)((function(){return Promise.all([n.e(913),n.e(688)]).then(n.bind(n,108))})),C=(0,r.lazy)((function(){return Promise.all([n.e(913),n.e(999)]).then(n.bind(n,999))})),T=(0,r.lazy)((function(){return Promise.all([n.e(913),n.e(866)]).then(n.bind(n,866))})),_=function(){return r.createElement(h.VK,null,r.createElement(S,null,r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(g.Z5,null,r.createElement(g.AW,{path:"/",element:r.createElement(O,null)}),r.createElement(g.AW,{path:"/A",element:r.createElement(k,null)}),r.createElement(g.AW,{path:"/B",element:r.createElement(A,null)}),r.createElement(g.AW,{path:"/C",element:r.createElement(C,null)}),r.createElement(g.AW,{path:"/D",element:r.createElement(T,null)})))))},x=document.querySelector("#root");o.createRoot(x).render(r.createElement(r.StrictMode,null,r.createElement(u.zt,{store:b},r.createElement(_,null))))}},u={};function l(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return o[e](n,n.exports,l),n.exports}l.m=o,e=[],l.O=function(t,n,r,o){if(!n){var u=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||u>=o)&&Object.keys(l.O).every((function(e){return l.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<u&&(u=o));if(i){e.splice(f--,1);var a=r();void 0!==a&&(t=a)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var u={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},l.d(o,u),o},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,n){return l.f[n](e,t),t}),[]))},l.u=function(e){return(913===e?"default":e)+".js"},l.miniCssF=function(e){},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},l.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var u,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var f=c[a];if(f.getAttribute("src")==e){u=f;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=e),r[e]=[t];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),i&&document.head.appendChild(u)}},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e}(),function(){var e={179:0};l.f.j=function(t,n){var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var u=l.p+l.u(t),i=new Error;l.l(u,(function(n){if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,r[1](i)}}),"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],i=n[1],c=n[2],a=0;if(u.some((function(t){return 0!==e[t]}))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(c)var f=c(l)}for(t&&t(n);a<u.length;a++)o=u[a],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=l.O(void 0,[216],(function(){return l(230)}));i=l.O(i)}();