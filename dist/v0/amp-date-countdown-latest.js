(self.AMP=self.AMP||[]).push({n:"amp-date-countdown",v:"1910212134200",f:(function(AMP,_){
var g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=n;function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(e){return b}};var w=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function z(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(f){if(x.dev)a=x.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var e=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var c=0;c<e.length;c++)0!=e[c].length&&("-"==e[c][0]?a[e[c].substr(1)]=!1:a[e[c]]=!0);return a};function A(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return B(a,b)}function C(a){return a.nodeType?A((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a,b){D(a,b);var e=a.__AMP_SERVICES;e||(e=a.__AMP_SERVICES={});var c=e;a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var E={de:"Jahren Monaten Tagen Stunden Minuten Sekunden".split(" "),en:"Years Months Days Hours Minutes Seconds".split(" "),es:"a\u00f1os meses d\u00edas horas minutos segundos".split(" "),fr:"ans mois jours heures minutes secondes".split(" "),id:"tahun bulan hari jam menit detik".split(" "),it:"anni mesi giorni ore minuti secondi".split(" "),ja:"\u5e74 \u30f6\u6708 \u65e5 \u6642\u9593 \u5206 \u79d2".split(" "),ko:"\ub144 \ub2ec \uc77c \uc2dc\uac04 \ubd84 \ucd08".split(" "),nl:"jaar maanden dagen uur minuten seconden".split(" "),
pt:"anos meses dias horas minutos segundos".split(" "),ru:"\u0433\u043e\u0434 \u043c\u0435\u0441\u044f\u0446 \u0434\u0435\u043d\u044c \u0447\u0430\u0441 \u043c\u0438\u043d\u0443\u0442\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430".split(" "),th:"\u0e1b\u0e35 \u0e40\u0e14\u0e37\u0e2d\u0e19 \u0e27\u0e31\u0e19 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 \u0e19\u0e32\u0e17\u0e35 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35".split(" "),tr:"y\u0131l ay g\u00fcn saat dakika saniye".split(" "),vi:"n\u0103m th\u00e1ng ng\u00e0y gi\u1edd ph\u00fat gi\u00e2y".split(" "),
"zh-cn":"\u5e74 \u6708 \u5929 \u5c0f\u65f6 \u5206\u949f \u79d2".split(" "),"zh-tw":"\u5e74 \u6708 \u5929 \u5c0f\u6642 \u5206\u9418 \u79d2".split(" ")};function F(a){a=AMP.BaseElement.call(this,a)||this;a.G=A(a.win,"templates");a.I=a.J.bind(a);a.o="";a.A=0;a.B=0;a.C=0;a.w=0;a.F="";a.H="";a.j="";a.D=null;a.l=null;return a}var G=AMP.BaseElement;F.prototype=g(G.prototype);F.prototype.constructor=F;
if(u)u(F,G);else for(var H in G)if("prototype"!=H)if(Object.defineProperties){var I=Object.getOwnPropertyDescriptor(G,H);I&&Object.defineProperty(F,H,I)}else F[H]=G[H];F.K=G.prototype;
F.prototype.buildCallback=function(){var a=this;this.o=this.element.getAttribute("end-date");this.A=Number(this.element.getAttribute("timeleft-ms"));this.B=Number(this.element.getAttribute("timestamp-ms"));this.C=Number(this.element.getAttribute("timestamp-seconds"));this.w=Number(this.element.getAttribute("offset-seconds"))||0;this.F=(this.element.getAttribute("locale")||"en").toLowerCase();this.H=(this.element.getAttribute("when-ended")||"stop").toLowerCase();this.j=(this.element.getAttribute("biggest-unit")||
"DAYS").toUpperCase();this.D=J(this.F);this.getAmpDoc().whenFirstVisible().then(function(){var b=K(a)+1E3*a.w;L(a,new Date(b)-new Date)})};F.prototype.renderOutsideViewport=function(){return!0};F.prototype.layoutCallback=function(){var a=this,b=1E3,e=K(this)+this.w*b,c=new Date(e)-new Date-b;this.l=this.win.setInterval(function(){L(a,c);c-=b},b);return Promise.resolve()};F.prototype.unlayoutCallback=function(){this.win.clearInterval(this.l);return!0};
F.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
function L(a,b){var e={},c={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4},f=c[a.j]==c.DAYS?M(Math.floor(b/864E5)):0,t=c[a.j]==c.HOURS?M(Math.floor(b/36E5)):c[a.j]<c.HOURS?M(Math.floor(b%864E5/36E5)):0,h=c[a.j]==c.MINUTES?M(Math.floor(b/6E4)):c[a.j]<c.MINUTES?M(Math.floor(b%36E5/6E4)):0;c=c[a.j]==c.SECONDS?M(Math.floor(b/1E3)):M(Math.floor(b%6E4/1E3));var O={d:f,dd:N(f),h:t,hh:N(t),m:h,mm:N(h),s:c,ss:N(c)};if("stop"===a.H&&1E3>b){b=a.element;f=b.ownerDocument.defaultView;c=f.__AMP_TOP||(f.__AMP_TOP=f);t=f!=
c;if(c.__AMP__EXPERIMENT_TOGGLES)h=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);h=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var k in c.AMP_CONFIG){var d=c.AMP_CONFIG[k];"number"===typeof d&&0<=d&&1>=d&&(h[k]=Math.random()<d)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(k=c.AMP_CONFIG["allow-doc-opt-in"],d=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=d.getAttribute("content").split(",");
for(var l=0;l<d.length;l++)-1!=k.indexOf(d[l])&&(h[d[l]]=!0)}Object.assign(h,z(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){k=c.AMP_CONFIG["allow-url-opt-in"];d=c.location.originalHash||c.location.hash;c=Object.create(null);if(d)for(var m;m=w.exec(d);)l=v(m[1],m[1]),m=m[2]?v(m[2].replace(/\+/g," "),m[2]):"",c[l]=m;for(d=0;d<k.length;d++)l=c["e-"+k[d]],"1"==l&&(h[k[d]]=!0),"0"==l&&(h[k[d]]=!1)}}h=!!h["ampdoc-fie"];t&&!h?b=D(f,"action")?
B(f,"action"):null:(b=C(b),b=C(b),b=b.isSingleDoc()?b.win:b,b=D(b,"action")?B(b,"action"):null);b.trigger(a.element,"timeout",null,1);a.win.clearInterval(a.l)}e.data=Object.assign(O,a.D);a.G.findAndRenderTemplate(a.element,e.data).then(a.I)}
function K(a){var b;a.o?b=Date.parse(a.o):a.A?b=Number(new Date)+a.A:a.B?b=a.B:a.C&&(b=1E3*a.C);a=!isNaN(b);y().assert(a,"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);return b}function J(a){if(E[a]){var b=E[a];return{years:b[0],months:b[1],days:b[2],hours:b[3],minutes:b[4],seconds:b[5]}}y().error("amp-date-countdown","Invalid locale %s, return empty locale word",a);return{}}
function N(a){return-9>a||9<a?String(a):-9<=a&&0>a?"-0"+Math.abs(a):"0"+a}function M(a){return 0>a?a+1:a}F.prototype.J=function(a){var b=this;return this.mutateElement(function(){for(var e=b.G.findTemplate(b.element),c=b.element.contains(e),f=b.element;f.firstChild;)f.removeChild(f.firstChild);c&&b.element.appendChild(e);b.element.appendChild(a)})};(function(a){a.registerElement("amp-date-countdown",F)})(self.AMP);
})});

//# sourceMappingURL=amp-date-countdown-0.1.js.map
