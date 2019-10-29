(self.AMP=self.AMP||[]).push({n:"amp-orientation-observer",v:"1910212134200",f:(function(AMP,_){
var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},q={};try{q.__proto__=p;n=q.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var u=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(v.dev)a=v.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var f=0;f<c.length;f++)0!=c[f].length&&("-"==c[f][0]?a[c[f].substr(1)]=!1:a[c[f]]=!0);return a};function x(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=y(b,"ampdoc").getAmpDoc(a)}return a}function y(a,b){z(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var f=c;a=f[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function z(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function A(a){return a.reduce(function(a,c){return a+c})};var B=["alpha","beta","gamma"],C={alpha:180,beta:0,gamma:0},D={alpha:[0,360],beta:[-180,180],gamma:[-90,90]};function E(a){a=AMP.BaseElement.call(this,a)||this;a.w=x(a.element);a.o=null;a.l=Object.assign({},D);a.j=Object.assign({},C);a.m=Object.assign({},C);a.c={beta:[],alpha:[],gamma:[]};a.h=null;return a}var F=AMP.BaseElement;E.prototype=k(F.prototype);E.prototype.constructor=E;
if(r)r(E,F);else for(var G in F)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(F,G);H&&Object.defineProperty(E,G,H)}else E[G]=F[G];E.B=F.prototype;
E.prototype.buildCallback=function(){var a=this.element,b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),f=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var e=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);e=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var g in c.AMP_CONFIG){var d=c.AMP_CONFIG[g];"number"===typeof d&&0<=d&&1>=d&&(e[g]=Math.random()<d)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&
(g=c.AMP_CONFIG["allow-doc-opt-in"],d=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=d.getAttribute("content").split(",");for(var h=0;h<d.length;h++)-1!=g.indexOf(d[h])&&(e[d[h]]=!0)}Object.assign(e,w(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){g=c.AMP_CONFIG["allow-url-opt-in"];d=c.location.originalHash||c.location.hash;c=Object.create(null);if(d)for(var l;l=u.exec(d);)h=t(l[1],l[1]),l=l[2]?t(l[2].replace(/\+/g,
" "),l[2]):"",c[h]=l;for(d=0;d<g.length;d++)h=c["e-"+g[d]],"1"==h&&(e[g[d]]=!0),"0"==h&&(e[g[d]]=!1)}}e=!!e["ampdoc-fie"];f&&!e?a=z(b,"action")?y(b,"action"):null:(a=x(a),a=x(a),a=a.isSingleDoc()?a.win:a,a=z(a,"action")?y(a,"action"):null);this.o=a;this.w.whenFirstVisible().then(this.A.bind(this))};
E.prototype.A=function(){var a=this;if(!v.user)throw Error("failed to call initLogConstructor");v.user.assert(this.win.DeviceOrientationEvent,"The current browser doesn't support the `window.DeviceOrientationEvent`",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);B.forEach(function(b){var c=a.l;var f=a.l[b];var e=a.element.getAttribute(b+"-range");e&&(f=e.trim().split(" "),f=[parseInt(f[0],10),parseInt(f[1],10)]);c[b]=f});this.h=this.element.hasAttribute("smoothing")?Number(this.element.getAttribute("smoothing"))||
4:null;this.win.addEventListener("deviceorientation",function(b){I(a,b)},!0)};
function I(a,b){if(b instanceof DeviceOrientationEvent){var c=a.win.screen,f=b.alpha,e=b.gamma,g=b.beta;b="orientation"in c?c.orientation.angle:c.orientation;if(90==a.win.orientation||-90==a.win.orientation){var d=e;e=g;g=d}0>b&&(e=-e,g=-g);var h={alpha:f,beta:g,gamma:e};B.forEach(function(b){if(.1<Math.abs(h[b]-a.j[b])){var c=a.j;if(a.h){var d=h[b];a.c[b].length>a.h&&a.c[b].shift();a.c[b].push(d);d=A(a.c[b])/a.h;a.c[b].length>a.h&&a.m[b]==C[b]&&(a.m[b]=d);d-=a.m[b]}else d=h[b];c[b]=d;d=a.j[b];var e=
a.l[b],f=0>e[0]?d.toFixed()-e[0]:d.toFixed();c=a.win;d={angle:Math.min(Math.max(d,e[0]),e[1]).toFixed(),percent:f/(e[1]-e[0])};e="amp-orientation-observer."+b;f={detail:d};Object.assign(f,void 0);"function"==typeof c.CustomEvent?c=new c.CustomEvent(e,f):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent(e,!!f.bubbles,!!f.cancelable,d));a.o.trigger(a.element,b,c,1)}})}}(function(a){a.registerElement("amp-orientation-observer",E)})(self.AMP);
})});

//# sourceMappingURL=amp-orientation-observer-0.1.js.map
