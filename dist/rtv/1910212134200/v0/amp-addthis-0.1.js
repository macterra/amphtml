(self.AMP=self.AMP||[]).push({n:"amp-addthis",v:"1910212134200",f:(function(AMP,_){
var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var u;a:{var ba={a:!0},da={};try{da.__proto__=ba;u=da.a;break a}catch(a){}u=!1}m=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ea=m,fa="url title media description email_template email_vars passthrough url_transforms".split(" "),ha="services_exclude services_compact services_expanded services_custom ui_click ui_disable ui_delay ui_hover_direction ui_language ui_offset_top ui_offset_left ui_tabindex track_addressbar track_clickback ga_property ga_social".split(" "),x=/[A-Z]/gi,ia=/[^a-zA-Z]/g,ja=/\s/g;var la=/[0-9\-].*/;function B(){this.m={}}B.prototype.record=function(a){var b=(a.id||a.pco||"").replace(la,"");b&&!this.m[b]&&x.test(b)&&(this.m[b]=b)};B.prototype.recordProductCode=function(a){var b=a;b&&!this.m[b]&&x.test(b)&&(this.m[b]=b)};B.prototype.getActivePcos=function(){return Object.keys(this.m)};var D;function G(a,b,d){var c=void 0,e=a,f=d;var g=function(a){try{return f(a)}catch(A){throw self.__AMP_REPORT_ERROR(A),A;}};var h=ma(),k=!1;c&&(k=c.capture);e.addEventListener(b,g,h?c:k)}function ma(){if(void 0!==D)return D;D=!1;try{var a={get capture(){D=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return D};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function na(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return b}};var oa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function pa(a){var b=Object.create(null);if(!a)return b;for(var d;d=oa.exec(a);){var c=na(d[1],d[1]);d=d[2]?na(d[2].replace(/\+/g," "),d[2]):"";b[c]=d}return b};var H="";var qa=Object.prototype.toString;function ra(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function K(a,b,d){if(!I.user)throw Error("failed to call initLogConstructor");I.user.assert(a,b,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function L(a){return a||{}};function sa(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function M(a,b,d){a=a.createElement(b);for(var c in d)a.setAttribute(c,d[c]);return a};function ta(a,b){G(a,"pagehide",b)};function ua(){this.w={};this.W=0;this.l=this.I=null}l=ua.prototype;l.startForDoc=function(a){this.l=a.win;this.I=this.l.document.activeElement;var b=this.aa.bind(this);G(this.l,"blur",b);b=this.ba.bind(this);G(this.l,"click",b)};l.aa=function(){var a=this.l.document.activeElement;if(a){var b=a!==this.I;if("IFRAME"===a.tagName&&b){var d=a.src.split("://").pop();this.w[d]?this.w[d]++:this.w[d]=1}this.I=a}};l.ba=function(){this.W++;this.I=this.l.document.activeElement};l.getPageClicks=function(){return this.W};
l.getIframeClickString=function(){var a=this;return Object.keys(this.w).map(function(b){return b+"|"+a.w[b]}).join(",")};function va(a){var b=a,d=b.widgetId,c=b.productCode;b=wa(b.pubId);d=xa(d);var e=b,f=d,g="string"===typeof c&&("shin"===c||"shfs"===c);if(e){if(f&&!g)return 1;if(!f&&g)return 2}else if(!f&&g)return 3;return-1}function wa(a){return"string"===typeof a&&0<a.length}function xa(a){return"string"===typeof a&&4===a.length};function N(){this.h={};this.H=[];this.o=null}N.prototype.receiveConfiguration=function(a){var b=this,d=a.config,c=a.pubId,e=a.source,f=this.H.some(function(a){return a.contentWindow===e});if(f){var g=this.h[c];g.config=d;g.requestStatus=2;var h=g.iframeData;h.forEach(function(a){var e=a,d=e.shareConfig,f=e.atConfig,g=e.containerClassName;ya(b,{iframe:e.iframe,widgetId:e.widgetId,pubId:c,shareConfig:d,atConfig:f,productCode:e.productCode,containerClassName:g})})}};
function ya(a,b){var d=b.iframe,c=b.widgetId,e=b.pubId,f=b.productCode,g=a.h[e],h=g.config,k=g.requestStatus,q=L({event:"addthis.amp.configuration",shareConfig:b.shareConfig,atConfig:b.atConfig,pubId:e,widgetId:c,productCode:f,containerClassName:b.containerClassName,configRequestStatus:k,dashboardConfig:h});if(h&&h.widgets&&0<Object.keys(h.widgets).length)switch(va({pubId:e,widgetId:c,productCode:f})){case 1:c&&h.widgets[c]&&a.o.record(h.widgets[c]);break;case 2:f&&a.o.recordProductCode(f);break;
case 3:f&&a.o.recordProductCode(f);return;default:return}d.contentWindow.postMessage(JSON.stringify(q),"https://s7.addthis.com");0===k&&(a.H.push(d),g.requestStatus=1)}
N.prototype.register=function(a){var b=this,d=a.pubId,c=a.widgetId,e=a.productCode,f=a.containerClassName,g=a.iframe,h=a.iframeLoadPromise,k=a.shareConfig,q=a.atConfig,A=a.activeToolsMonitor;this.o||(this.o=A);this.h[d]||(this.h[d]={});a=this.h[d];a.requestStatus||(a.requestStatus=0);a.iframeData||(a.iframeData=[]);a.iframeData.push({iframe:g,shareConfig:k,atConfig:q,widgetId:c,productCode:e,containerClassName:f});h.then(function(){return ya(b,{iframe:g,pubId:d,widgetId:c,shareConfig:k,atConfig:q,
productCode:e,containerClassName:f})})};N.prototype.unregister=function(a){var b=a.pubId,d=a.iframe;this.H=this.H.filter(function(a){return a!==d});a=this.h[b]||{};a.iframeData&&(a.iframeData=a.iframeData.filter(function(a){return a.iframe!==d}))};function O(){this.P=0;this.F=null}O.prototype.startForDoc=function(a){this.F=a;this.F.onVisibilityChanged(this.listener.bind(this))};O.prototype.listener=function(){if(!this.F.isVisible()){var a=this.F.getLastVisibleTime()||0;this.P+=Date.now()-a}};O.prototype.getDwellTime=function(){return this.P};function za(){this.B={}}za.prototype.on=function(a,b){this.B[a]||(this.B[a]=[]);this.B[a].push(b)};function Aa(a,b,d){a.B[b]&&a.B[b].forEach(function(a){return a(d)})}
za.prototype.handleAddThisMessage=function(a){if("https://s7.addthis.com"===a.origin&&a.data){var b=a.data;if("[object Object]"!==qa.call(b)){if("string"===typeof b&&sa(b,"{"))try{var d=JSON.parse(b)}catch(c){d=null}else d=void 0;b=d}b=b||{};switch(b.event){case "addthis.amp.configuration":Aa(this,"addthis.amp.configuration",Object.assign({},b,{source:a.source}));break;case "addthis.share":Aa(this,"addthis.share",b)}}};function P(){var a=100;this.$=a;this.L=this.T=0;this.G=Object.create(null)}P.prototype.has=function(a){return!!this.G[a]};P.prototype.get=function(a){var b=this.G[a];if(b)return b.access=++this.L,b.payload};
P.prototype.put=function(a,b){this.has(a)||this.T++;this.G[a]={payload:b,access:this.L};if(!(this.T<=this.$)){if(I.dev)a=I.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.G;var d=this.L+1,c;for(c in a){var e=a[c].access;if(e<d){d=e;var f=c}}void 0!==f&&(delete a[f],this.T--)}};L({c:!0,v:!0,a:!0,ad:!0,action:!0});var Ba,Ca;
function Q(a){var b;Ba||(Ba=self.document.createElement("a"),Ca=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P));var d=b?null:Ca,c=Ba;if(d&&d.has(a))a=d.get(a);else{c.href=a;c.protocol||(c.href=c.href);var e={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c=self;if(c.__AMP_MODE)c=c.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var g=!!f.test||!(!c.__AMP_TEST&&!c.__karma__);var h=c.__karma__&&c.__karma__.config.amp.testOnIe,k=!!f.localDev||g,q=pa(c.location.originalHash||c.location.hash);f=f.spt;var A=pa(c.location.search);H||(H=k?"1910212134200":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011910212134200");g={localDev:k,development:!!(0<=["1","actions",
"amp","amp4ads","amp4email"].indexOf(q.development)||c.AMP_DEV_MODE),examiner:"2"==q.development,geoOverride:q["amp-geo"],userLocationOverride:q["amp-user-location"],minified:!0,lite:void 0!=A.amp_lite,test:g,testIe:h,log:q.log,version:"1910212134200",rtvVersion:H,singlePassType:f};c=c.__AMP_MODE=g}e=c.test&&Object.freeze?Object.freeze(e):e;d&&d.put(a,e);a=e}return a}
function Da(a,b){var d;if(!b)return a;var c=a.split("#",2),e=c[0].split("?",2),f=e[0]+(e[1]?d?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=c[1]?"#"+c[1]:""}function Ea(a){var b=[],d;for(d in a){var c=a[d];if(null!=c)if(Array.isArray(c))for(var e=0;e<c.length;e++){var f=c[e];b.push(encodeURIComponent(d)+"="+encodeURIComponent(f))}else b.push(encodeURIComponent(d)+"="+encodeURIComponent(c))}return b.join("&")};function Fa(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Ga(a,b)}function R(a,b){var d=Ha(a);d=Ha(d);d=d.isSingleDoc()?d.win:d;return Ga(d,b)}function Ha(a){return a.nodeType?Fa((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Ga(a,b){var d=a.__AMP_SERVICES;d||(d=a.__AMP_SERVICES={});var c=d;a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function S(){this.j=null;this.J=this.C=this.R=0}S.prototype.startForDoc=function(a){this.j=R(a,"viewport");this.R=this.j.getHeight()||0;this.C=this.j.getScrollTop()||0;this.J=this.C+this.R;this.j.onScroll(this.listener.bind(this))};S.prototype.listener=function(){var a=this.j.getScrollTop()||0;this.C=Math.max(this.C,a);this.J=Math.max(this.J,(this.j.getHeight()||0)+a)};S.prototype.getInitialViewHeight=function(){return this.R};S.prototype.getScrollHeight=function(){return this.J-this.C};var Ia=/^[0-9a-f]{16}$/,Ja=Date.now();var Ka=function(){return(Ja/1E3&4294967295).toString(16)+("00000000"+Math.floor(4294967296*Math.random()).toString(16)).slice(-8)}();var T,La="Webkit webkit Moz moz ms O o".split(" ");function Ma(a,b,d){var c;var e=a.style;if(!sa(b,"--")){T||(T=Object.create(null));var f=T[b];if(!f){f=b;if(void 0===e[b]){var g=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<La.length;h++){var k=La[h]+g;if(void 0!==e[k]){g=k;break b}}g=""}void 0!==e[g]&&(f=g)}T[b]=f}b=f}b&&(a.style[b]=c?d+c:d)};var Na=/#iframe$/;function Oa(a){var b=a.map(function(a){var b=a.delay;return Object.assign({},a,{delay:Array.isArray(b)&&b.length?b:[0]})}),d=b.map(function(a){var b=a.delay;return b.map(function(b){return{delay:b,pixels:[a]}})}).reduce(function(a,b){return a.concat(b)},[]).reduce(function(a,b){var c=b.delay;b=b.pixels;a[c]||(a[c]=[]);a[c]=a[c].concat(b);return a},{});return Object.keys(d).map(function(a){return{delay:Number(a),pixels:d[a]}})}
function Pa(a,b){b=b.win.document;var d=M(b,"amp-pixel",L({layout:"nodisplay",referrerpolicy:"no-referrer",src:a}));b.body.appendChild(d)}
function Qa(a,b){var d=b.sid,c=b.ampDoc,e=Oa(a);e.forEach(function(a){var b=a.delay,e=a.pixels;setTimeout(function(){var a=e.map(function(a){var b=a.url,d=Na.test(b);if(-1!==b.indexOf("//"))if(d){var e=Q(b).host.split(".").concat("pxltr frame".replace(/\s/,"_"));d=c.win.document;b=M(d,"iframe",L({frameborder:0,width:0,height:0,name:e,title:"Pxltr Frame",src:b}));e=!1;void 0===e&&(e=b.hasAttribute("hidden"));e?b.removeAttribute("hidden"):b.setAttribute("hidden","");e={position:"absolute",clip:"rect(0px 0px 0px 0px)"};
for(var f in e)Ma(b,f,e[f]);d.body.appendChild(b)}else Pa(b,c);return a.id}),f=L({delay:""+b,ids:a.join("-"),sid:d});f=Da("https://m.addthisedge.com/live/prender",Ea(f));c.win.navigator.sendBeacon?c.win.navigator.sendBeacon(f,"{}"):Pa(f,c)},1E3*b)})}function Ra(a){var b={};if(void 0===a||null===a)return b;var d="string"===typeof a?a:JSON.stringify(a);try{var c=JSON.parse(d);if("[object Object]"===qa.call(c))for(var e in c)b[e]=c[e]}catch(f){}return b}
function Sa(a){var b=a.ampDoc,d=a.endpoint,c=Ra(a.data);a=Da(d,Ea(c));Fa(b.win,"xhr").fetchJson(a,{mode:"cors",method:"GET",ampCors:!1,credentials:"include"}).then(function(a){return a.json()}).then(function(a){a=void 0===a.pixels?[]:a.pixels;0<a.length&&Qa(a,{sid:c.sid,ampDoc:b})},function(){})};function V(a){var b=(a.getAttribute("property")||a.name||"").toLowerCase();return{name:b,content:a.content||""}};function Ta(a){return a.replace(x,function(a){a=a.charCodeAt(0);var b=90>=a?90:122;return String.fromCharCode(b>=a+13?a+13:a-13)})}function Ua(a){return a.reduce(function(a,d){a[Ta(d)]=1;return a},{})};var Va=/^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i,Wa=/ws\/results\/(web|images|video|news)/,Xa=/google.*\/(search|url|aclk|m\?)/,Ya=/aol.*\/aol/,Za=Ua("cbea cbeab kkk zvys gvgf shpxf chfflyvcf pernzcvr svfgvat wvmm fcybbtr flovna".split(" ")),$a=Ua(["phz"]);function ab(a,b){a=void 0===a?"":a;b=void 0===b?!1:b;for(var d=0,c=a.toLowerCase().split(ia),e=0;e<c.length;e++){var f=c[e];if(Za[f]||!b&&$a[f]){d|=1;break}}return d}
function bb(a,b){var d=ab(a.title)|ab(a.hostname,!0);b.forEach(function(a){var b=V(a),c=b.name;b=b.content;if("description"===c||"keywords"===c)d|=ab(b);if("rating"===c){c=d;var g=0;b=(void 0===b?"":b).toLowerCase().replace(ja,"");if("mature"===b||"adult"===b||"rta-5042-1996-1400-1577-rta"===b)g|=1;d=c|g}});return d}
function cb(a,b,d){var c=0;if(a&&b){c=b.host===d.host?c|2:c|4;var e=a;e=void 0===e?"":e;var f=e.toLowerCase();if(f.match(Wa))f=!0;else{a:{e=e.split("?").pop().toLowerCase().split("&");for(var g,h=0;h<e.length;h++)if(g=Va.exec(e[h])){e=g[1];break a}e=void 0}f=void 0===e?!1:-1===f.indexOf("addthis")&&(Xa.test(f)||Ya.test(f)||-1<f.indexOf("/pagead/aclk?")||-1<f.indexOf(".com/url")||-1<f.indexOf(".com/l.php")||-1<f.indexOf("/search?")||-1<f.indexOf("/search/?")||-1<f.indexOf("search?")||-1<f.indexOf("yandex.ru/clck/jsredir?")||
-1<f.indexOf(".com/search")||-1<f.indexOf(".org/search")||-1<f.indexOf("/search.html?")||-1<f.indexOf("search/results.")||-1<f.indexOf(".com/s?bs")||-1<f.indexOf(".com/s?wd")||-1<f.indexOf(".com/mb?search")||-1<f.indexOf(".com/mvc/search")||-1<f.indexOf(".com/web")||-1<f.indexOf("hotbot.com/"))}f&&(c|=1)}return c}
function db(a,b){if(a.getElementById("product")||0<(a.getElementsByClassName("product")||[]).length||a.getElementById("productDescription")||a.getElementById("page-product")||a.getElementById("vm_cart_products")||window.Virtuemart)return!0;var d=b.reduce(function(a,b){var c=V(b);b=c.name;c=c.content;if(sa(b,"og:")){var d=b.split(":").pop();a[d]=c}return a},{});return"product"===d.type}
function eb(a){return a.filter(function(a){return"keywords"===V(a).name.toLowerCase()}).map(function(a){var b=[];a=V(a).content.split(",");for(var c=0,e=0;e<a.length;e++){var f=(a[e]||"").trim();if(f){if(200<=f.length+c+1)break;b.push(f);c+=f.length+1}}return b}).reduce(function(a,d){return a.concat(d)},[]).join(",")};var fb=/^\.[a-z0-9\-_]{11}(\.[a-z0-9_]+)?$/i;function gb(a){a=a.split("#").pop();a=a.split(";").shift();if(fb.test(a))return a};var hb=/\.gov|\.mil/;var ib="backgroundColor borderRadius counterColor counts countsFontSize desktopPosition elements hideDevice hideEmailSharingConfirmation hideLabel iconColor label mobilePosition numPreferredServices offset originalServices postShareFollowMsg postShareRecommendedMsg postShareTitle responsive shareCountThreshold size style textColor thankyou titleFontSize __hideOnHomepage originalServices services".split(" ");
function jb(a){var b=L({});ib.forEach(function(c){var d=a.element.getAttribute("data-attr-"+c);if("string"===typeof d||"number"===typeof d||"boolean"===typeof d)b[String(c)]=d});var d=JSON.stringify(b);return"{}"===d?"":d};var W=new N,kb=new S,lb=new O,mb=new ua,nb=new B,ob=!0;function X(a){a=AMP.BaseElement.call(this,a)||this;a.A=null;a.D="";a.U="";a.K="";a.V="";a.N="";a.X="";a.Y=null;a.M=null;a.Z="";a.S=-1;a.O="";return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(ea)ea(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var pb=Object.getOwnPropertyDescriptor(Y,Z);pb&&Object.defineProperty(X,Z,pb)}else X[Z]=Y[Z];X.ca=Y.prototype;l=X.prototype;
l.buildCallback=function(){var a=this,b=this.element.getAttribute("data-pub-id")||"",d=this.element.getAttribute("data-widget-id")||"",c=this.element.getAttribute("data-product-code")||"";this.S=va({pubId:b,widgetId:d,productCode:c});-1===this.S&&(wa(b)?"shin"===c||"shfs"===c||xa(d)?("shin"===c||"shfs"===c)&&xa(d)&&K(c,"Only widget id or product code is required <amp-addthis> %s",this.element):K(d,"Widget id or product code is required for <amp-addthis> %s",this.element):K(b,"The data-pub-id attribute is required for <amp-addthis> %s",
this.element));this.O=this.element.getAttribute("data-class-name")||"";this.D=b;this.U=3===this.S?jb(this):d;this.K=c;"shfs"===this.K&&this.element.setAttribute("data-widget-type","floating");var e=this.getAmpDoc();this.V=this.element.getAttribute("data-canonical-url")||R(this.element,"documentInfo").get().canonicalUrl||e.getUrl();this.N=this.element.getAttribute("data-canonical-title")||e.win.document.title;this.Z=this.element.getAttribute("data-widget-type");this.Y=qb(this);this.M=rb(this,e);if(ob){ob=
!1;var f=R(e,"viewer"),g=Q(this.V);e.whenFirstVisible().then(function(){return f.getReferrerUrl()}).then(function(b){a.X=b;var c=a.N,d=a.D,f=a.M,h=g.href,k=g.hostname,C=g.host,y=g.search,r=g.pathname,E=g.hash,w=g.protocol,J=g.port;c={du:h.split("#").shift(),hostname:k,href:h,referrer:b,search:y,pathname:r,title:c,hash:E,protocol:w,port:J};h=b?Q(b):{};r=f.ui_language.split("-");y=r[0];r=r.slice(1);E=(E=gb(c.du))?E.split(".").slice(2).shift():void 0;w=e.win;J=ra(w.document.head.querySelectorAll("meta"));
var sb=w.navigator.doNotTrack&&"unspecified"!==w.navigator.doNotTrack&&"no"!==w.navigator.doNotTrack&&"0"!==w.navigator.doNotTrack,tb=0|(!1!==f.use_cookies?1:0)|(!0===f.track_textcopy?2:0)|(!0===f.track_addressbar?4:0),ub=bb(c,J),vb=Date.now();f=!1!==f.track_clickback&&!1!==f.track_linkback?1:0;var wb=C===h.host?void 0:h.host;var U=E?"":(U=gb(c.du))?U.split(".").slice(1).shift():void 0;var z=c.du;if(gb(z))var p=!0;else{p=z.split("#").pop();var v;if(v=p&&p.match(Ia)){v=new Date;try{v=new Date(1E3*
parseInt(p.substr(0,8),16))}catch(Ab){}var t=v;t.setDate(t.getDate()-1);var F=new Date;if(t.getFullYear()<F.getFullYear())p=!1;else{p=t.getFullYear()>F.getFullYear();v=t.getFullYear()===F.getFullYear();var xb=t.getMonth()>F.getMonth(),yb=t.getMonth()===F.getMonth();t=t.getDate()>F.getDate();p=p||v&&xb||v&&yb&&t}v=!p}p=v||-1<z.indexOf("#at_pco=")?!0:!1}z=p?z.split("#").shift():z;b=L({amp:1,bl:tb,cb:ub,colc:vb,ct:f,dc:1,dp:C,dr:wb,fcu:U,fp:Q(z).pathname,fr:h.pathname||"",gen:100,ln:y,lnlc:r,mk:eb(J),
of:sb?4:hb.test(k)?1:0,pd:db(w.document,J)?1:0,pub:d,rb:cb(b,h,Q(c.du)),sid:Ka,skipb:1,sr:E});Sa({ampDoc:e,endpoint:"https://m.addthis.com/live/red_lojson/300lo.json",data:b});lb.startForDoc(e);kb.startForDoc(e);mb.startForDoc(e)});zb(this,{ampDoc:e,loc:g,pubId:this.D});if("messages"===this.element.getAttribute("data-widget-type")){var h=M(this.win.document,"button",L({"class":"i-amphtml-addthis-close"}));h.onclick=function(){var b=a.element;b.parentElement&&b.parentElement.removeChild(b)};this.element.appendChild(h)}}};
l.preconnectCallback=function(a){this.preconnect.url("https://s7.addthis.com",a);this.preconnect.url("https://m.addthis.com",a);this.preconnect.url("https://m.addthisedge.com",a);this.preconnect.url("https://api-public.addthis.com",a);this.preconnect.url("https://cache.addthiscdn.com",a);this.preconnect.url("https://su.addthis.com",a)};l.isAlwaysFixed=function(){return"floating"===this.Z};
l.createPlaceholderCallback=function(){var a=M(this.win.document,"div",L({placeholder:""}));Ma(a,"background-color","#fff");var b=M(this.win.document,"amp-img",L({src:"https://cache.addthiscdn.com/icons/v3/thumbs/32x32/addthis.png",layout:"fixed",width:"32",height:"32",referrerpolicy:"origin",alt:"AddThis Website Tools"}));a.appendChild(b);return a};
l.layoutCallback=function(){var a=M(this.element.ownerDocument,"iframe",L({frameborder:0,title:"AddThis Website Tools",src:"https://s7.addthis.com/dc/amp-addthis.html",id:this.U,pco:this.K,containerClassName:this.O})),b=this.loadPromise(a);this.applyFillContent(a);this.element.appendChild(a);this.A=a;W.register({pubId:this.D,widgetId:this.U,productCode:this.K,shareConfig:this.Y,atConfig:this.M,containerClassName:this.O,iframe:a,iframeLoadPromise:b,activeToolsMonitor:nb});return b};
l.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};l.unlayoutCallback=function(){if(this.A){var a=this.A;a.parentElement&&a.parentElement.removeChild(a);W.unregister({pubId:this.D,iframe:this.A});this.A=null}return!0};
function qb(a){var b={};fa.map(function(d){var c=a.element.getAttribute("data-"+d);c?b[d]=c:"url"===d?b[d]=a.getAmpDoc().getUrl():"title"===d?b[d]=a.getAmpDoc().win.document.title:"media"===d&&(c=a.getAmpDoc().win.document.head.querySelector('meta[property="og:image"]'),b[d]=c?c.content:"")});return b}
function rb(a,b){return ha.reduce(function(d,c){var e=a.element.getAttribute("data-"+c);e?d[c]=e:(e=b.win,"ui_language"===c&&(d[c]=e.document.documentElement.lang||e.navigator.language||e.navigator.userLanguage||"en"));return d},{})}
function zb(a,b){var d=b.ampDoc,c=b.loc,e=b.pubId;ta(d.win,function(){var a=c.host;var b=c.pathname;var f=c.hash;var g=R(d,"viewport");var n=nb.getActivePcos().join(",")||void 0;var ca=lb.getDwellTime();b=b.replace(f,"");f=mb.getIframeClickString();var ka=kb.getInitialViewHeight();var C=mb.getPageClicks();var y=d.win.navigator.sendBeacon?0:1;g=g.getHeight();var r=kb.getScrollHeight();n=L({al:n,amp:1,dc:1,dp:a,dt:ca,fp:b,ict:f,ivh:ka,pct:C,pfm:y,ph:g,pub:e,sh:r,sid:Ka});n=Da("https://m.addthis.com/live/red_lojson/100eng.json",
Ea(n));d.win.navigator.sendBeacon?d.win.navigator.sendBeacon(n,"{}"):Pa(n,d)});var f=new za,g=f.handleAddThisMessage.bind(f);G(d.win,"message",g);f.on("addthis.share",function(b){var f=a.X,g=a.N,h=c.href,n=c.hostname,ca=c.search,ka=c.pathname,C=c.hash,y=c.protocol,r=c.port;g={du:h.split("#").shift(),hostname:n,href:h,referrer:f,search:ca,pathname:ka,title:g,hash:C,protocol:y,port:r};h=f?Q(f):{};n=ra(d.win.document.head.querySelectorAll("meta"));b={amp:1,cb:bb(g,n),dc:1,dest:b.service,gen:300,mk:eb(n),
pub:e,rb:cb(f,h,Q(g.du)),sid:Ka,url:b.url};Sa({ampDoc:d,endpoint:"https://m.addthis.com/live/red_pjson",data:b})});f.on("addthis.amp.configuration",W.receiveConfiguration.bind(W))}(function(a){a.registerElement("amp-addthis",X,'amp-addthis[data-widget-type=messages]{position:fixed!important;width:100%!important;top:0}amp-addthis .i-amphtml-addthis-close{right:10px!important;top:10px!important;width:32px!important;height:32px!important;opacity:0.5!important;float:right!important;cursor:pointer!important;position:relative!important;z-index:1!important;background-color:transparent!important;border:none!important}amp-addthis .i-amphtml-addthis-close:hover{opacity:1!important}.i-amphtml-addthis-close:after,amp-addthis .i-amphtml-addthis-close:before{position:absolute;content:" ";height:20px;width:2px;background-color:#fff}amp-addthis .i-amphtml-addthis-close:before{transform:rotate(45deg)}amp-addthis .i-amphtml-addthis-close:after{transform:rotate(-45deg)}@media only screen and (max-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:100%!important;height:50px;bottom:0}}@media only screen and (min-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:70px!important;height:320px!important;top:200px}}\n/*# sourceURL=/extensions/amp-addthis/0.1/amp-addthis.css*/')})(self.AMP);
})});

//# sourceMappingURL=amp-addthis-0.1.js.map
