(self.AMP=self.AMP||[]).push({n:"amp-date-display",v:"1910212134200",f:(function(AMP,_){
var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var h={a:!0},k={};try{k.__proto__=h;f=k.a;break a}catch(a){}f=!1}e=f?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var l=e;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;function n(a,b,c){if(!m.user)throw Error("failed to call initLogConstructor");m.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function p(a){a=AMP.BaseElement.call(this,a)||this;a.B=a.C.bind(a);a.h="";a.o=0;a.m=0;a.w="";a.A=0;a.l="";var b=a.win;b=b.__AMP_TOP||(b.__AMP_TOP=b);var c=b.__AMP_SERVICES;c||(c=b.__AMP_SERVICES={});b=c.templates;b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));a.D=b.obj;a.j=null;return a}var q=AMP.BaseElement;p.prototype=d(q.prototype);p.prototype.constructor=p;
if(l)l(p,q);else for(var r in q)if("prototype"!=r)if(Object.defineProperties){var t=Object.getOwnPropertyDescriptor(q,r);t&&Object.defineProperty(p,r,t)}else p[r]=q[r];p.F=q.prototype;
p.prototype.buildCallback=function(){this.j=this.element.ownerDocument.createElement("div");this.element.appendChild(this.j);this.h=this.element.getAttribute("datetime")||"";this.o=Number(this.element.getAttribute("timestamp-seconds"));this.m=Number(this.element.getAttribute("timestamp-ms"));this.w=this.element.getAttribute("display-in")||"";this.A=Number(this.element.getAttribute("offset-seconds"))||0;this.l=this.element.getAttribute("locale")||"en";var a,b=a=this.win.Date;if("now"===this.h.toLowerCase())var c=
b.now();else this.h?(c=b.parse(this.h),n(!isNaN(c),"Invalid date: %s",this.h)):this.m?c=this.m:this.o&&(c=1E3*this.o);n(void 0!==c,"One of datetime, timestamp-ms, or timestamp-seconds is required");a=new a(c+1E3*this.A);"utc"===this.w.toLowerCase()?(b=this.l,a={year:a.getUTCFullYear(),month:a.getUTCMonth()+1,monthName:a.toLocaleDateString(b,{month:"long",timeZone:"UTC"}),monthNameShort:a.toLocaleDateString(b,{month:"short",timeZone:"UTC"}),day:a.getUTCDate(),dayName:a.toLocaleDateString(b,{weekday:"long",
timeZone:"UTC"}),dayNameShort:a.toLocaleDateString(b,{weekday:"short",timeZone:"UTC"}),hour:a.getUTCHours(),minute:a.getUTCMinutes(),second:a.getUTCSeconds(),iso:a.toISOString()}):(b=this.l,a={year:a.getFullYear(),month:a.getMonth()+1,monthName:a.toLocaleDateString(b,{month:"long"}),monthNameShort:a.toLocaleDateString(b,{month:"short"}),day:a.getDate(),dayName:a.toLocaleDateString(b,{weekday:"long"}),dayNameShort:a.toLocaleDateString(b,{weekday:"short"}),hour:a.getHours(),minute:a.getMinutes(),second:a.getSeconds(),
iso:a.toISOString()});b=a.hour%12||12;a=Object.assign({},a,{yearTwoDigit:u(a.year%100),monthTwoDigit:u(a.month),dayTwoDigit:u(a.day),hourTwoDigit:u(a.hour),hour12:b,hour12TwoDigit:u(b),minuteTwoDigit:u(a.minute),secondTwoDigit:u(a.second),dayPeriod:12>a.hour?"am":"pm"});this.D.findAndRenderTemplate(this.element,a).then(this.B)};p.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
function u(a){return 9<a?a.toString():"0"+a}p.prototype.C=function(a){var b=this;this.mutateElement(function(){for(var c=b.j;c.firstChild;)c.removeChild(c.firstChild);b.j.appendChild(a);var g=b.win;c={detail:null};Object.assign(c,{bubbles:!0});"function"==typeof g.CustomEvent?c=new g.CustomEvent("amp:dom-update",c):(g=g.document.createEvent("CustomEvent"),g.initCustomEvent("amp:dom-update",!!c.bubbles,!!c.cancelable,null),c=g);b.element.dispatchEvent(c)})};
(function(a){a.registerElement("amp-date-display",p)})(self.AMP);
})});

//# sourceMappingURL=amp-date-display-0.1.js.map