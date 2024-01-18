/*! For license information please see core-unsupported-browser.js.LICENSE.txt */
(()=>{var t,e,n,r={56116:(t,e,n)=>{"use strict";var r=n(79753),o=n(20144),s=n(49232),i=n(31e3),a=n.n(i),c=n(77727),u=n.n(c);(0,s.z$)({allowHigherVersions:!0,browsers:u()});const l=a()(u()),p=(0,n(62556).getBuilder)("core").clearOnLogout().persist().build();var d=n(77958),b=n(17499);const f=null===(A=(0,d.ts)())?(0,b.IY)().setApp("core").build():(0,b.IY)().setApp("core").setUid(A.uid).build();var A;n(23085).lW;const v="unsupported-browser-ignore";(0,r.generateUrl)("/unsupported"),p.getItem(v);var w=n(31352),g=n(10861),m=n.n(g),h=n(93455),_=n.n(h),y=n(97859),C=n(23085).lW;f.debug("Supported browsers",{supportedBrowsers:l});const x={name:"UnsupportedBrowser",components:{Web:y.default,NcButton:m(),NcEmptyContent:_()},data:()=>({agents:{}}),computed:{isMobile:()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),filteredSupportedBrowsers(){return l.filter((t=>!!t&&(this.isMobile?this.isMobileBrowser(t):!this.isMobileBrowser(t))))},formattedBrowsersList(){const t={};return this.filteredSupportedBrowsers.forEach((e=>{const[n,r]=e.split(" ");(!t[n]||t[n]<parseFloat(r,10))&&(t[n]=parseFloat(r,10))})),Object.keys(t).map((e=>{var n,r;if(null===(n=this.agents[e])||void 0===n||!n.browser)return null;const o=t[e],s=null===(r=this.agents[e])||void 0===r?void 0:r.browser;return this.t("core","{name} version {version} and above",{name:s,version:o})})).filter((t=>null!==t))}},async beforeMount(){const{agents:t}=await n.e(7874).then(n.t.bind(n,90614,19));this.agents=t},methods:{t:w.Iu,n:w.uN,forceBrowsing(){p.setItem(v,!0);const t=new URLSearchParams(window.location.search);if(t.has("redirect_url")){const e=C.from(t.get("redirect_url"),"base64").toString()||"/";if(e.startsWith("/"))return void(window.location=(0,r.generateUrl)(e))}window.location=(0,r.generateUrl)("/")},isMobileBrowser:t=>(t=t.toLowerCase()).includes("and_")||t.includes("android")||t.includes("ios_")||t.includes("mobile")||t.includes("_mob")||t.includes("samsung")}};var O=n(93379),B=n.n(O),j=n(7795),k=n.n(j),S=n(90569),P=n.n(S),M=n(3565),U=n.n(M),I=n(19216),T=n.n(I),E=n(44589),W=n.n(E),$=n(19608),N={};N.styleTagTransform=W(),N.setAttributes=U(),N.insert=P().bind(null,"head"),N.domAPI=k(),N.insertStyleElement=T(),B()($.Z,N),$.Z&&$.Z.locals&&$.Z.locals;const R=(0,n(51900).Z)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-unsupported-browser guest-box"},[e("NcEmptyContent",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("Web")]},proxy:!0},{key:"action",fn:function(){return[e("div",[e("h2",[t._v("\n\t\t\t\t\t"+t._s(t.t("core","Your browser is not supported. Please upgrade to a newer version or a supported one."))+"\n\t\t\t\t")]),t._v(" "),e("NcButton",{staticClass:"content-unsupported-browser__continue",attrs:{type:"primary"},on:{click:t.forceBrowsing}},[t._v("\n\t\t\t\t\t"+t._s(t.t("core","Continue with this unsupported browser"))+"\n\t\t\t\t")])],1),t._v(" "),e("ul",{staticClass:"content-unsupported-browser__list"},[e("h3",[t._v(t._s(t.t("core","Supported versions")))]),t._v(" "),t._l(t.formattedBrowsersList,(function(n){return e("li",{key:n},[t._v("\n\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t")])}))],2)]},proxy:!0}])},[t._v("\n\t\t"+t._s(t.t("core","This browser is not supported"))+"\n\t\t")])],1)}),[],!1,null,"3c1e6192",null).exports;"true"===p.getItem(v)&&(window.location=(0,r.generateUrl)("/")),new o.default({el:"#unsupported-browser",name:"UnsupportedBrowserRoot",render:t=>t(R)})},19608:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(87537),o=n.n(r),s=n(23645),i=n.n(s)()(o());i.push([t.id,".content-unsupported-browser[data-v-3c1e6192]{display:flex;justify-content:center;width:400px;max-width:calc(90vw - 60px);margin:auto;padding:30px}.content-unsupported-browser .empty-content[data-v-3c1e6192]{margin:0}.content-unsupported-browser .empty-content[data-v-3c1e6192] .empty-content__icon{opacity:1}.content-unsupported-browser__continue[data-v-3c1e6192]{display:block;margin:30px auto}.content-unsupported-browser__list[data-v-3c1e6192]{margin-top:60px;margin-bottom:30px}.content-unsupported-browser__list li[data-v-3c1e6192]{text-align:left}","",{version:3,sources:["webpack://./core/src/views/UnsupportedBrowser.vue"],names:[],mappings:"AAGA,8CACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,2BAAA,CACA,WAAA,CACA,YARS,CAUT,6DACC,QAAA,CACA,kFACC,SAAA,CAIF,wDACC,aAAA,CACA,gBAAA,CAGD,oDACC,eAAA,CACA,kBAxBQ,CAyBR,uDACC,eAAA",sourcesContent:["\n$spacing: 30px;\n\n.content-unsupported-browser {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 400px;\n\tmax-width: calc(90vw - 2 * $spacing);\n\tmargin: auto;\n\tpadding: $spacing;\n\n\t.empty-content {\n\t\tmargin: 0;\n\t\t&::v-deep .empty-content__icon {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\t&__continue {\n\t\tdisplay: block;\n\t\tmargin: $spacing auto;\n\t}\n\n\t&__list {\n\t\tmargin-top: 2 * $spacing;\n\t\tmargin-bottom: $spacing;\n\t\tli {\n\t\t\ttext-align: left;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const a=i},72950:()=>{}},o={};function s(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=r,t=[],s.O=(e,n,r,o)=>{if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((t=>s.O[t](n[c])))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},n=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,s.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null);s.r(o);var i={};e=e||[null,n({}),n([]),n(n)];for(var a=2&r&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,s.d(o,i),o},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.e=()=>Promise.resolve(),s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),s.j=9315,(()=>{s.b=document.baseURI||self.location.href;var t={9315:0};s.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,i=n[0],a=n[1],c=n[2],u=0;if(i.some((e=>0!==t[e]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(c)var l=c(s)}for(e&&e(n);u<i.length;u++)o=i[u],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),s.nc=void 0;var i=s.O(void 0,[7874],(()=>s(56116)));i=s.O(i)})();
//# sourceMappingURL=core-unsupported-browser.js.map?v=e6a24713e2f6d737ead7