parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"IREn":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=r(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,s=!0,f=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return s=t.done,t},e:function(t){f=!0,u=t},f:function(){try{s||null==e.return||e.return()}finally{if(f)throw u}}}}function r(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sort_strings_by_width=exports.sort_strings_by_length=void 0;var o=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=u.bind({desc:n});return t.sort(r)};exports.sort_strings_by_length=o;var i=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=s.bind({desc:n});return t.sort(r)};function u(t,n){return this.desc?n.toString().length-t.toString().length:t.toString().length-n.toString().length}function s(t,n){var r=this.desc,e=f(JSON.stringify(t||"")),o=f(JSON.stringify(n||""));return r?o-e:e-o}function f(t){var r,e=0,o=n(t=(t||"").toString());try{for(o.s();!(r=o.n()).done;){var i=r.value;e+=a[i.toLowerCase()]||15}}catch(u){o.e(u)}finally{o.f()}return e}exports.sort_strings_by_width=i;var a={0:7,1:4,2:6,3:7,4:7,5:7,6:7,7:6,8:7,9:7,a:6,b:7,c:6,d:7,e:6,f:2,g:6,h:6,i:3,j:2,k:5,l:3,m:9,n:6,o:6,p:6,q:6,r:3,s:5,t:3,u:6,v:5,w:9,x:5,y:5,z:5};if("object"===("undefined"==typeof window?"undefined":t(window))){var l={sort_strings_by_length:o,sort_strings_by_width:i};for(var y in window.__=window.__||{},l)window.__[y]=l[y]}
},{}]},{},["IREn"], null)
//# sourceMappingURL=/sort_words.map