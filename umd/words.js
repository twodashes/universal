parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Hahc":[function(require,module,exports) {
"use strict";function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.syllable_count=exports.is_vowel=exports.ends_in_vowel=void 0;var o=function(e){if(!e)return 0;var o=e,n=(e=(e=(e=e.replace("ue","e")).substr(0,e.length-1)).replace(/[^aeiouy]+/g," ")).split(" ").map(function(e){return e.trim()}).filter(function(e){return!!e}).length;return 0===n?o.length:n};exports.syllable_count=o;var n=function(e){return["a","e","i","o","u","y"].includes(e)};exports.is_vowel=n;var t=function(e){return["a","e","i","o","u","y"].includes(e[e.length-1])};if(exports.ends_in_vowel=t,"object"===("undefined"==typeof window?"undefined":e(window))){var r={ends_in_vowel:t,is_vowel:n,syllable_count:o};for(var i in window.__=window.__||{},r)window.__[i]=r[i]}
},{}]},{},["Hahc"], null)
//# sourceMappingURL=words.map