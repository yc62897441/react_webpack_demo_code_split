"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[869],{HOdY:function(n,r){var e={value:()=>{}};function t(){for(var n,r=0,e=arguments.length,t={};r<e;++r){if(!(n=arguments[r]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new o(t)}function o(n){this._=n}function i(n,r){for(var e,t=0,o=n.length;t<o;++t)if((e=n[t]).name===r)return e.value}function l(n,r,t){for(var o=0,i=n.length;o<i;++o)if(n[o].name===r){n[o]=e,n=n.slice(0,o).concat(n.slice(o+1));break}return null!=t&&n.push({name:r,value:t}),n}o.prototype=t.prototype={constructor:o,on:function(n,r){var e,t,o=this._,a=(t=o,(n+"").trim().split(/^|\s+/).map((function(n){var r="",e=n.indexOf(".");if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}}))),f=-1,u=a.length;if(!(arguments.length<2)){if(null!=r&&"function"!=typeof r)throw new Error("invalid callback: "+r);for(;++f<u;)if(e=(n=a[f]).type)o[e]=l(o[e],n.name,r);else if(null==r)for(e in o)o[e]=l(o[e],n.name,null);return this}for(;++f<u;)if((e=(n=a[f]).type)&&(e=i(o[e],n.name)))return e},copy:function(){var n={},r=this._;for(var e in r)n[e]=r[e].slice();return new o(n)},call:function(n,r){if((e=arguments.length-2)>0)for(var e,t,o=new Array(e),i=0;i<e;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(i=0,e=(t=this._[n]).length;i<e;++i)t[i].value.apply(r,o)},apply:function(n,r,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var t=this._[n],o=0,i=t.length;o<i;++o)t[o].value.apply(r,e)}},r.Z=t}}]);