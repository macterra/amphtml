(self.AMP=self.AMP||[]).push({n:"amp-apester-media",v:"1910212134200",f:(function(AMP,_){
var n,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var ba={a:!0},u={};try{u.__proto__=ba;r=u.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=q;function ca(){var a,b;this.promise=new Promise(function(d,c){a=d;b=c});this.resolve=a;this.reject=b};function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function x(a){var b=Object.create(null);if(!a)return b;for(var d;d=da.exec(a);){var c=w(d[1],d[1]),e=d[2]?w(d[2].replace(/\+/g," "),d[2]):"";b[c]=e}return b};var y="";function ea(a){return a?Array.prototype.slice.call(a):[]}function z(a){return"number"===typeof a&&isFinite(a)};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");};function C(a){return a||{}};function D(){var a=100;this.ja=a;this.N=this.Y=0;this.G=Object.create(null)}D.prototype.has=function(a){return!!this.G[a]};D.prototype.get=function(a){var b=this.G[a];if(b)return b.access=++this.N,b.payload};D.prototype.put=function(a,b){this.has(a)||this.Y++;this.G[a]={payload:b,access:this.N};if(!(this.Y<=this.ja)){B().warn("lru-cache","Trimming LRU cache");a=this.G;var d=this.N+1,c;for(c in a){var e=a[c].access;if(e<d){d=e;var f=c}}void 0!==f&&(delete a[f],this.Y--)}};C({c:!0,v:!0,a:!0,ad:!0,action:!0});var E,F;
function fa(a){var b;E||(E=self.document.createElement("a"),F=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new D));var d=b?null:F,c=E;if(d&&d.has(a))a=d.get(a);else{c.href=a;c.protocol||(c.href=c.href);var e={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c=self;if(c.__AMP_MODE)c=c.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var g=!!f.test||!(!c.__AMP_TEST&&!c.__karma__);var h=c.__karma__&&c.__karma__.config.amp.testOnIe,l=!!f.localDev||g,k=x(c.location.originalHash||c.location.hash);f=f.spt;var m=x(c.location.search);y||(y=l?"1910212134200":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011910212134200");g={localDev:l,development:!!(0<=["1","actions",
"amp","amp4ads","amp4email"].indexOf(k.development)||c.AMP_DEV_MODE),examiner:"2"==k.development,geoOverride:k["amp-geo"],userLocationOverride:k["amp-user-location"],minified:!0,lite:void 0!=m.amp_lite,test:g,testIe:h,log:k.log,version:"1910212134200",rtvVersion:y,singlePassType:f};c=c.__AMP_MODE=g}e=c.test&&Object.freeze?Object.freeze(e):e;d&&d.put(a,e);a=e}return a}
function G(a,b){var d;if(!b)return a;var c=a.split("#",2),e=c[0].split("?",2),f=e[0]+(e[1]?d?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=c[1]?"#"+c[1]:""}function ha(a){var b=[],d;for(d in a){var c=a[d];if(null!=c)if(Array.isArray(c))for(var e=0;e<c.length;e++){var f=c[e];b.push(encodeURIComponent(d)+"="+encodeURIComponent(f))}else e=c,b.push(encodeURIComponent(d)+"="+encodeURIComponent(e))}return b.join("&")};function ia(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){B().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var d=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var c=0;c<d.length;c++)0!=d[c].length&&("-"==d[c][0]?a[d[c].substr(1)]=!1:a[d[c]]=!0);return a};function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function J(a,b){var d=K(a);d=L(d);return I(d,b)}function K(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function L(a){a=K(a);return a.isSingleDoc()?a.win:a}function I(a,b){M(a,b);var d=N(a);a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ja(a){var b=N(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;I(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function N(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function M(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function ka(){var a=new ca,b=a,d=b.promise,c=b.resolve;b=b.reject;d.catch(function(){});return{obj:null,promise:d,resolve:c,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function la(a){a.parentElement&&a.parentElement.removeChild(a)}function ma(a,b,d){a=a.createElement(b);for(var c in d)a.setAttribute(c,d[c]);return a};function na(a){var b=ja(L(a));if(b)return b;var d=K(a);return d.waitForBodyOpen().then(function(){var a=d.win;var b=d.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var h=b[g];h=h.getAttribute("custom-element")||h.getAttribute("custom-template");f[h]=!0}f=Object.keys(f)}else f=[];a=f.includes("amp-analytics")?H(a,"extensions").waitForExtension(a,"amp-analytics"):Promise.resolve();return a}).then(function(){var b=
d.win;if(b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]){b=L(a);var e=ja(b);e?b=e:(b=N(b),b["amp-analytics-instrumentation"]=ka(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};function oa(a,b,d){na(a).then(function(c){c&&c.triggerEventForTarget(a,b,d)})};function pa(a,b){var d=!0;d=void 0===d?!1:d;var c=void 0===c?!1:c;var e=a.ownerDocument,f=ma(e,"amp-analytics",C({sandbox:"true",trigger:c?"":"immediate"})),g=ma(e,"script",C({type:"application/json"}));g.textContent=JSON.stringify(b);f.appendChild(g);f.CONFIG=b;d?(b=H(a.ownerDocument.defaultView,"extensions"),d=K(a),b.installExtensionForDoc(d,"amp-analytics")):na(a).then(function(){});a.appendChild(f)}
function qa(a,b){var d=this;this.ba=a.getResourceId();this.D=a;this.l=b;for(var c in b.triggers){var e="sandbox-"+this.ba+"-"+b.triggers[c].on;b.triggers[c].on=e}this.D.signals().whenSignal("load-start").then(function(){pa(d.D,b)})}qa.prototype.trigger=function(a,b){oa(this.D,"sandbox-"+this.ba+"-"+a,b)};function O(a){this.D=a;this.l={requests:{},triggers:{}}}O.prototype.setTransportConfig=function(a){this.l.transport=a};O.prototype.setExtraUrlParams=function(a){this.l.extraUrlParams=a};
O.prototype.track=function(a,b){b=Array.isArray(b)?b:[b];for(var d=[],c=0;c<b.length;c++){var e=a+"-request-"+c;this.l.requests[e]=b[c];d.push(e)}this.l.triggers[a]={on:a,request:d};return this};O.prototype.build=function(){var a=new qa(this.D,this.l);this.l=null;return a};function P(a,b){var d,c=this;this.ga=H(a,"timer");this.na=b;this.ka=d||0;this.F=-1;this.U=0;this.W=!1;this.ia=function(){c.F=-1;c.U=0;c.W=!0;c.na();c.W=!1}}P.prototype.isPending=function(){return-1!=this.F};P.prototype.schedule=function(a){var b=a||this.ka;this.W&&10>b&&(b=10);var d=Date.now()+b;return!this.isPending()||-10>d-this.U?(this.cancel(),this.U=d,this.F=this.ga.delay(this.ia,b),!0):!1};P.prototype.cancel=function(){this.isPending()&&(this.ga.cancel(this.F),this.F=-1)};var Q;function ra(a,b){var d=void 0,c=a,e=b;var f=function(a){try{return e(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}};var g=sa(),h=!1;d&&(h=d.capture);c.addEventListener("message",f,g?d:h);return function(){c&&c.removeEventListener("message",f,g?d:h);f=c=e=null}}function sa(){if(void 0!==Q)return Q;Q=!1;try{var a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Q};function ta(a,b){try{return JSON.parse(a)}catch(d){return b&&b(d),null}};function ua(a){if(!va(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(d){return B().error("MESSAGING","Failed to parse message: "+a,d),null}}function va(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function wa(a,b){return ra(a,b)};function xa(a,b){for(var d=[],c=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?d.push(f):(c<e&&(a[c]=f),c++)}c<a.length&&(a.length=c)};var R,ya="Webkit webkit Moz moz ms O o".split(" ");function za(a,b,d){var c=a.listeningFors;!c&&d&&(c=a.listeningFors=Object.create(null));a=c||null;if(!a)return a;var e=a[b];!e&&d&&(e=a[b]=[]);return e||null}function Aa(a,b,d){var c=d?b.getAttribute("data-amp-3p-sentinel"):"amp";a=za(a,c,!0);for(c=0;c<a.length;c++){var e=a[c];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function Ba(a){for(var b=C({sentinel:"unlisten"}),d=a.length-1;0<=d;d--){var c=a[d];if(!c.frame.contentWindow){a.splice(d,1);var e=c.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Ca(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=Da(b.data);if(c&&c.sentinel){var d=b.source;var f=za(a,c.sentinel);if(f){for(var g,h=0;h<f.length;h++){var l=f[h],k=l.frame.contentWindow;if(k){var m;if(!(m=d==k))b:{for(m=d;m&&m!=m.parent;m=m.parent)if(m==k){m=!0;break b}m=!1}if(m){g=l;break}}else setTimeout(Ba,0,f)}d=g?g.events:null}else d=f;var p=d;if(p){var t=p[c.type];if(t)for(t=t.slice(),d=0;d<t.length;d++)(0,t[d])(c,b.source,b.origin,b)}}}};a.addEventListener("message",
b)}}function Ea(a,b,d,c){function e(d,e,f,h){if("amp"==d.sentinel){if(e!=a.contentWindow)return;var k="null"==f&&g;if(l!=f&&!k)return}if(c||e==a.contentWindow)"unlisten"==d.sentinel?m():b(d,e,f,h)}var f="send-intersections",g,h=a.ownerDocument.defaultView;Ca(h);d=Aa(h,a,d);var l=fa(a.src).origin,k=d[f]||(d[f]=[]),m;k.push(e);return m=function(){if(e){var a=k.indexOf(e);-1<a&&k.splice(a,1);b=k=e=null}}}
function Fa(a,b,d,c,e){if(a.contentWindow)for(c.type=d,c.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=c,e&&(a="amp-"+JSON.stringify(c)),c=0;c<b.length;c++)e=b[c],e.win.postMessage(a,e.origin)}function Da(a){"string"==typeof a&&(a="{"==a.charAt(0)?ta(a,function(a){B().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:va(a)?ua(a):null);return a}
function S(a,b,d){var c=this;this.h=a;this.P=b;this.A=[];this.ra=Ea(this.h,function(a,b,g){c.A.some(function(a){return a.win==b})||c.A.push({win:b,origin:g});d(a,b,g)},this.P,this.P)}S.prototype.send=function(a,b){xa(this.A,function(a){return!a.win.parent});Fa(this.h,this.A,a,b,this.P)};S.prototype.destroy=function(){this.ra();this.A.length=0};function T(a,b,d,c){return{left:a,top:b,width:d,height:c,bottom:b+c,right:a+d,x:a,y:b}}function Ga(a){for(var b=-Infinity,d=Infinity,c=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),d=Math.min(d,g.left+g.width),c=Math.max(c,g.top),e=Math.min(e,g.top+g.height),d<b||e<c))return null}return Infinity==d?null:T(b,c,d-b,e-c)}function U(a,b,d){return 0==b&&0==d||0==a.width&&0==a.height?a:T(a.left+b,a.top+d,a.width,a.height)};var Ha=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],Ia=Date.now();function V(a,b){var d,c=this;this.O=a;this.o=null;this.R=this.X=!1;this.K=null;this.M=a.getViewport();this.Z=new S(b,d||!1,function(){Ja(c)});this.o=new Ka(function(a){for(var b=0;b<a.length;b++)delete a[b].target;c.Z.send("intersection",C({changes:a}))});this.o.tick(this.M.getRect());this.fire=function(){c.X&&c.R&&c.o.tick(c.M.getRect())}}
function Ja(a){a.X=!0;a.o.observe(a.O.element);a.O.getVsync().measure(function(){a.R=a.O.isInViewport();a.fire()});var b=a.M.onScroll(a.fire),d=a.M.onChanged(a.fire);a.K=function(){b();d()}}V.prototype.onViewportCallback=function(a){this.R=a};V.prototype.destroy=function(){this.X=!1;this.o.disconnect();this.o=null;this.K&&(this.K(),this.K=null);this.Z.destroy();this.Z=null};
function Ka(a){var b={threshold:Ha};this.$=a;var d=b&&b.threshold;d=d?Array.isArray(d)?d:[d]:[0];for(a=0;a<d.length;a++)z(d[a]);this.qa=d.sort();this.S=null;this.ca=void 0;this.j=[];this.w=this.C=null}n=Ka.prototype;n.disconnect=function(){this.j.length=0;Ma(this)};
n.observe=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){B().warn("INTERSECTION-OBSERVER","should observe same element once");return}var d={element:a,currentThresholdSlot:0};this.S&&(b=Na(this,d,this.S,this.ca))&&this.$([b]);b=K(a);if(b.win.MutationObserver&&!this.C){this.w=new P(b.win,this.ma.bind(this,a));b=a.ownerDocument.defaultView;var c=b.__AMP_TOP||(b.__AMP_TOP=b),e=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var f=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=
Object.create(null);f=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var g in c.AMP_CONFIG){var h=c.AMP_CONFIG[g];"number"===typeof h&&0<=h&&1>=h&&(f[g]=Math.random()<h)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(g=c.AMP_CONFIG["allow-doc-opt-in"],h=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var l=0;l<h.length;l++)-1!=g.indexOf(h[l])&&(f[h[l]]=!0)}Object.assign(f,
ia(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length)for(g=c.AMP_CONFIG["allow-url-opt-in"],c=x(c.location.originalHash||c.location.hash),h=0;h<g.length;h++)l=c["e-"+g[h]],"1"==l&&(f[g[h]]=!0),"0"==l&&(f[g[h]]=!1)}f=!!f["ampdoc-fie"];e&&!f?a=M(b,"hidden-observer")?I(b,"hidden-observer"):null:(a=K(a),a=L(a),a=M(a,"hidden-observer")?I(a,"hidden-observer"):null);var k=a;this.C=k.add(this.la.bind(this))}this.j.push(d)};
n.unobserve=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){this.j.splice(b,1);0>=this.j.length&&Ma(this);return}B().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};n.tick=function(a,b){b&&(a=U(a,-b.left,-b.top),b=U(b,-b.left,-b.top));this.S=a;this.ca=b;for(var d=[],c=0;c<this.j.length;c++){var e=Na(this,this.j[c],a,b);e&&d.push(e)}d.length&&this.$(d)};
function Na(a,b,d,c){var e=b.element,f=e.getLayoutBox(),g=e.getOwner(),h=g&&g.getLayoutBox(),l=Ga(f,h,d,c)||T(0,0,0,0),k=l;g=f;k=k.width*k.height;g=g.width*g.height;g=0===g?0:k/g;a=a.qa;k=0;var m=a.length;if(0==g)a=0;else{for(var p=(k+m)/2|0;k<p;)g<a[p]?m=p:k=p,p=(k+m)/2|0;a=m}var t=a;if(t==b.currentThresholdSlot)return null;b.currentThresholdSlot=t;d=c?null:d;c=l;a=f;if(k=d)c=U(c,-d.left,-d.top),a=U(a,-d.left,-d.top),k=U(k,-d.left,-d.top);var La={time:"undefined"!==typeof performance&&performance.now?
performance.now():Date.now()-Ia,rootBounds:k,boundingClientRect:a,intersectionRect:c,intersectionRatio:g,target:e};return La}n.la=function(){this.w.isPending()||this.w.schedule(16)};n.ma=function(a){var b=this,d=J(a,"viewport"),c=J(a,"resources");c.onNextPass(function(){b.tick(d.getRect())})};function Ma(a){a.C&&a.C();a.C=null;a.w&&a.w.cancel();a.w=null};var Oa=/(WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(wv|.0.0.0)|Linux; U; Android)/ig;
function Pa(){var a=!!navigator.userAgent.match(Oa),b=navigator.userAgent||navigator.vendor||window.opera,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4));return d?"mobile"+(a?"-webview":""):"desktop"}function Qa(a){var b=a&&a.getAttribute("data-apester-tags");return b?b.split(",").map(function(a){return a.trim()})||[]:[]}
function Ra(a){var b=ea(a.querySelectorAll('script[type="application/ld+json"]'));return b.map(function(a){var b;if(b=a)b=a,b="SCRIPT"==b.tagName&&"APPLICATION/LD+JSON"==b.getAttribute("type").toUpperCase();return b?ta(a.textContent)||{}:{}}).map(function(a){return a&&a.headline}).filter(function(a){return"string"===typeof a}).map(function(a){return a.trim().split(" ").filter(function(a){return 2<a.length})}).reduce(function(a,b){return a.concat(b)},[]).slice(0,5)}
function Sa(a){var b=a.querySelector('meta[name="keywords"]')||{content:""};return b.content.trim().split(",").filter(function(a){return a}).map(function(a){return a.trim()})}function Ta(a,b){var d=Qa(b)||[],c=Sa(a),e=d.concat(c.length?c:Ra(a)||[]),f=e.map(function(a){return a.toLowerCase().trim()}),g=f.filter(function(a,b,c){return c.indexOf(a)===b});return g}function W(a,b,d,c,e){d=wa(d,function(d){var e=c.contentWindow===d.source;d.data.type===a&&e&&b(d.data)});e.push(d)}
function Ua(a,b){var d={offer_id:2,aff_id:b,aff_sub:a,aff_sub2:window.location.hostname,aff_sub3:"amp"},c=Object.keys(d).map(function(a){return a+"="+d[a]}).join("&");return"https://apester.go2cloud.org/aff_i?"+c};function Va(a){a=parseFloat(a);return z(a)?a:void 0};function X(a){a=AMP.BaseElement.call(this,a)||this;a.ea="https://renderer.apester.com";a.aa="https://display.apester.com";a.pa="https://static.qmerce.com";a.oa="https://static.apester.com/js/assets/loader.gif";a.fa=!1;a.h=null;a.J=null;a.da=!1;a.ha=null;a.H=null;a.V=!1;a.T=null;a.B={};a.I=null;a.L=[];a.m=null;return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;
if(v)v(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Wa=Object.getOwnPropertyDescriptor(Y,Z);Wa&&Object.defineProperty(X,Z,Wa)}else X[Z]=Y[Z];X.sa=Y.prototype;n=X.prototype;n.preconnectCallback=function(a){this.preconnect.url(this.aa,a);this.preconnect.url(this.ea,a);this.preconnect.url(this.pa,a)};n.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
n.viewportCallback=function(a){if(this.m)this.m.onViewportCallback(a);a&&!this.fa&&this.h&&this.h.contentWindow&&(this.fa=!0,this.h.contentWindow.postMessage("interaction seen","*"));this.getPlaceholder()&&!this.da&&this.togglePlaceholder(a)};
n.buildCallback=function(){var a=this.element.getAttribute("width"),b=this.element.getAttribute("height");this.ha=Va(a);this.H=Va(b);this.V=this.element.hasAttribute("data-apester-channel-token");a=this.element.getAttribute("data-apester-media-id")||this.element.getAttribute("data-apester-channel-token");b=this.element;if(!A.user)throw Error("failed to call initLogConstructor");this.T=A.user.assert(a,"Either the data-apester-media-id or the data-apester-channel-token attributes must be specified for <amp-apester-media> %s",
b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.B={playlist:this.V,idOrToken:this.T,inative:"true"===this.element.getAttribute("data-apester-inative"),fallback:this.element.getAttribute("data-apester-fallback"),distributionChannelId:this.element.getAttribute("data-apester-channel-id"),renderer:!0,tags:Ta(this.getAmpDoc().getRootNode(),this.element)}};n.firstLayoutCompleted=function(){this.viewportCallback(this.isInViewport())};n.onLayoutMeasure=function(){this.m&&this.m.fire()};
function Xa(a){var b=a.B,d=b.idOrToken,c=b.playlist,e=b.inative,f=b.distributionChannelId,g=b.fallback,h=b.tags,l=encodeURIComponent(a.T);b="";var k={renderer:!1};k.platform=Pa();e?d?b="/inatives/"+d:f&&(b="/channels/"+f+"/inatives"):c&&h?(b="/tokens/"+l+"/interactions/random",k.tags=h,k.fallback=!!g):b=c?"/tokens/"+l+"/interactions/random":"/interactions/"+l+"/display";return G(""+a.aa+b,ha(k))}
function Ya(a){var b=Xa(a);return H(a.win,"xhr").fetchJson(b,{}).then(function(a){return 200===a.status?a.json():a})}function Za(a,b,d){var c={};c.channelId=a.B.distributionChannelId;c.type=a.B.playlist?"playlist":"editorial";c.platform=Pa();c.cannonicalUrl=J(a.element,"documentInfo").get().canonicalUrl;c.sdk="amp";a=a.ea+"/"+(d?"v2":"interaction")+"/"+encodeURIComponent(b);return G(a,ha(c))}
function $a(a,b){var d=a.element.ownerDocument.createElement("iframe");d.setAttribute("frameborder","0");d.setAttribute("allowtransparency","true");d.setAttribute("scrolling","no");d.src=b;d.name=a.win.location.href;d.height=a.H;d.width=a.ha;d.classList.add("amp-apester-iframe");a.applyFillContent(d);return d}
n.layoutCallback=function(){var a=this;this.element.classList.add("amp-apester-container");var b=H(this.win,"vsync");return Ya(this).then(function(d){if(!d||204===d.status)return B().warn("amp-apester-media","Display","No Content for provided tag"),a.unlayoutCallback();d=d.payload;var c=a.B.playlist?d[Math.floor(Math.random()*d.length)]:d,e=c.interactionId;d=Za(a,e,c.usePlayer);var f=$a(a,d);a.m=new V(a,f);a.I=e;a.h=f;ab(a);return b.mutatePromise(function(){var b=a.element.ownerDocument.createElement("div");
b.setAttribute("overflow","");b.className="amp-apester-overflow";var c=a.element.ownerDocument.createElement("button");c.textContent="Full Size";b.appendChild(c);a.element.appendChild(b);a.element.appendChild(f)}).then(function(){return a.loadPromise(f).then(function(){return b.mutatePromise(function(){a.h&&(a.h.classList.add("i-amphtml-apester-iframe-ready"),c.campaignData&&a.h.contentWindow.postMessage({type:"campaigns",data:c.campaignData},"*"));a.togglePlaceholder(!1);var b=c.publisher;if(b&&
b.trackingPixel){var d=b.trackingPixel.affiliateId;b=b.publisherId;if(d){var e=new O(a.element);e.track("interactionLoaded",Ua(b,d));e.build().trigger("interactionLoaded")}}a.da=!0;d=0;c&&c.data&&c.data.size&&(d=c.data.size.height);d!=a.H&&(a.H=d,a.V?a.attemptChangeHeight(d):a.changeHeight(d))})})}).catch(function(a){B().error("amp-apester-media","Display",a)})},function(a){B().error("amp-apester-media","Display",a)})};
n.createPlaceholderCallback=function(){var a=this.element.ownerDocument.createElement("div"),b=this.element.ownerDocument.createElement("amp-img");b.setAttribute("src",this.oa);b.setAttribute("layout","fixed");b.setAttribute("width","100");b.setAttribute("height","100");this.element.hasAttribute("aria-label")?a.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):a.setAttribute("aria-label","Loading Apester Media");a.setAttribute("placeholder","");a.className="amp-apester-loader";
var d={top:"50%",left:"50%",transform:"translate(-50%, -50%)"},c;for(c in d){var e=b,f=d[c];var g=e.style;var h=c;if(2>h.length?0:0==h.lastIndexOf("--",0))g=h;else{R||(R=Object.create(null));var l=R[h];if(!l){l=h;if(void 0===g[h]){var k=h;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var m=0;m<ya.length;m++){var p=ya[m]+k;if(void 0!==g[p]){k=p;break b}}k=""}void 0!==g[k]&&(l=k)}R[h]=l}g=l}g&&(e.style[g]=f)}a.appendChild(b);return this.J=a};n.unlayoutOnPause=function(){return!0};
n.unlayoutCallback=function(){this.h&&(this.m.destroy(),this.m=null,this.L.forEach(function(a){return a()}),la(this.h),this.h=null);this.J&&(la(this.J),this.J=null);return!1};
function ab(a){W("fullscreen_on",function(b){a.I===b.id&&a.element.classList.add("amp-apester-fullscreen")},a.win,a.h,a.L);W("fullscreen_off",function(b){a.I===b.id&&a.element.classList.remove("amp-apester-fullscreen")},a.win,a.h,a.L);W("apester_resize_unit",function(b){a.I===b.id&&b.height&&a.attemptChangeHeight(b.height)},a.win,a.h,a.L)}(function(a){a.registerElement("amp-apester-media",X,".amp-apester-iframe{transition:opacity 0.4s;opacity:0}.i-amphtml-apester-iframe-ready{transition:opacity 1s ease-out;opacity:1!important}.amp-apester-loader{height:100%;width:100%;background-color:#fff}.amp-apester-container{max-width:700px;margin:0 auto;display:block;position:relative;width:100%}.amp-apester-overflow{position:absolute;margin:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.amp-apester-overflow button{border:none;background:#fff;cursor:pointer;padding:25px 80px;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative}.amp-apester-fullscreen{background:rgba(34,36,38,0.97)!important;position:fixed!important;width:100vw!important;height:100vh!important;z-index:2147483646!important;top:0;zoom:1;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-apester-media/0.1/amp-apester-media.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-apester-media-0.1.js.map