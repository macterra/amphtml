(self.AMP=self.AMP||[]).push({n:"amp-soundcloud",v:"1910212134200",f:(function(AMP,_){
var b="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var g;a:{var h={a:!0},k={};try{k.__proto__=h;g=k.a;break a}catch(a){}g=!1}e=g?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var l=e;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;function n(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;return a}var p=AMP.BaseElement;n.prototype=b(p.prototype);n.prototype.constructor=n;if(l)l(n,p);else for(var r in p)if("prototype"!=r)if(Object.defineProperties){var t=Object.getOwnPropertyDescriptor(p,r);t&&Object.defineProperty(n,r,t)}else n[r]=p[r];n.h=p.prototype;n.prototype.preconnectCallback=function(a){this.preconnect.url("https://api.soundcloud.com/",a)};
n.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
n.prototype.layoutCallback=function(){var a=this.element.getAttribute("height"),c=this.element.getAttribute("data-color"),u=this.element.getAttribute("data-visual"),f="https://api.soundcloud.com/"+(this.element.hasAttribute("data-trackid")?"tracks":"playlists")+"/",v=this.element.getAttribute("data-trackid")||this.element.getAttribute("data-playlistid"),w=this.element;if(!m.user)throw Error("failed to call initLogConstructor");var x=m.user.assert(v,"data-trackid or data-playlistid is required for <amp-soundcloud> %s",
w,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0),q=this.element.getAttribute("data-secret-token"),d=this.element.ownerDocument.createElement("iframe");d.setAttribute("frameborder","no");d.setAttribute("scrolling","no");f="https://w.soundcloud.com/player/?url="+encodeURIComponent(f+x);q&&(f+=encodeURIComponent("?secret_token="+q));"true"===u?f+="&visual=true":c&&(f+="&color="+encodeURIComponent(c));d.src=f;this.applyFillContent(d);d.height=a;this.element.appendChild(d);this.c=d;return this.loadPromise(d)};
n.prototype.pauseCallback=function(){this.c&&this.c.contentWindow&&this.c.contentWindow.postMessage(JSON.stringify({method:"pause"}),"https://w.soundcloud.com")};(function(a){a.registerElement("amp-soundcloud",n)})(self.AMP);
})});

//# sourceMappingURL=amp-soundcloud-0.1.js.map