(self.AMP=self.AMP||[]).push({n:"amp-3q-player",v:"1910212134200",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;p=ca.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function r(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=fa(c[1],c[1]),e=c[2]?fa(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var t="";var ia=Object.prototype.toString;function u(a){return"number"===typeof a&&isFinite(a)};function v(a){var b=!1,c=null,d=a;return function(a){for(var e=[],k=0;k<arguments.length;++k)e[k-0]=arguments[k];b||(c=d.apply(self,e),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");}function z(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function A(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function ja(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0,action:!0});function ka(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){y().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function C(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;var f=d;if(f.__AMP__EXPERIMENT_TOGGLES)var k=f.__AMP__EXPERIMENT_TOGGLES;else{f.__AMP__EXPERIMENT_TOGGLES=Object.create(null);k=f.__AMP__EXPERIMENT_TOGGLES;if(f.AMP_CONFIG)for(var l in f.AMP_CONFIG){var h=f.AMP_CONFIG[l];"number"===typeof h&&0<=h&&1>=h&&(k[l]=Math.random()<h)}if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-doc-opt-in"])&&0<f.AMP_CONFIG["allow-doc-opt-in"].length&&(l=f.AMP_CONFIG["allow-doc-opt-in"],
h=f.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var n=0;n<h.length;n++)-1!=l.indexOf(h[n])&&(k[h[n]]=!0)}Object.assign(k,ka(f));if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-url-opt-in"])&&0<f.AMP_CONFIG["allow-url-opt-in"].length)for(l=f.AMP_CONFIG["allow-url-opt-in"],f=r(f.location.originalHash||f.location.hash),h=0;h<l.length;h++)n=f["e-"+l[h]],"1"==n&&(k[l[h]]=!0),"0"==n&&(k[l[h]]=!1)}var q=!!k["ampdoc-fie"];e&&!q?b=D(c,
b)?E(c,b):null:(a=F(a),a=G(a),b=D(a,b)?E(a,b):null);return b}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return E(a,b)}function I(a,b){var c=F(a);c=G(c);return E(c,b)}function F(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}function E(a,b){D(a,b);var c=la(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function la(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function J(a){a.parentElement&&a.parentElement.removeChild(a)};function K(a){a.signals().signal("user-interacted")};var L;function M(a){a=a.ownerDocument||a;L&&L.ownerDocument===a||(L=a.createElement("div"));return ma}function ma(a){var b=L;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function na(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var oa=["<iframe frameborder=0 allowfullscreen></iframe>"];function pa(a,b){var c={ready:"load",playing:"playing",paused:"pause",muted:"muted",unmuted:"unmuted"};if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function qa(a,b){var c,d=a.element,e=M(d)(oa);c&&e.setAttribute("sandbox",c.join(" "));a.propagateAttributes(["referrerpolicy"],e);e.src=C(d,"url").assertHttpsUrl(b,d);a.applyFillContent(e);d.appendChild(e);return e};var N;function ra(a,b,c,d){var e=a,f=c;var k=function(a){try{return f(a)}catch(q){throw self.__AMP_REPORT_ERROR(q),q;}};var l=sa(),h=!1;d&&(h=d.capture);e.addEventListener(b,k,l?d:h);return function(){e&&e.removeEventListener(b,k,l?d:h);k=e=f=null}}function sa(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N};function ta(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function O(a,b,c){return ra(a,b,c,void 0)}function ua(a,b,c,d){var e=c,f=ra(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function va(a){var b,c,d=new Promise(function(b){c=ua(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var wa={title:"",artist:"",album:"",artwork:[{src:""}]};function xa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=na(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function ya(a,b){var c=C(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a="[object Object]"===ia.call(a)?a.src:a,z(c.isProtocolValid(a)))})}};function za(){this.o=null}g=za.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function P(){this.I=!1;this.Y=new za}P.prototype.onSessionEnd=function(a){this.Y.add(a)};P.prototype.beginSession=function(){this.I=!0};P.prototype.endSession=function(){this.I&&this.Y.fire();this.I=!1};P.prototype.isSessionActive=function(){return this.I};var Q,Aa="Webkit webkit Moz moz ms O o".split(" ");function Ba(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var k=c;if(ja(k,"--"))f=k;else{Q||(Q=A());var l=Q[k];if(!l){l=k;if(void 0===f[k]){var h=k;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var n=0;n<Aa.length;n++){var q=Aa[n]+h;if(void 0!==f[q]){h=q;break b}}h=""}void 0!==f[h]&&(l=h)}Q[k]=l}f=l}f&&(d.style[f]=e)}};function Ca(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ba(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var R=null;function Da(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function Ea(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Fa="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ga=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ha=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Ia(a){var b=M(a);return b(Ga)}
function Ja(a,b){var c=M(b)(Ha),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,k=0;k<f.length;k++){var l=f[k];l.classList.add("amp-video-eq-"+(b+1)+"-"+(k+1))}c.appendChild(e)}J(d);H(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ka(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=v(function(){var a=Fa,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=A());var f=Ea(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ea(d,a,"amp-runtime"),d.insertBefore(f,e?e.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
f)});this.ea=I(this.ampdoc,"viewport");this.h=null;this.da=!1;this.M=H(a.win,"timer");this.fa=C(a.getHeadNode(),"action");this.X=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();u(e)&&u(f)&&0<f&&(e=ta(b.ampdoc.win,"video-manager.timeUpdate",B({time:e,percent:e/f})),b.fa.trigger(d.video.element,"timeUpdate",e,1))}}b.M.delay(b.X,1E3)};this.P=v(function(){return new T(b.ampdoc,b)});
this.M.delay(this.X,1E3)}g=Ka.prototype;g.dispose=function(){this.P().dispose();if(this.h)for(var a=0;a<this.h.length;a++){var b=this.h[a];b.dispose()}};g.register=function(a){La(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ma(this,a);Na(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function La(a){function b(b,e){a.registerAction(b,function(){K(a);e()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Na(a,b){var c=b.video.element;O(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});O(c,"reloaded",function(){b.videoLoaded()});if(!a.da){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ea.onScroll(d);a.ea.onChanged(d);a.da=!0}}function U(a,b){for(var c=0;c<a.h.length;c++)if(a.h[c].video===b)return a.h[c];y().error("video-manager","video is not registered to this video manager");return null}
g.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.h.length;b++){var c=this.h[b];if(c.video.element===a){b=c;break a}}y().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.registerForAutoFullscreen=function(a){this.P().register(a)};
g.ma=function(){return this.P()};
function Ma(a,b){var c=this;this.J=a;this.l=a.ampdoc;this.video=b;this.W=!0;this.w=this.A=this.ba=!1;this.O=new P;this.O.onSessionEnd(function(){return S(c,"video-session")});this.D=new P;this.D.onSessionEnd(function(){return S(c,"video-session-visible")});this.U=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var k=!!f.test||!(!b.__AMP_TEST&&!b.__karma__);var l=b.__karma__&&b.__karma__.config.amp.testOnIe,h=!!f.localDev||k,n=r(b.location.originalHash||
b.location.hash);f=f.spt;var q=r(b.location.search);t||(t=h?"1910212134200":b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"011910212134200");k={localDev:h,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(n.development)||b.AMP_DEV_MODE),examiner:"2"==n.development,geoOverride:n["amp-geo"],userLocationOverride:n["amp-user-location"],minified:!0,lite:void 0!=q.amp_lite,test:k,testIe:l,log:n.log,version:"1910212134200",rtvVersion:t,singlePassType:f};b=b.__AMP_MODE=k}b=b.lite;R||(R=
v(Ca));return R(a,b)};this.$=v(function(){return new V(c.l.win,c)});this.S=this.ca=!1;this.R=null;this.K=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.J.installAutoplayStyles();this.B=wa;this.ja=function(){c.video.play(!1)};this.ia=function(){c.video.pause()};va(b.element).then(function(){return c.videoLoaded()});O(b.element,"pause",function(){S(c,"video-pause");c.A=!1;c.S?c.S=!1:c.O.endSession()});O(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&c.Z();
var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.l.win;var f=c.B,k=c.ja,l=c.ia,h=a.navigator;"mediaSession"in h&&a.MediaMetadata&&(h.mediaSession.metadata=new a.MediaMetadata(wa),ya(b,f),h.mediaSession.metadata=new a.MediaMetadata(f),h.mediaSession.setActionHandler("play",k),h.mediaSession.setActionHandler("pause",l))}c.O.beginSession();c.w&&c.D.beginSession();S(c,"video-play")});O(b.element,"muted",function(){return c.K=
!0});O(b.element,"unmuted",function(){return c.K=!1});O(b.element,"ended",function(){S(c,"video-ended")});O(b.element,"ad_start",function(){return S(c,"video-ad-start")});O(b.element,"ad_end",function(){return S(c,"video-ad-end")});O(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Oa(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:z(c.video.isInteractive(),
"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.J.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Pa(c)});this.Z=v(function(){var a="firstPlay",b=ta(c.l.win,a,B({})),f=c.video.element,k=C(f,"action");k.trigger(f,a,b,1)});Qa(this)}g=Ma.prototype;g.dispose=function(){this.$().stop()};
function Oa(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}function Qa(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.W=!1;a.A&&a.video.pause()})}g.isMuted=function(){return this.K};
g.videoLoaded=function(){this.ba=!0;this.R=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=A(this.video.getMetadata()));var a=this.l.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=xa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.R.getAttribute("title")||this.R.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.$().start();this.updateVisibility();this.w&&Ra(this)};
function Ra(a){a.l.isVisible()&&a.U().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.W&&(a.w?(a.D.beginSession(),a.video.play(!0),a.ca=!0):(a.A&&a.D.endSession(),a.video.pause(),a.S=!0)):a.w?a.D.beginSession():a.A&&a.D.endSession()})}function Pa(a){a.video.isInteractive()&&a.video.hideControls();a.U().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Sa(a))})}
function Sa(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Ja(c,d),f=function(a){b.mutateElement(function(){e.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(e)});var k=[O(d,"pause",function(){return f(!1)}),O(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.Z();b.isInteractive()&&b.showControls();b.unmute();k.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&J(b);c&&J(c)});if(b.isInteractive()){var l=Ia(d),h=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(l)});[O(l,"click",function(){return K(b)}),O(d,"ad_start",function(){h(!1);b.showControls()}),O(d,"ad_end",function(){h(!0);b.hideControls()}),O(d,"unmuted",function(){return K(b)})].forEach(function(a){return k.push(a)})}}}
g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(u(c)?c:0)}this.w!=b&&this.ba&&Ra(this)};g.getPlayingState=function(){return this.A?this.A&&this.ca&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.U().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,k=b.getPlayedRanges(),l=k.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.K,playedTotal:l,playedRangesJson:JSON.stringify(k),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.J=b;this.l=a;this.C=this.F=null;this.h=[];this.m=[];this.G=function(){return Ta(c)};this.ha=function(a){return"playing_manual"==c.J.getPlayingState(a)};this.ga=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=I(c.l,"viewport"),d=Ua(e,a),e=Ua(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};Va(this);Wa(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=H(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),O(b,"pause",this.G),O(b,"playing",this.G),O(b,"ended",this.G),a.signals().whenSignal("user-interacted").then(this.G),Ta(this))};
function Wa(a){function b(){a.F=null}var c=a.l.getRootNode();a.m.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?ja(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function Va(a){var b=a.l.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.m.push(O(d,"change",function(){return Xa(a)}))}a.m.push(O(b,"orientationchange",function(){return Xa(a)}))}function Xa(a){a.isInLandscape()?null!=a.C&&Ya(a,a.C):a.F&&Za(a,a.F)}function Ya(a,b){var c=H(a.l.win,"platform");a.F=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():$a(a,b).then(function(){return b.fullscreenEnter()})}
function Za(a,b){a.F=null;$a(a,b,"center").then(function(){return b.fullscreenExit()})}function $a(a,b,c){c=void 0===c?null:c;var d=b.element,e=I(a.l,"viewport");return ab(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,l=b.top;b=b.bottom;var h=e.getSize().height,n=0<=l&&b<=h;return n?Promise.resolve():e.animateScrollIntoView(d,c?c:b>h?"bottom":"top")})}function ab(a){var b=330;return H(a.l.win,"timer").promise(b)}
function Ta(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.ha).sort(a.ga)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.C=b)}return a.C}function Ua(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.M=H(a,"timer");this.H=b;this.m=null;this.N=this.aa=0}
V.prototype.start=function(){var a=this,b=this.H.video.element;this.stop();this.m=this.m||[];bb(this)?cb(this,this.N):this.m.push(ua(b,"loadedmetadata",function(){bb(a)&&cb(a,a.N)}));this.m.push(O(b,"ended",function(){bb(a)&&db(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.N++}};
function bb(a){var b=a.H.video,c=b.getDuration();if(!c||isNaN(c)||1>=c)return!1;if(250>50*c){var d=5;a.la("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.la=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
function cb(a,b){if(b==a.N){var c=a.H,d=a.M,e=c.video,f=function(){return cb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else{c=e.getDuration();var k=Da(50*c),l=e.getCurrentTime()/c*100,h=5*Math.floor(l/5);u(h);db(a,h);d.delay(f,k)}}}function db(a,b){0>=b||a.aa==b||(a.aa=b,S(a.H,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.V=null;a.L=null;a.T=null;a.dataId=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var eb=Object.getOwnPropertyDescriptor(X,Y);eb&&Object.defineProperty(W,Y,eb)}else W[Y]=X[Y];W.na=X.prototype;g=W.prototype;g.preconnectCallback=function(a){this.preconnect.url("https://playout.3qsdn.com",a)};
g.buildCallback=function(){var a=this.element;this.dataId=z(a.getAttribute("data-id"),"The data-id attribute is required for <amp-3q-player> %s",a);var b=new ea;this.L=b.promise;this.T=b.resolve;b=F(a);var c=G(b),d=la(c),e=d["video-manager"];e||(e=d["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=Ka,e.context=b,e.resolve&&E(c,"video-manager"));I(a,"video-manager").register(this)};
g.layoutCallback=function(){var a=this;this.j=qa(this,"https://playout.3qsdn.com/"+encodeURIComponent(this.dataId)+"?autoplay=false&amp=true");this.V=O(this.win,"message",this.ka.bind(this));return this.loadPromise(this.j).then(function(){return a.L})};g.unlayoutCallback=function(){this.j&&(J(this.j),this.j=null);this.V&&this.V();var a=new ea;this.L=a.promise;this.T=a.resolve;return!0};
g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};g.pauseCallback=function(){this.j&&this.pause()};g.ka=function(a){a.source&&a.source!=this.j.contentWindow||(a=a.data,a="[object Object]"===ia.call(a)?a:na(a),void 0!==a&&(a=a.data,"ready"==a&&this.T(),pa(this.element,a)))};
function Z(a,b){a.L.then(function(){a.j&&a.j.contentWindow&&a.j.contentWindow.postMessage(b,"*")})}g.play=function(){Z(this,"play2")};g.pause=function(){Z(this,"pause")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unmute")};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.showControls=function(){Z(this,"showControlbar")};g.hideControls=function(){Z(this,"hideControlbar")};
g.fullscreenEnter=function(){if(this.j){var a=this.j,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.j){var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreencancelFullScreen||a.webkitExitFullscreencancelFullScreen||a.webkitCancelFullScreencancelFullScreen||a.mozCancelFullScreencancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!1};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};
g.seekTo=function(){this.user().error("amp-3q-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-3q-player",W)})(self.AMP);
})});

//# sourceMappingURL=amp-3q-player-0.1.js.map
