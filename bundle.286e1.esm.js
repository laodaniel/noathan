!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"e6c71",3:"62c75"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(_=l[c]).getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(a===i||a===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var _;if((a=(_=s[c]).getAttribute("data-href"))===i||a===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"e8978",3:"2f783"}[e]+".esm.js"}(e);var a=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var a=l;n(n.s="mdyV")}({GFNa:function(){},QfWi:function(e,t,n){"use strict";function r(e){function t(){o.Component.call(this),n||(this.componentWillMount=()=>{e(e=>{n=e&&e.default||e,this.setState({})})},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(o.h)(n,e);const t=function e(t,n){if("string"==typeof t.type)return null;const r=t.__;if(!r)return;let o=r.__k;if(o){Array.isArray(o)||(o=[o]);let n=o.indexOf(t);-1===n&&(n=o.length);for(let t=n;t--;){const n=o[t],r=n&&n.__e||e(n,!0);if(r)return r}}return n?void 0:e(r)}(this.__v),r=t&&t.nextSibling||(this.__P||this._parentDom).firstChild;return r&&Object(o.h)(r.localName,{dangerouslySetInnerHTML:s})}}let n;return t.preload=e,(t.prototype=new o.Component).constructor=t,t}n.r(t);n("GFNa");var o=n("hosL"),i=n("Y3FI"),u=n("ox/y"),l=n("ySiU"),c=n.n(l);var a=()=>Object(o.h)("header",{class:c.a.header},Object(o.h)("h1",null,"Preact App"),Object(o.h)("nav",null,Object(o.h)(u.Link,{activeClassName:c.a.active,href:"/"},"Home"),Object(o.h)(u.Link,{activeClassName:c.a.active,href:"/profile"},"Me"),Object(o.h)(u.Link,{activeClassName:c.a.active,href:"/profile/john"},"John")));const s={};var _=r((function(e){n.e(2).then(function(){var t=n("+1Jk");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)})),f=r((function(e){n.e(3).then(function(){var t=n("BM80");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=()=>Object(o.h)("div",{id:"app"},Object(o.h)(a,null),Object(o.h)(i.Router,null,Object(o.h)(_,{path:"/"}),Object(o.h)(f,{path:"/profile/",user:"me"}),Object(o.h)(f,{path:"/profile/:user"})))},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var _=Math.max(e.length,t.length),f=0;f<_;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),h=(t[f].match(/[+*?]+$/)||v)[0]||"",d=~h.indexOf("+"),y=~h.indexOf("*"),m=e[f]||"";if(!m&&!y&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(m),d||y){u[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function u(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(c).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function c(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function a(){var e;return""+((e=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(e.search||"")}function s(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=g.length;t--;)if(g[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),m&&m[t]?m[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),_(e)}function _(e){for(var t=!1,n=0;n<g.length;n++)!0===g[n].routeTo(e)&&(t=!0);for(var r=b.length;r--;)b[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),h(e)}function h(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return h(e)}}while(t=t.parentNode)}}n.r(t),n.d(t,"subscribers",(function(){return b})),n.d(t,"getCurrentUrl",(function(){return a})),n.d(t,"route",(function(){return s})),n.d(t,"Router",(function(){return O})),n.d(t,"Route",(function(){return w})),n.d(t,"Link",(function(){return x})),n.d(t,"exec",(function(){return o}));var y=n("hosL"),v={},m=null,g=[],b=[],k={},C=!1,O=function(e){function t(t){e.call(this,t),t.history&&(m=t.history),this.state={url:t.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){_(a())})),addEventListener("click",d)),C=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(y.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){g.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;m&&(this.unlisten=m.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(u).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var u={url:t,matches:i};return r(u,i),delete u.ref,delete u.key,Object(y.cloneElement)(e,u)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(y.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(y.Component),x=function(e){return Object(y.createElement)("a",r({onClick:p},e))},w=function(e){return Object(y.createElement)(e.component,e)};O.subscribers=b,O.getCurrentUrl=a,O.route=s,O.Router=O,O.Route=w,O.Link=x,O.exec=o,t.default=O},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l=arguments,c={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(c.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===c[i]&&(c[i]=e.defaultProps[i]);return u(e,c,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++E.__v:o};return null!=E.vnode&&E.vnode(i),i}function l(){return{current:null}}function c(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function f(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!p.__r++||D!==E.debounceRendering)&&((D=E.debounceRendering)||M)(p)}function p(){for(var e;p.__r=T.length;)e=T.sort((function(e,t){return e.__v.__b-t.__v.__b})),T=[],e.some((function(e){var t,n,o,i,u,l,c;e.__d&&(l=(u=(t=e).__v).__e,(c=t.__P)&&(n=[],(o=r({},u)).__v=u.__v+1,i=C(c,u,o,t.__n,void 0!==c.ownerSVGElement,null!=u.__h?[l]:null,n,null==l?s(u):l,u.__h),O(n,u),i!=l&&_(u)))}))}function h(e,t,n,r,i,l,a,_,f,p){var h,d,v,m,g,b,k,O=r&&r.__k||F,x=O.length;for(f==W&&(f=null!=a?a[0]:x?s(r,0):null),n.__k=[],h=0;h<t.length;h++)if(null!=(m=n.__k[h]=null==(m=t[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[h])||v&&m.key==v.key&&m.type===v.type)O[h]=void 0;else for(d=0;d<x;d++){if((v=O[d])&&m.key==v.key&&m.type===v.type){O[d]=void 0;break}v=null}g=C(e,m,v=v||W,i,l,a,_,f,p),(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),f=y(e,m,v,O,a,g,f),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}if(n.__e=b,null!=a&&"function"!=typeof n.type)for(h=a.length;h--;)null!=a[h]&&o(a[h]);for(h=x;h--;)null!=O[h]&&j(O[h],O[h]);if(k)for(h=0;h<k.length;h++)w(k[h],k[++h],k[++h])}function d(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){d(e,t)})):t.push(e)),t}function y(e,t,n,r,o,i,u){var l,c,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(o==n||i!=u||null==i.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(i),l=null;else{for(c=u,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==i)break e;e.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||B.test(t)?n:n+"px"}function m(e,t,n,r,o){var i,u,l;if(o&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||v(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||v(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),(u=t.toLowerCase())in e&&(t=u),t=t.slice(2),e.l||(e.l={}),e.l[t+i]=n,l=i?b:g,n?r||e.addEventListener(t,l,i):e.removeEventListener(t,l,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function g(e){this.l[e.type+!1](E.event?E.event(e):e)}function b(e){this.l[e.type+!0](E.event?E.event(e):e)}function k(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&k(o,t,n),t=y(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function C(e,t,n,o,i,u,l,s,_){var f,p,d,y,v,m,g,b,C,O,w,j=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(_=n.__h,s=t.__e=n.__e,t.__h=null,u=[s]),(f=E.__b)&&f(t);try{e:if("function"==typeof j){if(b=t.props,C=(f=j.contextType)&&o[f.__c],O=f?C?C.props.value:f.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in j&&j.prototype.render?t.__c=p=new j(b,O):(t.__c=p=new a(b,O),p.constructor=j,p.render=S),C&&C.sub(p),p.props=b,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=j.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,j.getDerivedStateFromProps(b,p.__s))),y=p.props,v=p.state,d)null==j.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==j.getDerivedStateFromProps&&b!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,O)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&l.push(p),k(t,s,e);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,v,m)}))}p.context=O,p.props=b,p.state=p.__s,(f=E.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(y,v)),w=null!=f&&f.type==c&&null==f.key?f.props.children:f,h(e,Array.isArray(w)?w:[w],t,n,o,i,u,l,s,_),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,i,u,l,_);(f=E.diffed)&&f(t)}catch(e){t.__v=null,(_||null!=u)&&(t.__e=s,t.__h=!!_,u[u.indexOf(s)]=null),E.__e(e,t,n)}return t.__e}function O(e,t){E.__c&&E.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){E.__e(e,t.__v)}}))}function x(e,t,n,r,o,i,u,l){var c,a,s,_,f,p=n.props,d=t.props;if(o="svg"===t.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,d.is&&{is:d.is}),i=null,l=!1}if(null===t.type)p===d||l&&e.data===d||(e.data=d);else{if(null!=i&&(i=F.slice.call(e.childNodes)),s=(p=n.props||W).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(_||s)&&(_&&(s&&_.__html==s.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||m(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||m(e,i,t[i],n[i],r)})(e,d,p,o,l),_?t.__k=[]:(c=t.props.children,h(e,Array.isArray(c)?c:[c],t,n,r,"foreignObject"!==t.type&&o,i,u,W,l)),l||("value"in d&&void 0!==(c=d.value)&&(c!==e.value||"progress"===t.type&&!c)&&m(e,"value",c,p.value,!1),"checked"in d&&void 0!==(c=d.checked)&&c!==e.checked&&m(e,"checked",c,p.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){E.__e(e,n)}}function j(e,t,n){var r,i,u;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&j(r[u],t,n);null!=i&&o(i)}function S(e,t,n){return this.constructor(e,n)}function P(e,t,n){var r,o,u;E.__&&E.__(e,t),o=(r=n===R)?null:n&&n.__k||t.__k,e=i(c,null,[e]),u=[],C(t,(r?t:n||t).__k=e,o||W,W,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?F.slice.call(t.childNodes):null,u,n||W,r),O(u,e)}function A(e,t){P(e,t,R)}function L(e,t,n){var o,i,l,c=arguments,a=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:a[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(c[l]);return null!=n&&(a.children=n),u(e.type,a,o||e.key,i||e.ref,null)}function U(e,t){var n={__c:t="__cC"+I++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,r){return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return A})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return c})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return N})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return L})),n.d(t,"createContext",(function(){return U})),n.d(t,"toChildArray",(function(){return d})),n.d(t,"__u",(function(){return j})),n.d(t,"options",(function(){return E}));var E,N,T,M,D,R,I,W={},F=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;E={__e:function(e,t){for(var n,r,o,i=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return t.__h=i,n.__E=n}catch(t){e=t}throw e},__v:0},N=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=c,T=[],M="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,R=W,I=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=e=>e&&e.default?e.default:e,c=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("QfWi")),r={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(r=JSON.parse(decodeURI(a.innerHTML)).preRenderData||r);const s={preRenderData:r},_=r.url?c(r.url):"",f=u&&_===c(location.pathname);e=(f?u:i)(o(t,{CLI_DATA:s}),document.body,e)})()}},"ox/y":function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("hosL"),u=n("Y3FI"),l=t.Match=function(e){function t(){for(var t,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return t=n=r(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},r(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){u.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,u.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,u.exec)(n,e.path,{})})},t}(i.Component),c=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(e){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=c,t.default=l,l.Link=c},ySiU:function(e){e.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.286e1.esm.js.map