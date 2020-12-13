parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"jWR9":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=e(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,_=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){_=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(_)throw s}}}}function i(t){return s(t)||o(t)||e(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,n){if(t){if("string"==typeof t)return a(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,n):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return a(t)}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function _(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t?(r&&(t=i(t)),t.sort(l.bind(n))):[]}function l(t,n){return this.indexOf(t.substr(t.indexOf(".")+1))-this.indexOf(n.substr(n.indexOf(".")+1))}function h(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t?(r&&(t=i(t)),n?t.sort(function(t,n){return n.toString().length-t.toString().length}):t.sort(function(t,n){return t.toString().length-n.toString().length})):[]}function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t)return[];e&&(t=i(t));try{var o=h(i(t));if(!o[0])return t;var s={};for(var a in t){s[t[a]]=a}var _={min_length:o[0].length,max_length:o[o.length-1].length,min_position:0,max_position:t.length,delta_position:t.length,arr_positions:s,prefer_position:n};return r&&(_.fix_min_length=r,_.min_length=r),_.delta_length=_.max_length-_.min_length,t.sort(u.bind(_))}catch(l){return console.error("invalid input array to sort_strings_by_length_and_position()"),t}}function u(t,n){var i=t.length,r=n.length;this.fix_min_length&&(t.length<this.fix_min_length&&(i=this.fix_min_length),n.length<this.fix_min_length&&(r=this.fix_min_length));var e=(i-this.min_length)/this.delta_length,o=(r-this.min_length)/this.delta_length;return e+(this.arr_positions[t]-this.min_position)/this.delta_position*this.prefer_position-(o+(this.arr_positions[n]-this.min_position)/this.delta_position*this.prefer_position)}function f(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return[];e&&(t=i(t));var o,s={},a=n(t);try{for(a.s();!(o=a.n()).done;){var _,l=o.value,h=l.replace(/[^a-z0-9]/gi,""),g=0,u=n(r);try{for(u.s();!(_=u.n()).done;){var f=_.value;h.includes(f)&&(g++,h=h.replace(f,""))}}catch(m){u.e(m)}finally{u.f()}s[l]=g}}catch(m){a.e(m)}finally{a.f()}return t.sort(d.bind(s))}function d(t,n){var i=this[t]||0;return(this[n]||0)-i}function m(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return[];e&&(t=i(t));var o,s={},a=n(t);try{for(a.s();!(o=a.n()).done;){var _=o.value;s[_]=r[_]||0}}catch(l){a.e(l)}finally{a.f()}return t.sort(c.bind(s))}function c(t,n){var i=this[t];return this[n]-i}function y(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t)return[];e&&(t=i(t));var o={min_rating:null,max_rating:null};for(var s in o.ratings=n,n){var a=n[s];(null===o.min_rating||a<o.min_rating)&&(o.min_rating=a),(null===o.max_rating||a>o.max_rating)&&(o.max_rating=a)}for(var _ in o.delta_rating=o.max_rating-o.min_rating,o.median_rating=o.min_rating+o.delta_rating/2,o.min_index=0,o.max_index=t.length-1,o.indexes={},t){var l=t[_];o.indexes[l]=_}return o.delta_index=o.max_index-o.min_index,o.multiply_position=r,t.sort(v.bind(o))}function v(t,n){var i=(this.delta_rating-(this.max_rating-(void 0!==this.ratings[t]?this.ratings[t]:this.median_rating)))/this.delta_rating,r=(this.delta_rating-(this.max_rating-(void 0!==this.ratings[n]?this.ratings[n]:this.median_rating)))/this.delta_rating,e=(this.max_index-this.indexes[t])/this.delta_index*this.multiply_position;return r+(this.max_index-this.indexes[n])/this.delta_index*this.multiply_position-(i+e)}function p(t,n){if(!t&&!n)return[];if(!t&&n)return n;if(t&&!n)return t;var r=new Set,e={};for(var o in arguments)e[o]=-1;for(var s=0;s<50;s++)for(var a in arguments){var _=arguments[a][e[a]++];_&&r.add(_)}return i(r)}if(Object.defineProperty(exports,"__esModule",{value:!0}),"object"===("undefined"==typeof window?"undefined":t(window))){var b={sort_strings_by_extension:_,sort_strings_by_length_and_position:g,sort_strings_by_length_asc:h,sort_strings_by_matches_in_list:f,sort_strings_by_rating:m,sort_strings_by_rating_and_position:y,sort_strings_combine_lists:p};for(var x in window.__=window.__||{},b)window.__[x]=b[x]}exports.sort_strings_by_extension=_,exports.sort_strings_by_length_and_position=g,exports.sort_strings_by_length_asc=h,exports.sort_strings_by_matches_in_list=f,exports.sort_strings_by_rating=m,exports.sort_strings_by_rating_and_position=y,exports.sort_strings_combine_lists=p;
},{}]},{},["jWR9"], null)
//# sourceMappingURL=/sort_strings.map