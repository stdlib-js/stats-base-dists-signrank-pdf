// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function p(r){return y(r)===r&&r>0}var v=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function b(r){return r==r&&r>s&&r<v}function w(r){return r!=r}var d=Math.ceil;function m(r){return r<0?d(r):y(r)}var A=1023;function h(r){return r===v||r===s}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return g&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function E(r,n){return null!=r&&U.call(r,n)}var N="function"==typeof Symbol?Symbol.toStringTag:"";var O=_()?function(r){var n,t,e;if(null==r)return j.call(r);t=r[N],n=E(r,N);try{r[N]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[N]=t:delete r[N],e}:function(r){return j.call(r)},S="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var T,F="function"==typeof Uint32Array?Uint32Array:void 0;T=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===O(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=T,G="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var V,B="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===O(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var L=V,x="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null;var W,k="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===O(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var C=W,Y="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null;var X,q="function"==typeof Uint16Array?Uint16Array:void 0;X=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===O(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var z,D={uint16:X,uint8:C};(z=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(z.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var Z={HIGH:J,LOW:K},$=new L(1),rr=new H($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return $[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function or(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var ur,ir,ar=!0===Q?1:0,fr=new L(1),cr=new H(fr.buffer);function lr(r){return fr[0]=r,cr[ar]}!0===Q?(ur=1,ir=0):(ur=0,ir=1);var yr={HIGH:ur,LOW:ir},pr=new L(1),vr=new H(pr.buffer),sr=yr.HIGH,br=yr.LOW;function wr(r,n){return vr[sr]=r,vr[br]=n,pr[0]}var dr=[0,0];function mr(r,n,t,e){return w(r)||h(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return mr(r,[0,0],1,0)}),"assign",mr);var Ar=[0,0],hr=[0,0];function gr(r,n){var t,e,o,u,i;return 0===n||0===r||w(r)||h(r)?r:(mr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=lr(r);return(n=(2146435072&n)>>>20)-A|0}(r=Ar[0]),n<-1074?(o=r,or(dr,0),u=dr[0],u&=2147483647,i=lr(o),wr(u|=i&=2147483648,dr[1])):n>1023?r<0?s:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,or(hr,r),t=hr[0],t&=2148532223,e*wr(t|=n+A<<20,hr[1])))}var _r=1.4426950408889634,jr=1/(1<<28);function Ur(r){var n;return w(r)||r===v?r:r===s?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<jr?1+r:function(r,n,t){var e,o,u,i;return gr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=m(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}var Er=!0===Q?1:0,Nr=new L(1),Or=new H(Nr.buffer);var Sr=.6931471803691238,Ir=1.9082149292705877e-10,Tr=1048575;function Fr(r){var n,t,e,o,u,i,a,f,c,l,y,p;return 0===r?s:w(r)||r<0?NaN:(u=0,(t=lr(r))<1048576&&(u-=54,t=lr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-A|0,u+=(f=(t&=Tr)+614244&1048576|0)>>20|0,a=(r=function(r,n){return Nr[0]=r,Or[Er]=n>>>0,Nr[0]}(r,t|1072693248^f))-1,(Tr&2+t)<3?0===a?0===u?0:u*Sr+u*Ir:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*Sr-(i-u*Ir-a)):(f=t-398458|0,c=440401-t|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(f|=c)>0?(n=.5*a*a,0===u?a-(n-l*(n+i)):u*Sr-(n-(l*(n+i)+u*Ir)-a)):0===u?a-l*(a-i):u*Sr-(l*(a-i)-u*Ir-a))))}var Hr=.6931471805599453,Gr=/./;function Pr(r){return"boolean"==typeof r}var Vr=Boolean.prototype.toString;var Br=_();function Lr(r){return"object"==typeof r&&(r instanceof Boolean||(Br?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function xr(r){return Pr(r)||Lr(r)}function Mr(){return new Function("return this;")()}l(xr,"isPrimitive",Pr),l(xr,"isObject",Lr);var Wr="object"==typeof self?self:null,kr="object"==typeof window?window:null,Cr="object"==typeof global?global:null;var Yr=function(r){if(arguments.length){if(!Pr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Mr()}if(Wr)return Wr;if(kr)return kr;if(Cr)return Cr;throw new Error("unexpected error. Unable to resolve global object.")}(),Rr=Yr.document&&Yr.document.childNodes,Xr=Int8Array;function qr(){return/^\s*function\s*([^(]*)/i}var zr=/^\s*function\s*([^(]*)/i;l(qr,"REGEXP",zr);var Dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};function Jr(r){return null!==r&&"object"==typeof r}function Kr(r){var n,t,e,o;if(("Object"===(t=O(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=zr.exec(e.toString()))return n[1]}return Jr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(Jr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Dr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Jr));var Qr,Zr="function"==typeof Gr||"object"==typeof Xr||"function"==typeof Rr?function(r){return Kr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?Kr(r).toLowerCase():n};function $r(r){return"function"===Zr(r)}function rn(r){return r}Qr=function(r,n){var t,e;if(!$r(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=rn;else if(!$r(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return l(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),E(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Qr(r-n,n-1)+Qr(r,n-1)))}));var nn=Qr;function tn(r,n){return!w(r)&&p(n)&&b(n)?r<0||r>n*(n+1)/2?0:Ur(Fr(nn(r,n))-n*Hr):NaN}return l(tn,"factory",(function(r){var n,t;return p(r)&&b(r)?(n=r*(r+1)/2,function(t){if(w(t))return NaN;if(t<0||t>n)return 0;return Ur(Fr(nn(t,r))-r*Hr)}):(t=NaN,function(){return t})})),tn}));
//# sourceMappingURL=index.js.map
