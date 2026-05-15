(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))F(O);new MutationObserver(O=>{for(const N of O)if(N.type==="childList")for(const te of N.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&F(te)}).observe(document,{childList:!0,subtree:!0});function d(O){const N={};return O.integrity&&(N.integrity=O.integrity),O.referrerPolicy&&(N.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?N.credentials="include":O.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function F(O){if(O.ep)return;O.ep=!0;const N=d(O);fetch(O.href,N)}})();var Ei={exports:{}},vr={},_i={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a;function zd(){if(_a)return W;_a=1;var k=Symbol.for("react.element"),x=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),te=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),Q=Symbol.iterator;function $(c){return c===null||typeof c!="object"?null:(c=Q&&c[Q]||c["@@iterator"],typeof c=="function"?c:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,B={};function V(c,y,U){this.props=c,this.context=y,this.refs=B,this.updater=U||Y}V.prototype.isReactComponent={},V.prototype.setState=function(c,y){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,y,"setState")},V.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function me(){}me.prototype=V.prototype;function ye(c,y,U){this.props=c,this.context=y,this.refs=B,this.updater=U||Y}var Ce=ye.prototype=new me;Ce.constructor=ye,ee(Ce,V.prototype),Ce.isPureReactComponent=!0;var Ne=Array.isArray,nt=Object.prototype.hasOwnProperty,je={current:null},Ae={key:!0,ref:!0,__self:!0,__source:!0};function Xe(c,y,U){var H,Z={},X=null,re=null;if(y!=null)for(H in y.ref!==void 0&&(re=y.ref),y.key!==void 0&&(X=""+y.key),y)nt.call(y,H)&&!Ae.hasOwnProperty(H)&&(Z[H]=y[H]);var J=arguments.length-2;if(J===1)Z.children=U;else if(1<J){for(var ue=Array(J),$e=0;$e<J;$e++)ue[$e]=arguments[$e+2];Z.children=ue}if(c&&c.defaultProps)for(H in J=c.defaultProps,J)Z[H]===void 0&&(Z[H]=J[H]);return{$$typeof:k,type:c,key:X,ref:re,props:Z,_owner:je.current}}function Nt(c,y){return{$$typeof:k,type:c.type,key:y,ref:c.ref,props:c.props,_owner:c._owner}}function vt(c){return typeof c=="object"&&c!==null&&c.$$typeof===k}function Kt(c){var y={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(U){return y[U]})}var dt=/\/+/g;function Ve(c,y){return typeof c=="object"&&c!==null&&c.key!=null?Kt(""+c.key):y.toString(36)}function rt(c,y,U,H,Z){var X=typeof c;(X==="undefined"||X==="boolean")&&(c=null);var re=!1;if(c===null)re=!0;else switch(X){case"string":case"number":re=!0;break;case"object":switch(c.$$typeof){case k:case x:re=!0}}if(re)return re=c,Z=Z(re),c=H===""?"."+Ve(re,0):H,Ne(Z)?(U="",c!=null&&(U=c.replace(dt,"$&/")+"/"),rt(Z,y,U,"",function($e){return $e})):Z!=null&&(vt(Z)&&(Z=Nt(Z,U+(!Z.key||re&&re.key===Z.key?"":(""+Z.key).replace(dt,"$&/")+"/")+c)),y.push(Z)),1;if(re=0,H=H===""?".":H+":",Ne(c))for(var J=0;J<c.length;J++){X=c[J];var ue=H+Ve(X,J);re+=rt(X,y,U,ue,Z)}else if(ue=$(c),typeof ue=="function")for(c=ue.call(c),J=0;!(X=c.next()).done;)X=X.value,ue=H+Ve(X,J++),re+=rt(X,y,U,ue,Z);else if(X==="object")throw y=String(c),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return re}function ft(c,y,U){if(c==null)return c;var H=[],Z=0;return rt(c,H,"","",function(X){return y.call(U,X,Z++)}),H}function Me(c){if(c._status===-1){var y=c._result;y=y(),y.then(function(U){(c._status===0||c._status===-1)&&(c._status=1,c._result=U)},function(U){(c._status===0||c._status===-1)&&(c._status=2,c._result=U)}),c._status===-1&&(c._status=0,c._result=y)}if(c._status===1)return c._result.default;throw c._result}var de={current:null},S={transition:null},A={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:S,ReactCurrentOwner:je};function C(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:ft,forEach:function(c,y,U){ft(c,function(){y.apply(this,arguments)},U)},count:function(c){var y=0;return ft(c,function(){y++}),y},toArray:function(c){return ft(c,function(y){return y})||[]},only:function(c){if(!vt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},W.Component=V,W.Fragment=d,W.Profiler=O,W.PureComponent=ye,W.StrictMode=F,W.Suspense=D,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,W.act=C,W.cloneElement=function(c,y,U){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var H=ee({},c.props),Z=c.key,X=c.ref,re=c._owner;if(y!=null){if(y.ref!==void 0&&(X=y.ref,re=je.current),y.key!==void 0&&(Z=""+y.key),c.type&&c.type.defaultProps)var J=c.type.defaultProps;for(ue in y)nt.call(y,ue)&&!Ae.hasOwnProperty(ue)&&(H[ue]=y[ue]===void 0&&J!==void 0?J[ue]:y[ue])}var ue=arguments.length-2;if(ue===1)H.children=U;else if(1<ue){J=Array(ue);for(var $e=0;$e<ue;$e++)J[$e]=arguments[$e+2];H.children=J}return{$$typeof:k,type:c.type,key:Z,ref:X,props:H,_owner:re}},W.createContext=function(c){return c={$$typeof:te,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:N,_context:c},c.Consumer=c},W.createElement=Xe,W.createFactory=function(c){var y=Xe.bind(null,c);return y.type=c,y},W.createRef=function(){return{current:null}},W.forwardRef=function(c){return{$$typeof:ne,render:c}},W.isValidElement=vt,W.lazy=function(c){return{$$typeof:q,_payload:{_status:-1,_result:c},_init:Me}},W.memo=function(c,y){return{$$typeof:R,type:c,compare:y===void 0?null:y}},W.startTransition=function(c){var y=S.transition;S.transition={};try{c()}finally{S.transition=y}},W.unstable_act=C,W.useCallback=function(c,y){return de.current.useCallback(c,y)},W.useContext=function(c){return de.current.useContext(c)},W.useDebugValue=function(){},W.useDeferredValue=function(c){return de.current.useDeferredValue(c)},W.useEffect=function(c,y){return de.current.useEffect(c,y)},W.useId=function(){return de.current.useId()},W.useImperativeHandle=function(c,y,U){return de.current.useImperativeHandle(c,y,U)},W.useInsertionEffect=function(c,y){return de.current.useInsertionEffect(c,y)},W.useLayoutEffect=function(c,y){return de.current.useLayoutEffect(c,y)},W.useMemo=function(c,y){return de.current.useMemo(c,y)},W.useReducer=function(c,y,U){return de.current.useReducer(c,y,U)},W.useRef=function(c){return de.current.useRef(c)},W.useState=function(c){return de.current.useState(c)},W.useSyncExternalStore=function(c,y,U){return de.current.useSyncExternalStore(c,y,U)},W.useTransition=function(){return de.current.useTransition()},W.version="18.3.1",W}var Ca;function Li(){return Ca||(Ca=1,_i.exports=zd()),_i.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na;function jd(){if(Na)return vr;Na=1;var k=Li(),x=Symbol.for("react.element"),d=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,O=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function te(ne,D,R){var q,Q={},$=null,Y=null;R!==void 0&&($=""+R),D.key!==void 0&&($=""+D.key),D.ref!==void 0&&(Y=D.ref);for(q in D)F.call(D,q)&&!N.hasOwnProperty(q)&&(Q[q]=D[q]);if(ne&&ne.defaultProps)for(q in D=ne.defaultProps,D)Q[q]===void 0&&(Q[q]=D[q]);return{$$typeof:x,type:ne,key:$,ref:Y,props:Q,_owner:O.current}}return vr.Fragment=d,vr.jsx=te,vr.jsxs=te,vr}var Pa;function Rd(){return Pa||(Pa=1,Ei.exports=jd()),Ei.exports}var I=Rd(),_e=Li(),Tl={},Ci={exports:{}},He={},Ni={exports:{}},Pi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta;function Od(){return Ta||(Ta=1,(function(k){function x(S,A){var C=S.length;S.push(A);e:for(;0<C;){var c=C-1>>>1,y=S[c];if(0<O(y,A))S[c]=A,S[C]=y,C=c;else break e}}function d(S){return S.length===0?null:S[0]}function F(S){if(S.length===0)return null;var A=S[0],C=S.pop();if(C!==A){S[0]=C;e:for(var c=0,y=S.length,U=y>>>1;c<U;){var H=2*(c+1)-1,Z=S[H],X=H+1,re=S[X];if(0>O(Z,C))X<y&&0>O(re,Z)?(S[c]=re,S[X]=C,c=X):(S[c]=Z,S[H]=C,c=H);else if(X<y&&0>O(re,C))S[c]=re,S[X]=C,c=X;else break e}}return A}function O(S,A){var C=S.sortIndex-A.sortIndex;return C!==0?C:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var N=performance;k.unstable_now=function(){return N.now()}}else{var te=Date,ne=te.now();k.unstable_now=function(){return te.now()-ne}}var D=[],R=[],q=1,Q=null,$=3,Y=!1,ee=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ce(S){for(var A=d(R);A!==null;){if(A.callback===null)F(R);else if(A.startTime<=S)F(R),A.sortIndex=A.expirationTime,x(D,A);else break;A=d(R)}}function Ne(S){if(B=!1,Ce(S),!ee)if(d(D)!==null)ee=!0,Me(nt);else{var A=d(R);A!==null&&de(Ne,A.startTime-S)}}function nt(S,A){ee=!1,B&&(B=!1,me(Xe),Xe=-1),Y=!0;var C=$;try{for(Ce(A),Q=d(D);Q!==null&&(!(Q.expirationTime>A)||S&&!Kt());){var c=Q.callback;if(typeof c=="function"){Q.callback=null,$=Q.priorityLevel;var y=c(Q.expirationTime<=A);A=k.unstable_now(),typeof y=="function"?Q.callback=y:Q===d(D)&&F(D),Ce(A)}else F(D);Q=d(D)}if(Q!==null)var U=!0;else{var H=d(R);H!==null&&de(Ne,H.startTime-A),U=!1}return U}finally{Q=null,$=C,Y=!1}}var je=!1,Ae=null,Xe=-1,Nt=5,vt=-1;function Kt(){return!(k.unstable_now()-vt<Nt)}function dt(){if(Ae!==null){var S=k.unstable_now();vt=S;var A=!0;try{A=Ae(!0,S)}finally{A?Ve():(je=!1,Ae=null)}}else je=!1}var Ve;if(typeof ye=="function")Ve=function(){ye(dt)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=dt,Ve=function(){ft.postMessage(null)}}else Ve=function(){V(dt,0)};function Me(S){Ae=S,je||(je=!0,Ve())}function de(S,A){Xe=V(function(){S(k.unstable_now())},A)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(S){S.callback=null},k.unstable_continueExecution=function(){ee||Y||(ee=!0,Me(nt))},k.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Nt=0<S?Math.floor(1e3/S):5},k.unstable_getCurrentPriorityLevel=function(){return $},k.unstable_getFirstCallbackNode=function(){return d(D)},k.unstable_next=function(S){switch($){case 1:case 2:case 3:var A=3;break;default:A=$}var C=$;$=A;try{return S()}finally{$=C}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=$;$=S;try{return A()}finally{$=C}},k.unstable_scheduleCallback=function(S,A,C){var c=k.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,S){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=C+y,S={id:q++,callback:A,priorityLevel:S,startTime:C,expirationTime:y,sortIndex:-1},C>c?(S.sortIndex=C,x(R,S),d(D)===null&&S===d(R)&&(B?(me(Xe),Xe=-1):B=!0,de(Ne,C-c))):(S.sortIndex=y,x(D,S),ee||Y||(ee=!0,Me(nt))),S},k.unstable_shouldYield=Kt,k.unstable_wrapCallback=function(S){var A=$;return function(){var C=$;$=A;try{return S.apply(this,arguments)}finally{$=C}}}})(Pi)),Pi}var La;function Ad(){return La||(La=1,Ni.exports=Od()),Ni.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za;function Md(){if(za)return He;za=1;var k=Li(),x=Ad();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F=new Set,O={};function N(e,t){te(e,t),te(e+"Capture",t)}function te(e,t){for(O[e]=t,e=0;e<t.length;e++)F.add(t[e])}var ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},Q={};function $(e){return D.call(Q,e)?!0:D.call(q,e)?!1:R.test(e)?Q[e]=!0:(q[e]=!0,!1)}function Y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ee(e,t,n,r){if(t===null||typeof t>"u"||Y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ye(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,ye);V[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,ye);V[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,ye);V[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ce(e,t,n,r){var l=V.hasOwnProperty(t)?V[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ee(t,n,l,r)&&(n=null),r||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ne=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),je=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Xe=Symbol.for("react.strict_mode"),Nt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),S=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function y(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var U=!1;function H(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function Z(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ae:return"Fragment";case je:return"Portal";case Nt:return"Profiler";case Xe:return"StrictMode";case Ve:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===Xe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function J(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=ue(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=$e(e))}function zi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ue(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ji(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=J(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ri(e,t){t=t.checked,t!=null&&Ce(e,"checked",t,!1)}function zl(e,t){Ri(e,t);var n=J(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,J(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+J(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ai(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(d(92));if(Rn(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:J(n)}}function Mi(e,t){var n=J(t.value),r=J(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Di(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Di(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Ui=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Aa=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Aa.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Wi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Bi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Wi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ma=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(Ma[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,an=null,cn=null;function Hi(e){if(e=rr(e)){if(typeof Ul!="function")throw Error(d(280));var t=e.stateNode;t&&(t=$r(t),Ul(e.stateNode,e.type,t))}}function Vi(e){an?cn?cn.push(e):cn=[e]:an=e}function $i(){if(an){var e=an,t=cn;if(cn=an=null,Hi(e),t)for(e=0;e<t.length;e++)Hi(t[e])}}function Qi(e,t){return e(t)}function Yi(){}var Wl=!1;function Ki(e,t,n){if(Wl)return e(t,n);Wl=!0;try{return Qi(e,t,n)}finally{Wl=!1,(an!==null||cn!==null)&&(Yi(),$i())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=$r(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var Bl=!1;if(ne)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Bl=!1}function Fa(e,t,n,r,l,o,i,u,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(g){this.onError(g)}}var Dn=!1,Ir=null,xr=!1,Hl=null,Da={onError:function(e){Dn=!0,Ir=e}};function Ua(e,t,n,r,l,o,i,u,s){Dn=!1,Ir=null,Fa.apply(Da,arguments)}function Wa(e,t,n,r,l,o,i,u,s){if(Ua.apply(this,arguments),Dn){if(Dn){var p=Ir;Dn=!1,Ir=null}else throw Error(d(198));xr||(xr=!0,Hl=p)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xi(e){if(Zt(e)!==e)throw Error(d(188))}function Ba(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xi(l),e;if(o===r)return Xi(l),t;o=o.sibling}throw Error(d(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function Gi(e){return e=Ba(e),e!==null?qi(e):null}function qi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qi(e);if(t!==null)return t;e=e.sibling}return null}var Ji=x.unstable_scheduleCallback,bi=x.unstable_cancelCallback,Ha=x.unstable_shouldYield,Va=x.unstable_requestPaint,he=x.unstable_now,$a=x.unstable_getCurrentPriorityLevel,Vl=x.unstable_ImmediatePriority,eu=x.unstable_UserBlockingPriority,Er=x.unstable_NormalPriority,Qa=x.unstable_LowPriority,tu=x.unstable_IdlePriority,_r=null,ht=null;function Ya(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Xa,Ka=Math.log,Za=Math.LN2;function Xa(e){return e>>>=0,e===0?32:31-(Ka(e)/Za|0)|0}var Cr=64,Nr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=Un(u):(o&=i,o!==0&&(r=Un(o)))}else i=n&~l,i!==0?r=Un(i):o!==0&&(r=Un(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),l=1<<n,r|=e[n],t&=~l;return r}function Ga(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qa(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-lt(o),u=1<<i,s=l[i];s===-1?((u&n)===0||(u&r)!==0)&&(l[i]=Ga(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function Ja(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-lt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var b=0;function ru(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var lu,Kl,ou,iu,uu,Zl=!1,Tr=[],Pt=null,Tt=null,Lt=null,Bn=new Map,Hn=new Map,zt=[],ba="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Vn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ec(e,t,n,r,l){switch(t){case"focusin":return Pt=Vn(Pt,e,t,n,r,l),!0;case"dragenter":return Tt=Vn(Tt,e,t,n,r,l),!0;case"mouseover":return Lt=Vn(Lt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Bn.set(o,Vn(Bn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Hn.set(o,Vn(Hn.get(o)||null,e,t,n,r,l)),!0}return!1}function au(e){var t=Xt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zi(n),t!==null){e.blockedOn=t,uu(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=rr(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function cu(e,t,n){Lr(e)&&n.delete(t)}function tc(){Zl=!1,Pt!==null&&Lr(Pt)&&(Pt=null),Tt!==null&&Lr(Tt)&&(Tt=null),Lt!==null&&Lr(Lt)&&(Lt=null),Bn.forEach(cu),Hn.forEach(cu)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,tc)))}function Qn(e){function t(l){return $n(l,e)}if(0<Tr.length){$n(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&$n(Pt,e),Tt!==null&&$n(Tt,e),Lt!==null&&$n(Lt,e),Bn.forEach(t),Hn.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)au(n),n.blockedOn===null&&zt.shift()}var dn=Ne.ReactCurrentBatchConfig,zr=!0;function nc(e,t,n,r){var l=b,o=dn.transition;dn.transition=null;try{b=1,Xl(e,t,n,r)}finally{b=l,dn.transition=o}}function rc(e,t,n,r){var l=b,o=dn.transition;dn.transition=null;try{b=4,Xl(e,t,n,r)}finally{b=l,dn.transition=o}}function Xl(e,t,n,r){if(zr){var l=Gl(e,t,n,r);if(l===null)po(e,t,r,jr,n),su(e,r);else if(ec(l,e,t,n,r))r.stopPropagation();else if(su(e,r),t&4&&-1<ba.indexOf(e)){for(;l!==null;){var o=rr(l);if(o!==null&&lu(o),o=Gl(e,t,n,r),o===null&&po(e,t,r,jr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var jr=null;function Gl(e,t,n,r){if(jr=null,e=Dl(r),e=Xt(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jr=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($a()){case Vl:return 1;case eu:return 4;case Er:case Qa:return 16;case tu:return 536870912;default:return 16}default:return 16}}var jt=null,ql=null,Rr=null;function fu(){if(Rr)return Rr;var e,t=ql,n=t.length,r,l="value"in jt?jt.value:jt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function hu(){return!1}function Qe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ar:hu,this.isPropagationStopped=hu,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Qe(fn),Yn=C({},fn,{view:0,detail:0}),lc=Qe(Yn),bl,eo,Kn,Mr=C({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(bl=e.screenX-Kn.screenX,eo=e.screenY-Kn.screenY):eo=bl=0,Kn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),pu=Qe(Mr),oc=C({},Mr,{dataTransfer:0}),ic=Qe(oc),uc=C({},Yn,{relatedTarget:0}),to=Qe(uc),sc=C({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),ac=Qe(sc),cc=C({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dc=Qe(cc),fc=C({},fn,{data:0}),mu=Qe(fc),hc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mc[e])?!!t[e]:!1}function no(){return yc}var gc=C({},Yn,{key:function(e){if(e.key){var t=hc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vc=Qe(gc),wc=C({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=Qe(wc),kc=C({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),Sc=Qe(kc),Ic=C({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xc=Qe(Ic),Ec=C({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_c=Qe(Ec),Cc=[9,13,27,32],ro=ne&&"CompositionEvent"in window,Zn=null;ne&&"documentMode"in document&&(Zn=document.documentMode);var Nc=ne&&"TextEvent"in window&&!Zn,gu=ne&&(!ro||Zn&&8<Zn&&11>=Zn),vu=" ",wu=!1;function ku(e,t){switch(e){case"keyup":return Cc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Pc(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(wu=!0,vu);case"textInput":return e=t.data,e===vu&&wu?null:e;default:return null}}function Tc(e,t){if(hn)return e==="compositionend"||!ro&&ku(e,t)?(e=fu(),Rr=ql=jt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gu&&t.locale!=="ko"?null:t.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lc[e.type]:t==="textarea"}function xu(e,t,n,r){Vi(r),t=Br(t,"onChange"),0<t.length&&(n=new Jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Gn=null;function zc(e){Bu(e,0)}function Fr(e){var t=vn(e);if(zi(t))return e}function jc(e,t){if(e==="change")return t}var Eu=!1;if(ne){var lo;if(ne){var oo="oninput"in document;if(!oo){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),oo=typeof _u.oninput=="function"}lo=oo}else lo=!1;Eu=lo&&(!document.documentMode||9<document.documentMode)}function Cu(){Xn&&(Xn.detachEvent("onpropertychange",Nu),Gn=Xn=null)}function Nu(e){if(e.propertyName==="value"&&Fr(Gn)){var t=[];xu(t,Gn,e,Dl(e)),Ki(zc,t)}}function Rc(e,t,n){e==="focusin"?(Cu(),Xn=t,Gn=n,Xn.attachEvent("onpropertychange",Nu)):e==="focusout"&&Cu()}function Oc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(Gn)}function Ac(e,t){if(e==="click")return Fr(t)}function Mc(e,t){if(e==="input"||e==="change")return Fr(t)}function Fc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Fc;function qn(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!D.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(){for(var e=window,t=kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kr(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dc(e){var t=zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lu(n.ownerDocument.documentElement,n)){if(r!==null&&io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Tu(n,o);var i=Tu(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uc=ne&&"documentMode"in document&&11>=document.documentMode,pn=null,uo=null,Jn=null,so=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;so||pn==null||pn!==kr(r)||(r=pn,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&qn(Jn,r)||(Jn=r,r=Br(uo,"onSelect"),0<r.length&&(t=new Jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},ao={},Ru={};ne&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ur(e){if(ao[e])return ao[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ru)return ao[e]=t[n];return e}var Ou=Ur("animationend"),Au=Ur("animationiteration"),Mu=Ur("animationstart"),Fu=Ur("transitionend"),Du=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Du.set(e,t),N(t,[e])}for(var co=0;co<Uu.length;co++){var fo=Uu[co],Wc=fo.toLowerCase(),Bc=fo[0].toUpperCase()+fo.slice(1);Rt(Wc,"on"+Bc)}Rt(Ou,"onAnimationEnd"),Rt(Au,"onAnimationIteration"),Rt(Mu,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Fu,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hc=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wa(r,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,p=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;Wu(l,u,p),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,p=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;Wu(l,u,p),o=s}}}if(xr)throw e=Hl,xr=!1,Hl=null,e}function oe(e,t){var n=t[ko];n===void 0&&(n=t[ko]=new Set);var r=e+"__bubble";n.has(r)||(Hu(t,e,2,!1),n.add(r))}function ho(e,t,n){var r=0;t&&(r|=4),Hu(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Wr]){e[Wr]=!0,F.forEach(function(n){n!=="selectionchange"&&(Hc.has(n)||ho(n,!1,e),ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,ho("selectionchange",!1,t))}}function Hu(e,t,n,r){switch(du(t)){case 1:var l=nc;break;case 4:l=rc;break;default:l=Xl}n=l.bind(null,t,n,e),l=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function po(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Xt(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}Ki(function(){var p=o,g=Dl(n),v=[];e:{var m=Du.get(e);if(m!==void 0){var E=Jl,P=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":E=vc;break;case"focusin":P="focus",E=to;break;case"focusout":P="blur",E=to;break;case"beforeblur":case"afterblur":E=to;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Sc;break;case Ou:case Au:case Mu:E=ac;break;case Fu:E=xc;break;case"scroll":E=lc;break;case"wheel":E=_c;break;case"copy":case"cut":case"paste":E=dc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=yu}var T=(t&4)!==0,pe=!T&&e==="scroll",f=T?m!==null?m+"Capture":null:m;T=[];for(var a=p,h;a!==null;){h=a;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,f!==null&&(w=Mn(a,f),w!=null&&T.push(tr(a,w,h)))),pe)break;a=a.return}0<T.length&&(m=new E(m,P,null,n,g),v.push({event:m,listeners:T}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",m&&n!==Fl&&(P=n.relatedTarget||n.fromElement)&&(Xt(P)||P[wt]))break e;if((E||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,E?(P=n.relatedTarget||n.toElement,E=p,P=P?Xt(P):null,P!==null&&(pe=Zt(P),P!==pe||P.tag!==5&&P.tag!==6)&&(P=null)):(E=null,P=p),E!==P)){if(T=pu,w="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(T=yu,w="onPointerLeave",f="onPointerEnter",a="pointer"),pe=E==null?m:vn(E),h=P==null?m:vn(P),m=new T(w,a+"leave",E,n,g),m.target=pe,m.relatedTarget=h,w=null,Xt(g)===p&&(T=new T(f,a+"enter",P,n,g),T.target=h,T.relatedTarget=pe,w=T),pe=w,E&&P)t:{for(T=E,f=P,a=0,h=T;h;h=yn(h))a++;for(h=0,w=f;w;w=yn(w))h++;for(;0<a-h;)T=yn(T),a--;for(;0<h-a;)f=yn(f),h--;for(;a--;){if(T===f||f!==null&&T===f.alternate)break t;T=yn(T),f=yn(f)}T=null}else T=null;E!==null&&Vu(v,m,E,T,!1),P!==null&&pe!==null&&Vu(v,pe,P,T,!0)}}e:{if(m=p?vn(p):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var L=jc;else if(Iu(m))if(Eu)L=Mc;else{L=Oc;var z=Rc}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=Ac);if(L&&(L=L(e,p))){xu(v,L,n,g);break e}z&&z(e,m,p),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&jl(m,"number",m.value)}switch(z=p?vn(p):window,e){case"focusin":(Iu(z)||z.contentEditable==="true")&&(pn=z,uo=p,Jn=null);break;case"focusout":Jn=uo=pn=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,ju(v,n,g);break;case"selectionchange":if(Uc)break;case"keydown":case"keyup":ju(v,n,g)}var j;if(ro)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else hn?ku(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(gu&&n.locale!=="ko"&&(hn||M!=="onCompositionStart"?M==="onCompositionEnd"&&hn&&(j=fu()):(jt=g,ql="value"in jt?jt.value:jt.textContent,hn=!0)),z=Br(p,M),0<z.length&&(M=new mu(M,e,null,n,g),v.push({event:M,listeners:z}),j?M.data=j:(j=Su(n),j!==null&&(M.data=j)))),(j=Nc?Pc(e,n):Tc(e,n))&&(p=Br(p,"onBeforeInput"),0<p.length&&(g=new mu("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:p}),g.data=j))}Bu(v,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Mn(e,n),o!=null&&r.unshift(tr(e,o,l)),o=Mn(e,t),o!=null&&r.push(tr(e,o,l))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,p=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&p!==null&&(u=p,l?(s=Mn(n,o),s!=null&&i.unshift(tr(n,s,u))):l||(s=Mn(n,o),s!=null&&i.push(tr(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Vc=/\r\n?/g,$c=/\u0000|\uFFFD/g;function $u(e){return(typeof e=="string"?e:""+e).replace(Vc,`
`).replace($c,"")}function Hr(e,t,n){if(t=$u(t),$u(e)!==t&&n)throw Error(d(425))}function Vr(){}var mo=null,yo=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Qc=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(Kc)}:vo;function Kc(e){setTimeout(function(){throw e})}function wo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),pt="__reactFiber$"+gn,nr="__reactProps$"+gn,wt="__reactContainer$"+gn,ko="__reactEvents$"+gn,Zc="__reactListeners$"+gn,Xc="__reactHandles$"+gn;function Xt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yu(e);e!==null;){if(n=e[pt])return n;e=Yu(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[pt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function $r(e){return e[nr]||null}var So=[],wn=-1;function At(e){return{current:e}}function ie(e){0>wn||(e.current=So[wn],So[wn]=null,wn--)}function le(e,t){wn++,So[wn]=e.current,e.current=t}var Mt={},Pe=At(Mt),Fe=At(!1),Gt=Mt;function kn(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function De(e){return e=e.childContextTypes,e!=null}function Qr(){ie(Fe),ie(Pe)}function Ku(e,t,n){if(Pe.current!==Mt)throw Error(d(168));le(Pe,t),le(Fe,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(d(108,re(e)||"Unknown",l));return C({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Gt=Pe.current,le(Pe,e),le(Fe,Fe.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=Zu(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,ie(Fe),ie(Pe),le(Pe,e)):ie(Fe),le(Fe,n)}var kt=null,Kr=!1,Io=!1;function Gu(e){kt===null?kt=[e]:kt.push(e)}function Gc(e){Kr=!0,Gu(e)}function Ft(){if(!Io&&kt!==null){Io=!0;var e=0,t=b;try{var n=kt;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Kr=!1}catch(l){throw kt!==null&&(kt=kt.slice(e+1)),Ji(Vl,Ft),l}finally{b=t,Io=!1}}return null}var Sn=[],In=0,Zr=null,Xr=0,Ge=[],qe=0,qt=null,St=1,It="";function Jt(e,t){Sn[In++]=Xr,Sn[In++]=Zr,Zr=e,Xr=t}function qu(e,t,n){Ge[qe++]=St,Ge[qe++]=It,Ge[qe++]=qt,qt=e;var r=St;e=It;var l=32-lt(r)-1;r&=~(1<<l),n+=1;var o=32-lt(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,St=1<<32-lt(t)+l|n<<l|r,It=o+e}else St=1<<o|n<<l|r,It=e}function xo(e){e.return!==null&&(Jt(e,1),qu(e,1,0))}function Eo(e){for(;e===Zr;)Zr=Sn[--In],Sn[In]=null,Xr=Sn[--In],Sn[In]=null;for(;e===qt;)qt=Ge[--qe],Ge[qe]=null,It=Ge[--qe],Ge[qe]=null,St=Ge[--qe],Ge[qe]=null}var Ye=null,Ke=null,se=!1,it=null;function Ju(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ke=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:St,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ke=null,!0):!1;default:return!1}}function _o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(se){var t=Ke;if(t){var n=t;if(!bu(e,t)){if(_o(e))throw Error(d(418));t=Ot(n.nextSibling);var r=Ye;t&&bu(e,t)?Ju(r,n):(e.flags=e.flags&-4097|2,se=!1,Ye=e)}}else{if(_o(e))throw Error(d(418));e.flags=e.flags&-4097|2,se=!1,Ye=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Gr(e){if(e!==Ye)return!1;if(!se)return es(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=Ke)){if(_o(e))throw ts(),Error(d(418));for(;t;)Ju(e,t),t=Ot(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Ye?Ot(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=Ke;e;)e=Ot(e.nextSibling)}function xn(){Ke=Ye=null,se=!1}function No(e){it===null?it=[e]:it.push(e)}var qc=Ne.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(f,a){if(e){var h=f.deletions;h===null?(f.deletions=[a],f.flags|=16):h.push(a)}}function n(f,a){if(!e)return null;for(;a!==null;)t(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=Qt(f,a),f.index=0,f.sibling=null,f}function o(f,a,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<a?(f.flags|=2,a):h):(f.flags|=2,a)):(f.flags|=1048576,a)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,a,h,w){return a===null||a.tag!==6?(a=vi(h,f.mode,w),a.return=f,a):(a=l(a,h),a.return=f,a)}function s(f,a,h,w){var L=h.type;return L===Ae?g(f,a,h.props.children,w,h.key):a!==null&&(a.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Me&&ns(L)===a.type)?(w=l(a,h.props),w.ref=lr(f,a,h),w.return=f,w):(w=Sl(h.type,h.key,h.props,null,f.mode,w),w.ref=lr(f,a,h),w.return=f,w)}function p(f,a,h,w){return a===null||a.tag!==4||a.stateNode.containerInfo!==h.containerInfo||a.stateNode.implementation!==h.implementation?(a=wi(h,f.mode,w),a.return=f,a):(a=l(a,h.children||[]),a.return=f,a)}function g(f,a,h,w,L){return a===null||a.tag!==7?(a=un(h,f.mode,w,L),a.return=f,a):(a=l(a,h),a.return=f,a)}function v(f,a,h){if(typeof a=="string"&&a!==""||typeof a=="number")return a=vi(""+a,f.mode,h),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case nt:return h=Sl(a.type,a.key,a.props,null,f.mode,h),h.ref=lr(f,null,a),h.return=f,h;case je:return a=wi(a,f.mode,h),a.return=f,a;case Me:var w=a._init;return v(f,w(a._payload),h)}if(Rn(a)||A(a))return a=un(a,f.mode,h,null),a.return=f,a;qr(f,a)}return null}function m(f,a,h,w){var L=a!==null?a.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return L!==null?null:u(f,a,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case nt:return h.key===L?s(f,a,h,w):null;case je:return h.key===L?p(f,a,h,w):null;case Me:return L=h._init,m(f,a,L(h._payload),w)}if(Rn(h)||A(h))return L!==null?null:g(f,a,h,w,null);qr(f,h)}return null}function E(f,a,h,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(h)||null,u(a,f,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nt:return f=f.get(w.key===null?h:w.key)||null,s(a,f,w,L);case je:return f=f.get(w.key===null?h:w.key)||null,p(a,f,w,L);case Me:var z=w._init;return E(f,a,h,z(w._payload),L)}if(Rn(w)||A(w))return f=f.get(h)||null,g(a,f,w,L,null);qr(a,w)}return null}function P(f,a,h,w){for(var L=null,z=null,j=a,M=a=0,Ie=null;j!==null&&M<h.length;M++){j.index>M?(Ie=j,j=null):Ie=j.sibling;var G=m(f,j,h[M],w);if(G===null){j===null&&(j=Ie);break}e&&j&&G.alternate===null&&t(f,j),a=o(G,a,M),z===null?L=G:z.sibling=G,z=G,j=Ie}if(M===h.length)return n(f,j),se&&Jt(f,M),L;if(j===null){for(;M<h.length;M++)j=v(f,h[M],w),j!==null&&(a=o(j,a,M),z===null?L=j:z.sibling=j,z=j);return se&&Jt(f,M),L}for(j=r(f,j);M<h.length;M++)Ie=E(j,f,M,h[M],w),Ie!==null&&(e&&Ie.alternate!==null&&j.delete(Ie.key===null?M:Ie.key),a=o(Ie,a,M),z===null?L=Ie:z.sibling=Ie,z=Ie);return e&&j.forEach(function(Yt){return t(f,Yt)}),se&&Jt(f,M),L}function T(f,a,h,w){var L=A(h);if(typeof L!="function")throw Error(d(150));if(h=L.call(h),h==null)throw Error(d(151));for(var z=L=null,j=a,M=a=0,Ie=null,G=h.next();j!==null&&!G.done;M++,G=h.next()){j.index>M?(Ie=j,j=null):Ie=j.sibling;var Yt=m(f,j,G.value,w);if(Yt===null){j===null&&(j=Ie);break}e&&j&&Yt.alternate===null&&t(f,j),a=o(Yt,a,M),z===null?L=Yt:z.sibling=Yt,z=Yt,j=Ie}if(G.done)return n(f,j),se&&Jt(f,M),L;if(j===null){for(;!G.done;M++,G=h.next())G=v(f,G.value,w),G!==null&&(a=o(G,a,M),z===null?L=G:z.sibling=G,z=G);return se&&Jt(f,M),L}for(j=r(f,j);!G.done;M++,G=h.next())G=E(j,f,M,G.value,w),G!==null&&(e&&G.alternate!==null&&j.delete(G.key===null?M:G.key),a=o(G,a,M),z===null?L=G:z.sibling=G,z=G);return e&&j.forEach(function(Ld){return t(f,Ld)}),se&&Jt(f,M),L}function pe(f,a,h,w){if(typeof h=="object"&&h!==null&&h.type===Ae&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case nt:e:{for(var L=h.key,z=a;z!==null;){if(z.key===L){if(L=h.type,L===Ae){if(z.tag===7){n(f,z.sibling),a=l(z,h.props.children),a.return=f,f=a;break e}}else if(z.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Me&&ns(L)===z.type){n(f,z.sibling),a=l(z,h.props),a.ref=lr(f,z,h),a.return=f,f=a;break e}n(f,z);break}else t(f,z);z=z.sibling}h.type===Ae?(a=un(h.props.children,f.mode,w,h.key),a.return=f,f=a):(w=Sl(h.type,h.key,h.props,null,f.mode,w),w.ref=lr(f,a,h),w.return=f,f=w)}return i(f);case je:e:{for(z=h.key;a!==null;){if(a.key===z)if(a.tag===4&&a.stateNode.containerInfo===h.containerInfo&&a.stateNode.implementation===h.implementation){n(f,a.sibling),a=l(a,h.children||[]),a.return=f,f=a;break e}else{n(f,a);break}else t(f,a);a=a.sibling}a=wi(h,f.mode,w),a.return=f,f=a}return i(f);case Me:return z=h._init,pe(f,a,z(h._payload),w)}if(Rn(h))return P(f,a,h,w);if(A(h))return T(f,a,h,w);qr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,a!==null&&a.tag===6?(n(f,a.sibling),a=l(a,h),a.return=f,f=a):(n(f,a),a=vi(h,f.mode,w),a.return=f,f=a),i(f)):n(f,a)}return pe}var En=rs(!0),ls=rs(!1),Jr=At(null),br=null,_n=null,Po=null;function To(){Po=_n=br=null}function Lo(e){var t=Jr.current;ie(Jr),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){br=e,Po=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(br===null)throw Error(d(308));_n=e,br.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var bt=null;function jo(e){bt===null?bt=[e]:bt.push(e)}function os(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,jo(t)):(n.next=l.next,l.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,xt(e,n)}return l=r.interleaved,l===null?(t.next=t,jo(r)):(t.next=l.next,l.next=t),r.interleaved=t,xt(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var l=e.updateQueue;Dt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,p=s.next;s.next=null,i===null?o=p:i.next=p,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==i&&(u===null?g.firstBaseUpdate=p:u.next=p,g.lastBaseUpdate=s))}if(o!==null){var v=l.baseState;i=0,g=p=s=null,u=o;do{var m=u.lane,E=u.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var P=e,T=u;switch(m=t,E=n,T.tag){case 1:if(P=T.payload,typeof P=="function"){v=P.call(E,v,m);break e}v=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=T.payload,m=typeof P=="function"?P.call(E,v,m):P,m==null)break e;v=C({},v,m);break e;case 2:Dt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else E={eventTime:E,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(p=g=E,s=v):g=g.next=E,i|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=v),l.baseState=s,l.firstBaseUpdate=p,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=v}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(d(191,l));l.call(r)}}}var or={},mt=At(or),ir=At(or),ur=At(or);function en(e){if(e===or)throw Error(d(174));return e}function Oo(e,t){switch(le(ur,t),le(ir,e),le(mt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}ie(mt),le(mt,t)}function Nn(){ie(mt),ie(ir),ie(ur)}function as(e){en(ur.current);var t=en(mt.current),n=Ol(t,e.type);t!==n&&(le(ir,e),le(mt,n))}function Ao(e){ir.current===e&&(ie(mt),ie(ir))}var ae=At(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function Fo(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var rl=Ne.ReactCurrentDispatcher,Do=Ne.ReactCurrentBatchConfig,tn=0,ce=null,ve=null,ke=null,ll=!1,sr=!1,ar=0,Jc=0;function Te(){throw Error(d(321))}function Uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Wo(e,t,n,r,l,o){if(tn=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rl.current=e===null||e.memoizedState===null?nd:rd,e=n(r,l),sr){o=0;do{if(sr=!1,ar=0,25<=o)throw Error(d(301));o+=1,ke=ve=null,t.updateQueue=null,rl.current=ld,e=n(r,l)}while(sr)}if(rl.current=ul,t=ve!==null&&ve.next!==null,tn=0,ke=ve=ce=null,ll=!1,t)throw Error(d(300));return e}function Bo(){var e=ar!==0;return ar=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ce.memoizedState=ke=e:ke=ke.next=e,ke}function be(){if(ve===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?ce.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(d(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?ce.memoizedState=ke=e:ke=ke.next=e}return ke}function cr(e,t){return typeof t=="function"?t(e):t}function Ho(e){var t=be(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var r=ve,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,p=o;do{var g=p.lane;if((tn&g)===g)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(u=s=v,i=r):s=s.next=v,ce.lanes|=g,nn|=g}p=p.next}while(p!==null&&p!==o);s===null?i=r:s.next=u,ot(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ce.lanes|=o,nn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=be(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ot(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cs(){}function ds(e,t){var n=ce,r=be(),l=t(),o=!ot(r.memoizedState,l);if(o&&(r.memoizedState=l,Ue=!0),r=r.queue,$o(ps.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,dr(9,hs.bind(null,n,r,l,t),void 0,null),Se===null)throw Error(d(349));(tn&30)!==0||fs(n,t,l)}return l}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hs(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&ys(e)}function ps(e,t,n){return n(function(){ms(t)&&ys(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function ys(e){var t=xt(e,1);t!==null&&ct(t,e,1,-1)}function gs(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=td.bind(null,ce,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return be().memoizedState}function ol(e,t,n,r){var l=yt();ce.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var l=be();r=r===void 0?null:r;var o=void 0;if(ve!==null){var i=ve.memoizedState;if(o=i.destroy,r!==null&&Uo(r,i.deps)){l.memoizedState=dr(t,n,o,r);return}}ce.flags|=e,l.memoizedState=dr(1|t,n,o,r)}function ws(e,t){return ol(8390656,8,e,t)}function $o(e,t){return il(2048,8,e,t)}function ks(e,t){return il(4,2,e,t)}function Ss(e,t){return il(4,4,e,t)}function Is(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,Is.bind(null,t,e),n)}function Qo(){}function Es(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cs(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(ot(n,t)||(n=nu(),ce.lanes|=n,nn|=n,e.baseState=!0),t)}function bc(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{b=n,Do.transition=r}}function Ns(){return be().memoizedState}function ed(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e))Ts(t,n);else if(n=os(e,t,n,r),n!==null){var l=Oe();ct(n,e,r,l),Ls(n,t,r)}}function td(e,t,n){var r=Vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Ts(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,ot(u,i)){var s=t.interleaved;s===null?(l.next=l,jo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=os(e,t,l,r),n!==null&&(l=Oe(),ct(n,e,r,l),Ls(n,t,r))}}function Ps(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Ts(e,t){sr=ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}var ul={readContext:Je,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},nd={readContext:Je,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ol(4194308,4,Is.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return ol(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ed.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:gs,useDebugValue:Qo,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=gs(!1),t=e[0];return e=bc.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,l=yt();if(se){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Se===null)throw Error(d(349));(tn&30)!==0||fs(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ws(ps.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,hs.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=Se.identifierPrefix;if(se){var n=It,r=St;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rd={readContext:Je,useCallback:Es,useContext:Je,useEffect:$o,useImperativeHandle:xs,useInsertionEffect:ks,useLayoutEffect:Ss,useMemo:_s,useReducer:Ho,useRef:vs,useState:function(){return Ho(cr)},useDebugValue:Qo,useDeferredValue:function(e){var t=be();return Cs(t,ve.memoizedState,e)},useTransition:function(){var e=Ho(cr)[0],t=be().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ns,unstable_isNewReconciler:!1},ld={readContext:Je,useCallback:Es,useContext:Je,useEffect:$o,useImperativeHandle:xs,useInsertionEffect:ks,useLayoutEffect:Ss,useMemo:_s,useReducer:Vo,useRef:vs,useState:function(){return Vo(cr)},useDebugValue:Qo,useDeferredValue:function(e){var t=be();return ve===null?t.memoizedState=e:Cs(t,ve.memoizedState,e)},useTransition:function(){var e=Vo(cr)[0],t=be().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ns,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),l=Vt(e),o=Et(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,l),t!==null&&(ct(t,e,l,r),el(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),l=Vt(e),o=Et(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,l),t!==null&&(ct(t,e,l,r),el(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=Vt(e),l=Et(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ut(e,l,r),t!==null&&(ct(t,e,r,n),el(t,e,r))}};function zs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,o):!0}function js(e,t,n){var r=!1,l=Mt,o=t.contextType;return typeof o=="object"&&o!==null?o=Je(o):(l=De(t)?Gt:Pe.current,r=t.contextTypes,o=(r=r!=null)?kn(e,l):Mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Ko(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ro(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Je(o):(o=De(t)?Gt:Pe.current,l.context=kn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Yo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),tl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=Z(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var od=typeof WeakMap=="function"?WeakMap:Map;function Os(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,ci=r),Xo(e,t)},n}function As(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Xo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xo(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new od;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wd.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ds(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var id=Ne.ReactCurrentOwner,Ue=!1;function Re(e,t,n,r){t.child=e===null?ls(t,null,n,r):En(t,e.child,n,r)}function Us(e,t,n,r,l){n=n.render;var o=t.ref;return Cn(t,l),r=Wo(e,t,n,r,o,l),n=Bo(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(se&&n&&xo(t),t.flags|=1,Re(e,t,r,l),t.child)}function Ws(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!gi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bs(e,t,o,r,l)):(e=Sl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(i,r)&&e.ref===t.ref)return _t(e,t,l)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bs(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(qn(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,_t(e,t,l)}return Go(e,t,n,r,l)}function Hs(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ln,Ze),Ze|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Ln,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(Ln,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(Ln,Ze),Ze|=r;return Re(e,t,l,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Go(e,t,n,r,l){var o=De(n)?Gt:Pe.current;return o=kn(t,o),Cn(t,l),n=Wo(e,t,n,r,o,l),r=Bo(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(se&&r&&xo(t),t.flags|=1,Re(e,t,n,l),t.child)}function $s(e,t,n,r,l){if(De(n)){var o=!0;Yr(t)}else o=!1;if(Cn(t,l),t.stateNode===null)cl(e,t),js(t,n,r),Ko(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=Je(p):(p=De(n)?Gt:Pe.current,p=kn(t,p));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==p)&&Rs(t,i,r,p),Dt=!1;var m=t.memoizedState;i.state=m,tl(t,r,i,l),s=t.memoizedState,u!==r||m!==s||Fe.current||Dt?(typeof g=="function"&&(Yo(t,n,g,r),s=t.memoizedState),(u=Dt||zs(t,n,u,r,m,s,p))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=p,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,is(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:ut(t.type,u),i.props=p,v=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Je(s):(s=De(n)?Gt:Pe.current,s=kn(t,s));var E=n.getDerivedStateFromProps;(g=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==v||m!==s)&&Rs(t,i,r,s),Dt=!1,m=t.memoizedState,i.state=m,tl(t,r,i,l);var P=t.memoizedState;u!==v||m!==P||Fe.current||Dt?(typeof E=="function"&&(Yo(t,n,E,r),P=t.memoizedState),(p=Dt||zs(t,n,p,r,m,P,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,P,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,P,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=P),i.props=r,i.state=P,i.context=s,r=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return qo(e,t,n,r,o,l)}function qo(e,t,n,r,l,o){Vs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Xu(t,n,!1),_t(e,t,o);r=t.stateNode,id.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=En(t,e.child,null,o),t.child=En(t,null,u,o)):Re(e,t,u,o),t.memoizedState=r.state,l&&Xu(t,n,!0),t.child}function Qs(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),Oo(e,t.containerInfo)}function Ys(e,t,n,r,l){return xn(),No(l),t.flags|=256,Re(e,t,n,r),t.child}var Jo={dehydrated:null,treeContext:null,retryLane:0};function bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ks(e,t,n){var r=t.pendingProps,l=ae.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),le(ae,l&1),e===null)return Co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Il(i,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bo(n),t.memoizedState=Jo,e):ei(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return ud(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=Qt(u,o):(o=un(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?bo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Jo,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ei(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&No(r),En(t,e.child,null,n),e=ei(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(d(422))),al(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Il({mode:"visible",children:r.children},l,0,null),o=un(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,i),t.child.memoizedState=bo(i),t.memoizedState=Jo,o);if((t.mode&1)===0)return al(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(d(419)),r=Zo(o,r,void 0),al(e,t,i,r)}if(u=(i&e.childLanes)!==0,Ue||u){if(r=Se,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,xt(e,l),ct(r,e,l,-1))}return yi(),r=Zo(Error(d(421))),al(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kd.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ke=Ot(l.nextSibling),Ye=t,se=!0,it=null,e!==null&&(Ge[qe++]=St,Ge[qe++]=It,Ge[qe++]=qt,St=e.id,It=e.overflow,qt=t),t=ei(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function ti(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Xs(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=ae.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ae,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ti(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ti(t,!0,n,null,o);break;case"together":ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sd(e,t,n){switch(t.tag){case 3:Qs(t),xn();break;case 5:as(t);break;case 1:De(t.type)&&Yr(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;le(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(ae,ae.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ks(e,t,n):(le(ae,ae.current&1),e=_t(e,t,n),e!==null?e.sibling:null);le(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xs(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),le(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return _t(e,t,n)}var Gs,ni,qs,Js;Gs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ni=function(){},qs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,en(mt.current);var o=null;switch(n){case"input":l=Ll(e,l),r=Ll(e,r),o=[];break;case"select":l=C({},l,{value:void 0}),r=C({},r,{value:void 0}),o=[];break;case"textarea":l=Rl(e,l),r=Rl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}Al(n,r);var i;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(O.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var s=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&s!==u&&(s!=null||u!=null))if(p==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(O.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&oe("scroll",e),o||u===s||(o=[])):(o=o||[]).push(p,s))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},Js=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ad(e,t,n){var r=t.pendingProps;switch(Eo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return De(t.type)&&Qr(),Le(t),null;case 3:return r=t.stateNode,Nn(),ie(Fe),ie(Pe),Fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(hi(it),it=null))),ni(e,t),Le(t),null;case 5:Ao(t);var l=en(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)qs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(d(166));return Le(t),null}if(e=en(mt.current),Gr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[nr]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(l=0;l<bn.length;l++)oe(bn[l],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":ji(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":Ai(r,o),oe("invalid",r)}Al(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,u,e),l=["children",""+u]):O.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&oe("scroll",r)}switch(n){case"input":wr(r),Oi(r,o,!0);break;case"textarea":wr(r),Fi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Di(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[nr]=r,Gs(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ml(n,r),n){case"dialog":oe("cancel",e),oe("close",e),l=r;break;case"iframe":case"object":case"embed":oe("load",e),l=r;break;case"video":case"audio":for(l=0;l<bn.length;l++)oe(bn[l],e);l=r;break;case"source":oe("error",e),l=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),l=r;break;case"details":oe("toggle",e),l=r;break;case"input":ji(e,r),l=Ll(e,r),oe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=C({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Ai(e,r),l=Rl(e,r),oe("invalid",e);break;default:l=r}Al(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?Bi(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ui(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(O.hasOwnProperty(o)?s!=null&&o==="onScroll"&&oe("scroll",e):s!=null&&Ce(e,o,s,i))}switch(n){case"input":wr(e),Oi(e,r,!1);break;case"textarea":wr(e),Fi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+J(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Js(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(d(166));if(n=en(ur.current),en(mt.current),Gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Le(t),null;case 13:if(ie(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),xn(),t.flags|=98560,o=!1;else if(o=Gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[pt]=t}else xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else it!==null&&(hi(it),it=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ae.current&1)!==0?we===0&&(we=3):yi())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Nn(),ni(e,t),e===null&&er(t.stateNode.containerInfo),Le(t),null;case 10:return Lo(t.type._context),Le(t),null;case 17:return De(t.type)&&Qr(),Le(t),null;case 19:if(ie(ae),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)fr(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=nl(e),i!==null){for(t.flags|=128,fr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>zn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=nl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!se)return Le(t),null}else 2*he()-o.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ae.current,le(ae,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return mi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function cd(e,t){switch(Eo(t),t.tag){case 1:return De(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),ie(Fe),ie(Pe),Fo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return Nn(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return mi(),null;case 24:return null;default:return null}}var dl=!1,ze=!1,dd=typeof WeakSet=="function"?WeakSet:Set,_=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function ri(e,t,n){try{n()}catch(r){fe(e,t,r)}}var bs=!1;function fd(e,t){if(mo=zr,e=zu(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,p=0,g=0,v=e,m=null;t:for(;;){for(var E;v!==n||l!==0&&v.nodeType!==3||(u=i+l),v!==o||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(E=v.firstChild)!==null;)m=v,v=E;for(;;){if(v===e)break t;if(m===n&&++p===l&&(u=i),m===o&&++g===r&&(s=i),(E=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=E}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},zr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var P=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var T=P.memoizedProps,pe=P.memoizedState,f=t.stateNode,a=f.getSnapshotBeforeUpdate(t.elementType===t.type?T:ut(t.type,T),pe);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return P=bs,bs=!1,P}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ri(t,n,o)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ea(e){var t=e.alternate;t!==null&&(e.alternate=null,ea(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[nr],delete t[ko],delete t[Zc],delete t[Xc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ta(e){return e.tag===5||e.tag===3||e.tag===4}function na(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ta(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(oi(e,t,n),e=e.sibling;e!==null;)oi(e,t,n),e=e.sibling}function ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ii(e,t,n),e=e.sibling;e!==null;)ii(e,t,n),e=e.sibling}var xe=null,st=!1;function Wt(e,t,n){for(n=n.child;n!==null;)ra(e,t,n),n=n.sibling}function ra(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(_r,n)}catch{}switch(n.tag){case 5:ze||Tn(n,t);case 6:var r=xe,l=st;xe=null,Wt(e,t,n),xe=r,st=l,xe!==null&&(st?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(st?(e=xe,n=n.stateNode,e.nodeType===8?wo(e.parentNode,n):e.nodeType===1&&wo(e,n),Qn(e)):wo(xe,n.stateNode));break;case 4:r=xe,l=st,xe=n.stateNode.containerInfo,st=!0,Wt(e,t,n),xe=r,st=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&ri(n,t,i),l=l.next}while(l!==r)}Wt(e,t,n);break;case 1:if(!ze&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){fe(n,t,u)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Wt(e,t,n),ze=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function la(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dd),t.forEach(function(r){var l=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:xe=u.stateNode,st=!1;break e;case 3:xe=u.stateNode.containerInfo,st=!0;break e;case 4:xe=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(xe===null)throw Error(d(160));ra(o,i,l),xe=null,st=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(p){fe(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oa(t,e),t=t.sibling}function oa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{hr(3,e,e.return),fl(3,e)}catch(T){fe(e,e.return,T)}try{hr(5,e,e.return)}catch(T){fe(e,e.return,T)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var l=e.stateNode;try{On(l,"")}catch(T){fe(e,e.return,T)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Ri(l,o),Ml(u,i);var p=Ml(u,o);for(i=0;i<s.length;i+=2){var g=s[i],v=s[i+1];g==="style"?Bi(l,v):g==="dangerouslySetInnerHTML"?Ui(l,v):g==="children"?On(l,v):Ce(l,g,v,p)}switch(u){case"input":zl(l,o);break;case"textarea":Mi(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?sn(l,!!o.multiple,E,!1):m!==!!o.multiple&&(o.defaultValue!=null?sn(l,!!o.multiple,o.defaultValue,!0):sn(l,!!o.multiple,o.multiple?[]:"",!1))}l[nr]=o}catch(T){fe(e,e.return,T)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(d(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(T){fe(e,e.return,T)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(T){fe(e,e.return,T)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ai=he())),r&4&&la(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(p=ze)||g,at(t,e),ze=p):at(t,e),gt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&(e.mode&1)!==0)for(_=e,g=e.child;g!==null;){for(v=_=g;_!==null;){switch(m=_,E=m.child,m.tag){case 0:case 11:case 14:case 15:hr(4,m,m.return);break;case 1:Tn(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,P.props=t.memoizedProps,P.state=t.memoizedState,P.componentWillUnmount()}catch(T){fe(r,n,T)}}break;case 5:Tn(m,m.return);break;case 22:if(m.memoizedState!==null){sa(v);continue}}E!==null?(E.return=m,_=E):sa(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{l=v.stateNode,p?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Wi("display",i))}catch(T){fe(e,e.return,T)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(T){fe(e,e.return,T)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:at(t,e),gt(e),r&4&&la(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ta(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(On(l,""),r.flags&=-33);var o=na(e);ii(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=na(e);oi(e,u,i);break;default:throw Error(d(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e,t,n){_=e,ia(e)}function ia(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||dl;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||ze;u=dl;var p=ze;if(dl=i,(ze=s)&&!p)for(_=l;_!==null;)i=_,s=i.child,i.tag===22&&i.memoizedState!==null?aa(l):s!==null?(s.return=i,_=s):aa(l);for(;o!==null;)_=o,ia(o),o=o.sibling;_=l,dl=u,ze=p}ua(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,_=o):ua(e)}}function ua(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ss(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Qn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}ze||t.flags&512&&li(t)}catch(m){fe(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function sa(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function aa(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){fe(t,l,s)}}var o=t.return;try{li(t)}catch(s){fe(t,o,s)}break;case 5:var i=t.return;try{li(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var pd=Math.ceil,hl=Ne.ReactCurrentDispatcher,ui=Ne.ReactCurrentOwner,et=Ne.ReactCurrentBatchConfig,K=0,Se=null,ge=null,Ee=0,Ze=0,Ln=At(0),we=0,pr=null,nn=0,pl=0,si=0,mr=null,We=null,ai=0,zn=1/0,Ct=null,ml=!1,ci=null,Bt=null,yl=!1,Ht=null,gl=0,yr=0,di=null,vl=-1,wl=0;function Oe(){return(K&6)!==0?he():vl!==-1?vl:vl=he()}function Vt(e){return(e.mode&1)===0?1:(K&2)!==0&&Ee!==0?Ee&-Ee:qc.transition!==null?(wl===0&&(wl=nu()),wl):(e=b,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e)}function ct(e,t,n,r){if(50<yr)throw yr=0,di=null,Error(d(185));Wn(e,n,r),((K&2)===0||e!==Se)&&(e===Se&&((K&2)===0&&(pl|=n),we===4&&$t(e,Ee)),Be(e,r),n===1&&K===0&&(t.mode&1)===0&&(zn=he()+500,Kr&&Ft()))}function Be(e,t){var n=e.callbackNode;qa(e,t);var r=Pr(e,e===Se?Ee:0);if(r===0)n!==null&&bi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bi(n),t===1)e.tag===0?Gc(da.bind(null,e)):Gu(da.bind(null,e)),Yc(function(){(K&6)===0&&Ft()}),n=null;else{switch(ru(r)){case 1:n=Vl;break;case 4:n=eu;break;case 16:n=Er;break;case 536870912:n=tu;break;default:n=Er}n=wa(n,ca.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ca(e,t){if(vl=-1,wl=0,(K&6)!==0)throw Error(d(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Pr(e,e===Se?Ee:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=kl(e,r);else{t=r;var l=K;K|=2;var o=ha();(Se!==e||Ee!==t)&&(Ct=null,zn=he()+500,ln(e,t));do try{gd();break}catch(u){fa(e,u)}while(!0);To(),hl.current=o,K=l,ge!==null?t=0:(Se=null,Ee=0,t=we)}if(t!==0){if(t===2&&(l=$l(e),l!==0&&(r=l,t=fi(e,l))),t===1)throw n=pr,ln(e,0),$t(e,r),Be(e,he()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,(r&30)===0&&!md(l)&&(t=kl(e,r),t===2&&(o=$l(e),o!==0&&(r=o,t=fi(e,o))),t===1))throw n=pr,ln(e,0),$t(e,r),Be(e,he()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:on(e,We,Ct);break;case 3:if($t(e,r),(r&130023424)===r&&(t=ai+500-he(),10<t)){if(Pr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vo(on.bind(null,e,We,Ct),t);break}on(e,We,Ct);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-lt(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pd(r/1960))-r,10<r){e.timeoutHandle=vo(on.bind(null,e,We,Ct),r);break}on(e,We,Ct);break;case 5:on(e,We,Ct);break;default:throw Error(d(329))}}}return Be(e,he()),e.callbackNode===n?ca.bind(null,e):null}function fi(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=kl(e,t),e!==2&&(t=We,We=n,t!==null&&hi(t)),e}function hi(e){We===null?We=e:We.push.apply(We,e)}function md(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ot(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~si,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function da(e){if((K&6)!==0)throw Error(d(327));jn();var t=Pr(e,0);if((t&1)===0)return Be(e,he()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=fi(e,r))}if(n===1)throw n=pr,ln(e,0),$t(e,t),Be(e,he()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,We,Ct),Be(e,he()),null}function pi(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(zn=he()+500,Kr&&Ft())}}function rn(e){Ht!==null&&Ht.tag===0&&(K&6)===0&&jn();var t=K;K|=1;var n=et.transition,r=b;try{if(et.transition=null,b=1,e)return e()}finally{b=r,et.transition=n,K=t,(K&6)===0&&Ft()}}function mi(){Ze=Ln.current,ie(Ln)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qc(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Eo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:Nn(),ie(Fe),ie(Pe),Fo();break;case 5:Ao(r);break;case 4:Nn();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:Lo(r.type._context);break;case 22:case 23:mi()}n=n.return}if(Se=e,ge=e=Qt(e.current,null),Ee=Ze=t,we=0,pr=null,si=pl=nn=0,We=mr=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}bt=null}return e}function fa(e,t){do{var n=ge;try{if(To(),rl.current=ul,ll){for(var r=ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(tn=0,ke=ve=ce=null,sr=!1,ar=0,ui.current=null,n===null||n.return===null){we=1,pr=t,ge=null;break}e:{var o=e,i=n.return,u=n,s=t;if(t=Ee,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,g=u,v=g.tag;if((g.mode&1)===0&&(v===0||v===11||v===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=Fs(i);if(E!==null){E.flags&=-257,Ds(E,i,u,o,t),E.mode&1&&Ms(o,p,t),t=E,s=p;var P=t.updateQueue;if(P===null){var T=new Set;T.add(s),t.updateQueue=T}else P.add(s);break e}else{if((t&1)===0){Ms(o,p,t),yi();break e}s=Error(d(426))}}else if(se&&u.mode&1){var pe=Fs(i);if(pe!==null){(pe.flags&65536)===0&&(pe.flags|=256),Ds(pe,i,u,o,t),No(Pn(s,u));break e}}o=s=Pn(s,u),we!==4&&(we=2),mr===null?mr=[o]:mr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Os(o,s,t);us(o,f);break e;case 1:u=s;var a=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bt===null||!Bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=As(o,u,t);us(o,w);break e}}o=o.return}while(o!==null)}ma(n)}catch(L){t=L,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function ha(){var e=hl.current;return hl.current=ul,e===null?ul:e}function yi(){(we===0||we===3||we===2)&&(we=4),Se===null||(nn&268435455)===0&&(pl&268435455)===0||$t(Se,Ee)}function kl(e,t){var n=K;K|=2;var r=ha();(Se!==e||Ee!==t)&&(Ct=null,ln(e,t));do try{yd();break}catch(l){fa(e,l)}while(!0);if(To(),K=n,hl.current=r,ge!==null)throw Error(d(261));return Se=null,Ee=0,we}function yd(){for(;ge!==null;)pa(ge)}function gd(){for(;ge!==null&&!Ha();)pa(ge)}function pa(e){var t=va(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?ma(e):ge=t,ui.current=null}function ma(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ad(n,t,Ze),n!==null){ge=n;return}}else{if(n=cd(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function on(e,t,n){var r=b,l=et.transition;try{et.transition=null,b=1,vd(e,t,n,r)}finally{et.transition=l,b=r}return null}function vd(e,t,n,r){do jn();while(Ht!==null);if((K&6)!==0)throw Error(d(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ja(e,o),e===Se&&(ge=Se=null,Ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yl||(yl=!0,wa(Er,function(){return jn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=et.transition,et.transition=null;var i=b;b=1;var u=K;K|=4,ui.current=null,fd(e,n),oa(n,e),Dc(yo),zr=!!mo,yo=mo=null,e.current=n,hd(n),Va(),K=u,b=i,et.transition=o}else e.current=n;if(yl&&(yl=!1,Ht=e,gl=l),o=e.pendingLanes,o===0&&(Bt=null),Ya(n.stateNode),Be(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,e=ci,ci=null,e;return(gl&1)!==0&&e.tag!==0&&jn(),o=e.pendingLanes,(o&1)!==0?e===di?yr++:(yr=0,di=e):yr=0,Ft(),null}function jn(){if(Ht!==null){var e=ru(gl),t=et.transition,n=b;try{if(et.transition=null,b=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,gl=0,(K&6)!==0)throw Error(d(331));var l=K;for(K|=4,_=e.current;_!==null;){var o=_,i=o.child;if((_.flags&16)!==0){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var p=u[s];for(_=p;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:hr(8,g,o)}var v=g.child;if(v!==null)v.return=g,_=v;else for(;_!==null;){g=_;var m=g.sibling,E=g.return;if(ea(g),g===p){_=null;break}if(m!==null){m.return=E,_=m;break}_=E}}}var P=o.alternate;if(P!==null){var T=P.child;if(T!==null){P.child=null;do{var pe=T.sibling;T.sibling=null,T=pe}while(T!==null)}}_=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,_=i;else e:for(;_!==null;){if(o=_,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var a=e.current;for(_=a;_!==null;){i=_;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,_=h;else e:for(i=a;_!==null;){if(u=_,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:fl(9,u)}}catch(L){fe(u,u.return,L)}if(u===i){_=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,_=w;break e}_=u.return}}if(K=l,Ft(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(_r,e)}catch{}r=!0}return r}finally{b=n,et.transition=t}}return!1}function ya(e,t,n){t=Pn(n,t),t=Os(e,t,1),e=Ut(e,t,1),t=Oe(),e!==null&&(Wn(e,1,t),Be(e,t))}function fe(e,t,n){if(e.tag===3)ya(e,e,n);else for(;t!==null;){if(t.tag===3){ya(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Pn(n,e),e=As(t,e,1),t=Ut(t,e,1),e=Oe(),t!==null&&(Wn(t,1,e),Be(t,e));break}}t=t.return}}function wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>he()-ai?ln(e,0):si|=n),Be(e,t)}function ga(e,t){t===0&&((e.mode&1)===0?t=1:(t=Nr,Nr<<=1,(Nr&130023424)===0&&(Nr=4194304)));var n=Oe();e=xt(e,t),e!==null&&(Wn(e,t,n),Be(e,n))}function kd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ga(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}r!==null&&r.delete(t),ga(e,n)}var va;va=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,sd(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,se&&(t.flags&1048576)!==0&&qu(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cl(e,t),e=t.pendingProps;var l=kn(t,Pe.current);Cn(t,n),l=Wo(null,t,r,e,l,n);var o=Bo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,Yr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ro(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,Ko(t,r,e,n),t=qo(null,t,r,!0,o,n)):(t.tag=0,se&&o&&xo(t),Re(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=xd(r),e=ut(r,e),l){case 0:t=Go(null,t,r,e,n);break e;case 1:t=$s(null,t,r,e,n);break e;case 11:t=Us(null,t,r,e,n);break e;case 14:t=Ws(null,t,r,ut(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ut(r,l),Go(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ut(r,l),$s(e,t,r,l,n);case 3:e:{if(Qs(t),e===null)throw Error(d(387));r=t.pendingProps,o=t.memoizedState,l=o.element,is(e,t),tl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Pn(Error(d(423)),t),t=Ys(e,t,r,n,l);break e}else if(r!==l){l=Pn(Error(d(424)),t),t=Ys(e,t,r,n,l);break e}else for(Ke=Ot(t.stateNode.containerInfo.firstChild),Ye=t,se=!0,it=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===l){t=_t(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return as(t),e===null&&Co(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(t.flags|=32),Vs(e,t),Re(e,t,i,n),t.child;case 6:return e===null&&Co(t),null;case 13:return Ks(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ut(r,l),Us(e,t,r,l,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,le(Jr,r._currentValue),r._currentValue=i,o!==null)if(ot(o.value,i)){if(o.children===l.children&&!Fe.current){t=_t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Et(-1,n&-n),s.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?s.next=s:(s.next=g.next,g.next=s),p.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),zo(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(d(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Re(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Cn(t,n),l=Je(l),r=r(l),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,l=ut(r,t.pendingProps),l=ut(r.type,l),Ws(e,t,r,l,n);case 15:return Bs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ut(r,l),cl(e,t),t.tag=1,De(r)?(e=!0,Yr(t)):e=!1,Cn(t,n),js(t,r,l),Ko(t,r,l,n),qo(null,t,r,!0,e,n);case 19:return Xs(e,t,n);case 22:return Hs(e,t,n)}throw Error(d(156,t.tag))};function wa(e,t){return Ji(e,t)}function Id(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Id(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xd(e){if(typeof e=="function")return gi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ae:return un(n.children,l,o,t);case Xe:i=8,l|=8;break;case Nt:return e=tt(12,n,t,l|2),e.elementType=Nt,e.lanes=o,e;case Ve:return e=tt(13,n,t,l),e.elementType=Ve,e.lanes=o,e;case rt:return e=tt(19,n,t,l),e.elementType=rt,e.lanes=o,e;case de:return Il(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:i=10;break e;case Kt:i=9;break e;case dt:i=11;break e;case ft:i=14;break e;case Me:i=16,r=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=tt(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Il(e,t,n,r){return e=tt(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function vi(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function wi(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ed(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ki(e,t,n,r,l,o,i,u,s){return e=new Ed(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(o),e}function _d(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ka(e){if(!e)return Mt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if(De(n))return Zu(e,n,t)}return t}function Sa(e,t,n,r,l,o,i,u,s){return e=ki(n,r,!0,e,l,o,i,u,s),e.context=ka(null),n=e.current,r=Oe(),l=Vt(n),o=Et(r,l),o.callback=t??null,Ut(n,o,l),e.current.lanes=l,Wn(e,l,r),Be(e,r),e}function xl(e,t,n,r){var l=t.current,o=Oe(),i=Vt(l);return n=ka(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(l,t,i),e!==null&&(ct(e,l,i,o),el(e,l,i)),i}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ia(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Si(e,t){Ia(e,t),(e=e.alternate)&&Ia(e,t)}function Cd(){return null}var xa=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ii(e){this._internalRoot=e}_l.prototype.render=Ii.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));xl(e,t,null,null)},_l.prototype.unmount=Ii.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){xl(null,e,null,null)}),t[wt]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&au(e)}};function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ea(){}function Nd(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var p=El(i);o.call(p)}}var i=Sa(t,r,e,0,null,!1,!1,"",Ea);return e._reactRootContainer=i,e[wt]=i.current,er(e.nodeType===8?e.parentNode:e),rn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=El(s);u.call(p)}}var s=ki(e,0,!1,null,null,!1,!1,"",Ea);return e._reactRootContainer=s,e[wt]=s.current,er(e.nodeType===8?e.parentNode:e),rn(function(){xl(t,s,n,r)}),s}function Nl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=El(i);u.call(s)}}xl(t,i,e,l)}else i=Nd(n,t,e,l,r);return El(i)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Yl(t,n|1),Be(t,he()),(K&6)===0&&(zn=he()+500,Ft()))}break;case 13:rn(function(){var r=xt(e,1);if(r!==null){var l=Oe();ct(r,e,1,l)}}),Si(e,1)}},Kl=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Oe();ct(t,e,134217728,n)}Si(e,134217728)}},ou=function(e){if(e.tag===13){var t=Vt(e),n=xt(e,t);if(n!==null){var r=Oe();ct(n,e,t,r)}Si(e,t)}},iu=function(){return b},uu=function(e,t){var n=b;try{return b=e,t()}finally{b=n}},Ul=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=$r(r);if(!l)throw Error(d(90));zi(r),zl(r,l)}}}break;case"textarea":Mi(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Qi=pi,Yi=rn;var Pd={usingClientEntryPoint:!1,Events:[rr,vn,$r,Vi,$i,pi]},gr={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Td={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gi(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Cd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{_r=Pl.inject(Td),ht=Pl}catch{}}return He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd,He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xi(t))throw Error(d(200));return _d(e,t,null,n)},He.createRoot=function(e,t){if(!xi(e))throw Error(d(299));var n=!1,r="",l=xa;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ki(e,1,!1,null,null,n,!1,r,l),e[wt]=t.current,er(e.nodeType===8?e.parentNode:e),new Ii(t)},He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=Gi(t),e=e===null?null:e.stateNode,e},He.flushSync=function(e){return rn(e)},He.hydrate=function(e,t,n){if(!Cl(t))throw Error(d(200));return Nl(null,e,t,!0,n)},He.hydrateRoot=function(e,t,n){if(!xi(e))throw Error(d(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=xa;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Sa(t,null,e,1,n??null,l,!1,o,i),e[wt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new _l(t)},He.render=function(e,t,n){if(!Cl(t))throw Error(d(200));return Nl(null,e,t,!1,n)},He.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(d(40));return e._reactRootContainer?(rn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},He.unstable_batchedUpdates=pi,He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Nl(e,t,n,!1,r)},He.version="18.3.1-next-f1338f8080-20240426",He}var ja;function Fd(){if(ja)return Ci.exports;ja=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(x){console.error(x)}}return k(),Ci.exports=Md(),Ci.exports}var Ra;function Dd(){if(Ra)return Tl;Ra=1;var k=Fd();return Tl.createRoot=k.createRoot,Tl.hydrateRoot=k.hydrateRoot,Tl}var Ud=Dd();const Wd=`#version 300 es
in vec2 a_pos;
void main(){ gl_Position = vec4(a_pos,0.0,1.0); }
`,Bd=`#version 300 es
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
`;function Oa(k,x,d){const F=k.createShader(x);return k.shaderSource(F,d),k.compileShader(F),k.getShaderParameter(F,k.COMPILE_STATUS)||console.error(k.getShaderInfoLog(F)),F}function Hd(){const k=_e.useRef(null);return _e.useEffect(()=>{const x=k.current;if(!x)return;const d=x.getContext("webgl2",{antialias:!1});if(!d){x.style.background="#1a1d24";return}const F=Oa(d,d.VERTEX_SHADER,Wd),O=Oa(d,d.FRAGMENT_SHADER,Bd),N=d.createProgram();d.attachShader(N,F),d.attachShader(N,O),d.linkProgram(N);const te=d.createVertexArray();d.bindVertexArray(te);const ne=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,ne),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),d.STATIC_DRAW);const D=d.getAttribLocation(N,"a_pos");d.enableVertexAttribArray(D),d.vertexAttribPointer(D,2,d.FLOAT,!1,0,0);const R=d.getUniformLocation(N,"u_time"),q=d.getUniformLocation(N,"u_res"),Q=d.getUniformLocation(N,"u_mouse"),$=d.getUniformLocation(N,"u_aspect"),Y={mouse:{x:.5,y:.5},target:{x:.5,y:.5},start:performance.now(),dpr:Math.min(window.devicePixelRatio||1,1.5)};function ee(){const ye=window.innerWidth*Y.dpr|0,Ce=window.innerHeight*Y.dpr|0;(x.width!==ye||x.height!==Ce)&&(x.width=ye,x.height=Ce),x.style.width=window.innerWidth+"px",x.style.height=window.innerHeight+"px"}ee(),window.addEventListener("resize",ee);const B=ye=>{Y.target.x=ye.clientX/window.innerWidth,Y.target.y=1-ye.clientY/window.innerHeight};window.addEventListener("mousemove",B);let V;function me(){const ye=(performance.now()-Y.start)/1e3;Y.mouse.x+=(Y.target.x-Y.mouse.x)*.05,Y.mouse.y+=(Y.target.y-Y.mouse.y)*.05,d.viewport(0,0,x.width,x.height),d.useProgram(N),d.uniform1f(R,ye),d.uniform2f(q,x.width,x.height),d.uniform2f(Q,Y.mouse.x,Y.mouse.y),d.uniform1f($,x.width/x.height),d.drawArrays(d.TRIANGLES,0,6),V=requestAnimationFrame(me)}return V=requestAnimationFrame(me),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",ee),window.removeEventListener("mousemove",B)}},[]),I.jsx("canvas",{ref:k,id:"bgCanvas"})}function Vd({albums:k,activeSlug:x,collapsed:d,onToggleCollapsed:F,onClose:O}){return I.jsxs(I.Fragment,{children:[I.jsx("button",{className:"sidebar-toggle-mobile",onClick:F,title:"Toggle sidebar",children:"☰"}),!d&&I.jsx("div",{className:"sidebar-backdrop",onClick:O}),I.jsxs("aside",{id:"sidebar",children:[I.jsxs("div",{className:"sidebar-header",children:[I.jsx("button",{className:"sidebar-toggle-desktop",onClick:F,title:"Toggle sidebar",children:"☰"}),I.jsx("div",{className:"brand",children:"SONGBOOK"})]}),I.jsx("section",{className:"group",children:I.jsx("ul",{className:"album-list",children:k.map(N=>I.jsx("li",{className:`album-item${x===N.slug?" active":""}`,children:I.jsxs("a",{href:`#${N.slug}`,className:"album-link",onClick:O,children:[N.coverImage?I.jsx("img",{src:N.coverImage,alt:N.title,className:"album-cover"}):I.jsx("span",{className:"album-cover",style:{background:`linear-gradient(135deg, ${N.color}aa, ${N.color}55)`}}),I.jsxs("span",{className:"album-meta",children:[I.jsx("span",{className:"album-title",children:N.title}),I.jsxs("span",{className:"album-sub",children:[N.artist," · ",N.year]})]})]})},N.slug))})})]})]})}function $d({albums:k}){return I.jsxs("div",{className:"home-page",children:[I.jsx("div",{className:"home-mark",children:"⌁"}),I.jsx("div",{className:"home-albums",children:k.map(x=>I.jsxs("a",{href:`#${x.slug}`,className:"home-album-card",children:[x.coverImage?I.jsx("img",{src:x.coverImage,alt:x.title,className:"home-album-card-cover"}):I.jsx("div",{className:"home-album-card-cover mono",style:{background:`linear-gradient(135deg, ${x.color}aa, ${x.color}33)`},children:x.artist.split(" ").map(d=>d[0]).join("")}),I.jsxs("div",{className:"home-album-card-info",children:[I.jsx("div",{className:"home-album-card-title",children:x.title}),I.jsxs("div",{className:"home-album-card-sub mono",children:[x.artist," · ",x.year]})]})]},x.slug))})]})}function Qd(k){return k.split(/\n\s*\n/).filter(d=>d.trim()).map(d=>{const F=d.split(`
`).map(N=>N.trim()).filter(Boolean),O=[];for(let N=0;N<F.length;N+=2)O.push([F[N]??"",F[N+1]??""]);return O})}function Yd({album:k,initialSongSlug:x}){const d=_e.useRef(null),F=_e.useRef(null),[O,N]=_e.useState(!1),te=_e.useRef(null);_e.useEffect(()=>{if(!O)return;const R=q=>{te.current&&!te.current.contains(q.target)&&N(!1)};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[O]),_e.useEffect(()=>{d.current=document.getElementById("main")},[]);const ne=_e.useCallback((R,q="instant")=>{const Q=document.getElementById(R),$=document.getElementById("main");if(Q&&$){const Y=Q.getBoundingClientRect().top+$.scrollTop-24;$.scrollTo({top:Y,behavior:q})}},[]);_e.useEffect(()=>{var Y;const R=document.getElementById("main");if(!R)return;const q=Array.from(document.querySelectorAll(".song")),Q=Array.from(document.querySelectorAll(".toc-item"));function $(ee){Q.forEach(B=>{B.classList.toggle("active",B.dataset.songSlug===ee)})}return F.current&&F.current.disconnect(),F.current=new IntersectionObserver(ee=>{var V;const B=ee.filter(me=>me.isIntersecting).map(me=>({slug:me.target.dataset.songSlug??"",top:me.boundingClientRect.top}));if(B.length){B.sort((ye,Ce)=>Math.abs(ye.top-80)-Math.abs(Ce.top-80));const me=((V=B[0])==null?void 0:V.slug)??"";$(me),history.replaceState(null,"",`#${k.slug}/${me}`)}},{root:R,rootMargin:"-80px 0px -55% 0px",threshold:[0,.25,.5,.75,1]}),q.forEach(ee=>F.current.observe(ee)),(Y=q[0])!=null&&Y.dataset.songSlug&&$(q[0].dataset.songSlug),()=>{var ee;(ee=F.current)==null||ee.disconnect()}},[k]),_e.useEffect(()=>{var R;x?requestAnimationFrame(()=>ne(x,"auto")):(R=document.getElementById("main"))==null||R.scrollTo({top:0,behavior:"auto"})},[k,x,ne]),_e.useEffect(()=>(document.title=`${k.title} — ${k.artist} · Songbook`,()=>{document.title="Songbook"}),[k]);const D=k.artist.split(" ").map(R=>R[0]).join("");return I.jsxs("article",{className:"album-page",children:[I.jsxs("header",{className:"album-header",children:[I.jsx("div",{className:"album-cover-lg",style:k.coverImage?{}:{background:`linear-gradient(135deg, ${k.color}aa, ${k.color}33)`},children:k.coverImage?I.jsx("img",{src:k.coverImage,alt:k.title,className:"album-cover-img"}):I.jsx("span",{className:"album-cover-text mono",children:D})}),I.jsxs("div",{className:"album-info",children:[I.jsx("div",{className:"album-tag mono",children:"ALBUM"}),I.jsx("h1",{className:"album-h1",children:k.title}),I.jsxs("div",{className:"album-byline",children:[k.artist,I.jsx("span",{className:"dot",children:" · "}),k.year,I.jsx("span",{className:"dot",children:" · "}),k.songs.length," tracks"]})]})]}),I.jsxs("div",{className:"album-body",children:[I.jsxs("aside",{ref:te,className:`toc${O?" toc-expanded":""}`,children:[I.jsxs("div",{className:"toc-bar",children:[I.jsxs("button",{className:"toc-toggle",onClick:()=>N(R=>!R),children:[I.jsx("span",{className:"toc-label mono",children:"TRACKS"}),I.jsx("span",{className:"toc-chev mono",children:O?"▴":"▾"})]}),I.jsx("button",{className:"toc-top-btn mono",onClick:()=>{var R;return(R=document.getElementById("main"))==null?void 0:R.scrollTo({top:0,behavior:"instant"})},children:"↑ Album"})]}),I.jsx("ol",{className:"toc-list",children:k.songs.map((R,q)=>I.jsx("li",{className:"toc-item","data-song-slug":R.slug,children:I.jsxs("a",{href:`#${k.slug}/${R.slug}`,onClick:Q=>{Q.preventDefault(),ne(R.slug),history.replaceState(null,"",`#${k.slug}/${R.slug}`),N(!1)},children:[I.jsx("span",{className:"toc-num mono",children:String(q+1).padStart(2,"0")}),I.jsx("span",{className:"toc-text",children:I.jsx("span",{className:"toc-title",children:R.title})})]})},R.slug))})]}),I.jsx("div",{className:"songs",children:k.songs.map((R,q)=>{const Q=Qd(R.lyrics);return I.jsxs("section",{className:"song",id:R.slug,"data-song-slug":R.slug,children:[I.jsxs("header",{className:"song-header",children:[I.jsx("div",{className:"song-num mono",children:String(q+1).padStart(2,"0")}),I.jsx("h2",{className:"song-title",children:R.title}),I.jsx("div",{className:"song-title-zh",children:R.titleZh})]}),I.jsx("div",{className:"lyrics",children:Q.map(($,Y)=>I.jsx("div",{className:"stanza",children:$.map(([ee,B],V)=>I.jsxs("div",{className:"line",children:[I.jsx("div",{className:"en",children:ee}),B&&I.jsx("div",{className:"zh",children:B})]},V))},Y))})]},R.slug)})})]})]})}const Kd="/songs/assets/Songs-of-Leonard%20Cohen-BaAgAagR.jpg",Zd="/songs/assets/songs-from-a-room-40jyqFCy.jpg",Ti=[{slug:"songs-of-leonard-cohen",title:"Songs of Leonard Cohen",artist:"Leonard Cohen",year:1967,color:"#5b6a78",coverImage:Kd,songs:[{slug:"suzanne",title:"Suzanne",titleZh:"蘇珊",lyrics:`Suzanne takes you down to her place near the river
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
噢，請讓我也進入那場風暴吧。`}]},{slug:"songs-from-a-room",title:"Songs from a Room",artist:"Leonard Cohen",year:1969,color:"#7c6a56",coverImage:Zd,songs:[{slug:"bird-on-the-wire",title:"Bird on the Wire",titleZh:"電線上的鳥",lyrics:`Like a bird on the wire,
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
一段時間內。`}]}];function Xd(){const[k,x]=_e.useState(()=>location.hash.replace(/^#/,""));return _e.useEffect(()=>{const d=()=>x(location.hash.replace(/^#/,""));return window.addEventListener("hashchange",d),()=>window.removeEventListener("hashchange",d)},[]),k}function Gd(k,x){const[d,F]=_e.useState(()=>localStorage.getItem(k)??x);return[d,N=>{localStorage.setItem(k,N),F(N)}]}function qd(){const k=Xd(),x=window.innerWidth<700?"1":"0",[d,F]=Gd("songbook.sidebar.collapsed",x),O=d==="1";_e.useEffect(()=>{document.body.classList.toggle("sidebar-collapsed",O)},[O]);const N=k.split("/"),te=N[0]??"",ne=N[1]??null,D=Ti.find(R=>R.slug===te)??null;return I.jsxs(I.Fragment,{children:[I.jsx(Hd,{}),I.jsxs("div",{className:"app",children:[I.jsx(Vd,{albums:Ti,activeSlug:(D==null?void 0:D.slug)??null,collapsed:O,onToggleCollapsed:()=>F(O?"0":"1"),onClose:()=>{window.innerWidth<=700&&F("1")}}),I.jsx("main",{id:"main",children:D?I.jsx(Yd,{album:D,initialSongSlug:ne},D.slug):I.jsx($d,{albums:Ti})})]})]})}Ud.createRoot(document.getElementById("root")).render(I.jsx(_e.StrictMode,{children:I.jsx(qd,{})}));
