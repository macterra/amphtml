(self.AMP=self.AMP||[]).push({n:"amp-mega-menu",v:"1910212134200",f:(function(AMP,_){
var g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={a:!0},n={};try{n.__proto__=m;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;function q(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var r=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function t(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function v(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,w(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var h;h=r.exec(e);)f=q(h[1],h[1]),h=h[2]?q(h[2].replace(/\+/g," "),h[2]):"",a[f]=h;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var S=
c;return!!S[b]}function w(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(u.dev)a=u.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function x(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=y(b,"ampdoc").getAmpDoc(a)}return a}function y(a,b){z(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function z(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var A;function B(a){try{var b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(e){return!1}};function C(a){var b=a.isConnected;if(void 0===b){do if(a=D(a),a.host)a=a.host;else break;while(1)}}function D(a){if(Node.prototype.getRootNode)return a.getRootNode()||a;for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);return a}function E(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}
function F(a){return a.closest?a.closest("header"):E(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"header"):!1})}function G(a,b){var c="i-amphtml-scoped";a.classList.add(c);var d=b.replace(/^|,/g,"$&."+c+" ");b=a.querySelectorAll(d);a.classList.remove(c);return b}function H(a,b){if(void 0!==A?A:A=B(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));var c=G(a,b);return void 0===c[0]?null:c[0]}
function I(a){return(void 0!==A?A:A=B(a))?a.querySelectorAll("nav > * > li".replace(/^|,/g,"$&:scope ")):G(a,"nav > * > li")}function J(a){try{a.focus()}catch(b){}};var K=[];function L(a){var b=[];a=M(a);for(var c={},d=0;d<a.length;c={h:c.h},d++)c.h=a[d],c.h.parentNode&&t(c.h.parentNode.children).filter(function(a){return function(b){return b!=a.h}}(c)).forEach(function(a){return b.push(a)});return b}function M(a){for(var b=[],c=a;c;c=c.parentNode||c.host)b.push(c);return b}
function N(a){for(var b=[];a;){a=D(a);var c=a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");Array.prototype.push.apply(b,c);a=a.host}return b}
function O(a){K.every(function(b){return b.element!==a});C(a);var b=L(a),c=M(a).filter(function(a){return a.nodeType==Node.ELEMENT_NODE}),d=N(a),e=d.filter(function(b){return a.contains(b)&&void 0!==b.__AMP_MODAL_SAVED_TAB_INDEX}),f=d.filter(function(b){return!a.contains(b)&&void 0===b.__AMP_MODAL_SAVED_TAB_INDEX}),h=b.concat(c).map(function(a){return{element:a,prevValue:a.getAttribute("aria-hidden")}});c.forEach(function(a){return a.removeAttribute("aria-hidden")});b.forEach(function(a){return a.setAttribute("aria-hidden",
"true")});f.forEach(function(a){a.__AMP_MODAL_SAVED_TAB_INDEX=a.getAttribute("tabindex");a.setAttribute("tabindex","-1")});e.forEach(function(a){var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b)});K.push({element:a,hiddenElementInfos:h,focusableExternalElements:f,focusableInternalElements:e})}
function P(a){var b=K.pop(),c=b.hiddenElementInfos,d=b.focusableExternalElements;b=b.focusableInternalElements;C(a);c.forEach(function(a){var b=a.prevValue;a=a.element;var c=b;null===c?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",c)});b.forEach(function(a){a.setAttribute("tabindex","-1")});d.forEach(function(a){var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b);a.__AMP_MODAL_SAVED_TAB_INDEX=void 0})};function Q(a){var b=AMP.BaseElement.call(this,a)||this;b.j=null;b.B=0;b.m=null;b.o=null;b.l=b.win.document;b.A=b.l.documentElement;b.w=null;b.C=a.id||Math.floor(100*Math.random());return b}var R=AMP.BaseElement;Q.prototype=g(R.prototype);Q.prototype.constructor=Q;if(p)p(Q,R);else for(var T in R)if("prototype"!=T)if(Object.defineProperties){var U=Object.getOwnPropertyDescriptor(R,T);U&&Object.defineProperty(Q,T,U)}else Q[T]=R[T];Q.D=R.prototype;
Q.prototype.isLayoutSupported=function(a){return"fixed-height"===a};
Q.prototype.buildCallback=function(){var a=v(this.win,"amp-mega-menu");if(!u.user)throw Error("failed to call initLogConstructor");u.user.assert(a,"Turning on the amp-mega-menu experiment is necessary to use the amp-mega-menu component.",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a=this.element;var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;c=v(c,"ampdoc-fie");d&&!c?a=z(b,"action")?y(b,"action"):null:(a=x(a),a=x(a),a=a.isSingleDoc()?a.win:a,a=z(a,"action")?
y(a,"action"):null);this.w=a};
Q.prototype.layoutCallback=function(){var a=this;V(this);this.element.addEventListener("amp:dom-update",function(){V(a)});var b=this.l.createElement("div");b.classList.add("i-amphtml-mega-menu-mask");b.setAttribute("aria-hidden","true");var c=F(this.element)||this.element;c.classList.add("i-amphtml-mega-menu-mask-parent");c.appendChild(b);this.o=b;this.A.addEventListener("click",function(){return W(a)});this.A.addEventListener("keydown",function(b){"Escape"===b.key&&W(a)&&b.preventDefault()});return Promise.resolve()};
Q.prototype.unlayoutCallback=function(){W(this);return!1};function V(a){a.j=t(I(a.element));a.j.forEach(function(b){if(!b.classList.contains("i-amphtml-mega-menu-item")){var c=H(b,"> button")||H(b,"> [role=button]"),d=H(b,"> [role=dialog]");c&&d&&!a.w.hasAction(c,"tap",b)&&aa(a,b,c,d)}})}
function aa(a,b,c,d){b.classList.add("i-amphtml-mega-menu-item");a.B++;d.classList.add("i-amphtml-mega-menu-content");d.setAttribute("aria-modal","false");var e=d.getAttribute("id");e||(e=a.C+"_AMP_content_"+a.B,d.setAttribute("id",e));d.insertBefore(X(a),d.firstChild);d.appendChild(X(a));d.addEventListener("click",function(a){return a.stopPropagation()});c.classList.add("i-amphtml-mega-menu-heading");c.setAttribute("aria-haspopup","dialog");c.setAttribute("aria-controls",e);c.hasAttribute("tabindex")||
c.setAttribute("tabindex",0);c.setAttribute("aria-expanded","false");c.addEventListener("click",function(b){return Y(a,b)});c.addEventListener("mousedown",function(a){return a.preventDefault()});c.addEventListener("keydown",function(b){if(!b.defaultPrevented)switch(b.key){case "ArrowLeft":case "ArrowRight":var c=a.j.indexOf(b.target.parentElement);if(-1!==c){b.preventDefault();b="ArrowLeft"==b.key?-1:1;var d=a.l;"rtl"==(d.body.getAttribute("dir")||d.documentElement.getAttribute("dir")||"ltr")&&(b=
-b);c+=b;b=a.j.length;J(Z(a.j[0<c&&0<b?c%b:(c%b+b)%b]))}break;case "Enter":case " ":b.target==b.currentTarget&&Y(a,b)}})}function Y(a,b){b.preventDefault();b.stopPropagation();b=b.target.parentElement;var c=W(a);b!=c&&ba(a,b)}
function ba(a,b){a.mutateElement(function(){var a=H(b,"> .i-amphtml-mega-menu-content");O(a);a.setAttribute("aria-modal","true")});b.setAttribute("open","");a.element.setAttribute("open","");a.o.setAttribute("open","");Z(b).setAttribute("aria-expanded","true");var c=b.querySelector(".i-amphtml-screen-reader");J(c);a.m=b}
function W(a){if(!a.m)return null;var b=a.m;a.mutateElement(function(){var a=H(b,"> .i-amphtml-mega-menu-content");P(a);a.setAttribute("aria-modal","false")});b.removeAttribute("open");a.element.removeAttribute("open");a.o.removeAttribute("open");var c=Z(b);c.setAttribute("aria-expanded","false");J(c);a.m=null;return b}function Z(a){return H(a,"> .i-amphtml-mega-menu-heading")}
function X(a){var b=a.element.getAttribute("data-close-button-aria-label")||"Close the menu",c=a.l.createElement("button");c.textContent=b;c.classList.add("i-amphtml-screen-reader");c.addEventListener("click",function(){return W(a)});return c}(function(a){a.registerElement("amp-mega-menu",Q,"amp-mega-menu{z-index:1000!important;white-space:nowrap!important}amp-mega-menu.i-amphtml-layout-size-defined[open]{overflow:visible!important}amp-mega-menu .i-amphtml-mega-menu-item{display:inline-block!important}amp-mega-menu .i-amphtml-mega-menu-heading{cursor:pointer!important}amp-mega-menu .i-amphtml-mega-menu-content{position:absolute!important;left:0;width:100vw;opacity:0!important;visibility:hidden!important;background:#fff}amp-mega-menu .i-amphtml-mega-menu-item[open]>.i-amphtml-mega-menu-content{visibility:visible!important;opacity:1!important}amp-mega-menu .i-amphtml-mega-menu-item:not([open]) .i-amphtml-screen-reader{display:none!important}.i-amphtml-mega-menu-mask-parent{z-index:1000!important;position:relative}.i-amphtml-mega-menu-mask{position:fixed!important;z-index:-1!important;visibility:hidden!important;opacity:0!important;top:0!important;bottom:0!important;left:0!important;right:0!important;background:rgba(0,0,0,0.5);transition:opacity 200ms,visibility 0s 200ms}.i-amphtml-mega-menu-mask[open]{opacity:1!important;visibility:visible!important;transition:opacity 200ms}\n/*# sourceURL=/extensions/amp-mega-menu/0.1/amp-mega-menu.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-mega-menu-0.1.js.map
