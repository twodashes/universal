parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"OqZs":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){var e=0;if(0===t.length)return e;for(var r=0;r<t.length;r++){e=(e<<5)-e+t.charCodeAt(r),e&=e}return e+""}function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n(t){return t.replace(/_-/g," ").replace(/[^\w ]+/g,"").toLowerCase().trim()}function o(t){return t.replace(/[^\w]+/g,"").toLowerCase().trim()}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.substring(0,e)+r+t.substring(e,t.length)}function s(t,e){return"]"===e&&(e="\\]"),"\\"===e&&(e="\\\\"),t.replace(new RegExp("^["+e+"]+|["+e+"]+$","g"),"")}function a(t){return t.replace(new RegExp("^[^a-z]+|[^a-z]+$","gi"),"")}function l(t){if((t=t.toLowerCase()).length<=3)return 1;var e=(t=(t=t.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"")).replace(/^y/,"")).match(/[aeiouy]{1,2}/g);return e?e.length:0}if(Object.defineProperty(exports,"__esModule",{value:!0}),"object"===("undefined"==typeof window?"undefined":t(window))){var u={str_capitalize:r,str_hash:e,str_insert:i,str_sanitize_loosely:n,str_sanitize_strictly:o,str_syllables_count:l,str_trim_char:s,str_trim_non_alpha:a};for(var c in window.__=window.__||{},u)window.__[c]=u[c]}exports.str_capitalize=r,exports.str_hash=e,exports.str_insert=i,exports.str_sanitize_loosely=n,exports.str_sanitize_strictly=o,exports.str_syllables_count=l,exports.str_trim_char=s,exports.str_trim_non_alpha=a;
},{}]},{},["OqZs"], null)
//# sourceMappingURL=/string.map