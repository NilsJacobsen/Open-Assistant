var Ye=Object.create;var me=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var ve=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var it=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of tt(t))!rt.call(e,i)&&i!==n&&me(e,i,{get:()=>t[i],enumerable:!(r=et(t,i))||r.enumerable});return e};var ye=(e,t,n)=>(n=e!=null?Ye(nt(e)):{},it(t||!e||!e.__esModule?me(n,"default",{value:e,enumerable:!0}):n,e));var Te=ve((dn,We)=>{"use strict";function u(e){if(!(this instanceof u))return new u(e);this._=e}var f=u.prototype;function xe(e,t){var n=0;for(n;n<e;n++)t(n)}function ot(e,t){xe(t.length,function(n){e(t[n],n,t)})}function L(e,t,n){return ot(function(r,i,o){t=e(t,r,i,o)},n),t}function B(e,t){return L(function(n,r,i,o){return n.concat([e(r,i,o)])},[],t)}function at(e){var t=L(function(n,r,i,o){return n.concat(i===o.length-1?Buffer.from([r,0]).readUInt16BE(0):o.readUInt16BE(i))},[],e);return Buffer.from(B(function(n){return(n<<1&65535)>>8},t))}function ut(e,t){var n={v:0,buf:t};return xe(e,function(){n={v:n.v<<1|st(n.buf),buf:at(n.buf)}}),n}function st(e){return e[0]>>7}function ft(e){return L(function(t,n){return t+n},0,e)}function ct(e,t){return L(function(n,r){return n||(e(r)?r:n)},null,t)}function Pe(){return typeof Buffer<"u"}function lt(){if(u._supportsSet!==void 0)return u._supportsSet;var e=typeof Set<"u";return u._supportsSet=e,e}function Z(){if(!Pe())throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.")}function Se(e){Z();var t=ft(e);if(t%8!==0)throw new Error("The bits ["+e.join(", ")+"] add up to "+t+" which is not an even number of bytes; the total should be divisible by 8");var n=t/8,r=ct(function(i){return i>48},e);if(r)throw new Error(r+" bit range requested exceeds 48 bit (6 byte) Number max.");return new u(function(i,o){var a=n+o;return a>i.length?b(o,n.toString()+" bytes"):h(a,L(function(s,c){var l=ut(c,s.buf);return{coll:s.coll.concat(l.v),buf:l.buf}},{coll:[],buf:i.slice(o,a)},e).coll)})}function gt(e){Z();var t={},n=0,r=B(function(a){if(A(a)){var s=a;if(s.length!==2)throw new Error("["+s.join(", ")+"] should be length 2, got length "+s.length);if(N(s[0]),k(s[1]),Object.prototype.hasOwnProperty.call(t,s[0]))throw new Error("duplicate key in bitSeqObj: "+s[0]);return t[s[0]]=!0,n++,s}else return k(a),[null,a]},e);if(n<1)throw new Error("bitSeqObj expects at least one named pair, got ["+e.join(", ")+"]");var i=B(function(a){return a[0]},r),o=B(function(a){return a[1]},r);return Se(o).map(function(a){var s=B(function(c,l){return[c,a[l]]},i);return L(function(c,l){return l[0]!==null&&(c[l[0]]=l[1]),c},{},s)})}function E(e,t){return new u(function(n,r){return Z(),r+t>n.length?b(r,t+" bytes for "+e):h(r+t,n.slice(r,r+t))})}function pt(e){return E("buffer",e).map(function(t){return Buffer.from(t)})}function dt(e,t){return E("string",t).map(function(n){return n.toString(e)})}function ht(e){return typeof e=="number"&&Math.floor(e)===e}function X(e,t){if(!ht(t)||t<0||t>6)throw new Error(e+" requires integer length in range [0, 6].")}function K(e){return X("uintBE",e),E("uintBE("+e+")",e).map(function(t){return t.readUIntBE(0,e)})}function z(e){return X("uintLE",e),E("uintLE("+e+")",e).map(function(t){return t.readUIntLE(0,e)})}function U(e){return X("intBE",e),E("intBE("+e+")",e).map(function(t){return t.readIntBE(0,e)})}function J(e){return X("intLE",e),E("intLE("+e+")",e).map(function(t){return t.readIntLE(0,e)})}function mt(){return E("floatBE",4).map(function(e){return e.readFloatBE(0)})}function vt(){return E("floatLE",4).map(function(e){return e.readFloatLE(0)})}function yt(){return E("doubleBE",8).map(function(e){return e.readDoubleBE(0)})}function bt(){return E("doubleLE",8).map(function(e){return e.readDoubleLE(0)})}function wt(e){return Array.prototype.slice.call(e)}function C(e){return e instanceof u}function A(e){return{}.toString.call(e)==="[object Array]"}function M(e){return Pe()&&Buffer.isBuffer(e)}function h(e,t){return{status:!0,index:e,value:t,furthest:-1,expected:[]}}function b(e,t){return A(t)||(t=[t]),{status:!1,index:-1,value:null,furthest:e,expected:t}}function w(e,t){if(!t||e.furthest>t.furthest)return e;var n=e.furthest===t.furthest?Et(e.expected,t.expected):t.expected;return{status:e.status,index:e.index,value:e.value,furthest:t.furthest,expected:n}}var Q={};function Be(e,t){if(M(e))return{offset:t,line:-1,column:-1};e in Q||(Q[e]={});for(var n=Q[e],r=0,i=0,o=0,a=t;a>=0;){if(a in n){r=n[a].line,o===0&&(o=n[a].lineStart);break}(e.charAt(a)===`
`||e.charAt(a)==="\r"&&e.charAt(a+1)!==`
`)&&(i++,o===0&&(o=a+1)),a--}var s=r+i,c=t-o;return n[t]={line:s,lineStart:o},{offset:t,line:s+1,column:c+1}}function Et(e,t){if(lt()&&Array.from){for(var n=new Set(e),r=0;r<t.length;r++)n.add(t[r]);var i=Array.from(n);return i.sort(),i}for(var o={},a=0;a<e.length;a++)o[e[a]]=!0;for(var s=0;s<t.length;s++)o[t[s]]=!0;var c=[];for(var l in o)({}).hasOwnProperty.call(o,l)&&c.push(l);return c.sort(),c}function _(e){if(!C(e))throw new Error("not a parser: "+e)}function Y(e,t){return typeof e=="string"?e.charAt(t):e[t]}function xt(e){if(!A(e))throw new Error("not an array: "+e)}function k(e){if(typeof e!="number")throw new Error("not a number: "+e)}function Pt(e){if(!(e instanceof RegExp))throw new Error("not a regexp: "+e);for(var t=Oe(e),n=0;n<t.length;n++){var r=t.charAt(n);if(r!=="i"&&r!=="m"&&r!=="u"&&r!=="s")throw new Error('unsupported regexp flag "'+r+'": '+e)}}function O(e){if(typeof e!="function")throw new Error("not a function: "+e)}function N(e){if(typeof e!="string")throw new Error("not a string: "+e)}var St=2,Bt=3,j=8,jt=j*5,Ot=j*4,we="  ";function V(e,t){return new Array(t+1).join(e)}function Lt(e){return e.length===1?`Expected:

`+e[0]:`Expected one of the following: 

`+e.join(", ")}function G(e,t,n){var r=t-e.length;return r<=0?e:V(n,r)+e}function $t(e,t){var n=e.length,r=[],i=0;if(n<=t)return[e.slice()];for(var o=0;o<n;o++)r[i]||r.push([]),r[i].push(e[o]),(o+1)%t===0&&i++;return r}function Ee(e,t,n,r){return{from:e-t>0?e-t:0,to:e+n>r?r:e+n}}function It(e){return e.from===0&&e.to===1?{from:e.from,to:e.to}:{from:e.from/j,to:Math.floor(e.to/j)}}function Rt(e,t){var n=t.index,r=n.offset,i=1,o,a,s,c,l;if(r===e.length)return"Got the end of the input";if(M(e)){var g=r-r%j,p=r-g,d=Ee(g,jt,Ot+j,e.length),m=e.slice(d.from,d.to),y=$t(m.toJSON().data,j),R=B(function(S){return B(function(ue){return G(ue.toString(16),2,"0")},S)},y);c=It(d),a=g/j,o=p*3,p>=4&&(o+=1),i=2,s=B(function(S){return S.length<=4?S.join(" "):S.slice(0,4).join(" ")+"  "+S.slice(4).join(" ")},R),l=((c.to>0?c.to-1:c.to)*8).toString(16).length,l<2&&(l=2)}else{var P=e.split(/\r\n|[\n\r\u2028\u2029]/);o=n.column-1,a=n.line-1,c=Ee(a,St,Bt,P.length),s=P.slice(c.from,c.to),l=c.to.toString().length}var He=a-c.from;M(e)&&(l=((c.to>0?c.to-1:c.to)*8).toString(16).length,l<2&&(l=2));var Ze=L(function(S,ue,se){var he=se===He,Xe=he?"> ":we,fe;return M(e)?fe=G(((c.from+se)*8).toString(16),l,"0"):fe=G((c.from+se+1).toString(),l," "),[].concat(S,[Xe+fe+" | "+ue],he?[we+V(" ",l)+" | "+G("",o," ")+V("^",i)]:[])},[],s);return Ze.join(`
`)}function je(e,t){return[`
`,"-- PARSING FAILED "+V("-",50),`

`,Rt(e,t),`

`,Lt(t.expected),`
`].join("")}function Oe(e){return e.flags!==void 0?e.flags:[e.global?"g":"",e.ignoreCase?"i":"",e.multiline?"m":"",e.unicode?"u":"",e.sticky?"y":""].join("")}function At(e){return RegExp("^(?:"+e.source+")",Oe(e))}function ee(){for(var e=[].slice.call(arguments),t=e.length,n=0;n<t;n+=1)_(e[n]);return u(function(r,i){for(var o,a=new Array(t),s=0;s<t;s+=1){if(o=w(e[s]._(r,i),o),!o.status)return o;a[s]=o.value,i=o.index}return w(h(i,a),o)})}function _t(){for(var e={},t=0,n=wt(arguments),r=n.length,i=0;i<r;i+=1){var o=n[i];if(!C(o)){if(A(o)){var a=o.length===2&&typeof o[0]=="string"&&C(o[1]);if(a){var s=o[0];if(Object.prototype.hasOwnProperty.call(e,s))throw new Error("seqObj: duplicate key "+s);e[s]=!0,t++;continue}}throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.")}}if(t===0)throw new Error("seqObj expects at least one named parser, found zero");return u(function(c,l){for(var g,p={},d=0;d<r;d+=1){var m,y;if(A(n[d])?(m=n[d][0],y=n[d][1]):(m=null,y=n[d]),g=w(y._(c,l),g),!g.status)return g;m&&(p[m]=g.value),l=g.index}return w(h(l,p),g)})}function $(){var e=[].slice.call(arguments);if(e.length===0)throw new Error("seqMap needs at least one argument");var t=e.pop();return O(t),ee.apply(null,e).map(function(n){return t.apply(null,n)})}function kt(e){var t={};for(var n in e)({}).hasOwnProperty.call(e,n)&&function(r){var i=function(){return e[r](t)};t[r]=Ie(i)}(n);return t}function te(){var e=[].slice.call(arguments),t=e.length;if(t===0)return ne("zero alternates");for(var n=0;n<t;n+=1)_(e[n]);return u(function(r,i){for(var o,a=0;a<e.length;a+=1)if(o=w(e[a]._(r,i),o),o.status)return o;return o})}function Le(e,t){return le(e,t).or(I([]))}function le(e,t){_(e),_(t);var n=t.then(e).many();return $(e,n,function(r,i){return[r].concat(i)})}f.parse=function(e){if(typeof e!="string"&&!M(e))throw new Error(".parse must be called with a string or Buffer as its argument");var t=this.skip(pe)._(e,0),n;return t.status?n={status:!0,value:t.value}:n={status:!1,index:Be(e,t.furthest),expected:t.expected},delete Q[e],n};f.tryParse=function(e){var t=this.parse(e);if(t.status)return t.value;var n=je(e,t),r=new Error(n);throw r.type="ParsimmonError",r.result=t,r};f.assert=function(e,t){return this.chain(function(n){return e(n)?I(n):ne(t)})};f.or=function(e){return te(this,e)};f.trim=function(e){return this.wrap(e,e)};f.wrap=function(e,t){return $(e,this,t,function(n,r){return r})};f.thru=function(e){return e(this)};f.then=function(e){return _(e),ee(this,e).map(function(t){return t[1]})};f.many=function(){var e=this;return u(function(t,n){for(var r=[],i=void 0;;)if(i=w(e._(t,n),i),i.status){if(n===i.index)throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");n=i.index,r.push(i.value)}else return w(h(n,r),i)})};f.tieWith=function(e){return N(e),this.map(function(t){if(xt(t),t.length){N(t[0]);for(var n=t[0],r=1;r<t.length;r++)N(t[r]),n+=e+t[r];return n}else return""})};f.tie=function(){return this.tieWith("")};f.times=function(e,t){var n=this;return arguments.length<2&&(t=e),k(e),k(t),u(function(r,i){for(var o=[],a=void 0,s=void 0,c=0;c<e;c+=1)if(a=n._(r,i),s=w(a,s),a.status)i=a.index,o.push(a.value);else return s;for(;c<t&&(a=n._(r,i),s=w(a,s),a.status);c+=1)i=a.index,o.push(a.value);return w(h(i,o),s)})};f.result=function(e){return this.map(function(){return e})};f.atMost=function(e){return this.times(0,e)};f.atLeast=function(e){return $(this.times(e),this.many(),function(t,n){return t.concat(n)})};f.map=function(e){O(e);var t=this;return u(function(n,r){var i=t._(n,r);return i.status?w(h(i.index,e(i.value)),i):i})};f.contramap=function(e){O(e);var t=this;return u(function(n,r){var i=t.parse(e(n.slice(r)));return i.status?h(r+n.length,i.value):i})};f.promap=function(e,t){return O(e),O(t),this.contramap(e).map(t)};f.skip=function(e){return ee(this,e).map(function(t){return t[0]})};f.mark=function(){return $(F,this,F,function(e,t,n){return{start:e,value:t,end:n}})};f.node=function(e){return $(F,this,F,function(t,n,r){return{name:e,value:n,start:t,end:r}})};f.sepBy=function(e){return Le(this,e)};f.sepBy1=function(e){return le(this,e)};f.lookahead=function(e){return this.skip(H(e))};f.notFollowedBy=function(e){return this.skip($e(e))};f.desc=function(e){A(e)||(e=[e]);var t=this;return u(function(n,r){var i=t._(n,r);return i.status||(i.expected=e),i})};f.fallback=function(e){return this.or(I(e))};f.ap=function(e){return $(e,this,function(t,n){return t(n)})};f.chain=function(e){var t=this;return u(function(n,r){var i=t._(n,r);if(!i.status)return i;var o=e(i.value);return w(o._(n,i.index),i)})};function q(e){N(e);var t="'"+e+"'";return u(function(n,r){var i=r+e.length,o=n.slice(r,i);return o===e?h(i,o):b(r,t)})}function Wt(e){if(Z(),k(e),e>255)throw new Error("Value specified to byte constructor ("+e+"=0x"+e.toString(16)+") is larger in value than a single byte.");var t=(e>15?"0x":"0x0")+e.toString(16);return u(function(n,r){var i=Y(n,r);return i===e?h(r+1,i):b(r,t)})}function x(e,t){Pt(e),arguments.length>=2?k(t):t=0;var n=At(e),r=""+e;return u(function(i,o){var a=n.exec(i.slice(o));if(a){if(0<=t&&t<=a.length){var s=a[0],c=a[t];return h(o+s.length,c)}var l="valid match group (0 to "+a.length+") in "+r;return b(o,l)}return b(o,r)})}function I(e){return u(function(t,n){return h(n,e)})}function ne(e){return u(function(t,n){return b(n,e)})}function H(e){if(C(e))return u(function(t,n){var r=e._(t,n);return r.index=n,r.value="",r});if(typeof e=="string")return H(q(e));if(e instanceof RegExp)return H(x(e));throw new Error("not a string, regexp, or parser: "+e)}function $e(e){return _(e),u(function(t,n){var r=e._(t,n),i=t.slice(n,r.index);return r.status?b(n,'not "'+i+'"'):h(n,null)})}function re(e){return O(e),u(function(t,n){var r=Y(t,n);return n<t.length&&e(r)?h(n+1,r):b(n,"a character/byte matching "+e)})}function Tt(e){for(var t=e.split(""),n=0;n<t.length;n++)t[n]="'"+t[n]+"'";return re(function(r){return e.indexOf(r)>=0}).desc(t)}function Mt(e){return re(function(t){return e.indexOf(t)<0}).desc("none of '"+e+"'")}function Nt(e){return u(e(h,b))}function Ct(e,t){return re(function(n){return e<=n&&n<=t}).desc(e+"-"+t)}function Ft(e){return O(e),u(function(t,n){for(var r=n;r<t.length&&e(Y(t,r));)r++;return h(r,t.slice(n,r))})}function Ie(e,t){arguments.length<2&&(t=e,e=void 0);var n=u(function(r,i){return n._=t()._,n._(r,i)});return e?n.desc(e):n}function ge(){return ne("fantasy-land/empty")}f.concat=f.or;f.empty=ge;f.of=I;f["fantasy-land/ap"]=f.ap;f["fantasy-land/chain"]=f.chain;f["fantasy-land/concat"]=f.concat;f["fantasy-land/empty"]=f.empty;f["fantasy-land/of"]=f.of;f["fantasy-land/map"]=f.map;var F=u(function(e,t){return h(t,Be(e,t))}),qt=u(function(e,t){return t>=e.length?b(t,"any character/byte"):h(t+1,Y(e,t))}),Dt=u(function(e,t){return h(e.length,e.slice(t))}),pe=u(function(e,t){return t<e.length?b(t,"EOF"):h(t,null)}),Kt=x(/[0-9]/).desc("a digit"),zt=x(/[0-9]*/).desc("optional digits"),Ut=x(/[a-z]/i).desc("a letter"),Jt=x(/[a-z]*/i).desc("optional letters"),Gt=x(/\s*/).desc("optional whitespace"),Qt=x(/\s+/).desc("whitespace"),Re=q("\r"),Ae=q(`
`),_e=q(`\r
`),ke=te(_e,Ae,Re).desc("newline"),Vt=te(ke,pe);u.all=Dt;u.alt=te;u.any=qt;u.cr=Re;u.createLanguage=kt;u.crlf=_e;u.custom=Nt;u.digit=Kt;u.digits=zt;u.empty=ge;u.end=Vt;u.eof=pe;u.fail=ne;u.formatError=je;u.index=F;u.isParser=C;u.lazy=Ie;u.letter=Ut;u.letters=Jt;u.lf=Ae;u.lookahead=H;u.makeFailure=b;u.makeSuccess=h;u.newline=ke;u.noneOf=Mt;u.notFollowedBy=$e;u.of=I;u.oneOf=Tt;u.optWhitespace=Gt;u.Parser=u;u.range=Ct;u.regex=x;u.regexp=x;u.sepBy=Le;u.sepBy1=le;u.seq=ee;u.seqMap=$;u.seqObj=_t;u.string=q;u.succeed=I;u.takeWhile=Ft;u.test=re;u.whitespace=Qt;u["fantasy-land/empty"]=ge;u["fantasy-land/of"]=I;u.Binary={bitSeq:Se,bitSeqObj:gt,byte:Wt,buffer:pt,encodedString:dt,uintBE:K,uint8BE:K(1),uint16BE:K(2),uint32BE:K(4),uintLE:z,uint8LE:z(1),uint16LE:z(2),uint32LE:z(4),intBE:U,int8BE:U(1),int16BE:U(2),int32BE:U(4),intLE:J,int8LE:J(1),int16LE:J(2),int32LE:J(4),floatBE:mt(),floatLE:vt(),doubleBE:yt(),doubleLE:bt()};We.exports=u});var Ke=ve((yn,De)=>{De.exports=D;D.flatten=D;D.unflatten=qe;function Ce(e){return e&&e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Fe(e){return e}function D(e,t){t=t||{};let n=t.delimiter||".",r=t.maxDepth,i=t.transformKey||Fe,o={};function a(s,c,l){l=l||1,Object.keys(s).forEach(function(g){let p=s[g],d=t.safe&&Array.isArray(p),m=Object.prototype.toString.call(p),y=Ce(p),R=m==="[object Object]"||m==="[object Array]",P=c?c+n+i(g):i(g);if(!d&&!y&&R&&Object.keys(p).length&&(!t.maxDepth||l<r))return a(p,P,l+1);o[P]=p})}return a(e),o}function qe(e,t){t=t||{};let n=t.delimiter||".",r=t.overwrite||!1,i=t.transformKey||Fe,o={};if(Ce(e)||Object.prototype.toString.call(e)!=="[object Object]")return e;function s(g){let p=Number(g);return isNaN(p)||g.indexOf(".")!==-1||t.object?g:p}function c(g,p,d){return Object.keys(d).reduce(function(m,y){return m[g+n+y]=d[y],m},p)}function l(g){let p=Object.prototype.toString.call(g),d=p==="[object Array]",m=p==="[object Object]";if(g){if(d)return!g.length;if(m)return!Object.keys(g).length}else return!0}return e=Object.keys(e).reduce(function(g,p){let d=Object.prototype.toString.call(e[p]);return!(d==="[object Object]"||d==="[object Array]")||l(e[p])?(g[p]=e[p],g):c(p,g,D(e[p],t))},{}),Object.keys(e).forEach(function(g){let p=g.split(n).map(i),d=s(p.shift()),m=s(p[0]),y=o;for(;m!==void 0;){if(d==="__proto__")return;let R=Object.prototype.toString.call(y[d]),P=R==="[object Object]"||R==="[object Array]";if(!r&&!P&&typeof y[d]<"u")return;(r&&!P||!r&&y[d]==null)&&(y[d]=typeof m=="number"&&!t.object?[]:{}),y=y[d],p.length>0&&(d=s(p.shift()),m=s(p[0]))}y[d]=qe(e[g],t)}),o}});function ce(e){return t=>n=>e({settings:t,env:n})}function be(e){if(typeof e.pathPattern=="string"){if(e.pathPattern.includes("{language}")===!1)throw new Error("The pathPattern setting must be defined and include the {language} placeholder. An example would be './resources/{language}.json'.");if(e.pathPattern.endsWith(".json")===!1)throw new Error("The pathPattern setting must end with '.json'. An example would be './resources/{language}.json'.")}else for(let[t,n]of Object.entries(e.pathPattern)){if(n===void 0||n.includes("{language}")===!1)throw new Error("The pathPattern setting must be defined and include the {language} placeholder. An example would be './resources/{language}.json'.");if(n.endsWith(".json")===!1)throw new Error("The pathPattern setting must end with '.json'. An example would be './resources/{language}.json'.");if(t.includes("."))throw new Error("A prefix of pathPattern includes an '.'. Use a string without dot notations. An example would be 'common'.")}}var v=ye(Te(),1),Ht=v.default.createLanguage({entry:e=>v.default.alt(e.FunctionCall,v.default.any).many().map(t=>t.filter(n=>typeof n=="object")),stringLiteral:e=>v.default.alt(e.doubleQuotedString,e.singleQuotedString),doubleQuotedString:()=>v.default.string('"').then(v.default.regex(/[^"]*/)).skip(v.default.string('"')),singleQuotedString:()=>v.default.string("'").then(v.default.regex(/[^']*/)).skip(v.default.string("'")),FunctionCall:function(e){return v.default.seqMap(v.default.regex(/[^a-zA-Z0-9]/),v.default.string("t"),v.default.string("("),v.default.index,e.stringLiteral,v.default.index,v.default.regex(/[^)]*/),v.default.string(")"),(t,n,r,i,o,a)=>({messageId:o,position:{start:{line:i.line,character:i.column},end:{line:a.line,character:a.column}}}))}});function Me(e){try{return Ht.entry.tryParse(e)}catch{return[]}}var Ne={messageReferenceMatchers:[async e=>Me(e.documentText)],extractMessageOptions:[{callback:e=>`{t("${e}")}`}],documentSelectors:[{language:"javascript"},{language:"typescript"},{language:"svelte"}]};var ae=ye(Ke(),1);var ze=e=>{let t=JSON.parse(e);if(e!=="{}"){for(let n of Object.values(t))if(typeof n=="object")return!0;return!1}},Ue=e=>{let t=[{spacing:1,regex:/^{\n {1}[^ ]+.*$/m},{spacing:2,regex:/^{\n {2}[^ ]+.*$/m},{spacing:3,regex:/^{\n {3}[^ ]+.*$/m},{spacing:4,regex:/^{\n {4}[^ ]+.*$/m},{spacing:6,regex:/^{\n {6}[^ ]+.*$/m},{spacing:8,regex:/^{\n {8}[^ ]+.*$/m},{spacing:"	",regex:/^{\n\t[^ ]+.*$/m}];for(let{spacing:n,regex:r}of t)if(r.test(e))return n};function W(e,t,n){return e.replace(new RegExp(Zt(t),"g"),n)}function Zt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var ie={},T={},de={};function Je(){let e=Object.values(ie);return e.sort((t,n)=>e.filter(r=>r===t).length-e.filter(r=>r===n).length).pop()??2}function oe(){let e=Object.values(T);return e.sort((t,n)=>e.filter(r=>r===t).length-e.filter(r=>r===n).length).pop()??!1}var Xt=ce(({settings:e,env:t})=>({id:"inlang.plugin-i18next",async config(){be(e);let n={variableReferencePattern:["{{","}}"],ignore:[],...e};return{languages:await Yt({$fs:t.$fs,settings:n}),readResources:r=>en({...r,$fs:t.$fs,settings:n}),writeResources:r=>rn({...r,$fs:t.$fs,settings:n}),ideExtension:Ne}}}));async function Yt(e){let t=[];if(typeof e.settings.pathPattern!="string")for(let n of Object.values(e.settings.pathPattern)){let[r]=n.split("{language}"),i=await e.$fs.readdir(r);for(let o of i)await Promise.resolve(e.$fs.readFile(n.replace("{language}",o)).then(()=>!0).catch(()=>!1))&&t.push(o)}else{let[n]=e.settings.pathPattern.split("{language}"),r=await e.$fs.readdir(n);for(let i of r)i.endsWith(".json")&&e.settings.ignore?.some(o=>o===i)===!1&&t.push(i.replace(".json",""))}return[...new Set(t)]}async function en(e){let t=[];for(let n of e.config.languages){let r={type:"Resource",languageTag:{type:"LanguageTag",name:n},body:[]};if(typeof e.settings.pathPattern!="string")for(let[i,o]of Object.entries(e.settings.pathPattern)){let a=await Ge(o,n,e.$fs);a&&(r.body=[...r.body,...Qe(a,e.settings.variableReferencePattern,T[o.replace("{language}",n)]??oe(),i)])}else{let i=await Ge(e.settings.pathPattern,n,e.$fs);r.body=[...r.body,...Qe(i,e.settings.variableReferencePattern,T[e.settings.pathPattern.replace("{language}",n)]??oe())]}t.push(r)}return t}async function Ge(e,t,n){let r=e.replace("{language}",t);try{let i=await n.readFile(r,{encoding:"utf-8"});return ie[r]=Ue(i),T[r]=ze(i),de[r]=i.endsWith(`
`),JSON.parse(i)}catch(i){if(i.code==="ENOENT")return;throw i}}function Qe(e,t,n,r){let i=n?(0,ae.flatten)(e,{transformKey:function(o){return W(o,".","u002E")}}):e;return i!==void 0?Object.entries(i).map(o=>tn(o[0],o[1],t,r)):[]}function tn(e,t,n,r){return{type:"Message",id:{type:"Identifier",name:r?r+"."+W(e,"u002E","."):W(e,"u002E",".")},pattern:nn(t,n)}}function nn(e,t){let n=t[1]?new RegExp(`(\\${t[0]}[^\\${t[1]}]+\\${t[1]})`,"g"):new RegExp(`(${t}\\w+)`,"g");return{type:"Pattern",elements:e.split(n).filter(i=>i!=="").map(i=>n.test(i)?{type:"Placeholder",body:{type:"VariableReference",name:t[1]?i.slice(t[0].length,-t[1].length):i.slice(t[0].length)}}:{type:"Text",value:i})}}async function rn(e){for(let t of e.resources){let n=t.languageTag.name,r=e.settings.pathPattern;if(typeof r=="object"){let i={};for(let[o,a]of Object.entries(e.settings.pathPattern)){let s=a.replace("{language}",n).split("/").slice(0,-1).join("/");try{await e.$fs.readdir(s)}catch{await e.$fs.mkdir(s)}i[o]=[]}for(let o of t.body){let a=o.id.name.split(".")[0];a in i&&i[a].push({...o,id:{...o.id,name:o.id.name.replace(a+".","")}})}for(let[o,a]of Object.entries(i))if(a.length!==0){let s=r[o].replace("{language}",n);await e.$fs.writeFile(s,Ve(a,ie[s]??Je(),de[s],T[s]??oe(),e.settings.variableReferencePattern))}}else if(typeof r=="string"){let i=r.replace("{language}",n);await e.$fs.writeFile(i,Ve(t.body,ie[i]??Je(),de[i],T[i]??oe(),e.settings.variableReferencePattern))}}}function Ve(e,t,n,r,i){let o={};for(let a of e){let s=W(a.id.name,"..","u002E.");s.slice(-1)==="."&&(s=s.replace(/.$/,"u002E")),o[s]=on(a.pattern,i)}return r&&(o=(0,ae.unflatten)(o,{object:!0})),W(JSON.stringify(o,void 0,t),"u002E",".")+(n?`
`:"")}function on(e,t){let n=[];for(let r of e.elements)switch(r.type){case"Text":n.push(r.value);break;case"Placeholder":n.push(t[1]?`${t[0]}${r.body.name}${t[1]}`:`${t[0]}${r.body.name}`);break;default:throw new Error(`Unknown message pattern element of type: ${r?.type}`)}return n.join("")}export{Xt as default};
//! DON'T TOP-LEVEL IMPORT ESBUILD PLUGINS. USE DYNAMIC IMPORTS.
//! See https://github.com/inlang/inlang/issues/486

