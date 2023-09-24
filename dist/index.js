"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=a(function(D,v){
var m=require('@stdlib/utils-memoize/dist'),u;function p(r,e){var i;return e===0?r===0?1:0:(i=e*(e+1)/2,r<0||r>i?0:(r>i/2&&(r=i-r),u(r-e,e-1)+u(r,e-1)))}u=m(p);v.exports=u
});var f=a(function(E,n){
var N=require('@stdlib/math-base-assert-is-positive-integer/dist'),l=require('@stdlib/math-base-assert-is-finite/dist'),g=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-exp/dist'),y=require('@stdlib/math-base-special-ln/dist'),h=require('@stdlib/constants-float64-ln-two/dist'),w=s();function z(r,e){var i;return g(r)||!N(e)||!l(e)?NaN:(i=e*(e+1)/2,r<0||r>i?0:d(y(w(r,e))-e*h))}n.exports=z
});var o=a(function(G,q){
var I=require('@stdlib/math-base-assert-is-positive-integer/dist'),L=require('@stdlib/utils-constant-function/dist'),P=require('@stdlib/math-base-assert-is-finite/dist'),F=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-exp/dist'),R=require('@stdlib/math-base-special-ln/dist'),b=require('@stdlib/constants-float64-ln-two/dist'),j=s();function k(r){var e;if(!I(r)||!P(r))return L(NaN);return e=r*(r+1)/2,i;function i(t){return F(t)?NaN:t<0||t>e?0:O(R(j(t,r))-r*b)}}q.exports=k
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),B=o();A(c,"factory",B);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
