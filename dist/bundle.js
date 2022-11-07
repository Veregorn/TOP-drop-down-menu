(()=>{"use strict";var n,e,t,r,a,o,i,s,c,l,u,p,d,f,v={28:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Montserrat&display=swap);"]),i.push([n.id,"* {\n    font-family: 'Montserrat', sans-serif;\n    list-style: none;\n    text-decoration: none;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.wrapper {\n    width: 100%;\n    height: 100%;\n}\n\n.navbar {\n    width: 100%;\n    height: 60px;\n    background: #9972bf;\n}\n\n.navbar > ul {\n    display: flex;\n    justify-content: center;\n}\n\n.navbar ul li {\n    position: relative;\n}\n\n.navbar ul li a {\n    display: block;\n    color: #fff;\n    width: 180px;\n    height: 60px;\n    text-align: center;\n    padding: 20px 10px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    transition: all 0.2s ease;\n}\n\n.navbar ul li > a {\n    margin-right: 1px;\n}\n\n.navbar ul li:last-child > a {\n    margin-right: 0;\n}\n\n.navbar ul li a .icon {\n    width: 25px;\n    display: inline-block;\n}\n\n.navbar ul li a:hover,\n.navbar ul li a:active,\n.navbar .dd_menu ul li a:hover,\n.navbar .dd_menu ul li a:active {\n    background: #c279b7;\n}\n\n.navbar .dd_menu {\n    position: absolute;\n    top: 80px;\n    left: 0;\n}\n\n.navbar .dd_menu ul li a {\n    width: 180px;\n    background: #9972bf;\n    text-align: left;\n    padding: 20px 18px;\n}\n\n.navbar .dd_menu:before {\n    content: \"\";\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n    border: 15px solid;\n    border-color: transparent transparent #9972bf transparent;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var v=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return v[n](t,t.exports,m),t.exports}m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),a=m(569),o=m.n(a),i=m(565),s=m.n(i),c=m(216),l=m.n(c),u=m(589),p=m.n(u),d=m(28),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");return n.innerHTML="Hello Webpack",n}())})();