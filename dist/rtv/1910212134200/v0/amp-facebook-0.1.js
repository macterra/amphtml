(self.AMP=self.AMP||[]).push({n:"amp-facebook",v:"1910212134200",f:(function(AMP,_){
var n,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},t;if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var w;a:{var ba={a:!0},y={};try{y.__proto__=ba;w=y.a;break a}catch(a){}w=!1}t=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var A=t;function B(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function C(a){var b=Object.create(null);if(!a)return b;for(var c;c=ca.exec(a);){var d=B(c[1],c[1]),e=c[2]?B(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var D="";
function E(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!(!c.__AMP_TEST&&!c.__karma__),f=c.__karma__&&c.__karma__.config.amp.testOnIe,g=!!d.localDev||e,h=C(c.location.originalHash||c.location.hash);d=d.spt;var l=C(c.location.search);D||(D=g?"1910212134200":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011910212134200");c={localDev:g,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(h.development)||c.AMP_DEV_MODE),examiner:"2"==h.development,
geoOverride:h["amp-geo"],userLocationOverride:h["amp-user-location"],minified:!0,lite:void 0!=l.amp_lite,test:e,testIe:f,log:h.log,version:"1910212134200",rtvVersion:D,singlePassType:d};c=b.__AMP_MODE=c}return c};var da=Object.prototype.toString;var F=self.AMP_CONFIG||{},G={thirdParty:F.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:F.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof F.thirdPartyFrameRegex?new RegExp(F.thirdPartyFrameRegex):F.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:F.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof F.cdnProxyRegex?new RegExp(F.cdnProxyRegex):F.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:F.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:F.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var H=self.__AMP_LOG;function I(){if(!H.user)throw Error("failed to call initLogConstructor");return H.user}function J(){if(H.dev)return H.dev;throw Error("failed to call initLogConstructor");}function K(a,b,c,d,e){I().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function L(a){return a||{}};var M;var ea=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M46,36c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7h-2.5V36h2.5v-2.2c0-2.5,1.5-3.9,3.8-3.9\n                c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V36h2.8l-0.4,2.9h-2.3v7C42.3,45.1,46,41,46,36z"/><path fill=#ffffff class=i-amphtml-new-loader-transparent-on-shim d="M39.9,38.9l0.4-2.9h-2.8v-1.9c0-0.8,0.4-1.6,1.6-1.6h1.3v-2.5c0,0-1.1-0.2-2.2-0.2c-2.3,0-3.8,1.4-3.8,3.9V36\n                h-2.5v2.9h2.5v7c0.5,0.1,1,0.1,1.6,0.1s1.1,0,1.6-0.1v-7H39.9z"/></svg>'];function N(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var O;function fa(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(r){throw self.__AMP_REPORT_ERROR(r),r;}};var g=ha(),h=!1;c&&(h=c.capture);d.addEventListener("message",f,g?c:h);return function(){d&&d.removeEventListener("message",f,g?c:h);f=d=e=null}}function ha(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ia(a,b){return fa(a,b)};function P(){var a=100;this.A=a;this.l=this.m=0;this.j=Object.create(null)}P.prototype.has=function(a){return!!this.j[a]};P.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};P.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.A)){J().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};L({c:!0,v:!0,a:!0,ad:!0,action:!0});var Q,R;
function S(a){var b;Q||(Q=self.document.createElement("a"),R=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P));var c=b?null:R,d=Q;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=E().test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,d);a=d}return a};function ja(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};function ka(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){J().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function la(a,b){var c=T(a);c=T(c);c=c.isSingleDoc()?c.win:c;return ma(c,b)}function T(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=ma(b,"ampdoc").getAmpDoc(a)}return a}function ma(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};var U,na="Webkit webkit Moz moz ms O o".split(" ");function oa(a){var b;var c=a.style;if(N("border","--"))c="border";else{U||(U=Object.create(null));var d=U.border;if(!d){d="border";if(void 0===c.border){var e;b:{for(e=0;e<na.length;e++){var f=na[e]+"Border";if(void 0!==c[f]){e=f;break b}}e=""}void 0!==c[e]&&(d=e)}U.border=d}c=d}c&&(a.style[c]=b?"none"+b:"none")};function pa(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};function V(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var W={};
function qa(a,b){K("facebook","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+ra(a);var e=d={},f=b.dataset,g;for(g in f)N(g,"vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=V(g);if(void 0===g)throw I().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)e[h]=g[h]}h=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=pa(e);h.height=pa(g);b.getAttribute("title")&&(h.title=
b.getAttribute("title"));var l=a.location.href;"about:srcdoc"==l&&(l=a.parent.location.href);var r=T(b),m=la(b,"documentInfo").get();e=la(b,"viewer").getUnconfirmedReferrerUrl();var v=b.getPageLayoutBox();g=h;f=G.thirdParty+"/1910212134200/ampcontext-v0.js";var z=m.sourceUrl,xa=m.canonicalUrl;m=m.pageViewId;l={href:l};var ya=b.tagName,za={localDev:E(void 0).localDev,development:E(void 0).development,filter:E(void 0).filter,minified:E(void 0).minified,lite:E(void 0).lite,test:E(void 0).test,log:E(void 0).log,
version:E(void 0).version,rtvVersion:E(void 0).rtvVersion,singlePassType:E(void 0).singlePassType},Aa=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);r=!r.isVisible();v=v?{left:v.left,top:v.top,width:v.width,height:v.height}:null;var Ba=b.getIntersectionChangeEntry();var q=b;for(var u=[],k=0;q&&1==q.nodeType&&25>k;){var p="";q.id&&(p="/"+q.id);var Ca=q.nodeName.toLowerCase();u.push(""+Ca+p+ja(q));k++;q=q.parentElement}q=u.join();u=q.length;k=5381;for(p=0;p<u;p++)k=33*k^q.charCodeAt(p);q=String(k>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=
a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);u=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var x in a.AMP_CONFIG)k=a.AMP_CONFIG[x],"number"===typeof k&&0<=k&&1>=k&&(u[x]=Math.random()<k);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(x=a.AMP_CONFIG["allow-doc-opt-in"],k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),p=0;p<k.length;p++)-1!=
x.indexOf(k[p])&&(u[k[p]]=!0);Object.assign(u,ka(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(x=a.AMP_CONFIG["allow-url-opt-in"],a=C(a.location.originalHash||a.location.hash),k=0;k<x.length;k++)p=a["e-"+x[k]],"1"==p&&(u[x[k]]=!0),"0"==p&&(u[x[k]]=!1);a=u}g._context=L({ampcontextVersion:"1910212134200",ampcontextFilepath:f,sourceUrl:z,referrer:e,canonicalUrl:xa,pageViewId:m,location:l,startTime:d,tagName:ya,mode:za,canary:Aa,hidden:r,
initialLayoutRect:v,initialIntersection:Ba,domFingerprint:q,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(h.src=b);d=h;d.type="facebook";Object.assign(d._context,void 0);return d}
function sa(a,b){var c={},d=c.disallowCustom,e=c.allowFullscreen;c=qa(a,b);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;a=ta(a,d);var g=S(a).hostname,h=JSON.stringify(L({host:g,type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=S(a);f.name=h;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);e&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");oa(f);f.onload=function(){this.readyState="complete"};
f.setAttribute("allow","sync-xhr 'none';");var l=["facebook"];l.includes("facebook")||ua(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function ta(a,b){var c=void 0;if(b)b=null;else{b=c;var d=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(d){var e=d.getAttribute("content");var f=void 0===f?"source":f;K(null!=e,"%s %s must be available",d,f);var g=e;"string"==typeof g&&(g=S(g));var h;(h="https:"==g.protocol||"localhost"==g.hostname||"127.0.0.1"==g.hostname)||(g=g.hostname,h=g.length-10,h=0<=h&&g.indexOf(".localhost",h)==h);K(h||/^(\/\/)/.test(e),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
d,f,e);K(-1==e.indexOf("?"),"3p iframe url must not include query string %s in element %s.",e,d);f=S(e);K("localhost"==f.hostname&&!b||f.origin!=S(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",e,f.origin,d);b=e+"?1910212134200"}else b=null}var l=b;(b=l)||(E().localDev||E().test?b=va(a)+"/dist.3p/"+(E().minified?"1910212134200/frame":
"current/frame.max")+".html":(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ra(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+("."+G.thirdPartyFrameHost+"/1910212134200/frame.html")));return b}function va(a){var b=G.thirdParty;"https://3p.ampproject.net"==b&&(b="http://ads.localhost");return b+":"+(a.location.port||a.parent.location.port)}
function ra(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}
function ua(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts".split(" "),d=0;d<b.length;d++){var e=b[d];if(!a.sandbox.supports(e)){J().info("3p-frame","Iframe doesn't support %s",e);return}}a.sandbox=b.join(" ")+" "+c.join(" ")}};function wa(a){if(!Da(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return J().error("MESSAGING","Failed to parse message: "+a,c),null}}function Da(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function Ea(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Fa(a,b){var c=!0,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=Ea(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function Ga(a){for(var b=L({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Ha(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=Ia(b.data);if(c&&c.sentinel){var e=b.source;var f=Ea(a,c.sentinel);if(f){for(var g,h=0;h<f.length;h++){var l=f[h],r=l.frame.contentWindow;if(r){var m;if(!(m=e==r))b:{for(m=e;m&&m!=m.parent;m=m.parent)if(m==r){m=!0;break b}m=!1}if(m){g=l;break}}else setTimeout(Ga,0,f)}e=g?g.events:null}else e=f;var v=e;if(v){var z=v[c.type];if(z)for(z=z.slice(),e=0;e<z.length;e++)(0,z[e])(c,b.source,b.origin,b)}}}};a.addEventListener("message",
b)}}function Ja(a,b){function c(c,d,g,l){if("amp"==c.sentinel){if(d!=a.contentWindow)return;var m="null"==g&&f;if(h!=g&&!m)return}if(e||d==a.contentWindow)"unlisten"==c.sentinel?r():b(c,d,g,l)}var d="embed-size",e,f,g=a.ownerDocument.defaultView;Ha(g);g=Fa(g,a);var h=S(a.src).origin,l=g[d]||(g[d]=[]);l.push(c);var r=function(){if(c){var a=l.indexOf(c);-1<a&&l.splice(a,1);b=l=c=null}}}
function Ia(a){"string"==typeof a&&(a="{"==a.charAt(0)?V(a,function(a){J().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:Da(a)?wa(a):null);return a};function X(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;a=a.hasAttribute("data-locale")?a.getAttribute("data-locale"):window.navigator.language.replace("-","_");b.B=a;b.o=null;b.w=0;return b}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(A)A(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Ka=Object.getOwnPropertyDescriptor(Y,Z);Ka&&Object.defineProperty(X,Z,Ka)}else X[Z]=Y[Z];X.D=Y.prototype;n=X.prototype;n.renderOutsideViewport=function(){return.75};
n.preconnectCallback=function(a){this.preconnect.url("https://facebook.com",a);this.preconnect.preload("https://connect.facebook.net/"+this.B+"/sdk.js","script");var b=this.win,c=this.preconnect,d=ta(b,void 0);c.preload(d,"document");b=E().localDev?va(b)+"/dist.3p/current/integration.js":G.thirdParty+"/1910212134200/f.js";c.preload(b,"script")};n.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
n.layoutCallback=function(){var a=this,b=sa(this.win,this.element);this.applyFillContent(b);Ja(b,function(b){a.changeHeight(b.height)});this.o=ia(this.win,this.C.bind(this));this.toggleLoading(!0);E().test&&this.w++;this.element.appendChild(b);this.h=b;return this.loadPromise(b)};n.C=function(a){if(!this.h||a.source==this.h.contentWindow){var b=a.data;if(b){var c="[object Object]"===da.call(b)?b:V(b);c&&"ready"==b.action&&(this.toggleLoading(!1),E().test&&this.w++)}}};
n.createLoaderLogoCallback=function(){var a=this.element;a=a.ownerDocument||a;M&&M.ownerDocument===a||(M=a.createElement("div"));a=M;a.innerHTML=ea[0];var b=a.firstElementChild;a.removeChild(b);return{color:"#1877F2",content:b}};n.unlayoutOnPause=function(){return!0};n.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.o&&this.o();return!0};(function(a){a.registerElement("amp-facebook",X)})(self.AMP);
})});

//# sourceMappingURL=amp-facebook-0.1.js.map
