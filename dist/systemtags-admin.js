/*! For license information please see systemtags-admin.js.LICENSE.txt */
(()=>{"use strict";var t,e,s,a={40167:(t,e,s)=>{var a=s(85471),i=s(92457),r=s(46222),n=s(88837),l=s(53334),o=s(85168),d=s(9518),c=s(67607),g=s(5212),u=s(82182),m=s(71654);const p={userVisible:!0,userAssignable:!0,canAssign:!0};s(26287);var h,y=s(99498),v=s(44719);const b=(0,y.dC)("dav"),f=(0,v.UU)(b,{headers:{requesttoken:null!==(h=(0,i.do)())&&void 0!==h?h:""}}),A=(0,s(53529).YK)().setApp("systemtags").detectUser().build();var T;!function(t){t.Public="Public",t.Restricted="Restricted",t.Invisible="Invisible"}(T||(T={}));const _=[{id:T.Public,label:(0,l.Tl)("systemtags","Public")},{id:T.Restricted,label:(0,l.Tl)("systemtags","Restricted")},{id:T.Invisible,label:(0,l.Tl)("systemtags","Invisible")}],C=(t,e)=>({[[!0,!0].join(",")]:T.Public,[[!0,!1].join(",")]:T.Restricted,[[!1,!1].join(",")]:T.Invisible}[[t,e].join(",")]),x=a.Ay.extend({name:"SystemTagForm",components:{NcButton:d.A,NcLoadingIcon:r.A,NcSelect:c.A,NcSelectTags:g.A,NcTextField:u.A},props:{tags:{type:Array,required:!0}},data:()=>({loading:!1,tagLevelOptions:_,selectedTag:null,errorMessage:"",tagName:"",tagLevel:T.Public}),watch:{selectedTag(t){this.tagName=t?t.displayName:"",this.tagLevel=t?C(t.userVisible,t.userAssignable):T.Public}},computed:{isCreating(){return null===this.selectedTag},isCreateDisabled(){return""===this.tagName},isUpdateDisabled(){var t,e,s;return""===this.tagName||(null===(t=this.selectedTag)||void 0===t?void 0:t.displayName)===this.tagName&&C(null===(e=this.selectedTag)||void 0===e?void 0:e.userVisible,null===(s=this.selectedTag)||void 0===s?void 0:s.userAssignable)===this.tagLevel},isResetDisabled(){return this.isCreating?""===this.tagName&&this.tagLevel===T.Public:null===this.selectedTag},userVisible(){return{[T.Public]:!0,[T.Restricted]:!0,[T.Invisible]:!1}[this.tagLevel]},userAssignable(){return{[T.Public]:!0,[T.Restricted]:!1,[T.Invisible]:!1}[this.tagLevel]},tagProperties(){return{displayName:this.tagName,userVisible:this.userVisible,userAssignable:this.userAssignable}}},methods:{t:l.Tl,async handleSubmit(){this.isCreating?await this.create():await this.update()},async create(){const t={...p,...this.tagProperties};this.loading=!0;try{const e=await(async t=>{const e=(t=>{const e={...t};return e.name&&!e.displayName||(e.name=e.displayName,delete e.displayName),e})(t);try{const{headers:t}=await f.customRequest("/systemtags",{method:"POST",data:e}),s=t.get("content-location");if(s)return(t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const s=t.split("/");let a;do{a=s[s.length-1],s.pop()}while(!a&&s.length>0);return Number(a)})(s);throw A.error((0,l.Tl)("systemtags",'Missing "Content-Location" header')),new Error((0,l.Tl)("systemtags",'Missing "Content-Location" header'))}catch(t){throw A.error((0,l.Tl)("systemtags","Failed to create tag"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to create tag"))}})(t),s={...t,id:e};this.$emit("tag:created",s),(0,o.Te)((0,l.Tl)("systemtags","Created tag")),this.reset()}catch(t){this.errorMessage=(0,l.Tl)("systemtags","Failed to create tag")}this.loading=!1},async update(){if(null===this.selectedTag)return;const t={...this.selectedTag,...this.tagProperties};this.loading=!0;try{var e;await(async t=>{const e="/systemtags/"+t.id,s='<?xml version="1.0"?>\n\t<d:propertyupdate  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t<d:set>\n\t\t\t<d:prop>\n\t\t\t\t<oc:display-name>'.concat(t.displayName,"</oc:display-name>\n\t\t\t\t<oc:user-visible>").concat(t.userVisible,"</oc:user-visible>\n\t\t\t\t<oc:user-assignable>").concat(t.userAssignable,"</oc:user-assignable>\n\t\t\t</d:prop>\n\t\t</d:set>\n\t</d:propertyupdate>");try{await f.customRequest(e,{method:"PROPPATCH",data:s})}catch(t){throw A.error((0,l.Tl)("systemtags","Failed to update tag"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to update tag"))}})(t),this.selectedTag=t,this.$emit("tag:updated",t),(0,o.Te)((0,l.Tl)("systemtags","Updated tag")),null===(e=this.$refs.tagNameInput)||void 0===e||e.focus()}catch(t){this.errorMessage=(0,l.Tl)("systemtags","Failed to update tag")}this.loading=!1},async handleDelete(){if(null!==this.selectedTag){this.loading=!0;try{await(async t=>{const e="/systemtags/"+this.selectedTag.id;try{await f.deleteFile(e)}catch(t){throw A.error((0,l.Tl)("systemtags","Failed to delete tag"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to delete tag"))}})(),this.$emit("tag:deleted",this.selectedTag),(0,o.Te)((0,l.Tl)("systemtags","Deleted tag")),this.reset()}catch(t){this.errorMessage=(0,l.Tl)("systemtags","Failed to delete tag")}this.loading=!1}},reset(){var t;this.selectedTag=null,this.errorMessage="",this.tagName="",this.tagLevel=T.Public,null===(t=this.$refs.tagNameInput)||void 0===t||t.focus()}}});var w=s(85072),N=s.n(w),S=s(97825),P=s.n(S),L=s(77659),O=s.n(L),F=s(55056),k=s.n(F),I=s(10540),j=s.n(I),D=s(41113),E=s.n(D),R=s(17889),M={};M.styleTagTransform=E(),M.setAttributes=k(),M.insert=O().bind(null,"head"),M.domAPI=P(),M.insertStyleElement=j(),N()(R.A,M),R.A&&R.A.locals&&R.A.locals;var B=s(14486);const U=(0,B.A)(x,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("form",{staticClass:"system-tag-form",attrs:{disabled:t.loading,"aria-labelledby":"system-tag-form-heading"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)},reset:t.reset}},[e("h3",{attrs:{id:"system-tag-form-heading"}},[t._v("\n\t\t"+t._s(t.t("systemtags","Create or edit tags"))+"\n\t")]),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tags-input"}},[t._v(t._s(t.t("systemtags","Search for a tag to edit")))]),t._v(" "),e("NcSelectTags",{attrs:{"input-id":"system-tags-input",placeholder:t.t("systemtags","Collaborative tags …"),"fetch-tags":!1,options:t.tags,multiple:!1,passthru:""},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","No tags to select"))+"\n\t\t\t")]},proxy:!0}]),model:{value:t.selectedTag,callback:function(e){t.selectedTag=e},expression:"selectedTag"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-name"}},[t._v(t._s(t.t("systemtags","Tag name")))]),t._v(" "),e("NcTextField",{ref:"tagNameInput",attrs:{id:"system-tag-name",value:t.tagName,error:Boolean(t.errorMessage),"helper-text":t.errorMessage,"label-outside":""},on:{"update:value":function(e){t.tagName=e}}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-level"}},[t._v(t._s(t.t("systemtags","Tag level")))]),t._v(" "),e("NcSelect",{attrs:{"input-id":"system-tag-level",options:t.tagLevelOptions,reduce:t=>t.id,clearable:!1,disabled:t.loading},model:{value:t.tagLevel,callback:function(e){t.tagLevel=e},expression:"tagLevel"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__row"},[t.isCreating?e("NcButton",{attrs:{"native-type":"submit",disabled:t.isCreateDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Create"))+"\n\t\t")]):[e("NcButton",{attrs:{"native-type":"submit",disabled:t.isUpdateDisabled||t.loading}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Update"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.loading},on:{click:t.handleDelete}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Delete"))+"\n\t\t\t")])],t._v(" "),e("NcButton",{attrs:{"native-type":"reset",disabled:t.isResetDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Reset"))+"\n\t\t")]),t._v(" "),t.loading?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading …"),size:32}}):t._e()],2)])}),[],!1,null,"76c7369e",null).exports,V=a.Ay.extend({name:"SystemTagsSection",components:{NcLoadingIcon:r.A,NcSettingsSection:n.A,SystemTagForm:U},data:()=>({loadingTags:!1,tags:[]}),async created(){this.loadingTags=!0;try{this.tags=await(async()=>{try{const{data:t}=await f.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,s]=t;return[(0,m.A)(e),"displayName"===(0,m.A)(e)?String(s):s]})))})))(t)}catch(t){throw A.error((0,l.Tl)("systemtags","Failed to load tags"),{error:t}),new Error((0,l.Tl)("systemtags","Failed to load tags"))}})()}catch(t){(0,o.Qg)((0,l.Tl)("systemtags","Failed to load tags"))}this.loadingTags=!1},methods:{t:l.Tl,handleCreate(t){this.tags.unshift(t)},handleUpdate(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1),this.tags.unshift(t)},handleDelete(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1)}}}),$=(0,B.A)(V,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcSettingsSection",{attrs:{name:t.t("systemtags","Collaborative tags"),description:t.t("systemtags","Collaborative tags are available for all users. Restricted tags are visible to users but cannot be assigned by them. Invisible tags are for internal use, since users cannot see or assign them.")}},[t.loadingTags?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading collaborative tags …"),size:32}}):e("SystemTagForm",{attrs:{tags:t.tags},on:{"tag:created":t.handleCreate,"tag:updated":t.handleUpdate,"tag:deleted":t.handleDelete}})],1)}),[],!1,null,null,null).exports;s.nc=btoa((0,i.do)()),(new(a.Ay.extend($))).$mount("#vue-admin-systemtags")},17889:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),i=s.n(a),r=s(76314),n=s.n(r)()(i());n.push([t.id,".system-tag-form[data-v-76c7369e]{display:flex;flex-direction:column;max-width:400px;gap:8px 0}.system-tag-form__group[data-v-76c7369e]{display:flex;flex-direction:column}.system-tag-form__row[data-v-76c7369e]{margin-top:8px;display:flex;gap:0 4px}","",{version:3,sources:["webpack://./apps/systemtags/src/components/SystemTagForm.vue"],names:[],mappings:"AACA,kCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CAEA,yCACC,YAAA,CACA,qBAAA,CAGD,uCACC,cAAA,CACA,YAAA,CACA,SAAA",sourcesContent:["\n.system-tag-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 400px;\n\tgap: 8px 0;\n\n\t&__group {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t&__row {\n\t\tmargin-top: 8px;\n\t\tdisplay: flex;\n\t\tgap: 0 4px;\n\t}\n}\n"],sourceRoot:""}]);const l=n}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var s=i[t]={id:t,loaded:!1,exports:{}};return a[t].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=a,t=[],r.O=(e,s,a,i)=>{if(!s){var n=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],i=t[c][2];for(var l=!0,o=0;o<s.length;o++)(!1&i||n>=i)&&Object.keys(r.O).every((t=>r.O[t](s[o])))?s.splice(o--,1):(l=!1,i<n&&(n=i));if(l){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,a,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,s)=>(r.f[s](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{1359:"08b2abcca7c808677f1a",8618:"1e8f15db3b14455fef8f"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},s="nextcloud:",r.l=(t,a,i,n)=>{if(e[t])e[t].push(a);else{var l,o;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var g=d[c];if(g.getAttribute("src")==t||g.getAttribute("data-webpack")==s+i){l=g;break}}l||(o=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",s+i),l.src=t),e[t]=[a];var u=(s,a)=>{l.onerror=l.onload=null,clearTimeout(m);var i=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((t=>t(a))),s)return s(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),o&&document.head.appendChild(l)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=6349,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={6349:0};r.f.j=(e,s)=>{var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var i=new Promise(((s,i)=>a=t[e]=[s,i]));s.push(a[2]=i);var n=r.p+r.u(e),l=new Error;r.l(n,(s=>{if(r.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var i=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,s)=>{var a,i,n=s[0],l=s[1],o=s[2],d=0;if(n.some((e=>0!==t[e]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(o)var c=o(r)}for(e&&e(s);d<n.length;d++)i=n[d],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(c)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),r.nc=void 0;var n=r.O(void 0,[4208],(()=>r(40167)));n=r.O(n)})();
//# sourceMappingURL=systemtags-admin.js.map?v=211cd301787bd76e826d