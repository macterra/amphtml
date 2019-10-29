(self.AMP=self.AMP||[]).push({n:"amp-crypto-polyfill",v:"1910212134200",f:(function(AMP,_){
self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};(function(f){return f||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function J(f,n){var F,l=f=f.__AMP_TOP||(f.__AMP_TOP=f),B=f,k=K(l),g=k["crypto-polyfill"];g||(g=k["crypto-polyfill"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});g.ctor||g.obj||(g.ctor=n,g.context=B,g.resolve&&U(l));F&&U(f)}function U(f){var n=K(f);f=n["crypto-polyfill"];f.obj||(f.obj=new f.ctor(f.context),f.ctor=null,f.context=null,f.resolve&&f.resolve(f.obj))}function K(f){var n=f.__AMP_SERVICES;n||(n=f.__AMP_SERVICES={});return n};var Y=function(){function f(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a,b){function d(){}d.prototype=b.prototype;a.v=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.u=function(a,e,d){for(var c=Array(arguments.length-2),h=2;h<arguments.length;h++)c[h-2]=arguments[h];return b.prototype[e].apply(a,c)}}function F(){this.f=-1}function l(a,b){this.b=a|0;this.a=b|0}function B(a){return 0<a?0x7fffffffffffffff<=a?V:new l(a,a/4294967296):0>a?-9223372036854775808>=a?x:m(new l(-a,-a/
4294967296)):y}function k(a,b){return new l(a,b)}function g(a){return 4294967296*a.a+(a.b>>>0)}function z(a){return 0==a.b&&0==a.a}function v(a,b){return a.b==b.b&&a.a==b.a}function M(a,b){return a.a==b.a?a.b==b.b?0:a.b>>>0>b.b>>>0?1:-1:a.a>b.a?1:-1}function m(a){var b=~a.b+1|0;return k(b,~a.a+!b|0)}function C(a,b){if(z(a))return a;if(z(b))return b;var d=a.a>>>16,c=a.a&65535,e=a.b>>>16;a=a.b&65535;var h=b.a>>>16,L=b.a&65535,f=b.b>>>16;b=b.b&65535;var l=a*b,g=(l>>>16)+e*b,q=g>>>16;g=(g&65535)+a*f;
q=q+(g>>>16)+c*b;var r=q>>>16;q=(q&65535)+e*f;r+=q>>>16;q=(q&65535)+a*L;r=r+(q>>>16)+(d*b+c*f+e*L+a*h)&65535;return k((g&65535)<<16|l&65535,r<<16|q&65535)}function w(a,b){if(z(b))throw Error("division by zero");if(0>a.a){if(v(a,x)){if(v(b,D)||v(b,N))return x;if(v(b,x))return D;var d=1;if(0==d)d=a;else{var c=a.a;d=32>d?k(a.b>>>d|c<<32-d,c>>d):k(c>>d-32,0<=c?0:-1)}d=w(d,b);c=1;if(0!=c){var e=d.b;d=32>c?k(e<<c,d.a<<c|e>>>32-c):k(0,e<<c-32)}if(v(d,y))return 0>b.a?D:N;a=a.add(m(C(b,d)));return d.add(w(a,
b))}return 0>b.a?w(m(a),m(b)):m(w(m(a),b))}if(z(a))return y;if(0>b.a)return v(b,x)?y:m(w(a,m(b)));for(c=y;0<=M(a,b);){d=Math.max(1,Math.floor(g(a)/g(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);for(var h=B(d),f=C(h,b);0>f.a||0<M(f,a);)d-=e,h=B(d),f=C(h,b);z(h)&&(h=D);c=c.add(h);a=a.add(m(f))}return c}function E(a,b){this.f=128;this.h=O.Uint8Array?new Uint8Array(this.f):Array(this.f);this.j=this.g=0;this.c=[];this.l=a;this.s=[];this.o=P(b);this.i=!1;this.j=this.g=0;a=this.o;b=
a.length;if(0<b){for(var d=Array(b),c=0;c<b;c++)d[c]=a[c];a=d}else a=[];this.c=a;this.i=!1}function G(a,b,d){d=void 0!==d?d:b.length;if(a.i)throw Error("this hasher needs to be reset");var c=a.g;if("string"==typeof b)for(var e=0;e<d;e++){var h=b.charCodeAt(e);if(255<h)throw Error("Characters must be in range [0,255]");a.h[c++]=h;c==a.f&&(H(a),c=0)}else if(e=f(b),"array"==e||"object"==e&&"number"==typeof b.length)for(e=0;e<d;e++){h=b[e];if("number"!=typeof h||0>h||255<h||h!=(h|0))throw Error("message must be a byte array");
a.h[c++]=h;c==a.f&&(H(a),c=0)}else throw Error("message must be string or array");a.g=c;a.j+=d}function H(a){for(var b=a.h,d=a.s,c=0;16>c;c++){var e=8*c;d[c]=new l(b[e+4]<<24|b[e+5]<<16|b[e+6]<<8|b[e+7],b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3])}for(c=16;80>c;c++){e=d[c-15];b=e.b;e=e.a;var h=d[c-2],f=h.b;h=h.a;d[c]=a.m(d[c-16],d[c-7],new l(b>>>1^e<<31^b>>>8^e<<24^b>>>7^e<<25,e>>>1^b<<31^e>>>8^b<<24^e>>>7),new l(f>>>19^h<<13^h>>>29^f<<3^f>>>6^h<<26,h>>>19^f<<13^f>>>29^h<<3^h>>>6))}b=a.c[0];e=a.c[1];f=a.c[2];
h=a.c[3];var k=a.c[4],g=a.c[5],n=a.c[6],q=a.c[7];for(c=0;80>c;c++){var r=b.b,p=b.a;r=(new l(r>>>28^p<<4^p>>>2^r<<30^p>>>7^r<<25,p>>>28^r<<4^r>>>2^p<<30^r>>>7^p<<25)).add(new l(b.b&e.b|e.b&f.b|b.b&f.b,b.a&e.a|e.a&f.a|b.a&f.a));p=k.b;var m=k.a,t=k.b,u=k.a;p=a.m(q,new l(p>>>14^m<<18^p>>>18^m<<14^m>>>9^p<<23,m>>>14^p<<18^m>>>18^p<<14^p>>>9^m<<23),new l(t&g.b|~t&n.b,u&g.a|~u&n.a),W[c],d[c]);q=n;n=g;g=k;k=h.add(p);h=f;f=e;e=b;b=p.add(r)}a.c[0]=a.c[0].add(b);a.c[1]=a.c[1].add(e);a.c[2]=a.c[2].add(f);a.c[3]=
a.c[3].add(h);a.c[4]=a.c[4].add(k);a.c[5]=a.c[5].add(g);a.c[6]=a.c[6].add(n);a.c[7]=a.c[7].add(q)}function P(a){for(var b=[],d=0;d<a.length;d+=2)b.push(new l(a[d+1],a[d]));return b}function Q(){E.call(this,6,X)}function R(a){var b=new Q;G(b,a);a=Uint8Array;if(b.i)throw Error("this hasher needs to be reset");var d=8*b.j;112>b.g?G(b,S,112-b.g):G(b,S,b.f-b.g+112);for(var c=127;112<=c;c--)b.h[c]=d&255,d/=256;H(b);d=0;var e=Array(8*b.l);for(c=0;c<b.l;c++){var f=b.c[c],k=f.a;f=f.b;for(var g=24;0<=g;g-=
8)e[d++]=k>>g&255;for(g=24;0<=g;g-=8)e[d++]=f>>g&255}b.i=!0;return new a(e)}var O=this,y=k(0,0),D=k(1,0),N=k(-1,-1),V=k(4294967295,2147483647),x=k(0,2147483648);l.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);var b=this.a>>21;if(0==b||-1==b&&(0!=this.b||-2097152!=this.a))return b=g(this),10==a?""+b:b.toString(a);b=14-(a>>2);var d=Math.pow(a,b),c=k(d,d/4294967296);d=w(this,c);c=Math.abs(g(this.add(m(C(d,c)))));var e=10==a?""+c:c.toString(a);e.length<b&&(e=
"0000000000000".substr(e.length-b)+e);c=g(d);return(10==a?c:c.toString(a))+e};l.prototype.add=function(a){var b=this.a>>>16,d=this.a&65535,c=this.b>>>16,e=a.a>>>16,f=a.a&65535,g=a.b>>>16;a=(this.b&65535)+(a.b&65535);g=(a>>>16)+(c+g);c=(g>>>16)+(d+f);return k((g&65535)<<16|a&65535,((c>>>16)+(b+e)&65535)<<16|c&65535)};l.prototype.and=function(a){return k(this.b&a.b,this.a&a.a)};l.prototype.or=function(a){return k(this.b|a.b,this.a|a.a)};l.prototype.xor=function(a){return k(this.b^a.b,this.a^a.a)};n(E,
F);for(var T=[],I=0;127>I;I++)T[I]=0;var S=function(a){return Array.prototype.concat.apply([],arguments)}([128],T);E.prototype.m=function(a,b,d){for(var c=(a.b^2147483648)+(b.b^2147483648),e=a.a+b.a,f=arguments.length-1;2<=f;--f)c+=arguments[f].b^2147483648,e+=arguments[f].a;arguments.length&1&&(c+=2147483648);e+=arguments.length>>1;e+=Math.floor(c/4294967296);return new l(c,e)};var W=P([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,
3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,
3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,
3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,
1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]);n(Q,E);var X=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428],A=["ampSha384Digest"],t=window||O;A[0]in t||"undefined"==typeof t.execScript||t.execScript("var "+A[0]);for(var u;A.length&&(u=A.shift());)A.length||void 0===R?t[u]&&t[u]!==Object.prototype[u]?t=t[u]:t=t[u]={}:t[u]=R;return ampSha384Digest}.call(window);(function(f){J(f,function(){return Y})})(window);
})});

//# sourceMappingURL=amp-crypto-polyfill-0.1.js.map
