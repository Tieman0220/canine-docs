"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[1232],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(o),d=n,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},1392:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:1},i="Tokens",l={unversionedId:"protocol/tokens",id:"protocol/tokens",title:"Tokens",description:"JKL or Jackal",source:"@site/docs/protocol/tokens.md",sourceDirName:"protocol",slug:"/protocol/tokens",permalink:"/docs/protocol/tokens",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/tokens.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jackal Proof-of-Persistence",permalink:"/docs/protocol/p-o-p"},next:{title:"Encryption",permalink:"/docs/protocol/encryption"}},c={},s=[{value:"JKL or Jackal",id:"jkl-or-jackal",level:2},{value:"JWL or Jewel",id:"jwl-or-jewel",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tokens"},"Tokens"),(0,n.kt)("h2",{id:"jkl-or-jackal"},"JKL or Jackal"),(0,n.kt)("p",null,"JKL is an inflationary token that powers the Jackal Protocol. The JKL Token has many use cases. Some of these use cases are below. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"dApps")," - Applications built leveraging the Jackal Protocol, such as Jackal Storage and the RNS Marketplace, may choose to include the JKL token to expand its utility. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Securing the Network")," - As the Jackal Protocol is a Proof-of-Stake (PoS) Cosmos L1 blockchain, JKL can be delegated to validators to secure the network and earn JKL rewards. Otherwise known as staking or bonded tokens.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Transaction Fees")," - Transactions on the Jackal Protocol must be paid for using JKL. As the protocol is PoS, the cost of transactions is inexpensive. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Governance")," - Staked tokens grant on-chain governance participation within the Jackal Protocol to vote on text, software, spend, and other governance proposals. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Collateral")," - The JKL token can act as collateral for validators, storage providers, and other smart contract use cases. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Liquidity Provision")," - JKL can be allocated into a liquidity pool to earn rewards. "))),(0,n.kt)("h2",{id:"jwl-or-jewel"},"JWL or Jewel"),(0,n.kt)("p",null,"JWL is an L1 store-of-value token native to the Canine Blockchain. JWL tokens are immutable, meaning they can never be created, changed or destroyed. There is a finite amount of JWL that will be minted at the chain's genesis. Currently, there is no utility for the JWL token and it should be treated as such."))}u.isMDXComponent=!0}}]);