(self.AMP=self.AMP||[]).push({n:"amp-base-carousel",v:"1910212134200",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ba={a:!0},t={};try{t.__proto__=ba;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p;function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var da=self.__AMP_LOG;function x(a,b){return 0<a&&0<b?a%b:(a%b+b)%b};function y(a){return a||{}};var z,ea="Webkit webkit Moz moz ms O o".split(" ");function A(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;z||(z=Object.create(null));var d=z[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<ea.length;f++){var h=ea[f]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(z[b]=d)}return d}function fa(a,b){a=a.style;for(var c in b)a.setProperty(A(a,c),b[c].toString(),"important")}
function B(a,b,c){var d;(b=A(a.style,b,void 0))&&(a.style[b]=d?c+d:c)};function C(a,b){var c=b.getBoundingClientRect();b=c.top;var d=c.bottom,e=c.height,f=c.left,h=c.right;c=c.width;return{start:0==a?f:b,end:0==a?h:d,length:0==a?c:e}}function D(a,b){a=C(a,b);return(a.start+a.end)/2}function E(a,b,c){0==a?B(b,"width",c+"px"):B(b,"height",c+"px")}function F(a,b,c){a=C(a,b);b=a.end;return a.start<=c&&c<=b}
function ha(a,b,c,d,e){var f="start"==b?C(a,c).start+1:D(a,c);if(F(a,d[e],f))return e;for(c=1;c<d.length/2;c++){var h=x(e+c,d.length),k=x(e-c,d.length);if(F(a,d[h],f))return h;if(F(a,d[k],f))return k}};function ia(a,b,c){function d(){e=0;var k=c-(a.Date.now()-f);if(0<k)e=a.setTimeout(d,k);else{var l=h;h=null;b.apply(null,l)}}var e=0,f=0,h=null;return function(b){for(var k=[],m=0;m<arguments.length;++m)k[m-0]=arguments[m];f=a.Date.now();h=k;e||(e=a.setTimeout(d,c))}};var G;function ja(a,b,c){var d={capture:!0,passive:!0},e=a,f=c;var h=function(a){try{return f(a)}catch(n){throw self.__AMP_REPORT_ERROR(n),n;}};var k=ka(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=f=null}}function ka(){if(void 0!==G)return G;G=!1;try{var a={get capture(){G=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return G};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function la(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function ma(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):la(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[i-amphtml-scale-animation]"):!1})}function H(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)}
function I(a,b,c){var d=a.hasAttribute(b),e=void 0!==c?c:!d;e!==d&&(e?a.setAttribute(b,""):a.removeAttribute(b))};function J(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function K(a,b,c){ja(a,b,c)}function na(a){var b=a,c=ja(window,"touchend",function(a){try{b(a)}finally{b=null,c()}})};function oa(a){var b=this,c=a.scrollContainer,d=a.advanceable;this.J=a.win;this.h=c;this.wa=d;this.N=0;this.m=!1;this.W=1;this.X=1E3;this.fa=this.R=!1;this.la=null;this.ca=Number.POSITIVE_INFINITY;pa(this,this.X);this.h.addEventListener("scroll",function(){return b.aa()},!0);K(this.h,"touchstart",function(){return b.ba()})}g=oa.prototype;g.stop=function(){this.fa=!0};g.pause=function(){this.R=!0};g.resume=function(){this.R=!1;L(this)};g.updateAutoAdvance=function(a){this.m=a;L(this)};
g.updateAutoAdvanceCount=function(a){this.W=a;L(this)};g.updateAutoAdvanceInterval=function(a){this.X=Math.max(a,1E3);pa(this,this.X);L(this)};g.updateMaxAdvances=function(a){this.ca=a};function pa(a,b){a.la=ia(a.J,function(){a.m&&!a.R&&!a.fa&&a.N<a.ca&&(a.wa.advance(a.W,{actionSource:4,allowWrap:!0}),a.N+=a.W)},b)}g.ba=function(){var a=this;this.pause();na(function(){a.resume()})};g.aa=function(){L(this)};function L(a){a.m&&!a.R&&!a.fa&&a.N<a.ca&&a.la()};function qa(a){var b=this,c=a.element,d=a.scrollContainer,e=a.runMutate,f=a.stoppable;this.J=a.win;this.h=d;this.F=e;this.l=[];this.w=1;this.G=this.I=!1;this.pa=0;c.addEventListener("focus",function(){f.stop()},!0);c.addEventListener("amp-carousel:indexchange",function(a){b.da(a)})}g=qa.prototype;g.updateMixedLength=function(a){this.I=a};g.updateUi=function(){var a=this;this.G||(this.G=!0,this.F(function(){a.G=!1;ra(a);sa(a)}))};g.updateSlides=function(a){this.l=a;this.updateUi()};
g.updateVisibleCount=function(a){this.w=a;this.updateUi()};function ra(a){a.I||2<=a.w?(a.h.removeAttribute("aria-live"),a.h.setAttribute("role","list"),a.l.forEach(function(a){a.setAttribute("role","listitem")})):(a.h.setAttribute("aria-live","polite"),a.h.removeAttribute("role"),a.l.forEach(function(a){a.removeAttribute("role")}))}function sa(a){a.l.forEach(function(b,c){var d=!(a.I||2<=a.w)&&c!==a.pa;b.setAttribute("aria-hidden",d)})}g.da=function(a){var b=this;this.pa=a.detail.index;this.F(function(){sa(b)})};function ta(a,b){var c=(c=A(a.style,"scrollBehavior",void 0))?a.style[c]:void 0;var d=c;B(a,"scrollBehavior","auto");b();B(a,"scrollBehavior",d)}function M(a){return a.reduce(function(a,c){return a+c},0)}
function ua(a){var b=this,c=a.win,d=a.element,e=a.scrollContainer;a=a.runMutate;this.J=c;this.F=a;this.Z=d;this.h=e;this.m=new oa({win:c,scrollContainer:e,advanceable:this});this.Y=new qa({win:c,element:d,scrollContainer:e,runMutate:a,stoppable:this.m});this.ma=ia(c,function(){return N(b)},200);this.M=1;this.ia=Number.POSITIVE_INFINITY;this.I=!1;this.l=[];this.va=!0;this.G=!1;this.L=[];this.T=[];this.K=[];this.ha=[];this.H=!1;this.ka=0;this.B=null;this.U=NaN;this.ea=this.V=!1;this.C=void 0;this.D=
"start";this.A=0;this.oa=this.O=!0;this.o=0;this.qa=!1;this.ua=!0;this.w=this.ta=1;this.h.addEventListener("scroll",function(){return b.aa()},!0);this.h.addEventListener("scrollend",function(){N(b)},!0);K(this.h,"touchstart",function(){return b.ba()});K(this.h,"wheel",function(){b.C=2;b.B=null;b.H=!1})}g=ua.prototype;g.next=function(a){this.advance(this.M,{actionSource:a})};g.prev=function(a){this.advance(-this.M,{actionSource:a})};
g.advance=function(a,b){var c=void 0===b?{}:b;b=c.actionSource;var d=void 0===c.allowWrap?!1:c.allowWrap;c=this.o;var e=this.B;c=null!=e?e:c;var f=c+a,h=this.l.length-1,k=0==c,l=c==h,m=0>f,n=f>h;var r=this.isLooping()?x(f,h+1):d?0<a&&va(this,c)&&va(this,f)?0:m&&k||n&&!l?h:m&&!k||n&&l?0:f:Math.min(Math.max(f,0),h);this.goToSlide(r,{actionSource:b})};g.pauseAutoAdvance=function(){this.m.pause()};g.resumeAutoAdvance=function(){this.m.resume()};g.getCurrentIndex=function(){return this.o};
g.getVisibleCount=function(){return this.w};g.isLooping=function(){return this.qa&&3<=this.l.length/this.w};g.goToSlide=function(a,b){b=void 0===b?{}:b;var c=void 0===b.smoothScroll?!0:b.smoothScroll;b=b.actionSource;0>a||a>this.l.length-1||isNaN(a)||a==this.o||this.V||this.ea&&(3==this.C||2==this.C)||(this.H=!1,this.B=a,this.C=b,wa(this,this.l[a],{smoothScroll:c}))};g.updateAdvanceCount=function(a){this.M=a};g.updateAlignment=function(a){this.D="start"==a?"start":"center";this.updateUi()};
g.updateAutoAdvance=function(a){this.m.updateAutoAdvance(a)};g.updateAutoAdvanceCount=function(a){this.m.updateAutoAdvanceCount(a)};g.updateAutoAdvanceInterval=function(a){this.m.updateAutoAdvanceInterval(a)};g.updateAutoAdvanceLoops=function(a){this.ia=a;this.updateUi()};g.updateForwards=function(a){this.O=a;this.updateUi()};g.updateHideScrollbar=function(a){this.oa=a;this.updateUi()};g.updateHorizontal=function(a){this.A=a?0:1;this.updateUi()};g.updateLoop=function(a){this.qa=a;this.updateUi()};
g.updateMixedLength=function(a){this.I=a;this.Y.updateMixedLength(a);this.updateUi()};g.updateSlides=function(a){this.l=a;this.Y.updateSlides(a);this.updateUi()};g.updateSnap=function(a){this.ua=a;this.updateUi()};g.updateSnapBy=function(a){this.ta=Math.max(1,a);this.updateUi()};g.updateUserScrollable=function(a){this.va=a;this.updateUi()};
g.updateUi=function(){var a=this;this.G||(this.G=!0,this.F(function(){a.G=!1;a.h.setAttribute("mixed-length",a.I);a.h.setAttribute("user-scrollable",a.va);a.h.setAttribute("hide-scrollbar",a.oa);a.h.setAttribute("horizontal",0==a.A);a.h.setAttribute("loop",a.isLooping());a.h.setAttribute("snap",a.ua);fa(a.h,{"--visible-count":a.w});a.l.length&&(a.m.updateMaxAdvances(a.ia*a.l.length-1),xa(a),ya(a),za(a),N(a,!0))}))};
g.updateVisibleCount=function(a){this.w=Math.max(1,a);this.Y.updateVisibleCount(a);this.updateUi()};g.notifyScrollStart=function(){this.Z.dispatchEvent(J(this.J,"amp-carousel:scrollstart",null))};g.ba=function(){var a=this;this.V=!0;this.C=3;this.B=null;this.H=!1;na(function(){a.V=!1;a.ma()})};g.aa=function(){this.H?this.H=!1:(this.ea=!0,Aa(this),this.notifyScrollStart(),this.ma())};
function O(a,b,c,d){var e=a.A,f=c*d*(a.O?1:-1);a=0==e?f:0;e=0==e?0:f;B(b,"transform","translate("+a+"px, "+e+"px)");fa(b,{"--content-transform":"translate("+a+"px, "+e+"px)"});b._revolutions=c}function Ba(a,b){a.l.forEach(function(c){O(a,c,0,b)})}function P(a){return a.l.map(function(b){return C(a.A,b).length})}g.isAtEnd=function(){return this.isLooping()?!1:this.O?this.isScrollAtRightEdge():this.isScrollAtLeftEdge()};
g.isAtStart=function(){return this.isLooping()?!1:this.O?this.isScrollAtLeftEdge():this.isScrollAtRightEdge()};g.isScrollAtRightEdge=function(){var a=this.h,b=a.getBoundingClientRect().width;return a.scrollLeft+b>=a.scrollWidth};g.isScrollAtLeftEdge=function(){return 0>=this.h.scrollLeft};function Q(a){for(var b=[],c=0;c<a;c++){var d=document.createElement("div");d.className="i-amphtml-carousel-spacer";b.push(d)}return b}
function xa(a){var b=a.A,c=a.l,d=P(a),e=M(d),f=a.isLooping()?c.length:0;a.L.forEach(function(b){a.h.removeChild(b)});a.L=Q(f);a.L.forEach(function(e,f){E(b,e,d[f]);a.h.insertBefore(e,c[0])});a.T.forEach(function(b){a.h.removeChild(b)});a.T=Q(f);a.T.forEach(function(c,f){E(b,c,d[f]);O(a,c,-1,e);a.h.appendChild(c)});a.K.forEach(function(b){a.h.removeChild(b)});a.K=Q(f);a.K.forEach(function(c,f){E(b,c,d[f]);O(a,c,-1,e);a.h.appendChild(c)});a.ha=a.L.concat(a.T,a.K)}
function ya(a){var b=a.l.length,c="start"==a.D,d=1==x(a.w,2),e=c||d?"0%":"50%";H(a.h.children,function(c,d){d=x(d,b);var f=0==x(d,a.ta);d={"scroll-snap-align":f?a.D:"none","scroll-snap-coordinate":f?e:"none"};for(var h in d)B(c,h,d[h])})}
function za(a){var b=a.K,c=a.L,d=a.o,e=a.l,f=Math.max(0,e.length-d-1),h=Math.max(0,d-1);c.forEach(function(a,b){var h=c.length,k=d===b?h:x(d-b,h),l=k>e.length-1;a.hidden=l||b<e.length-f});b.forEach(function(a,c){var f=b.length;f=d===c?f:x(c-d,f);a.hidden=f>e.length-1||c>h})}
function Aa(a){var b=a.ha,c=a.D,d=a.A,e=a.o,f=a.h,h=a.l,k=M(P(a)),l=!!b.length,m=l?b:h,n=ha(d,c,f,m,l?e+h.length:e);if(void 0!==n){var r=n%h.length,R=C(d,h[r]).start,La=C(d,f).start;a.ka=R-La;r!=e&&a.F(function(){a.o=r;Ca(a,k)})}}
function N(a,b){b=void 0===b?!1:b;var c=a.C;if(!a.V&&(a.C=void 0,a.ea=!1,a.F(function(){a.Z.dispatchEvent(J(a.J,"amp-carousel:scrollpositionchange",null))}),a.U!=a.o||null!=a.B||b)){null!=a.B&&(a.o=a.B,a.B=null);var d=M(P(a));a.F(function(){var b=a.o;a.U!=b&&(a.U=b,a.Z.dispatchEvent(J(a.J,"amp-carousel:indexchange",y({index:b,actionSource:c}))));Ba(a,d);za(a);Ca(a,d);Da(a)})}}
function Da(a){var b=a.A,c=a.ka,d=a.h,e=a.l[a.o],f=C(b,d),h=f.length;f=f.start;e=C(b,e).start;var k=0==b?d.scrollLeft:d.scrollTop,l=e-(Math.abs(c)<=h?c:0)-f+k;a.H=!0;ta(d,function(){0==b?d.scrollLeft=l:d.scrollTop=l})}function wa(a,b,c){var d=c.smoothScroll?function(a,b){return b()}:ta;d(a.h,function(){var c=a.h,d=a.A,h="start"==a.D,k=h?C(d,b).start:D(d,b);h=h?C(d,c).start:D(d,c);k=(0==d?c.scrollLeft:c.scrollTop)+(k-h);0==d?c.scrollLeft=k:c.scrollTop=k})}
function Ea(a,b,c,d){for(var e=a.o,f=a.U,h=a.l,k=h[e],l=k._revolutions||0,m=d?1:-1,n=1;n<=c;n++){var r=x(e+n*m,h.length);if(r===f&&e!==f)break;var R=r>e!==d;O(a,h[r],R?l+m:l,b)}}function Ca(a,b){if(a.isLooping()){var c=a.l,d=a.w,e="start"==a.D,f=e?d-1:0,h=(c.length-1-f)/2,k=(c.length-1+f)/2;Ea(a,b,Math.round(h),!1);Ea(a,b,Math.round(k),!0)}}function va(a,b){var c=a.w,d="start"==a.D?c:c/2;return b>=a.l.length-d};function Fa(a){return a.split(",").map(function(a){var b=/[a-z0-9.]+$/.exec(a);if(b){b=b.index;var d=a.slice(b),e=a.slice(0,b).trim(),f=window.matchMedia(e);return{mediaQueryList:f,value:d}}}).filter(function(a){return a})}function Ga(a){for(var b=0;b<a.length;b++){var c=a[b],d=c.value;if(c.mediaQueryList.matches)return d}return""}function Ha(a){this.ja=a;this.na={};this.ra={}}
Ha.prototype.updateAttribute=function(a,b){var c=this;if(this.ja[a]){var d=this.ra[a];d&&Ia(d,null);var e=Fa(b),f=function(){var b=Ga(e);if(c.na[a]!==b){var d=c.ja[a];d&&d(b);c.na[a]=b}};Ia(e,f);f();this.ra[a]=e}};function Ia(a,b){a.forEach(function(a){a.mediaQueryList.onchange=b})};y({c:!0,v:!0,a:!0,ad:!0,action:!0});function S(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,Ja(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var h;h=ca.exec(e);)f=v(h[1],h[1]),h=h[2]?v(h[2].replace(/\+/g," "),h[2]):"",a[f]=h;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var k=
c;return!!k[b]}function Ja(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(da.dev)a=da.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function Ka(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e=S(c,"ampdoc-fie");d&&!e?a=T(b,"action")?U(b,"action"):null:(a=Ma(a),a=Ma(a),a=a.isSingleDoc()?a.win:a,a=T(a,"action")?U(a,"action"):null);return a}function Ma(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=U(b,"ampdoc").getAmpDoc(a)}return a}
function U(a,b){T(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function T(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var V;function W(a){a=a.ownerDocument||a;V&&V.ownerDocument===a||(V=a.createElement("div"));return Na}function Na(a){var b=V;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};var Oa=["<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-base-carousel-arrows><div class=i-amphtml-base-carousel-arrow-prev-slot></div><div class=i-amphtml-base-carousel-arrow-next-slot></div></div></div>"],Pa=['<button class=i-amphtml-base-carousel-next aria-label="Next item in carousel"></button>'],Qa=['<button class=i-amphtml-base-carousel-prev aria-label="Previous item in carousel"></button>'];
function X(a){var b=AMP.BaseElement.call(this,a)||this;b.M=1;b.j=null;b.l=[];b.P=null;b.S=null;b.$=!1;b.ga=null;b.sa=new Ha({"advance-count":function(a){b.j.updateAdvanceCount(Number(a)||0)},"auto-advance":function(a){b.j.updateAutoAdvance("true"==a)},"auto-advance-count":function(a){b.j.updateAutoAdvanceCount(Number(a)||0)},"auto-advance-interval":function(a){b.j.updateAutoAdvanceInterval(Number(a)||0)},"auto-advance-loops":function(a){b.j.updateAutoAdvanceLoops(Number(a)||0)},dir:function(a){b.j.updateForwards("rtl"!=
a)},horizontal:function(a){b.j.updateHorizontal("true"==a)},loop:function(a){b.j.updateLoop("true"==a)},"mixed-length":function(a){b.j.updateMixedLength("true"==a)},slide:function(a){b.j.goToSlide(Number(a))},snap:function(a){b.j.updateSnap("true"==a)},"snap-align":function(a){b.j.updateAlignment(a)},"snap-by":function(a){b.j.updateSnapBy(Number(a)||0)},"visible-count":function(a){b.j.updateVisibleCount(Number(a)||0)}});return b}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);
X.prototype.constructor=X;if(u)u(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Ra=Object.getOwnPropertyDescriptor(Y,Z);Ra&&Object.defineProperty(X,Z,Ra)}else X[Z]=Y[Z];X.xa=Y.prototype;g=X.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.buildCallback=function(){var a=this;this.ga=Ka(this.element);var b=this.element,c=this.win,d,e;w(b.children).forEach(function(b){var c=b.getAttribute("slot");"prev-arrow"==c?d=b:"next-arrow"==c?e=b:"I-AMPHTML-SIZER"==b.tagName||a.l.push(b)});b.appendChild(Sa(this));var f=this.element.querySelector(".i-amphtml-carousel-scroll");this.j=new ua({win:c,element:b,scrollContainer:f,initialIndex:Ta(this),runMutate:function(b){return a.mutateElement(b)}});this.l.forEach(function(a){a.classList.add("i-amphtml-carousel-slotted");
f.appendChild(a)});this.S=this.element.querySelector(".i-amphtml-base-carousel-arrow-prev-slot");this.P=this.element.querySelector(".i-amphtml-base-carousel-arrow-next-slot");this.S.appendChild(d||W(this.element)(Qa));this.P.appendChild(e||W(this.element)(Pa));w(this.element.attributes).forEach(function(b){a.sa.updateAttribute(b.name,b.value)});Ua(this);this.element.addEventListener("amp-carousel:indexchange",function(b){a.da(b)});this.S.addEventListener("click",function(b){b.target!=b.currentTarget&&
a.j.prev(0)});this.P.addEventListener("click",function(b){b.target!=b.currentTarget&&a.j.next(0)});this.j.updateSlides(this.l);Va(this);return this.mutateElement(function(){})};g.isRelayoutNeeded=function(){return!0};g.layoutCallback=function(){var a=ma(this.element);if(a)return Promise.resolve();this.j.updateUi();return Promise.resolve()};g.pauseCallback=function(){this.j.pauseAutoAdvance()};g.resumeCallback=function(){this.j.resumeAutoAdvance()};
g.mutatedAttributesCallback=function(a){for(var b in a)this.sa.updateAttribute(b,String(a[b]))};g.goToSlide=function(a){this.j.goToSlide(a,{smoothScroll:!1})};g.interactionNext=function(){this.j.next(0)};g.interactionPrev=function(){this.j.prev(0)};function Sa(a){var b=W(a.element);return b(Oa)}
function Ua(a){a.registerAction("prev",function(b){a.j.prev(100==b.trust?0:1)},1);a.registerAction("next",function(b){a.j.next(100==b.trust?0:1)},1);a.registerAction("goToSlide",function(b){a.j.goToSlide(b.args.index||-1,{actionSource:100==b.trust?0:1})},1)}
function Va(a){var b=a.j.getCurrentIndex(),c=a.j.isLooping();H(a.S.children,function(a){var d=!c&&0==b;I(a,"disabled",d)});H(a.P.children,function(d){I(d,"disabled",!c&&b==a.l.length-1)});I(a.element,"i-amphtml-base-carousel-hide-buttons",a.$)}function Ta(a){a=a.element.getAttribute("slide")||"0";return Number(Ga(Fa(a)))}
g.da=function(a){var b=a.detail;a=b.actionSource;b=y({index:b.index});var c=2==a||3==a||0==a,d=c?100:1,e=J(this.win,"slidescroll.slideChange",b);this.ga.trigger(this.element,"slideChange",e,d);this.element.dispatchCustomEvent("slideChange",b);this.$=this.$||3==a;Va(this)};(function(a){(S(a.win,"amp-base-carousel")||S(a.win,"amp-lightbox-gallery-base-carousel"))&&a.registerElement("amp-base-carousel",X,".i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;-webkit-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;-webkit-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{-webkit-scroll-snap-type:none;scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-base-carousel{display:block;overflow:hidden}.i-amphtml-base-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;pointer-events:none}.i-amphtml-base-carousel-arrow-next-slot,.i-amphtml-base-carousel-arrow-prev-slot{position:relative;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.i-amphtml-base-carousel-arrow-next-slot>*,.i-amphtml-base-carousel-arrow-prev-slot>*{pointer-events:all}amp-base-carousel[dir=rtl] .i-amphtml-base-carousel-arrow-next-slot,amp-base-carousel[dir=rtl] .i-amphtml-base-carousel-arrow-prev-slot{transform:scaleX(-1)}amp-base-carousel[i-amphtml-base-carousel-hide-buttons] .i-amphtml-base-carousel-arrow-next-slot,amp-base-carousel[i-amphtml-base-carousel-hide-buttons] .i-amphtml-base-carousel-arrow-prev-slot,amp-base-carousel[loop=false] .i-amphtml-base-carousel-arrow-next-slot>[disabled],amp-base-carousel[loop=false] .i-amphtml-base-carousel-arrow-prev-slot>[disabled]{opacity:0;pointer-events:none}.i-amphtml-base-carousel-next,.i-amphtml-base-carousel-prev{filter:drop-shadow(0px 1px 2px #4a4a4a);width:40px;height:40px;padding:20px;background-color:transparent;border:none;outline:none}.i-amphtml-base-carousel-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 7.4L9.4 12l4.6 4.6' fill='none' stroke='%23fff' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'/%3E%3C/svg%3E\")}.i-amphtml-base-carousel-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7.4l4.6 4.6-4.6 4.6' fill='none' stroke='%23fff' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'/%3E%3C/svg%3E\")}amp-base-carousel .i-amphtml-carousel-slotted>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-base-carousel/0.1/amp-base-carousel.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-base-carousel-0.1.js.map
