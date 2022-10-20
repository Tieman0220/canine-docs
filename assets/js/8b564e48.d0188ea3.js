"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[5689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,u=p["".concat(l,".").concat(f)]||p[f]||d[f]||n;return r?o.createElement(u,i(i({ref:t},h),{},{components:r})):o.createElement(u,i({ref:t},h))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:1},i="Jackal Proof-of-Persistence",s={unversionedId:"protocol/p-o-p",id:"protocol/p-o-p",title:"Jackal Proof-of-Persistence",description:"Jackal Storage functions by a Proof-of-Storage algorithm we call Proof-of-Persistence. The Jackal Proof-of-Persistence (JPOP) works through a series of contracts formed between the storage provider and the user. These contracts contain the Merkle Tree root hash of the file and the information required to prove ownership of the file. Storage Providers are responsible for posting Merkle Proofs within a challenge window determined by the blockchain. These challenge windows require the provider to post the raw chunk of data corresponding to the index of the challenge window alongside the required Merkle Hashes to prove the data belongs to the Merkle Root stored on the contract. These challenge indexes are chosen at random by the blockchain using a block-hash-based random number generator paired with a random data oracle.",source:"@site/docs/protocol/p-o-p.md",sourceDirName:"protocol",slug:"/protocol/p-o-p",permalink:"/docs/protocol/p-o-p",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/p-o-p.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"filetree Module",permalink:"/docs/protocol/modules/filetree"},next:{title:"Tokens",permalink:"/docs/protocol/tokens"}},l={},c=[{value:"Building the Trees",id:"building-the-trees",level:2},{value:"Proving Data Availability",id:"proving-data-availability",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jackal-proof-of-persistence"},"Jackal Proof-of-Persistence"),(0,a.kt)("p",null,"Jackal Storage functions by a Proof-of-Storage algorithm we call Proof-of-Persistence. The Jackal Proof-of-Persistence (JPOP) works through a series of contracts formed between the storage provider and the user. These contracts contain the Merkle Tree root hash of the file and the information required to prove ownership of the file. Storage Providers are responsible for posting Merkle Proofs within a challenge window determined by the blockchain. These challenge windows require the provider to post the raw chunk of data corresponding to the index of the challenge window alongside the required Merkle Hashes to prove the data belongs to the Merkle Root stored on the contract. These challenge indexes are chosen at random by the blockchain using a block-hash-based random number generator paired with a random data oracle."),(0,a.kt)("p",null,"If a Storage Provider successfully posts a Merkle Proof within the challenge window for the contract and the data is verified by the Validators to be valid Merkle Proofs for the challenge index, the Storage Provider is paid out. Storage Provider rewards are proportional to the file size the contract is associated with relative to every other active contract on the network. If a Storage Provider fails to provide a valid proof within the allotted time frame, the contract is struck with a missed proof. After X missed proofs, the contract is burned, and the User is alerted the next time they query the contract. For every contract burned through missing proofs, the Storage Provider is struck with a penalty that remains on their record for a period of time adjustable through governance."),(0,a.kt)("h2",{id:"building-the-trees"},"Building the Trees"),(0,a.kt)("p",null,"Merkle Trees are a core component of the JPOP mechanism, thus, it is important to outline how these trees are used to create efficient and trustworthy proofs. When saving a file for the first time, providers split each file into many 1kb chunks. Providers must also hash the entire file to create a folder to house every chunk, this is displayed by  the following diagram."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File Tree",src:r(972).Z,width:"601",height:"382"})),(0,a.kt)("p",null,"These chunks are used as leaves on the Merkle Tree defining each storage contract. Immediately after saving a file to disk, the storage provider builds a tree using each chunk. To create this tree, each chunk is hashed into a respective Hashed Chunk. These chunks are then recursively paired together and hashed until a single root node is created. This is called the Merkle Root, the only piece of data relative to a file that is saved directly on the blockchain itself."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Merkle Roots",src:r(6544).Z,width:"601",height:"512"})),(0,a.kt)("p",null,"In the diagram above, displays how each file is hashed together to create a single root node."),(0,a.kt)("h2",{id:"proving-data-availability"},"Proving Data Availability"),(0,a.kt)("p",null,"These nodes are essential as they only require the nodes below them to prove they are part of the tree. This means that we can create a proof claiming a single chunk belongs to the file using the Merkle Root saved on the chain. In the following diagram, we can see that only the blue nodes are required to build a successful proof. The green nodes represent information that we can generate given the blue nodes. Finally, we can compare the root generated from the proof to the root saved on the chain and determine if the chunk does belong to the contract we are proving. This results in small message sizes due to not needing to send the entire file every proof."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Merkle Roots Graphed",src:r(4545).Z,width:"601",height:"512"})))}d.isMDXComponent=!0},972:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/tree1-9d95b0b5007debff9495443e8075c918.png"},6544:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/tree2-6ed53d85e2efa8a87bfd1bc6b88757e5.png"},4545:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/tree3-4f9ab62526b9143823b59eebc0f2b724.png"}}]);