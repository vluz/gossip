(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0Emf":function(e,t,a){"use strict";var n=a("SWzQ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(a("2w0b"));a("77lJ");var i=n(a("N+da"));a("5xwY");var d=n(a("Nn7x"));function o(e){var t=e.attrs,a=e.value,n=e.width,o=e.height,l=e.edit,c=e.onValueChange;function s(e){var t=e.file.originFileObj,a=new FileReader;a.readAsDataURL(t),a.onload=function(){var e=a.result;c(e)}}var u=o-2*t.padding,f=n-2*t.padding,h=function(){return"normal"===t.displayMode?{maxHeight:u,maxWidth:f}:{height:u,width:f}};return r.default.createElement("div",{style:{width:n,height:o,display:"flex",justifyContent:"center",alignItems:"center"}},r.default.createElement("img",{src:a,style:h()}),l&&r.default.createElement("div",{style:{position:"absolute",transformOrigin:"left top",transform:"scale(2)"}},r.default.createElement(i.default,{accept:"image/*",onChange:s,showUploadList:!1,customRequest:()=>{}},r.default.createElement(d.default,{type:"primary",icon:"upload"}))))}},OsNH:function(e,t,a){"use strict";var n=a("SWzQ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("2w0b")),i=n(a("d+Y9")),d=n(a("5YR8")),o=n(a("y8WL")),l=n(a("0Emf")),c=n(a("R0Qn")),s=a("F/R2"),u=(0,s.connect)(e=>({selectedRootId:e.slides.selectedId,selectedComponentId:e.slides.selectedComponentId,variables:e.slides.attributeVars}),{setSelectedComp:e=>({type:"slides/setSelectedComp",payload:{id:e}}),setValueOfCmp:(e,t,a)=>({type:"slides/setValueOfCmp",payload:{value:e,cmpId:t,rootId:a}})})(function(e){var t,a=e.type,n=e.children,s=e.attrs,f=e.height,h=e.width,v=e.value,p=e.rootId,g=e.selectedRootId,m=e.selectedComponentId,y=e.id,w=e.setSelectedComp,_=e.variables,b=e.setValueOfCmp,x=e.editable,E=(0,d.default)({},s);function k(e){b(e,m,g)}Object.keys(E).forEach(e=>{var t=E[e];if("string"===typeof t&&"$"===t[0]){var a=parseInt(t.slice(1)),n=_.find(e=>e.id===a);E[e]=n.value}});var C=E.padding,I=h-2*C,S=f-2*C,M={attrs:E,width:I,height:S,value:v,edit:y===m,onValueChange:k,editable:x};function O(e){x&&e.stopPropagation(),x&&w(y)}"text"===a?t=r.default.createElement(o.default,M):"image"===a?t=r.default.createElement(l.default,M):"canvas"===a?t=r.default.createElement(c.default,M):"panel"===a&&(t=r.default.createElement(r.default.Fragment,null,n&&n.map((e,t)=>{var a,d,o=s||s.span||{span:n.map(()=>1)},l=o.span,c=l.reduce((e,t)=>e+t,0);return"row"===s.flex?(a=l[t]*I/c,d=S):(d=l[t]*S/c,a=I),r.default.createElement(u,(0,i.default)({},e,{key:e.id,height:d,width:a,rootId:p,editable:x}))})));var z=g===p&&y===m,D={display:"panel"===a&&"flex",flexDirection:"panel"===a&&s.flex,height:f&&f,width:h&&h,border:z&&"1px solid black",padding:C};return r.default.createElement("div",{style:D,onClick:O},t)}),f=u;t.default=f},R0Qn:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("SWzQ"),_interopRequireWildcard=__webpack_require__("kKmG");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var _react=_interopRequireWildcard(__webpack_require__("2w0b")),_slicedToArray2=_interopRequireDefault(__webpack_require__("zVVh"));function _default(_ref){var attrs=_ref.attrs,value=_ref.value,width=_ref.width,height=_ref.height,edit=_ref.edit,onValueChange=_ref.onValueChange,canvasId=(new Date).getTime()+Math.floor(1e3*Math.random()),_useState=(0,_react.useState)(!1),_useState2=(0,_slicedToArray2.default)(_useState,2),error=_useState2[0],setError=_useState2[1];function handleChange(e){var t=e.target.value;onValueChange&&onValueChange(t),setError(!1)}var boxWidth=width-2*attrs.padding,boxHeight=height-2*attrs.padding;return(0,_react.useEffect)(()=>{if(!error&&!edit)try{var canvas=document.getElementById(canvasId);canvas.width=2*boxWidth,canvas.height=2*boxHeight,canvas.style.width=boxWidth+"px",canvas.style.height=boxHeight+"px";var ctx=canvas.getContext("2d");ctx.scale(2,2);var code="(".concat(value,")(canvas, ctx, ").concat(boxWidth,", ").concat(boxHeight,")");eval(code)}catch(e){console.error(e),setError(!0)}}),_react.default.createElement("div",null,edit?_react.default.createElement("textarea",{value:value,onChange:handleChange,style:{height:.8*height,width:width,backgroundColor:"transparent",border:0,resize:"none",outline:"none"}}):error?_react.default.createElement("p",null,"\u51fa\u9519\u5566~"):_react.default.createElement("canvas",{id:canvasId,style:{margin:attrs.padding}}))}},Ubzm:function(e,t,a){"use strict";var n=a("SWzQ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(a("2w0b"));function i(e){var t=e.children,a=e.x,n=void 0===a?0:a,i=e.y,d=void 0===i?0:i,o=e.z,l=void 0===o?0:o,c=e.scale,s=void 0===c?1:c,u=e.rotate,f=void 0===u?0:u,h=e.id;return r.default.createElement("div",{id:h&&h,className:"step",style:{position:"absolute",transform:"translate(-50%, -50%) translate3d(".concat(n,"px, ").concat(d,"px, ").concat(l,"px) scale(").concat(s,") rotate(").concat(f,"deg)")}},t)}},fjZE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=[],r=400;function i(e,t,a){this.id=e,this.x=0,this.y=0,this.width=t,this.height=a}function d(e,t){var a=e.x+e.width,n=e.y+e.height,r=t.x+t.width,i=t.y+t.height;return!(a<t.x||n<t.y||r<e.x||i<e.y)}function o(e,t,a){for(var n=!1,r=0;r<a;r++)if(d(e,t[r])){n=!0;break}return n}function l(){n[0].x=Math.round(-n[0].width/2),n[0].y=Math.round(-n[0].height/2);for(var e=0,t=0,a=10,i=0,d=1;d<n.length;d++)do{e=Math.round(a*Math.sin(i*Math.PI/180)),t=Math.round(a*Math.cos(i*Math.PI/180)),n[d].x=e,n[d].y=t,i+=1,i>=360&&(a+=r,i=0)}while(o(n[d],n,d))}function c(e){if(void 0===e)return null;if(n.push(new i(e.id,e.data.width,e.data.height)),void 0===e.children)return null;for(var t=0;t<e.children.length;t++)c(e.children[t])}function s(e){var t=JSON.parse(JSON.stringify(e));function a(e){if(void 0===e)return null;for(var t=e.id,r=0;r<n.length;r++)if(t===n[r].id){e.x=n[r].x,e.y=n[r].y;break}if(void 0===e.children)return null;for(var i=0;i<e.children.length;i++)a(e.children[i])}return a(t),t}function u(e){return c(e),l(),s(e)}},ko4v:function(e,t,a){},lTyU:function(e,t,a){"use strict";var n=a("kKmG");Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(a("2w0b"));function i(e){var t=e.children,a=e.backgroundColor,n=void 0===a?"#efefef":a,i=e.overviewOpen,d=void 0!==i&&i;return(0,r.useEffect)(()=>{var e=document.getElementsByTagName("body")[0],a=document.getElementById("impress"),r=document.getElementById("canvas"),i=!1,o=0;a.style.perspective="1000px",e.style.backgroundColor=n;var l=document.getElementsByClassName("step");function c(e){var t=e.x,n=void 0===t?0:t,i=e.y,d=void 0===i?0:i,o=e.z,l=void 0===o?0:o,c=e.scale,s=void 0===c?1:c,u=e.rotate,f=void 0===u?0:u;h(),a.style.transform="scale(".concat(1/s,")"),a.style.perspective="".concat(1e3*s,"px"),r.style.transform="rotate(".concat(-f,"deg) translate3d(").concat(-n,"px, ").concat(-d,"px, ").concat(-l,"px)")}[...l].forEach((e,a)=>{e.onclick=function(){i?(o=a,i=!1):o=(a+1)%t.length;var e=t[o].props;c(e)}});var s=t[0].props;function u(){o=o===t.length-1?t.length-1:o+1;var e=t[o].props;c(e)}function f(){o=0===o?0:o-1;var e=t[o].props;c(e)}function h(){var e=document.getElementsByClassName("step"),t=[...e];t.forEach((e,t)=>{e.style.opacity=t===o?1:.3})}function v(){var e=document.getElementsByClassName("step"),t=[...e];t.forEach((e,t)=>{e.style.opacity=1})}function p(){if(d){i=!0;var e=1/0,a=1/0,n=-1/0,r=-1/0;t.forEach(t=>{var i=t.props,d=i.x,o=void 0===d?0:d,l=i.y,c=void 0===l?0:l;n=Math.max(n,o),r=Math.max(r,c),e=Math.min(e,o),a=Math.min(a,c)});var o=(n+e)/2,l=(r+a)/2,s=n-e,u=r-a,f=(u+screen.height)/screen.height,h=(s+screen.width)/screen.width,p=Math.max(h,f),g={x:o,y:l,scale:p};c(g),v()}}s&&c(s);var g=e=>{if(8==e.keyCode||9==e.keyCode||27===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40){switch(e.keyCode){case 33:case 37:case 38:f();break;case 9:case 32:case 34:case 39:case 40:u();break;case 8:p();break}e.preventDefault()}};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}}),r.default.createElement("div",{id:"impress",style:{position:"absolute",left:"50%",top:"50%",transformOrigin:"left top",transitionDuration:"1s",transformStyle:"preserve-3d"}},r.default.createElement("div",{id:"canvas",style:{position:"absolute",transformOrigin:"left top",transitionDuration:"1s",transformStyle:"preserve-3d"}},t))}},qabX:function(e,t,a){e.exports={container:"container___1nIWR",background:"background___1zTAe"}},subP:function(e,t,a){"use strict";var n=a("SWzQ"),r=a("kKmG");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("2w0b")),d=a("F/R2"),o=a("84Km"),l=n(a("fjZE"));a("ko4v");var c=n(a("6T/4")),s=n(a("wPU9")),u=n(a("lTyU")),f=n(a("Ubzm")),h=(0,d.connect)(e=>({structure:e.slides.structure,components:e.slides.components}),{setSelectedComp:e=>({type:"slides/setSelectedComp",payload:{id:e}})})(function(e){var t=e.structure,a=e.components,n=e.setSelectedComp;(0,i.useEffect)(()=>{var e=function(e){27===e.keyCode&&c.default.push("/"),e.preventDefault()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}});var r=[];(0,o.dfs)(t,e=>{var t=a.find(t=>t.id===e.id);r.push(t)});var d=(0,o.copyTree)(t);(0,o.dfs)(d,e=>{Object.assign(e,{data:{width:.8*screen.width,height:.8*screen.height}})});var h=[],v=(0,l.default)(d);return(0,o.dfs)(v,e=>h.push(e)),n(-1),i.default.createElement(u.default,{overviewOpen:!0},r.map((e,t)=>i.default.createElement(f.default,{x:h[t].x,y:h[t].y,key:t},i.default.createElement(s.default,{scale:.8,hasBackground:!1,content:e,key:e.id}))))});t.default=h},wPU9:function(e,t,a){"use strict";var n=a("SWzQ"),r=a("kKmG");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("2w0b")),d=n(a("d+Y9")),o=n(a("zVVh")),l=n(a("qabX")),c=n(a("OsNH")),s=a("F/R2"),u=(0,s.connect)(null,{appendIdea:(e,t)=>({type:"slides/appendIdea",payload:{nodeId:t,ideaId:e}})})(function(e){var t=e.height,a=void 0===t?screen.height:t,n=e.width,r=void 0===n?screen.width:n,s=e.scale,u=void 0===s?1:s,f=e.translateX,h=void 0===f?0:f,v=e.translateY,p=void 0===v?0:v,g=e.content,m=e.selected,y=e.hasBackground,w=void 0===y||y,_=e.editable,b=void 0!==_&&_,x=e.isDrag,E=void 0!==x&&x,k=e.setIsDrag,C=e.appendIdea,I={height:a,width:r,transform:"translate(".concat(h,"px,").concat(p,"px) scale(").concat(u,")"),border:m&&"10px solid black"},S=(0,i.useState)(!1),M=(0,o.default)(S,2),O=M[0],z=M[1],D=g.id;function R(e){var t=e.dataTransfer.getData("type");if("idea"===t){var a=parseInt(e.dataTransfer.getData("id"));C(a,g.id),k(!1)}}return i.default.createElement("div",{className:"".concat(l.default.container," ").concat(w&&l.default.background),style:I},E&&i.default.createElement("div",{onDragEnter:()=>z(!0),onDragLeave:()=>z(!1),onDragOver:e=>e.preventDefault(),onDrop:R,style:{height:a,width:r,backgroundColor:"red",position:"absolute",opacity:O?.5:0}}),i.default.createElement(c.default,(0,d.default)({},g,{height:a,width:r,rootId:D,editable:b})))});t.default=u},y8WL:function(e,t,a){"use strict";var n=a("SWzQ"),r=a("kKmG");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("2w0b")),d=n(a("5YR8")),o=a("F/R2"),l=(0,o.connect)(null,{changeAttr:(e,t,a,n)=>({type:"slides/changeAttr",payload:{value:e,key:t,cmpId:a,rootId:n}})})(function(e){var t=e.attrs,a=e.value,n=e.width,r=e.height,o=e.edit,l=e.onValueChange,c=e.changeAttr;function s(e){var t=e.target.value;l&&l(t)}var u="text"+(new Date).getTime();(0,i.useEffect)(()=>{if(o){var e=document.getElementById(u),a=100,n=t.fontSize;while(e.offsetHeight>r&&a>0)a-=1,n-=10,e.style.fontSize="".concat(n,"px");100!==a&&c(n,"fontSize")}});var f={fontSize:t.fontSize,color:t.color,textAlign:t.textAlign,paddingLeft:t.padding,paddingRight:t.padding,fontWeight:t.fontWeight};return i.default.createElement("div",{style:{width:n,height:r,display:"flex",alignItems:"center"===t.verticalAlign?"center":"bottom"===t.verticalAlign?"flex-end":"flex-start",justifyContent:"center"===t.textAlign?"center":"right"===t.textAlign?"flex-end":"flex-start"}},o?i.default.createElement("textarea",{id:u,value:a,onChange:s,rows:a.split("\n").length,style:(0,d.default)({backgroundColor:"transparent",border:0,resize:"none",outline:"none",width:n},f)}):i.default.createElement("div",{style:f},a.split("\n").map((e,t)=>i.default.createElement("p",{key:t,style:{margin:"0em"}},e))))});t.default=l}}]);