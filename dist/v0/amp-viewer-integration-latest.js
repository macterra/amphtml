(self.AMP=self.AMP||[]).push({n:"amp-viewer-integration",p:"high",v:"1910212134200",f:(function(AMP,_){
function n(a){var b=this;this.h=a;this.ia={ancestorOrigin:function(){var a=b.h.win.location.ancestorOrigins;return a?a[0]:""}}}n.prototype.get=function(){return this.ia};function p(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function q(a){return a||{}};var r;function t(a,b,c,d){var e=a,f=c;var g=function(a){try{return f(a)}catch(m){throw self.__AMP_REPORT_ERROR(m),m;}};var h=aa(),l=!1;d&&(l=d.capture);e.addEventListener(b,g,h?d:l);return function(){e&&e.removeEventListener(b,g,h?d:l);g=e=f=null}}function aa(){if(void 0!==r)return r;r=!1;try{var a={get capture(){r=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return r};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=ba.exec(a);){var d=u(c[1],c[1]);c=c[2]?u(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b};var w="";function ca(a){var b=!1,c=null,d=a;return function(a){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];b||(c=d.apply(self,e),b=!0,d=null);return c}};var x=self.AMP_CONFIG||{},ea={thirdParty:x.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:x.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof x.thirdPartyFrameRegex?new RegExp(x.thirdPartyFrameRegex):x.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:x.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:x.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:x.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function z(a,b,c){if(!y.user)throw Error("failed to call initLogConstructor");y.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function fa(a){return a.parent&&a.parent!=a};function A(a,b,c,d){return t(a,b,c,d)}function B(a,b,c){var d=c,e=t(a,b,function(a){try{d(a)}finally{d=null,e()}},void 0)};function C(a,b){this.win=a;this.w=b;A(this.win.document,"focusin",this.G.bind(this),{capture:!1})}C.prototype.G=function(a){a.defaultPrevented||this.w.sendRequest(a.type,q({focusTargetRect:a.target.getBoundingClientRect()}),!1)};function D(){var a=100;this.aa=a;this.F=this.O=0;this.C=Object.create(null)}D.prototype.has=function(a){return!!this.C[a]};D.prototype.get=function(a){var b=this.C[a];if(b)return b.access=++this.F,b.payload};
D.prototype.put=function(a,b){this.has(a)||this.O++;this.C[a]={payload:b,access:this.F};if(!(this.O<=this.aa)){if(y.dev)a=y.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.C;var c=this.F+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.O--)}};var ha=q({c:!0,v:!0,a:!0,ad:!0,action:!0}),E,F,ia=/[?&]amp_js[^&]*/,ja=/[?&]amp_gsa[^&]*/,ka=/[?&]amp_r[^&]*/,la=/[?&]amp_kit[^&]*/,ma=/[?&]usqp[^&]*/;
function G(a){var b;E||(E=self.document.createElement("a"),F=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new D));var c=b?null:F,d=E;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=self;if(d.__AMP_MODE)d=d.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var g=!!f.test||!(!d.__AMP_TEST&&!d.__karma__);var h=d.__karma__&&d.__karma__.config.amp.testOnIe,l=!!f.localDev||g,k=v(d.location.originalHash||d.location.hash);f=f.spt;var m=v(d.location.search);w||(w=l?"1910212134200":d.AMP_CONFIG&&d.AMP_CONFIG.v?d.AMP_CONFIG.v:"011910212134200");g={localDev:l,development:!!(0<=["1","actions",
"amp","amp4ads","amp4email"].indexOf(k.development)||d.AMP_DEV_MODE),examiner:"2"==k.development,geoOverride:k["amp-geo"],userLocationOverride:k["amp-user-location"],minified:!0,lite:void 0!=m.amp_lite,test:g,testIe:h,log:k.log,version:"1910212134200",rtvVersion:w,singlePassType:f};d=d.__AMP_MODE=g}e=d.test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,e);a=e}return a}
function na(a){"string"==typeof a&&(a=G(a));var b=a;"string"==typeof b&&(b=G(b));if(!ea.cdnProxyRegex.test(b.origin))return a.href;b=a.pathname.split("/");z(ha[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);z(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(ia,"").replace(ja,"").replace(ka,"").replace(la,"").replace(ma,"").replace(/^[?&]/,
""))?"?"+d:"":"";return b+d+(a.hash||"")};function oa(a,b){var c,d=a=a.__AMP_TOP||(a.__AMP_TOP=a),e=a,f=H(d),g=f["viewer-integration-variable"];g||(g=f["viewer-integration-variable"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});g.ctor||g.obj||(g.ctor=b,g.context=e,g.resolve&&I(d,"viewer-integration-variable"));c&&I(a,"viewer-integration-variable")}function J(a,b){var c=K(a);c=K(c);c=c.isSingleDoc()?c.win:c;return I(c,b)}
function K(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=I(b,"ampdoc").getAmpDoc(a)}return a}function I(a,b){var c=H(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function H(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b};var L,M="Webkit webkit Moz moz ms O o".split(" ");function N(a,b,c){var d;var e=a.style;if(2>b.length||0!=b.lastIndexOf("--",0)){L||(L=p());var f=L[b];if(!f){f=b;if(void 0===e[b]){var g=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<M.length;h++){var l=M[h]+g;if(void 0!==e[l]){g=l;break b}}g=""}void 0!==e[g]&&(f=g)}L[b]=f}b=f}b&&(a.style[b]=d?c+d:c)}function pa(a,b){for(var c in b)N(a,c,b[c])};function O(a){this.J=a;this.B=[];this.D=0}O.prototype.push=function(a){this.B[this.D]=a;this.D=(this.D+1)%this.J};O.prototype.get=function(a){this.B.length>=this.J&&(a=(this.D+a)%this.J);return this.B[a]};O.prototype.size=function(){return this.B.length};var qa=/[,.\s\u2022()]/;function ra(a){return"\u2019"==a||"\u2018"==a?"'":"\u201c"==a||"\u201d"==a?'"':a.toLowerCase()}
function sa(a){for(var b=[],c=0;c<a.length;c++){for(var d=a[c],e=[],f=0;f<d.length;f++){var g=d[f];qa.test(g)||e.push(ra(g))}var h=e.join("");h&&b.push(h)}return b}function P(a,b){this.ga=a;this.$=b;this.matches=[];this.X={};this.P=a.length-1;for(b=0;b<a.length;b++)this.X[a[b]]=a.length-1-b}
P.prototype.update=function(){if(0<this.P)this.P--;else{for(var a=this.ga,b=this.$,c=b.size(),d=0;d<a.length;d++){var e=b.get(c-1-d).pos;e=ra(e.node.wholeText[e.offset]);if(a[a.length-1-d]!=e){var f=this.X[e];null==f&&(f=a.length);f-=d;1>f&&(f=1);this.P=f-1;return}}var g=b.get(c-1),h=g.pos;this.matches.push({start:b.get(c-a.length),end:{pos:{node:h.node,offset:h.offset+1},idx:g.idx+1}})}};
function ta(a,b,c){c=sa(c);if(0>=c.length)return null;var d=new Q(a,b);a=new O(c.map(function(a){return a.length}).reduce(function(a,b){return Math.max(a,b)}));for(var e=[new P(c[0],a)],f=-1;;){f++;b=d.next();if(null==b)return null;if(!qa.test(b.node.wholeText[b.offset])){a.push({pos:b,idx:f});for(b=0;b<e.length;b++)e[b].update();var g=e[e.length-1];if(0!=g.matches.length){if(e.length==c.length)break;e.push(new P(c[e.length],a))}}}a=[];c=c.length-1;a:for(;0<=c;c--){var h=e[c].matches;if(0==a.length)a.push(h[h.length-
1]);else{var l=a[a.length-1];for(b=h.length-1;0<=b;b--){var k=h[b];if(l.start.idx>=k.end.idx){a.push(k);continue a}}}}c=[];for(b=a.length-1;0<=b;b--)k=a[b],c.push({start:k.start.pos,end:k.end.pos});return c}
function ua(a,b,c,d,e){if(c>=d)return null;a=a.document;var f=b.parentNode,g=b.wholeText;0<c&&f.insertBefore(a.createTextNode(g.substring(0,c)),b);var h=a.createElement("span");h.appendChild(a.createTextNode(g.substring(c,d)));f.insertBefore(h,b);e.push(h);var l=null;d<g.length&&(l=a.createTextNode(g.substring(d)),f.insertBefore(l,b));f.removeChild(b);return l}
function Q(a,b){this.ka=a;this.L=b;this.A=-1;this.o=null;if(b instanceof a.Text)this.A=0;else if(b instanceof a.Element){var c=(a.getComputedStyle(b)||p()).display;"none"!=c&&(b=b.firstChild,null!=b&&(this.o=new Q(a,b)))}}Q.prototype.next=function(){if(0<=this.A){if(this.A<this.L.wholeText.length){var a=this.A;this.A++;a={node:this.L,offset:a}}else a=null;return a}for(;null!=this.o;){a=this.o.next();if(null!=a)return a;var b=this.o.L.nextSibling;this.o=null!=b?new Q(this.ka,b):null}return null};function va(a){return"loading"!=a.readyState&&"uninitialized"!=a.readyState}function wa(a,b){var c=va,d=c(a);if(d)b(a);else{var e=function(){c(a)&&(d||(d=!0,b(a)),a.removeEventListener("readystatechange",e))};a.addEventListener("readystatechange",e)}}function xa(a){return new Promise(function(b){wa(a,b)})};function ya(a){a=v(a.win.location.hash).highlight;if(!a||102400<a.length)return null;var b=JSON.parse(a),c=b.s;if(!(c instanceof Array)||15<c.length)return null;var d=0;for(a=0;a<c.length;a++){var e=c[a];if("string"!=typeof e||!e)return null;d+=e.length;if(1500<d)return null}var f=!1;b.n&&(f=!0);var g=!1;b.na&&(g=!0);return{sentences:c,skipScrollAnimation:g,skipRendering:f}}
function R(a,b){var c=this;this.h=a;this.ja=J(a,"viewer");this.l=J(this.h,"viewport");this.j=null;xa(a.win.document).then(function(){za(c,b)})}function S(a,b,c){var d=q({state:b}),e;for(e in c)d[e]=c[e];a.ja.sendMessage("highlightState",d)}
function Aa(a,b){var c=a.h.win;if(b=ta(c,a.h.getBody(),b.sentences)){for(var d=[],e=null,f=0;f<b.length;f++){var g=b[f];e&&e.end.node==g.start.node&&e.end.offset==g.start.offset?e.end=g.end:(e=g,d.push(g))}b=d;d=[];for(e=0;e<b.length;e++){f=b[e];var h=f.start,l=f.end;g=b;for(f=e;;){if(h.node==l.node){if(h=ua(c,h.node,h.offset,l.offset,d))for(f+=1;f<g.length;f++){var k=g[f];if(l.node!=k.start.node)break;k.start.node=h;k.start.offset-=l.offset;if(l.node!=k.end.node)break;k.end.node=h;k.end.offset-=
l.offset}break}a:{k=!0;for(var m=h.node;;){if(null==m){k=null;break a}if(k){var da=m.nextSibling;da?(m=da,k=!1):m=m.parentNode}else{if(m instanceof c.Text){k=m;break a}m.firstChild?m=m.firstChild:k=!0}}}ua(c,h.node,h.offset,h.node.wholeText.length,d);if(!k)break;h={node:k,offset:0}}}d&&0!=d.length&&(a.j=d)}}R.prototype.onVisibleOnce=function(a){var b=this;a=ca(a);this.h.onVisibilityChanged(function(){"visible"==b.h.getVisibilityState()&&a()})};
function za(a,b){if(a.h.win.document.querySelector('script[id="amp-access"]'))S(a,"has_amp_access");else if(Aa(a,b),a.j){var c=T(a);S(a,"found",q({scroll:c}));if(!b.skipRendering){for(var d=0;d<a.j.length;d++)pa(a.j[d],{backgroundColor:"#fcff00",color:"#000"});var e=a.h.getVisibilityState();b.skipScrollAnimation?"visible"==e?Ba(a,c):(a.l.setScrollTop(c),a.onVisibleOnce(function(){Ba(a,T(a))})):"visible"==e?Ca(a,c):(a.l.setScrollTop(Math.max(0,c-500)),a.onVisibleOnce(function(){Ca(a,T(a))}));B(a.h.getBody(),
"click",a.U.bind(a))}}else S(a,"not_found")}function T(a){var b=a.j;if(!b)return 0;a=a.l;for(var c=Number.MAX_VALUE,d=0,e=a.getPaddingTop(),f=0;f<b.length;f++){var g=a.getLayoutRect(b[f]),h=-e;if(0==h||0==g.width&&0==g.height)var l=g;else{l=g.left+0;h=g.top+h;var k=g.width;g=g.height;l={left:l,top:h,width:k,height:g,bottom:h+g,right:l+k,x:l,y:h}}g=l.bottom;c=Math.min(c,l.top);d=Math.max(d,g)}if(c>=d)return 0;b=a.getHeight()-e;b=(d+c-b)/2;b>c-80&&(b=c-80);return 0<b?b:0}
function Ba(a,b){S(a,"auto_scroll");a.l.setScrollTop(b);S(a,"shown")}
function Ca(a,b){a.l.setScrollTop(Math.max(0,b-500));var c=a.h.win.document.createElement("div");c.style.display="block";pa(c,{position:"absolute",top:Math.floor(b)+"px",height:"1px",left:"0",width:"1px","pointer-events":"none"});var d=a.h.getBody();d.appendChild(c);S(a,"auto_scroll");a.l.animateScrollIntoView(c).then(function(){d.removeChild(c);var e=T(a);var f=a.l.getScrollTop();if(f==e&&f==b)e=null;else{var g={};f!=e&&(a.l.setScrollTop(e),g.nd=f-e);f!=b&&(g.od=f-b);e=g}S(a,"shown",e)})}
R.prototype.setupMessaging=function(a){a.registerHandler("highlightDismiss",this.U.bind(this))};R.prototype.U=function(){if(this.j)for(var a=0;a<this.j.length;a++)for(var b=this.j[a],c=["backgroundColor","color"],d=0;d<c.length;d++)N(b,c[d],null)};var Da="key code location ctrlKey shiftKey altKey metaKey repeat isComposing charCode keyCode which".split(" ");function U(a,b){this.win=a;this.w=b;a=this.H.bind(this);t(this.win,"keydown",a,void 0);t(this.win,"keypress",a,void 0);t(this.win,"keyup",a,void 0)}U.prototype.H=function(a){Ea(a)||this.G(a)};U.prototype.G=function(a){this.w.sendRequest(a.type,Fa(a),!1)};
function Ea(a){if(a.defaultPrevented)return!0;if("Escape"==a.key)return!1;switch(a.target.nodeName){case "INPUT":return"checkbox"!=a.target.type||" "==a.key;case "TEXTAREA":case "BUTTON":case "SELECT":case "OPTION":return!0}return a.target.hasAttribute&&a.target.hasAttribute("contenteditable")}function Fa(a){var b={};Da.forEach(function(c){void 0!==a[c]&&(b[c]=a[c])});return b};function Ga(a){if("string"!=typeof a)return a;if("{"!=a.charAt(0))return null;try{return JSON.parse(a)}catch(b){return null}}function V(a,b,c){this.win=a;this.W=b;this.Y=c}V.prototype.addEventListener=function(a,b){var c=this;this.win.addEventListener("message",function(a){a.origin==c.W&&a.source==c.Y&&"__AMPHTML__"==a.data.app&&b(a)})};V.prototype.postMessage=function(a){this.Y.postMessage(a,this.W)};V.prototype.start=function(){};
function W(a,b,c,d){this.win=a;this.M=b;this.da=!!c;this.Z=d||null;this.ea=0;this.S={};this.K={};this.T=null;this.M.addEventListener("message",this.ba.bind(this));this.M.start()}W.prototype.registerHandler=function(a,b){this.K[a]=b};W.prototype.unregisterHandler=function(a){delete this.K[a]};W.prototype.setDefaultHandler=function(a){this.T=a};
W.prototype.ba=function(a){if(a=Ga(a.data))if("q"==a.type)Ha(this,a);else if("s"==a.type){var b=a.requestid,c=this.S[b];c&&(delete this.S[b],a.error?(Ia(this,"amp-viewer-messaging: handleResponse_ error: ",a.error),c.reject(Error("Request "+a.name+" failed: "+a.error))):c.resolve(a.data))}};W.prototype.sendRequest=function(a,b,c){var d=this,e=++this.ea,f=void 0;c&&(f=new Promise(function(a,b){d.S[e]={resolve:a,reject:b}}));X(this,{app:"__AMPHTML__",requestid:e,type:"q",name:a,data:b,rsvp:c});return f};
function Ja(a,b,c,d){var e=d?d.message?d.message:String(d):"unknown error";Ia(a,"amp-viewer-messaging: sendResponseError_, Message name: "+c,e);X(a,{app:"__AMPHTML__",requestid:b,type:"s",name:c,data:null,error:e})}function X(a,b){var c=Object.assign(b,{});a.Z&&(c.messagingToken=a.Z);a.M.postMessage(a.da?JSON.stringify(c):c)}
function Ha(a,b){var c=a.K[b.name];c||(c=a.T);if(!c)throw c=Error("Cannot handle request because handshake is not yet confirmed!"),c.args=b.name,c;c=c(b.name,b.data,!!b.rsvp);if(b.rsvp){var d=b.requestid;if(!c)throw Ja(a,d,b.name,Error("no response")),Error("expected response but none given: "+b.name);c.then(function(c){X(a,{app:"__AMPHTML__",requestid:d,type:"s",name:b.name,data:c})},function(c){Ja(a,d,b.name,c)})}}
function Ia(a,b,c){var d="amp-messaging-error-logger: "+b,e=" data: "+(c?c.message?c.message:String(c):"unknown error");d+=e;a.win.viewerState=d};var Ka="altKey charCode ctrlKey detail eventPhase key layerX layerY metaKey pageX pageY returnValue shiftKey timeStamp type which".split(" "),La="clientX clientY force identifier pageX pageY radiusX radiusY screenX screenY".split(" ");function Y(a,b){this.win=a;this.w=b;this.N=!1;this.R=[];b.registerHandler("scrollLock",this.fa.bind(this));Ma(this)}
function Ma(a){var b=a.H.bind(a),c=a.win.document,d={capture:!1,passive:!a.N};a.R.push(t(c,"touchstart",b,d),t(c,"touchend",b,d),t(c,"touchmove",b,d))}function Na(a){a.R.forEach(function(a){return a()});a.R.length=0}Y.prototype.H=function(a){switch(a.type){case "touchstart":case "touchend":case "touchmove":if(a&&a.type){var b=Oa(a,Ka);a.touches&&(b.touches=Pa(a.touches));a.changedTouches&&(b.changedTouches=Pa(a.changedTouches));this.w.sendRequest(a.type,b,!1)}this.N&&a.cancelable&&a.preventDefault()}};
function Pa(a){for(var b=[],c=0;c<a.length;c++)b.push(Oa(a[c],La));return b}function Oa(a,b){for(var c={},d=0;d<b.length;d++){var e=b[d];void 0!==a[e]&&(c[e]=a[e])}return c}Y.prototype.fa=function(a,b,c){this.N=!!b;Na(this);Ma(this);return c?Promise.resolve({}):void 0};function Z(a){var b=this;this.win=a;this.V=this.m=!1;this.I=null;this.ha=new n(K(this.win.document));oa(this.win,function(){return b.ha.get()})}
Z.prototype.init=function(){var a=this,b=K(this.win.document),c=J(b,"viewer");this.m="1"==c.getParam("webview");this.V=c.hasCapability("handshakepoll");var d=c.getParam("messagingToken"),e=c.getParam("origin")||"";if(!this.m&&!e)return Promise.resolve();if(this.m||this.V){var f=fa(this.win)?this.win.parent:null;return Qa(this,f,e).then(function(f){return Ra(a,c,b,e,new W(a.win,f,a.m,d))})}if(f=ya(b))this.I=new R(b,f);f=new V(this.win,e,this.win.parent);return Ra(this,c,b,e,new W(this.win,f,this.m,
d))};function Qa(a,b,c){return new Promise(function(d){var e=A(a.win,"message",function(f){var g=Ga(f.data);if(g&&f.origin===c&&f.source===b&&"__AMPHTML__"==g.app&&"handshake-poll"==g.name){if(a.m&&(!f.ports||!f.ports.length))throw Error("Did not receive communication port from the Viewer!");f=f.ports&&0<f.ports.length?f.ports[0]:new V(a.win,c,a.win.parent);d(f);e()}})})}
function Ra(a,b,c,d,e){var f=c.getUrl(),g=na(f);return e.sendRequest("channelOpen",q({url:f,sourceUrl:g}),!0).then(function(){Sa(a,e,b,d)})}function Sa(a,b,c,d){b.setDefaultHandler(function(a,b,d){return c.receiveMessage(a,b,d)});c.setMessageDeliverer(b.sendRequest.bind(b),d);B(a.win,"unload",a.ca.bind(a,b));c.hasCapability("swipe")&&new Y(a.win,b);c.hasCapability("keyboard")&&new U(a.win,b);c.hasCapability("focus-rect")&&new C(a.win,b);null!=a.I&&a.I.setupMessaging(b)}
Z.prototype.ca=function(a){return a.sendRequest("unloaded",{},!0)};(function(a){(new Z(a.win)).init()})(self.AMP);
})});

//# sourceMappingURL=amp-viewer-integration-0.1.js.map
