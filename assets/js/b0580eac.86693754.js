"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[7053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:7},s="dsig Module",a={unversionedId:"protocol/modules/dsig",id:"protocol/modules/dsig",title:"dsig Module",description:"dsig",source:"@site/docs/protocol/modules/dsig.md",sourceDirName:"protocol/modules",slug:"/protocol/modules/dsig",permalink:"/docs/protocol/modules/dsig",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/modules/dsig.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"storage Module",permalink:"/docs/protocol/modules/storage"},next:{title:"filetree Module",permalink:"/docs/protocol/modules/filetree"}},l={},c=[{value:"dsig",id:"dsig",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dsig-module"},"dsig Module"),(0,n.kt)("h2",{id:"dsig"},"dsig"),(0,n.kt)("p",null,"The dsig module is a digital signature service that allows users to collect signatures from multiple users who are registered on the Jackal Blockchain. Users can create 'forms' associated with a unique file stored on Jackal and can add signees (users) to collect their signatures. The signees have the following options to respond: Approve, Deny, Abstain, and No Response (Default). The form can execute a custom function after all users have voted to Approve the form."))}d.isMDXComponent=!0}}]);