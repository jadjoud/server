/*! For license information please see files-search.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,i={66747:(e,t,r)=>{var i=r(61338),o=r(85168),a=r(63814),n=r(53334);const l=(0,r(53529).YK)().setApp("files").detectUser().build();r(18205),document.addEventListener("DOMContentLoaded",(function(){const e=window.OCA;e.UnifiedSearch&&(l.info("Initializing unified search plugin: folder search from files app"),e.UnifiedSearch.registerFilterAction({id:"files",appId:"files",label:(0,n.Tl)("files","In folder"),icon:(0,a.d0)("files","app.svg"),callback:()=>{(0,o.a1)("Pick plain text files").addMimeTypeFilter("httpd/unix-directory").allowDirectories(!0).addButton({label:"Pick",callback:e=>{l.info("Folder picked",{folder:e[0]});const t=e[0];(0,i.Ic)("nextcloud:unified-search:add-filter",{id:"files",payload:t,filterUpdateText:(0,n.Tl)("files","Search in folder: {folder}",{folder:t.basename}),filterParams:{path:t.path}})}}).build().pick()}}))}))},63710:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27%20style=%27fill-opacity:1;fill:%23ffffff%27/%3e%3c/svg%3e"},57273:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20height=%2716%27%20width=%2716%27%3e%3cpath%20d=%27M14%2012.3L12.3%2014%208%209.7%203.7%2014%202%2012.3%206.3%208%202%203.7%203.7%202%208%206.3%2012.3%202%2014%203.7%209.7%208z%27/%3e%3c/svg%3e"}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=i,e=[],a.O=(t,r,i,o)=>{if(!r){var n=1/0;for(s=0;s<e.length;s++){r=e[s][0],i=e[s][1],o=e[s][2];for(var l=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(l=!1,o<n&&(n=o));if(l){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,i,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{7560:"0790505c8180845d6197",8618:"d30d39583cd1936d2676"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",a.l=(e,i,o,n)=>{if(t[e])t[e].push(i);else{var l,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+o){l=f;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",r+o),l.src=e),t[e]=[i];var p=(r,i)=>{l.onerror=l.onload=null,clearTimeout(u);var o=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),r)return r(i)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),d&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=2277,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={2277:0};a.f.j=(t,r)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((r,o)=>i=e[t]=[r,o]));r.push(i[2]=o);var n=a.p+a.u(t),l=new Error;a.l(n,(r=>{if(a.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,i[1](l)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,n=r[0],l=r[1],d=r[2],c=0;if(n.some((t=>0!==e[t]))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(d)var s=d(a)}for(t&&t(r);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var n=a.O(void 0,[4208],(()=>a(66747)));n=a.O(n)})();
//# sourceMappingURL=files-search.js.map?v=36b74aa1cdb507f54579