"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57],{inAr:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a("b3LD"),l=a("q1tI"),o=a("qBDq"),r=a("jBnE"),c=a("JtmL"),u=a("6BB1"),i=(a("n1/P"),[{id:"e1",type:"smoothstep",source:"a1",target:"b1",label_deac:"a1 to b1",label_value:12404149},{id:"e2",type:"smoothstep",source:"a2",target:"b1",label_deac:"a2 to b1",label_value:5015671},{id:"e3",type:"smoothstep",source:"b1",target:"c1",label_deac:"b1 to c1",label_value:17419820}]),s=[{id:"a1",type:"input",label:"a1",value:12404149},{id:"a2",type:"input",label:"a2",value:5015671},{id:"b1",type:"",label:"b1",value:17419820},{id:"c1",type:"output",label:"c1",value:17419820}],d=function(){var e=(0,o.Rr)([]),t=(0,n.Z)(e,3),a=t[0],d=t[1],p=t[2],b=(0,o.ll)([]),f=(0,n.Z)(b,3),v=f[0],m=f[1],E=f[2],y=(0,l.useCallback)((function(e){return m((function(t){return(0,o.Z_)(e,t)}))}),[m]);return(0,l.useEffect)((function(){var e=function(e){var t=[],a=0,n=0,o=0;return e.forEach((function(e){var r={x:"input"===e.type?100:""===e.type?500:900,y:"input"===e.type?100+150*a:""===e.type?100+150*n:100+150*o};"input"===e.type&&a++,""===e.type&&n++,"output"===e.type&&o++;var c={id:e.id,position:r,node_desc:e.label,data:{label:l.createElement(l.Fragment,null,l.createElement("h1",{className:"reactFlow-node-title"},e.label),l.createElement("div",{className:"reactFlow-node-content-wrapper"},l.createElement("div",null,l.createElement("span",{className:"reactFlow-node-content-span"},"node.value"),"：",e.value)))},sourcePosition:("input"===e.TYPE||e.TYPE,"right"),targetPosition:("input"===e.TYPE||e.TYPE,"left"),style:{color:"#17202a",background:"#f8fae5",border:"2px solid",borderColor:"#43766c",fontSize:"16px",width:250},connectable:!1,selectable:!1};t.push(c)})),t}(s);d(e)}),[]),(0,l.useEffect)((function(){var e=function(e){var t=[];return e.forEach((function(e){var a={id:e.id,source:e.source,target:e.target,label:e.label_deac+e.label_value,markerEnd:{type:o.QZ.Arrow,color:"#76453b"},style:{strokeWidth:2,stroke:"#b19470"},animated:!0};t.push(a)})),t}(i);m(e)}),[]),l.createElement("div",null,l.createElement("div",{className:"reactFlowWrapper"},l.createElement(o.x$,{nodes:a,edges:v,onNodesChange:p,onEdgesChange:E,onConnect:y,onNodeClick:function(e,t){return function(e,t){for(var a=e.target,n=null;!n&&void 0!==a;)a.classList.contains("react-flow__node")?n=a:a=a.parentElement;n&&(console.log("nodeElement",n),console.log("element",t))}(e,t)}},l.createElement(r.Z,null),l.createElement(c.a,null),l.createElement(u.A,{variant:"dots",gap:12,size:1}))))}}}]);