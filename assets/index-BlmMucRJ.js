(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))D(A);new MutationObserver(A=>{for(const T of A)if(T.type==="childList")for(const te of T.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&D(te)}).observe(document,{childList:!0,subtree:!0});function c(A){const T={};return A.integrity&&(T.integrity=A.integrity),A.referrerPolicy&&(T.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?T.credentials="include":A.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function D(A){if(A.ep)return;A.ep=!0;const T=c(A);fetch(A.href,T)}})();var Ei={exports:{}},vr={},Ci={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Pc(){if(Cu)return B;Cu=1;var k=Symbol.for("react.element"),x=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),te=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Y=Symbol.iterator;function $(d){return d===null||typeof d!="object"?null:(d=Y&&d[Y]||d["@@iterator"],typeof d=="function"?d:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,U={};function V(d,p,F){this.props=d,this.context=p,this.refs=U,this.updater=F||b}V.prototype.isReactComponent={},V.prototype.setState=function(d,p){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,p,"setState")},V.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function ye(){}ye.prototype=V.prototype;function pe(d,p,F){this.props=d,this.context=p,this.refs=U,this.updater=F||b}var _e=pe.prototype=new ye;_e.constructor=pe,ee(_e,V.prototype),_e.isPureReactComponent=!0;var Te=Array.isArray,nt=Object.prototype.hasOwnProperty,je={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function Ge(d,p,F){var H,K={},G=null,re=null;if(p!=null)for(H in p.ref!==void 0&&(re=p.ref),p.key!==void 0&&(G=""+p.key),p)nt.call(p,H)&&!Me.hasOwnProperty(H)&&(K[H]=p[H]);var J=arguments.length-2;if(J===1)K.children=F;else if(1<J){for(var ae=Array(J),$e=0;$e<J;$e++)ae[$e]=arguments[$e+2];K.children=ae}if(d&&d.defaultProps)for(H in J=d.defaultProps,J)K[H]===void 0&&(K[H]=J[H]);return{$$typeof:k,type:d,key:G,ref:re,props:K,_owner:je.current}}function Tt(d,p){return{$$typeof:k,type:d.type,key:p,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===k}function Qt(d){var p={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(F){return p[F]})}var ct=/\/+/g;function Ve(d,p){return typeof d=="object"&&d!==null&&d.key!=null?Qt(""+d.key):p.toString(36)}function rt(d,p,F,H,K){var G=typeof d;(G==="undefined"||G==="boolean")&&(d=null);var re=!1;if(d===null)re=!0;else switch(G){case"string":case"number":re=!0;break;case"object":switch(d.$$typeof){case k:case x:re=!0}}if(re)return re=d,K=K(re),d=H===""?"."+Ve(re,0):H,Te(K)?(F="",d!=null&&(F=d.replace(ct,"$&/")+"/"),rt(K,p,F,"",function($e){return $e})):K!=null&&(vt(K)&&(K=Tt(K,F+(!K.key||re&&re.key===K.key?"":(""+K.key).replace(ct,"$&/")+"/")+d)),p.push(K)),1;if(re=0,H=H===""?".":H+":",Te(d))for(var J=0;J<d.length;J++){G=d[J];var ae=H+Ve(G,J);re+=rt(G,p,F,ae,K)}else if(ae=$(d),typeof ae=="function")for(d=ae.call(d),J=0;!(G=d.next()).done;)G=G.value,ae=H+Ve(G,J++),re+=rt(G,p,F,ae,K);else if(G==="object")throw p=String(d),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.");return re}function ht(d,p,F){if(d==null)return d;var H=[],K=0;return rt(d,H,"","",function(G){return p.call(F,G,K++)}),H}function Oe(d){if(d._status===-1){var p=d._result;p=p(),p.then(function(F){(d._status===0||d._status===-1)&&(d._status=1,d._result=F)},function(F){(d._status===0||d._status===-1)&&(d._status=2,d._result=F)}),d._status===-1&&(d._status=0,d._result=p)}if(d._status===1)return d._result.default;throw d._result}var ce={current:null},I={transition:null},M={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:I,ReactCurrentOwner:je};function _(){throw Error("act(...) is not supported in production builds of React.")}return B.Children={map:ht,forEach:function(d,p,F){ht(d,function(){p.apply(this,arguments)},F)},count:function(d){var p=0;return ht(d,function(){p++}),p},toArray:function(d){return ht(d,function(p){return p})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},B.Component=V,B.Fragment=c,B.Profiler=A,B.PureComponent=pe,B.StrictMode=D,B.Suspense=W,B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,B.act=_,B.cloneElement=function(d,p,F){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var H=ee({},d.props),K=d.key,G=d.ref,re=d._owner;if(p!=null){if(p.ref!==void 0&&(G=p.ref,re=je.current),p.key!==void 0&&(K=""+p.key),d.type&&d.type.defaultProps)var J=d.type.defaultProps;for(ae in p)nt.call(p,ae)&&!Me.hasOwnProperty(ae)&&(H[ae]=p[ae]===void 0&&J!==void 0?J[ae]:p[ae])}var ae=arguments.length-2;if(ae===1)H.children=F;else if(1<ae){J=Array(ae);for(var $e=0;$e<ae;$e++)J[$e]=arguments[$e+2];H.children=J}return{$$typeof:k,type:d.type,key:K,ref:G,props:H,_owner:re}},B.createContext=function(d){return d={$$typeof:te,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:T,_context:d},d.Consumer=d},B.createElement=Ge,B.createFactory=function(d){var p=Ge.bind(null,d);return p.type=d,p},B.createRef=function(){return{current:null}},B.forwardRef=function(d){return{$$typeof:ne,render:d}},B.isValidElement=vt,B.lazy=function(d){return{$$typeof:X,_payload:{_status:-1,_result:d},_init:Oe}},B.memo=function(d,p){return{$$typeof:R,type:d,compare:p===void 0?null:p}},B.startTransition=function(d){var p=I.transition;I.transition={};try{d()}finally{I.transition=p}},B.unstable_act=_,B.useCallback=function(d,p){return ce.current.useCallback(d,p)},B.useContext=function(d){return ce.current.useContext(d)},B.useDebugValue=function(){},B.useDeferredValue=function(d){return ce.current.useDeferredValue(d)},B.useEffect=function(d,p){return ce.current.useEffect(d,p)},B.useId=function(){return ce.current.useId()},B.useImperativeHandle=function(d,p,F){return ce.current.useImperativeHandle(d,p,F)},B.useInsertionEffect=function(d,p){return ce.current.useInsertionEffect(d,p)},B.useLayoutEffect=function(d,p){return ce.current.useLayoutEffect(d,p)},B.useMemo=function(d,p){return ce.current.useMemo(d,p)},B.useReducer=function(d,p,F){return ce.current.useReducer(d,p,F)},B.useRef=function(d){return ce.current.useRef(d)},B.useState=function(d){return ce.current.useState(d)},B.useSyncExternalStore=function(d,p,F){return ce.current.useSyncExternalStore(d,p,F)},B.useTransition=function(){return ce.current.useTransition()},B.version="18.3.1",B}var _u;function Li(){return _u||(_u=1,Ci.exports=Pc()),Ci.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function jc(){if(Tu)return vr;Tu=1;var k=Li(),x=Symbol.for("react.element"),c=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,A=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function te(ne,W,R){var X,Y={},$=null,b=null;R!==void 0&&($=""+R),W.key!==void 0&&($=""+W.key),W.ref!==void 0&&(b=W.ref);for(X in W)D.call(W,X)&&!T.hasOwnProperty(X)&&(Y[X]=W[X]);if(ne&&ne.defaultProps)for(X in W=ne.defaultProps,W)Y[X]===void 0&&(Y[X]=W[X]);return{$$typeof:x,type:ne,key:$,ref:b,props:Y,_owner:A.current}}return vr.Fragment=c,vr.jsx=te,vr.jsxs=te,vr}var Nu;function Rc(){return Nu||(Nu=1,Ei.exports=jc()),Ei.exports}var S=Rc(),Ce=Li(),Lo={},_i={exports:{}},He={},Ti={exports:{}},Ni={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Ac(){return zu||(zu=1,(function(k){function x(I,M){var _=I.length;I.push(M);e:for(;0<_;){var d=_-1>>>1,p=I[d];if(0<A(p,M))I[d]=M,I[_]=p,_=d;else break e}}function c(I){return I.length===0?null:I[0]}function D(I){if(I.length===0)return null;var M=I[0],_=I.pop();if(_!==M){I[0]=_;e:for(var d=0,p=I.length,F=p>>>1;d<F;){var H=2*(d+1)-1,K=I[H],G=H+1,re=I[G];if(0>A(K,_))G<p&&0>A(re,K)?(I[d]=re,I[G]=_,d=G):(I[d]=K,I[H]=_,d=H);else if(G<p&&0>A(re,_))I[d]=re,I[G]=_,d=G;else break e}}return M}function A(I,M){var _=I.sortIndex-M.sortIndex;return _!==0?_:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var T=performance;k.unstable_now=function(){return T.now()}}else{var te=Date,ne=te.now();k.unstable_now=function(){return te.now()-ne}}var W=[],R=[],X=1,Y=null,$=3,b=!1,ee=!1,U=!1,V=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(I){for(var M=c(R);M!==null;){if(M.callback===null)D(R);else if(M.startTime<=I)D(R),M.sortIndex=M.expirationTime,x(W,M);else break;M=c(R)}}function Te(I){if(U=!1,_e(I),!ee)if(c(W)!==null)ee=!0,Oe(nt);else{var M=c(R);M!==null&&ce(Te,M.startTime-I)}}function nt(I,M){ee=!1,U&&(U=!1,ye(Ge),Ge=-1),b=!0;var _=$;try{for(_e(M),Y=c(W);Y!==null&&(!(Y.expirationTime>M)||I&&!Qt());){var d=Y.callback;if(typeof d=="function"){Y.callback=null,$=Y.priorityLevel;var p=d(Y.expirationTime<=M);M=k.unstable_now(),typeof p=="function"?Y.callback=p:Y===c(W)&&D(W),_e(M)}else D(W);Y=c(W)}if(Y!==null)var F=!0;else{var H=c(R);H!==null&&ce(Te,H.startTime-M),F=!1}return F}finally{Y=null,$=_,b=!1}}var je=!1,Me=null,Ge=-1,Tt=5,vt=-1;function Qt(){return!(k.unstable_now()-vt<Tt)}function ct(){if(Me!==null){var I=k.unstable_now();vt=I;var M=!0;try{M=Me(!0,I)}finally{M?Ve():(je=!1,Me=null)}}else je=!1}var Ve;if(typeof pe=="function")Ve=function(){pe(ct)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ht=rt.port2;rt.port1.onmessage=ct,Ve=function(){ht.postMessage(null)}}else Ve=function(){V(ct,0)};function Oe(I){Me=I,je||(je=!0,Ve())}function ce(I,M){Ge=V(function(){I(k.unstable_now())},M)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(I){I.callback=null},k.unstable_continueExecution=function(){ee||b||(ee=!0,Oe(nt))},k.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<I?Math.floor(1e3/I):5},k.unstable_getCurrentPriorityLevel=function(){return $},k.unstable_getFirstCallbackNode=function(){return c(W)},k.unstable_next=function(I){switch($){case 1:case 2:case 3:var M=3;break;default:M=$}var _=$;$=M;try{return I()}finally{$=_}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var _=$;$=I;try{return M()}finally{$=_}},k.unstable_scheduleCallback=function(I,M,_){var d=k.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?d+_:d):_=d,I){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=_+p,I={id:X++,callback:M,priorityLevel:I,startTime:_,expirationTime:p,sortIndex:-1},_>d?(I.sortIndex=_,x(R,I),c(W)===null&&I===c(R)&&(U?(ye(Ge),Ge=-1):U=!0,ce(Te,_-d))):(I.sortIndex=p,x(W,I),ee||b||(ee=!0,Oe(nt))),I},k.unstable_shouldYield=Qt,k.unstable_wrapCallback=function(I){var M=$;return function(){var _=$;$=M;try{return I.apply(this,arguments)}finally{$=_}}}})(Ni)),Ni}var Lu;function Mc(){return Lu||(Lu=1,Ti.exports=Ac()),Ti.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Oc(){if(Pu)return He;Pu=1;var k=Li(),x=Mc();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D=new Set,A={};function T(e,t){te(e,t),te(e+"Capture",t)}function te(e,t){for(A[e]=t,e=0;e<t.length;e++)D.add(t[e])}var ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X={},Y={};function $(e){return W.call(Y,e)?!0:W.call(X,e)?!1:R.test(e)?Y[e]=!0:(X[e]=!0,!1)}function b(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ee(e,t,n,r){if(t===null||typeof t>"u"||b(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function U(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new U(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ye,pe);V[t]=new U(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ye,pe);V[t]=new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ye,pe);V[t]=new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function _e(e,t,n,r){var o=V.hasOwnProperty(t)?V[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ee(t,n,o,r)&&(n=null),r||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Te=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),je=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),I=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,d;function p(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var F=!1;function H(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?p(e):""}function K(e){switch(e.tag){case 5:return p(e.type);case 16:return p("Lazy");case 13:return p("Suspense");case 19:return p("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case je:return"Portal";case Tt:return"Profiler";case Ge:return"StrictMode";case Ve:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ht:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function J(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=ae(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=$e(e))}function Pi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Po(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ji(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=J(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ri(e,t){t=t.checked,t!=null&&_e(e,"checked",t,!1)}function jo(e,t){Ri(e,t);var n=J(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ro(e,t.type,J(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ai(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ro(e,t,n){(t!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+J(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(Rn(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:J(n)}}function Oi(e,t){var n=J(t.value),r=J(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Di(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Fi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mu=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Mu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Bi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Ui(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Bi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ou=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(e,t){if(t){if(Ou[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Do(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,un=null,dn=null;function Hi(e){if(e=rr(e)){if(typeof Bo!="function")throw Error(c(280));var t=e.stateNode;t&&(t=$r(t),Bo(e.stateNode,e.type,t))}}function Vi(e){un?dn?dn.push(e):dn=[e]:un=e}function $i(){if(un){var e=un,t=dn;if(dn=un=null,Hi(e),t)for(e=0;e<t.length;e++)Hi(t[e])}}function Yi(e,t){return e(t)}function bi(){}var Uo=!1;function Qi(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return Yi(e,t,n)}finally{Uo=!1,(un!==null||dn!==null)&&(bi(),$i())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=$r(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Ho=!1;if(ne)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Ho=!1}function Du(e,t,n,r,o,l,i,a,s){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(g){this.onError(g)}}var Wn=!1,Sr=null,xr=!1,Vo=null,Wu={onError:function(e){Wn=!0,Sr=e}};function Fu(e,t,n,r,o,l,i,a,s){Wn=!1,Sr=null,Du.apply(Wu,arguments)}function Bu(e,t,n,r,o,l,i,a,s){if(Fu.apply(this,arguments),Wn){if(Wn){var m=Sr;Wn=!1,Sr=null}else throw Error(c(198));xr||(xr=!0,Vo=m)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ki(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gi(e){if(Kt(e)!==e)throw Error(c(188))}function Uu(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Gi(o),e;if(l===r)return Gi(o),t;l=l.sibling}throw Error(c(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function Zi(e){return e=Uu(e),e!==null?Xi(e):null}function Xi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xi(e);if(t!==null)return t;e=e.sibling}return null}var Ji=x.unstable_scheduleCallback,qi=x.unstable_cancelCallback,Hu=x.unstable_shouldYield,Vu=x.unstable_requestPaint,fe=x.unstable_now,$u=x.unstable_getCurrentPriorityLevel,$o=x.unstable_ImmediatePriority,ea=x.unstable_UserBlockingPriority,Er=x.unstable_NormalPriority,Yu=x.unstable_LowPriority,ta=x.unstable_IdlePriority,Cr=null,ft=null;function bu(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Gu,Qu=Math.log,Ku=Math.LN2;function Gu(e){return e>>>=0,e===0?32:31-(Qu(e)/Ku|0)|0}var _r=64,Tr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Fn(a):(l&=i,l!==0&&(r=Fn(l)))}else i=n&~o,i!==0?r=Fn(i):l!==0&&(r=Fn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function Zu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ot(l),a=1<<i,s=o[i];s===-1?((a&n)===0||(a&r)!==0)&&(o[i]=Zu(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Ju(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var oa,Ko,la,ia,aa,Go=!1,zr=[],Nt=null,zt=null,Lt=null,Un=new Map,Hn=new Map,Pt=[],qu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Vn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=rr(t),t!==null&&Ko(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ed(e,t,n,r,o){switch(t){case"focusin":return Nt=Vn(Nt,e,t,n,r,o),!0;case"dragenter":return zt=Vn(zt,e,t,n,r,o),!0;case"mouseover":return Lt=Vn(Lt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Un.set(l,Vn(Un.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Hn.set(l,Vn(Hn.get(l)||null,e,t,n,r,o)),!0}return!1}function ua(e){var t=Gt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ki(n),t!==null){e.blockedOn=t,aa(e.priority,function(){la(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wo=r,n.target.dispatchEvent(r),Wo=null}else return t=rr(n),t!==null&&Ko(t),e.blockedOn=n,!1;t.shift()}return!0}function da(e,t,n){Lr(e)&&n.delete(t)}function td(){Go=!1,Nt!==null&&Lr(Nt)&&(Nt=null),zt!==null&&Lr(zt)&&(zt=null),Lt!==null&&Lr(Lt)&&(Lt=null),Un.forEach(da),Hn.forEach(da)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Go||(Go=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,td)))}function Yn(e){function t(o){return $n(o,e)}if(0<zr.length){$n(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&$n(Nt,e),zt!==null&&$n(zt,e),Lt!==null&&$n(Lt,e),Un.forEach(t),Hn.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)ua(n),n.blockedOn===null&&Pt.shift()}var cn=Te.ReactCurrentBatchConfig,Pr=!0;function nd(e,t,n,r){var o=q,l=cn.transition;cn.transition=null;try{q=1,Zo(e,t,n,r)}finally{q=o,cn.transition=l}}function rd(e,t,n,r){var o=q,l=cn.transition;cn.transition=null;try{q=4,Zo(e,t,n,r)}finally{q=o,cn.transition=l}}function Zo(e,t,n,r){if(Pr){var o=Xo(e,t,n,r);if(o===null)ml(e,t,r,jr,n),sa(e,r);else if(ed(o,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<qu.indexOf(e)){for(;o!==null;){var l=rr(o);if(l!==null&&oa(l),l=Xo(e,t,n,r),l===null&&ml(e,t,r,jr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var jr=null;function Xo(e,t,n,r){if(jr=null,e=Fo(r),e=Gt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ki(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jr=e,null}function ca(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case $o:return 1;case ea:return 4;case Er:case Yu:return 16;case ta:return 536870912;default:return 16}default:return 16}}var jt=null,Jo=null,Rr=null;function ha(){if(Rr)return Rr;var e,t=Jo,n=t.length,r,o="value"in jt?jt.value:jt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Rr=o.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function fa(){return!1}function Ye(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Mr:fa,this.isPropagationStopped=fa,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Ye(hn),bn=_({},hn,{view:0,detail:0}),od=Ye(bn),el,tl,Qn,Or=_({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(el=e.screenX-Qn.screenX,tl=e.screenY-Qn.screenY):tl=el=0,Qn=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),ma=Ye(Or),ld=_({},Or,{dataTransfer:0}),id=Ye(ld),ad=_({},bn,{relatedTarget:0}),nl=Ye(ad),sd=_({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=Ye(sd),dd=_({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=Ye(dd),hd=_({},hn,{data:0}),ya=Ye(hd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function rl(){return pd}var gd=_({},bn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=Ye(gd),wd=_({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pa=Ye(wd),kd=_({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Id=Ye(kd),Sd=_({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=Ye(Sd),Ed=_({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=Ye(Ed),_d=[9,13,27,32],ol=ne&&"CompositionEvent"in window,Kn=null;ne&&"documentMode"in document&&(Kn=document.documentMode);var Td=ne&&"TextEvent"in window&&!Kn,ga=ne&&(!ol||Kn&&8<Kn&&11>=Kn),va=" ",wa=!1;function ka(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Nd(e,t){switch(e){case"compositionend":return Ia(t);case"keypress":return t.which!==32?null:(wa=!0,va);case"textInput":return e=t.data,e===va&&wa?null:e;default:return null}}function zd(e,t){if(fn)return e==="compositionend"||!ol&&ka(e,t)?(e=ha(),Rr=Jo=jt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ga&&t.locale!=="ko"?null:t.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ld[e.type]:t==="textarea"}function xa(e,t,n,r){Vi(r),t=Ur(t,"onChange"),0<t.length&&(n=new qo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Zn=null;function Pd(e){Ua(e,0)}function Dr(e){var t=vn(e);if(Pi(t))return e}function jd(e,t){if(e==="change")return t}var Ea=!1;if(ne){var ll;if(ne){var il="oninput"in document;if(!il){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),il=typeof Ca.oninput=="function"}ll=il}else ll=!1;Ea=ll&&(!document.documentMode||9<document.documentMode)}function _a(){Gn&&(Gn.detachEvent("onpropertychange",Ta),Zn=Gn=null)}function Ta(e){if(e.propertyName==="value"&&Dr(Zn)){var t=[];xa(t,Zn,e,Fo(e)),Qi(Pd,t)}}function Rd(e,t,n){e==="focusin"?(_a(),Gn=t,Zn=n,Gn.attachEvent("onpropertychange",Ta)):e==="focusout"&&_a()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(Zn)}function Md(e,t){if(e==="click")return Dr(t)}function Od(e,t){if(e==="input"||e==="change")return Dr(t)}function Dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Dd;function Xn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!W.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function La(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?La(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pa(){for(var e=window,t=kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=Pa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&La(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=za(n,l);var i=za(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fd=ne&&"documentMode"in document&&11>=document.documentMode,mn=null,sl=null,Jn=null,ul=!1;function ja(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||mn==null||mn!==kr(r)||(r=mn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&Xn(Jn,r)||(Jn=r,r=Ur(sl,"onSelect"),0<r.length&&(t=new qo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},dl={},Ra={};ne&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Fr(e){if(dl[e])return dl[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ra)return dl[e]=t[n];return e}var Aa=Fr("animationend"),Ma=Fr("animationiteration"),Oa=Fr("animationstart"),Da=Fr("transitionend"),Wa=new Map,Fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Wa.set(e,t),T(t,[e])}for(var cl=0;cl<Fa.length;cl++){var hl=Fa[cl],Bd=hl.toLowerCase(),Ud=hl[0].toUpperCase()+hl.slice(1);Rt(Bd,"on"+Ud)}Rt(Aa,"onAnimationEnd"),Rt(Ma,"onAnimationIteration"),Rt(Oa,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Da,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function Ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bu(r,t,void 0,e),e.currentTarget=null}function Ua(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,m=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Ba(o,a,m),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,m=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Ba(o,a,m),l=s}}}if(xr)throw e=Vo,xr=!1,Vo=null,e}function le(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Ha(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Ha(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Br]){e[Br]=!0,D.forEach(function(n){n!=="selectionchange"&&(Hd.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,fl("selectionchange",!1,t))}}function Ha(e,t,n,r){switch(ca(t)){case 1:var o=nd;break;case 4:o=rd;break;default:o=Zo}n=o.bind(null,t,n,e),o=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Gt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Qi(function(){var m=l,g=Fo(n),v=[];e:{var y=Wa.get(e);if(y!==void 0){var E=qo,N=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":E=vd;break;case"focusin":N="focus",E=nl;break;case"focusout":N="blur",E=nl;break;case"beforeblur":case"afterblur":E=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Id;break;case Aa:case Ma:case Oa:E=ud;break;case Da:E=xd;break;case"scroll":E=od;break;case"wheel":E=Cd;break;case"copy":case"cut":case"paste":E=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=pa}var z=(t&4)!==0,me=!z&&e==="scroll",h=z?y!==null?y+"Capture":null:y;z=[];for(var u=m,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,h!==null&&(w=On(u,h),w!=null&&z.push(tr(u,w,f)))),me)break;u=u.return}0<z.length&&(y=new E(y,N,null,n,g),v.push({event:y,listeners:z}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",y&&n!==Wo&&(N=n.relatedTarget||n.fromElement)&&(Gt(N)||N[wt]))break e;if((E||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,E?(N=n.relatedTarget||n.toElement,E=m,N=N?Gt(N):null,N!==null&&(me=Kt(N),N!==me||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=m),E!==N)){if(z=ma,w="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(z=pa,w="onPointerLeave",h="onPointerEnter",u="pointer"),me=E==null?y:vn(E),f=N==null?y:vn(N),y=new z(w,u+"leave",E,n,g),y.target=me,y.relatedTarget=f,w=null,Gt(g)===m&&(z=new z(h,u+"enter",N,n,g),z.target=f,z.relatedTarget=me,w=z),me=w,E&&N)t:{for(z=E,h=N,u=0,f=z;f;f=pn(f))u++;for(f=0,w=h;w;w=pn(w))f++;for(;0<u-f;)z=pn(z),u--;for(;0<f-u;)h=pn(h),f--;for(;u--;){if(z===h||h!==null&&z===h.alternate)break t;z=pn(z),h=pn(h)}z=null}else z=null;E!==null&&Va(v,y,E,z,!1),N!==null&&me!==null&&Va(v,me,N,z,!0)}}e:{if(y=m?vn(m):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var L=jd;else if(Sa(y))if(Ea)L=Od;else{L=Ad;var P=Rd}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=Md);if(L&&(L=L(e,m))){xa(v,L,n,g);break e}P&&P(e,y,m),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&Ro(y,"number",y.value)}switch(P=m?vn(m):window,e){case"focusin":(Sa(P)||P.contentEditable==="true")&&(mn=P,sl=m,Jn=null);break;case"focusout":Jn=sl=mn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,ja(v,n,g);break;case"selectionchange":if(Fd)break;case"keydown":case"keyup":ja(v,n,g)}var j;if(ol)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fn?ka(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ga&&n.locale!=="ko"&&(fn||O!=="onCompositionStart"?O==="onCompositionEnd"&&fn&&(j=ha()):(jt=g,Jo="value"in jt?jt.value:jt.textContent,fn=!0)),P=Ur(m,O),0<P.length&&(O=new ya(O,e,null,n,g),v.push({event:O,listeners:P}),j?O.data=j:(j=Ia(n),j!==null&&(O.data=j)))),(j=Td?Nd(e,n):zd(e,n))&&(m=Ur(m,"onBeforeInput"),0<m.length&&(g=new ya("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:m}),g.data=j))}Ua(v,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=On(e,n),l!=null&&r.unshift(tr(e,l,o)),l=On(e,t),l!=null&&r.push(tr(e,l,o))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,m=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&m!==null&&(a=m,o?(s=On(n,l),s!=null&&i.unshift(tr(n,s,a))):o||(s=On(n,l),s!=null&&i.push(tr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Vd=/\r\n?/g,$d=/\u0000|\uFFFD/g;function $a(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace($d,"")}function Hr(e,t,n){if(t=$a(t),$a(e)!==t&&n)throw Error(c(425))}function Vr(){}var yl=null,pl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,bd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(Qd)}:vl;function Qd(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yn(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),mt="__reactFiber$"+gn,nr="__reactProps$"+gn,wt="__reactContainer$"+gn,kl="__reactEvents$"+gn,Kd="__reactListeners$"+gn,Gd="__reactHandles$"+gn;function Gt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ba(e);e!==null;){if(n=e[mt])return n;e=ba(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[mt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function $r(e){return e[nr]||null}var Il=[],wn=-1;function Mt(e){return{current:e}}function ie(e){0>wn||(e.current=Il[wn],Il[wn]=null,wn--)}function oe(e,t){wn++,Il[wn]=e.current,e.current=t}var Ot={},Ne=Mt(Ot),De=Mt(!1),Zt=Ot;function kn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function Yr(){ie(De),ie(Ne)}function Qa(e,t,n){if(Ne.current!==Ot)throw Error(c(168));oe(Ne,t),oe(De,n)}function Ka(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(c(108,re(e)||"Unknown",o));return _({},n,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=Ne.current,oe(Ne,e),oe(De,De.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=Ka(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,ie(De),ie(Ne),oe(Ne,e)):ie(De),oe(De,n)}var kt=null,Qr=!1,Sl=!1;function Za(e){kt===null?kt=[e]:kt.push(e)}function Zd(e){Qr=!0,Za(e)}function Dt(){if(!Sl&&kt!==null){Sl=!0;var e=0,t=q;try{var n=kt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Qr=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),Ji($o,Dt),o}finally{q=t,Sl=!1}}return null}var In=[],Sn=0,Kr=null,Gr=0,Ze=[],Xe=0,Xt=null,It=1,St="";function Jt(e,t){In[Sn++]=Gr,In[Sn++]=Kr,Kr=e,Gr=t}function Xa(e,t,n){Ze[Xe++]=It,Ze[Xe++]=St,Ze[Xe++]=Xt,Xt=e;var r=It;e=St;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var l=32-ot(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,It=1<<32-ot(t)+o|n<<o|r,St=l+e}else It=1<<l|n<<o|r,St=e}function xl(e){e.return!==null&&(Jt(e,1),Xa(e,1,0))}function El(e){for(;e===Kr;)Kr=In[--Sn],In[Sn]=null,Gr=In[--Sn],In[Sn]=null;for(;e===Xt;)Xt=Ze[--Xe],Ze[Xe]=null,St=Ze[--Xe],Ze[Xe]=null,It=Ze[--Xe],Ze[Xe]=null}var be=null,Qe=null,se=!1,it=null;function Ja(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Qe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:It,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Qe=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(se){var t=Qe;if(t){var n=t;if(!qa(e,t)){if(Cl(e))throw Error(c(418));t=At(n.nextSibling);var r=be;t&&qa(e,t)?Ja(r,n):(e.flags=e.flags&-4097|2,se=!1,be=e)}}else{if(Cl(e))throw Error(c(418));e.flags=e.flags&-4097|2,se=!1,be=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Zr(e){if(e!==be)return!1;if(!se)return es(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Cl(e))throw ts(),Error(c(418));for(;t;)Ja(e,t),t=At(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=be?At(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=Qe;e;)e=At(e.nextSibling)}function xn(){Qe=be=null,se=!1}function Tl(e){it===null?it=[e]:it.push(e)}var Xd=Te.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(h,u){if(e){var f=h.deletions;f===null?(h.deletions=[u],h.flags|=16):f.push(u)}}function n(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function r(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function o(h,u){return h=Yt(h,u),h.index=0,h.sibling=null,h}function l(h,u,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<u?(h.flags|=2,u):f):(h.flags|=2,u)):(h.flags|=1048576,u)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,u,f,w){return u===null||u.tag!==6?(u=vi(f,h.mode,w),u.return=h,u):(u=o(u,f),u.return=h,u)}function s(h,u,f,w){var L=f.type;return L===Me?g(h,u,f.props.children,w,f.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oe&&ns(L)===u.type)?(w=o(u,f.props),w.ref=or(h,u,f),w.return=h,w):(w=So(f.type,f.key,f.props,null,h.mode,w),w.ref=or(h,u,f),w.return=h,w)}function m(h,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=wi(f,h.mode,w),u.return=h,u):(u=o(u,f.children||[]),u.return=h,u)}function g(h,u,f,w,L){return u===null||u.tag!==7?(u=an(f,h.mode,w,L),u.return=h,u):(u=o(u,f),u.return=h,u)}function v(h,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=vi(""+u,h.mode,f),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nt:return f=So(u.type,u.key,u.props,null,h.mode,f),f.ref=or(h,null,u),f.return=h,f;case je:return u=wi(u,h.mode,f),u.return=h,u;case Oe:var w=u._init;return v(h,w(u._payload),f)}if(Rn(u)||M(u))return u=an(u,h.mode,f,null),u.return=h,u;Xr(h,u)}return null}function y(h,u,f,w){var L=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return L!==null?null:a(h,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nt:return f.key===L?s(h,u,f,w):null;case je:return f.key===L?m(h,u,f,w):null;case Oe:return L=f._init,y(h,u,L(f._payload),w)}if(Rn(f)||M(f))return L!==null?null:g(h,u,f,w,null);Xr(h,f)}return null}function E(h,u,f,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(f)||null,a(u,h,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nt:return h=h.get(w.key===null?f:w.key)||null,s(u,h,w,L);case je:return h=h.get(w.key===null?f:w.key)||null,m(u,h,w,L);case Oe:var P=w._init;return E(h,u,f,P(w._payload),L)}if(Rn(w)||M(w))return h=h.get(f)||null,g(u,h,w,L,null);Xr(u,w)}return null}function N(h,u,f,w){for(var L=null,P=null,j=u,O=u=0,Se=null;j!==null&&O<f.length;O++){j.index>O?(Se=j,j=null):Se=j.sibling;var Z=y(h,j,f[O],w);if(Z===null){j===null&&(j=Se);break}e&&j&&Z.alternate===null&&t(h,j),u=l(Z,u,O),P===null?L=Z:P.sibling=Z,P=Z,j=Se}if(O===f.length)return n(h,j),se&&Jt(h,O),L;if(j===null){for(;O<f.length;O++)j=v(h,f[O],w),j!==null&&(u=l(j,u,O),P===null?L=j:P.sibling=j,P=j);return se&&Jt(h,O),L}for(j=r(h,j);O<f.length;O++)Se=E(j,h,O,f[O],w),Se!==null&&(e&&Se.alternate!==null&&j.delete(Se.key===null?O:Se.key),u=l(Se,u,O),P===null?L=Se:P.sibling=Se,P=Se);return e&&j.forEach(function(bt){return t(h,bt)}),se&&Jt(h,O),L}function z(h,u,f,w){var L=M(f);if(typeof L!="function")throw Error(c(150));if(f=L.call(f),f==null)throw Error(c(151));for(var P=L=null,j=u,O=u=0,Se=null,Z=f.next();j!==null&&!Z.done;O++,Z=f.next()){j.index>O?(Se=j,j=null):Se=j.sibling;var bt=y(h,j,Z.value,w);if(bt===null){j===null&&(j=Se);break}e&&j&&bt.alternate===null&&t(h,j),u=l(bt,u,O),P===null?L=bt:P.sibling=bt,P=bt,j=Se}if(Z.done)return n(h,j),se&&Jt(h,O),L;if(j===null){for(;!Z.done;O++,Z=f.next())Z=v(h,Z.value,w),Z!==null&&(u=l(Z,u,O),P===null?L=Z:P.sibling=Z,P=Z);return se&&Jt(h,O),L}for(j=r(h,j);!Z.done;O++,Z=f.next())Z=E(j,h,O,Z.value,w),Z!==null&&(e&&Z.alternate!==null&&j.delete(Z.key===null?O:Z.key),u=l(Z,u,O),P===null?L=Z:P.sibling=Z,P=Z);return e&&j.forEach(function(Lc){return t(h,Lc)}),se&&Jt(h,O),L}function me(h,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Me&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nt:e:{for(var L=f.key,P=u;P!==null;){if(P.key===L){if(L=f.type,L===Me){if(P.tag===7){n(h,P.sibling),u=o(P,f.props.children),u.return=h,h=u;break e}}else if(P.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oe&&ns(L)===P.type){n(h,P.sibling),u=o(P,f.props),u.ref=or(h,P,f),u.return=h,h=u;break e}n(h,P);break}else t(h,P);P=P.sibling}f.type===Me?(u=an(f.props.children,h.mode,w,f.key),u.return=h,h=u):(w=So(f.type,f.key,f.props,null,h.mode,w),w.ref=or(h,u,f),w.return=h,h=w)}return i(h);case je:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(h,u.sibling),u=o(u,f.children||[]),u.return=h,h=u;break e}else{n(h,u);break}else t(h,u);u=u.sibling}u=wi(f,h.mode,w),u.return=h,h=u}return i(h);case Oe:return P=f._init,me(h,u,P(f._payload),w)}if(Rn(f))return N(h,u,f,w);if(M(f))return z(h,u,f,w);Xr(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(h,u.sibling),u=o(u,f),u.return=h,h=u):(n(h,u),u=vi(f,h.mode,w),u.return=h,h=u),i(h)):n(h,u)}return me}var En=rs(!0),os=rs(!1),Jr=Mt(null),qr=null,Cn=null,Nl=null;function zl(){Nl=Cn=qr=null}function Ll(e){var t=Jr.current;ie(Jr),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){qr=e,Nl=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(qr===null)throw Error(c(308));Cn=e,qr.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var qt=null;function jl(e){qt===null?qt=[e]:qt.push(e)}function ls(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,jl(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,jl(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qo(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var o=e.updateQueue;Wt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,m=s.next;s.next=null,i===null?l=m:i.next=m,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=m:a.next=m,g.lastBaseUpdate=s))}if(l!==null){var v=o.baseState;i=0,g=m=s=null,a=l;do{var y=a.lane,E=a.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=e,z=a;switch(y=t,E=n,z.tag){case 1:if(N=z.payload,typeof N=="function"){v=N.call(E,v,y);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=z.payload,y=typeof N=="function"?N.call(E,v,y):N,y==null)break e;v=_({},v,y);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[a]:y.push(a))}else E={eventTime:E,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(m=g=E,s=v):g=g.next=E,i|=y;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;y=a,a=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(g===null&&(s=v),o.baseState=s,o.firstBaseUpdate=m,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=v}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(c(191,o));o.call(r)}}}var lr={},yt=Mt(lr),ir=Mt(lr),ar=Mt(lr);function en(e){if(e===lr)throw Error(c(174));return e}function Al(e,t){switch(oe(ar,t),oe(ir,e),oe(yt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mo(t,e)}ie(yt),oe(yt,t)}function Tn(){ie(yt),ie(ir),ie(ar)}function us(e){en(ar.current);var t=en(yt.current),n=Mo(t,e.type);t!==n&&(oe(ir,e),oe(yt,n))}function Ml(e){ir.current===e&&(ie(yt),ie(ir))}var ue=Mt(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function Dl(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var ro=Te.ReactCurrentDispatcher,Wl=Te.ReactCurrentBatchConfig,tn=0,de=null,ve=null,ke=null,oo=!1,sr=!1,ur=0,Jd=0;function ze(){throw Error(c(321))}function Fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Bl(e,t,n,r,o,l){if(tn=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?nc:rc,e=n(r,o),sr){l=0;do{if(sr=!1,ur=0,25<=l)throw Error(c(301));l+=1,ke=ve=null,t.updateQueue=null,ro.current=oc,e=n(r,o)}while(sr)}if(ro.current=ao,t=ve!==null&&ve.next!==null,tn=0,ke=ve=de=null,oo=!1,t)throw Error(c(300));return e}function Ul(){var e=ur!==0;return ur=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?de.memoizedState=ke=e:ke=ke.next=e,ke}function qe(){if(ve===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?de.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(c(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?de.memoizedState=ke=e:ke=ke.next=e}return ke}function dr(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,m=l;do{var g=m.lane;if((tn&g)===g)s!==null&&(s=s.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var v={lane:g,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};s===null?(a=s=v,i=r):s=s.next=v,de.lanes|=g,nn|=g}m=m.next}while(m!==null&&m!==l);s===null?i=r:s.next=a,lt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,de.lanes|=l,nn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);lt(l,t.memoizedState)||(Fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ds(){}function cs(e,t){var n=de,r=qe(),o=t(),l=!lt(r.memoizedState,o);if(l&&(r.memoizedState=o,Fe=!0),r=r.queue,$l(ms.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,cr(9,fs.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(c(349));(tn&30)!==0||hs(n,t,o)}return o}function hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fs(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&ps(e)}function ms(e,t,n){return n(function(){ys(t)&&ps(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function ps(e){var t=xt(e,1);t!==null&&dt(t,e,1,-1)}function gs(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=tc.bind(null,de,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return qe().memoizedState}function lo(e,t,n,r){var o=pt();de.flags|=e,o.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function io(e,t,n,r){var o=qe();r=r===void 0?null:r;var l=void 0;if(ve!==null){var i=ve.memoizedState;if(l=i.destroy,r!==null&&Fl(r,i.deps)){o.memoizedState=cr(t,n,l,r);return}}de.flags|=e,o.memoizedState=cr(1|t,n,l,r)}function ws(e,t){return lo(8390656,8,e,t)}function $l(e,t){return io(2048,8,e,t)}function ks(e,t){return io(4,2,e,t)}function Is(e,t){return io(4,4,e,t)}function Ss(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){return n=n!=null?n.concat([e]):null,io(4,4,Ss.bind(null,t,e),n)}function Yl(){}function Es(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _s(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n):(lt(n,t)||(n=na(),de.lanes|=n,nn|=n,e.baseState=!0),t)}function qd(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{q=n,Wl.transition=r}}function Ts(){return qe().memoizedState}function ec(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e))zs(t,n);else if(n=ls(e,t,n,r),n!==null){var o=Ae();dt(n,e,r,o),Ls(n,t,r)}}function tc(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))zs(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,lt(a,i)){var s=t.interleaved;s===null?(o.next=o,jl(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ls(e,t,o,r),n!==null&&(o=Ae(),dt(n,e,r,o),Ls(n,t,r))}}function Ns(e){var t=e.alternate;return e===de||t!==null&&t===de}function zs(e,t){sr=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qo(e,n)}}var ao={readContext:Je,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},nc={readContext:Je,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ec.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:gs,useDebugValue:Yl,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=gs(!1),t=e[0];return e=qd.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=pt();if(se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ie===null)throw Error(c(349));(tn&30)!==0||hs(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,ws(ms.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,fs.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=pt(),t=Ie.identifierPrefix;if(se){var n=St,r=It;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rc={readContext:Je,useCallback:Es,useContext:Je,useEffect:$l,useImperativeHandle:xs,useInsertionEffect:ks,useLayoutEffect:Is,useMemo:Cs,useReducer:Hl,useRef:vs,useState:function(){return Hl(dr)},useDebugValue:Yl,useDeferredValue:function(e){var t=qe();return _s(t,ve.memoizedState,e)},useTransition:function(){var e=Hl(dr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:ds,useSyncExternalStore:cs,useId:Ts,unstable_isNewReconciler:!1},oc={readContext:Je,useCallback:Es,useContext:Je,useEffect:$l,useImperativeHandle:xs,useInsertionEffect:ks,useLayoutEffect:Is,useMemo:Cs,useReducer:Vl,useRef:vs,useState:function(){return Vl(dr)},useDebugValue:Yl,useDeferredValue:function(e){var t=qe();return ve===null?t.memoizedState=e:_s(t,ve.memoizedState,e)},useTransition:function(){var e=Vl(dr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:ds,useSyncExternalStore:cs,useId:Ts,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=_({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Vt(e),l=Et(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,o),t!==null&&(dt(t,e,o,r),eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Vt(e),l=Et(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,o),t!==null&&(dt(t,e,o,r),eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Vt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(dt(t,e,r,n),eo(t,e,r))}};function Ps(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(o,l):!0}function js(e,t,n){var r=!1,o=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=Je(l):(o=We(t)?Zt:Ne.current,r=t.contextTypes,l=(r=r!=null)?kn(e,o):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Rl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Je(l):(l=We(t)?Zt:Ne.current,o.context=kn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(bl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&so.enqueueReplaceState(o,o.state,null),to(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=K(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lc=typeof WeakMap=="function"?WeakMap:Map;function As(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,di=r),Gl(e,t)},n}function Ms(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lc;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=wc.bind(null,e,t,n),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ws(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ic=Te.ReactCurrentOwner,Fe=!1;function Re(e,t,n,r){t.child=e===null?os(t,null,n,r):En(t,e.child,n,r)}function Fs(e,t,n,r,o){n=n.render;var l=t.ref;return _n(t,o),r=Bl(e,t,n,r,l,o),n=Ul(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(se&&n&&xl(t),t.flags|=1,Re(e,t,r,o),t.child)}function Bs(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!gi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Us(e,t,l,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(i,r)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=Yt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Xn(l,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return Zl(e,t,n,r,o)}function Hs(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Ln,Ke),Ke|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Ln,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,oe(Ln,Ke),Ke|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,oe(Ln,Ke),Ke|=r;return Re(e,t,o,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,o){var l=We(n)?Zt:Ne.current;return l=kn(t,l),_n(t,o),n=Bl(e,t,n,r,l,o),r=Ul(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(se&&r&&xl(t),t.flags|=1,Re(e,t,n,o),t.child)}function $s(e,t,n,r,o){if(We(n)){var l=!0;br(t)}else l=!1;if(_n(t,o),t.stateNode===null)co(e,t),js(t,n,r),Ql(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,m=n.contextType;typeof m=="object"&&m!==null?m=Je(m):(m=We(n)?Zt:Ne.current,m=kn(t,m));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==m)&&Rs(t,i,r,m),Wt=!1;var y=t.memoizedState;i.state=y,to(t,r,i,o),s=t.memoizedState,a!==r||y!==s||De.current||Wt?(typeof g=="function"&&(bl(t,n,g,r),s=t.memoizedState),(a=Wt||Ps(t,n,a,r,y,s,m))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=m,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,is(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:at(t.type,a),i.props=m,v=t.pendingProps,y=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Je(s):(s=We(n)?Zt:Ne.current,s=kn(t,s));var E=n.getDerivedStateFromProps;(g=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||y!==s)&&Rs(t,i,r,s),Wt=!1,y=t.memoizedState,i.state=y,to(t,r,i,o);var N=t.memoizedState;a!==v||y!==N||De.current||Wt?(typeof E=="function"&&(bl(t,n,E,r),N=t.memoizedState),(m=Wt||Ps(t,n,m,r,y,N,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=s,r=m):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,l,o)}function Xl(e,t,n,r,o,l){Vs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ga(t,n,!1),Ct(e,t,l);r=t.stateNode,ic.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):Re(e,t,a,l),t.memoizedState=r.state,o&&Ga(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?Qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qa(e,t.context,!1),Al(e,t.containerInfo)}function bs(e,t,n,r,o){return xn(),Tl(o),t.flags|=256,Re(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,o=ue.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(ue,o&1),e===null)return _l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=xo(i,r,0,null),e=an(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ql(n),t.memoizedState=Jl,e):ei(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return ac(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Yt(a,l):(l=an(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ql(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return l=e.child,e=l.sibling,r=Yt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ei(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Tl(r),En(t,e.child,null,n),e=ei(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ac(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(c(422))),uo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=xo({mode:"visible",children:r.children},o,0,null),l=an(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,i),t.child.memoizedState=ql(i),t.memoizedState=Jl,l);if((t.mode&1)===0)return uo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(c(419)),r=Kl(l,r,void 0),uo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Fe||a){if(r=Ie,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,xt(e,o),dt(r,e,o,-1))}return pi(),r=Kl(Error(c(421))),uo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=kc.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Qe=At(o.nextSibling),be=t,se=!0,it=null,e!==null&&(Ze[Xe++]=It,Ze[Xe++]=St,Ze[Xe++]=Xt,It=e.id,St=e.overflow,Xt=t),t=ei(t,r.children),t.flags|=4096,t)}function Ks(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function ti(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Gs(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Re(e,t,r.children,n),r=ue.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ks(e,n,t);else if(e.tag===19)Ks(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ue,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ti(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&no(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ti(t,!0,n,null,l);break;case"together":ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function co(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sc(e,t,n){switch(t.tag){case 3:Ys(t),xn();break;case 5:us(t);break;case 1:We(t.type)&&br(t);break;case 4:Al(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(Jr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ue,ue.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Qs(e,t,n):(oe(ue,ue.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);oe(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gs(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return Ct(e,t,n)}var Zs,ni,Xs,Js;Zs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ni=function(){},Xs=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,en(yt.current);var l=null;switch(n){case"input":o=Po(e,o),r=Po(e,r),l=[];break;case"select":o=_({},o,{value:void 0}),r=_({},r,{value:void 0}),l=[];break;case"textarea":o=Ao(e,o),r=Ao(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}Oo(n,r);var i;n=null;for(m in o)if(!r.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var a=o[m];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(A.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in r){var s=r[m];if(a=o!=null?o[m]:void 0,r.hasOwnProperty(m)&&s!==a&&(s!=null||a!=null))if(m==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(m,n)),n=s;else m==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(m,s)):m==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(m,""+s):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(A.hasOwnProperty(m)?(s!=null&&m==="onScroll"&&le("scroll",e),l||a===s||(l=[])):(l=l||[]).push(m,s))}n&&(l=l||[]).push("style",n);var m=l;(t.updateQueue=m)&&(t.flags|=4)}},Js=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uc(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return We(t.type)&&Yr(),Le(t),null;case 3:return r=t.stateNode,Tn(),ie(De),ie(Ne),Dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(fi(it),it=null))),ni(e,t),Le(t),null;case 5:Ml(t);var o=en(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Xs(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(e=en(yt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[mt]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<qn.length;o++)le(qn[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":ji(r,l),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},le("invalid",r);break;case"textarea":Mi(r,l),le("invalid",r)}Oo(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),o=["children",""+a]):A.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&le("scroll",r)}switch(n){case"input":wr(r),Ai(r,l,!0);break;case"textarea":wr(r),Di(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[mt]=t,e[nr]=r,Zs(e,t,!1,!1),t.stateNode=e;e:{switch(i=Do(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<qn.length;o++)le(qn[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":ji(e,r),o=Po(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=_({},r,{value:void 0}),le("invalid",e);break;case"textarea":Mi(e,r),o=Ao(e,r),le("invalid",e);break;default:o=r}Oo(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Ui(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fi(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&An(e,s):typeof s=="number"&&An(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(A.hasOwnProperty(l)?s!=null&&l==="onScroll"&&le("scroll",e):s!=null&&_e(e,l,s,i))}switch(n){case"input":wr(e),Ai(e,r,!1);break;case"textarea":wr(e),Di(e);break;case"option":r.value!=null&&e.setAttribute("value",""+J(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Js(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=en(ar.current),en(yt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(l=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Le(t),null;case 13:if(ie(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),xn(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[mt]=t}else xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),l=!1}else it!==null&&(fi(it),it=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ue.current&1)!==0?we===0&&(we=3):pi())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Tn(),ni(e,t),e===null&&er(t.stateNode.containerInfo),Le(t),null;case 10:return Ll(t.type._context),Le(t),null;case 17:return We(t.type)&&Yr(),Le(t),null;case 19:if(ie(ue),l=t.memoizedState,l===null)return Le(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)hr(l,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=no(e),i!==null){for(t.flags|=128,hr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ue,ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&fe()>Pn&&(t.flags|=128,r=!0,hr(l,!1),t.lanes=4194304)}else{if(!r)if(e=no(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!se)return Le(t),null}else 2*fe()-l.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,hr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=fe(),t.sibling=null,n=ue.current,oe(ue,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return yi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function dc(e,t){switch(El(t),t.tag){case 1:return We(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),ie(De),ie(Ne),Dl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ml(t),null;case 13:if(ie(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ue),null;case 4:return Tn(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return yi(),null;case 24:return null;default:return null}}var ho=!1,Pe=!1,cc=typeof WeakSet=="function"?WeakSet:Set,C=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function ri(e,t,n){try{n()}catch(r){he(e,t,r)}}var qs=!1;function hc(e,t){if(yl=Pr,e=Pa(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,m=0,g=0,v=e,y=null;t:for(;;){for(var E;v!==n||o!==0&&v.nodeType!==3||(a=i+o),v!==l||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(E=v.firstChild)!==null;)y=v,v=E;for(;;){if(v===e)break t;if(y===n&&++m===o&&(a=i),y===l&&++g===r&&(s=i),(E=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=E}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(pl={focusedElem:e,selectionRange:n},Pr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var N=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var z=N.memoizedProps,me=N.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?z:at(t.type,z),me);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(w){he(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return N=qs,qs=!1,N}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ri(t,n,l)}o=o.next}while(o!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[nr],delete t[kl],delete t[Kd],delete t[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}function ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ii(e,t,n),e=e.sibling;e!==null;)ii(e,t,n),e=e.sibling}var xe=null,st=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Cr,n)}catch{}switch(n.tag){case 5:Pe||zn(n,t);case 6:var r=xe,o=st;xe=null,Bt(e,t,n),xe=r,st=o,xe!==null&&(st?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(st?(e=xe,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Yn(e)):wl(xe,n.stateNode));break;case 4:r=xe,o=st,xe=n.stateNode.containerInfo,st=!0,Bt(e,t,n),xe=r,st=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ri(n,t,i),o=o.next}while(o!==r)}Bt(e,t,n);break;case 1:if(!Pe&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Bt(e,t,n),Pe=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cc),t.forEach(function(r){var o=Ic.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,st=!1;break e;case 3:xe=a.stateNode.containerInfo,st=!0;break e;case 4:xe=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(xe===null)throw Error(c(160));ru(l,i,o),xe=null,st=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(m){he(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),gt(e),r&4){try{fr(3,e,e.return),fo(3,e)}catch(z){he(e,e.return,z)}try{fr(5,e,e.return)}catch(z){he(e,e.return,z)}}break;case 1:ut(t,e),gt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(ut(t,e),gt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var o=e.stateNode;try{An(o,"")}catch(z){he(e,e.return,z)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ri(o,l),Do(a,i);var m=Do(a,l);for(i=0;i<s.length;i+=2){var g=s[i],v=s[i+1];g==="style"?Ui(o,v):g==="dangerouslySetInnerHTML"?Fi(o,v):g==="children"?An(o,v):_e(o,g,v,m)}switch(a){case"input":jo(o,l);break;case"textarea":Oi(o,l);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?sn(o,!!l.multiple,E,!1):y!==!!l.multiple&&(l.defaultValue!=null?sn(o,!!l.multiple,l.defaultValue,!0):sn(o,!!l.multiple,l.multiple?[]:"",!1))}o[nr]=l}catch(z){he(e,e.return,z)}}break;case 6:if(ut(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(z){he(e,e.return,z)}}break;case 3:if(ut(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(z){he(e,e.return,z)}break;case 4:ut(t,e),gt(e);break;case 13:ut(t,e),gt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ui=fe())),r&4&&ou(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(m=Pe)||g,ut(t,e),Pe=m):ut(t,e),gt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!g&&(e.mode&1)!==0)for(C=e,g=e.child;g!==null;){for(v=C=g;C!==null;){switch(y=C,E=y.child,y.tag){case 0:case 11:case 14:case 15:fr(4,y,y.return);break;case 1:zn(y,y.return);var N=y.stateNode;if(typeof N.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(z){he(r,n,z)}}break;case 5:zn(y,y.return);break;case 22:if(y.memoizedState!==null){su(v);continue}}E!==null?(E.return=y,C=E):su(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{o=v.stateNode,m?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Bi("display",i))}catch(z){he(e,e.return,z)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=m?"":v.memoizedProps}catch(z){he(e,e.return,z)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ut(t,e),gt(e),r&4&&ou(e);break;case 21:break;default:ut(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(An(o,""),r.flags&=-33);var l=nu(e);ii(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=nu(e);li(e,a,i);break;default:throw Error(c(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fc(e,t,n){C=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ho;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Pe;a=ho;var m=Pe;if(ho=i,(Pe=s)&&!m)for(C=o;C!==null;)i=C,s=i.child,i.tag===22&&i.memoizedState!==null?uu(o):s!==null?(s.return=i,C=s):uu(o);for(;l!==null;)C=l,iu(l),l=l.sibling;C=o,ho=a,Pe=m}au(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,C=l):au(e)}}function au(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ss(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var g=m.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Yn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Pe||t.flags&512&&oi(t)}catch(y){he(t,t.return,y)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function su(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function uu(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){he(t,o,s)}}var l=t.return;try{oi(t)}catch(s){he(t,l,s)}break;case 5:var i=t.return;try{oi(t)}catch(s){he(t,i,s)}}}catch(s){he(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var mc=Math.ceil,mo=Te.ReactCurrentDispatcher,ai=Te.ReactCurrentOwner,et=Te.ReactCurrentBatchConfig,Q=0,Ie=null,ge=null,Ee=0,Ke=0,Ln=Mt(0),we=0,mr=null,nn=0,yo=0,si=0,yr=null,Be=null,ui=0,Pn=1/0,_t=null,po=!1,di=null,Ut=null,go=!1,Ht=null,vo=0,pr=0,ci=null,wo=-1,ko=0;function Ae(){return(Q&6)!==0?fe():wo!==-1?wo:wo=fe()}function Vt(e){return(e.mode&1)===0?1:(Q&2)!==0&&Ee!==0?Ee&-Ee:Xd.transition!==null?(ko===0&&(ko=na()),ko):(e=q,e!==0||(e=window.event,e=e===void 0?16:ca(e.type)),e)}function dt(e,t,n,r){if(50<pr)throw pr=0,ci=null,Error(c(185));Bn(e,n,r),((Q&2)===0||e!==Ie)&&(e===Ie&&((Q&2)===0&&(yo|=n),we===4&&$t(e,Ee)),Ue(e,r),n===1&&Q===0&&(t.mode&1)===0&&(Pn=fe()+500,Qr&&Dt()))}function Ue(e,t){var n=e.callbackNode;Xu(e,t);var r=Nr(e,e===Ie?Ee:0);if(r===0)n!==null&&qi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qi(n),t===1)e.tag===0?Zd(cu.bind(null,e)):Za(cu.bind(null,e)),bd(function(){(Q&6)===0&&Dt()}),n=null;else{switch(ra(r)){case 1:n=$o;break;case 4:n=ea;break;case 16:n=Er;break;case 536870912:n=ta;break;default:n=Er}n=wu(n,du.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function du(e,t){if(wo=-1,ko=0,(Q&6)!==0)throw Error(c(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Nr(e,e===Ie?Ee:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Io(e,r);else{t=r;var o=Q;Q|=2;var l=fu();(Ie!==e||Ee!==t)&&(_t=null,Pn=fe()+500,on(e,t));do try{gc();break}catch(a){hu(e,a)}while(!0);zl(),mo.current=l,Q=o,ge!==null?t=0:(Ie=null,Ee=0,t=we)}if(t!==0){if(t===2&&(o=Yo(e),o!==0&&(r=o,t=hi(e,o))),t===1)throw n=mr,on(e,0),$t(e,r),Ue(e,fe()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!yc(o)&&(t=Io(e,r),t===2&&(l=Yo(e),l!==0&&(r=l,t=hi(e,l))),t===1))throw n=mr,on(e,0),$t(e,r),Ue(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:ln(e,Be,_t);break;case 3:if($t(e,r),(r&130023424)===r&&(t=ui+500-fe(),10<t)){if(Nr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vl(ln.bind(null,e,Be,_t),t);break}ln(e,Be,_t);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-ot(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mc(r/1960))-r,10<r){e.timeoutHandle=vl(ln.bind(null,e,Be,_t),r);break}ln(e,Be,_t);break;case 5:ln(e,Be,_t);break;default:throw Error(c(329))}}}return Ue(e,fe()),e.callbackNode===n?du.bind(null,e):null}function hi(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Be,Be=n,t!==null&&fi(t)),e}function fi(e){Be===null?Be=e:Be.push.apply(Be,e)}function yc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!lt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~si,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function cu(e){if((Q&6)!==0)throw Error(c(327));jn();var t=Nr(e,0);if((t&1)===0)return Ue(e,fe()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Yo(e);r!==0&&(t=r,n=hi(e,r))}if(n===1)throw n=mr,on(e,0),$t(e,t),Ue(e,fe()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Be,_t),Ue(e,fe()),null}function mi(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Pn=fe()+500,Qr&&Dt())}}function rn(e){Ht!==null&&Ht.tag===0&&(Q&6)===0&&jn();var t=Q;Q|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,Q=t,(Q&6)===0&&Dt()}}function yi(){Ke=Ln.current,ie(Ln)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:Tn(),ie(De),ie(Ne),Dl();break;case 5:Ml(r);break;case 4:Tn();break;case 13:ie(ue);break;case 19:ie(ue);break;case 10:Ll(r.type._context);break;case 22:case 23:yi()}n=n.return}if(Ie=e,ge=e=Yt(e.current,null),Ee=Ke=t,we=0,mr=null,si=yo=nn=0,Be=yr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}qt=null}return e}function hu(e,t){do{var n=ge;try{if(zl(),ro.current=ao,oo){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}oo=!1}if(tn=0,ke=ve=de=null,sr=!1,ur=0,ai.current=null,n===null||n.return===null){we=1,mr=t,ge=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var m=s,g=a,v=g.tag;if((g.mode&1)===0&&(v===0||v===11||v===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=Ds(i);if(E!==null){E.flags&=-257,Ws(E,i,a,l,t),E.mode&1&&Os(l,m,t),t=E,s=m;var N=t.updateQueue;if(N===null){var z=new Set;z.add(s),t.updateQueue=z}else N.add(s);break e}else{if((t&1)===0){Os(l,m,t),pi();break e}s=Error(c(426))}}else if(se&&a.mode&1){var me=Ds(i);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),Ws(me,i,a,l,t),Tl(Nn(s,a));break e}}l=s=Nn(s,a),we!==4&&(we=2),yr===null?yr=[l]:yr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=As(l,s,t);as(l,h);break e;case 1:a=s;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ut===null||!Ut.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Ms(l,a,t);as(l,w);break e}}l=l.return}while(l!==null)}yu(n)}catch(L){t=L,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function fu(){var e=mo.current;return mo.current=ao,e===null?ao:e}function pi(){(we===0||we===3||we===2)&&(we=4),Ie===null||(nn&268435455)===0&&(yo&268435455)===0||$t(Ie,Ee)}function Io(e,t){var n=Q;Q|=2;var r=fu();(Ie!==e||Ee!==t)&&(_t=null,on(e,t));do try{pc();break}catch(o){hu(e,o)}while(!0);if(zl(),Q=n,mo.current=r,ge!==null)throw Error(c(261));return Ie=null,Ee=0,we}function pc(){for(;ge!==null;)mu(ge)}function gc(){for(;ge!==null&&!Hu();)mu(ge)}function mu(e){var t=vu(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?yu(e):ge=t,ai.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=uc(n,t,Ke),n!==null){ge=n;return}}else{if(n=dc(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function ln(e,t,n){var r=q,o=et.transition;try{et.transition=null,q=1,vc(e,t,n,r)}finally{et.transition=o,q=r}return null}function vc(e,t,n,r){do jn();while(Ht!==null);if((Q&6)!==0)throw Error(c(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ju(e,l),e===Ie&&(ge=Ie=null,Ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||go||(go=!0,wu(Er,function(){return jn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=et.transition,et.transition=null;var i=q;q=1;var a=Q;Q|=4,ai.current=null,hc(e,n),lu(n,e),Wd(pl),Pr=!!yl,pl=yl=null,e.current=n,fc(n),Vu(),Q=a,q=i,et.transition=l}else e.current=n;if(go&&(go=!1,Ht=e,vo=o),l=e.pendingLanes,l===0&&(Ut=null),bu(n.stateNode),Ue(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(po)throw po=!1,e=di,di=null,e;return(vo&1)!==0&&e.tag!==0&&jn(),l=e.pendingLanes,(l&1)!==0?e===ci?pr++:(pr=0,ci=e):pr=0,Dt(),null}function jn(){if(Ht!==null){var e=ra(vo),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,vo=0,(Q&6)!==0)throw Error(c(331));var o=Q;for(Q|=4,C=e.current;C!==null;){var l=C,i=l.child;if((C.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var m=a[s];for(C=m;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:fr(8,g,l)}var v=g.child;if(v!==null)v.return=g,C=v;else for(;C!==null;){g=C;var y=g.sibling,E=g.return;if(eu(g),g===m){C=null;break}if(y!==null){y.return=E,C=y;break}C=E}}}var N=l.alternate;if(N!==null){var z=N.child;if(z!==null){N.child=null;do{var me=z.sibling;z.sibling=null,z=me}while(z!==null)}}C=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:fr(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,C=h;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){i=C;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,C=f;else e:for(i=u;C!==null;){if(a=C,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:fo(9,a)}}catch(L){he(a,a.return,L)}if(a===i){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(Q=o,Dt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Cr,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function pu(e,t,n){t=Nn(n,t),t=As(e,t,1),e=Ft(e,t,1),t=Ae(),e!==null&&(Bn(e,1,t),Ue(e,t))}function he(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Nn(n,e),e=Ms(t,e,1),t=Ft(t,e,1),e=Ae(),t!==null&&(Bn(t,1,e),Ue(t,e));break}}t=t.return}}function wc(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>fe()-ui?on(e,0):si|=n),Ue(e,t)}function gu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Tr,Tr<<=1,(Tr&130023424)===0&&(Tr=4194304)));var n=Ae();e=xt(e,t),e!==null&&(Bn(e,t,n),Ue(e,n))}function kc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gu(e,n)}function Ic(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),gu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fe=!1,sc(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,se&&(t.flags&1048576)!==0&&Xa(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;co(e,t),e=t.pendingProps;var o=kn(t,Ne.current);_n(t,n),o=Bl(null,t,r,e,o,n);var l=Ul();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(l=!0,br(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rl(t),o.updater=so,t.stateNode=o,o._reactInternals=t,Ql(t,r,e,n),t=Xl(null,t,r,!0,l,n)):(t.tag=0,se&&l&&xl(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=xc(r),e=at(r,e),o){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=$s(null,t,r,e,n);break e;case 11:t=Fs(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,at(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Zl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),$s(e,t,r,o,n);case 3:e:{if(Ys(t),e===null)throw Error(c(387));r=t.pendingProps,l=t.memoizedState,o=l.element,is(e,t),to(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Nn(Error(c(423)),t),t=bs(e,t,r,n,o);break e}else if(r!==o){o=Nn(Error(c(424)),t),t=bs(e,t,r,n,o);break e}else for(Qe=At(t.stateNode.containerInfo.firstChild),be=t,se=!0,it=null,n=os(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===o){t=Ct(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&_l(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,gl(r,o)?i=null:l!==null&&gl(r,l)&&(t.flags|=32),Vs(e,t),Re(e,t,i,n),t.child;case 6:return e===null&&_l(t),null;case 13:return Qs(e,t,n);case 4:return Al(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Fs(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,oe(Jr,r._currentValue),r._currentValue=i,l!==null)if(lt(l.value,i)){if(l.children===o.children&&!De.current){t=Ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Et(-1,n&-n),s.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var g=m.pending;g===null?s.next=s:(s.next=g.next,g.next=s),m.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Pl(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(c(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Pl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_n(t,n),o=Je(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=at(r,t.pendingProps),o=at(r.type,o),Bs(e,t,r,o,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),co(e,t),t.tag=1,We(r)?(e=!0,br(t)):e=!1,_n(t,n),js(t,r,o),Ql(t,r,o,n),Xl(null,t,r,!0,e,n);case 19:return Gs(e,t,n);case 22:return Hs(e,t,n)}throw Error(c(156,t.tag))};function wu(e,t){return Ji(e,t)}function Sc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Sc(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xc(e){if(typeof e=="function")return gi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===ht)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Me:return an(n.children,o,l,t);case Ge:i=8,o|=8;break;case Tt:return e=tt(12,n,t,o|2),e.elementType=Tt,e.lanes=l,e;case Ve:return e=tt(13,n,t,o),e.elementType=Ve,e.lanes=l,e;case rt:return e=tt(19,n,t,o),e.elementType=rt,e.lanes=l,e;case ce:return xo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:i=10;break e;case Qt:i=9;break e;case ct:i=11;break e;case ht:i=14;break e;case Oe:i=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=tt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=tt(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function vi(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function wi(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ec(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ki(e,t,n,r,o,l,i,a,s){return e=new Ec(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=tt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(l),e}function Cc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return Ot;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(We(n))return Ka(e,n,t)}return t}function Iu(e,t,n,r,o,l,i,a,s){return e=ki(n,r,!0,e,o,l,i,a,s),e.context=ku(null),n=e.current,r=Ae(),o=Vt(n),l=Et(r,o),l.callback=t??null,Ft(n,l,o),e.current.lanes=o,Bn(e,o,r),Ue(e,r),e}function Eo(e,t,n,r){var o=t.current,l=Ae(),i=Vt(o);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,i),e!==null&&(dt(e,o,i,l),eo(e,o,i)),i}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ii(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function _c(){return null}var xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Si(e){this._internalRoot=e}_o.prototype.render=Si.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Eo(e,t,null,null)},_o.prototype.unmount=Si.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Eo(null,e,null,null)}),t[wt]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&ua(e)}};function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Tc(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var m=Co(i);l.call(m)}}var i=Iu(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=i,e[wt]=i.current,er(e.nodeType===8?e.parentNode:e),rn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var m=Co(s);a.call(m)}}var s=ki(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[wt]=s.current,er(e.nodeType===8?e.parentNode:e),rn(function(){Eo(t,s,n,r)}),s}function No(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Co(i);a.call(s)}}Eo(t,i,e,o)}else i=Tc(n,t,e,o,r);return Co(i)}oa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(Qo(t,n|1),Ue(t,fe()),(Q&6)===0&&(Pn=fe()+500,Dt()))}break;case 13:rn(function(){var r=xt(e,1);if(r!==null){var o=Ae();dt(r,e,1,o)}}),Ii(e,1)}},Ko=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ae();dt(t,e,134217728,n)}Ii(e,134217728)}},la=function(e){if(e.tag===13){var t=Vt(e),n=xt(e,t);if(n!==null){var r=Ae();dt(n,e,t,r)}Ii(e,t)}},ia=function(){return q},aa=function(e,t){var n=q;try{return q=e,t()}finally{q=n}},Bo=function(e,t,n){switch(t){case"input":if(jo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$r(r);if(!o)throw Error(c(90));Pi(r),jo(r,o)}}}break;case"textarea":Oi(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Yi=mi,bi=rn;var Nc={usingClientEntryPoint:!1,Events:[rr,vn,$r,Vi,$i,mi]},gr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zc={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zi(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||_c,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{Cr=zo.inject(zc),ft=zo}catch{}}return He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc,He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xi(t))throw Error(c(200));return Cc(e,t,null,n)},He.createRoot=function(e,t){if(!xi(e))throw Error(c(299));var n=!1,r="",o=xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ki(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,er(e.nodeType===8?e.parentNode:e),new Si(t)},He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Zi(t),e=e===null?null:e.stateNode,e},He.flushSync=function(e){return rn(e)},He.hydrate=function(e,t,n){if(!To(t))throw Error(c(200));return No(null,e,t,!0,n)},He.hydrateRoot=function(e,t,n){if(!xi(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=xu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Iu(t,null,e,1,n??null,o,!1,l,i),e[wt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _o(t)},He.render=function(e,t,n){if(!To(t))throw Error(c(200));return No(null,e,t,!1,n)},He.unmountComponentAtNode=function(e){if(!To(e))throw Error(c(40));return e._reactRootContainer?(rn(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},He.unstable_batchedUpdates=mi,He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!To(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return No(e,t,n,!1,r)},He.version="18.3.1-next-f1338f8080-20240426",He}var ju;function Dc(){if(ju)return _i.exports;ju=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(x){console.error(x)}}return k(),_i.exports=Oc(),_i.exports}var Ru;function Wc(){if(Ru)return Lo;Ru=1;var k=Dc();return Lo.createRoot=k.createRoot,Lo.hydrateRoot=k.hydrateRoot,Lo}var Fc=Wc();const Bc=`#version 300 es
in vec2 a_pos;
void main(){ gl_Position = vec4(a_pos,0.0,1.0); }
`,Uc=`#version 300 es
precision highp float;
out vec4 outColor;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_aspect;

float hash21(vec2 p){
  p = fract(p*vec2(123.34, 456.21));
  p += dot(p, p+45.32);
  return fract(p.x*p.y);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv - 0.5;
  p.x *= u_aspect;
  vec2 m = u_mouse - 0.5; m.x *= u_aspect;

  float t = u_time * 0.08;

  vec2 dir = p - m;
  float d = length(dir);
  vec2 warp = -dir * exp(-d*1.8) * 0.18;

  vec2 q = p + warp;
  float band = 0.0;
  band += sin(q.y * 6.5 + sin(q.x*2.2 + t*1.1)*1.2 + t*0.9);
  band += sin(q.y * 4.0 - q.x*1.5 + t*0.7) * 0.8;
  band += sin(length(q)*5.0 - t*1.3) * 0.5;

  float n = band * 0.25 + 0.5;
  float band2 = sin(q.x * 3.0 + t * 0.6) * 0.5 + 0.5;

  vec3 c1 = vec3(0.14, 0.17, 0.23);
  vec3 c2 = vec3(0.32, 0.34, 0.42);
  vec3 c3 = vec3(0.20, 0.22, 0.32);
  vec3 col = mix(c1, c2, n);
  col = mix(col, c3, band2 * 0.55);

  float bright = smoothstep(0.15, 0.85, n);
  col *= 0.30 + bright * 0.90;

  col += vec3(0.95) * exp(-d*4.5) * 0.10;

  float g = hash21(gl_FragCoord.xy * 0.5 + u_time);
  col += (g - 0.5) * 0.020;

  col *= smoothstep(1.6, 0.2, length(p));

  outColor = vec4(col, 1.0);
}
`;function Au(k,x,c){const D=k.createShader(x);return k.shaderSource(D,c),k.compileShader(D),k.getShaderParameter(D,k.COMPILE_STATUS)||console.error(k.getShaderInfoLog(D)),D}function Hc(){const k=Ce.useRef(null);return Ce.useEffect(()=>{const x=k.current;if(!x)return;const c=x.getContext("webgl2",{antialias:!1});if(!c){x.style.background="#1a1d24";return}const D=Au(c,c.VERTEX_SHADER,Bc),A=Au(c,c.FRAGMENT_SHADER,Uc),T=c.createProgram();c.attachShader(T,D),c.attachShader(T,A),c.linkProgram(T);const te=c.createVertexArray();c.bindVertexArray(te);const ne=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,ne),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),c.STATIC_DRAW);const W=c.getAttribLocation(T,"a_pos");c.enableVertexAttribArray(W),c.vertexAttribPointer(W,2,c.FLOAT,!1,0,0);const R=c.getUniformLocation(T,"u_time"),X=c.getUniformLocation(T,"u_res"),Y=c.getUniformLocation(T,"u_mouse"),$=c.getUniformLocation(T,"u_aspect"),b={mouse:{x:.5,y:.5},target:{x:.5,y:.5},start:performance.now(),dpr:Math.min(window.devicePixelRatio||1,1.5)};function ee(){const pe=window.innerWidth*b.dpr|0,_e=window.innerHeight*b.dpr|0;(x.width!==pe||x.height!==_e)&&(x.width=pe,x.height=_e),x.style.width=window.innerWidth+"px",x.style.height=window.innerHeight+"px"}ee(),window.addEventListener("resize",ee);const U=pe=>{b.target.x=pe.clientX/window.innerWidth,b.target.y=1-pe.clientY/window.innerHeight};window.addEventListener("mousemove",U);let V;function ye(){const pe=(performance.now()-b.start)/1e3;b.mouse.x+=(b.target.x-b.mouse.x)*.05,b.mouse.y+=(b.target.y-b.mouse.y)*.05,c.viewport(0,0,x.width,x.height),c.useProgram(T),c.uniform1f(R,pe),c.uniform2f(X,x.width,x.height),c.uniform2f(Y,b.mouse.x,b.mouse.y),c.uniform1f($,x.width/x.height),c.drawArrays(c.TRIANGLES,0,6),V=requestAnimationFrame(ye)}return V=requestAnimationFrame(ye),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",ee),window.removeEventListener("mousemove",U)}},[]),S.jsx("canvas",{ref:k,id:"bgCanvas"})}function Vc({albums:k,activeSlug:x,collapsed:c,onToggleCollapsed:D,onClose:A}){return S.jsxs(S.Fragment,{children:[S.jsx("button",{className:"sidebar-toggle-mobile",onClick:D,title:"Toggle sidebar",children:"☰"}),!c&&S.jsx("div",{className:"sidebar-backdrop",onClick:A}),S.jsxs("aside",{id:"sidebar",children:[S.jsxs("div",{className:"sidebar-header",children:[S.jsx("button",{className:"sidebar-toggle-desktop",onClick:D,title:"Toggle sidebar",children:"☰"}),S.jsx("div",{className:"brand",children:"SONGBOOK"})]}),S.jsx("section",{className:"group",children:S.jsx("ul",{className:"album-list",children:k.map(T=>S.jsx("li",{className:`album-item${x===T.slug?" active":""}`,children:S.jsxs("a",{href:`#${T.slug}`,className:"album-link",onClick:A,children:[T.coverImage?S.jsx("img",{src:T.coverImage,alt:T.title,className:"album-cover"}):S.jsx("span",{className:"album-cover",style:{background:`linear-gradient(135deg, ${T.color}aa, ${T.color}55)`}}),S.jsxs("span",{className:"album-meta",children:[S.jsx("span",{className:"album-title",children:T.title}),S.jsxs("span",{className:"album-sub",children:[T.artist," · ",T.year]})]})]})},T.slug))})})]})]})}function $c({albums:k}){return S.jsxs("div",{className:"home-page",children:[S.jsx("div",{className:"home-mark",children:"⌁"}),S.jsx("div",{className:"home-albums",children:k.map(x=>S.jsxs("a",{href:`#${x.slug}`,className:"home-album-card",children:[x.coverImage?S.jsx("img",{src:x.coverImage,alt:x.title,className:"home-album-card-cover"}):S.jsx("div",{className:"home-album-card-cover mono",style:{background:`linear-gradient(135deg, ${x.color}aa, ${x.color}33)`},children:x.artist.split(" ").map(c=>c[0]).join("")}),S.jsxs("div",{className:"home-album-card-info",children:[S.jsx("div",{className:"home-album-card-title",children:x.title}),S.jsxs("div",{className:"home-album-card-sub mono",children:[x.artist," · ",x.year]})]})]},x.slug))})]})}function Yc(k){return k.split(/\n\s*\n/).filter(c=>c.trim()).map(c=>{const D=c.split(`
`).map(T=>T.trim()).filter(Boolean),A=[];for(let T=0;T<D.length;T+=2)A.push([D[T]??"",D[T+1]??""]);return A})}function bc({album:k,initialSongSlug:x}){const c=Ce.useRef(null),D=Ce.useRef(null),[A,T]=Ce.useState(!1),te=Ce.useRef(null);Ce.useEffect(()=>{if(!A)return;const R=X=>{te.current&&!te.current.contains(X.target)&&T(!1)};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[A]),Ce.useEffect(()=>{c.current=document.getElementById("main")},[]);const ne=Ce.useCallback((R,X="instant")=>{const Y=document.getElementById(R),$=document.getElementById("main");if(Y&&$){const b=Y.getBoundingClientRect().top+$.scrollTop-24;$.scrollTo({top:b,behavior:X})}},[]);Ce.useEffect(()=>{var b;const R=document.getElementById("main");if(!R)return;const X=Array.from(document.querySelectorAll(".song")),Y=Array.from(document.querySelectorAll(".toc-item"));function $(ee){Y.forEach(U=>{U.classList.toggle("active",U.dataset.songSlug===ee)})}return D.current&&D.current.disconnect(),D.current=new IntersectionObserver(ee=>{var V;const U=ee.filter(ye=>ye.isIntersecting).map(ye=>({slug:ye.target.dataset.songSlug??"",top:ye.boundingClientRect.top}));if(U.length){U.sort((pe,_e)=>Math.abs(pe.top-80)-Math.abs(_e.top-80));const ye=((V=U[0])==null?void 0:V.slug)??"";$(ye),history.replaceState(null,"",`#${k.slug}/${ye}`)}},{root:R,rootMargin:"-80px 0px -55% 0px",threshold:[0,.25,.5,.75,1]}),X.forEach(ee=>D.current.observe(ee)),(b=X[0])!=null&&b.dataset.songSlug&&$(X[0].dataset.songSlug),()=>{var ee;(ee=D.current)==null||ee.disconnect()}},[k]),Ce.useEffect(()=>{var R;x?requestAnimationFrame(()=>ne(x,"auto")):(R=document.getElementById("main"))==null||R.scrollTo({top:0,behavior:"auto"})},[k,x,ne]),Ce.useEffect(()=>(document.title=`${k.title} — ${k.artist} · Songbook`,()=>{document.title="Songbook"}),[k]);const W=k.artist.split(" ").map(R=>R[0]).join("");return S.jsxs("article",{className:"album-page",children:[S.jsxs("header",{className:"album-header",children:[S.jsx("div",{className:"album-cover-lg",style:k.coverImage?{}:{background:`linear-gradient(135deg, ${k.color}aa, ${k.color}33)`},children:k.coverImage?S.jsx("img",{src:k.coverImage,alt:k.title,className:"album-cover-img"}):S.jsx("span",{className:"album-cover-text mono",children:W})}),S.jsxs("div",{className:"album-info",children:[S.jsx("div",{className:"album-tag mono",children:"ALBUM"}),S.jsx("h1",{className:"album-h1",children:k.title}),S.jsxs("div",{className:"album-byline",children:[k.artist,S.jsx("span",{className:"dot",children:" · "}),k.year,S.jsx("span",{className:"dot",children:" · "}),k.songs.length," tracks"]})]})]}),S.jsxs("div",{className:"album-body",children:[S.jsxs("aside",{ref:te,className:`toc${A?" toc-expanded":""}`,children:[S.jsxs("div",{className:"toc-bar",children:[S.jsxs("button",{className:"toc-toggle",onClick:()=>T(R=>!R),children:[S.jsx("span",{className:"toc-label mono",children:"TRACKS"}),S.jsx("span",{className:"toc-chev mono",children:A?"▴":"▾"})]}),S.jsx("button",{className:"toc-top-btn mono",onClick:()=>{var R;return(R=document.getElementById("main"))==null?void 0:R.scrollTo({top:0,behavior:"instant"})},children:"↑ Album"})]}),S.jsx("ol",{className:"toc-list",children:k.songs.map((R,X)=>S.jsx("li",{className:"toc-item","data-song-slug":R.slug,children:S.jsxs("a",{href:`#${k.slug}/${R.slug}`,onClick:Y=>{Y.preventDefault(),ne(R.slug),history.replaceState(null,"",`#${k.slug}/${R.slug}`),T(!1)},children:[S.jsx("span",{className:"toc-num mono",children:String(X+1).padStart(2,"0")}),S.jsx("span",{className:"toc-text",children:S.jsx("span",{className:"toc-title",children:R.title})})]})},R.slug))})]}),S.jsx("div",{className:"songs",children:k.songs.map((R,X)=>{const Y=Yc(R.lyrics);return S.jsxs("section",{className:"song",id:R.slug,"data-song-slug":R.slug,children:[S.jsxs("header",{className:"song-header",children:[S.jsx("div",{className:"song-num mono",children:String(X+1).padStart(2,"0")}),S.jsx("h2",{className:"song-title",children:R.title}),S.jsx("div",{className:"song-title-zh",children:R.titleZh})]}),S.jsx("div",{className:"lyrics",children:Y.map(($,b)=>S.jsx("div",{className:"stanza",children:$.map(([ee,U],V)=>S.jsxs("div",{className:"line",children:[S.jsx("div",{className:"en",children:ee}),U&&S.jsx("div",{className:"zh",children:U})]},V))},b))})]},R.slug)})})]})]})}const Qc="/songs/assets/Songs-of-Leonard%20Cohen-BaAgAagR.jpg",Kc="/songs/assets/songs-from-a-room-40jyqFCy.jpg",Gc="/songs/assets/Bob_Dylan_-_Modern_Times-BVyHi0Sn.jpg",zi=[{slug:"songs-of-leonard-cohen",title:"Songs of Leonard Cohen",artist:"Leonard Cohen",year:1967,color:"#5b6a78",coverImage:Qc,songs:[{slug:"suzanne",title:"Suzanne",titleZh:"蘇珊",lyrics:`Suzanne takes you down to her place near the river
蘇珊帶你向下走到她河邊的住處
You can hear the boats go by
你可以聽到船隻駛過的聲音
You can spend the night beside her
你可以陪她共度一宿
And you know that she's half crazy
而你知道她有些瘋狂
But that's why you want to be there
但那正是你想待在那裡的原因
And she feeds you tea and oranges
她餵你喝茶，吃橘子
That come all the way from China
那些遠道從中國而來的東西
And just when you mean to tell her
而就在你打算告訴她
That you have no love to give her
你沒有愛可以給她的時候
Then she gets you on her wavelength
她讓你進入她的頻率
And she lets the river answer
她讓河流代為回答
That you've always been her lover
說你一直是她的愛人
And you want to travel with her
你想與她一同旅行
And you want to travel blind
你想盲目地去旅行
And you know that she will trust you
而你知道她會信任你
For you've touched her perfect body with your mind.
因為你已用你的心靈觸碰了她完美的軀體。

And Jesus was a sailor
耶穌曾是個水手
When he walked upon the water
當他在水面上行走時
And he spent a long time watching
他花了很長的時間凝望
From his lonely wooden tower
從他那孤獨的木塔上
And when he knew for certain
當他確定地知道
Only drowning men could see him
只有溺水的人能看見他時
He said "All men will be sailors then
他說「那麼所有人都將成為水手
Until the sea shall free them"
直到大海釋放他們為止」
But he himself was broken
但他自己卻已破碎
Long before the sky would open
在天空開啟前的許久
Forsaken, almost human
被遺棄，近乎凡人
He sank beneath your wisdom like a stone
他沉沒在你的智慧之下，像一顆石頭
And you want to travel with him
而你想與他一同旅行
And you want to travel blind
你想盲目地去旅行
And you think maybe you'll trust him
你心想或許你會信任他
For he's touched your perfect body with his mind.
因為他已用他的心靈觸碰了你完美的軀體。

Now Suzanne takes your hand
現在蘇珊牽著你的手
And she leads you to the river
她領你走向河邊
She is wearing rags and feathers
她穿著破衣和羽飾
From Salvation Army counters
從救世軍的櫃檯淘來的
And the sun pours down like honey
陽光像蜂蜜般傾瀉而下
On our lady of the harbour
灑在港口聖母像的身上
And she shows you where to look
她指給你看該往哪裡瞧
Among the garbage and the flowers
在垃圾與花叢之間
There are heroes in the seaweed
海藻中藏著英雄
There are children in the morning
清晨中有著孩子
They are leaning out for love
他們俯身渴求著愛
And they will lean that way forever
他們將永遠保持那個姿勢
While Suzanne holds the mirror
當蘇珊握著鏡子的時候
And you want to travel with her
你想與她一同旅行
And you want to travel blind
你想盲目地去旅行
And you know that you can trust her
而你知道你可以信任她
For she's touched your perfect body with her mind.
因為她已用她的心靈觸碰了你完美的軀體。`},{slug:"master-song",title:"Master Song",titleZh:"大師之歌",lyrics:`I believe that you heard your master sing
我相信你聽見了你的大師在歌唱
when I was sick in bed.
當我臥病在床的時候。
I suppose that he told you everything
我想他告訴了你一切
that I keep locked away in my head.
那些我鎖在腦袋裡的事情。
Your master took you travelling,
你的大師帶你去旅行了，
well at least that's what you said.
好吧，至少你是這麼說的。
And now do you come back to bring
而現在你回來是為了帶給
your prisoner wine and bread?
你的囚徒美酒與麵包嗎？

You met him at some temple, where
你在某座寺廟遇見他，在那裡
they take your clothes at the door.
他們在門口收走你的衣服。
He was just a numberless man in a chair
他只是坐在椅子上一個沒有編號的人
who'd just come back from the war.
一個剛從戰場回來的人。
And you wrap up his tired face in your hair
你用你的頭髮包裹住他疲憊的面容
and he hands you the apple core.
而他遞給你那個蘋果核。
Then he touches your lips now so suddenly bare
接著他觸碰了你那突然赤裸的雙唇
of all the kisses we put on some time before.
那些我們之前留在上面的吻痕已消失不見。

And he gave you a German Shepherd to walk
他給了你一隻德國牧羊犬去遛
with a collar of leather and nails,
戴著皮革與鐵釘的項圈，
and he never once made you explain or talk
他從未要求你解釋或談論
about all of the little details,
關於所有的那些小細節，
such as who had a worm and who had a rock,
比如誰擁有一條蟲，誰擁有一塊石，
and who had you through the mails.
以及誰透過郵件得到了你。
Now your love is a secret all over the block,
現在你的愛成了整條街區的秘密，
and it never stops not even when your master fails.
它從未停止，即便當你的大師失敗時也一樣。

And he took you up in his aeroplane,
他帶你上了他的飛機，
which he flew without any hands,
他不用雙手操控飛行，
and you cruised above the ribbons of rain
你巡航在絲帶般的雨水之上
that drove the crowd from the stands.
那是將人群趕離看台的雨。
Then he killed the lights in a lonely Lane
接著他在一條寂靜的小徑熄了燈
and, an ape with angel glands,
然後，一隻擁有天使腺體的類人猿，
erased the final wisps of pain
抹去了最後的一絲痛苦
with the music of rubber bands.
用橡皮筋彈奏出的音樂。

And now I hear your master sing,
現在我聽見你的大師在歌唱，
you kneel for him to come.
你跪著等待他的到來。
His body is a golden string
他的身體是一根金色的弦
that your body is hanging from.
你的身體就懸掛在那上面。
His body is a golden string,
他的身體是一根金色的弦，
my body has grown numb.
我的身體已經麻木了。
Oh now you hear your master sing,
噢，現在你聽見你的大師在歌唱，
your shirt is all undone.
你的襯衫鈕扣全解開了。

And will you kneel beside this bed
你會跪在這張床邊嗎
that we polished so long ago,
這張我們很久以前擦亮的床，
before your master chose instead
在你的大師選擇
to make my bed of snow?
讓我的床變成白雪之前？
Your eyes are wild and your knuckles are red
你的眼神狂亂，指關節發紅
and you're speaking far too low.
你的聲音太過低沉。
No I can't make out what your master said
不，我聽不清你的大師說了什麼
before he made you go.
在他讓你離開之前。

Then I think you're playing far too rough
我覺得你玩得太過火了
for a lady who's been to the moon;
對於一個去過月球的女士來說；
I've lain by this window long enough
我躺在這扇窗邊已經夠久了
to get used to an empty room.
久到足以習慣這空蕩的房間。
And your love is some dust in an old man's cuff
你的愛像是老人袖口裡的灰塵
who is tapping his foot to a tune,
他正隨著曲調打著節拍，
and your thighs are a ruin, you want too much,
你的大腿已成荒蕪，你索求太多，
let's say you came back some time too soon.
就說你回來得太早了些吧。

I loved your master perfectly
我曾完美地愛著你的大師
I taught him all that he knew.
我教會了他所知道的一切。
He was starving in some deep mystery
他在某種深沉的神祕中飢腸轆轆
like a man who is sure what is true.
像個確定真理為何的人。
And I sent you to him with my guarantee
我把你送往他那裡並向他保證
I could teach him something new,
我可以教他一些新東西，
and I taught him how you would long for me
我教過他你會如何渴望我
no matter what he said no matter what you'd do.
無論他說了什麼，無論你做了什麼。

I believe that you heard your master sing
我相信你聽見了你的大師在歌唱
while I was sick in bed,
當我臥病在床的時候，
I'm sure that he told you everything
我確定他告訴了你一切
I must keep locked away in my head.
那些我必須鎖在腦袋裡的事情。
Your master took you travelling,
你的大師帶你去旅行了，
well at least that's what you said,
好吧，至少你是這麼說的，
And now do you come back to bring
而現在你回來是為了帶給
your prisoner wine and bread?
你的囚徒美酒與麵包嗎？`},{slug:"winter-lady",title:"Winter Lady",titleZh:"冬日女士",lyrics:`Trav'ling lady, stay awhile
旅行的女士，請留步片刻
until the night is over.
直到黑夜結束。
I'm just a station on your way,
我只是你途經的一站，
I know I'm not your lover.
我知道我不是你的愛人。

Well I lived with a child of snow
我曾與一個雪的孩子同住
when I was a soldier,
當我還是個士兵的時候，
and I fought every man for her
我為了她與每個男人爭鬥
until the nights grew colder.
直到夜晚變得更加寒冷。
She used to wear her hair like you
她過去蓄髮的樣子和你一樣
except when she was sleeping,
除了當她入睡的時候，
and then she'd weave it on a loom
那時她會在一台織布機上編織頭髮
of smoke and gold and breathing.
那是用煙霧、黃金與呼吸交織而成的。

And why are you so quiet now
而你現在為何如此安靜
standing there in the doorway?
就站在門口？
You chose your journey long before
你早在踏上這條公路之前
you came upon this highway.
就選擇了自己的旅程。
Trav'ling lady stay awhile
旅行的女士，請留步片刻
until the night is over.
直到黑夜結束。
I'm just a station on your way,
我只是你途經的一站，
I know I'm not your lover.
我知道我不是你的愛人。`},{slug:"the-stranger-song",title:"The Stranger Song",titleZh:"陌生人之歌",lyrics:`It's true that all the men you knew were dealers
確實，你認識的所有男人都是毒販
who said they were through with dealing
他們總說自己不再做這行了
Every time you gave them shelter
每當你給予他們庇護的時候
I know that kind of man
我了解那種男人
It's hard to hold the hand of anyone
很難握住任何人的手
who is reaching for the sky just to surrender,
當那隻手伸向天空只是為了投降，
who is reaching for the sky just to surrender.
當那隻手伸向天空只是為了投降。

And then sweeping up the jokers that he left behind
接著清掃他留下的鬼牌
you find he did not leave you very much
你發現他沒留給你太多東西
not even laughter
甚至沒有笑聲
Like any dealer he was watching for the card
像任何毒販一樣，他在等待那張牌
that is so high and wild
那張極高且狂野的牌
he'll never need to deal another
讓他永遠不必再發下一張牌
He was just some Joseph looking for a manger
他只是某個尋找馬槽的約瑟
He was just some Joseph looking for a manger
他只是某個尋找馬槽的約瑟

And then leaning on your window sill
然後他會靠在你的窗台上
he'll say one day you caused his will
他說有一天你讓他的意志
to weaken with your love and warmth and shelter
因你的愛、溫暖與庇護而變得軟弱
And then taking from his wallet
接著從錢包裡拿出
an old schedule of trains, he'll say
一張舊的火車時刻表，他會說
I told you when I came I was a stranger
我來的時候就告訴過你我是個陌生人
I told you when I came I was a stranger.
我來的時候就告訴過你我是個陌生人。

But now another stranger seems
但現在似乎另一個陌生人
to want you to ignore his dreams
想要你忽視他的夢想
as though they were the burden of some other
彷彿那是別人的負擔
O you've seen that man before
噢，你以前見過那個人
his golden arm dispatching cards
他那黃金般的手臂正在發牌
but now it's rusted from the elbows to the finger
但現在從手肘到手指都已生鏽
And he wants to trade the game he plays for shelter
他想用他玩的這場遊戲來換取庇護
Yes he wants to trade the game he knows for shelter.
是的，他想用他熟知的這場遊戲來換取庇護。

Ah you hate to see another tired man
啊，你討厭看到又一個疲憊的男人
lay down his hand
蓋下他的牌
like he was giving up the holy game of poker
彷彿他正放棄那神聖的撲克遊戲
And while he talks his dreams to sleep
當他在言語中哄睡他的夢想時
you notice there's a highway
你注意到有一條公路
that is curling up like smoke above his shoulder.
像煙霧般在他肩頭盤旋而上。
It is curling just like smoke above his shoulder.
它就像煙霧般在他的肩頭盤旋。

You tell him to come in sit down
你叫他進來坐下
but something makes you turn around
但有些事讓你轉過身
The door is open you can't close your shelter
門開著，你無法關上你的庇護所
You try the handle of the road
你試著握住道路的把手
It opens do not be afraid
它開啟了，不要害怕
It's you my love, you who are the stranger
是你，我的愛，你才是那個陌生人
It's you my love, you who are the stranger.
是你，我的愛，你才是那個陌生人。

Well, I've been waiting, I was sure
好吧，我一直在等待，我確信
we'd meet between the trains we're waiting for
我們會在各自等待的班次之間相遇
I think it's time to board another
我想是時候登上另一班車了
Please understand, I never had a secret chart
請理解，我從未有過秘密的地圖
to get me to the heart of this
能帶我通往這件事的核心
or any other matter
或其他任何事情
When he talks like this
當他這樣說話時
you don't know what he's after
你不知道他到底想要什麼
When he speaks like this,
當他這樣說話時，
you don't know what he's after.
你不知道他到底想要什麼。

Let's meet tomorrow if you choose
如果你願意，我們明天見吧
upon the shore, beneath the bridge
在岸邊，在那座橋下
that they are building on some endless river
在那條無盡河流上正在興建的橋下
Then he leaves the platform
然後他離開月台
for the sleeping car that's warm
走向溫暖的臥舖車廂
You realize, he's only advertising one more shelter
你意識到，他只是在推銷又一個庇護所
And it comes to you, he never was a stranger
你突然明白，他從來就不是個陌生人
And you say ok the bridge or someplace later.
而你說，好吧，橋下或之後的某個地方見。

And then sweeping up the jokers that he left behind ...
接著清掃他留下的鬼牌……
And leaning on your window sill ...
然後靠在你的窗台上……
I told you when I came I was a stranger.
我來的時候就告訴過你我是個陌生人。`},{slug:"sisters-of-mercy",title:"Sisters of Mercy",titleZh:"仁慈姐妹",lyrics:`Oh the sisters of mercy, they are not departed or gone.
噢，那些仁慈姐妹，她們並未離開或消失。
They were waiting for me when I thought that I just can't go on.
當我覺得自己無法再撐下去時，她們正在等著我。
And they brought me their comfort and later they brought me this song.
她們帶給我安慰，隨後帶給我這首歌。
Oh I hope you run into them, you who've been travelling so long.
噢，我希望你能遇見她們，你這個旅行了這麼久的人。

Yes you who must leave everything that you cannot control.
是的，你必須離開一切你無法控制的事物。
It begins with your family, but soon it comes around to your soul.
這從你的家庭開始，但很快就會轉向你的靈魂。
Well I've been where you're hanging, I think I can see how you're pinned:
我曾待過你所懸掛的地方，我想我看見你是如何被釘住的：
When you're not feeling holy, your loneliness says that you've sinned.
當你感覺不神聖時，你的孤獨感會說你犯罪了。

Well they lay down beside me, I made my confession to them.
她們躺在我身邊，我向她們傾訴我的懺悔。
They touched both my eyes and I touched the dew on their hem.
她們觸碰我的雙眼，而我觸碰她們裙襬上的露水。
If your life is a leaf that the seasons tear off and condemn
如果你的生命是一片被季節撕裂並詛咒的葉子
they will bind you with love that is graceful and green as a stem.
她們會用愛將你連結，那愛如葉柄般優雅且翠綠。

When I left they were sleeping, I hope you run into them soon.
當我離開時她們正睡著，我希望你很快能遇見她們。
Don't turn on the lights, you can read their address by the moon.
別開燈，你可以藉著月光讀出她們的地址。
And you won't make me jealous if I hear that they sweetened your night:
如果我聽說她們甜美了你的夜晚，我不會嫉妒：
We weren't lovers like that and besides it would still be all right,
我們並不是那樣的戀人，況且那樣也無妨，
We weren't lovers like that and besides it would still be all right.
我們並不是那樣的戀人，況且那樣也無妨。`},{slug:"so-long-marianne",title:"So Long, Marianne",titleZh:"再見，瑪麗安",lyrics:`Come over to the window, my little darling,
過來窗邊，我的小寶貝，
I'd like to try to read your palm.
我想試著讀讀你的手相。
I used to think I was some kind of Gypsy boy
我以前總以為自己是某種吉普賽少年
before I let you take me home.
在讓你帶我回家之前。

Now so long, Marianne, it's time that we began
那麼再見了，瑪麗安，是時候讓我們開始
to laugh and cry and cry and laugh about it all again.
再次為了這一切又笑又哭，又哭又笑。

Well you know that I love to live with you,
你知道我喜歡與你同住，
but you make me forget so very much.
但你讓我忘卻了太多的事。
I forget to pray for the angels
我忘了為天使祈禱
and then the angels forget to pray for us.
接著天使也忘了為我們祈禱。

Now so long, Marianne, it's time that we began ...
那麼再見了，瑪麗安，是時候讓我們開始……

We met when we were almost young
我們相遇在快要年輕的年歲
deep in the green lilac park.
在充滿綠意的丁香公園深處。
You held on to me like I was a crucifix,
你緊抓著我，彷彿我是一尊十字架，
as we went kneeling through the dark.
當我們跪著穿過黑暗。

Oh so long, Marianne, it's time that we began ...
噢，再見了，瑪麗安，是時候讓我們開始……

Your letters they all say that you're beside me now.
你的信裡都說你現在就在我身邊。
Then why do I feel alone?
那麼為何我感到如此孤獨？
I'm standing on a ledge and your fine spider web
我站在懸崖邊，而你那纖細的蜘蛛網
is fastening my ankle to a stone.
正將我的腳踝繫在一塊石頭上。

Now so long, Marianne, it's time that we began ...
那麼再見了，瑪麗安，是時候讓我們開始……

For now I need your hidden love.
因為現在我需要你隱藏的愛。
I'm cold as a new razor blade.
我像一片嶄新的剃刀般冰冷。
You left when I told you I was curious,
當我告訴你我很好奇時，你離開了，
I never said that I was brave.
我從未說過我很勇敢。

Oh so long, Marianne, it's time that we began ...
噢，再見了，瑪麗安，是時候讓我們開始……

Oh, you are really such a pretty one.
噢，你真是個漂亮的人。
I see you've gone and changed your name again.
我看見你又走掉並再次改名了。
And just when I climbed this whole mountainside,
而就在我爬過這整座山坡，
to wash my eyelids in the rain!
為了在雨中清洗我的眼瞼時！

Oh so long, Marianne, it's time that we began ...
噢，再見了，瑪麗安，是時候讓我們開始……`},{slug:"hey-thats-no-way-to-say-goodbye",title:"Hey, That's No Way To Say Goodbye",titleZh:"嘿，那不是告別的方式",lyrics:`I loved you in the morning, our kisses deep and warm,
我在清晨愛著你，我們的吻深沉而溫暖，
your hair upon the pillow like a sleepy golden storm,
你落在枕頭上的頭髮像一場睏倦的金色風暴，
yes, many loved before us, I know that we are not new,
是的，在我們之前有許多人愛過，我知道我們並不新奇，
in city and in forest they smiled like me and you,
在城市與森林中，他們像我和你一樣微笑，
but now it's come to distances and both of us must try,
但現在這變成了距離，我們兩人都必須試著面對，
your eyes are soft with sorrow,
你的眼中含著溫柔的憂傷，
Hey, that's no way to say goodbye.
嘿，那不是告別的方式。

I'm not looking for another as I wander in my time,
當我在我的時光中漫遊時，我並非在尋找另一個伴侶，
walk me to the corner, our steps will always rhyme
陪我走到街角，我們的步伐永遠合拍
you know my love goes with you as your love stays with me,
你知道我的愛隨你而去，如同你的愛留在我身邊，
it's just the way it changes, like the shoreline and the sea,
這只是它改變的方式，就像海岸線與大海，
but let's not talk of love or chains and things we can't untie,
但我們別談論愛或枷鎖，以及那些我們無法解開的事物，
your eyes are soft with sorrow,
你的眼中含著溫柔的憂傷，
Hey, that's no way to say goodbye.
嘿，那不是告別的方式。

I loved you in the morning, our kisses deep and warm,
我在清晨愛著你，我們的吻深沉而溫暖，
your hair upon the pillow like a sleepy golden storm,
你落在枕頭上的頭髮像一場睏倦的金色風暴，
yes many loved before us, I know that we are not new,
是的，在我們之前有許多人愛過，我知道我們並不新奇，
in city and in forest they smiled like me and you,
在城市與森林中，他們像我和你一樣微笑，
but let's not talk of love or chains and things we can't untie,
但我們別談論愛或枷鎖，以及那些我們無法解開的事物，
your eyes are soft with sorrow,
你的眼中含著溫柔的憂傷，
Hey, that's no way to say goodbye.
嘿，那不是告別的方式。`},{slug:"stories-of-the-street",title:"Stories of the Street",titleZh:"街道的故事",lyrics:`The stories of the street are mine, the Spanish voices laugh.
街道的故事屬於我，西班牙裔的聲音在笑。
The Cadillacs go creeping now through the night and the poison gas,
凱迪拉克現在正穿過黑夜與毒氣悄悄爬行，
and I lean from my window sill in this old hotel I chose,
我從這間我選的老旅館窗台探出身子，
yes one hand on my suicide, one hand on the rose.
是的，一隻手握著我的自殺念頭，一隻手握著玫瑰。

I know you've heard it's over now and war must surely come,
我知道你聽說現在一切都結束了，戰爭必將到來，
the cities they are broke in half and the middle men are gone.
城市崩毀成兩半，中間人已經消失。
But let me ask you one more time, O children of the dusk,
但讓我再問你們一次，噢，薄暮中的孩子們，
All these hunters who are shrieking now oh do they speak for us?
所有這些正在尖叫的獵人，噢，他們是代表我們在說話嗎？

And where do all these highways go, now that we are free?
現在我們自由了，所有這些公路將通往何方？
Why are the armies marching still that were coming home to me?
為什麼那些本該回到我身邊的軍隊還在行軍？
O lady with your legs so fine O stranger at your wheel,
噢，雙腿修長的女士，噢，正在駕車的陌生人，
You are locked into your suffering and your pleasures are the seal.
你被鎖在你的痛苦中，而你的享樂就是那封印。

The age of lust is giving birth, and both the parents ask
慾望的時代正在分娩，雙親都要求
the nurse to tell them fairy tales on both sides of the glass.
護士在玻璃的兩側告訴他們童話故事。
And now the infant with his cord is hauled in like a kite,
而現在，連著臍帶的嬰兒像風箏一樣被拖進來，
and one eye filled with blueprints, one eye filled with night.
一隻眼睛裝滿了藍圖，一隻眼睛裝滿了黑夜。

O come with me my little one, we will find that farm
噢，跟我來，我的小傢伙，我們會找到那座農場
and grow us grass and apples there and keep all the animals warm.
在那裡種草種蘋果，讓所有的動物都感到溫暖。
And if by chance I wake at night and I ask you who I am,
如果偶然間我在夜裡醒來，問你我是誰，
O take me to the slaughterhouse, I will wait there with the lamb.
噢，帶我去屠宰場，我會在那裡與羔羊一同等待。

With one hand on the hexagram and one hand on the girl
一隻手按著六角星，一隻手摟著女孩
I balance on a wishing well that all men call the world.
我在一口眾人稱之為世界的許願井上保持平衡。
We are so small between the stars, so large against the sky,
我們在繁星之間如此渺小，在天空映襯下如此巨大，
and lost among the subway crowds I try to catch your eye.
迷失在地下鐵的人群中，我試著吸引你的目光。`},{slug:"teachers",title:"Teachers",titleZh:"老師",lyrics:`I met a woman long ago
很久以前我遇到一個女人
her hair the black that black can go,
她的頭髮黑到了極致，
Are you a teacher of the heart?
「你是心靈的老師嗎？」
Soft she answered no.
她輕聲回答：不。

I met a girl across the sea,
我在大海另一頭遇到一個女孩，
her hair the gold that gold can be,
她的頭髮金到了極致，
Are you a teacher of the heart?
「你是心靈的老師嗎？」
Yes, but not for thee.
「是的，但不是為你而教。」

I met a man who lost his mind
我遇到一個喪失理智的人
in some lost place I had to find,
在某個我必須尋找的遺失之地，
follow me the wise man said,
「跟我來，」那智者說，
but he walked behind.
但他卻走在我後頭。

I walked into a hospital
我走進一間醫院
where none was sick and none was well,
那裡無人患病也無人康復，
when at night the nurses left
當護士在夜裡離開時
I could not walk at all.
我根本無法行走。

Morning came and then came noon,
清晨過去，中午到來，
dinner time a scalpel blade
晚餐時間，一片手術刀刃
lay beside my silver spoon.
就躺在我的銀湯匙旁。

Some girls wander by mistake
有些女孩誤打誤撞走進了
into the mess that scalpels make.
手術刀留下的混亂中。
Are you the teachers of my heart?
「你們是我心靈的老師嗎？」
We teach old hearts to break.
「我們教老舊的心靈如何破碎。」

One morning I woke up alone,
一天清晨我獨自醒來，
the hospital and the nurses gone.
醫院和護士都消失了。
Have I carved enough my Lord?
「我雕琢得夠多了嗎，主啊？」
Child, you are a bone.
「孩子，你只剩下一根骨頭。」

I ate and ate and ate,
我吃啊吃啊吃，
no I did not miss a plate, well
不，我連一個盤子都沒漏掉，那麼
How much do these suppers cost?
「這些晚餐要多少錢？」
We'll take it out in hate.
「我們會從仇恨中扣除。」

I spent my hatred everyplace,
我到處揮霍我的仇恨，
on every work on every face,
在每一件作品、每一張臉孔上，
someone gave me wishes
有人給了我一些願望
and I wished for an embrace.
而我許願想要一個擁抱。

Several girls embraced me, then
幾個女孩擁抱了我，接著
I was embraced by men,
男人也擁抱了我，
Is my passion perfect?
「我的激情完美嗎？」
No, do it once again.
「不，再做一次。」

I was handsome I was strong,
我曾英俊，我曾強壯，
I knew the words of every song.
我知道每一首歌的歌詞。
Did my singing please you?
「我的歌聲讓你喜悅嗎？」
No, the words you sang were wrong.
「不，你唱的詞是錯的。」

Who is it whom I address,
我是在對誰說話，
who takes down what I confess?
是誰在記錄我的懺悔？
Are you the teachers of my heart?
「你們是我心靈的老師嗎？」
We teach old hearts to rest.
「我們教老舊的心靈如何安息。」

Oh teachers are my lessons done?
噢，老師們，我的課程結束了嗎？
I cannot do another one.
我再也上不了另一堂課了。
They laughed and laughed and said, Well child,
她們笑了又笑，說道：好吧，孩子，
are your lessons done?
「你的課程結束了嗎？」
are your lessons done?
「你的課程結束了嗎？」
are your lessons done?
「你的課程結束了嗎？」`},{slug:"one-of-us-cannot-be-wrong",title:"One Of Us Cannot Be Wrong",titleZh:"我們之中有一個不可能錯",lyrics:`I lit a thin green candle, to make you jealous of me.
我點燃一根細長的綠蠟燭，想讓你嫉妒我。
But the room just filled up with mosquitos,
但房間裡卻填滿了蚊子，
they heard that my body was free.
牠們聽說我的身體是免費（自由）的。
Then I took the dust of a long sleepless night
然後我拾起漫長不眠之夜的塵埃
and I put it in your little shoe.
把它放進你的小鞋子裡。
And then I confess that I tortured the dress
接著我承認我折磨了那件衣服
that you wore for the world to look through.
那件你穿給世人看透的衣服。

I showed my heart to the doctor: he said I just have to quit.
我向醫生展示我的心：他說我必須戒掉。
Then he wrote himself a prescription,
接著他給自己開了一張處方箋，
and your name was mentioned in it!
而你的名字赫然出現在上面！
Then he locked himself in a library shelf
然後他把自己鎖在圖書館的書架間
with the details of our honeymoon,
帶著我們蜜月的細節，
and I hear from the nurse that he's gotten much worse
我從護士那裡聽說他病情惡化了很多
and his practice is all in a ruin.
而他的診所也毀了。

I heard of a saint who had loved you,
我聽說有一位聖徒曾愛過你，
so I studied all night in his school.
於是我在他的學校裡鑽研了一整晚。
He taught that the duty of lovers
他教導說，戀人的責任
is to tarnish the golden rule.
就是去玷汙那神聖的金律。
And just when I was sure that his teachings were pure
而就在我確信他的教義是純潔的時候
he drowned himself in the pool.
他溺死在泳池裡。
His body is gone but back here on the lawn
他的身體不見了，但在這草坪上
his spirit continues to drool.
他的魂魄還在繼續流口水。

An Eskimo showed me a movie
一個愛斯基摩人給我看了一部電影
he'd recently taken of you:
是他最近為你拍攝的：
the poor man could hardly stop shivering,
那個可憐的人幾乎無法停止發抖，
his lips and his fingers were blue.
他的嘴唇和手指都是青紫色的。
I suppose that he froze when the wind took your clothes
我想當風吹走你的衣服時，他凍僵了
and I guess he just never got warm.
而我想他之後就再也沒溫暖過。
But you stand there so nice, in your blizzard of ice,
但你就那樣優雅地站在那裡，在你的冰雪風暴中，
oh please let me come into the storm.
噢，請讓我也進入那場風暴吧。`}]},{slug:"songs-from-a-room",title:"Songs from a Room",artist:"Leonard Cohen",year:1969,color:"#7c6a56",coverImage:Kc,songs:[{slug:"bird-on-the-wire",title:"Bird on the Wire",titleZh:"電線上的鳥",lyrics:`Like a bird on the wire,
像電線上的一隻鳥，
like a drunk in a midnight choir
像午夜唱詩班裡的一個醉鬼
I have tried in my way to be free.
我以我的方式嘗試過自由。
Like a worm on a hook,
像魚鉤上的一條蟲，
like a knight from some old fashioned book
像某本老套書裡的一位騎士
I have saved all my ribbons for thee.
我將所有的絲帶都留給了你。
If I, if I have been unkind,
如果我，如果我曾經殘忍，
I hope that you can just let it go by.
我希望你能就此放過。
If I, if I have been untrue
如果我，如果我曾經不忠
I hope you know it was never to you.
我希望你知道那從來不是針對你的。
Like a baby, stillborn,
像一個死胎，
like a beast with his horn
像一頭長著角的獸
I have torn everyone who reached out for me.
我撕裂了每一個向我伸出手的人。
But I swear by this song
但我以這首歌發誓
and by all that I have done wrong
並以我所做的一切過錯發誓
I will make it all up to thee.
我將全部補償給你。
I saw a beggar leaning on his wooden crutch,
我看見一個乞丐倚靠著他的木拐，
he said to me, "You must not ask for so much."
他對我說：「你不能要求那麼多。」
And a pretty woman leaning in her darkened door,
還有一個漂亮的女人靠在她昏暗的門口，
she cried to me, "Hey, why not ask for more?"
她向我喊道：「嘿，為何不多要一些呢？」

Oh like a bird on the wire,
噢，像電線上的一隻鳥，
like a drunk in a midnight choir
像午夜唱詩班裡的一個醉鬼
I have tried in my way to be free.
我以我的方式嘗試過自由。`},{slug:"story-of-isaac",title:"Story of Isaac",titleZh:"以撒的故事",lyrics:`The door it opened slowly,
那扇門緩緩地打開，
my father he came in,
我的父親走了進來，
I was nine years old.
我那時九歲。
And he stood so tall above me,
他高高地站在我上方，
his blue eyes they were shining
他的藍眼睛閃閃發光
and his voice was very cold.
而他的聲音非常冰冷。
He said, "I've had a vision
他說：「我得到了一個異象
and you know I'm strong and holy,
你知道我既強大又神聖，
I must do what I've been told."
我必須做我被告知要做的事。」
So he started up the mountain,
於是他開始登山，
I was running, he was walking,
我在跑，他在走，
and his axe was made of gold.
而他的斧頭是用黃金打造的。
Well, the trees they got much smaller,
樹木變得越來越小，
the lake a lady's mirror,
湖水成了一面女士的鏡子，
we stopped to drink some wine.
我們停下來喝了些酒。
Then he threw the bottle over.
然後他把瓶子扔了出去。
Broke a minute later
一分鐘後破碎了
and he put his hand on mine.
他把手放在了我的手上。
Thought I saw an eagle
我以為我看見了一隻老鷹
but it might have been a vulture,
但那可能是一隻禿鷲，
I never could decide.
我一直無法判斷。
Then my father built an altar,
接著我父親建了一座祭壇，
he looked once behind his shoulder,
他回頭看了一眼，
he knew I would not hide.
他知道我不會躲藏。

You who build these altars now
你們這些現在築起祭壇的人
to sacrifice these children,
為了犧牲這些孩子，
you must not do it anymore.
你們不可以再這樣做了。
A scheme is not a vision
一個計謀不是異象
and you never have been tempted
而你從未被誘惑過
by a demon or a god.
被魔鬼或神明所誘惑。
You who stand above them now,
你們這些現在凌駕他們之上的人，
your hatchets blunt and bloody,
你們的小斧鈍了且沾血，
you were not there before,
你們以前並不在場，
when I lay upon a mountain
當我躺在山上
and my father's hand was trembling
而我父親的手在顫抖
with the beauty of the word.
因著那話語的美麗。

And if you call me brother now,
如果你現在稱我為兄弟，
forgive me if I inquire,
若我追問請原諒，
"Just according to whose plan?"
「究竟是按照誰的計畫？」
When it all comes down to dust
當一切化為塵土
I will kill you if I must,
若我不得不，我會殺了你，
I will help you if I can.
若我能夠，我會幫助你。
When it all comes down to dust
當一切化為塵土
I will help you if I must,
若我不得不，我會幫助你，
I will kill you if I can.
若我能夠，我會殺了你。
And mercy on our uniform,
願慈悲降臨我們的制服，
man of peace or man of war,
無論是和平之人還是戰爭之人，
the peacock spreads his fan.
孔雀展開了他的羽扇。`},{slug:"a-bunch-of-lonesome-heroes",title:"A Bunch of Lonesome Heroes",titleZh:"一群孤獨的英雄",lyrics:`A bunch of lonesome and very quarrelsome heroes
一群孤獨且極為好鬥的英雄
were smoking out along the open road;
在開闊的道路上抽著煙；
the night was very dark and thick between them,
夜色在他們之間濃黑稠密，
each man beneath his ordinary load.
每個人背負著各自的平凡重擔。
"I'd like to tell my story,"
「我想說出我的故事，」
said one of them so young and bold,
其中一個年輕氣盛的說道，
"I'd like to tell my story,
「我想說出我的故事，
before I turn into gold."
在我變成黃金之前。」
But no one really could hear him,
但沒有人真的能聽見他，
the night so dark and thick and green;
夜色如此黑暗、濃稠而幽綠；
well I guess that these heroes must always live there
我想這些英雄必定永遠活在那裡
where you and I have only been.
在那個你我僅僅到訪過的地方。
Put out your cigarette, my love,
掐滅你的香煙，我的愛，
you've been alone too long;
你已獨處太久；
and some of us are very hungry now
而我們之中有些人現在非常渴望
to hear what it is you've done that was so wrong.
聽聽你究竟做了什麼如此錯誤的事。

I sing this for the crickets,
我為蟋蟀唱這首歌，
I sing this for the army,
我為軍隊唱這首歌，
I sing this for your children
我為你的孩子唱這首歌
and for all who do not need me.
也為所有不需要我的人。
"I'd like to tell my story,"
「我想說出我的故事，」
said one of them so bold,
其中一個如此大膽的說道，
"Oh yes, I'd like to tell my story
「噢是的，我想說出我的故事
'cause you know I feel I'm turning into gold."
因為你知道我感覺我正在變成黃金。」`},{slug:"the-partisan",title:"The Partisan",titleZh:"游擊隊員",lyrics:`When they poured across the border
當他們湧過邊界
I was cautioned to surrender,
我被告誡要投降，
this I could not do;
這我辦不到；
I took my gun and vanished.
我拿起槍消失了。
I have changed my name so often,
我已換過太多次名字，
I've lost my wife and children
我失去了妻子和孩子
but I have many friends,
但我有許多朋友，
and some of them are with me.
其中一些就在我身邊。

An old woman gave us shelter,
一位老婦人給了我們庇護，
kept us hidden in the garret,
把我們藏在閣樓裡，
then the soldiers came;
然後士兵們來了；
she died without a whisper.
她無聲無息地死去了。

There were three of us this morning
今天早上我們有三個人
I'm the only one this evening
到了這個傍晚只剩我一個
but I must go on;
但我必須繼續前行；
the frontiers are my prison.
邊境是我的囚籠。

Oh, the wind, the wind is blowing,
噢，風，風在吹拂，
through the graves the wind is blowing,
穿過墳墓，風在吹拂，
freedom soon will come;
自由很快就會來臨；
then we'll come from the shadows.
那時我們將從陰影中走出。

Les Allemands étaient chez moi,
德軍曾在我家，
ils me dirent, resigne-toi,
他們告訴我放棄抵抗，
mais je n'ai pas pu;
但我辦不到；
j'ai repris mon arme.
我重新拿起了武器。

J'ai changé cent fois de nom,
我已換過百次名字，
j'ai perdu femme et enfants
我失去了妻子和孩子
mais j'ai tant d'amis;
但我有如此多的朋友；
j'ai la France entière.
整個法蘭西都是我的。

Un vieil homme dans un grenier
一位老人在閣樓裡
pour la nuit nous a cachés,
整夜藏匿了我們，
les Allemands l'ont pris;
德軍帶走了他；
Il est mort sans surprise.
他平靜地死去了。

Oh, the wind, the wind is blowing,
噢，風，風在吹拂，
through the graves the wind is blowing,
穿過墳墓，風在吹拂，
freedom soon will come;
自由很快就會來臨；
then we'll come from the shadows.
那時我們將從陰影中走出。`},{slug:"seems-so-long-ago-nancy",title:"Seems So Long Ago, Nancy",titleZh:"那好像是很久以前，南希",lyrics:`It seems so long ago,
那好像是很久以前的事了，
Nancy was alone,
南希獨自一人，
looking at the Late Late show
看著深夜節目
through a semi-precious stone.
透過一塊半寶石。
In the House of Honesty
在誠實之屋
her father was on trial,
她的父親正接受審判，
in the House of Mystery
在神秘之屋
there was no one at all,
根本無人，
there was no one at all.
根本無人。
It seems so long ago,
那好像是很久以前的事了，
none of us were strong;
我們沒有一個是強壯的；
Nancy wore green stockings
南希穿著綠色絲襪
and she slept with everyone.
而她與每個人同床。
She never said she'd wait for us
她從未說過她會等我們
although she was alone,
儘管她是孤身一人，
I think she fell in love for us
我想她是代我們墜入了愛河
in nineteen sixty one,
在一九六一年，
in nineteen sixty one.
在一九六一年。

It seems so long ago,
那好像是很久以前的事了，
Nancy was alone,
南希獨自一人，
a forty five beside her head,
她頭旁放著一把四五口徑手槍，
an open telephone.
還有一支未掛斷的電話。
We told her she was beautiful,
我們告訴她她很美麗，
we told her she was free
我們告訴她她是自由的
but none of us would meet her in
但我們沒有一個人願意在
the House of Mystery,
神秘之屋中與她相遇，
the House of Mystery.
神秘之屋。

And now you look around you,
而現在你環顧四周，
see her everywhere,
到處都看見她，
many use her body,
許多人使用她的身體，
many comb her hair.
許多人梳理她的頭髮。
In the hollow of the night
在夜晚的空洞中
when you are cold and numb
當你冰冷麻木
you hear her talking freely then,
你就會聽見她自由地說話，
she's happy that you've come,
她很高興你來了，
she's happy that you've come.
她很高興你來了。`},{slug:"the-old-revolution",title:"The Old Revolution",titleZh:"舊革命",lyrics:`I finally broke into the prison,
我終於闖進了監獄，
I found my place in the chain.
我找到了我在鎖鏈中的位置。
Even damnation is poisoned with rainbows,
就連詛咒也被彩虹毒化了，
all the brave young men
所有勇敢的年輕人
they're waiting now to see a signal
他們現在正在等待看到一個信號
which some killer will be lighting for pay.
那是某個受雇殺手將要點燃的。
Into this furnace I ask you now to venture,
我現在請求你冒險進入這熔爐，
you whom I cannot betray.
你這個我無法背叛的人。

I fought in the old revolution
我曾在舊革命中戰鬥
on the side of the ghost and the King.
站在幽靈和國王那邊。
Of course I was very young
當然我那時非常年輕
and I thought that we were winning;
而我以為我們正在獲勝；
I can't pretend I still feel very much like singing
我無法假裝自己還很想唱歌
as they carry the bodies away.
當他們將屍體抬走的時候。

Into this furnace I ask you now to venture...
我現在請求你冒險進入這熔爐……

Lately you've started to stutter
最近你開始結巴
as though you had nothing to say.
彷彿你無話可說。
To all of my architects let me be traitor.
對我所有的建築師讓我成為叛徒。
Now let me say I myself gave the order
現在讓我說，是我自己下令
to sleep and to search and to destroy.
去沉睡，去搜索，去摧毀。

Into this furnace I ask you now to venture...
我現在請求你冒險進入這熔爐……

Yes, you who are broken by power,
是的，你這個被權力壓垮的人，
you who are absent all day,
你這個整天缺席的人，
you who are kings for the sake of your children's story,
你這個為了孩子故事而成為國王的人，
the hand of your beggar is burdened down with money,
你乞丐的手被金錢壓得沉重，
the hand of your lover is clay.
你愛人的手是黏土。

Into this furnace I ask you now to venture...
我現在請求你冒險進入這熔爐……`},{slug:"the-butcher",title:"The Butcher",titleZh:"屠夫",lyrics:`I came upon a butcher,
我碰到了一個屠夫，
he was slaughtering a lamb,
他正在宰殺一頭羔羊，
I accused him there
我在那裡指控他
with his tortured lamb.
連同他那被折磨的羔羊。
He said, "Listen to me, child,
他說：「聽我說，孩子，
I am what I am
我就是我本來的樣子
and you, you are my only son."
而你，你是我唯一的兒子。」
Well, I found a silver needle,
我找到了一根銀針，
I put it into my arm.
我將它插入我的手臂。
It did some good,
它有些療效，
did some harm.
也造成了一些傷害。
But the nights were cold
但夜晚很寒冷
and it almost kept me warm,
而它幾乎讓我保持溫暖，
how come the night is long?
為何夜晚如此漫長？

I saw some flowers growing up
我看見一些花朵在生長
where that lamb fell down;
就在那頭羔羊倒下的地方；
was I supposed to praise my Lord,
我應該讚美我的主嗎，
make some kind of joyful sound?
發出某種歡欣的聲音嗎？
He said, "Listen, listen to me now,
他說：「聽著，現在聽我說，
I go round and round
我周而復始地轉
and you, you are my only child."
而你，你是我唯一的孩子。」

Do not leave me now,
現在不要離開我，
do not leave me now,
不要離開我，
I'm broken down
我已垮掉了
from a recent fall.
因為最近的一次跌倒。
Blood upon my body
血跡在我身上
and ice upon my soul,
冰寒在我靈魂上，
lead on, my son, it is your world.
帶路吧，我的兒子，這是你的世界。`},{slug:"you-know-who-i-am",title:"You Know Who I Am",titleZh:"你知道我是誰",lyrics:`I cannot follow you, my love,
我無法跟隨你，我的愛，
you cannot follow me.
你也無法跟隨我。
I am the distance you put between
我是你置於
all of the moments that we will be.
我們將會存在的所有時刻之間的那段距離。
You know who I am,
你知道我是誰，
you've stared at the sun,
你凝視過太陽，
well I am the one who loves
我就是那個熱愛
changing from nothing to one.
從無到有的蛻變的人。

Sometimes I need you naked,
有時我需要你赤裸，
sometimes I need you wild,
有時我需要你狂野，
I need you to carry my children in
我需要你孕育我的孩子
and I need you to kill a child.
我也需要你扼殺一個孩子。

You know who I am...
你知道我是誰……

If you should ever track me down
如果你有一天追上了我
I will surrender there
我就在那裡投降
and I will leave with you one broken man
而我會留給你一個破碎的男人
whom I will teach you to repair.
我將教你如何修復他。

You know who I am...
你知道我是誰……

I cannot follow you, my love,
我無法跟隨你，我的愛，
you cannot follow me.
你也無法跟隨我。
I am the distance you put between
我是你置於
all of the moments that we will be.
我們將會存在的所有時刻之間的那段距離。

You know who I am...
你知道我是誰……`},{slug:"lady-midnight",title:"Lady Midnight",titleZh:"午夜女士",lyrics:`I came by myself to a very crowded place;
我獨自來到一個非常擁擠的地方；
I was looking for someone who had lines in her face.
我在尋找一個臉上有皺紋的人。
I found her there but she was past all concern;
我在那裡找到了她但她已超脫了一切牽掛；
I asked her to hold me, I said, "Lady, unfold me,"
我請求她抱住我，我說：「女士，展開我，」
but she scorned me and she told me
但她鄙視我，告訴我
I was dead and I could never return.
我已死去，再也無法回頭。
Well, I argued all night like so many have before,
我整夜爭辯，就像許多人以前做過的那樣，
saying, "Whatever you give me, I seem to need so much more."
說：「無論你給我什麼，我似乎需要更多。」
Then she pointed at me where I kneeled on her floor,
接著她指向跪在她地板上的我，
she said, "Don't try to use me or slyly refuse me,
她說：「不要試圖利用我，也不要狡猾地拒絕我，
just win me or lose me,
只管贏得我或失去我，
it is this that the darkness is for."
黑暗就是為此而存在的。」

I cried, "Oh, Lady Midnight, I fear that you grow old,
我喊道：「噢，午夜女士，我擔心你會老去，
the stars eat your body and the wind makes you cold."
繁星吞噬你的身體，而風讓你寒冷。」
"If we cry now," she said, "it will just be ignored."
「如果我們現在哭泣，」她說，「只會被忽視。」
So I walked through the morning, sweet early morning,
於是我走過清晨，甜美的清晨，
I could hear my lady calling,
我能聽見我的女士在呼喚，
"You've won me, you've won me, my lord,
「你贏得了我，你贏得了我，我的主，
you've won me, you've won me, my lord,
你贏得了我，你贏得了我，我的主，
yes, you've won me, you've won me, my lord,
是的，你贏得了我，你贏得了我，我的主，
ah, you've won me, you've won me, my lord,
啊，你贏得了我，你贏得了我，我的主，
ah, you've won me, you've won me, my lord."
啊，你贏得了我，你贏得了我，我的主。」`},{slug:"tonight-will-be-fine",title:"Tonight Will Be Fine",titleZh:"今晚將會美好",lyrics:`Sometimes I find I get to thinking of the past.
有時我發現自己開始思念過去。
We swore to each other then that our love would surely last.
我們那時互相發誓，我們的愛必定長存。
You kept right on loving, I went on a fast,
你繼續愛著，而我開始了禁食，
now I am too thin and your love is too vast.
現在我太消瘦而你的愛太龐大了。
But I know from your eyes
但我從你的眼睛知道
and I know from your smile
我從你的微笑知道
that tonight will be fine,
今晚將會美好，
will be fine, will be fine, will be fine
將會美好，將會美好，將會美好
for a while.
一段時間內。

I choose the rooms that I live in with care,
我仔細選擇我居住的房間，
the windows are small and the walls almost bare,
窗戶很小，牆壁幾乎空空如也，
there's only one bed and there's only one prayer;
只有一張床，只有一個禱告；
I listen all night for your step on the stair.
我整夜聆聽你在樓梯上的腳步聲。

But I know from your eyes
但我從你的眼睛知道
and I know from your smile
我從你的微笑知道
that tonight will be fine,
今晚將會美好，
will be fine, will be fine, will be fine
將會美好，將會美好，將會美好
for a while.
一段時間內。

Oh sometimes I see her undressing for me,
噢有時我看見她為我寬衣，
she's the soft naked lady love meant her to be
她是愛意許定她成為的那個柔軟裸體的女人
and she's moving her body so brave and so free.
她的身體如此勇敢自由地移動。
If I've got to remember that's a fine memory.
如果我必須記住，那是一段美好的記憶。

And I know from her eyes
而我從她的眼睛知道
and I know from her smile
我從她的微笑知道
that tonight will be fine,
今晚將會美好，
will be fine, will be fine, will be fine
將會美好，將會美好，將會美好
for a while.
一段時間內。`}]},{slug:"modern-times",title:"Modern Times",artist:"Bob Dylan",year:2006,color:"#4a3728",coverImage:Gc,songs:[{slug:"thunder-on-the-mountain",title:"Thunder On The Mountain",titleZh:"山頂上的雷聲",lyrics:`Thunder on the mountain, and there's fires on the moon
山頂上雷聲滾滾，月亮上火焰熊熊
A ruckus in the alley and the sun will be here soon
小巷裡喧囂一片，太陽即將升起
Today's the day, gonna grab my trombone and blow
今天就是這一天，要拿起長號吹奏
Well, there's hot stuff here and it's everywhere I go
好東西就在這裡，我走到哪都是

I was thinkin' 'bout Alicia Keys, couldn't keep from crying
我在想著艾麗西亞·凱斯，忍不住哭泣
When she was born in Hell's Kitchen, I was living down the line
當她出生在地獄廚房時，我就住在附近
I'm wondering where in the world Alicia Keys could be
我在想艾麗西亞·凱斯現在身在何處
I been looking for her even clear through Tennessee
我找遍了田納西州都找不到她

Feel like my soul is beginning to expand
感覺我的靈魂開始擴展
Look into my heart and you will sort of understand
看進我的心，你會有所理解
You brought me here, now you're trying to run me away
你把我帶到這裡，現在又試著趕走我
The writing on the wall, come read it, come see what it say
牆上有字，來讀一讀，看看上面寫著什麼

Thunder on the mountain, rollin' like a drum
山頂上的雷聲，像鼓聲一樣滾滾而來
Gonna sleep over there, that's where the music coming from
要去那裡睡覺，那是音樂傳來的地方
I don't need any guide, I already know the way
我不需要嚮導，我已經認識路了
Remember this, I'm your servant both night and day
記住這個，我日夜都是你的僕人

The pistols are poppin' and the power is down
手槍在砰砰作響，電力已經斷了
I'd like to try somethin' but I'm so far from town
我想嘗試些什麼，但我離城鎮太遠
The sun keeps shinin' and the North Wind keeps picking up speed
太陽持續照耀，北風不斷加速
Gonna forget about myself for a while, gonna go out and see what others need
暫時忘記自己，出去看看別人需要什麼

I've been sittin' down studyin' the art of love
我一直坐著研究愛的藝術
I think it will fit me like a glove
我想它會像手套一樣適合我
I want some real good woman to do just what I say
我想要個好女人，按我說的去做
Everybody got to wonder what's the matter with this cruel world today
人人都得納悶，這殘酷的世界今天出了什麼問題

Thunder on the mountain rolling to the ground
山頂上的雷聲滾向地面
Gonna get up in the morning walk the hard road down
早晨起來，走那條崎嶇的路
Some sweet day I'll stand beside my king
某個美好的日子，我將站在我的王者身旁
I wouldn't betray your love or any other thing
我不會背叛你的愛，也不會背叛任何事

Gonna raise me an army, some tough sons of bitches
要為自己拉起一支軍隊，一些硬漢
I'll recruit my army from the orphanages
我要從孤兒院招募我的兵
I been to St. Herman's church, said my religious vows
我去過聖赫爾曼教堂，許下了宗教誓言
I've sucked the milk out of a thousand cows
我已從一千頭牛身上汲取了乳汁

I got the porkchops, she got the pie
我有豬排，她有餡餅
She ain't no angel and neither am I
她不是天使，我也不是
Shame on your greed, shame on your wicked schemes
你的貪婪可恥，你的邪惡圖謀可恥
I'll say this, I don't give a damn about your dreams
我要說，我根本不在乎你的夢想

Thunder on the mountain heavy as can be
山頂上的雷聲沉重無比
Mean old twister bearing down on me
惡毒的龍捲風向我壓來
All the ladies in Washington scrambling to get out of town
華盛頓的女士們爭相逃離城市
Looks like something bad gonna happen, better roll your airplane down
看來要有壞事發生，最好把你的飛機降落

Everybody going and I want to go too
人人都在離開，我也想走
Don't wanna take a chance with somebody new
不想冒險去找新人
I did all I could, I did it right there and then
我盡了所能，就在那時那地做了
I've already confessed - no need to confess again
我已經認過罪了——不需要再認一次

Gonna make a lot of money, gonna go up north
要賺大錢，要去北方
I'll plant and I'll harvest what the earth brings forth
我要耕種，收穫大地所給予的
The hammer's on the table, the pitchfork's on the shelf
錘子在桌上，乾草叉在架子上
For the love of God, you ought to take pity on yourself
看在上帝的份上，你應該對自己有點憐憫

Music and words by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"spirit-on-the-water",title:"Spirit On The Water",titleZh:"水上的靈魂",lyrics:`Spirit on the water
水上的靈魂
Darkness on the face of the deep
深淵之上是黑暗
I keep thinking about you baby
我不斷地想著你，寶貝
I can't hardly sleep
我幾乎無法入睡

I'm traveling by land
我在陸地上旅行
Traveling through the dawn of day
穿越黎明旅行
You're always on my mind
你總在我心頭
I can't stay away
我無法遠離你

I'd forgotten about you
我曾忘記了你
Then you turned up again
然後你又出現了
I always knew
我始終知道
We were meant to be more than friends
我們命中注定不只是朋友

When you're near
當你在附近
It's just as plain as it can be
這再清楚不過了
I'm wild about you, gal
我為你瘋狂，女孩
You ought to be a fool about me
你也應該為我著迷

Can't explain
無法解釋
The sources of this hidden pain
這隱藏的痛苦從何而來
You burned your way into my heart
你燃燒著進入我的心
You got the key to my brain
你握有我大腦的鑰匙

I've been trampling through mud
我一直在泥濘中跋涉
Praying to the powers above
向上蒼祈禱
I'm sweating blood
我在流血汗
You got a face that begs for love
你有一張渴望愛的臉

Life without you
沒有你的生活
Doesn't mean a thing to me
對我毫無意義
If I can't have you
如果我不能擁有你
I'll throw my love into the deep blue sea
我將把我的愛拋入深藍的大海

Sometimes I wonder
有時我不禁想
Why you can't treat me right
為何你不能好好待我
You do good all day
你白天行善
And then you do wrong all night
然後整夜做壞事

When you're with me
當你和我在一起時
I'm a thousand times happier than I could ever say
我快樂得無法言喻，千倍都不止
What does it matter
這又有什麼關係
What price I pay
不管我付出什麼代價

They brag about your sugar
他們到處誇耀你的甜蜜
Brag about it all over town
在整個城裡吹噓
Put some sugar in my bowl
在我的碗裡放些甜蜜
I feel like laying down
我感覺想躺下來

I'm as pale as a ghost
我像鬼一樣蒼白
Holding a blossom on a stem
手握著莖上的花朵
You ever seen a ghost? No
你見過鬼嗎？沒有
But you have heard of them
但你聽說過它們

I see you there
我看見你在那裡
I'm blinded by the colors I see
我被眼前的色彩弄得目眩
I take good care
我好好照顧
Of what belongs to me
屬於我的一切

I hear your name
我聽到你的名字
Ringing up and down the line
在線路上下迴響
I'm saying it plain
我直說吧
These ties are strong enough to bind
這些紐帶足夠強，足以束縛

Now your sweet voice
現在你甜美的聲音
Calls out from some old familiar shrine
從某個熟悉的古老神龕傳來
I got no choice
我別無選擇
Can't believe these things would ever fade from your mind
難以相信這些事會從你心中消逝

I could live forever
我可以永遠活著
With you perfectly
和你完美地在一起
You don't ever
你從不需要
Have to make a fuss over me
為我大驚小怪

From East to West
從東到西
Ever since the world began
自世界開始以來
I only mean it for the best
我只求最好
I want to be with you any way I can
我想以任何方式與你在一起

I been in a brawl
我捲入了一場打鬥
Now I'm feeling the wall
現在我感覺到了牆
I'm going away baby
我要離開了，寶貝
I won't be back 'til fall
我不會在秋天前回來

High on the hill
在山頂上
You can carry all my thoughts with you
你可以帶走我所有的思念
You've numbed my will
你麻痺了我的意志
This love could tear me in two
這份愛可能會把我撕裂成兩半

I wanna be with you in paradise
我想和你在天堂
And it seems so unfair
這看起來太不公平了
I can't go to paradise no more
我再也去不了天堂了
I killed a man back there
我在那裡殺了一個人

You think I'm over the hill
你以為我已過了顛峰
You think I'm past my prime
你以為我已過了黃金時期
Let me see what you got
讓我看看你有什麼本事
We can have a whoppin' good time
我們可以好好玩一場

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"rollin-and-tumblin",title:"Rollin' and Tumblin'",titleZh:"翻滾與跌宕",lyrics:`I rolled and I tumbled, I cried the whole night long
我翻滾著，哭了整整一夜
I rolled and I tumbled, I cried the whole night long
我翻滾著，哭了整整一夜
Woke up this mornin', I must have bet my money wrong
今早醒來，我一定是把錢押錯了

I got troubles so hard, I can't stand the strain
我的煩惱如此沉重，承受不住這壓力
I got troubles so hard, I can't stand the strain
我的煩惱如此沉重，承受不住這壓力
Some young lazy slut has charmed away my brains
某個懶惰的女人把我的理智都迷走了

The landscape is glowin', gleamin' in the golden light of day
大地在白晝金色的光芒中閃耀發光
The landscape is glowin', gleamin' in the golden light of day
大地在白晝金色的光芒中閃耀發光
I ain't holdin' nothin' back now, I ain't standin' in anybody's way
我現在什麼都不保留，我不擋任何人的路

Well, I did all I know just to keep you off my mind
我竭盡所知，只為不讓你佔據我心
Well, I did all I know just to keep you off my mind
我竭盡所知，只為不讓你佔據我心
Well, I paid and I paid and my sufferin' heart is always on the line
我一再地付出，我受苦的心始終岌岌可危

Well, I get up in the dawn and I go down and lay in the shade
我在黎明起身，然後去蔭涼處躺下
I get up in the dawn and I go down and lay in the shade
我在黎明起身，然後去蔭涼處躺下
I ain't nobody's house boy, I ain't nobody's well trained maid
我不是任何人的家僕，不是任何人訓練有素的女傭

I'm flat out spent, this woman been drivin' me to tears
我已精疲力竭，這個女人把我逼得淚流滿面
I'm flat out spent, this woman she been drivin' me to tears
我已精疲力竭，這個女人把我逼得淚流滿面
This woman so crazy, I swear I ain't gonna touch another one for years
這個女人太瘋狂了，我發誓幾年內不碰另一個

Well, the warm weather's comin' and the buds are on the vine
暖和的天氣來了，藤蔓上長出了嫩芽
The warm weather's comin', the buds are on the vine
暖和的天氣來了，藤蔓上長出了嫩芽
Ain't nothing more depressing than trying to satisfy this woman of mine
沒有什麼比試圖滿足我這個女人更令人沮喪的了

I got up this mornin', saw the rising sun return
今早我起床，看到了升起的太陽回來
Well, I got up this mornin', see the rising sun return
今早我起床，看到了升起的太陽回來
Sooner or later, you too shall burn
遲早，你也會燃燒

The night's filled with shadows, the years are filled with early doom
夜晚充滿了陰影，歲月充滿了早來的厄運
The night is filled with shadows, the years are filled with early doom
夜晚充滿了陰影，歲月充滿了早來的厄運
I've been conjuring up all these long dead souls from their crumblin' tombs
我一直在從崩塌的墓穴中召喚那些死去已久的靈魂

Let's forgive each other darlin', let's go down to the greenwood glen
讓我們互相原諒吧，親愛的，讓我們去綠林谷地
Let's forgive each other darlin', let's go down to the greenwood glen
讓我們互相原諒吧，親愛的，讓我們去綠林谷地
Let's put our heads together now, let's put all old matters to an end
讓我們現在一起商量，把所有舊事了結

Well, I rolled and I tumbled and I cried the whole night long
我翻滾著，哭了整整一夜
Ah, I rolled and I tumbled and I cried the whole night long
啊，我翻滾著，哭了整整一夜
I woke up this morning, I think I must be traveling on
今早我醒來，我想我必須繼續前行了

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"when-the-deal-goes-down",title:"When The Deal Goes Down",titleZh:"當事情塵埃落定",lyrics:`In the still of the night, in the world's ancient light
在夜深人靜時，在世界古老的光芒中
Where wisdom grows up in strife
智慧在紛爭中成長的地方
My bewildering brain, toils in vain
我困惑的大腦，徒勞地苦幹
Through the darkness on the pathways of life
穿越生命道路上的黑暗
Each invisible prayer is like a cloud in the air
每一個無形的祈禱都像空中的雲
Tomorrow keeps turning around
明天不斷地轉來轉去
We live and we die, we know not why
我們生，我們死，不知道為什麼
But I'll be with you when the deal goes down
但當事情塵埃落定時，我會與你同在

We eat and we drink, we feel and we think
我們吃，我們喝，我們感受，我們思考
Far down the street we stray
我們在街道遠處徘徊
I laugh and I cry and I'm haunted by
我又笑又哭，被困擾著
Things I never meant nor wished to say
那些我從未打算說也不想說的話
The midnight rain follows the train
午夜的雨隨著列車而來
We all wear the same thorny crown
我們都戴著同樣的荊棘冠
Soul to soul, our shadows roll
靈魂對靈魂，我們的影子滾動著
And I'll be with you when the deal goes down
當事情塵埃落定時，我會與你同在

Well, the moon gives light and it shines by night
月亮給予光芒，在夜晚閃耀
When I scarcely feel the glow
當我幾乎感受不到那光輝時
We learn to live and then we forgive
我們學著生活，然後我們原諒
O'r the road we're bound to go
走過我們注定要走的路
More frailer than the flowers, these precious hours
比花朵更脆弱，這些珍貴的時光
That keep us so tightly bound
把我們緊緊地聯繫在一起
You come to my eyes like a vision from the skies
你出現在我眼前，如天空中的幻象
And I'll be with you when the deal goes down
當事情塵埃落定時，我會與你同在

Well, I picked up a rose and it poked through my clothes
我拿起一朵玫瑰，它刺穿了我的衣服
I followed the winding stream
我沿著蜿蜒的溪流走
I heard the deafening noise, I felt transient joys
我聽到震耳欲聾的噪音，感受到短暫的喜悅
I know they're not what they seem
我知道它們不是表面那樣
In this earthly domain, full of disappointment and pain
在這充滿失望和痛苦的塵世
You'll never see me frown
你永遠不會見到我皺眉
I owe my heart to you, and that's sayin' it true
我的心屬於你，這是真心話
And I'll be with you when the deal goes down
當事情塵埃落定時，我會與你同在

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"someday-baby",title:"Someday Baby",titleZh:"總有一天，寶貝",lyrics:`I don't care what you do, I don't care what you say
我不在乎你做什麼，我不在乎你說什麼
I don't care where you go or how long you stay
我不在乎你去哪裡，也不在乎你待多久
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

Well you take my money and you turn it out
你拿走我的錢，把它花光
You fill me up with nothin' but self doubt
你讓我充滿了自我懷疑
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

When I was young, driving was my crave
我年輕時，開車是我的渴望
You drive me so hard, almost to the grave
你把我逼得那麼狠，幾乎逼進墳墓
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

I'm so hard pressed, my mind tied up in knots
我壓力如此之大，腦子打成了結
I keep recycling the same old thoughts
我不斷地反覆想著同樣的舊念頭
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

So many good things in life that I overlooked
生活中那麼多好事我都忽略了
I don't know what to do now, you got me so hooked
我現在不知道怎麼辦，你讓我如此上癮
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

Well, I don't want to brag, but I'm gonna wring your neck
我不想吹噓，但我要擰斷你的脖子
When all else fails I'll make it a matter of self respect
當一切都失敗時，我要把它變成自尊的問題
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

You can take your clothes put 'em in a sack
你可以把你的衣服打包進袋子
You goin' down the road, baby and you can't come back
你要上路了，寶貝，而且你不能回來
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

I tried to be friendly, I tried to be kind
我試著友好，我試著親切
I'm gonna drive you from your home, just like I was driven from mine
我要把你從你家趕出去，就像我被從我家趕出去一樣
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

Living this way ain't a natural thing to do
這樣生活不是自然的事
Why was I born to love you?
我為什麼生來就是要愛你？
Someday baby, you ain't gonna worry po' me any more
總有一天，寶貝，你不再會讓可憐的我煩惱

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"workingmans-blues-2",title:"Workingman's Blues #2",titleZh:"工人的藍調 #2",lyrics:`There's an evenin' haze settlin' over town
傍晚的霧霾籠罩著城鎮
Starlight by the edge of the creek
溪邊有星光
The buyin' power of the proletariat's gone down
無產階級的購買力下降了
Money's gettin' shallow and weak
錢變得越來越少、越來越薄弱
Well, the place I love best is a sweet memory
我最愛的地方已成了甜蜜的記憶
It's a new path that we trod
這是我們踩過的新路
They say low wages are a reality
他們說低工資是現實
If we want to compete abroad
如果我們想在海外競爭

My cruel weapons have been put on the shelf
我的殘酷武器已被放上架子
Come sit down on my knee
來坐在我的膝蓋上
You are dearer to me than myself
你比我自己對我更珍貴
As you yourself can see
正如你自己所見
While I'm listening to the steel rails hum
當我聆聽鋼軌嗡嗡作響
Got both eyes tight shut
雙眼緊閉
Just sitting here trying to keep the hunger from
就坐在這裡試著不讓飢餓
Creeping it's way into my gut
悄悄侵入我的腹中

Chorus:
副歌：
Meet me at the bottom, don't lag behind
在最底層等我，不要落後
Bring me my boots and shoes
把我的靴子和鞋子帶來
You can hang back or fight your best on the frontline
你可以退縮，或在前線盡力戰鬥
Sing a little bit of these workingman's blues
唱幾句這些工人的藍調

Well, I'm sailin' on back, ready for the long haul
我正在航行回來，準備好長途跋涉
Tossed by the winds and the seas
被風和海浪拋擲
I'll drag 'em all down to hell and I'll stand 'em at the wall
我要把他們全都拖下地獄，讓他們靠牆站著
I'll sell 'em to their enemies
我要把他們賣給他們的敵人
I'm tryin' to feed my soul with thought
我試著用思想滋養我的靈魂
Gonna sleep off the rest of the day
要睡掉這一天剩下的時間
Sometimes no one wants what we got
有時沒有人想要我們所擁有的
Sometimes you can't give it away
有時你甚至無法把它送出去

Now the place is ringed with countless foes
現在這個地方被無數敵人包圍
Some of them may be deaf and dumb
其中一些可能是聾啞人
No man, no woman knows
沒有男人，沒有女人知道
The hour that sorrow will come
悲傷將在何時降臨
In the dark I hear the night birds call
在黑暗中我聽到夜鳥的啼叫
I can feel a lover's breath
我能感受到愛人的呼吸
I sleep in the kitchen with my feet in the hall
我睡在廚房裡，腳伸進走廊
Sleep is like a temporary death
睡眠就像是暫時的死亡

(chorus)
（副歌）

Well, they burned my barn, and they stole my horse
他們燒了我的穀倉，偷了我的馬
I can't save a dime
我一分錢也存不了
I got to be careful, I don't want to be forced
我必須小心，我不想被逼迫
Into a life of continual crime
走上不斷犯罪的生活
I can see for myself that the sun is sinking
我自己就能看出太陽正在沉落
How I wish you were here to see
多希望你在這裡看見
Tell me now, am I wrong in thinking
現在告訴我，我是否想錯了
That you have forgotten me?
你是否已忘記了我？

Now they worry and they hurry and they fuss and they fret
現在他們擔心、他們匆忙、他們大驚小怪、他們煩惱
They waste your nights and days
他們浪費你的日日夜夜
Them I will forget
他們我會忘記
But you I'll remember always
但你我會永遠記得
Old memories of you to me have clung
你的舊記憶緊緊纏繞著我
You've wounded me with your words
你用你的話傷了我
Gonna have to straighten out your tongue
你得管好你的嘴
It's all true, everything you've heard
這都是真的，你聽到的一切

(chorus)
（副歌）

In you, my friend, I find no blame
在你身上，我的朋友，我沒有找到任何責怪
Wanna look in my eyes, please do
想看進我的眼睛，請便
No one can ever claim
沒有人能聲稱
That I took up arms against you
我曾舉起武器對抗你
All across the peaceful sacred fields
遍及那片和平神聖的田野
They will lay you low
他們會把你打倒
They'll break your horns and slash you with steel
他們會折斷你的角，用鋼鐵砍你
I say it so it must be so
我這樣說，所以必定如此

Now I'm down on my luck and I'm black and blue
現在我運氣不好，渾身青腫
Gonna give you another chance
給你另一次機會
I'm all alone and I'm expecting you
我完全孤身一人，等待著你
To lead me off in a cheerful dance
帶我去跳一支歡快的舞
I got a brand new suit and a brand new wife
我有一套嶄新的西裝和一位新婚妻子
I can live on rice and beans
我可以靠米飯和豆子過活
Some people never worked a day in their life
有些人一輩子沒工作過一天
Don't know what work even means
甚至不知道工作是什麼意思

(chorus)
（副歌）

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"beyond-the-horizon",title:"Beyond The Horizon",titleZh:"在地平線之外",lyrics:`Beyond the horizon, behind the sun
在地平線之外，在太陽背後
At the end of the rainbow life has only begun
在彩虹的盡頭，生命才剛剛開始
In the long hours of twilight 'neath the stardust above
在繁星塵埃下漫長的暮色時分
Beyond the horizon it is easy to love
在地平線之外，愛是如此容易

I'm touched with desire
我被渴望所觸動
What don't I do?
我什麼都願意做
Through flame and through fire
穿越火焰與烈火
I'll build my world around you
我將以你為中心建造我的世界

Beyond the horizon, in the Springtime or Fall
在地平線之外，春天或秋天
Love waits forever, for one and for all
愛永遠等待著，為了每一個人

Beyond the horizon, across the divide
在地平線之外，越過那道鴻溝
'Round about midnight, we'll be on the same side
大約午夜時分，我們將站在同一邊
Down in the valley the water runs cold
在山谷裡，水流冰冷
Beyond the horizon someone prayed for your soul
在地平線之外，有人為你的靈魂祈禱

My wretched heart is pounding
我悽苦的心在跳動
I felt an angel's kiss
我感受到了天使的吻
My memories are drowning
我的記憶在溺沒
In mortal bliss
在凡人的幸福中

Beyond the horizon, at the end of the game
在地平線之外，在遊戲的終點
Every step that you take, I'm walking the same
你每走一步，我都在走同樣的路

Beyond the horizon, the night winds blow
在地平線之外，夜風吹拂
The theme of a melody from many moons ago
一段許多月前的旋律主題
The bells of St. Mary, how sweetly they chime
聖瑪麗的鐘聲，多麼甜美地鳴響
Beyond the horizon I found you just in time
在地平線之外，我及時找到了你

It's dark and it's dreary
天色昏暗，陰沉無比
I've been pleading in vain
我一直徒勞地懇求
I'm wounded, I'm weary
我受傷了，我疲憊了
My repentance is plain
我的悔恨是顯而易見的

Beyond the horizon o'r the treacherous sea
在地平線之外，越過那險惡的大海
I still can't believe that you have set aside your love for me
我仍然無法相信你已將對我的愛放下

Beyond the horizon, 'neath crimson skies
在地平線之外，在猩紅的天空下
In the soft light of morning I'll follow you with my eyes
在柔和的晨光中，我將用眼神跟隨你
Through countries and kingdoms and temples of stone
穿越國家、王國和石砌的殿堂
Beyond the horizon right down to the bone
在地平線之外，直至靈魂深處

It's the right time of the season
這是這個季節恰當的時刻
Somebody there always cared
總有人在那裡關心著
There's always a reason
總有一個理由
Why someone's life has been spared
為什麼某人的生命得以倖存

Beyond the horizon, the sky is so blue
在地平線之外，天空那麼蔚藍
I've got more than a lifetime to live lovin' you
我有超過一生的時間來愛你

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"nettie-moore",title:"Nettie Moore",titleZh:"奈蒂·摩爾",lyrics:`Lost John's sittin' on a railroad track
失落的約翰坐在鐵路軌道上
Something's out of whack
有什麼東西出了問題
Blues this mornin' fallin' down like hail
今早的憂鬱像冰雹般落下
Gonna leave a greasy trail
要留下一道油膩的痕跡

Gonna travel the world is what I'm gonna do
我要環遊世界
Then come back and see you.
然後回來看你。
All I ever do is struggle and strive.
我所做的一切就是掙扎和奮鬥。
If I don't do anybody any harm, I might make it back home alive.
如果我不傷害任何人，我可能能活著回家。

I'm the oldest son of a crazy man,
我是一個瘋子的長子，
I'm in a cowboy band
我在一個牛仔樂隊裡
Got a pile of sins to pay for and I ain't got time to hide
有一堆罪孽要償還，我沒有時間躲避
I'd walk through a blazing fire, baby, if I knew you was on the other side
我願意穿越熊熊烈火，寶貝，如果我知道你在另一邊

Oh, I miss you, Nettie Moore
哦，我想念你，奈蒂·摩爾
And my happiness is o'r
我的幸福已經結束
Winter's gone, the river's on the rise
冬天過去了，河水在上漲
I loved you then, and ever shall
我那時愛你，將永遠如此
But there's no one left here to tell
但這裡已沒有人可以訴說
The world has gone black before my eyes
世界在我眼前變得漆黑一片

Well, the world of research has gone berserk
研究的世界已經瘋狂了
Too much paperwork
太多文書工作
Albert's in the graveyard, Frankie's raising hell
艾伯特在墓地，法蘭基在大鬧天宮
I'm beginning to believe what the scriptures tell
我開始相信聖經所說的話

I've gone where the Southern crosses The Yellow Dog
我去了南方鐵路與黃狗線交叉的地方
Get away from all these demagogues
遠離所有這些煽動者
And these bad luck women stick like glue
這些帶來壞運的女人黏著我不放
It's either one or the other or neither of the two
不是這個就是那個，或者兩個都不是

She says, "Look out, daddy, don't want you to tear your pants
她說：「小心，親愛的，不想讓你撕破褲子
You could get wrecked in this dance."
你可能在這場舞蹈中被毀掉。」
They say whisky'll kill you, but I don't think it will
他們說威士忌會殺了你，但我不這麼認為
I'm ridin' with you to the top of the hill
我要和你一起騎到山頂

Oh, I miss you, Nettie Moore
哦，我想念你，奈蒂·摩爾
And my happiness is o'r
我的幸福已經結束
Winter's gone, the river's on the rise
冬天過去了，河水在上漲
I loved you then, and ever shall
我那時愛你，將永遠如此
But there's no one left here to tell
但這裡已沒有人可以訴說
The world has gone black before my eyes
世界在我眼前變得漆黑一片

Don't know why my baby never looked so good before
不知道為什麼我的寶貝以前從未這麼好看
Don't have to wonder no more
不必再納悶了
She been cooking all day, it gonna take me all night
她整天在做飯，我要花整晚時間
I can't eat all that stuff in a single bite
我無法一口就把那些東西都吃完

The judge's coming in, everybody rise
法官進來了，大家起立
Lift up your eyes
抬起你的眼睛
You can do what you please, you don't need my advice
你可以做你喜歡的事，你不需要我的建議
'Fore you call me any dirty names, you better think twice
在你對我說任何骯髒的話之前，你最好三思

Gettin' light outside, the temperature dropped
外面漸漸亮了，氣溫下降了
I think the rain has stopped
我想雨停了
I'm gonna make you come to grips with fate
我要讓你面對命運
When I'm through with you, you'll learn to keep your business straight
等我對你處理完，你會學會好好做事

Oh, I miss you, Nettie Moore
哦，我想念你，奈蒂·摩爾
And my happiness is o'r
我的幸福已經結束
Winter's gone, the river's on the rise
冬天過去了，河水在上漲
I loved you then, and ever shall
我那時愛你，將永遠如此
But there's no one left here to tell
但這裡已沒有人可以訴說
The world has gone black before my eyes
世界在我眼前變得漆黑一片

The bright spark of the steady lights
穩定燈光的明亮火花
Has dimmed my sights
已使我的視線模糊
When you're around me all my grief gives 'way
當你在我身邊，我所有的悲傷都消散了
A life time with you is like some heavenly day
和你在一起的一生就像天堂中的日子

Everything I've ever known to be right has been proven wrong
我所知道的一切正確的事都被證明是錯的
I'll be drifting along
我將漂泊著
The woman I'm loving she rules my heart
我所愛的那個女人主宰著我的心
No knife could ever cut our love apart.
沒有任何刀能切斷我們的愛。

Today I'll stand in faith and raise
今天我將以信念站立，高舉
The voice of praise
讚美的聲音
The sun is strong, I'm standing in the light
太陽強烈，我站在光芒中
I wish to God that it were night
我向上帝祈求，願這是夜晚

Oh, I miss you, Nettie Moore
哦，我想念你，奈蒂·摩爾
And my happiness is o'r
我的幸福已經結束
Winter's gone, the river's on the rise
冬天過去了，河水在上漲
I loved you then, and ever shall
我那時愛你，將永遠如此
But there's no one here left to tell
但這裡已沒有人留下可以訴說
The world has gone black before my eyes
世界在我眼前變得漆黑一片

Music and words by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"the-levees-gonna-break",title:"The Levee's Gonna Break",titleZh:"堤壩就要決口",lyrics:`If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
Everybody saying this is a day only the Lord could make
人人都說這是只有上帝才能創造的一天

Well, I worked on the levee, Mama, both night and day
媽媽，我日夜在堤壩上工作
I worked on the levee, Mama, both night and day
媽媽，我日夜在堤壩上工作
I got to the river and I threw my clothes away
我到了河邊，把衣服扔掉了

I paid my time and now I'm good as new,
我服完了我的刑期，現在我煥然一新，
I paid my time and now I'm as good as new.
我服完了我的刑期，現在我煥然一新。
They can't take me back unless I want 'em to
除非我願意，否則他們不能把我帶回去

If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
Some of these people gonna strip you of all they can take
這些人中有些會把能拿的全都從你身上搜刮走

I can't stop here I ain't ready to unload
我不能停在這裡，我還沒準備好卸下重擔
I can't stop here I ain't ready to unload
我不能停在這裡，我還沒準備好卸下重擔
Riches and salvation can be waiting behind the next bend in the road
財富和救贖可能就在道路下一個轉彎處等待著

I picked you up from the gutter and this is the thanks I get
我把你從溝渠裡撿起來，這就是我得到的回報
I picked you up from the gutter and this is the thanks I get
我把你從溝渠裡撿起來，這就是我得到的回報
You say you want me to quit ya, I told ya, 'No, not just yet.'
你說你想讓我放棄你，我告訴你，「不，還沒到時候。」

Well, I look in your eyes, I see nobody other than me
我看進你的眼睛，我看見的不是別人，只有我自己
I look in your eyes, I see nobody other than me
我看進你的眼睛，我看見的不是別人，只有我自己
I see all that I am and all I hope to be
我看見了我所是的一切和我所希望成為的

If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
Some of these people don't know which road to take
這些人中有些不知道該走哪條路

When I'm with you, I forget I was ever blue
當我和你在一起，我忘記了我曾經有多憂鬱
When I'm with you, I forget I was ever blue
當我和你在一起，我忘記了我曾經有多憂鬱
Without you there's no meaning in anything I do
沒有你，我所做的一切都沒有意義

Some people on the road carryin' everything that they own
路上有些人帶著他們所擁有的一切
Some people on the road carryin' everything they own
路上有些人帶著他們所擁有的一切
Some people got barely enough skin to cover their bones
有些人皮包骨，皮膚幾乎蓋不住骨頭

Put on your cat clothes, mama, put on your evening dress
穿上你的貓裝，媽媽，穿上你的晚禮服
Put on your cat clothes, mama, put on your evening dress
穿上你的貓裝，媽媽，穿上你的晚禮服
Few more years of hard work, then there'll be a 1,000 years of happiness
再辛苦幾年，然後就會有一千年的幸福

If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
I tried to get you to love me, but I won't repeat that mistake
我試著讓你愛我，但我不會重蹈這個錯誤

If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
Plenty of cheap stuff out there and still around that you take
外面有很多便宜的東西，你還是去拿

I woke up this morning, butter and eggs in my bed
今早我醒來，床上有奶油和雞蛋
I woke up this morning, butter and eggs in my bed
今早我醒來，床上有奶油和雞蛋
I ain't got enough room to even raise my head.
我沒有足夠的空間抬起我的頭。

Come back, baby, say we never more will part
回來，寶貝，說我們再也不會分離
Come back, baby, say we never more will part
回來，寶貝，說我們再也不會分離
Don't be a stranger with no brain or heart
不要做一個沒有頭腦或心的陌生人

If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
If it keep on rainin', the levee gonna break
如果雨繼續下，堤壩就要決口了
Some people still sleepin', some people are wide awake
有些人還在睡覺，有些人已經完全清醒了

Music and words by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`},{slug:"aint-talkin",title:"Ain't Talkin'",titleZh:"不說話，只是走",lyrics:`As I walked out tonight in the mystic garden
當我今晚走進那神秘的花園
The wounded flowers were dangling from the vine
受傷的花朵從藤上垂掛著
I was passing by yon cool crystal fountain
我路過那邊清涼晶瑩的噴泉
Someone hit me from behind
有人從背後打了我

Ain't talkin', just walkin'
不說話，只是走
Through this weary world of woe
穿越這個充滿痛苦的疲憊世界
Heart burnin', still yearnin'
心在燃燒，仍在渴望
No one on earth would ever know
世上沒有人會知道

They say prayer has the power to heal
他們說祈禱有治癒的力量
So pray for me, mother
那就為我祈禱吧，母親
In the human heart an evil spirit can dwell
邪惡的靈魂可以棲居在人的心中
I am a-tryin' to love my neighbor and do good unto others
我正努力愛我的鄰居，對他人行善
But oh, mother, things ain't going well
但哦，母親，事情進展不順

Ain't talkin', just walkin'
不說話，只是走
I'll burn that bridge before you can cross
我會在你能過橋之前把橋燒掉
Heart burnin', still yearnin'
心在燃燒，仍在渴望
There'll be no mercy for you once you've lost
一旦你失去了，就不會有憐憫留給你

Now I'm all worn down by weeping
現在我已因哭泣而精疲力竭
My eyes are filled with tears, my lips are dry
我的眼裡充滿了淚水，我的嘴唇乾裂
If I catch my opponents ever sleeping
如果我發現我的對手在睡覺
I'll just slaughter 'em where they lie
我就把他們在原地殺掉

Ain't talkin', just walkin'
不說話，只是走
Through the world mysterious and vague
穿越這個神秘而模糊的世界
Heart burnin', still yearnin'
心在燃燒，仍在渴望
Walkin' through the cities of the plague.
走過那瘟疫之城。

Well, the whole world is filled with speculation
整個世界充滿了臆測
The whole wide world which people say is round
整個廣闊的世界，人們說它是圓的
They will tear your mind away from contemplation
他們會把你的心思從沉思中扯離
They will jump on your misfortune when you're down
當你倒下時，他們會趁虛而入

Ain't talkin', just walkin'
不說話，只是走
Eatin' hog eyed grease in a hog eyed town.
在一個骯髒的小鎮吃著油膩的食物。
Heart burnin', still yearnin'
心在燃燒，仍在渴望
Some day you'll be glad to have me around.
有一天你會慶幸我在你身邊。

They will crush you with wealth and power
他們將用財富和權力壓垮你
Every waking moment you could crack
你清醒的每一刻都可能崩潰
I'll make the most of one last extra hour
我要充分利用最後的一個小時
I'll revenge my father's death then I'll step back
我要為父親的死報仇，然後退場

Ain't talkin', just walkin'
不說話，只是走
Hand me down my walkin' cane.
把我的手杖遞給我。
Heart burnin', still yearnin'
心在燃燒，仍在渴望
Got to get you out of my miserable brain.
必須把你從我可憐的腦子裡趕出去。

All my loyal and my much-loved companions
我所有忠誠的、深愛著的夥伴們
They approve of me and share my code
他們認可我，與我共享同樣的準則
I practice a faith that's been long abandoned
我奉行一種長久以來被遺棄的信仰
Ain't no altars on this long and lonesome road
這條漫長而孤寂的路上沒有祭壇

Ain't talkin', just walkin'
不說話，只是走
My mule is sick, my horse is blind.
我的騾子病了，我的馬瞎了。
Heart burnin', still yearnin'
心在燃燒，仍在渴望
Thinkin' 'bout that gal I left behind.
思念著我留在身後的那個女孩。

Well, it's bright in the heavens and the wheels are flyin'
天上光芒萬丈，輪子飛速旋轉
Fame and honor never seem to fade
名聲與榮耀似乎永不消逝
The fire gone out but the light is never dyin'
火焰熄滅了，但光芒永遠不滅
Who says I can't get heavenly aid?
誰說我得不到上天的幫助？

Ain't talkin', just walkin'
不說話，只是走
Carryin' a dead man's shield
扛著死人的盾牌
Heart burnin', still yearnin'
心在燃燒，仍在渴望
Walkin' with a toothache in my heel
腳跟帶著牙痛般的疼痛走路

The sufferin' is unending
苦難是無盡的
Every nook and cranny has its tears
每個角落都有眼淚
I'm not playing, I'm not pretending
我不是在玩，我不是在假裝
I'm not nursin' any superfluous fears
我沒有抱持任何多餘的恐懼

Ain't talkin', just walkin'
不說話，只是走
Walkin' ever since the other night.
自那天晚上起就一直走著。
Heart burnin', still yearnin'
心在燃燒，仍在渴望
Walkin' 'til I'm clean out of sight.
走到我完全看不見為止。

As I walked out in the mystic garden
當我走進那神秘的花園
On a hot summer day, a hot summer lawn
在一個炎熱的夏日，炎熱夏日的草坪上
Excuse me, ma'am, I beg your pardon
對不起，女士，請原諒我
There's no one here, the gardener is gone
這裡沒有人，園丁已經走了

Ain't talkin', just walkin'
不說話，只是走
Up the road, around the bend.
沿路上坡，繞過彎道。
Heart burnin', still yearnin'
心在燃燒，仍在渴望
In the last outback at the world's end.
在世界盡頭的最後荒野中。

Words and music by Bob Dylan
詞曲：巴布·狄倫
Copyright 2006 Special Rider Music`}]}];function Zc(){const[k,x]=Ce.useState(()=>location.hash.replace(/^#/,""));return Ce.useEffect(()=>{const c=()=>x(location.hash.replace(/^#/,""));return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),k}function Xc(k,x){const[c,D]=Ce.useState(()=>localStorage.getItem(k)??x);return[c,T=>{localStorage.setItem(k,T),D(T)}]}function Jc(){const k=Zc(),x=window.innerWidth<700?"1":"0",[c,D]=Xc("songbook.sidebar.collapsed",x),A=c==="1";Ce.useEffect(()=>{document.body.classList.toggle("sidebar-collapsed",A)},[A]);const T=k.split("/"),te=T[0]??"",ne=T[1]??null,W=zi.find(R=>R.slug===te)??null;return S.jsxs(S.Fragment,{children:[S.jsx(Hc,{}),S.jsxs("div",{className:"app",children:[S.jsx(Vc,{albums:zi,activeSlug:(W==null?void 0:W.slug)??null,collapsed:A,onToggleCollapsed:()=>D(A?"0":"1"),onClose:()=>{window.innerWidth<=700&&D("1")}}),S.jsx("main",{id:"main",children:W?S.jsx(bc,{album:W,initialSongSlug:ne},W.slug):S.jsx($c,{albums:zi})})]})]})}Fc.createRoot(document.getElementById("root")).render(S.jsx(Ce.StrictMode,{children:S.jsx(Jc,{})}));
