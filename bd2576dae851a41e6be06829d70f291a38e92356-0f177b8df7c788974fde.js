(self.webpackChunkadhd_at_33=self.webpackChunkadhd_at_33||[]).push([[258],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!a(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!a(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!a(e[u[c]],o[u[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},7059:function(e,t,r){"use strict";r.d(t,{G:function(){return j},L:function(){return h},M:function(){return T},P:function(){return w},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return l},h:function(){return c}});var n=r(7294),i=(r(2369),r(5697)),a=r.n(i);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(e,t,r,n,i){return void 0===i&&(i={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function l(e,t,r,n,i,a,s,c){var u={};a&&(u.backgroundColor=a,"fixed"===r?(u.width=n,u.height=i,u.backgroundColor=a,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),c&&(u.objectPosition=c);var l=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return l}var d,f=["children"],p=function(e){var t=e.layout,r=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,r=s(e,f);return n.createElement(n.Fragment,null,n.createElement(p,o({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],g=function(e){var t=e.src,r=e.srcSet,i=e.loading,a=e.alt,c=void 0===a?"":a,u=e.shouldLoad,l=s(e,m);return n.createElement("img",o({},l,{decoding:"async",loading:i,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:c}))},v=function(e){var t=e.fallback,r=e.sources,i=void 0===r?[]:r,a=e.shouldLoad,c=void 0===a||a,u=s(e,y),l=u.sizes||(null==t?void 0:t.sizes),d=n.createElement(g,o({},u,t,{sizes:l,shouldLoad:c}));return i.length?n.createElement("picture",null,i.map((function(e){var t=e.media,r=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,sizes:l})})),d):d};g.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=s(e,b);return t?n.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var T=function(e){return n.createElement(n.Fragment,null,n.createElement(v,o({},e)),n.createElement("noscript",null,n.createElement(v,o({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=v.propTypes;var C,E,O=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),o=3;o<n;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?a().string.apply(a(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:a().object.isRequired,alt:O},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],x=new Set,L=function(e){var t=e.as,i=void 0===t?"div":t,a=e.image,u=e.style,l=e.backgroundColor,d=e.className,f=e.class,p=e.onStartLoad,h=e.onLoad,m=e.onError,y=s(e,S),g=a.width,v=a.height,b=a.layout,w=function(e,t,r){var n={},i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(g,v,b),T=w.style,O=w.className,A=s(w,k),L=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(a.images)}),[a.images]);f&&(d=f);var I=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,g,v);return(0,n.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(680)]).then(r.bind(r,8680)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=L.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void x.add(j)):E&&x.has(j)?void 0:(C.then((function(r){var n=r.renderImageToString,i=r.swapPlaceholderImage;L.current&&(L.current.innerHTML=n(o({isLoading:!0,isLoaded:x.has(j),image:a},y)),x.has(j)||(e=requestAnimationFrame((function(){L.current&&(t=i(L.current,j,x,u,p,h,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[a]),(0,n.useLayoutEffect)((function(){x.has(j)&&E&&(L.current.innerHTML=E(o({isLoading:x.has(j),isLoaded:x.has(j),image:a},y)),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}))}),[a]),(0,n.createElement)(i,o({},A,{style:o({},T,u,{backgroundColor:l}),className:O+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(L,e):null}));j.propTypes=A,j.displayName="GatsbyImage";var I,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],_=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},N=new Set(["fixed","fullWidth","constrained"]),M={src:a().string.isRequired,alt:O,width:_,height:_,sizes:a().string,layout:function(e){if(void 0!==e.layout&&!N.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(I=j,function(e){var t=e.src,r=e.__imageData,i=e.__error,a=s(e,P);return i&&console.warn(i),r?n.createElement(I,o({image:r},a)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=M},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,i=0;i<e.length;i++){var a=e[i];t&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=r,r=!1,t=!0):(t=a.toLowerCase()===a&&a.toUpperCase()!==a,n=r,r=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},2939:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),i=r(1074).default.div.withConfig({displayName:"card__CardDiv",componentId:"sc-d30p24-0"})(["width:100%;border-radius:5px;box-shadow:4px 5px 10px -1px rgba(var(--background-shadow-color),1);padding:10px;margin-bottom:10px;display:flex;"]);function a(e){var t=e.children,r=e.onClick,a=e.className;return n.createElement(i,{className:a,onClick:r}," ",t," ")}},9980:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{b:function(){return _e}});var i=r(7294),a=r(1074),o=r(1597),s=a.default.div.withConfig({displayName:"nav-header__TitleDiv",componentId:"sc-11wzky5-0"})(["margin:0 0 0 0.5vw;padding:0;height:100%;"]),c=a.default.a.withConfig({displayName:"nav-header__Link",componentId:"sc-11wzky5-1"})(["display:flex;align-items:center;height:100%;text-decoration:none;color:#f2f2f2;white-space:nowrap;"]),u=function(e){var t=e.title;return i.createElement(s,null,i.createElement(c,{href:"/"},t))},l=a.default.div.withConfig({displayName:"nav-header__TopNav",componentId:"sc-11wzky5-2"})(["height:100%;width:100%;display:flex;justify-content:flex-end;"]),d=a.default.a.withConfig({displayName:"nav-header__NavLink",componentId:"sc-11wzky5-3"})(["display:flex;align-items:center;height:100%;white-space:nowrap;padding:0 2rem;text-decoration:none;color:#f2f2f2;background-color:rgba( 84,118,255,"," );&:hover{background-color:rgba(84,118,255,0.2);}"],(function(e){return e.active?"0.2":"0.0"}));function f(e,t){return[e,t].includes("/")?e==t:e.startsWith(t)}var p,h,m,y,g=function(e){var t=e.currentPath,r=e.pages;return i.createElement(l,null,r.map((function(e){return i.createElement(d,{key:e.title.toLowerCase(),href:e.link,active:f(t,e.link)},e.title)})))},v=a.default.div.withConfig({displayName:"nav-header__Header",componentId:"sc-11wzky5-4"})(["display:flex;height:3rem;width:100%;background:linear-gradient(to bottom right,#0d33d0,#1f48f1);top:0;position:sticky;z-index:1;"]),b=function(e){var t,r,n,a,s=e.location,c=(0,o.K2)("810360234");return i.createElement(v,null,i.createElement(u,{title:null==c||null===(t=c.site)||void 0===t||null===(r=t.siteMetadata)||void 0===r?void 0:r.title}),i.createElement(g,{currentPath:s.pathname,pages:null==c||null===(n=c.site)||void 0===n||null===(a=n.siteMetadata)||void 0===a?void 0:a.menuLinks}))},w=r(5697),T=r.n(w),C=r(4839),E=r.n(C),O=r(2993),A=r.n(O),S=r(6494),k=r.n(S),x="bodyAttributes",L="htmlAttributes",j="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},P=(Object.keys(I).map((function(e){return I[e]})),"charset"),_="cssText",N="href",M="http-equiv",R="innerHTML",q="itemprop",z="name",H="property",D="rel",U="src",F="target",W={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",Y="defer",K="encodeSpecialCharacters",V="onChangeClientState",G="titleTemplate",$=Object.keys(W).reduce((function(e,t){return e[W[t]]=t,e}),{}),Z=[I.NOSCRIPT,I.SCRIPT,I.STYLE],J="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ee=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},re=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ne=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ie=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ae=function(e){var t=le(e,I.TITLE),r=le(e,G);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=le(e,B);return t||n||void 0},oe=function(e){return le(e,V)||function(){}},se=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return te({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},ue=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&me("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],c=s.toLowerCase();-1===t.indexOf(c)||r===D&&"canonical"===e[r].toLowerCase()||c===D&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==R&&s!==_&&s!==q||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],c=k()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},le=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},de=(p=Date.now(),function(e){var t=Date.now();t-p>16?(p=t,e(t)):setTimeout((function(){de(e)}),0)}),fe=function(e){return clearTimeout(e)},pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||de:r.g.requestAnimationFrame||de,he="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||fe:r.g.cancelAnimationFrame||fe,me=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ye=null,ge=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;we(I.BODY,n),we(I.HTML,i),be(d,f);var p={baseTag:Te(I.BASE,r),linkTags:Te(I.LINK,a),metaTags:Te(I.META,o),noscriptTags:Te(I.NOSCRIPT,s),scriptTags:Te(I.SCRIPT,u),styleTags:Te(I.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,h,m)},ve=function(e){return Array.isArray(e)?e.join(""):e},be=function(e,t){void 0!==e&&document.title!==e&&(document.title=ve(e)),we(I.TITLE,t)},we=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(J),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=a.indexOf(c);-1!==l&&a.splice(l,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(J):r.getAttribute(J)!==o.join(",")&&r.setAttribute(J,o.join(","))}},Te=function(e,t){var r=document.head||document.querySelector(I.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===R)r.innerHTML=t.innerHTML;else if(n===_)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(J,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},Ce=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)},Oe=function(e,t,r){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[J]=!0,a=Ee(r,n),[i.createElement(I.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var i=Ce(r),a=ve(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+ie(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ie(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case x:case L:return{toComponent:function(){return Ee(t)},toString:function(){return Ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[J]=!0,n);return Object.keys(t).forEach((function(e){var r=W[e]||e;if(r===R||r===_){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===R||e===_)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+ie(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===Z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},Ae=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:Oe(I.BASE,t,n),bodyAttributes:Oe(x,r,n),htmlAttributes:Oe(L,i,n),link:Oe(I.LINK,a,n),meta:Oe(I.META,o,n),noscript:Oe(I.NOSCRIPT,s,n),script:Oe(I.SCRIPT,c,n),style:Oe(I.STYLE,u,n),title:Oe(I.TITLE,{title:d,titleAttributes:f},n)}},Se=E()((function(e){return{baseTag:ce([N,F],e),bodyAttributes:se(x,e),defer:le(e,Y),encode:le(e,K),htmlAttributes:se(L,e),linkTags:ue(I.LINK,[D,N],e),metaTags:ue(I.META,[z,P,M,H,q],e),noscriptTags:ue(I.NOSCRIPT,[R],e),onChangeClientState:oe(e),scriptTags:ue(I.SCRIPT,[U,R],e),styleTags:ue(I.STYLE,[_],e),title:ae(e),titleAttributes:se(j,e)}}),(function(e){ye&&he(ye),e.defer?ye=pe((function(){ge(e,(function(){ye=null}))})):(ge(e),ye=null)}),Ae)((function(){return null})),ke=(h=Se,y=m=function(e){function t(){return X(this,t),ne(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!A()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return te({},n,((t={})[r.type]=[].concat(n[r.type]||[],[te({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case I.TITLE:return te({},i,((t={})[n.type]=o,t.titleAttributes=te({},a),t));case I.BODY:return te({},i,{bodyAttributes:te({},a)});case I.HTML:return te({},i,{htmlAttributes:te({},a)})}return te({},i,((r={})[n.type]=te({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=te({},t);return Object.keys(e).forEach((function(t){var n;r=te({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[$[r]||r]=e[r],t}),t)}(re(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=re(e,["children"]),n=te({},r);return t&&(n=this.mapChildrenToProps(t,n)),i.createElement(h,n)},ee(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(i.Component),m.propTypes={base:T().object,bodyAttributes:T().object,children:T().oneOfType([T().arrayOf(T().node),T().node]),defaultTitle:T().string,defer:T().bool,encodeSpecialCharacters:T().bool,htmlAttributes:T().object,link:T().arrayOf(T().object),meta:T().arrayOf(T().object),noscript:T().arrayOf(T().object),onChangeClientState:T().func,script:T().arrayOf(T().object),style:T().arrayOf(T().object),title:T().string,titleAttributes:T().object,titleTemplate:T().string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=h.peek,m.rewind=function(){var e=h.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);ke.renderStatic=ke.rewind;var xe=["title","children"],Le=["title"],je=(0,a.createGlobalStyle)([":root{--background-color:240,240,240;--background-shadow-color:205,205,205;--caption-font-size:10px;}body{width:100%;margin:0;background-color:rgb(var(--background-color));font-family:monospaced;font-size:16px;}*{box-sizing:border-box;}"]),Ie=a.default.div.withConfig({displayName:"with-page-layout__Content",componentId:"sc-1sm2iwy-0"})(["width:80%;margin:2rem auto;display:flex;flex-direction:column;align-items:center;"]),Pe=function(e){var t=e.title,r=e.children,a=n(e,xe);return i.createElement("main",null,i.createElement(ke,{defer:!1},i.createElement("title",null,t)),i.createElement(je,null),i.createElement(b,a),i.createElement(Ie,null,r))};function _e(e){return function(t){var r=t.title,a=n(t,Le);return i.createElement(Pe,Object.assign({title:r},a),i.createElement(e,a))}}}}]);
//# sourceMappingURL=bd2576dae851a41e6be06829d70f291a38e92356-0f177b8df7c788974fde.js.map