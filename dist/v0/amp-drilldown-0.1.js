(self.AMP=self.AMP||[]).push({n:"amp-drilldown",v:"1910212134200",f:(function(AMP,_){
var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={a:!0},n={};try{n.__proto__=m;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;function q(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var r=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function u(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(t.dev)a=t.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function v(a){var b=w(a);b=w(b);b=b.isSingleDoc()?b.win:b;return x(b,"history")}function w(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=x(b,"ampdoc").getAmpDoc(a)}return a}function x(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function y(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function z(a,b){return a.closest?a.closest(b):y(a,function(a){var d=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return d?d.call(a,b):!1})};function A(a){a=AMP.BaseElement.call(this,a)||this;a.A=a.win.document;a.l=a.A.documentElement;a.j=[];a.h=null;a.w=a.D.bind(a);a.o=a.C.bind(a);a.m=a.B.bind(a);return a}var B=AMP.BaseElement;A.prototype=g(B.prototype);A.prototype.constructor=A;if(p)p(A,B);else for(var C in B)if("prototype"!=C)if(Object.defineProperties){var D=Object.getOwnPropertyDescriptor(B,C);D&&Object.defineProperty(A,C,D)}else A[C]=B[C];A.F=B.prototype;f=A.prototype;
f.buildCallback=function(){var a=this.win;if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(c=a.AMP_CONFIG["allow-doc-opt-in"],d=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=
d.getAttribute("content").split(",");for(var e=0;e<d.length;e++)-1!=c.indexOf(d[e])&&(b[d[e]]=!0)}Object.assign(b,u(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];d=a.location.originalHash||a.location.hash;a=Object.create(null);if(d)for(var h;h=r.exec(d);)e=q(h[1],h[1]),h=h[2]?q(h[2].replace(/\+/g," "),h[2]):"",a[e]=h;for(d=0;d<c.length;d++)e=a["e-"+c[d]],"1"==e&&(b[c[d]]=!0),"0"==e&&(b[c[d]]=!1)}}b=
!!b["amp-sidebar-v2"];if(!t.user)throw Error("failed to call initLogConstructor");t.user.assert(b,"Turning on the amp-sidebar-v2 experiment is necessary to use the amp-drilldown component.",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};f.layoutCallback=function(){E(this);return Promise.resolve()};f.unlayoutCallback=function(){F(this);return!0};f.isLayoutSupported=function(a){return"fill"==a};
function E(a){var b=a.element.querySelectorAll("[amp-drilldown-submenu-open]");b.forEach(function(b){b.addEventListener("click",a.w)});var c=a.element.querySelectorAll("[amp-drilldown-submenu-close]");c.forEach(function(b){b.addEventListener("click",a.o)});a.l.addEventListener("keydown",a.m)}
function F(a){a.element.querySelectorAll("[amp-drilldown-submenu-open]").forEach(function(b){b.removeEventListener("click",a.w)});a.element.querySelectorAll("[amp-drilldown-submenu-close]").forEach(function(b){b.removeEventListener("click",a.o)});a.l.removeEventListener("keydown",a.m)}f.D=function(a){var b=a.target,c=b.parentElement.querySelector("[amp-drilldown-submenu]");c&&G(this,c)};
function G(a,b){if(!b.hasAttribute("open")){var c=H(b);c&&(c.setAttribute("child-open",""),b.setAttribute("open",""),v(a.getAmpDoc()).push(function(){return I(a,b)}).then(function(b){a.j.push(b)}),a.h=b)}}f.C=function(a){var b=a.target;(a=z(b,"[amp-drilldown-submenu]"))&&I(this,a)};function I(a,b){if(b.hasAttribute("open")){var c=H(b);if(c){c.removeAttribute("child-open");b.removeAttribute("open");if(0<a.j.length){var d=a.j.pop();v(a.getAmpDoc()).pop(d)}a.h=c}}}
f.B=function(a){switch(a.key){case "ArrowLeft":(a=this.h)&&I(this,a)}};function H(a){return z(a.parentElement,"amp-drilldown,[amp-drilldown-submenu]")}(function(a){a.registerElement("amp-drilldown",A,"amp-drilldown,amp-drilldown [amp-drilldown-submenu]{position:absolute!important;top:0!important;width:100%!important;height:100vh!important;transform:translateX(0)!important}amp-drilldown.i-amphtml-layout-size-defined{overflow:visible!important}amp-drilldown [amp-drilldown-submenu]{left:100%!important;opacity:0!important;visibility:hidden!important;transition:transform 233ms,opacity 233ms,visibility 0s 233ms}amp-drilldown,amp-drilldown [amp-drilldown-submenu][open]{opacity:1!important;visibility:visible!important;transition:transform 233ms}amp-drilldown [amp-drilldown-submenu][child-open],amp-drilldown[child-open]{transform:translateX(-100%)!important;visibility:hidden!important;transition:transform 233ms,visibility 0s 233ms}\n/*# sourceURL=/extensions/amp-drilldown/0.1/amp-drilldown.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-drilldown-0.1.js.map
