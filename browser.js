// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function E(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,j=isNaN,S=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,o,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,j(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,j(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!j(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=j(a)?String(t.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),f+=t.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(T(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function N(r){return"string"==typeof r}function k(r){var e,n,t;if(!N(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return x.apply(null,n)}var V,O=Object.prototype,G=O.toString,L=O.__defineGetter__,$=O.__defineSetter__,C=O.__lookupGetter__,H=O.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===G.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,e,n.get),a&&$&&$.call(r,e,n.set),r};var P=V;function W(r,e,n){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=Math.floor;function R(r){return B(r)===r&&r>0}var M=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;function X(r){return r==r&&r>Z&&r<M}function Y(r){return r!=r}var z=Math.ceil;function q(r){return r<0?z(r):B(r)}var D=1023;function J(r){return r===M||r===Z}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty;function nr(r,e){return null!=r&&er.call(r,e)}var tr,ir="function"==typeof Symbol?Symbol:void 0,or="function"==typeof ir?ir.toStringTag:"",ar=Q()?function(r){var e,n,t;if(null==r)return rr.call(r);n=r[or],e=nr(r,or);try{r[or]=void 0}catch(e){return rr.call(r)}return t=rr.call(r),e?r[or]=n:delete r[or],t}:function(r){return rr.call(r)},ur="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr,sr=tr,pr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),n=e,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=lr,vr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,br="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,256,257]),n=e,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar=dr,Er="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,jr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,n;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Er&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Sr,Ur={uint16:mr,uint8:Ar};(Sr=new Ur.uint16(1))[0]=4660;var xr,Ir,Tr=52===new Ur.uint8(Sr.buffer)[0];!0===Tr?(xr=1,Ir=0):(xr=0,Ir=1);var Fr={HIGH:xr,LOW:Ir},Nr=new hr(1),kr=new sr(Nr.buffer),Vr=Fr.HIGH,Or=Fr.LOW;function Gr(r,e,n,t){return Nr[0]=r,e[t]=kr[Vr],e[t+n]=kr[Or],e}function Lr(r){return Gr(r,[0,0],1,0)}W(Lr,"assign",Gr);var $r,Cr,Hr=!0===Tr?1:0,Pr=new hr(1),Wr=new sr(Pr.buffer);function Br(r){return Pr[0]=r,Wr[Hr]}!0===Tr?($r=1,Cr=0):($r=0,Cr=1);var Rr={HIGH:$r,LOW:Cr},Mr=new hr(1),Zr=new sr(Mr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e){return Zr[Xr]=r,Zr[Yr]=e,Mr[0]}var qr=[0,0];function Dr(r,e,n,t){return Y(r)||J(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}W((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,e){var n,t,i,o,a,u;return 0===e||0===r||Y(r)||J(r)?r:(Dr(r,Jr,1,0),e+=Jr[1],e+=function(r){var e=Br(r);return(e=(2146435072&e)>>>20)-D|0}(r=Jr[0]),e<-1074?(i=0,o=r,Lr.assign(i,qr,1,0),a=qr[0],a&=2147483647,u=Br(o),zr(a|=u&=2147483648,qr[1])):e>1023?r<0?Z:M:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Lr.assign(r,Kr,1,0),n=Kr[0],n&=2148532223,t*zr(n|=e+D<<20,Kr[1])))}var re=1.4426950408889634,ee=1/(1<<28);function ne(r){var e;return Y(r)||r===M?r:r===Z?0:r>709.782712893384?M:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ee?1+r:function(r,e,n){var t,i,o,a;return Qr(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(e=q(r<0?re*r-.5:re*r+.5)),1.9082149292705877e-10*e,e)}var te=!0===Tr?1:0,ie=new hr(1),oe=new sr(ie.buffer),ae=.6931471803691238,ue=1.9082149292705877e-10,ce=1048575;function fe(r){var e,n,t,i,o,a,u,c,f,l,s,p;return 0===r?Z:Y(r)||r<0?NaN:(o=0,(n=Br(r))<1048576&&(o-=54,n=Br(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-D|0,o+=(c=614244+(n&=ce)&1048576|0)>>20|0,u=(r=function(r,e){return ie[0]=r,oe[te]=e>>>0,ie[0]}(r,n|1072693248^c))-1,(ce&2+n)<3?0===u?0===o?0:o*ae+o*ue:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*ae-(a-o*ue-u)):(c=n-398458|0,f=440401-n|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(c|=f)>0?(e=.5*u*u,0===o?u-(e-l*(e+a)):o*ae-(e-(l*(e+a)+o*ue)-u)):0===o?u-l*(u-a):o*ae-(l*(u-a)-o*ue-u))))}var le=.6931471805599453,se=/./;function pe(r){return"boolean"==typeof r}var ye=Boolean,ge=Boolean.prototype.toString,de=Q();function he(r){return"object"==typeof r&&(r instanceof ye||(de?function(r){try{return ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ar(r)))}function ve(r){return pe(r)||he(r)}function we(){return new Function("return this;")()}W(ve,"isPrimitive",pe),W(ve,"isObject",he);var be="object"==typeof self?self:null,me="object"==typeof window?window:null,Ae="object"==typeof globalThis?globalThis:null,Ee=function(r){if(arguments.length){if(!pe(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return we()}if(Ae)return Ae;if(be)return be;if(me)return me;throw new Error("unexpected error. Unable to resolve global object.")}(),_e=Ee.document&&Ee.document.childNodes,je=Int8Array;function Se(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;W(Se,"REGEXP",Ue);var xe=Array.isArray?Array.isArray:function(r){return"[object Array]"===ar(r)};function Ie(r){return null!==r&&"object"==typeof r}function Te(r){var e,n,t,i;if(("Object"===(n=ar(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=Ue.exec(t.toString()))return e[1]}return Ie(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}W(Ie,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!xe(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(Ie));var Fe,Ne="function"==typeof se||"object"==typeof je||"function"==typeof _e?function(r){return Te(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Te(r).toLowerCase():e};function ke(r){return"function"===Ne(r)}function Ve(r){return r}Fe=function(r,e){var n,t;if(!ke(r))throw new TypeError(k("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)n=Ve;else if(!ke(n=e))throw new TypeError(k("invalid argument. Hash function argument must be a function. Value: `%s`.",n));return W(i,"cache",t={}),i;function i(){var e,i,o,a;for(e=new Array(arguments.length),a=0;a<arguments.length;a++)e[a]=arguments[a];return o=n(e).toString(),nr(t,o)?t[o]:(i=r.apply(null,e),t[o]=i,i)}}((function(r,e){var n;return 0===e?0===r?1:0:(n=e*(e+1)/2,r<0||r>n?0:(r>n/2&&(r=n-r),Fe(r-e,e-1)+Fe(r,e-1)))}));var Oe=Fe;function Ge(r,e){return!Y(r)&&R(e)&&X(e)?r<0||r>e*(e+1)/2?0:ne(fe(Oe(r,e))-e*le):NaN}return W(Ge,"factory",(function(r){var e,n;return R(r)&&X(r)?(e=r*(r+1)/2,function(n){return Y(n)?NaN:n<0||n>e?0:ne(fe(Oe(n,r))-r*le)}):(n=NaN,function(){return n})})),Ge},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=browser.js.map
