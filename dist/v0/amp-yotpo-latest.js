(self.AMP=self.AMP||[]).push({n:"amp-yotpo",v:"1910212134200",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var r;a:{var ba={a:!0},t={};try{t.__proto__=ba;r=t.a;break a}catch(a){}r=!1}n=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var y=n;function A(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function B(a){var b=Object.create(null);if(!a)return b;for(var c;c=ca.exec(a);){var d=A(c[1],c[1]),e=c[2]?A(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var C="";
function D(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!(!c.__AMP_TEST&&!c.__karma__),f=c.__karma__&&c.__karma__.config.amp.testOnIe,g=!!d.localDev||e,h=B(c.location.originalHash||c.location.hash);d=d.spt;var l=B(c.location.search);C||(C=g?"1910212134200":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011910212134200");c={localDev:g,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(h.development)||c.AMP_DEV_MODE),examiner:"2"==h.development,
geoOverride:h["amp-geo"],userLocationOverride:h["amp-user-location"],minified:!0,lite:void 0!=l.amp_lite,test:e,testIe:f,log:h.log,version:"1910212134200",rtvVersion:C,singlePassType:d};c=b.__AMP_MODE=c}return c};var E=self.AMP_CONFIG||{},F={thirdParty:E.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:E.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof E.thirdPartyFrameRegex?new RegExp(E.thirdPartyFrameRegex):E.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:E.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:E.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:E.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;function H(){if(!G.user)throw Error("failed to call initLogConstructor");return G.user}function I(){if(G.dev)return G.dev;throw Error("failed to call initLogConstructor");}function J(a,b,c,d,e){H().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function K(){var a=100;this.w=a;this.l=this.m=0;this.h=Object.create(null)}K.prototype.has=function(a){return!!this.h[a]};K.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.l,b.payload};K.prototype.put=function(a,b){this.has(a)||this.m++;this.h[a]={payload:b,access:this.l};if(!(this.m<=this.w)){I().warn("lru-cache","Trimming LRU cache");a=this.h;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};function L(a){return a||{}};function M(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};L({c:!0,v:!0,a:!0,ad:!0,action:!0});var N,O;
function P(a){var b;N||(N=self.document.createElement("a"),O=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new K));var c=b?null:O,d=N;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=D().test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,d);a=d}return a};function da(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};function ea(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){I().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function Q(a,b){var c=R(a);c=R(c);c=c.isSingleDoc()?c.win:c;return S(c,b)}function R(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=S(b,"ampdoc").getAmpDoc(a)}return a}function S(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function fa(a){a.parentElement&&a.parentElement.removeChild(a)};var T,U="Webkit webkit Moz moz ms O o".split(" ");function ha(a){var b;var c=a.style;if(M("border","--"))c="border";else{T||(T=Object.create(null));var d=T.border;if(!d){d="border";if(void 0===c.border){var e;b:{for(e=0;e<U.length;e++){var f=U[e]+"Border";if(void 0!==c[f]){e=f;break b}}e=""}void 0!==c[e]&&(d=e)}T.border=d}c=d}c&&(a.style[c]=b?"none"+b:"none")};function V(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};function ia(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var W={};
function ja(a,b){J("yotpo","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+ka(a);var e=d={},f=b.dataset,g;for(g in f)M(g,"vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=ia(g);if(void 0===g)throw H().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)e[h]=g[h]}h=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=V(e);h.height=V(g);b.getAttribute("title")&&(h.title=b.getAttribute("title"));
var l=a.location.href;"about:srcdoc"==l&&(l=a.parent.location.href);var v=R(b),m=Q(b,"documentInfo").get();e=Q(b,"viewer").getUnconfirmedReferrerUrl();var w=b.getPageLayoutBox();g=h;f=F.thirdParty+"/1910212134200/ampcontext-v0.js";var z=m.sourceUrl,oa=m.canonicalUrl;m=m.pageViewId;l={href:l};var pa=b.tagName,qa={localDev:D(void 0).localDev,development:D(void 0).development,filter:D(void 0).filter,minified:D(void 0).minified,lite:D(void 0).lite,test:D(void 0).test,log:D(void 0).log,version:D(void 0).version,
rtvVersion:D(void 0).rtvVersion,singlePassType:D(void 0).singlePassType},ra=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);v=!v.isVisible();w=w?{left:w.left,top:w.top,width:w.width,height:w.height}:null;var sa=b.getIntersectionChangeEntry();var q=b;for(var u=[],k=0;q&&1==q.nodeType&&25>k;){var p="";q.id&&(p="/"+q.id);var ta=q.nodeName.toLowerCase();u.push(""+ta+p+da(q));k++;q=q.parentElement}q=u.join();u=q.length;k=5381;for(p=0;p<u;p++)k=33*k^q.charCodeAt(p);q=String(k>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=
a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);u=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var x in a.AMP_CONFIG)k=a.AMP_CONFIG[x],"number"===typeof k&&0<=k&&1>=k&&(u[x]=Math.random()<k);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(x=a.AMP_CONFIG["allow-doc-opt-in"],k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),p=0;p<k.length;p++)-1!=
x.indexOf(k[p])&&(u[k[p]]=!0);Object.assign(u,ea(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(x=a.AMP_CONFIG["allow-url-opt-in"],a=B(a.location.originalHash||a.location.hash),k=0;k<x.length;k++)p=a["e-"+x[k]],"1"==p&&(u[x[k]]=!0),"0"==p&&(u[x[k]]=!1);a=u}g._context=L({ampcontextVersion:"1910212134200",ampcontextFilepath:f,sourceUrl:z,referrer:e,canonicalUrl:oa,pageViewId:m,location:l,startTime:d,tagName:pa,mode:qa,canary:ra,hidden:v,
initialLayoutRect:w,initialIntersection:sa,domFingerprint:q,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(h.src=b);d=h;d.type="yotpo";Object.assign(d._context,void 0);return d}
function la(a,b){var c={},d=c.disallowCustom,e=c.allowFullscreen;c=ja(a,b);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;a=ma(a,d);var g=P(a).hostname,h=JSON.stringify(L({host:g,type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=P(a);f.name=h;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);e&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ha(f);f.onload=function(){this.readyState="complete"};
f.setAttribute("allow","sync-xhr 'none';");var l=["facebook"];l.includes("yotpo")||na(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function ma(a,b){var c=void 0;if(b)b=null;else{b=c;var d=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(d){var e=d.getAttribute("content");var f=void 0===f?"source":f;J(null!=e,"%s %s must be available",d,f);var g=e;"string"==typeof g&&(g=P(g));var h;(h="https:"==g.protocol||"localhost"==g.hostname||"127.0.0.1"==g.hostname)||(g=g.hostname,h=g.length-10,h=0<=h&&g.indexOf(".localhost",h)==h);J(h||/^(\/\/)/.test(e),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
d,f,e);J(-1==e.indexOf("?"),"3p iframe url must not include query string %s in element %s.",e,d);f=P(e);J("localhost"==f.hostname&&!b||f.origin!=P(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",e,f.origin,d);b=e+"?1910212134200"}else b=null}var l=b;(b=l)||(D().localDev||D().test?(b=F.thirdParty,"https://3p.ampproject.net"==b&&(b=
"http://ads.localhost"),b=b+":"+(a.location.port||a.parent.location.port)+"/dist.3p/"+(D().minified?"1910212134200/frame":"current/frame.max")+".html"):(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ka(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+("."+F.thirdPartyFrameHost+"/1910212134200/frame.html")));return b}
function ka(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}
function na(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts".split(" "),d=0;d<b.length;d++){var e=b[d];if(!a.sandbox.supports(e)){I().info("3p-frame","Iframe doesn't support %s",e);return}}a.sandbox=b.join(" ")+" "+c.join(" ")}};function ua(a){if(!va(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return I().error("MESSAGING","Failed to parse message: "+a,c),null}}function va(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function wa(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function xa(a,b){var c=!0,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=wa(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function ya(a){for(var b=L({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function za(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=Aa(b.data);if(c&&c.sentinel){var e=b.source;var f=wa(a,c.sentinel);if(f){for(var g,h=0;h<f.length;h++){var l=f[h],v=l.frame.contentWindow;if(v){var m;if(!(m=e==v))b:{for(m=e;m&&m!=m.parent;m=m.parent)if(m==v){m=!0;break b}m=!1}if(m){g=l;break}}else setTimeout(ya,0,f)}e=g?g.events:null}else e=f;var w=e;if(w){var z=w[c.type];if(z)for(z=z.slice(),e=0;e<z.length;e++)(0,z[e])(c,b.source,b.origin,b)}}}};a.addEventListener("message",
b)}}function Ba(a,b){function c(c,d,g,l){if("amp"==c.sentinel){if(d!=a.contentWindow)return;var m="null"==g&&f;if(h!=g&&!m)return}if(e||d==a.contentWindow)"unlisten"==c.sentinel?v():b(c,d,g,l)}var d="embed-size",e,f,g=a.ownerDocument.defaultView;za(g);g=xa(g,a);var h=P(a.src).origin,l=g[d]||(g[d]=[]),v;l.push(c);return v=function(){if(c){var a=l.indexOf(c);-1<a&&l.splice(a,1);b=l=c=null}}}
function Aa(a){"string"==typeof a&&(a="{"==a.charAt(0)?ia(a,function(a){I().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:va(a)?ua(a):null);return a};function X(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.o=[];return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(y)y(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Ca=Object.getOwnPropertyDescriptor(Y,Z);Ca&&Object.defineProperty(X,Z,Ca)}else X[Z]=Y[Z];X.A=Y.prototype;X.prototype.preconnectCallback=function(a){this.preconnect.url("https://staticw2.yotpo.com",a)};
X.prototype.buildCallback=function(){var a=this;J(this.element.getAttribute("data-app-key"),"The data-app-key attribute is required for <amp-yotpo> %s",this.element);J(this.element.getAttribute("data-widget-type"),"The data-widget-type attribute is required for <amp-yotpo> %s",this.element);var b=la(this.win,this.element);this.applyFillContent(b);var c=Ba(b,function(b){a.attemptChangeHeight(b.height).catch(function(){})});this.o.push(c);this.element.appendChild(b);this.j=b;return this.loadPromise(b)};
X.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};X.prototype.unlayoutOnPause=function(){return!0};X.prototype.unlayoutCallback=function(){this.o.forEach(function(a){return a()});this.o.length=0;this.j&&(fa(this.j),this.j=null);return!0};(function(a){a.registerElement("amp-yotpo",X)})(self.AMP);
})});

//# sourceMappingURL=amp-yotpo-0.1.js.map
