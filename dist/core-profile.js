/*! For license information please see core-profile.js.LICENSE.txt */
(()=>{"use strict";var e,a,n,r={57965:(e,a,n)=>{var r=n(20144),i=n(33907),o=n(31352),A=n(2324),s=n(17499);const l=null===(d=(0,i.ts)())?(0,s.IY)().setApp("core").build():(0,s.IY)().setApp("core").setUid(d.uid).build();var d,c=n(69183),p=n(17963),C=n(79753),u=n(64024),_=n(75925),v=n.n(_),g=n(12945),m=n.n(g),h=n(76212),f=n.n(h),b=n(41316),x=n(77531),y=n(18294);const k={name:"PrimaryActionButton",props:{disabled:{type:Boolean,default:!1},href:{type:String,required:!0},icon:{type:String,required:!0},target:{type:String,required:!0,validator:t=>["_self","_blank","_parent","_top"].includes(t)}},computed:{colorPrimaryText:()=>getComputedStyle(document.body).getPropertyValue("--color-primary-element-text").trim()}};var w=n(93379),B=n.n(w),E=n(7795),S=n.n(E),D=n(90569),I=n.n(D),P=n(3565),O=n.n(P),U=n(19216),j=n.n(U),z=n(44589),M=n.n(z),Z=n(17617),G={};G.styleTagTransform=M(),G.setAttributes=O(),G.insert=I().bind(null,"head"),G.domAPI=S(),G.insertStyleElement=j(),B()(Z.Z,G),Z.Z&&Z.Z.locals&&Z.Z.locals;var T=n(51900);const W=(0,T.Z)(k,(function(){var t=this,e=t._self._c;return e("a",t._g({staticClass:"profile__primary-action-button",class:{disabled:t.disabled},attrs:{href:t.href,target:t.target,rel:"noopener noreferrer nofollow"}},t.$listeners),[e("img",{staticClass:"icon",class:[t.icon,{"icon-invert":"#ffffff"===t.colorPrimaryText}],attrs:{src:t.icon}}),t._v(" "),t._t("default")],2)}),[],!1,null,"5b5fe9f6",null).exports,Y=(0,p.j)("core","status",{}),{userId:q,displayname:$,address:N,organisation:F,role:L,headline:K,biography:V,actions:H,isUserAvatarVisible:R}=(0,p.j)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1}),J={name:"Profile",components:{AccountIcon:y.Z,NcActionLink:f(),NcActions:m(),NcAvatar:v(),MapMarkerIcon:b.Z,PencilIcon:x.default,PrimaryActionButton:W},data:()=>({status:Y,userId:q,displayname:$,address:N,organisation:F,role:L,headline:K,biography:V,actions:H,isUserAvatarVisible:R,sections:OCA.Core.ProfileSections.getSections()}),computed:{isCurrentUser(){var t;return(null===(t=(0,i.ts)())||void 0===t?void 0:t.uid)===this.userId},allActions(){return this.actions},primaryAction(){return this.allActions.length?this.allActions[0]:null},middleActions(){return this.allActions.slice(1,4).length?this.allActions.slice(1,4):null},otherActions(){return this.allActions.slice(4).length?this.allActions.slice(4):null},settingsUrl:()=>(0,C.generateUrl)("/settings/user"),colorMainBackground:()=>getComputedStyle(document.body).getPropertyValue("--color-main-background").trim(),emptyProfileMessage(){return this.isCurrentUser?t("core","You have not added any info yet"):t("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted(){document.title="".concat(this.displayname||this.userId," - ").concat(document.title),(0,c.Ld)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy(){(0,c.r1)("user_status:status.updated",this.handleStatusUpdate)},methods:{handleStatusUpdate(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal(){const e=document.querySelector(".user-status-menu-item__toggle");this.isCurrentUser&&(e?e.click():(0,u.x2)(t("core","Error opening the user status modal, try hard refreshing the page")))}}};var Q=n(73706),X={};X.styleTagTransform=M(),X.setAttributes=O(),X.insert=I().bind(null,"head"),X.domAPI=S(),X.insertStyleElement=j(),B()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;var tt=n(96148),et={};et.styleTagTransform=M(),et.setAttributes=O(),et.insert=I().bind(null,"head"),et.domAPI=S(),et.insertStyleElement=j(),B()(tt.Z,et),tt.Z&&tt.Z.locals&&tt.Z.locals;const at=(0,T.Z)(J,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile"},[e("div",{staticClass:"profile__header"},[e("div",{staticClass:"profile__header__container"},[e("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),e("h2",{staticClass:"profile__header__container__displayname"},[t._v("\n\t\t\t\t"+t._s(t.displayname||t.userId)+"\n\t\t\t\t"),t.isCurrentUser?e("a",{staticClass:"primary profile__header__container__edit-button",attrs:{href:t.settingsUrl}},[e("PencilIcon",{staticClass:"pencil-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t")],1):t._e()]),t._v(" "),t.status.icon||t.status.message?e("div",{staticClass:"profile__header__container__status-text",class:{interactive:t.isCurrentUser},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openStatusModal.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t")]):t._e()])]),t._v(" "),e("div",{staticClass:"profile__wrapper"},[e("div",{staticClass:"profile__content"},[e("div",{staticClass:"profile__sidebar"},[e("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),e("div",{staticClass:"user-actions"},[t.primaryAction?e("PrimaryActionButton",{staticClass:"user-actions__primary",attrs:{href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"user-actions__other"},[t._l(t.middleActions,(function(a){return e("NcActions",{key:a.id,staticStyle:{"background-position":"14px center","background-size":"16px","background-repeat":"no-repeat"},style:{backgroundImage:"url(".concat(a.icon,")"),..."#181818"===t.colorMainBackground&&{filter:"invert(1)"}},attrs:{"default-icon":a.icon}},[e("NcActionLink",{attrs:{"close-after-click":!0,icon:a.icon,href:a.target,target:"phone"===a.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(a.title)+"\n\t\t\t\t\t\t\t")])],1)})),t._v(" "),t.otherActions?[e("NcActions",{attrs:{"force-menu":!0}},t._l(t.otherActions,(function(a){return e("NcActionLink",{key:a.id,class:{"icon-invert":"#181818"===t.colorMainBackground},attrs:{"close-after-click":!0,icon:a.icon,href:a.target,target:"phone"===a.id?"_self":"_blank"}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(a.title)+"\n\t\t\t\t\t\t\t\t")])})),1)]:t._e()],2)],1)],1),t._v(" "),e("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?e("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?e("div",{staticClass:"detail"},[e("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?e("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?e("div",{staticClass:"detail"},[e("p",[e("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography||t.sections.length>0?[t.headline?e("div",{staticClass:"profile__blocks-headline"},[e("h3",[t._v(t._s(t.headline))])]):t._e(),t._v(" "),t.biography?e("div",{staticClass:"profile__blocks-biography"},[e("p",[t._v(t._s(t.biography))])]):t._e(),t._v(" "),t._l(t.sections,(function(a,n){return e("div",{key:n,ref:"section-"+n,refInFor:!0,staticClass:"profile__additionalContent"},[e(a(t.$refs["section-"+n],t.userId),{tag:"component",attrs:{userId:t.userId}})],1)}))]:[e("div",{staticClass:"profile__blocks-empty-info"},[e("AccountIcon",{attrs:{size:60,"fill-color":"var(--color-text-maxcontrast)"}}),t._v(" "),e("h3",[t._v(t._s(t.emptyProfileMessage))]),t._v(" "),e("p",[t._v(t._s(t.t("core","The headline and about sections will show up here")))])],1)]],2)])])])}),[],!1,null,"aa059862",null).exports;n.nc=btoa((0,i.IH)()),window.OCA||(window.OCA={}),window.OCA.Core||(window.OCA.Core={}),Object.assign(window.OCA.Core,{ProfileSections:new class{constructor(){var t,e,a;t=this,a=void 0,(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e="_sections"))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,this._sections=[]}registerSection(t){this._sections.push(t)}getSections(){return this._sections}}}),r.default.use(A.ZP),r.default.mixin({props:{logger:l},methods:{t:o.Iu}});const nt=r.default.extend(at);window.addEventListener("DOMContentLoaded",(()=>{(new nt).$mount("#vue-profile")}))},17617:(t,e,a)=>{a.d(e,{Z:()=>A});var n=a(87537),r=a.n(n),i=a(23645),o=a.n(i)()(r());o.push([t.id,".profile__primary-action-button[data-v-5b5fe9f6]{font-size:var(--default-font-size);font-weight:bold;width:188px;height:44px;padding:0 16px;line-height:44px;text-align:center;border-radius:var(--border-radius-pill);color:var(--color-primary-element-text);background-color:var(--color-primary-element);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.profile__primary-action-button .icon[data-v-5b5fe9f6]{display:inline-block;vertical-align:middle;margin-bottom:2px;margin-right:4px}.profile__primary-action-button .icon.icon-invert[data-v-5b5fe9f6]{filter:invert(1)}.profile__primary-action-button[data-v-5b5fe9f6]:hover,.profile__primary-action-button[data-v-5b5fe9f6]:focus,.profile__primary-action-button[data-v-5b5fe9f6]:active{background-color:var(--color-primary-element-light)}","",{version:3,sources:["webpack://./core/src/components/Profile/PrimaryActionButton.vue"],names:[],mappings:"AACA,iDACC,kCAAA,CACA,gBAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,uCAAA,CACA,uCAAA,CACA,6CAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,uDACC,oBAAA,CACA,qBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,mEACC,gBAAA,CAIF,sKAGC,mDAAA",sourcesContent:["\n.profile__primary-action-button {\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\twidth: 188px;\n\theight: 44px;\n\tpadding: 0 16px;\n\tline-height: 44px;\n\ttext-align: center;\n\tborder-radius: var(--border-radius-pill);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-primary-element);\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-bottom: 2px;\n\t\tmargin-right: 4px;\n\n\t\t&.icon-invert {\n\t\t\tfilter: invert(1);\n\t\t}\n\t}\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n}\n"],sourceRoot:""}]);const A=o},73706:(t,e,a)=>{a.d(e,{Z:()=>A});var n=a(87537),r=a.n(n),i=a(23645),o=a.n(i)()(r());o.push([t.id,"#header{background-color:rgba(0,0,0,0) !important;background-image:none !important}#content{padding-top:0px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAEA,QACC,yCAAA,CACA,gCAAA,CAGD,SACC,eAAA",sourcesContent:["\n// Override header styles\n#header {\n\tbackground-color: transparent !important;\n\tbackground-image: none !important;\n}\n\n#content {\n\tpadding-top: 0px;\n}\n"],sourceRoot:""}]);const A=o},96148:(t,e,a)=>{a.d(e,{Z:()=>A});var n=a(87537),r=a.n(n),i=a(23645),o=a.n(i)()(r());o.push([t.id,".profile[data-v-aa059862]{width:100%;overflow-y:auto}.profile__header[data-v-aa059862]{position:sticky;height:190px;top:-40px;background-color:var(--color-main-background-blur);backdrop-filter:var(--filter-background-blur);-webkit-backdrop-filter:var(--filter-background-blur)}.profile__header__container[data-v-aa059862]{align-self:flex-end;width:100%;max-width:1024px;margin:0 auto;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-aa059862]{grid-row:1/3}.profile__header__container__displayname[data-v-aa059862],.profile__header__container__status-text[data-v-aa059862]{color:var(--color-main-text)}.profile__header__container__displayname[data-v-aa059862]{width:640px;height:45px;margin-top:128px;margin-bottom:0;font-size:30px;display:flex;align-items:center;cursor:text}.profile__header__container__displayname[data-v-aa059862]:not(:last-child){margin-top:100px;margin-bottom:4px}.profile__header__container__edit-button[data-v-aa059862]{border:none;margin-left:18px;margin-top:2px;color:var(--color-primary-element-text);background-color:var(--color-primary-element);box-shadow:0 0 0 2px var(--color-primary-element);border-radius:var(--border-radius-pill);padding:0 18px;font-size:var(--default-font-size);height:44px;line-height:44px;font-weight:bold}.profile__header__container__edit-button[data-v-aa059862]:hover,.profile__header__container__edit-button[data-v-aa059862]:focus,.profile__header__container__edit-button[data-v-aa059862]:active{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.profile__header__container__edit-button .pencil-icon[data-v-aa059862]{display:inline-block;vertical-align:middle;margin-top:2px}.profile__header__container__status-text[data-v-aa059862]{width:max-content;max-width:640px;padding:5px 10px;margin-left:-12px;margin-top:2px}.profile__header__container__status-text.interactive[data-v-aa059862]{cursor:pointer}.profile__header__container__status-text.interactive[data-v-aa059862]:hover,.profile__header__container__status-text.interactive[data-v-aa059862]:focus,.profile__header__container__status-text.interactive[data-v-aa059862]:active{background-color:var(--color-main-background);color:var(--color-main-text);border-radius:var(--border-radius-pill);font-weight:bold;box-shadow:0 3px 6px var(--color-box-shadow)}.profile__sidebar[data-v-aa059862]{position:sticky;top:var(--header-height);align-self:flex-start;padding-top:20px;min-width:220px;margin:-150px 20px 0 0}.profile__sidebar[data-v-aa059862] .avatar.avatardiv,.profile__sidebar h2[data-v-aa059862]{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-aa059862] .avatar.avatardiv:not(.avatardiv--unknown){background-color:var(--color-main-background) !important;box-shadow:none}.profile__sidebar[data-v-aa059862] .avatar.avatardiv .avatardiv__user-status{right:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status:hover,.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status:focus,.profile__sidebar[data-v-aa059862] .avatar.interactive.avatardiv .avatardiv__user-status:active{box-shadow:0 3px 6px var(--color-box-shadow)}.profile__wrapper[data-v-aa059862]{background-color:var(--color-main-background);min-height:100%}.profile__content[data-v-aa059862]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-aa059862]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-aa059862],.profile__blocks h3[data-v-aa059862]{overflow-wrap:anywhere}.profile__blocks-details[data-v-aa059862]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-aa059862]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-aa059862]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-aa059862]{margin-top:10px}.profile__blocks-headline h3[data-v-aa059862]{font-weight:bold;font-size:20px;margin:0}.profile__blocks-biography[data-v-aa059862]{white-space:pre-line}.profile__blocks h3[data-v-aa059862],.profile__blocks p[data-v-aa059862]{cursor:text}.profile__blocks-empty-info[data-v-aa059862]{margin-top:80px;margin-right:100px;display:flex;flex-direction:column;text-align:center}.profile__blocks-empty-info h3[data-v-aa059862]{font-weight:bold;font-size:18px;margin:8px 0}@media only screen and (max-width: 1024px){.profile__header[data-v-aa059862]{height:250px;position:unset}.profile__header__container[data-v-aa059862]{grid-template-columns:unset}.profile__header__container__displayname[data-v-aa059862]{margin:80px 20px 0px !important;height:1em;width:unset;display:unset;text-align:center}.profile__header__container__edit-button[data-v-aa059862]{width:fit-content;display:block;margin:60px auto}.profile__header__container__status-text[data-v-aa059862]{margin:4px auto}.profile__content[data-v-aa059862]{display:block}.profile__blocks[data-v-aa059862]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__blocks-empty-info[data-v-aa059862]{margin:0}.profile__sidebar[data-v-aa059862]{margin:unset;position:unset}}.user-actions[data-v-aa059862]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-aa059862]{margin:0 auto}.user-actions__other[data-v-aa059862]{display:flex;justify-content:center;gap:0 4px}.user-actions__other a[data-v-aa059862]{filter:var(--background-invert-if-dark)}.icon-invert[data-v-aa059862] .action-link__icon{filter:invert(1)}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAIA,0BACC,UAAA,CACA,eAAA,CAEA,kCACC,eAAA,CACA,YAAA,CACA,SAAA,CACA,kDAAA,CACA,6CAAA,CACA,qDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAlBiB,CAmBjB,aAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,oHACC,4BAAA,CAGD,0DACC,WAjCgB,CAkChB,WAAA,CACA,gBAAA,CAEA,eAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,2EACC,gBAAA,CACA,iBAAA,CAIF,0DACC,WAAA,CACA,gBAAA,CACA,cAAA,CACA,uCAAA,CACA,6CAAA,CACA,iDAAA,CACA,uCAAA,CACA,cAAA,CACA,kCAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CAEA,iMAGC,6CAAA,CACA,mDAAA,CAGD,uEACC,oBAAA,CACA,qBAAA,CACA,cAAA,CAIF,0DACC,iBAAA,CACA,eA/EgB,CAgFhB,gBAAA,CACA,iBAAA,CACA,cAAA,CAEA,sEACC,cAAA,CAEA,qOAGC,6CAAA,CACA,4BAAA,CACA,uCAAA,CACA,gBAAA,CACA,4CAAA,CAOL,mCACC,eAAA,CACA,wBAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,sBAAA,CAGA,2FACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGD,8EACC,wDAAA,CACA,eAAA,CAIA,6EACC,UAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKD,yFACC,cAAA,CAEA,8RAGC,4CAAA,CAMJ,mCACC,6CAAA,CACA,eAAA,CAGD,mCACC,gBA7JkB,CA8JlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WAtKkB,CAwKlB,yEACC,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CAEA,8CACC,gBAAA,CACA,cAAA,CACA,QAAA,CAIF,4CACC,oBAAA,CAGD,yEACC,WAAA,CAGD,6CACC,eAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,gDACC,gBAAA,CACA,cAAA,CACA,YAAA,CAMJ,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CAEA,0DACC,+BAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAGD,0DACC,eAAA,CAKH,mCACC,aAAA,CAGD,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAEA,6CACC,QAAA,CAIF,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAGD,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CACA,wCACC,uCAAA,CAMF,iDACC,gBAAA",sourcesContent:["\n$profile-max-width: 1024px;\n$content-max-width: 640px;\n\n.profile {\n\twidth: 100%;\n\toverflow-y: auto;\n\n\t&__header {\n\t\tposition: sticky;\n\t\theight: 190px;\n\t\ttop: -40px;\n\t\tbackground-color: var(--color-main-background-blur);\n\t\tbackdrop-filter: var(--filter-background-blur);\n\t\t-webkit-backdrop-filter: var(--filter-background-blur);\n\n\t\t&__container {\n\t\t\talign-self: flex-end;\n\t\t\twidth: 100%;\n\t\t\tmax-width: $profile-max-width;\n\t\t\tmargin: 0 auto;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: max-content max-content;\n\t\t\tgrid-template-columns: 240px 1fr;\n\t\t\tjustify-content: center;\n\n\t\t\t&__placeholder {\n\t\t\t\tgrid-row: 1 / 3;\n\t\t\t}\n\n\t\t\t&__displayname, &__status-text {\n\t\t\t\tcolor: var(--color-main-text);\n\t\t\t}\n\n\t\t\t&__displayname {\n\t\t\t\twidth: $content-max-width;\n\t\t\t\theight: 45px;\n\t\t\t\tmargin-top: 128px;\n\t\t\t\t// Override the global style declaration\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tfont-size: 30px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: text;\n\n\t\t\t\t&:not(:last-child) {\n\t\t\t\t\tmargin-top: 100px;\n\t\t\t\t\tmargin-bottom: 4px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__edit-button {\n\t\t\t\tborder: none;\n\t\t\t\tmargin-left: 18px;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tcolor: var(--color-primary-element-text);\n\t\t\t\tbackground-color: var(--color-primary-element);\n\t\t\t\tbox-shadow: 0 0 0 2px var(--color-primary-element);\n\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\tpadding: 0 18px;\n\t\t\t\tfont-size: var(--default-font-size);\n\t\t\t\theight: 44px;\n\t\t\t\tline-height: 44px;\n\t\t\t\tfont-weight: bold;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\t\t\tbackground-color: var(--color-primary-element-light);\n\t\t\t\t}\n\n\t\t\t\t.pencil-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\tmargin-top: 2px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__status-text {\n\t\t\t\twidth: max-content;\n\t\t\t\tmax-width: $content-max-width;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tmargin-left: -12px;\n\t\t\t\tmargin-top: 2px;\n\n\t\t\t\t&.interactive {\n\t\t\t\t\tcursor: pointer;\n\n\t\t\t\t\t&:hover,\n\t\t\t\t\t&:focus,\n\t\t\t\t\t&:active {\n\t\t\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\t\t\tcolor: var(--color-main-text);\n\t\t\t\t\t\tborder-radius: var(--border-radius-pill);\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__sidebar {\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\talign-self: flex-start;\n\t\tpadding-top: 20px;\n\t\tmin-width: 220px;\n\t\tmargin: -150px 20px 0 0;\n\n\t\t// Specificity hack is needed to override Avatar component styles\n\t\t&::v-deep .avatar.avatardiv, h2 {\n\t\t\ttext-align: center;\n\t\t\tmargin: auto;\n\t\t\tdisplay: block;\n\t\t\tpadding: 8px;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv:not(.avatardiv--unknown) {\n\t\t\tbackground-color: var(--color-main-background) !important;\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t&::v-deep .avatar.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tright: 14px;\n\t\t\t\tbottom: 14px;\n\t\t\t\twidth: 34px;\n\t\t\t\theight: 34px;\n\t\t\t\tbackground-size: 28px;\n\t\t\t\tborder: none;\n\t\t\t\t// Styles when custom status icon and status text are set\n\t\t\t\tbackground-color: var(--color-main-background);\n\t\t\t\tline-height: 34px;\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\t\t}\n\n\t\t&::v-deep .avatar.interactive.avatardiv {\n\t\t\t.avatardiv__user-status {\n\t\t\t\tcursor: pointer;\n\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&:active {\n\t\t\t\t\tbox-shadow: 0 3px 6px var(--color-box-shadow);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__wrapper {\n\t\tbackground-color: var(--color-main-background);\n\t\tmin-height: 100%;\n\t}\n\n\t&__content {\n\t\tmax-width: $profile-max-width;\n\t\tmargin: 0 auto;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\t&__blocks {\n\t\tmargin: 18px 0 80px 0;\n\t\tdisplay: grid;\n\t\tgap: 16px 0;\n\t\twidth: $content-max-width;\n\n\t\tp, h3 {\n\t\t\toverflow-wrap: anywhere;\n\t\t}\n\n\t\t&-details {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 2px 0;\n\n\t\t\t.detail {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t\t\tp .map-icon {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&-headline {\n\t\t\tmargin-top: 10px;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&-biography {\n\t\t\twhite-space: pre-line;\n\t\t}\n\n\t\th3, p {\n\t\t\tcursor: text;\n\t\t}\n\n\t\t&-empty-info {\n\t\t\tmargin-top: 80px;\n\t\t\tmargin-right: 100px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttext-align: center;\n\n\t\t\th3 {\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tmargin: 8px 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media only screen and (max-width: 1024px) {\n\t.profile {\n\t\t&__header {\n\t\t\theight: 250px;\n\t\t\tposition: unset;\n\n\t\t\t&__container {\n\t\t\t\tgrid-template-columns: unset;\n\n\t\t\t\t&__displayname {\n\t\t\t\t\tmargin: 80px 20px 0px!important;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\twidth: unset;\n\t\t\t\t\tdisplay: unset;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t&__edit-button {\n\t\t\t\t\twidth: fit-content;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 60px auto;\n\t\t\t\t}\n\n\t\t\t\t&__status-text {\n\t\t\t\t\tmargin: 4px auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t&__blocks {\n\t\t\twidth: unset;\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 20px 50px 50px 50px;\n\n\t\t\t&-empty-info {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t&__sidebar {\n\t\t\tmargin: unset;\n\t\t\tposition: unset;\n\t\t}\n\t}\n}\n\n.user-actions {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px 0;\n\tmargin-top: 20px;\n\n\t&__primary {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__other {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tgap: 0 4px;\n\t\ta {\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t}\n\t}\n}\n\n.icon-invert {\n\t&::v-deep .action-link__icon {\n\t\tfilter: invert(1);\n\t}\n}\n"],sourceRoot:""}]);const A=o}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=r,e=[],o.O=(t,a,n,r)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],r=e[d][2];for(var A=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(o.O).every((t=>o.O[t](a[s])))?a.splice(s--,1):(A=!1,r<i&&(i=r));if(A){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,a)=>(o.f[a](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v=00434e4baa0d8e7b79f1",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a={},n="nextcloud:",o.l=(t,e,r,i)=>{if(a[t])a[t].push(e);else{var A,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+r){A=c;break}}A||(s=!0,(A=document.createElement("script")).charset="utf-8",A.timeout=120,o.nc&&A.setAttribute("nonce",o.nc),A.setAttribute("data-webpack",n+r),A.src=t),a[t]=[e];var p=(e,n)=>{A.onerror=A.onload=null,clearTimeout(C);var r=a[t];if(delete a[t],A.parentNode&&A.parentNode.removeChild(A),r&&r.forEach((t=>t(n))),e)return e(n)},C=setTimeout(p.bind(null,void 0,{type:"timeout",target:A}),12e4);A.onerror=p.bind(null,A.onerror),A.onload=p.bind(null,A.onload),s&&document.head.appendChild(A)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=9651,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={9651:0};o.f.j=(e,a)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=t[e]=[a,r]));a.push(n[2]=r);var i=o.p+o.u(e),A=new Error;o.l(i,(a=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;A.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",A.name="ChunkLoadError",A.type=r,A.request=i,n[1](A)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,a)=>{var n,r,i=a[0],A=a[1],s=a[2],l=0;if(i.some((e=>0!==t[e]))){for(n in A)o.o(A,n)&&(o.m[n]=A[n]);if(s)var d=s(o)}for(e&&e(a);l<i.length;l++)r=i[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},a=self.webpackChunknextcloud=self.webpackChunknextcloud||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})(),o.nc=void 0;var A=o.O(void 0,[7874],(()=>o(57965)));A=o.O(A)})();
//# sourceMappingURL=core-profile.js.map?v=ad9e98c2a0c83e6060cb