(self.webpackChunkadhd_at_33=self.webpackChunkadhd_at_33||[]).push([[563],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},9980:function(e,t,n){"use strict";n.d(t,{b:function(){return Ie}});var r=n(7294),o=n(1074),i=n(1597),a=o.default.div.withConfig({displayName:"nav-header__TitleDiv",componentId:"sc-11wzky5-0"})(["margin:0 0 0 0.5vw;padding:0;height:100%;"]),c=o.default.a.withConfig({displayName:"nav-header__Link",componentId:"sc-11wzky5-1"})(["display:flex;align-items:center;height:100%;text-decoration:none;color:#f2f2f2;white-space:nowrap;"]),u=function(e){var t=e.title;return r.createElement(a,null,r.createElement(c,{href:"/"},t))},l=o.default.div.withConfig({displayName:"nav-header__TopNav",componentId:"sc-11wzky5-2"})(["height:100%;width:100%;display:flex;justify-content:flex-end;"]),s=o.default.a.withConfig({displayName:"nav-header__NavLink",componentId:"sc-11wzky5-3"})(["display:flex;align-items:center;height:100%;white-space:nowrap;padding:0 2rem;text-decoration:none;color:#f2f2f2;background-color:rgba( 84,118,255,"," );&:hover{background-color:rgba(84,118,255,0.2);}"],(function(e){return e.active?"0.2":"0.0"}));function f(e,t){return[e,t].includes("/")?e==t:e.startsWith(t)}var p,d,h,y,m=function(e){var t=e.currentPath,n=e.pages;return r.createElement(l,null,n.map((function(e){return r.createElement(s,{key:e.title.toLowerCase(),href:e.link,active:f(t,e.link)},e.title)})))},b=o.default.div.withConfig({displayName:"nav-header__Header",componentId:"sc-11wzky5-4"})(["display:flex;height:3rem;width:100%;background:linear-gradient(to bottom right,#0d33d0,#1f48f1);top:0;position:sticky;"]),v=function(e){var t,n,o,a,c=e.location,l=(0,i.K2)("810360234");return r.createElement(b,null,r.createElement(u,{title:null==l||null===(t=l.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n?void 0:n.title}),r.createElement(m,{currentPath:c.pathname,pages:null==l||null===(o=l.site)||void 0===o||null===(a=o.siteMetadata)||void 0===a?void 0:a.menuLinks}))},g=n(5697),T=n.n(g),w=n(4839),C=n.n(w),A=n(2993),E=n.n(A),O=n(6494),S=n.n(O),k="bodyAttributes",j="htmlAttributes",x="titleAttributes",P={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},I=(Object.keys(P).map((function(e){return P[e]})),"charset"),L="cssText",_="href",N="http-equiv",M="innerHTML",R="itemprop",D="name",H="property",B="rel",F="src",q="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Y="defaultTitle",U="defer",K="encodeSpecialCharacters",W="onChangeClientState",V="titleTemplate",$=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),G=[P.NOSCRIPT,P.SCRIPT,P.STYLE],J="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ne=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},re=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=le(e,P.TITLE),n=le(e,V);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=le(e,Y);return t||r||void 0},ie=function(e){return le(e,W)||function(){}},ae=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ee({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[P.BASE]})).map((function(e){return e[P.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ue=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&he("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===B&&"canonical"===e[n].toLowerCase()||u===B&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==M&&c!==L&&c!==R||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=S()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},le=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},se=(p=Date.now(),function(e){var t=Date.now();t-p>16?(p=t,e(t)):setTimeout((function(){se(e)}),0)}),fe=function(e){return clearTimeout(e)},pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||se:n.g.requestAnimationFrame||se,de="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||fe:n.g.cancelAnimationFrame||fe,he=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ye=null,me=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ge(P.BODY,r),ge(P.HTML,o),ve(f,p);var d={baseTag:Te(P.BASE,n),linkTags:Te(P.LINK,i),metaTags:Te(P.META,a),noscriptTags:Te(P.NOSCRIPT,c),scriptTags:Te(P.SCRIPT,l),styleTags:Te(P.STYLE,s)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,h,y)},be=function(e){return Array.isArray(e)?e.join(""):e},ve=function(e,t){void 0!==e&&document.title!==e&&(document.title=be(e)),ge(P.TITLE,t)},ge=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(J),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(J):n.getAttribute(J)!==a.join(",")&&n.setAttribute(J,a.join(","))}},Te=function(e,t){var n=document.head||document.querySelector(P.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===M)n.innerHTML=t.innerHTML;else if(r===L)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(J,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},we=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},Ae=function(e,t,n){switch(e){case P.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[J]=!0,i=Ce(n,o),[r.createElement(P.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=we(n),i=be(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+re(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+re(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case k:case j:return{toComponent:function(){return Ce(t)},toString:function(){return we(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[J]=!0,o);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===M||n===L){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===M||e===L)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+re(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ee=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:Ae(P.BASE,t,r),bodyAttributes:Ae(k,n,r),htmlAttributes:Ae(j,o,r),link:Ae(P.LINK,i,r),meta:Ae(P.META,a,r),noscript:Ae(P.NOSCRIPT,c,r),script:Ae(P.SCRIPT,u,r),style:Ae(P.STYLE,l,r),title:Ae(P.TITLE,{title:f,titleAttributes:p},r)}},Oe=C()((function(e){return{baseTag:ce([_,q],e),bodyAttributes:ae(k,e),defer:le(e,U),encode:le(e,K),htmlAttributes:ae(j,e),linkTags:ue(P.LINK,[B,_],e),metaTags:ue(P.META,[D,I,N,H,R],e),noscriptTags:ue(P.NOSCRIPT,[M],e),onChangeClientState:ie(e),scriptTags:ue(P.SCRIPT,[F,M],e),styleTags:ue(P.STYLE,[L],e),title:oe(e),titleAttributes:ae(x,e)}}),(function(e){ye&&de(ye),e.defer?ye=pe((function(){me(e,(function(){ye=null}))})):(me(e),ye=null)}),Ee)((function(){return null})),Se=(d=Oe,y=h=function(e){function t(){return X(this,t),ne(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!E()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case P.SCRIPT:case P.NOSCRIPT:return{innerHTML:t};case P.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ee({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ee({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case P.TITLE:return ee({},o,((t={})[r.type]=a,t.titleAttributes=ee({},i),t));case P.BODY:return ee({},o,{bodyAttributes:ee({},i)});case P.HTML:return ee({},o,{htmlAttributes:ee({},i)})}return ee({},o,((n={})[r.type]=ee({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ee({},t);return Object.keys(e).forEach((function(t){var r;n=ee({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[$[n]||n]=e[n],t}),t)}(te(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case P.LINK:case P.META:case P.NOSCRIPT:case P.SCRIPT:case P.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=te(e,["children"]),o=ee({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(d,o)},Z(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(r.Component),h.propTypes={base:T().object,bodyAttributes:T().object,children:T().oneOfType([T().arrayOf(T().node),T().node]),defaultTitle:T().string,defer:T().bool,encodeSpecialCharacters:T().bool,htmlAttributes:T().object,link:T().arrayOf(T().object),meta:T().arrayOf(T().object),noscript:T().arrayOf(T().object),onChangeClientState:T().func,script:T().arrayOf(T().object),style:T().arrayOf(T().object),title:T().string,titleAttributes:T().object,titleTemplate:T().string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=d.peek,h.rewind=function(){var e=d.rewind();return e||(e=Ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);Se.renderStatic=Se.rewind;var ke=["title","location"],je=(0,o.createGlobalStyle)(["body{width:100%;margin:0;background-color:#F0F0F0;}*{box-sizing:border-box;}"]),xe=o.default.div.withConfig({displayName:"with-page-layout__Content",componentId:"sc-1sm2iwy-0"})(["width:80%;margin:2rem auto;display:flex;flex-direction:column;align-items:center;"]),Pe=function(e){var t=e.title,n=e.location,o=e.children;return r.createElement("main",null,r.createElement(Se,{defer:!1},r.createElement("title",null,t)),r.createElement(je,null),r.createElement(v,{location:n}),r.createElement(xe,null,o))};function Ie(e){return function(t){var n=t.title,o=t.location,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,ke);return r.createElement(Pe,{title:n,location:o},r.createElement(e,i))}}}}]);
//# sourceMappingURL=26d1bf3dcd7397d7aa58f89d20721d5deb21b787-fd774670ece2200ea52c.js.map