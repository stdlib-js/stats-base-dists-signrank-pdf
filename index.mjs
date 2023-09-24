// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";var a;var l=a=d((function(t,s){var e;return 0===s?0===t?1:0:(e=s*(s+1)/2,t<0||t>e?0:(t>e/2&&(t=e-t),a(t-s,s-1)+a(t,s-1)))}));function j(t,d){return!i(t)&&s(d)&&e(d)?t<0||t>d*(d+1)/2?0:n(r(l(t,d))-d*m):NaN}function p(t){var d;return s(t)&&e(t)?(d=t*(t+1)/2,function(s){if(i(s))return NaN;if(s<0||s>d)return 0;return n(r(l(s,t))-t*m)}):o(NaN)}t(j,"factory",p);export{j as default,p as factory};
//# sourceMappingURL=index.mjs.map