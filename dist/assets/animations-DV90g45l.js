import{j as t}from"./ui-uakmw0ds.js";import{R as e,r}from"./vendor-DAvVC7BV.js";var n=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{r.insertRule(t,r.cssRules.length)}catch(n){}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),this.tags=[],this.ctr=0},t}(),a="-ms-",o="-moz-",s="-webkit-",i="comm",c="rule",l="decl",f="@keyframes",d=Math.abs,m=String.fromCharCode,u=Object.assign;function p(t){return t.trim()}function y(t,e,r){return t.replace(e,r)}function h(t,e){return t.indexOf(e)}function g(t,e){return 0|t.charCodeAt(e)}function b(t,e,r){return t.slice(e,r)}function v(t){return t.length}function x(t){return t.length}function w(t,e){return e.push(t),t}var k=1,$=1,S=0,C=0,O=0,A="";function _(t,e,r,n,a,o,s){return{value:t,root:e,parent:r,type:n,props:a,children:o,line:k,column:$,length:s,return:""}}function z(t,e){return u(_("",null,null,"",null,null,0),t,{length:-t.length},e)}function E(){return O=C>0?g(A,--C):0,$--,10===O&&($=1,k--),O}function M(){return O=C<S?g(A,C++):0,$++,10===O&&($=1,k++),O}function V(){return g(A,C)}function N(){return C}function Y(t,e){return b(A,t,e)}function j(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(t){return k=$=1,S=v(A=t),C=0,[]}function X(t){return A="",t}function R(t){return p(Y(C-1,T(91===t?t+2:40===t?t+1:t)))}function I(t){for(;(O=V())&&O<33;)M();return j(t)>2||j(O)>3?"":" "}function F(t,e){for(;--e&&M()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return Y(t,N()+(e<6&&32==V()&&32==M()))}function T(t){for(;M();)switch(O){case t:return C;case 34:case 39:34!==t&&39!==t&&T(O);break;case 40:41===t&&T(t);break;case 92:M()}return C}function L(t,e){for(;M()&&t+O!==57&&(t+O!==84||47!==V()););return"/*"+Y(e,C-1)+"*"+m(47===t?t:M())}function D(t){for(;!j(V());)M();return Y(t,C)}function G(t){return X(W("",null,null,null,[""],t=P(t),0,[0],t))}function W(t,e,r,n,a,o,s,i,c){for(var l=0,f=0,d=s,u=0,p=0,b=0,x=1,k=1,$=1,S=0,C="",O=a,A=o,_=n,z=C;k;)switch(b=S,S=M()){case 40:if(108!=b&&58==g(z,d-1)){-1!=h(z+=y(R(S),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:z+=R(S);break;case 9:case 10:case 13:case 32:z+=I(b);break;case 92:z+=F(N()-1,7);continue;case 47:switch(V()){case 42:case 47:w(U(L(M(),N()),e,r),c);break;default:z+="/"}break;case 123*x:i[l++]=v(z)*$;case 125*x:case 59:case 0:switch(S){case 0:case 125:k=0;case 59+f:-1==$&&(z=y(z,/\f/g,"")),p>0&&v(z)-d&&w(p>32?q(z+";",n,r,d-1):q(y(z," ","")+";",n,r,d-2),c);break;case 59:z+=";";default:if(w(_=B(z,e,r,l,f,a,i,C,O=[],A=[],d),o),123===S)if(0===f)W(z,e,_,_,O,o,d,i,A);else switch(99===u&&110===g(z,3)?100:u){case 100:case 108:case 109:case 115:W(t,_,_,n&&w(B(t,_,_,0,0,a,i,C,a,O=[],d),A),a,A,d,i,n?O:A);break;default:W(z,_,_,_,[""],A,0,i,A)}}l=f=p=0,x=$=1,C=z="",d=s;break;case 58:d=1+v(z),p=b;default:if(x<1)if(123==S)--x;else if(125==S&&0==x++&&125==E())continue;switch(z+=m(S),S*x){case 38:$=f>0?1:(z+="\f",-1);break;case 44:i[l++]=(v(z)-1)*$,$=1;break;case 64:45===V()&&(z+=R(M())),u=V(),f=d=v(C=z+=D(N())),S++;break;case 45:45===b&&2==v(z)&&(x=0)}}return o}function B(t,e,r,n,a,o,s,i,l,f,m){for(var u=a-1,h=0===a?o:[""],g=x(h),v=0,w=0,k=0;v<n;++v)for(var $=0,S=b(t,u+1,u=d(w=s[v])),C=t;$<g;++$)(C=p(w>0?h[$]+" "+S:y(S,/&\f/g,h[$])))&&(l[k++]=C);return _(t,e,r,0===a?c:i,l,f,m)}function U(t,e,r){return _(t,e,r,i,m(O),b(t,2,-2),0)}function q(t,e,r,n){return _(t,e,r,l,b(t,0,n),b(t,n+1,-1),n)}function H(t,e){for(var r="",n=x(t),a=0;a<n;a++)r+=e(t[a],a,t,e)||"";return r}function J(t,e,r,n){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case l:return t.return=t.return||t.value;case i:return"";case f:return t.return=t.value+"{"+H(t.children,n)+"}";case c:t.value=t.props.join(",")}return v(r=H(t.children,n))?t.return=t.value+"{"+r+"}":""}function Z(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}var K=function(t,e,r){for(var n=0,a=0;n=a,a=V(),38===n&&12===a&&(e[r]=1),!j(a);)M();return Y(t,C)},Q=function(t,e){return X(function(t,e){var r=-1,n=44;do{switch(j(n)){case 0:38===n&&12===V()&&(e[r]=1),t[r]+=K(C-1,e,r);break;case 2:t[r]+=R(n);break;case 4:if(44===n){t[++r]=58===V()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=m(n)}}while(n=M());return t}(P(t),e))},tt=new WeakMap,et=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,n=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||tt.get(r))&&!n){tt.set(t,!0);for(var a=[],o=Q(e,a),s=r.props,i=0,c=0;i<o.length;i++)for(var l=0;l<s.length;l++,c++)t.props[c]=a[i]?o[i].replace(/&\f/g,s[l]):s[l]+" "+o[i]}}},rt=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function nt(t,e){switch(function(t,e){return 45^g(t,0)?(((e<<2^g(t,0))<<2^g(t,1))<<2^g(t,2))<<2^g(t,3):0}(t,e)){case 5103:return s+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return s+t+o+t+a+t+t;case 6828:case 4268:return s+t+a+t+t;case 6165:return s+t+a+"flex-"+t+t;case 5187:return s+t+y(t,/(\w+).+(:[^]+)/,s+"box-$1$2"+a+"flex-$1$2")+t;case 5443:return s+t+a+"flex-item-"+y(t,/flex-|-self/,"")+t;case 4675:return s+t+a+"flex-line-pack"+y(t,/align-content|flex-|-self/,"")+t;case 5548:return s+t+a+y(t,"shrink","negative")+t;case 5292:return s+t+a+y(t,"basis","preferred-size")+t;case 6060:return s+"box-"+y(t,"-grow","")+s+t+a+y(t,"grow","positive")+t;case 4554:return s+y(t,/([^-])(transform)/g,"$1"+s+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+a+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s+t+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,s+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(t)-1-e>6)switch(g(t,e+1)){case 109:if(45!==g(t,e+4))break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+o+(108==g(t,e+3)?"$3":"$2-$3"))+t;case 115:return~h(t,"stretch")?nt(y(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==g(t,e+1))break;case 6444:switch(g(t,v(t)-3-(~h(t,"!important")&&10))){case 107:return y(t,":",":"+s)+t;case 101:return y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+s+(45===g(t,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+a+"$2box$3")+t}break;case 5936:switch(g(t,e+11)){case 114:return s+t+a+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return s+t+a+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return s+t+a+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return s+t+a+t+t}return t}var at=[function(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case l:t.return=nt(t.value,t.length);break;case f:return H([z(t,{value:y(t.value,"@","@"+s)})],n);case c:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return H([z(t,{props:[y(e,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return H([z(t,{props:[y(e,/:(plac\w+)/,":"+s+"input-$1")]}),z(t,{props:[y(e,/:(plac\w+)/,":-moz-$1")]}),z(t,{props:[y(e,/:(plac\w+)/,a+"input-$1")]})],n)}return""})}}],ot=function(t){var e=t.key;if("css"===e){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var a,o,s=t.stylisPlugins||at,i={},c=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)i[e[r]]=!0;c.push(t)});var l,f,d,m,u=[J,(m=function(t){l.insert(t)},function(t){t.root||(t=t.return)&&m(t)})],p=(f=[et,rt].concat(s,u),d=x(f),function(t,e,r,n){for(var a="",o=0;o<d;o++)a+=f[o](t,e,r,n)||"";return a});o=function(t,e,r,n){l=r,H(G(t?t+"{"+e.styles+"}":e.styles),p),n&&(y.inserted[e.name]=!0)};var y={key:e,sheet:new n({key:e,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:o};return y.sheet.hydrate(c),y},st={exports:{}},it={},ct="function"==typeof Symbol&&Symbol.for,lt=ct?Symbol.for("react.element"):60103,ft=ct?Symbol.for("react.portal"):60106,dt=ct?Symbol.for("react.fragment"):60107,mt=ct?Symbol.for("react.strict_mode"):60108,ut=ct?Symbol.for("react.profiler"):60114,pt=ct?Symbol.for("react.provider"):60109,yt=ct?Symbol.for("react.context"):60110,ht=ct?Symbol.for("react.async_mode"):60111,gt=ct?Symbol.for("react.concurrent_mode"):60111,bt=ct?Symbol.for("react.forward_ref"):60112,vt=ct?Symbol.for("react.suspense"):60113,xt=ct?Symbol.for("react.suspense_list"):60120,wt=ct?Symbol.for("react.memo"):60115,kt=ct?Symbol.for("react.lazy"):60116,$t=ct?Symbol.for("react.block"):60121,St=ct?Symbol.for("react.fundamental"):60117,Ct=ct?Symbol.for("react.responder"):60118,Ot=ct?Symbol.for("react.scope"):60119;function At(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case lt:switch(t=t.type){case ht:case gt:case dt:case ut:case mt:case vt:return t;default:switch(t=t&&t.$$typeof){case yt:case bt:case kt:case wt:case pt:return t;default:return e}}case ft:return e}}}function _t(t){return At(t)===gt}it.AsyncMode=ht,it.ConcurrentMode=gt,it.ContextConsumer=yt,it.ContextProvider=pt,it.Element=lt,it.ForwardRef=bt,it.Fragment=dt,it.Lazy=kt,it.Memo=wt,it.Portal=ft,it.Profiler=ut,it.StrictMode=mt,it.Suspense=vt,it.isAsyncMode=function(t){return _t(t)||At(t)===ht},it.isConcurrentMode=_t,it.isContextConsumer=function(t){return At(t)===yt},it.isContextProvider=function(t){return At(t)===pt},it.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===lt},it.isForwardRef=function(t){return At(t)===bt},it.isFragment=function(t){return At(t)===dt},it.isLazy=function(t){return At(t)===kt},it.isMemo=function(t){return At(t)===wt},it.isPortal=function(t){return At(t)===ft},it.isProfiler=function(t){return At(t)===ut},it.isStrictMode=function(t){return At(t)===mt},it.isSuspense=function(t){return At(t)===vt},it.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===dt||t===gt||t===ut||t===mt||t===vt||t===xt||"object"==typeof t&&null!==t&&(t.$$typeof===kt||t.$$typeof===wt||t.$$typeof===pt||t.$$typeof===yt||t.$$typeof===bt||t.$$typeof===St||t.$$typeof===Ct||t.$$typeof===Ot||t.$$typeof===$t)},it.typeOf=At,st.exports=it;var zt=st.exports,Et={};Et[zt.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Et[zt.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};function Mt(t,e,r){var n="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):r&&(n+=r+" ")}),n}var Vt=function(t,e,r){var n=t.key+"-"+e.name;!1===r&&void 0===t.registered[n]&&(t.registered[n]=e.styles)},Nt=function(t,e,r){Vt(t,e,r);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var a=e;do{t.insert(e===a?"."+n:"",a,t.sheet,!0),a=a.next}while(void 0!==a)}};var Yt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jt=/[A-Z]|^ms/g,Pt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Xt=function(t){return 45===t.charCodeAt(1)},Rt=function(t){return null!=t&&"boolean"!=typeof t},It=Z(function(t){return Xt(t)?t:t.replace(jt,"-$&").toLowerCase()}),Ft=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(Pt,function(t,e,r){return Lt={name:e,styles:r,next:Lt},e})}return 1===Yt[t]||Xt(t)||"number"!=typeof e||0===e?e:e+"px"};function Tt(t,e,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return Lt={name:a.name,styles:a.styles,next:Lt},a.name;var o=r;if(void 0!==o.styles){var s=o.next;if(void 0!==s)for(;void 0!==s;)Lt={name:s.name,styles:s.styles,next:Lt},s=s.next;return o.styles+";"}return function(t,e,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=Tt(t,e,r[a])+";";else for(var o in r){var s=r[o];if("object"!=typeof s){var i=s;null!=e&&void 0!==e[i]?n+=o+"{"+e[i]+"}":Rt(i)&&(n+=It(o)+":"+Ft(o,i)+";")}else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=e&&void 0!==e[s[0]]){var c=Tt(t,e,s);switch(o){case"animation":case"animationName":n+=It(o)+":"+c+";";break;default:n+=o+"{"+c+"}"}}else for(var l=0;l<s.length;l++)Rt(s[l])&&(n+=It(o)+":"+Ft(o,s[l])+";")}return n}(t,e,r);case"function":if(void 0!==t){var i=Lt,c=r(t);return Lt=i,Tt(t,e,c)}}var l=r;if(null==e)return l;var f=e[l];return void 0!==f?f:l}var Lt,Dt=/label:\s*([^\s;{]+)\s*(;|$)/g;function Gt(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n=!0,a="";Lt=void 0;var o=t[0];null==o||void 0===o.raw?(n=!1,a+=Tt(r,e,o)):a+=o[0];for(var s=1;s<t.length;s++){if(a+=Tt(r,e,t[s]),n)a+=o[s]}Dt.lastIndex=0;for(var i,c="";null!==(i=Dt.exec(a));)c+="-"+i[1];var l=function(t){for(var e,r=0,n=0,a=t.length;a>=4;++n,a-=4)e=1540483477*(65535&(e=255&t.charCodeAt(n)|(255&t.charCodeAt(++n))<<8|(255&t.charCodeAt(++n))<<16|(255&t.charCodeAt(++n))<<24))+(59797*(e>>>16)<<16),r=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&t.charCodeAt(n+2))<<16;case 2:r^=(255&t.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+c;return{name:l,styles:a,next:Lt}}var Wt=!!e.useInsertionEffect&&e.useInsertionEffect||function(t){return t()},Bt=r.createContext("undefined"!=typeof HTMLElement?ot({key:"css"}):null);Bt.Provider;var Ut,qt,Ht=function(t){return r.forwardRef(function(e,n){var a=r.useContext(Bt);return t(e,a,n)})},Jt=r.createContext({}),Zt={}.hasOwnProperty,Kt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Qt=function(t,e){var r={};for(var n in e)Zt.call(e,n)&&(r[n]=e[n]);return r[Kt]=t,r},te=function(t){var e=t.cache,r=t.serialized,n=t.isStringTag;return Vt(e,r,n),Wt(function(){return Nt(e,r,n)}),null},ee=Ht(function(t,e,n){var a=t.css;"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var o=t[Kt],s=[a],i="";"string"==typeof t.className?i=Mt(e.registered,s,t.className):null!=t.className&&(i=t.className+" ");var c=Gt(s,void 0,r.useContext(Jt));i+=e.key+"-"+c.name;var l={};for(var f in t)Zt.call(t,f)&&"css"!==f&&f!==Kt&&(l[f]=t[f]);return l.className=i,n&&(l.ref=n),r.createElement(r.Fragment,null,r.createElement(te,{cache:e,serialized:c,isStringTag:"string"==typeof o}),r.createElement(o,l))}),re=t.Fragment,ne=function(e,r,n){return Zt.call(r,"css")?t.jsx(ee,Qt(e,r),n):t.jsx(e,r,n)},ae=function(t,e){var n=arguments;if(null==e||!Zt.call(e,"css"))return r.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=ee,o[1]=Qt(t,e);for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)};function oe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Gt(e)}function se(){var t=oe.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}Ut=ae||(ae={}),qt||(qt=Ut.JSX||(Ut.JSX={}));var ie=function t(e){for(var r=e.length,n=0,a="";n<r;n++){var o=e[n];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=t(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(a&&(a+=" "),a+=s)}}return a};var ce=function(t){var e=t.cache,r=t.serializedArr;return Wt(function(){for(var t=0;t<r.length;t++)Nt(e,r[t],!1)}),null},le=Ht(function(t,e){var n=[],a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=Gt(r,e.registered);return n.push(o),Vt(e,o,!1),e.key+"-"+o.name},o={css:a,cx:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t,e,r){var n=[],a=Mt(t,n,r);return n.length<2?r:a+e(n)}(e.registered,a,ie(r))},theme:r.useContext(Jt)},s=t.children(o);return r.createElement(r.Fragment,null,r.createElement(ce,{cache:e,serializedArr:n}),s)}),fe=Object.defineProperty,de=(t,e,r)=>((t,e,r)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r)(t,"symbol"!=typeof e?e+"":e,r),me=new Map,ue=new WeakMap,pe=0;function ye(t){return Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{return`${e}_${"root"===e?(r=t.root,r?(ue.has(r)||(pe+=1,ue.set(r,pe.toString())),ue.get(r)):"0"):t[e]}`;var r}).toString()}function he(t,e,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const a=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:s}=function(t){const e=ye(t);let r=me.get(e);if(!r){const n=new Map;let a;const o=new IntersectionObserver(e=>{e.forEach(e=>{var r;const o=e.isIntersecting&&a.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(r=n.get(e.target))||r.forEach(t=>{t(o,e)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:n},me.set(e,r)}return r}(r),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),o.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),me.delete(a))}}var ge=class extends r.Component{constructor(t){super(t),de(this,"node",null),de(this,"_unobserveCb",null),de(this,"handleNode",t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),de(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=he(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:a,root:o,rootMargin:s,onChange:i,skip:c,trackVisibility:l,delay:f,initialInView:d,fallbackInView:m,...u}=this.props;return r.createElement(e||"div",{ref:this.handleNode,...u},t)}};function be({threshold:t,delay:e,trackVisibility:n,rootMargin:a,root:o,triggerOnce:s,skip:i,initialInView:c,fallbackInView:l,onChange:f}={}){var d;const[m,u]=r.useState(null),p=r.useRef(f),[y,h]=r.useState({inView:!!c,entry:void 0});p.current=f,r.useEffect(()=>{if(i||!m)return;let r;return r=he(m,(t,e)=>{h({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&s&&r&&(r(),r=void 0)},{root:o,rootMargin:a,threshold:t,trackVisibility:n,delay:e},l),()=>{r&&r()}},[Array.isArray(t)?t.toString():t,m,o,a,s,i,n,l,e]);const g=null==(d=y.entry)?void 0:d.target,b=r.useRef(void 0);m||!g||s||i||b.current===g||(b.current=g,h({inView:!!c,entry:void 0}));const v=[u,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var ve,xe={exports:{}},we={},ke=Symbol.for("react.element"),$e=Symbol.for("react.portal"),Se=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Ae=Symbol.for("react.provider"),_e=Symbol.for("react.context"),ze=Symbol.for("react.server_context"),Ee=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen");function Pe(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case ke:switch(t=t.type){case Se:case Oe:case Ce:case Me:case Ve:return t;default:switch(t=t&&t.$$typeof){case ze:case _e:case Ee:case Ye:case Ne:case Ae:return t;default:return e}}case $e:return e}}}ve=Symbol.for("react.module.reference"),we.ContextConsumer=_e,we.ContextProvider=Ae,we.Element=ke,we.ForwardRef=Ee,we.Fragment=Se,we.Lazy=Ye,we.Memo=Ne,we.Portal=$e,we.Profiler=Oe,we.StrictMode=Ce,we.Suspense=Me,we.SuspenseList=Ve,we.isAsyncMode=function(){return!1},we.isConcurrentMode=function(){return!1},we.isContextConsumer=function(t){return Pe(t)===_e},we.isContextProvider=function(t){return Pe(t)===Ae},we.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===ke},we.isForwardRef=function(t){return Pe(t)===Ee},we.isFragment=function(t){return Pe(t)===Se},we.isLazy=function(t){return Pe(t)===Ye},we.isMemo=function(t){return Pe(t)===Ne},we.isPortal=function(t){return Pe(t)===$e},we.isProfiler=function(t){return Pe(t)===Oe},we.isStrictMode=function(t){return Pe(t)===Ce},we.isSuspense=function(t){return Pe(t)===Me},we.isSuspenseList=function(t){return Pe(t)===Ve},we.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===Se||t===Oe||t===Ce||t===Me||t===Ve||t===je||"object"==typeof t&&null!==t&&(t.$$typeof===Ye||t.$$typeof===Ne||t.$$typeof===Ae||t.$$typeof===_e||t.$$typeof===Ee||t.$$typeof===ve||void 0!==t.getModuleId)},we.typeOf=Pe,xe.exports=we;var Xe=xe.exports;se`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,se`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,se`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,se`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,se`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,se`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,se`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,se`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,se`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,se`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,se`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,se`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,se`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Re=se`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ie=se`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fe=se`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Te=se`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Le=se`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,De=se`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ge=se`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,We=se`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Be=se`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ue=se`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qe=se`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,He=se`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Je=se`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ze(t,e){return r=>r?t():e()}function Ke(t){return Ze(t,()=>null)}function Qe(t){return Ke(()=>({opacity:0}))(t)}const tr=t=>{const{cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,keyframes:i=De,triggerOnce:c=!1,className:l,style:f,childClassName:d,childStyle:m,children:u,onVisibilityChange:p}=t,y=r.useMemo(()=>function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=De,iterationCount:a=1}){return oe`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o}),[o,i]);return null==u?null:"string"==typeof(h=u)||"number"==typeof h||"boolean"==typeof h?ne(rr,{...t,animationStyles:y,children:String(u)}):Xe.isFragment(u)?ne(nr,{...t,animationStyles:y}):ne(re,{children:r.Children.map(u,(i,u)=>{if(!r.isValidElement(i))return null;const h=a+(e?u*o*n:0);switch(i.type){case"ol":case"ul":return ne(le,{children:({cx:e})=>ne(i.type,{...i.props,className:e(l,i.props.className),style:Object.assign({},f,i.props.style),children:ne(tr,{...t,children:i.props.children})})});case"li":return ne(ge,{threshold:s,triggerOnce:c,onChange:p,children:({inView:t,ref:e})=>ne(le,{children:({cx:r})=>ne(i.type,{...i.props,ref:e,className:r(d,i.props.className),css:Ke(()=>y)(t),style:Object.assign({},m,i.props.style,Qe(!t),{animationDelay:h+"ms"})})})});default:return ne(ge,{threshold:s,triggerOnce:c,onChange:p,children:({inView:t,ref:e})=>ne("div",{ref:e,className:l,css:Ke(()=>y)(t),style:Object.assign({},f,Qe(!t),{animationDelay:h+"ms"}),children:ne(le,{children:({cx:t})=>ne(i.type,{...i.props,className:t(d,i.props.className),style:Object.assign({},m,i.props.style)})})})})}})});var h},er={display:"inline-block",whiteSpace:"pre"},rr=t=>{const{animationStyles:e,cascade:r=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,triggerOnce:i=!1,className:c,style:l,children:f,onVisibilityChange:d}=t,{ref:m,inView:u}=be({triggerOnce:i,threshold:s,onChange:d});return Ze(()=>ne("div",{ref:m,className:c,style:Object.assign({},l,er),children:f.split("").map((t,r)=>ne("span",{css:Ke(()=>e)(u),style:{animationDelay:a+r*o*n+"ms"},children:t},r))}),()=>ne(nr,{...t,children:f}))(r)},nr=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:n=!1,className:a,style:o,children:s,onVisibilityChange:i}=t,{ref:c,inView:l}=be({triggerOnce:n,threshold:r,onChange:i});return ne("div",{ref:c,className:a,css:Ke(()=>e)(l),style:Object.assign({},o,Qe(!l)),children:s})};se`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,se`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,se`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,se`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,se`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,se`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ar=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,or=se`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,sr=se`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ir=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,cr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,lr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,fr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,dr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,mr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ur=se`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,pr=se`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,yr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,hr=se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const gr=t=>{const{big:e=!1,direction:n,reverse:a=!1,...o}=t,s=r.useMemo(()=>function(t,e,r){switch(r){case"bottom-left":return e?or:Ie;case"bottom-right":return e?sr:Fe;case"down":return t?e?cr:Le:e?ir:Te;case"left":return t?e?fr:Ge:e?lr:De;case"right":return t?e?mr:Be:e?dr:We;case"top-left":return e?ur:Ue;case"top-right":return e?pr:qe;case"up":return t?e?hr:Je:e?yr:He;default:return e?ar:Re}}(e,a,n),[e,n,a]);return ne(tr,{keyframes:s,...o})};se`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,se`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,se`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,se`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,se`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,se`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,se`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,se`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,se`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,se`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,se`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,se`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,se`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,se`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,se`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,se`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,se`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,se`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,se`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,se`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,se`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,se`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,se`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,se`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,se`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,se`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,se`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,se`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,se`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,se`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,se`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,se`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,se`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{gr as F};
