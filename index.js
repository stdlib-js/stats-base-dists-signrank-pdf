// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,b,"$1e"),t=s.call(t,h,"e"),t=s.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,y,"e-0$1"),r.alternate&&(t=s.call(t,g,"$1."),t=s.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,E=Array.isArray;function j(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,o,a,c,f,l,s,p,y,g,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,j(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,j(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!j(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=j(a)?String(t.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,v=void 0,(v=y-p.length)<0?p:p=g?p+m(v):m(v)+p)),c+=t.arg||"",f+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=U.exec(r);t;)(e=r.slice(i,U.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=U.lastIndex,t=U.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function T(r){var e,n;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var F,k=Object.prototype,N=k.toString,V=k.__defineGetter__,O=k.__defineSetter__,G=k.__lookupGetter__,L=k.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,e)||L.call(r,e)?(t=r.__proto__,r.__proto__=k,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,n.get),a&&O&&O.call(r,e,n.set),r};var $=F;function C(r,e,n){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var H=Math.floor;function P(r){return H(r)===r&&r>0}var W=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;function R(r){return r==r&&r>B&&r<W}function M(r){return r!=r}var Z=Math.ceil;function X(r){return r<0?Z(r):H(r)}var Y=1023,z=1023,q=-1023,D=-1074;function J(r){return r===W||r===B}var K=2147483648,Q=2147483647;var rr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function er(){return rr&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var tr=Object.prototype.hasOwnProperty;function ir(r,e){return null!=r&&tr.call(r,e)}var or="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof or?or.toStringTag:"";var ur=er()?function(r){var e,n,t;if(null==r)return nr.call(r);n=r[ar],e=ir(r,ar);try{r[ar]=void 0}catch(e){return nr.call(r)}return t=nr.call(r),e?r[ar]=n:delete r[ar],t}:function(r){return nr.call(r)},cr="function"==typeof Uint32Array;var fr="function"==typeof Uint32Array?Uint32Array:null;var lr,sr="function"==typeof Uint32Array?Uint32Array:void 0;lr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(cr&&n instanceof Uint32Array||"[object Uint32Array]"===ur(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr=lr,yr="function"==typeof Float64Array;var gr="function"==typeof Float64Array?Float64Array:null;var vr,dr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,NaN]),n=e,r=(yr&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr=vr,br="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null;var mr,Ar="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var r,e,n;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,256,257]),n=e,r=(br&&n instanceof Uint8Array||"[object Uint8Array]"===ur(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Er=mr,jr="function"==typeof Uint16Array;var _r="function"==typeof Uint16Array?Uint16Array:null;var Sr,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Sr=function(){var r,e,n;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,65536,65537]),n=e,r=(jr&&n instanceof Uint16Array||"[object Uint16Array]"===ur(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var xr,Ir={uint16:Sr,uint8:Er};(xr=new Ir.uint16(1))[0]=4660;var Tr,Fr,kr=52===new Ir.uint8(xr.buffer)[0];!0===kr?(Tr=1,Fr=0):(Tr=0,Fr=1);var Nr={HIGH:Tr,LOW:Fr},Vr=new hr(1),Or=new pr(Vr.buffer),Gr=Nr.HIGH,Lr=Nr.LOW;function $r(r,e,n,t){return Vr[0]=r,e[t]=Or[Gr],e[t+n]=Or[Lr],e}function Cr(r){return $r(r,[0,0],1,0)}C(Cr,"assign",$r);var Hr,Pr,Wr=!0===kr?1:0,Br=new hr(1),Rr=new pr(Br.buffer);function Mr(r){return Br[0]=r,Rr[Wr]}!0===kr?(Hr=1,Pr=0):(Hr=0,Pr=1);var Zr={HIGH:Hr,LOW:Pr},Xr=new hr(1),Yr=new pr(Xr.buffer),zr=Zr.HIGH,qr=Zr.LOW;function Dr(r,e){return Yr[zr]=r,Yr[qr]=e,Xr[0]}var Jr=[0,0];var Kr=22250738585072014e-324;var Qr=4503599627370496;function re(r,e,n,t){return M(r)||J(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Kr?(e[t]=r*Qr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=2146435072;var ne=2220446049250313e-31,te=2148532223,ie=[0,0],oe=[0,0];function ae(r,e){var n,t,i,o,a,u;return 0===e||0===r||M(r)||J(r)?r:(re(r,ie,1,0),r=ie[0],e+=ie[1],e+=function(r){var e=Mr(r);return(e=(e&ee)>>>20)-Y|0}(r),e<D?(i=0,o=r,Cr.assign(i,Jr,1,0),a=Jr[0],a&=Q,u=Mr(o),Dr(a|=u&=K,Jr[1])):e>z?r<0?B:W:(e<=q?(e+=52,t=ne):t=1,Cr.assign(r,oe,1,0),n=oe[0],n&=te,t*Dr(n|=e+Y<<20,oe[1])))}var ue=.6931471803691238,ce=1.9082149292705877e-10,fe=1.4426950408889634,le=709.782712893384,se=-745.1332191019411,pe=1/(1<<28),ye=-pe;function ge(r){var e;return M(r)||r===W?r:r===B?0:r>le?W:r<se?0:r>ye&&r<pe?1+r:function(r,e,n){var t,i,o,a;return ae(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(e=X(r<0?fe*r-.5:fe*r+.5))*ue,e*ce,e)}var ve=!0===kr?1:0,de=new hr(1),he=new pr(de.buffer);var be=.6931471803691238,we=1.9082149292705877e-10,me=0x40000000000000,Ae=.3333333333333333,Ee=1048575,je=2146435072,_e=1048576,Se=1072693248;function Ue(r){var e,n,t,i,o,a,u,c,f,l,s,p;return 0===r?B:M(r)||r<0?NaN:(o=0,(n=Mr(r))<_e&&(o-=54,n=Mr(r*=me)),n>=je?r+r:(o+=(n>>20)-Y|0,o+=(c=(n&=Ee)+614244&1048576|0)>>20|0,u=(r=function(r,e){return de[0]=r,he[ve]=e>>>0,de[0]}(r,n|c^Se))-1,(Ee&2+n)<3?0===u?0===o?0:o*be+o*we:(a=u*u*(.5-Ae*u),0===o?u-a:o*be-(a-o*we-u)):(c=n-398458|0,f=440401-n|0,i=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=t+i,(c|=f)>0?(e=.5*u*u,0===o?u-(e-l*(e+a)):o*be-(e-(l*(e+a)+o*we)-u)):0===o?u-l*(u-a):o*be-(l*(u-a)-o*we-u))))}var xe=.6931471805599453,Ie=/./;function Te(r){return"boolean"==typeof r}var Fe=Boolean,ke=Boolean.prototype.toString;var Ne=er();function Ve(r){return"object"==typeof r&&(r instanceof Fe||(Ne?function(r){try{return ke.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ur(r)))}function Oe(r){return Te(r)||Ve(r)}C(Oe,"isPrimitive",Te),C(Oe,"isObject",Ve);var Ge="object"==typeof self?self:null,Le="object"==typeof window?window:null,$e="object"==typeof global?global:null,Ce="object"==typeof globalThis?globalThis:null;var He=function(r){if(arguments.length){if(!Te(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ce)return Ce;if(Ge)return Ge;if(Le)return Le;if($e)return $e;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=He.document&&He.document.childNodes,We=Int8Array;function Be(){return/^\s*function\s*([^(]*)/i}var Re=/^\s*function\s*([^(]*)/i;C(Be,"REGEXP",Re);var Me=Array.isArray?Array.isArray:function(r){return"[object Array]"===ur(r)};function Ze(r){return null!==r&&"object"==typeof r}function Xe(r){var e,n,t,i;if(("Object"===(n=ur(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=Re.exec(t.toString()))return e[1]}return Ze(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}C(Ze,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!Me(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(Ze));var Ye,ze="function"==typeof Ie||"object"==typeof We||"function"==typeof Pe?function(r){return Xe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Xe(r).toLowerCase():e};function qe(r){return"function"===ze(r)}function De(r){return r}Ye=function(r,e){var n,t;if(!qe(r))throw new TypeError(T("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)n=De;else if(!qe(n=e))throw new TypeError(T("invalid argument. Hash function argument must be a function. Value: `%s`.",n));return C(i,"cache",t={}),i;function i(){var e,i,o,a;for(e=new Array(arguments.length),a=0;a<arguments.length;a++)e[a]=arguments[a];return o=n(e).toString(),ir(t,o)?t[o]:(i=r.apply(null,e),t[o]=i,i)}}((function(r,e){var n;return 0===e?0===r?1:0:(n=e*(e+1)/2,r<0||r>n?0:(r>n/2&&(r=n-r),Ye(r-e,e-1)+Ye(r,e-1)))}));var Je=Ye;function Ke(r,e){return!M(r)&&P(e)&&R(e)?r<0||r>e*(e+1)/2?0:ge(Ue(Je(r,e))-e*xe):NaN}return C(Ke,"factory",(function(r){var e,n;return P(r)&&R(r)?(e=r*(r+1)/2,function(n){if(M(n))return NaN;if(n<0||n>e)return 0;return ge(Ue(Je(n,r))-r*xe)}):(n=NaN,function(){return n})})),Ke}));
//# sourceMappingURL=index.js.map
