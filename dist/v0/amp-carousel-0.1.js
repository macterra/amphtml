(self.AMP=self.AMP||[]).push({n:"amp-carousel",v:"1910212134200",f:(function(AMP,_){
var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ba={a:!0},n={};try{n.__proto__=ba;m=n.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=l;
function q(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(p)p(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ta=b.prototype};function r(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function da(a){return"number"===typeof a&&isFinite(a)};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function w(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");}function ea(a){v().assert(a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function x(a){return a||{}};function fa(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};x({c:!0,v:!0,a:!0,ad:!0,action:!0});function ha(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var g=0;g<e.length;g++)-1!=d.indexOf(e[g])&&(c[e[g]]=!0)}Object.assign(c,ia(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var h;h=ca.exec(e);)g=t(h[1],h[1]),h=h[2]?t(h[2].replace(/\+/g," "),h[2]):"",a[g]=h;for(e=0;e<d.length;e++)g=a["e-"+d[e]],"1"==g&&(c[d[e]]=!0),"0"==g&&(c[d[e]]=!1)}}var k=
c;return!!k[b]}function ia(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){w().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ja(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e=ha(c,"ampdoc-fie");d&&!e?a=y(b,"action")?z(b,"action"):null:(a=A(a),a=B(a),a=y(a,"action")?z(a,"action"):null);return a}function C(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function D(a){var b=A(a);b=B(b);return z(b,"owners")}function A(a){return a.nodeType?C((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}
function z(a,b){y(a,b);var c=E(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ma(a){var b=E(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;z(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function E(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function y(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
function na(){var a=new r,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function oa(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function pa(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):oa(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[i-amphtml-scale-animation]"):!1})};function qa(a){var b=ma(B(a));if(b)return b;var c=A(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var g={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var h=0;h<b.length;h++){var k=b[h];k=k.getAttribute("custom-element")||k.getAttribute("custom-template");g[k]=!0}g=Object.keys(g)}else g=[];a=g.includes("amp-analytics")?C(a,"extensions").waitForExtension(a,"amp-analytics"):Promise.resolve();return a}).then(function(){var b=
c.win;if(b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]){b=B(a);var e=ma(b);e?b=e:(b=E(b),b["amp-analytics-instrumentation"]=na(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};function F(a){return C(a,"timer")};function G(a,b,c,d){var e=new ra(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function ra(a,b,c,d){var e=1,g=1;this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.x3=e;this.y3=g}f=ra.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,g=0,h=0;8>h;h++){g=this.getPointX(c);var k=(this.getPointX(c+b)-g)/b;if(Math.abs(g-a)<b)return c;if(Math.abs(k)<b)break;else g<a?d=c:e=c,c-=(g-a)/k}for(h=0;Math.abs(g-a)>b&&8>h;h++)g<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),g=this.getPointX(c);return c};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var sa=G(.25,.1,.25,1),ta=G(.42,0,1,1),ua=G(0,0,.58,1),va=G(.42,0,.58,1),wa={linear:function(a){return a},ease:sa,"ease-in":ta,"ease-out":ua,"ease-in-out":va};function xa(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return G(b[0],b[1],b[2],b[3])}return null}return wa[a]}return a};function ya(){}function H(a){var b;this.L=a;(a=b)||(a=C(self,"vsync"));this.C=a;this.ga=null;this.w=[]}function I(a,b,c,d){return(new H(a)).setCurve(d).add(0,b,1).start(c)}H.prototype.setCurve=function(a){a&&(this.ga=xa(a));return this};H.prototype.add=function(a,b,c,d){this.w.push({delay:a,func:b,duration:c,curve:xa(d)});return this};H.prototype.start=function(a){var b=new J(this.C,this.L,this.w,this.ga,a);return b};
function J(a,b,c,d,e){this.C=a;this.L=b;this.w=[];for(b=0;b<c.length;b++){var g=c[b];this.w.push({delay:g.delay,func:g.func,duration:g.duration,curve:g.curve||d,started:!1,completed:!1})}this.ma=e;this.pa=Date.now();this.aa=!0;this.ka={};c=new r;this.ja=c.promise;this.oa=c.resolve;this.na=c.reject;this.la=this.C.createAnimTask(this.L,{mutate:this.qa.bind(this)});this.C.canAnimate(this.L)?this.la(this.ka):(w().warn("Animation","cannot animate"),K(this,!1,0))}
J.prototype.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};J.prototype.thenAlways=function(a){a=a||ya;return this.then(a,a)};J.prototype.halt=function(a){K(this,!1,a||0)};
function K(a,b,c){if(a.aa){a.aa=!1;if(0!=c){1<a.w.length&&a.w.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.w.length;c++)a.w[c].func(1,!0);else for(var d=a.w.length-1;0<=d;d--)a.w[d].func(0,!1)}catch(e){w().error("Animation","completion failed: "+e,e),b=!1}}b?a.oa():a.na()}}
J.prototype.qa=function(){if(this.aa){for(var a=Date.now(),b=Math.min((a-this.pa)/this.ma,1),c=0;c<this.w.length;c++){var d=this.w[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.w.length;c++)if(d=this.w[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var g=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=g)try{g=d.curve(e)}catch(h){w().error("Animation","step curve failed: "+h,h);K(this,!1,0);break a}}else g=e=1;1==e&&(d.completed=!0);try{d.func(g,d.completed)}catch(h){w().error("Animation",
"step mutate failed: "+h,h),K(this,!1,0)}}1==b?K(this,!0,0):this.C.canAnimate(this.L)?this.la(this.ka):(w().warn("Animation","cancel animation"),K(this,!1,0))}};function L(a){a=AMP.BaseElement.call(this,a)||this;a.I=null;a.H=null;a.P=!1;return a}q(L,AMP.BaseElement);f=L.prototype;f.buildCallback=function(){(this.P=C(this.win,"input").isMouseDetected()||this.element.hasAttribute("controls"))&&this.element.classList.add("i-amphtml-carousel-has-controls");this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};f.viewportCallback=function(a){this.onViewportCallback(a);a&&this.hintControls()};f.onViewportCallback=function(){};
f.buildButton=function(a,b){var c=this.element.ownerDocument.createElement("div");c.tabIndex=0;c.classList.add("amp-carousel-button");c.classList.add(a);c.setAttribute("role",this.buttonsAriaRole());c.onkeydown=function(a){"Enter"!=a.key&&" "!=a.key||a.defaultPrevented||(a.preventDefault(),b())};c.onclick=b;return c};f.buttonsAriaRole=function(){return"button"};
f.buildButtons=function(){var a=this;this.I=this.buildButton("amp-carousel-button-prev",function(){a.interactionPrev()});this.element.appendChild(this.I);this.H=this.buildButton("amp-carousel-button-next",function(){a.interactionNext()});this.updateButtonTitles();this.element.appendChild(this.H)};f.prerenderAllowed=function(){return!0};f.isRelayoutNeeded=function(){return!0};f.buildCarousel=function(){};f.setupGestures=function(){};f.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};
f.goCallback=function(){};f.setControlsState=function(){this.I.classList.toggle("amp-disabled",!this.hasPrev());this.I.setAttribute("aria-disabled",!this.hasPrev());this.H.classList.toggle("amp-disabled",!this.hasNext());this.H.setAttribute("aria-disabled",!this.hasNext())};
f.hintControls=function(){var a=this;!this.P&&this.isInViewport()&&this.getVsync().mutate(function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");F(a.win).delay(function(){a.mutateElement(function(){a.element.classList.remove("i-amphtml-carousel-button-start-hint");a.I.classList.toggle("i-amphtml-screen-reader",!a.P);a.H.classList.toggle("i-amphtml-screen-reader",!a.P)})},4E3)})};f.updateButtonTitles=function(){this.H.title=this.getNextButtonTitle();this.I.title=this.getPrevButtonTitle()};
f.getNextButtonTitle=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"};f.getPrevButtonTitle=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"};f.unlayoutCallback=function(){return!0};f.hasPrev=function(){};f.hasNext=function(){};f.interactionNext=function(){this.H.classList.contains("amp-disabled")||this.go(1,!0,!1)};
f.interactionPrev=function(){this.I.classList.contains("amp-disabled")||this.go(-1,!0,!1)};var M,za="Webkit webkit Moz moz ms O o".split(" ");function Aa(a,b){var c=void 0;if(fa(b,"--"))return b;M||(M=Object.create(null));var d=M[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<za.length;g++){var h=za[g]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(M[b]=d)}return d}function Ba(a,b){var c,d=Aa(a.style,"order");d&&(a.style[d]=c?b+c:b)}function Ca(a){var b=Aa(a.style,"scrollSnapType");if(b)return a.style[b]};var N;function Da(a,b,c){var d={passive:!0},e=a,g=c;var h=function(a){try{return g(a)}catch(ka){throw self.__AMP_REPORT_ERROR(ka),ka;}};var k=Ea(),la=!1;d&&(la=d.capture);e.addEventListener(b,h,k?d:la)}function Ea(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N};function O(a,b,c){Da(a,b,c)};function P(a,b){return function(c){return a+(b-a)*c}};function Q(a){a=L.call(this,a)||this;a.o=0;a.$=0;a.F=null;a.A=null;a.ca=null;return a}q(Q,L);f=Q.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
f.buildCarousel=function(){var a=this;this.F=this.getRealChildren();this.A=this.element.ownerDocument.createElement("div");this.A.classList.add("i-amphtml-scrollable-carousel-container");this.element.appendChild(this.A);this.F.forEach(function(b){D(a.element).setOwner(b,a.element);b.classList.add("amp-carousel-slide");b.classList.add("amp-scrollable-carousel-slide");a.A.appendChild(b)});this.V();this.A.addEventListener("scroll",this.ba.bind(this));this.registerAction("goToSlide",function(b){var c=
b.args;c&&(c=parseInt(c.index,10),Fa(a,c))},1)};f.buttonsAriaRole=function(){return"presentation"};f.layoutCallback=function(){Ga(this,this.o);Ha(this,this.o,1);this.setControlsState();return Promise.resolve()};f.onViewportCallback=function(){Ia(this,this.o,this.o)};f.goCallback=function(a,b){var c=this,d=Ja(this,this.o,a),e=this.o;if(d!=e)if(b){var g=P(e,d);I(this.element,function(a){c.A.scrollLeft=g(a)},200,"ease-in-out").thenAlways(function(){R(c,d)})}else R(this,d),this.A.scrollLeft=d};
function Fa(a,b){var c=a.F.length;if(!isFinite(b)||0>b||b>=c)a.user().error("amp-scrollable-carousel","Invalid [slide] value: %s",b),Promise.resolve();else{var d=a.o,e=d,g=function(){e=a.F[b].offsetLeft-(a.element.offsetWidth-a.F[b].offsetWidth)/2},h=function(){if(e!=d){var b=P(d,e);I(a.element,function(c){a.A.scrollLeft=b(c)},200,"ease-in-out").thenAlways(function(){R(a,e)})}};a.measureMutateElement(g,h)}}f.ba=function(){var a=this.A.scrollLeft;this.o=a;null===this.ca&&Ka(this,a)};
function Ka(a,b){a.ca=F(a.win).delay(function(){30>Math.abs(b-a.o)?(a.ca=null,R(a,a.o)):Ka(a,a.o)},100)}function R(a,b){Ia(a,b,a.$);Ga(a,b);Ha(a,b,Math.sign(b-a.$));a.$=b;a.o=b;a.setControlsState()}function Ja(a,b,c){var d=a.element.offsetWidth,e=a.A.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function S(a,b,c){for(var d=a.getLayoutWidth(),e=0;e<a.F.length;e++){var g=a.F[e];g.offsetLeft+g.offsetWidth>=b&&g.offsetLeft<=b+d&&c(g)}}
function Ga(a,b){S(a,b,function(b){D(a.element).scheduleLayout(a.element,b)})}function Ha(a,b,c){var d=Ja(a,b,c);d!=b&&S(a,d,function(b){D(a.element).schedulePreload(a.element,b)})}function Ia(a,b,c){var d=[];S(a,b,function(b){d.push(b);D(a.element).updateInViewport(a.element,b,!0)});c!=b&&S(a,c,function(b){if(!d.includes(b)){var c=D(a.element);c.updateInViewport(a.element,b,!1);c.schedulePause(a.element,b)}})}f.hasPrev=function(){return 0!=this.o};
f.hasNext=function(){var a=this.getLayoutWidth(),b=this.A.scrollWidth,c=Math.max(b-a,0);return this.o!=c};f.V=function(){O(this.element,"touchmove",function(a){return a.stopPropagation()})};function T(a){a=L.call(this,a)||this;a.R=null;a.N=!1;a.Z=!1;a.G=!1;a.fa=5E3;a.J=null;a.ia=0;a.shouldLoop=!1;a.B=!1;return a}q(T,L);f=T.prototype;
f.buildCarousel=function(){var a=this;this.N=this.element.hasAttribute("loop");this.G=this.element.hasAttribute("autoplay");var b=this.element.getAttribute("autoplay");b&&(this.J=parseInt(b,10),ea(da(this.J)));this.buildSlides();this.shouldLoop=this.N&&this.isLoopingEligible();(this.B=this.G&&this.isLoopingEligible())&&0!=this.J&&La(this);this.registerAction("toggleAutoplay",function(b){(b=b.args)&&void 0!==b.toggleOn?Ma(a,b.toggleOn):Ma(a,!a.G)},1)};f.buildSlides=function(){};
f.onViewportCallback=function(a){this.updateViewportState(a);a?U(this):this.clearAutoplay()};f.goCallback=function(a,b,c){this.moveSlide(a,b);c?U(this):this.clearAutoplay()};f.moveSlide=function(){};f.updateViewportState=function(){};f.isLoopingEligible=function(){return!1};function La(a){var b=Number(a.element.getAttribute("delay"));0<b&&(a.fa=Math.max(1E3,b));a.N||(a.element.setAttribute("loop",""),a.Z=!0,a.N=!0,a.shouldLoop=!0)}
function U(a){a.B&&0!=a.J&&(a.clearAutoplay(),a.R=F(a.win).delay(a.go.bind(a,1,!0,!0),a.fa))}function Ma(a,b){if(b!=a.B){var c=a.B;a.G=b;a.B=a.G&&a.isLoopingEligible();!c&&a.B&&La(a);a.B?U(a):a.clearAutoplay()}}f.clearAutoplay=function(){null!==this.R&&(F(this.win).cancel(this.R),this.R=null)};f.removeAutoplay=function(){this.clearAutoplay();this.Z&&(this.element.removeAttribute("loop"),this.shouldLoop=this.N=this.Z=!1);this.B=this.G=!1};function V(a,b,c){qa(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};function W(a){a=T.call(this,a)||this;a.C=null;a.O=!1;a.m=[];a.j=0;a.l=null;a.K=[];a.U=!1;a.T=null;a.Y=!1;a.M=0;a.h=null;a.ha=0;a.D=0;a.S=0;a.W=[];var b=C(a.win,"platform");a.X=b.isIos();a.ea=null;a.da=fa(C(a.win,"platform").getIosVersionString(),"10.3")?!0:a.X?!1:!ha(a.win,"amp-carousel-chrome-scroll-snap");return a}q(W,T);f=W.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
f.buildSlides=function(){var a=this;this.C=this.getVsync();this.ea=ja(this.element);this.O=void 0!=Ca(this.element);this.da&&(this.O=!1);this.element.classList.add("i-amphtml-slidescroll");this.m=this.getRealChildren();this.j=this.m.length;this.l=this.win.document.createElement("div");this.l.classList.add("i-amphtml-slides-container");this.l.setAttribute("aria-live","polite");this.da&&this.l.classList.add("i-amphtml-slidescroll-no-snap");if(this.O){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");
this.l.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.l.appendChild(b)}this.element.appendChild(this.l);this.m.forEach(function(b,d){a.W.push(b.getAttribute("data-slide-id")||d.toString());D(a.element).setOwner(b,a.element);b.classList.add("amp-carousel-slide");var c=a.win.document.createElement("div");c.classList.add("i-amphtml-slide-item");a.l.appendChild(c);c.appendChild(b);a.K.push(c)});this.V();this.l.addEventListener("scroll",this.ba.bind(this));
O(this.l,"touchmove",this.sa.bind(this));O(this.l,"touchend",this.ra.bind(this));this.registerAction("goToSlide",function(b){(b=b.args)&&a.goToSlide(b.index)},1)};f.isLoopingEligible=function(){return 1<this.j};f.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&this.goToSlide(b)};f.sa=function(){this.clearAutoplay();this.Y=!0};function Na(a,b){a.T&&F(a.win).cancel(a.T);a.T=F(a.win).delay(function(){a.T=null;if(!a.U&&!a.Y){var b=a.l.scrollLeft;a.O?Oa(a,b):X(a,b)}},b)}
f.ra=function(){var a=this.da?45:100;this.Y=!1;Na(this,a)};f.onLayoutMeasure=function(){this.D=this.getLayoutWidth()};f.layoutCallback=function(){var a=pa(this.element);if(a)return Promise.resolve();if(null===this.h)Pa(this,this.ha);else{var b=v().assertNumber(this.h,"E#19457 this.slideIndex_"),c=Qa(this,b);D(this.element).scheduleLayout(this.element,this.m[b]);this.S=this.l.scrollLeft=c}return Promise.resolve()};f.unlayoutCallback=function(){this.h=null;return T.prototype.unlayoutCallback.call(this)};
f.updateViewportState=function(a){null!==this.h&&D(this.element).updateInViewport(this.element,this.m[v().assertNumber(this.h,"E#19457 this.slideIndex_")],a)};f.hasPrev=function(){return this.shouldLoop||0<this.h};f.hasNext=function(){return this.shouldLoop||this.h<this.m.length-1};f.moveSlide=function(a,b){if(null!==this.h){var c=this.hasNext(),d=this.hasPrev();if(1==a&&c||-1==a&&d){var e=this.h+a;-1==e?e=this.j-1:e>=this.j&&(e=0);b?X(this,1!=a||d?this.D:0,a):Y(this,e)}}};
f.ba=function(){var a=this.l.scrollLeft;this.X||Ra(this,a);Na(this,this.O?200:this.X?45:100);this.S=a};function Ra(a,b){var c=a.l.scrollWidth;-1==a.M&&b>=a.S?X(a,b).then(function(){a.M=0}):1==a.M&&b<=a.S?X(a,b).then(function(){a.M=0}):a.M=0>b?-1:b+a.D>c?1:0}function X(a,b,c){a.U=!0;var d=Sa(a,b)-a.h,e=a.hasPrev(),g=e?a.D:0;0!=d||1!=c&&-1!=c||(d=c);if(1==d||-1!=d&&d==-1*(a.j-1))g=e?2*a.D:a.D;else if(-1==d||d==a.j-1)g=0;return Ta(a,b,g).then(function(){Oa(a,g)})}
function Sa(a,b){var c=Math.round(b/a.D),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.h+d;return b=a.shouldLoop?0>b?a.j-1:b>=a.j?0:b:0>b?0:b>=a.j?a.j-1:b}function Ua(a,b){var c=String(b+1),d=String(a.j);return" "+(a.element.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",c).replace("%s",d)}f.getPrevButtonTitle=function(){var a=this.h,b=0<=a-1?a-1:this.shouldLoop?this.j-1:null;a=null==b?0:b;return T.prototype.getPrevButtonTitle.call(this)+Ua(this,a)};
f.getNextButtonTitle=function(){var a=this.h,b=a+1<this.j?a+1:this.shouldLoop?0:null;a=null==b?this.j-1:b;return T.prototype.getNextButtonTitle.call(this)+Ua(this,a)};function Oa(a,b){if(da(b)&&null!==a.h){a.U=!0;var c=Sa(a,b);a.C.mutate(function(){Y(a,c);a.C.mutate(function(){a.U=!1})})}}f.goToSlide=function(a){var b=parseInt(a,10);!isFinite(b)||0>b||b>=this.j?this.user().error("AMP-CAROUSEL","Invalid [slide] value: ",a):null===this.h?this.ha=b:Y(this,b)};
function Pa(a,b){var c=a.j;if(0>b||b>=c||a.h==b)return!1;var d=0<=b-1?b-1:a.shouldLoop?a.j-1:null,e=b+1<a.j?b+1:a.shouldLoop?0:null,g=[];null!=d&&g.push(d);g.push(b);null!=e&&e!==d&&g.push(e);null!==a.h&&D(a.element).updateInViewport(a.element,a.m[v().assertNumber(a.h,"E#19457 this.slideIndex_")],!1);var h=a.m[b];if(void 0===h)return w().error("AMP-CAROUSEL","Attempting to access a non-existant slide %s / %s",b,c),!1;D(a.element).updateInViewport(a.element,h,!0);g.forEach(function(c,d){a.shouldLoop&&
Ba(a.K[c],d+1);a.K[c].classList.add("i-amphtml-slide-item-show");var e=D(a.element);c==b?(e.scheduleLayout(a.element,a.m[c]),e.scheduleResume(a.element,a.m[c]),a.m[c].setAttribute("aria-hidden","false")):(e.schedulePreload(a.element,a.m[c]),a.m[c].setAttribute("aria-hidden","true"))});a.l.scrollLeft=Qa(a,b);Va(a,b);a.h=b;a.J&&a.h===a.j-1&&(a.ia++,a.ia==a.J&&a.removeAutoplay());Wa(a,g);a.setControlsState();a.updateButtonTitles();return!0}
function Y(a,b){var c=Pa(a,b);if(c){var d=a.win;var e=x({index:b});var g={detail:e};Object.assign(g,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent("slidescroll.slideChange",g):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent("slidescroll.slideChange",!!g.bubbles,!!g.cancelable,e),e=d);a.ea.trigger(a.element,"slideChange",e,100);a.element.dispatchCustomEvent("slideChange",{index:b})}}function Qa(a,b){var c=a.D;if(!a.shouldLoop&&0==b||1>=a.m.length)c=0;return c}
function Wa(a,b){for(var c=a.j,d=0;d<c;d++)a.K[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&Ba(a.K[d],""),a.K[d].classList.remove("i-amphtml-slide-item-show"),a.m[d].removeAttribute("aria-hidden")),a.h!=d&&D(a.element).schedulePause(a.element,a.m[d]))}function Ta(a,b,c){if(b==c)return Promise.resolve();var d=P(b,c);c=G(.8,0,.6,1);var e=a.l;return I(e,function(b){a.l.scrollLeft=d(b)},80,c).thenAlways()}f.V=function(){O(this.element,"touchmove",function(a){return a.stopPropagation()})};
function Va(a,b){var c=b-a.h;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.h&&(c=1));var d=null===a.h?"null":a.W[a.h],e=x({fromSlide:d,toSlide:a.W[b]});V(a.element,"amp-carousel-change",e);1==c?V(a.element,"amp-carousel-next",e):V(a.element,"amp-carousel-prev",e)}};function Z(){return AMP.BaseElement.apply(this,arguments)||this}q(Z,AMP.BaseElement);Z.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new W(this.element):new Q(this.element)};(function(a){a.registerElement("amp-carousel",Z,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,0.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-mode-mouse .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;opacity:0;visibility:hidden}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;-webkit-scroll-snap-type:x mandatory!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{-webkit-scroll-snap-type:none!important;scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-carousel-0.1.js.map
