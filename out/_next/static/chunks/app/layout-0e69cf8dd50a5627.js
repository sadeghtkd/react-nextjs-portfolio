(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{813:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return s},formatWithValidation:function(){return a},urlObjectKeys:function(){return l}});let n=r(8988)._(r(6211)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,s=e.protocol||"",l=e.pathname||"",a=e.hash||"",i=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||o.test(s))&&!1!==u?(u="//"+(u||""),l&&"/"!==l[0]&&(l="/"+l)):u||(u=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+s+u+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return s(e)}},1359:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return x},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return a},isAbsoluteUrl:function(){return s},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return g}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Object.defineProperty(Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function g(e){return JSON.stringify({message:e.message,stack:e.stack})}},2255:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(3797),o=r(6050),s=r.n(o),l=r(4385);function a(){let[e,t]=(0,l.useState)(!1);return(0,n.jsx)("header",{className:"fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm text-white",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,n.jsx)(s(),{href:"/",className:"text-white font-bold text-xl hover:text-blue-400 transition-colors !important",children:"Sadegh Ghanbari Shohani"}),(0,n.jsx)("nav",{className:"hidden md:block",children:(0,n.jsxs)("ul",{className:"flex space-x-4 gap-x-4",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/about",className:"text-white hover:text-blue-400 transition-colors px-3 py-2",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/projects",className:"text-white hover:text-blue-400 transition-colors px-3 py-2",children:"Projects"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/contact",className:"text-white hover:text-blue-400 transition-colors px-3 py-2",children:"Contact"})})]})}),(0,n.jsx)("button",{className:"md:hidden text-gray-300 hover:text-white",onClick:()=>t(!e),children:(0,n.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),e&&(0,n.jsx)("nav",{className:"md:hidden pb-4",children:(0,n.jsxs)("ul",{className:"flex flex-col space-y-4",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/about",className:"text-gray-300 hover:text-white block transition-colors",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/projects",className:"text-gray-300 hover:text-white block transition-colors",children:"Projects"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/contact",className:"text-gray-300 hover:text-white block transition-colors",children:"Contact"})})]})})]})})}},4013:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},4647:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},6050:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(4975),o=r(3797),s=n._(r(4385)),l=r(813),a=r(3523),i=r(6962),u=r(7494),c=r(1359),f=r(1057);r(7206);let d=r(9018);function p(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let h=s.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:m,prefetch:x=null,passHref:y,replace:b,shallow:g,scroll:j,onClick:v,onMouseEnter:_,onTouchStart:N,legacyBehavior:P=!1,...E}=e;r=m,P&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let k=s.default.useContext(a.AppRouterContext),w=!1!==x,O=null===x?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:C,as:M}=s.default.useMemo(()=>{let e=p(l);return{href:e,as:h?p(h):e}},[l,h]);P&&(n=s.default.Children.only(r));let S=P?n&&"object"==typeof n&&n.ref:t,T=s.default.useCallback(e=>(w&&null!==k&&(0,d.mountLinkInstance)(e,C,k,O),()=>{(0,d.unmountLinkInstance)(e)}),[w,C,k,O]),A={ref:(0,u.useMergedRef)(T,S),onClick(e){P||"function"!=typeof v||v(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&!function(e,t,r,n,o,l,a){let{nodeName:i}=e.currentTarget;!("A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),s.default.startTransition(()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,k,C,M,b,g,j)},onMouseEnter(e){P||"function"!=typeof _||_(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),k&&w&&(0,d.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){P||"function"!=typeof N||N(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),k&&w&&(0,d.onNavigationIntent)(e.currentTarget)}};return(0,c.isAbsoluteUrl)(M)?A.href=M:P&&!y&&("a"!==n.type||"href"in n.props)||(A.href=(0,f.addBasePath)(M)),P?s.default.cloneElement(n,A):(0,o.jsx)("a",{...E,...A,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6211:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return s},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},7389:()=>{},7494:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(4385);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=s(e,n)),t&&(o.current=s(t,n))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8790:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4647,23)),Promise.resolve().then(r.t.bind(r,4013,23)),Promise.resolve().then(r.t.bind(r,7389,23)),Promise.resolve().then(r.bind(r,2255))}},e=>{var t=t=>e(e.s=t);e.O(0,[255,937,350,358],()=>t(8790)),_N_E=e.O()}]);