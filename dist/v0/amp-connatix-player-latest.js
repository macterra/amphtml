(self.AMP=self.AMP||[]).push({n:"amp-connatix-player",v:"1910212134200",f:(function(AMP,_){
var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var m={a:!0},n={};try{n.__proto__=m;k=n.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=h;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function t(a){a=AMP.BaseElement.call(this,a)||this;a.l="";a.j="";a.h="https://cds.connatix.com";a.c=null;return a}var u=AMP.BaseElement;t.prototype=c(u.prototype);t.prototype.constructor=t;if(q)q(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.m=u.prototype;
function x(a){a.win.addEventListener("message",function(b){a.c&&b.source===a.c.contentWindow&&"cnx_close"===b.data&&(a.c&&(b=a.c,b.parentElement&&b.parentElement.removeChild(b),a.c=null),a.attemptCollapse())})}
t.prototype.buildCallback=function(){var a=this.element,b=a.getAttribute("data-player-id");if(!r.user)throw Error("failed to call initLogConstructor");this.l=r.user.assert(b,"The data-player-id attribute is required for <amp-connatix-player> %s",a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.j=a.getAttribute("data-media-id")||"";x(this)};t.prototype.preconnectCallback=function(a){this.preconnect.url(this.h,a)};
t.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
t.prototype.layoutCallback=function(){var a=this.element,b={playerId:this.l||void 0,mediaId:this.j||void 0},y=this.h+"/embed/index.html";var d=b;var e=[];for(f in d){var l=d[f];if(null!=l)if(Array.isArray(l))for(var p=0;p<l.length;p++){var z=l[p];e.push(encodeURIComponent(f)+"="+encodeURIComponent(z))}else e.push(encodeURIComponent(f)+"="+encodeURIComponent(l))}d=e.join("&");e=y;if(d){e=e.split("#",2);var f=e[0].split("?",2);d=f[0]+(f[1]?"?"+f[1]+"&"+d:"?"+d);d+=e[1]?"#"+e[1]:""}else d=e;var g=a.ownerDocument.createElement("iframe");
g.setAttribute("frameborder","0");g.setAttribute("allowfullscreen","true");g.src=d;this.applyFillContent(g,!0);a.appendChild(g);this.c=g;return this.loadPromise(g)};t.prototype.pauseCallback=function(){this.c&&this.c.contentWindow&&this.c.contentWindow.postMessage("pause",this.h)};t.prototype.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}return!0};(function(a){a.registerElement("amp-connatix-player",t)})(self.AMP);
})});

//# sourceMappingURL=amp-connatix-player-0.1.js.map
