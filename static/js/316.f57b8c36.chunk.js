"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[316],{1316:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ae}});var s=t(885),a=t(9274),i=t(970),r=t(8254),c=t(2613),l=t(7521),o=t(2444),h=t(3521),d=t(7829),x=t(178),u=t(9019),j=t(4488),p=t(3428),m=t(4641),Z=t(3405),g=t(3404),f=t(1113),b=t(9536),v=t(6104),y=t(9289),k=t(7131),A=t(9466),P=t(7890),w=t(4942),W=t(1413),I=t(5987),S=t(2886),C=t(5291),L=t(8989),E=t(4425),z=t(494),H=t(8310),T=t(7216),N=t(9840),F=t(4748),O=t(3213),D=t(5033),M=t(7313),J=t(5554),R=t(6672),B=t(2522),G=t(6417),U=["width","id","className","component"],q=[{name:"Introduction",path:"/tech/",icon:(0,G.jsx)(S.Z,{}),sub:null},{name:"HTML",path:"/tech/html",icon:(0,G.jsx)(R.gtO,{}),sub:[{name:"Elements",path:"/tech/html/elements",icon:(0,G.jsx)(R.gtO,{}),sub:[{name:"Embedded Content",path:"/tech/html/elements/embedded",icon:(0,G.jsx)(R.gtO,{})}]}]},{name:"CSS",path:"/tech/css",icon:(0,G.jsx)(R.r8,{}),sub:[{name:"Layout",path:"/tech/css/layout",icon:(0,G.jsx)(S.Z,{}),sub:[{name:"Flexbox",path:"/tech/css/layout/flexbox",icon:(0,G.jsx)(S.Z,{})},{name:"Grid",path:"/tech/css/layout/grid",icon:(0,G.jsx)(R.r8,{})},{name:"Table",path:"/tech/css/layout/table",icon:(0,G.jsx)(R.r8,{})}]},{name:"Animation",path:"/tech/css/animation",icon:(0,G.jsx)(S.Z,{}),sub:[{name:"xxx",path:"/tech/css/animation/xxx",icon:(0,G.jsx)(S.Z,{})}]}]},{name:"JavaScript",path:"/tech/javascript",icon:(0,G.jsx)(B.Fi5,{}),sub:[{name:"Core",path:"/tech/javascript/core",icon:(0,G.jsx)(B.Fi5,{}),sub:[{name:"Text formatting",path:"/tech/javascript/core/text-formatting",icon:(0,G.jsx)(B.Fi5,{})},{name:"Indexed collections",path:"/tech/javascript/core/indexed-collections",icon:(0,G.jsx)(B.Fi5,{})}]},{name:"Web API",path:"/tech/javascript/api",icon:(0,G.jsx)(B.Fi5,{}),sub:[{name:"Height Compare",path:"/tech/javascript/api/heightCompare",icon:(0,G.jsx)(B.Fi5,{})}]}]},{name:"React",path:"/tech/react",icon:(0,G.jsx)(R.huN,{}),sub:[{name:"Hooks",path:"/tech/react/hooks",icon:(0,G.jsx)(C.Z,{}),sub:[{isLabel:!0,label:"Basic Hooks"},{name:"useState",path:"/tech/react/hooks/useState",icon:(0,G.jsx)(C.Z,{})},{name:"useEffect",path:"/tech/react/hooks/useEffect",icon:(0,G.jsx)(C.Z,{})},{name:"useContext",path:"/tech/react/hooks/useContext",icon:(0,G.jsx)(C.Z,{})},{isLabel:!0,label:"Additional Hooks"},{name:"useReducer",path:"/tech/react/hooks/useReducer",icon:(0,G.jsx)(C.Z,{})},{name:"useMemo",path:"/tech/react/hooks/useMemo",icon:(0,G.jsx)(C.Z,{})},{isLabel:!0,label:"Library Hooks"},{isLabel:!0,label:"Custom Hooks"}]}]},{name:"Node.js",icon:(0,G.jsx)(R.jPo,{}),path:"/tech/nodejs",sub:[{name:"package.json",icon:(0,G.jsx)(R.jPo,{}),path:"/tech/nodejs/package-file",sub:null}]},{name:"Other",icon:(0,G.jsx)(L.Z,{}),path:"/tech/other",sub:[{name:"\u5929\u6c14API",icon:(0,G.jsx)(L.Z,{}),path:"/tech/other/weather-api",sub:null}]}],V=function(e){var n=e.width,t=e.id,a=e.className,i=e.component,r=(0,I.Z)(e,U),c=(0,P.TH)().pathname,l={sidebar:{backgroundColor:(0,J.v9)((function(e){return e.themeToggle.theme})).palette.background.paper,minHeight:"83vh",maxHeight:"85vh",overflowY:"auto",position:"fixed",width:n}},o=(0,M.useState)({"/tech/html":c.includes("/tech/html"),"/tech/html/elements":c.includes("/tech/html/elements"),"/tech/css":c.includes("/tech/css"),"/tech/css/layout":c.includes("/tech/css/layout"),"/tech/css/animation":c.includes("/tech/css/animation"),"/tech/javascript":c.includes("/tech/javascript"),"/tech/react":c.includes("/tech/react"),"/tech/react/hooks":c.includes("/tech/react/hooks"),"/tech/nodejs":c.includes("/tech/nodejs"),"/tech/other":c.includes("/tech/other")}),h=(0,s.Z)(o,2),d=h[0],x=h[1],u=function(e){return function(){x((0,W.Z)((0,W.Z)({},d),{},(0,w.Z)({},e,!d[e])))}};return(0,G.jsx)(p.Z,(0,W.Z)((0,W.Z)({id:t,className:a,component:i,style:l.sidebar},r),{},{children:(0,G.jsx)(Z.Z,{sx:{pr:0,pl:{md:2,lg:3,xl:4}},children:(0,G.jsx)(H.Z,{className:"lv1",children:q.map((function(e,n){return null===e.sub?(0,G.jsx)(T.ZP,{children:(0,G.jsx)(A.OL,{to:"/blog"+e.path,children:(0,G.jsxs)(N.Z,{children:[(0,G.jsx)(F.Z,{children:e.icon}),(0,G.jsx)(O.Z,{primary:e.name})]})})},"item-".concat(n)):(0,G.jsxs)(M.Fragment,{children:[(0,G.jsx)(T.ZP,{className:"sup",children:(0,G.jsxs)(N.Z,{onClick:u(e.path),children:[(0,G.jsx)(F.Z,{children:e.icon}),(0,G.jsx)(O.Z,{primary:e.name}),d[e.path]?(0,G.jsx)(E.Z,{}):(0,G.jsx)(z.Z,{})]})}),(0,G.jsx)(D.Z,{in:d[e.path],timeout:"auto",unmountOnExit:!0,children:(0,G.jsx)(H.Z,{className:"sub lv2",children:e.sub.map((function(e,t){return null===e.sub?(0,G.jsx)(T.ZP,{children:(0,G.jsx)(A.OL,{to:"/blog"+e.path,children:(0,G.jsxs)(N.Z,{children:[(0,G.jsx)(F.Z,{children:e.icon}),(0,G.jsx)(O.Z,{primary:e.name})]})})},"item-".concat(n,"-").concat(t)):(0,G.jsxs)(M.Fragment,{children:[(0,G.jsx)(T.ZP,{className:"sup",children:(0,G.jsxs)(N.Z,{onClick:u(e.path),children:[(0,G.jsx)(F.Z,{children:e.icon}),(0,G.jsx)(O.Z,{primary:e.name}),d[e.path]?(0,G.jsx)(E.Z,{}):(0,G.jsx)(z.Z,{})]})}),(0,G.jsx)(D.Z,{in:d[e.path],timeout:"auto",unmountOnExit:!0,children:(0,G.jsx)(H.Z,{className:"sub lv3",children:e.sub.map((function(e,s){return e.isLabel?(0,G.jsxs)(M.Fragment,{children:[(0,G.jsx)(f.Z,{color:"gray",variant:"body2",children:e.label}),(0,G.jsx)(b.Z,{})]},"label-".concat(n,"-").concat(t,"-").concat(s)):(0,G.jsx)(T.ZP,{children:(0,G.jsx)(A.OL,{to:"/blog"+e.path,children:(0,G.jsxs)(N.Z,{children:[(0,G.jsx)(F.Z,{children:e.icon}),(0,G.jsx)(O.Z,{primary:e.name,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}})]})})},"item-".concat(n,"-").concat(t,"-").concat(s))}))})})]},"item-".concat(n,"-").concat(t))}))})})]},"item-".concat(n))}))})})}))};function Y(){return(0,G.jsx)(d.Z,{id:"TechIntroPage",children:(0,G.jsx)(f.Z,{variant:"h2",children:"Welcome! Happy hacking!"})})}function K(){return(0,G.jsxs)(d.Z,{id:"IntroPage",children:[(0,G.jsx)(f.Z,{variant:"h1",children:"React"}),(0,G.jsx)(f.Z,{variant:"h6",children:"A JavaScript library for building user interfaces"})]})}var Q=(0,M.lazy)((function(){return t.e(679).then(t.bind(t,3679))})),X=(0,M.lazy)((function(){return t.e(694).then(t.bind(t,7360))})),$=(0,M.lazy)((function(){return t.e(743).then(t.bind(t,743))}));function _(){return(0,G.jsx)(d.Z,{id:"CSSIntroPage",children:"Hello, CSS enthusiasts!"})}function ee(){return(0,G.jsx)(d.Z,{id:"HTMLIntroPage",children:"Hey! Let's learn HTML!"})}function ne(){return(0,G.jsx)(d.Z,{id:"JSIntroPage",children:"JavaScript is so charming!"})}var te=t(5898);function se(){return(0,G.jsxs)(te.Z,{id:"ArticleLoading",spacing:1,children:[(0,G.jsx)(j.Z,{variant:"text",sx:{fontSize:"1rem"}}),(0,G.jsx)(j.Z,{variant:"circular",height:40}),(0,G.jsx)(j.Z,{variant:"rectangular",height:60}),(0,G.jsx)(j.Z,{variant:"rounded",height:60})]})}var ae=(0,M.lazy)((function(){return t.e(232).then(t.bind(t,4232))})),ie=(0,M.lazy)((function(){return t.e(823).then(t.bind(t,5823))})),re=(0,M.lazy)((function(){return t.e(391).then(t.bind(t,391))})),ce=(0,M.lazy)((function(){return t.e(831).then(t.bind(t,6831))})),le=(0,M.lazy)((function(){return t.e(322).then(t.bind(t,1322))})),oe=t(1881),he=t.n(oe)().create();he.interceptors.request.use((function(e){e.responseEncoding="UTF-8";var n=localStorage.getItem("token");return null!==n&&""!==n&&(e.headers.authorization=n),e}),(function(e){return console.error("\ud83d\udd34error"),Promise.reject(e)})),he.interceptors.response.use((function(e){return console.log("\ud83d\udfe2\u8bf7\u6c42\u6210\u529f\uff01"),console.log(e),e}),(function(e){switch(e.response.status){case 403:console.warn("\ud83d\udd34\u767b\u5f55\u5df2\u8fc7\u671f\uff01"),localStorage.removeItem("token"),window.location.assign("/login");break;case 404:break;default:console.error("\ud83d\udd34\u54cd\u5e94\u9519\u8bef\uff01")}return Promise.reject(e)}));var de=he,xe=["children","sx"];function ue(e){var n=e.children,t=e.sx,s=(0,I.Z)(e,xe),a=(0,J.v9)((function(e){return e.themeToggle.theme}));return(0,G.jsx)(p.Z,(0,W.Z)((0,W.Z)({sx:(0,W.Z)({color:a.palette.text.primary,backgroundColor:a.palette.background.paper},t)},s),{},{children:n}))}var je=t(6217);function pe(){var e=(0,J.v9)((function(e){return e.themeToggle.theme})),n=new Array(1,2,3);Array(4,5,6);return(0,G.jsxs)(d.Z,{id:"IndexedCollections",children:[(0,G.jsx)(f.Z,{variant:"h1",children:"\u7d22\u5f15\u96c6\u5408\u7c7b (Indexed collections)"}),(0,G.jsxs)("section",{children:[(0,G.jsx)(f.Z,{variant:"h2",children:"\ud83d\udccc \u6570\u7ec4\u5bf9\u8c61 (Array object)"}),(0,G.jsx)(f.Z,{variant:"h3",children:"\u521b\u5efa\u6570\u7ec4 (creating an array)"}),(0,G.jsx)(f.Z,{variant:"h3",children:"\u586b\u5145\u6570\u7ec4 (populating an array)"}),(0,G.jsx)(f.Z,{variant:"h3",children:"\u5f15\u7528\u6570\u7ec4\u5143\u7d20 (referring to array elements)"}),(0,G.jsx)(f.Z,{variant:"h3",children:"\u904d\u5386\u6570\u7ec4 (iterating over array)"}),(0,G.jsx)(f.Z,{variant:"h3",children:"\u6570\u7ec4\u7684\u65b9\u6cd5 (array methods)"}),(0,G.jsx)(je.Z,{language:"javascript",style:e.codeBlock,showLineNumbers:!0,wrapLongLines:!0,children:"arr.at(1): ".concat(n.at(1))})]})]})}var me=t(891);function Ze(){return(0,G.jsxs)(d.Z,{id:"WeatherAPI",children:[(0,G.jsx)(f.Z,{variant:"h1",align:"center",children:"\u6700\u597d\u7528\u7684 6 \u4e2a\u514d\u8d39\u5929\u6c14 API "}),(0,G.jsxs)(f.Z,{children:["\u539f\u6587\u5730\u5740\uff1a",(0,G.jsx)(me.Z,{href:"https://kalacloud.com/blog/free-weather-api/",children:"https://kalacloud.com/blog/free-weather-api/"})]}),(0,G.jsx)(f.Z,{paragraph:!0,children:"\u5929\u6c14 API \u5305\u542b\u4e30\u5bcc\u7684\u5929\u6c14\u6570\u636e\uff0c\u4e0d\u4ec5\u6709\u5b9e\u65f6\u6e29\u5ea6\u3001\u6e7f\u5ea6\u3001\u98ce\u901f\u3001\u964d\u6c34\u7b49\u8fd9\u4e9b\u57fa\u7840\u6570\u636e\uff0c\u8fd8\u6709\u8fc7\u53bb\u7684\u5386\u53f2\u5929\u6c14\u6570\u636e\u548c\u672a\u6765\u7684\u5929\u6c14\u9884\u6d4b\u6570\u636e\uff0c\u9876\u7ea7\u7684\u5929\u6c14 API \u63a5\u53e3\u8fd8\u4f1a\u5305\u62ec\u5929\u6c14\u707e\u5bb3\u9884\u8b66\uff0c\u7a7a\u6c14\u8d28\u91cf\u6307\u6570\uff0c\u65e5\u51fa\u65e5\u843d\u3001\u6f6e\u6c50\u53ca\u6708\u76f8\u76f8\u5173\u7684\u5929\u6587\u6c14\u8c61\u7b49\u6570\u636e\u3002 \u5929\u6c14 API \u4e5f\u5e76\u4e0d\u96be\u83b7\u5f97\uff0c\u672c\u6559\u7a0b\u5c06\u4ecb\u7ecd 6 \u6b3e\u56fd\u5185\u5916\u514d\u8d39\u7684\u5929\u6c14 API\uff0c\u5e76\u624b\u628a\u624b\u6559\u4f60\u642d\u5efa\u4e00\u5957\u5c5e\u4e8e\u81ea\u5df1\u7684\u5929\u6c14\u6570\u636e\u770b\u677f\u3002"}),(0,G.jsx)(f.Z,{variant:"h2",children:"\u4e00\u3001\u9ad8\u5fb7\u5730\u56fe\u5929\u6c14 API - \u7a33\u5b9a\u3001\u514d\u8d39\u3001\u6781\u7b80"}),(0,G.jsx)(f.Z,{variant:"h2",children:"\u4e8c\u3001\u548c\u98ce\u5929\u6c14 API - \u514d\u8d39\u4ed8\u8d39\u540c\u6743\u9650\uff0c\u975e\u5546\u4e1a\u65e0\u9650\u514d\u8d39"}),(0,G.jsx)(f.Z,{variant:"h2",children:"\u4e09\u3001\u77e5\u5fc3\u5929\u6c14 API - \u514d\u8d39\u3001\u8f7b\u4fbf\u3001\u4e13\u4e1a"}),(0,G.jsx)(f.Z,{variant:"h2",children:"\u56db\u3001OpenWeather - 100 \u4e07\u6b21/\u6708 \u5206\u949f\u7ea7\u5b9e\u65f6\u9884\u62a5 \u5929\u6c14\u4e91\u56fe"}),(0,G.jsx)(f.Z,{variant:"h2",children:"\u4e94\u3001AccuWeather - \u5168\u7403\u6700\u5927\u7684\u6c14\u8c61\u6570\u636e\u670d\u52a1\u5546 \u5386\u53f2\u60a0\u4e45 \u6570\u636e\u7cbe\u51c6"}),(0,G.jsx)(f.Z,{variant:"h2",children:"\u516d\u3001Visual Crossing - \u975e\u5f00\u53d1\u8005\u53cb\u597d 50\u5e74\u5386\u53f2\u6c14\u8c61\u6570\u636e\u514d\u8d39\u8c03\u7528"})]})}var ge=["children"];function fe(e){var n=e.children,t=(0,I.Z)(e,ge);return(0,G.jsx)(f.Z,(0,W.Z)((0,W.Z)({variant:"h1",align:"center"},t),{},{children:n}))}function be(){return(0,G.jsxs)(d.Z,{id:"PackageFile",children:[(0,G.jsx)(fe,{children:"What are peer dependencies in a Node module?"}),(0,G.jsx)("a",{href:"https://flaviocopes.com/npm-peer-dependencies/",children:"https://flaviocopes.com/npm-peer-dependencies/"}),(0,G.jsx)(f.Z,{paragraph:!0,children:'In some package.json files, you might see a few lines like this: You might have already seen dependencies and devDependencies, but not peerDependencies. dependencies are the packages your project depends on. devDependencies are the packages that are needed during the development phase. Say a testing framework like Jest or other utilities like Babel or ESLint. In both cases, when you install a package, its dependencies and devDependencies are automatically installed by npm. peerDependencies are different. They are not automatically installed. When a dependency is listed in a package as a peerDependency, it is not automatically installed. Instead, the code that includes the package must include it as its dependency. npm will warn you if you run npm install and it does not find this dependency. Example: let\u2019s say package a includes dependency b: a/package.json //... "dependencies": "b": "1.x" } Package b in turn wants package c as a peerDependency: b/package.json //... "peerDependencies": "c": "1.x" In package A, we must therefore add c as a dependency, otherwise when you install package b, npm will give you a warning (and the code will likely fail at runtime): a/package.json //... "dependencies": "b": "1.x", "c": "1.x" } The versions must be compatible, so if a peerDependency is listed as 2.x, you can\u2019t install 1.x or another version. It all follows semantic versioning.'})]})}var ve=t(9099),ye=t(2015);function ke(){var e=(0,M.useRef)(null),n=(0,M.useState)(!1),t=(0,s.Z)(n,2),a=t[0],i=t[1];return(0,M.useEffect)((function(){i(e.current&&document.pictureInPictureEnabled)}),[e]),(0,G.jsxs)(d.Z,{id:"EmbeddedContent",children:[(0,G.jsx)(fe,{children:"\u5a92\u4f53\u5143\u7d20"}),(0,G.jsx)("a",{href:"https://seifi.org/javascript/picture-in-picture-javascript-safari.html",children:"https://seifi.org/javascript/picture-in-picture-javascript-safari.html"}),(0,G.jsx)("h2",{children:"\ud83d\udccc `Video` element"}),(0,G.jsx)(f.Z,{children:"Here is an example of loading a video, and attaching the relative events to a PiP button."}),(0,G.jsx)(f.Z,{children:"If the button is grayed out, your browser does not support webkitSetPresentationMode"}),(0,G.jsx)("video",{ref:e,controls:!0,width:"100%",children:(0,G.jsx)("source",{src:ye,type:"video/mp4"})}),(0,G.jsx)(ve.Z,{onClick:function(){document.pictureInPictureElement?document.exitPictureInPicture().then((function(){return console.log("PIP\u9000\u51fa\u6210\u529f\uff01")})):document.pictureInPictureEnabled&&e.current.requestPictureInPicture().then((function(e){e.addEventListener("resize",(function(){return console.log("resizing")}),!1)}))},variant:"contained",disabled:!a,children:"PIP"})]})}function Ae(){var e=(0,J.v9)((function(e){return e.themeToggle.theme})),n={card:{color:e.palette.text.secondary,backgroundColor:e.palette.background.paper}},t=(0,M.useRef)(null),w=(0,M.useState)(!0),W=(0,s.Z)(w,2),I=W[0],S=W[1],C=(0,M.useState)(0),L=(0,s.Z)(C,2),E=L[0],z=L[1],H=(0,M.useState)(null),T=(0,s.Z)(H,2),N=T[0],F=T[1];return(0,M.useEffect)((function(){var e=new AbortController;document.title="\u6280\u672f\u5206\u4eab - Andy\u306e\u535a\u5ba2";var n=function(){de({method:"GET",url:"https://restapi.amap.com/v3/weather/weatherInfo",params:{key:"b2b5555c7a6df9c845f204275b9804ca",city:330110,extensions:"base"}}).then((function(e){return F(e.data)}))};return n(),setInterval(n,9e5),S(!0),z(17*t.current.clientWidth/100),window.addEventListener("resize",(function(){return z(17*t.current.clientWidth/100)}),{signal:e.signal}),S(!1),function(){return e.abort()}}),[]),(0,G.jsx)(d.Z,{id:"TechnologyPage",pt:"6rem",children:(0,G.jsx)(x.Z,{maxWidth:!1,children:(0,G.jsxs)(u.ZP,{container:!0,columns:100,ref:t,children:[(0,G.jsx)(u.ZP,{item:!0,xs:0,sm:0,md:17,lg:17,xl:17,display:{xs:"none",md:"block"},children:I?new Array(10).fill(0).map((function(e,n){return(0,G.jsx)(j.Z,{animation:"wave",width:"100%",height:"5rem"},"skeleton"+n)})):(0,G.jsx)(V,{id:"Sidebar",width:E})}),(0,G.jsx)(u.ZP,{item:!0,xs:0,sm:0,md:1,lg:1,xl:1}),(0,G.jsx)(u.ZP,{item:!0,xs:100,sm:100,md:82,lg:82,xl:82,children:(0,G.jsxs)(u.ZP,{container:!0,columns:82,spacing:{xs:1,sm:2,md:0},children:[(0,G.jsx)(u.ZP,{item:!0,xs:82,sm:82,md:63,lg:63,xl:63,children:(0,G.jsxs)(p.Z,{style:n.card,children:[(0,G.jsx)(m.Z,{}),(0,G.jsxs)(Z.Z,{children:[(0,G.jsxs)(g.Z,{"aria-label":"breadcrumb",children:[(0,G.jsxs)(A.rU,{underline:"hover",sx:{display:"flex",alignItems:"center"},color:"inherit",to:"/",children:[(0,G.jsx)(a.Z,{sx:{mr:.5},fontSize:"inherit"}),"\u4e3b\u9875"]}),(0,G.jsxs)(A.rU,{underline:"hover",sx:{display:"flex",alignItems:"center"},color:"inherit",to:"/getting-started/installation/",children:[(0,G.jsx)(i.Z,{sx:{mr:.5},fontSize:"inherit"}),"Core"]}),(0,G.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center"},color:"text.primary",children:[(0,G.jsx)(r.Z,{sx:{mr:.5},fontSize:"inherit"}),"Breadcrumb"]})]}),(0,G.jsx)(b.Z,{}),(0,G.jsx)(d.Z,{className:"article",children:(0,G.jsx)(M.Suspense,{fallback:(0,G.jsx)(se,{}),children:(0,G.jsxs)(P.Z5,{children:[(0,G.jsx)(P.AW,{index:!0,element:(0,G.jsx)(Y,{})}),(0,G.jsxs)(P.AW,{path:"html/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{index:!0,element:(0,G.jsx)(ee,{})}),(0,G.jsx)(P.AW,{path:"elements/*",element:(0,G.jsx)(P.j3,{}),children:(0,G.jsx)(P.AW,{path:"embedded",element:(0,G.jsx)(ke,{})})})]}),(0,G.jsxs)(P.AW,{path:"css/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{index:!0,element:(0,G.jsx)(_,{})}),(0,G.jsxs)(P.AW,{path:"layout/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{path:"flexbox",element:(0,G.jsx)(ae,{})}),(0,G.jsx)(P.AW,{path:"grid",element:(0,G.jsx)(ie,{})}),(0,G.jsx)(P.AW,{path:"table",element:(0,G.jsx)(re,{})})]})]}),(0,G.jsxs)(P.AW,{path:"javascript/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{index:!0,element:(0,G.jsx)(ne,{})}),(0,G.jsx)(P.AW,{path:"core/*",element:(0,G.jsx)(P.j3,{}),children:(0,G.jsx)(P.AW,{path:"indexed-collections",element:(0,G.jsx)(pe,{})})}),(0,G.jsx)(P.AW,{path:"api/*",element:(0,G.jsx)(P.j3,{}),children:(0,G.jsx)(P.AW,{path:"heightCompare",element:(0,G.jsx)(le,{})})})]}),(0,G.jsxs)(P.AW,{path:"react/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{path:"intro",index:!0,element:(0,G.jsx)(K,{})}),(0,G.jsxs)(P.AW,{path:"hooks/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{path:"useCallback",element:(0,G.jsx)(X,{})}),(0,G.jsx)(P.AW,{path:"useEffect",element:(0,G.jsx)(Q,{})}),(0,G.jsx)(P.AW,{path:"useMemo",element:(0,G.jsx)($,{})})]}),(0,G.jsxs)(P.AW,{path:"core/*",element:(0,G.jsx)(P.j3,{}),children:[(0,G.jsx)(P.AW,{path:"state-updating",element:(0,G.jsx)(ce,{})}),(0,G.jsx)(P.AW,{path:"useEffect",element:(0,G.jsx)(X,{})}),(0,G.jsx)(P.AW,{path:"useMemo",element:(0,G.jsx)($,{})})]})]}),(0,G.jsx)(P.AW,{path:"nodejs/*",element:(0,G.jsx)(P.j3,{}),children:(0,G.jsx)(P.AW,{path:"package-file",element:(0,G.jsx)(be,{})})}),(0,G.jsx)(P.AW,{path:"other/*",element:(0,G.jsx)(P.j3,{}),children:(0,G.jsx)(P.AW,{path:"weather-api",element:(0,G.jsx)(Ze,{})})}),(0,G.jsx)(P.AW,{path:"*",element:(0,G.jsx)(P.Fg,{to:"/tech",replace:!0})})]})})})]}),(0,G.jsx)(v.Z,{children:(0,G.jsxs)(y.Z,{style:{width:"100%",justifyContent:"end",columnGap:"1%"},children:[(0,G.jsx)(k.Z,{title:"\u652f\u6301",children:(0,G.jsx)(c.Z,{})}),(0,G.jsx)(k.Z,{title:"\u53cd\u5bf9",children:(0,G.jsx)(l.Z,{})}),(0,G.jsx)(k.Z,{title:"\u5206\u4eab",children:(0,G.jsx)(o.Z,{})}),(0,G.jsx)(k.Z,{title:"Bug\u53cd\u9988",children:(0,G.jsx)(h.Z,{})})]})})]})}),(0,G.jsx)(u.ZP,{item:!0,xs:0,sm:0,md:1,lg:1,xl:1}),(0,G.jsxs)(u.ZP,{item:!0,xs:82,sm:82,md:18,lg:18,xl:18,children:[(0,G.jsx)(p.Z,{style:n.card,children:(0,G.jsx)(Z.Z,{})}),(0,G.jsx)(ue,{children:(0,G.jsxs)(Z.Z,{children:[(0,G.jsx)(f.Z,{variant:"h6",children:"\u5b9e\u65f6\u5929\u6c14"}),(0,G.jsx)("pre",{children:(0,G.jsx)("code",{children:JSON.stringify(N,null,2)})})]})}),(0,G.jsx)(p.Z,{}),(0,G.jsx)(p.Z,{})]})]})})]})})})}},2015:function(e,n,t){e.exports=t.p+"static/media/welcome.3e1178e995ce99f2ee0f.mp4"}}]);