"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=a(function(G,v){
var m=require('@stdlib/utils-memoize/dist'),u;function p(r,e){var i;return e===0?r===0?1:0:(i=e*(e+1)/2,r<0||r>i?0:(r>i/2&&(r=i-r),u(r-e,e-1)+u(r,e-1)))}u=m(p);v.exports=u
});var f=a(function(H,n){
var N=require('@stdlib/math-base-assert-is-positive-integer/dist'),g=require('@stdlib/math-base-assert-is-integer/dist'),l=require('@stdlib/math-base-assert-is-finite/dist'),d=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/math-base-special-ln/dist'),h=require('@stdlib/constants-float64-ln-two/dist'),w=s();function z(r,e){var i;return d(r)||!N(e)||!l(e)?NaN:!g(r)||(i=e*(e+1)/2,r<0||r>i)?0:y(I(w(r,e))-e*h)}n.exports=z
});var o=a(function(J,q){
var L=require('@stdlib/math-base-assert-is-positive-integer/dist'),P=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/math-base-assert-is-integer/dist'),O=require('@stdlib/math-base-assert-is-finite/dist'),R=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-exp/dist'),j=require('@stdlib/math-base-special-ln/dist'),k=require('@stdlib/constants-float64-ln-two/dist'),A=s();function B(r){var e;if(!L(r)||!O(r))return P(NaN);return e=r*(r+1)/2,i;function i(t){return R(t)?NaN:!F(t)||t<0||t>e?0:b(j(A(t,r))-r*k)}}q.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),D=o();C(c,"factory",D);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
