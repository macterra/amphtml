(self.AMP=self.AMP||[]).push({n:"amp-youtube",v:"1910212134200",f:(function(AMP,_){
var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;p=ca.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function r(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=fa(c[1],c[1]),f=c[2]?fa(c[2].replace(/\+/g," "),c[2]):"";b[d]=f}return b};var t="";var ia=Object.prototype.toString;function u(a){return"[object Object]"===ia.call(a)}function v(a){return"number"===typeof a&&isFinite(a)};function w(a){var b=!1,c=null,d=a;return function(a){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];b||(c=d.apply(self,f),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");}function A(a,b,c){return y().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};C({c:!0,v:!0,a:!0,ad:!0,action:!0});function ja(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(f){z().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function E(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),f=c!=d;var e=d;if(e.__AMP__EXPERIMENT_TOGGLES)var g=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);g=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(var l in e.AMP_CONFIG){var h=e.AMP_CONFIG[l];"number"===typeof h&&0<=h&&1>=h&&(g[l]=Math.random()<h)}if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(l=e.AMP_CONFIG["allow-doc-opt-in"],
h=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var n=0;n<h.length;n++)-1!=l.indexOf(h[n])&&(g[h[n]]=!0)}Object.assign(g,ja(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length)for(l=e.AMP_CONFIG["allow-url-opt-in"],e=r(e.location.originalHash||e.location.hash),h=0;h<l.length;h++)n=e["e-"+l[h]],"1"==n&&(g[l[h]]=!0),"0"==n&&(g[l[h]]=!1)}var q=!!g["ampdoc-fie"];f&&!q?b=F(c,
b)?G(c,b):null:(a=H(a),a=I(a),b=F(a,b)?G(a,b):null);return b}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function K(a,b){var c=H(a);c=I(c);return G(c,b)}function H(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function G(a,b){F(a,b);var c=ka(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ka(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a){a.parentElement&&a.parentElement.removeChild(a)}function la(a){var b,c,d=b||function(a){return a},f=a.dataset;a={};var e=c?c:/^param(.+)/,g;for(g in f){var l=g.match(e);if(l){var h=l[1][0].toLowerCase()+l[1].substr(1);a[d(h)]=f[g]}}return a};function M(a){a.signals().signal("user-interacted")};var N;function O(a){a=a.ownerDocument||a;N&&N.ownerDocument===a||(N=a.createElement("div"));return ma}function ma(a){var b=N;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function na(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var oa=["<iframe frameborder=0 allowfullscreen></iframe>"];function pa(a,b,c){if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function qa(a,b){var c,d=a.element,f=O(d)(oa);c&&f.setAttribute("sandbox",c.join(" "));a.propagateAttributes(["referrerpolicy"],f);f.src=E(d,"url").assertHttpsUrl(b,d);a.applyFillContent(f);d.appendChild(f);return f}function ra(a){var b=a.getAttribute("allow")||"";a.setAttribute("allow",b+"autoplay;")};var P;function sa(a,b,c,d){var f=a,e=c;var g=function(a){try{return e(a)}catch(q){throw self.__AMP_REPORT_ERROR(q),q;}};var l=ta(),h=!1;d&&(h=d.capture);f.addEventListener(b,g,l?d:h);return function(){f&&f.removeEventListener(b,g,l?d:h);g=f=e=null}}function ta(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function ua(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return sa(a,b,c,void 0)}function va(a,b,c,d){var f=c,e=sa(a,b,function(a){try{f(a)}finally{f=null,e()}},d);return e}function wa(a){var b,c,d=new Promise(function(b){c=va(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var xa={title:"",artist:"",album:"",artwork:[{src:""}]};function ya(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=na(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function za(a,b){var c=E(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=u(a)?a.src:a,A(c.isProtocolValid(a)))})}};function Aa(){this.o=null}k=Aa.prototype;k.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};k.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};k.removeAll=function(){this.o&&(this.o.length=0)};k.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};k.getHandlerCount=function(){return this.o?this.o.length:0};function R(){this.L=!1;this.ea=new Aa}R.prototype.onSessionEnd=function(a){this.ea.add(a)};R.prototype.beginSession=function(){this.L=!0};R.prototype.endSession=function(){this.L&&this.ea.fire();this.L=!1};R.prototype.isSessionActive=function(){return this.L};var S,Ba="Webkit webkit Moz moz ms O o".split(" ");function Ca(a,b){for(var c in b){var d=a,f=b[c];var e=d.style;var g=c;if(D(g,"--"))e=g;else{S||(S=B());var l=S[g];if(!l){l=g;if(void 0===e[g]){var h=g;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var n=0;n<Ba.length;n++){var q=Ba[n]+h;if(void 0!==e[q]){h=q;break b}}h=""}void 0!==e[h]&&(l=h)}S[g]=l}e=l}e&&(d.style[e]=f)}};function Da(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ca(c,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ea=null;function Fa(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function Ga(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ha="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ia=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ja=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Ka(a){var b=O(a);return b(Ia)}
function La(a,b){var c=O(b)(Ja),d=c.firstElementChild;for(b=0;4>b;b++){for(var f=d.cloneNode(!0),e=f.children,g=0;g<e.length;g++){var l=e[g];l.classList.add("amp-video-eq-"+(b+1)+"-"+(g+1))}c.appendChild(f)}L(d);J(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ma(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=w(function(){var a=Ha,d=b.ampdoc.getHeadNode();var f=(f=d.__AMP_CSS_TR)?f(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=B());var e=Ga(d,a,"amp-extension=amp-video-autoplay");e?e.textContent!==f&&(e.textContent=f):(e=(d.ownerDocument||d).createElement("style"),e.textContent=f,e.setAttribute("amp-extension","amp-video-autoplay"),f=Ga(d,a,"amp-runtime"),d.insertBefore(e,f?f.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
e)});this.la=K(this.ampdoc,"viewport");this.j=null;this.ka=!1;this.O=J(a.win,"timer");this.ma=E(a.getHeadNode(),"action");this.da=function(){for(var a=0;a<b.j.length;a++){var d=b.j[a];if("paused"!==d.getPlayingState()){T(d,"video-seconds-played");var f=d.video.getCurrentTime(),e=d.video.getDuration();v(f)&&v(e)&&0<e&&(f=ua(b.ampdoc.win,"video-manager.timeUpdate",C({time:f,percent:f/e})),b.ma.trigger(d.video.element,"timeUpdate",f,1))}}b.O.delay(b.da,1E3)};this.S=w(function(){return new U(b.ampdoc,
b)});this.O.delay(this.da,1E3)}k=Ma.prototype;k.dispose=function(){this.S().dispose();if(this.j)for(var a=0;a<this.j.length;a++){var b=this.j[a];b.dispose()}};k.register=function(a){Na(a);if(a.supportsPlatform()){this.j=this.j||[];var b=new Oa(this,a);Pa(this,b);this.j.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Na(a){function b(b,f){a.registerAction(b,function(){M(a);f()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Pa(a,b){var c=b.video.element;Q(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});Q(c,"reloaded",function(){b.videoLoaded()});if(!a.ka){var d=function(){for(var b=0;b<a.j.length;b++)a.j[b].updateVisibility()};a.la.onScroll(d);a.la.onChanged(d);a.ka=!0}}function Qa(a,b){for(var c=0;c<a.j.length;c++)if(a.j[c].video===b)return a.j[c];z().error("video-manager","video is not registered to this video manager");return null}
k.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.j.length;b++){var c=this.j[b];if(c.video.element===a){b=c;break a}}z().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};k.getPlayingState=function(a){return Qa(this,a).getPlayingState()};k.isMuted=function(a){return Qa(this,a).isMuted()};k.userInteracted=function(a){return Qa(this,a).userInteracted()};k.registerForAutoFullscreen=function(a){this.S().register(a)};
k.ta=function(){return this.S()};
function Oa(a,b){var c=this;this.N=a;this.l=a.ampdoc;this.video=b;this.ca=!0;this.A=this.C=this.ia=!1;this.R=new R;this.R.onSessionEnd(function(){return T(c,"video-session")});this.H=new R;this.H.onSessionEnd(function(){return T(c,"video-session-visible")});this.Z=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var e=self.AMP_CONFIG||{};var g=!!e.test||!(!b.__AMP_TEST&&!b.__karma__);var l=b.__karma__&&b.__karma__.config.amp.testOnIe,h=!!e.localDev||g,n=r(b.location.originalHash||
b.location.hash);e=e.spt;var q=r(b.location.search);t||(t=h?"1910212134200":b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"011910212134200");g={localDev:h,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(n.development)||b.AMP_DEV_MODE),examiner:"2"==n.development,geoOverride:n["amp-geo"],userLocationOverride:n["amp-user-location"],minified:!0,lite:void 0!=q.amp_lite,test:g,testIe:l,log:n.log,version:"1910212134200",rtvVersion:t,singlePassType:e};b=b.__AMP_MODE=g}b=b.lite;Ea||(Ea=
w(Da));return Ea(a,b)};this.ga=w(function(){return new V(c.l.win,c)});this.W=this.ja=!1;this.T=null;this.B=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.N.installAutoplayStyles();this.D=xa;this.qa=function(){c.video.play(!1)};this.pa=function(){c.video.pause()};wa(b.element).then(function(){return c.videoLoaded()});Q(b.element,"pause",function(){T(c,"video-pause");c.C=!1;c.W?c.W=!1:c.R.endSession()});Q(b.element,"playing",function(){c.C=!0;"playing_manual"==c.getPlayingState()&&c.fa();
var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.l.win;var e=c.D,g=c.qa,l=c.pa,h=a.navigator;"mediaSession"in h&&a.MediaMetadata&&(h.mediaSession.metadata=new a.MediaMetadata(xa),za(b,e),h.mediaSession.metadata=new a.MediaMetadata(e),h.mediaSession.setActionHandler("play",g),h.mediaSession.setActionHandler("pause",l))}c.R.beginSession();c.A&&c.H.beginSession();T(c,"video-play")});Q(b.element,"muted",function(){return c.B=
!0});Q(b.element,"unmuted",function(){return c.B=!1});Q(b.element,"ended",function(){T(c,"video-ended")});Q(b.element,"ad_start",function(){return T(c,"video-ad-start")});Q(b.element,"ad_end",function(){return T(c,"video-ad-end")});Q(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Ra(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:A(c.video.isInteractive(),
"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.N.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Sa(c)});this.fa=w(function(){var a="firstPlay",b=ua(c.l.win,a,C({})),e=c.video.element,g=E(e,"action");g.trigger(e,a,b,1)});Ta(this)}k=Oa.prototype;k.dispose=function(){this.ga().stop()};
function Ra(a,b,c){var d={},f=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){f["custom_"+a]=c[a]});T(a,"video-hosted-custom",f)}function Ta(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.ca=!1;a.C&&a.video.pause()})}k.isMuted=function(){return this.B};
k.videoLoaded=function(){this.ia=!0;this.T=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=B(this.video.getMetadata()));var a=this.l.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=ya(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.T.getAttribute("title")||this.T.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.ga().start();this.updateVisibility();this.A&&Ua(this)};
function Ua(a){a.l.isVisible()&&a.Z().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.ca&&(a.A?(a.H.beginSession(),a.video.play(!0),a.ja=!0):(a.C&&a.H.endSession(),a.video.pause(),a.W=!0)):a.A?a.H.beginSession():a.C&&a.H.endSession()})}function Sa(a){a.video.isInteractive()&&a.video.hideControls();a.Z().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Va(a))})}
function Va(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var f=La(c,d),e=function(a){b.mutateElement(function(){f.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(f)});var g=[Q(d,"pause",function(){return e(!1)}),Q(d,"playing",function(){return e(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.fa();b.isInteractive()&&b.showControls();b.unmute();g.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var l=Ka(d),h=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(l)});[Q(l,"click",function(){return M(b)}),Q(d,"ad_start",function(){h(!1);b.showControls()}),Q(d,"ad_end",function(){h(!0);b.hideControls()}),Q(d,"unmuted",function(){return M(b)})].forEach(function(a){return g.push(a)})}}}
k.updateVisibility=function(a){var b=this.A;if(a)this.A=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.A=.5<=(v(c)?c:0)}this.A!=b&&this.ia&&Ua(this)};k.getPlayingState=function(){return this.C?this.C&&this.ja&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};k.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
k.getAnalyticsDetails=function(){var a=this,b=this.video;return this.Z().then(function(c){var d=b.element.getLayoutBox(),f=d.width;d=d.height;var e=a.hasAutoplay&&c,g=b.getPlayedRanges(),l=g.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:e,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.B,playedTotal:l,playedRangesJson:JSON.stringify(g),state:a.getPlayingState(),width:f}})};
function U(a,b){var c=this;this.N=b;this.l=a;this.F=this.I=null;this.j=[];this.m=[];this.J=function(){return Wa(c)};this.oa=function(a){return"playing_manual"==c.N.getPlayingState(a)};this.na=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var g=b.element.getIntersectionChangeEntry();b=g.boundingClientRect;d-=g.intersectionRatio;.1<Math.abs(d)?a=d:(g=K(c.l,"viewport"),d=Xa(g,a),g=Xa(g,b),a=d<g||d>g?d-g:a.top-b.top);return a};Ya(this);Za(this)}
U.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};U.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=J(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),Q(b,"pause",this.J),Q(b,"playing",this.J),Q(b,"ended",this.J),a.signals().whenSignal("user-interacted").then(this.J),Wa(this))};
function Za(a){function b(){a.I=null}var c=a.l.getRootNode();a.m.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}U.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?D(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function Ya(a){var b=a.l.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.m.push(Q(d,"change",function(){return $a(a)}))}a.m.push(Q(b,"orientationchange",function(){return $a(a)}))}function $a(a){a.isInLandscape()?null!=a.F&&ab(a,a.F):a.I&&bb(a,a.I)}function ab(a,b){var c=J(a.l.win,"platform");a.I=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():cb(a,b).then(function(){return b.fullscreenEnter()})}
function bb(a,b){a.I=null;cb(a,b,"center").then(function(){return b.fullscreenExit()})}function cb(a,b,c){c=void 0===c?null:c;var d=b.element,f=K(a.l,"viewport");return db(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,l=b.top;b=b.bottom;var h=f.getSize().height,n=0<=l&&b<=h;return n?Promise.resolve():f.animateScrollIntoView(d,c?c:b>h?"bottom":"top")})}function db(a){var b=330;return J(a.l.win,"timer").promise(b)}
function Wa(a){if(a.isInLandscape())return a.F;a.F=null;var b=a.j.filter(a.oa).sort(a.na)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.F=b)}return a.F}function Xa(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.O=J(a,"timer");this.K=b;this.m=null;this.P=this.ha=0}
V.prototype.start=function(){var a=this,b=this.K.video.element;this.stop();this.m=this.m||[];eb(this)?fb(this,this.P):this.m.push(va(b,"loadedmetadata",function(){eb(a)&&fb(a,a.P)}));this.m.push(Q(b,"ended",function(){eb(a)&&gb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.P++}};
function eb(a){var b=a.K.video,c=b.getDuration();if(!c||isNaN(c)||1>=c)return!1;if(250>50*c){var d=5;a.sa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.sa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];y().warn.apply(y(),["video-manager"].concat(b))};
function fb(a,b){if(b==a.P){var c=a.K,d=a.O,f=c.video,e=function(){return fb(a,b)};if("paused"==c.getPlayingState())d.delay(e,500);else{c=f.getDuration();var g=Fa(50*c),l=f.getCurrentTime()/c*100,h=5*Math.floor(l/5);v(h);gb(a,h);d.delay(e,g)}}}function gb(a,b){0>=b||a.ha==b||(a.ha=b,T(a.K,"video-percentage-played",{normalizedPercentage:b.toString()}))}function T(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var hb=["<img placeholder referrerpolicy=origin>"];function W(a){a=AMP.BaseElement.call(this,a)||this;a.w=null;a.M=null;a.B=!1;a.U=!1;a.V=!1;a.h=null;a.G=null;a.ba=null;a.X=null;a.Y=null;a.aa=null;a.$=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var ib=Object.getOwnPropertyDescriptor(X,Y);ib&&Object.defineProperty(W,Y,ib)}else W[Y]=X[Y];W.ua=X.prototype;k=W.prototype;
k.preconnectCallback=function(a){var b=this.preconnect;b.url(jb(this));b.url("https://s.ytimg.com",a);b.url("https://i.ytimg.com",a)};k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};k.renderOutsideViewport=function(){return.75};k.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};
k.buildCallback=function(){this.element.isInA4A()&&this.user().error("amp-youtube","amp-youtube is deprecated in AMPHTML ads. See https://github.com/ampproject/amphtml/issues/21340");this.w=this.element.getAttribute("data-videoid");this.M=this.element.getAttribute("data-live-channelid");kb(this);var a=new ea;this.X=a.promise;this.Y=a.resolve;!this.getPlaceholder()&&this.w&&lb(this);a=H(this.element);var b=I(a),c=ka(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,
reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ma,d.context=a,d.resolve&&G(b,"video-manager"))};
function jb(a){if(a.ba)return a.ba;kb(a);var b="";"omit"===(a.element.getAttribute("credentials")||"include")&&(b="-nocookie");b="https://www.youtube"+b+".com/embed/";var c=a.w?encodeURIComponent(a.w||"")+"?":"live_stream?channel="+(encodeURIComponent(a.M||"")+"&");c=""+b+c+"enablejsapi=1&amp=1";var d=a.element;b=la(d);"autoplay"in b&&(delete b.autoplay,a.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay"));"playsinline"in b||(b.playsinline="1");var f=d.hasAttribute("autoplay");
f&&("iv_load_policy"in b||(b.iv_load_policy="3"),b.playsinline="1");"loop"in b&&a.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop");a.U=d.hasAttribute("loop")||"loop"in b&&"1"==b.loop;a.V="playlist"in b;a.U&&(a.V?b.loop="1":"loop"in b&&delete b.loop);d=[];for(h in b){var e=b[h];if(null!=e)if(Array.isArray(e))for(var g=0;g<e.length;g++){var l=e[g];d.push(encodeURIComponent(h)+"="+encodeURIComponent(l))}else d.push(encodeURIComponent(h)+"="+encodeURIComponent(e))}var h=
d.join("&");h&&(b=c.split("#",2),c=b[0].split("?",2),h=c[0]+(c[1]?"?"+c[1]+"&"+h:"?"+h),c=h+=b[1]?"#"+b[1]:"");return a.ba=c}
k.layoutCallback=function(){var a=this,b=qa(this,jb(this));ra(b);this.h=b;K(this.element,"video-manager").register(this);this.aa=Q(this.win,"message",this.ra.bind(this));this.U&&!this.V&&(this.$=Q(this.element,"ended",function(){return a.play(!1)}));var c=this.loadPromise(this.h).then(function(){return J(a.win,"timer").promise(300)}).then(function(){a.h&&a.h.contentWindow.postMessage(JSON.stringify(C({event:"listening"})),"*");a.element.dispatchCustomEvent("load")});this.Y(c);return c};
k.unlayoutCallback=function(){this.h&&(L(this.h),this.h=null);this.aa&&this.aa();this.$&&this.$();var a=new ea;this.X=a.promise;this.Y=a.resolve;return!0};k.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};k.mutatedAttributesCallback=function(a){null!=a["data-videoid"]&&(this.w=this.element.getAttribute("data-videoid"),this.h&&Z(this,"loadVideoById",[this.w]))};
function kb(a){var b=!(a.w&&a.M)&&(a.w||a.M);A(b,"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",a.element)}function Z(a,b,c){a.X.then(function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(C({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"*")}})}
k.ra=function(a){var b=this.h;if(b&&a.source==b.contentWindow&&"https://www.youtube.com"==a.origin){var c=a.data;if((a=c)&&(u(a)||D(a,"{"))&&(a=c,b=u(a)?a:na(a),null!=b)){a=b.event;var d=b.info||{};b=this.element;var f=d.playerState;if("infoDelivery"==a&&null!=f)a={},pa(b,f.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a));else{var e=d.muted;"infoDelivery"==a&&d&&null!=e?this.B!=e&&(this.B=e,b.dispatchCustomEvent(this.B?"muted":"unmuted")):"initialDelivery"==a?(this.G=d,b.dispatchCustomEvent("loadedmetadata")):
"infoDelivery"==a&&void 0!==d.currentTime&&(this.G.currentTime=d.currentTime)}}}};
function lb(a){var b=a.element,c=O(b)(hb),d=a.w;Ca(c,{"object-fit":"cover",visibility:"hidden"});a.propagateAttributes(["aria-label"],c);c.src="https://i.ytimg.com/vi/"+encodeURIComponent(d)+"/sddefault.jpg#404_is_fine";c.hasAttribute("aria-label")?c.setAttribute("alt","Loading video - "+c.getAttribute("aria-label")):c.setAttribute("alt","Loading video");a.applyFillContent(c);b.appendChild(c);a.loadPromise(c).then(function(){if(120==c.naturalWidth&&90==c.naturalHeight)throw Error("sddefault.jpg is not found");
}).catch(function(){c.src="https://i.ytimg.com/vi/"+encodeURIComponent(d)+"/hqdefault.jpg";return a.loadPromise(c)}).then(function(){a.getVsync().mutate(function(){Ca(c,{visibility:""})})})}k.supportsPlatform=function(){return!0};k.isInteractive=function(){return!0};k.play=function(){Z(this,"playVideo")};k.pause=function(){Z(this,"pauseVideo")};k.mute=function(){Z(this,"mute")};k.unmute=function(){Z(this,"unMute")};k.showControls=function(){};k.hideControls=function(){};
k.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
k.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreencancelFullScreen||a.webkitExitFullscreencancelFullScreen||a.webkitCancelFullScreencancelFullScreen||a.mozCancelFullScreencancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
k.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};k.getMetadata=function(){};k.preimplementsMediaSessionAPI=function(){return!0};k.preimplementsAutoFullscreen=function(){return!1};k.getCurrentTime=function(){return this.G?this.G.currentTime:NaN};
k.getDuration=function(){return this.G?this.G.duration:NaN};k.getPlayedRanges=function(){return[]};k.seekTo=function(){this.user().error("amp-youtube","`seekTo` not supported.")};(function(a){a.registerElement("amp-youtube",W)})(self.AMP);
})});

//# sourceMappingURL=amp-youtube-0.1.js.map
