(self.AMP=self.AMP||[]).push({n:"amp-gwd-animation",v:"1910212134200",f:(function(AMP,_){
var h,k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var u=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function v(a,b,c,d,e){return e?e:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a};function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var x=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function y(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(){if(!z.user)throw Error("failed to call initLogConstructor");return z.user}function B(a,b){return A().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var C;var D=Object.prototype.hasOwnProperty;function E(a,b,c){if(b(a))c();else{var d=a.ownerDocument.defaultView;if(d.MutationObserver){var e=new d.MutationObserver(function(){b(a)&&(e.disconnect(),c())});e.observe(a,{childList:!0})}else var f=d.setInterval(function(){b(a)&&(d.clearInterval(f),c())},5)}};function F(a){var b="ampdoc-fie";if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,G(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var g;g=x.exec(e);)f=w(g[1],g[1]),g=g[2]?w(g[2].replace(/\+/g," "),g[2]):"",a[f]=g;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var n=
c;return!!n[b]}function G(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(z.dev)a=z.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function H(a,b){var c=a.ownerDocument.defaultView,d=I(c),e=c!=d,f=F(d);e&&!f?b=J(c,b)?K(c,b):null:(a=L(a),a=M(a),b=J(a,b)?K(a,b):null);return b}function aa(a,b){var c=I(a);J(a,"gwd");if(F(c)){var d=L(a.document);N(M(d),d,function(){return b},!0)}else N(a,a,function(){return b}),K(a,"gwd")}function I(a){return a.__AMP_TOP||(a.__AMP_TOP=a)}function L(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=I(b);a=K(b,"ampdoc").getAmpDoc(a)}return a}
function M(a){a=L(a);return a.isSingleDoc()?a.win:a}function K(a,b){J(a,b);var c=O(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function N(a,b,c,d){var e=O(a),f=e.gwd;f||(f=e.gwd={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});if(d||!f.ctor&&!f.obj)f.ctor=c,f.context=b,f.resolve&&K(a,"gwd")}function O(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}
function J(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};function ba(a){return"loading"!=a.readyState&&"uninitialized"!=a.readyState}function ca(a,b){var c=ba,d=c(a);if(d)b(a);else{var e=function(){c(a)&&(d||(d=!0,b(a)),a.removeEventListener("readystatechange",e))};a.addEventListener("readystatechange",e)}}function da(a){return new Promise(function(b){ca(a,b)})};var P=["animationend","webkitAnimationEnd"];function S(a,b){var c=this;this.D=a;this.j=b||a.win;this.c=this.j.document;this.l=this.B.bind(this);var d=b?da(this.c):a.whenReady();d.then(function(){var a=c.c.body;E(a,function(){return!!a.querySelector("."+"gwd-page-wrapper".replace(u,v))},c.A.bind(c))})}S.installInEmbedWindow=function(a,b){aa(a,new S(b,a))};h=S.prototype;h.A=function(){for(var a=0;a<P.length;a++)this.c.body.addEventListener(P[a],this.l,!0);this.setCurrentPage(0)};
h.setEnabled=function(a){this.c.body.classList.toggle("i-amphtml-gwd-animation-disabled",!a)};
h.setCurrentPage=function(a){var b=this.c.body.querySelectorAll("."+"gwd-page-wrapper".replace(u,v));if(0==b.length)A().warn("GWD","Could not set current page. No pages were found in the document.");else{var c="."+"gwd-page-wrapper".replace(u,v)+"."+"gwd-play-animation".replace(u,v);var d=this.c.body;var e=c;if(void 0!==C)var f=C;else{try{var g=d.ownerDocument,n=g.createElement("div"),l=g.createElement("div");n.appendChild(l);f=n.querySelector(":scope div")===l}catch(ha){f=!1}f=C=f}f?d=d.querySelector(e.replace(/^|,/g,
"$&:scope ")):(d.classList.add("i-amphtml-scoped"),e=e.replace(/^|,/g,"$&.i-amphtml-scoped "),e=d.querySelectorAll(e),d.classList.remove("i-amphtml-scoped"),d=void 0===e[0]?null:e[0]);var Q=d;Q&&ea(Q);var R=b[a];R?R.classList.add("gwd-play-animation"):A().error("GWD","Could not find page with index "+a+".")}};
function ea(a){a.classList.remove("gwd-play-animation");[a].concat(y(a.querySelectorAll("*"))).forEach(function(a){a.classList.remove("gwd-pause-animation");if(a.hasAttribute("data-gwd-label-animation")){var b=a.getAttribute("data-gwd-label-animation");a.classList.remove(b);a.removeAttribute("data-gwd-label-animation")}delete a.__AMP_GWD_GOTO_COUNTERS__})}h.play=function(a){(a=this.getReceiver(a))&&a.classList.remove("gwd-pause-animation")};h.pause=function(a){(a=this.getReceiver(a))&&a.classList.add("gwd-pause-animation")};
h.togglePlay=function(a){(a=this.getReceiver(a))&&a.classList.toggle("gwd-pause-animation")};h.gotoAndPlay=function(a,b){(a=this.getReceiver(a))&&T(a,b)};h.gotoAndPause=function(a,b){var c=this,d=this.getReceiver(a);d&&(T(d,b),this.j.setTimeout(function(){c.pause(a)},40))};
h.gotoAndPlayNTimes=function(a,b,c,d){if(0>=c)A().error("GWD","Invalid maxCount parameter: "+c);else if(d){if(a=this.getReceiver(a)){var e=d+"_"+b,f=a.__AMP_GWD_GOTO_COUNTERS__&&D.call(a.__AMP_GWD_GOTO_COUNTERS__,e)?a.__AMP_GWD_GOTO_COUNTERS__[e]:0;f<c&&(T(a,b),a.__AMP_GWD_GOTO_COUNTERS__||(a.__AMP_GWD_GOTO_COUNTERS__={}),D.call(a.__AMP_GWD_GOTO_COUNTERS__,e)||(a.__AMP_GWD_GOTO_COUNTERS__[e]=0),a.__AMP_GWD_GOTO_COUNTERS__[e]=f+1)}}else A().error("GWD","Event name required but not specified.")};
h.getReceiver=function(a){if("document.body"==a)return this.c.body;var b=this.c.getElementById(a);if(b&&b.classList)return b;A().error("GWD","Could not get receiver with id "+a+".");return null};
function T(a,b){a.classList.remove("gwd-pause-animation");var c=a.getAttribute("data-gwd-label-animation");c&&(a.classList.remove(c),a.removeAttribute("data-gwd-label-animation"));c==b&&(self.__AMP_GWD_TEMP=a.offsetWidth,delete self.__AMP_GWD_TEMP);a.classList.add(b);a.setAttribute("data-gwd-label-animation",b)}
h.B=function(a){var b=a.target.getAttribute("data-event-name");if(b){a={eventName:b,sourceEvent:a};var c=this.j,d={detail:a};Object.assign(d,void 0);"function"==typeof c.CustomEvent?a=new c.CustomEvent("gwd.timelineEvent",d):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent("gwd.timelineEvent",!!d.bubbles,!!d.cancelable,a),a=c);var e=a;this.c.dispatchEvent(e)}};h.dispose=function(){for(var a=0;a<P.length;a++)this.c.body.removeEventListener(P[a],this.l,!0)};var U={play:["args.id"],pause:["args.id"],togglePlay:["args.id"],gotoAndPlay:["args.id","args.label"],gotoAndPause:["args.id","args.label"],gotoAndPlayNTimes:["args.id","args.label","args.N","event.detail.eventName"],setCurrentPage:["args.index"]};function V(a){a=AMP.BaseElement.call(this,a)||this;a.o="";a.h=null;a.m=a.C.bind(a);return a}var W=AMP.BaseElement;V.prototype=k(W.prototype);V.prototype.constructor=V;
if(t)t(V,W);else for(var X in W)if("prototype"!=X)if(Object.defineProperties){var Y=Object.getOwnPropertyDescriptor(W,X);Y&&Object.defineProperty(V,X,Y)}else V[X]=W[X];V.F=W.prototype;
V.prototype.buildCallback=function(){this.o=this.element.getAttribute("timeline-event-prefix")||"";a:{var a=this.element,b=this.getAmpDoc().win;a=(a.ownerDocument||a).defaultView;b=b||I(a);if(a&&a!=b&&I(a)==b)try{var c=a.frameElement;break a}catch(l){}c=null}c&&(this.h=c.__AMP_EMBED__);Z(this).addEventListener("gwd.timelineEvent",this.m,!0);var d=Z(this).getElementById("pagedeck");if(d){B(this.element.id,"The amp-gwd-animation element must have an id.");var e=this.element.id+".setCurrentPage(index=event.index)";
c=this.element;b=d;a=e;var f=b.getAttribute("on")||"";var g=f.indexOf("slideChange:");-1!=g?(g+=12,f=f.substr(0,g)+a+","+f.substr(g)):(f&&(f+=";"),f+="slideChange:"+a);H(c,"action").setActions(b,f)}c=this.w.bind(this);for(var n in U)this.registerAction(n,c)};function Z(a){return a.h?a.h.win.document:a.getAmpDoc().getRootNode()}V.prototype.w=function(a){var b=a;if("setCurrentPage"==b.method){var c=Z(this).getElementById("pagedeck");b=c&&b.source==c}else b=!0;b&&fa(this,a)};
function fa(a,b){a=B(H(a.element,"gwd"),"Cannot execute action because the GWD service is not registered.");var c=U[b.method],d=c.map(function(a){for(var c=a.split("."),d=b,e=0;e<c.length;e++){var l=c[e];if(l&&d&&void 0!==d[l])d=d[l];else{d=void 0;break}}return d});a[b.method].apply(a,d)}V.prototype.C=function(a){var b=H(this.element,"action"),c=""+this.o+a.detail.eventName;b.trigger(this.element,c,a,100)};
V.prototype.detachedCallback=function(){Z(this).removeEventListener("gwd.timelineEvent",this.m,!0);return!0};(function(a){a.registerServiceForDoc("gwd",S);a.registerElement("amp-gwd-animation",V,".i-amphtml-gwd-animation-disabled [class*=-animation],.i-amphtml-gwd-animation-disabled [class*=gwdanimation]{animation:none!important}\n/*# sourceURL=/extensions/amp-gwd-animation/0.1/amp-gwd-animation.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-gwd-animation-0.1.js.map