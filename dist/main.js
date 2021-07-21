(()=>{"use strict";var e={550:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"#apple {\n  background: red;\n  border-radius: 50%;\n}\n",""]);const i=o},233:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"#grid-container {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  background: #333;\n  border: 1px solid #000;\n}\n#grid-container .row-container {\n  display: flex;\n}\n#grid-container .col-container {\n  width: 29px;\n  height: 29px;\n}\n",""]);const i=o},513:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".snake-piece {\n  background: green;\n  border-radius: 12px;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var f=n(u),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(h)):t.push({identifier:u,updater:o(h,r),references:1}),a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),f=n.n(u),h=n(233),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),t()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const g=e=>{const t=document.createElement("div");t.id="grid-container";for(let n=0;n<e;n++){const n=document.createElement("div");n.classList.add("row-container");for(let t=0;t<e;t++){const e=document.createElement("div");e.classList.add("col-container"),n.appendChild(e)}t.appendChild(n)}return t};var m=n(513),v={};v.styleTagTransform=f(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const b=(e,t)=>{const[n,r]=t[t.length-1];[...[...e.children][n].children][r].classList.add("snake-piece")},y=(e,t)=>{const[n,r]=t;[...[...e.children][n].children][r].classList.remove("snake-piece")};var C=n(550),w={};w.styleTagTransform=f(),w.setAttributes=c(),w.insert=a().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=l(),t()(C.Z,w),C.Z&&C.Z.locals&&C.Z.locals;const x=(e,t)=>{const[n,r]=t;[...[...e.children][n].children][r].id="apple"},A=(e,t)=>{const[n,r]=t;[...[...e.children][n].children][r].removeAttribute("id"),console.log(n,r)},S=(()=>{const e=[];for(let t=0;t<17;t++){const t=[];for(let e=0;e<17;e++)t.push("");e.push(t)}return{getGrid:()=>e,getGridSize:()=>17}})(),k=(()=>{const e=[[8,4]];let t=1,n="right";return{addCoordinate:t=>e.push(t),removeOldCoordinate:()=>e.shift(),getCoordinates:()=>e,incrementLength:()=>t+=1,getLength:()=>t,changeDirection:e=>n=e,getDirection:()=>n}})(),Z=(()=>{let e=[8,10];return{newCoordinates:(t,n)=>{let r,o,i=!0;for(;i;)r=Math.floor(Math.random()*n),o=Math.floor(Math.random()*n),i=t.filter((e=>{const[t,n]=e;return r===t&&o===n})).length>0;e=[r,o]},getCoordinates:()=>e}})();let T=0;document.querySelector("body").appendChild(g(S.getGridSize()));const E=document.querySelector("#grid-container");(()=>{const[e,t]=k.getCoordinates()[0];let[n,r]=Z.getCoordinates(),o=k.getDirection();S.getGrid()[e][t]="S",S.getGrid()[n][r]="A",b(E,k.getCoordinates()),x(E,[n,r]),document.addEventListener("keydown",(e=>{"right"!==o&&"left"!==o||("ArrowUp"===e.key&&k.changeDirection("up"),"ArrowDown"===e.key&&k.changeDirection("down")),"up"!==o&&"down"!==o||("ArrowRight"===e.key&&k.changeDirection("right"),"ArrowLeft"===e.key&&k.changeDirection("left"))}));const i=setInterval((()=>{o=k.getDirection();let[e,t]=k.getCoordinates()[k.getCoordinates().length-1];switch(o){case"left":t-=1;break;case"right":t+=1;break;case"up":e-=1;break;case"down":e+=1}if(e>S.getGrid().length-1||e<0||t>S.getGrid().length-1||t<0||"S"===S.getGrid()[e][t])clearInterval(i);else if(k.addCoordinate([e,t]),S.getGrid()[e][t]="S",b(E,k.getCoordinates()),e===Z.getCoordinates()[0]&&t===Z.getCoordinates()[1]){k.incrementLength(),T+=1,A(E,Z.getCoordinates()),Z.newCoordinates(k.getCoordinates(),S.getGridSize());let[e,t]=Z.getCoordinates();S.getGrid()[e][t]="A",x(E,[e,t])}else{let[e,t]=k.removeOldCoordinate();S.getGrid()[e][t]="",y(E,[e,t])}}),200)})()})()})();