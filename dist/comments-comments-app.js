/*! For license information please see comments-comments-app.js.LICENSE.txt */
(()=>{var e,n,o,i={7751:(e,n,o)=>{"use strict";var i=o(53334),s=o(21777),r=o(85471),a=o(85168),c=o(80284),l=o(96763);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(t,e){if(t===e)return!0;if("object"===m(t)){for(var n in t)if(!p(t[n],e[n]))return!1;return!0}return!1}var h=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(n,o)}var e,n;return e=t,n=[{key:"createObserver",value:function(t,e){var n=this;if(this.observer&&this.destroyObserver(),!this.frozen){var o;if(this.options="function"==typeof(o=t)?{callback:o}:o,this.callback=function(t,e){n.options.callback(t,e),t&&n.options.once&&(n.frozen=!0,n.destroyObserver())},this.callback&&this.options.throttle){var i=(this.options.throttleOptions||{}).leading;this.callback=function(t,e){var n,o,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=function(r){for(var a=arguments.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=arguments[l];if(i=c,!n||r!==o){var m=s.leading;"function"==typeof m&&(m=m(r,o)),n&&r===o||!m||t.apply(void 0,[r].concat(u(i))),o=r,clearTimeout(n),n=setTimeout((function(){t.apply(void 0,[r].concat(u(i))),n=0}),e)}};return r._clear=function(){clearTimeout(n),n=null},r}(this.callback,this.options.throttle,{leading:function(t){return"both"===i||"visible"===i&&t||"hidden"===i&&!t}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(t){var e=t[0];if(t.length>1){var o=t.find((function(t){return t.isIntersecting}));o&&(e=o)}if(n.callback){var i=e.isIntersecting&&e.intersectionRatio>=n.threshold;if(i===n.oldResult)return;n.oldResult=i,n.callback(i,e)}}),this.options.intersection),e.context.$nextTick((function(){n.observer&&n.observer.observe(n.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&"number"==typeof this.options.intersection.threshold?this.options.intersection.threshold:0}}],n&&d(e.prototype,n),t}();function A(t,e,n){var o=e.value;if(o)if("undefined"==typeof IntersectionObserver)l.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var i=new h(t,o,n);t._vue_visibilityState=i}}function g(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var f={bind:A,update:function(t,e,n){var o=e.value;if(!p(o,e.oldValue)){var i=t._vue_visibilityState;o?i?i.createObserver(o,n):A(t,{value:o},n):g(t)}},unbind:g},v={version:"1.0.0",install:function(t){t.directive("observe-visibility",f)}},C=null;"undefined"!=typeof window?C=window.Vue:void 0!==o.g&&(C=o.g.Vue),C&&C.use(v);const y=v;var b=o(34196),_=o(54332);const x={name:"RefreshIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var w=o(14486);const k=(0,w.A)(x,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon refresh-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,I={name:"MessageReplyTextIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},T=(0,w.A)(I,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon message-reply-text-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,S={name:"AlertCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},D=(0,w.A)(S,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon alert-circle-outline-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var N=o(89257),O=o(24764),E=o(80114),M=o(41944),R=o(4604),B=o(84237),j=o(80701),H=o(9191),P=o(24325),V=o(11037),$=o(93919),q=o(63814);const z=function(){return(0,q.dC)("dav/comments")};function L(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=new DOMParser;let o=t;for(let t=0;t<e;t++)o=n.parseFromString(o,"text/html").documentElement.textContent;return o}var W=o(65043),G=o(60669);const F=(0,G.UU)(z()),U=t=>{F.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=t?t:""})};(0,s.zo)(U),U((0,s.do)());const Q=F,Y=(0,o(35947).YK)().setApp("comments").detectUser().build();var K=o(96763);const Z={props:{id:{type:Number,default:null},message:{type:String,default:""},resourceId:{type:[String,Number],required:!0},resourceType:{type:String,default:"files"}},data:()=>({deleted:!1,editing:!1,loading:!1}),methods:{onEdit(){this.editing=!0},onEditCancel(){this.editing=!1,this.updateLocalMessage(this.message)},async onEditComment(e){this.loading=!0;try{await async function(t,e,n,o){const i=["",t,e,n].join("/");return await Q.customRequest(i,Object.assign({method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>'.concat(o,"</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")}))}(this.resourceType,this.resourceId,this.id,e),Y.debug("Comment edited",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id,message:e}),this.$emit("update:message",e),this.editing=!1}catch(e){(0,a.Qg)(t("comments","An error occurred while trying to edit the comment")),K.error(e)}finally{this.loading=!1}},onDeleteWithUndo(){this.deleted=!0;const e=setTimeout(this.onDelete,a.Br);(0,a._h)(t("comments","Comment deleted"),(()=>{clearTimeout(e),this.deleted=!1}))},async onDelete(){try{await async function(t,e,n){const o=["",t,e,n].join("/");await Q.deleteFile(o)}(this.resourceType,this.resourceId,this.id),Y.debug("Comment deleted",{resourceType:this.resourceType,resourceId:this.resourceId,id:this.id}),this.$emit("delete",this.id)}catch(e){(0,a.Qg)(t("comments","An error occurred while trying to delete the comment")),K.error(e),this.deleted=!1}},async onNewComment(e){this.loading=!0;try{const t=await async function(t,e,n){const o=["",t,e].join("/"),i=await W.Ay.post(z()+o,{actorDisplayName:(0,s.HW)().displayName,actorId:(0,s.HW)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:n,objectType:t,verb:"comment"}),r=o+"/"+parseInt(i.headers["content-location"].split("/").pop()),a=await Q.stat(r,{details:!0}),c=a.data.props;return c.actorDisplayName=L(c.actorDisplayName,2),c.message=L(c.message,2),a.data}(this.resourceType,this.resourceId,e);Y.debug("New comment posted",{resourceType:this.resourceType,resourceId:this.resourceId,newComment:t}),this.$emit("new",t),this.$emit("update:message",""),this.localMessage=""}catch(e){(0,a.Qg)(t("comments","An error occurred while trying to create the comment")),K.error(e)}finally{this.loading=!1}}}},X={name:"Comment",components:{IconArrowRight:H.A,IconClose:P.A,IconDelete:V.A,IconEdit:$.A,NcActionButton:N.A,NcActions:O.A,NcActionSeparator:E.A,NcAvatar:M.A,NcButton:_.A,NcDateTime:R.A,NcLoadingIcon:B.A,NcRichContenteditable:()=>Promise.all([o.e(4208),o.e(5528)]).then(o.bind(o,95528))},mixins:[j.Ay,Z],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0},tag:{type:String,default:"div"}},data:()=>({expanded:!1,localMessage:"",submitted:!1}),computed:{isOwnComment(){return(0,s.HW)().uid===this.actorId},renderedContent(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage(){return!this.localMessage||""===this.localMessage.trim()},timestamp(){return Date.parse(this.creationDateTime)}},watch:{message(t){this.updateLocalMessage(t)}},beforeMount(){this.updateLocalMessage(this.message)},methods:{t:i.Tl,updateLocalMessage(t){this.localMessage=t.toString(),this.submitted=!1},onSubmit(){if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((()=>{this.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand(){this.expanded=!0}}};var J=o(85072),tt=o.n(J),et=o(97825),nt=o.n(et),ot=o(77659),it=o.n(ot),st=o(55056),rt=o.n(st),at=o(10540),ct=o.n(at),lt=o(41113),mt=o.n(lt),dt=o(88951),ut={};ut.styleTagTransform=mt(),ut.setAttributes=rt(),ut.insert=it().bind(null,"head"),ut.domAPI=nt(),ut.insertStyleElement=ct(),tt()(dt.A,ut),dt.A&&dt.A.locals&&dt.A.locals;const pt=(0,w.A)(X,(function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"show",rawName:"v-show",value:!t.deleted,expression:"!deleted"}],tag:"component",staticClass:"comment",class:{"comment--loading":t.loading}},[e("div",{staticClass:"comment__side"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":t.actorDisplayName,user:t.actorId,size:32}})],1),t._v(" "),e("div",{staticClass:"comment__body"},[e("div",{staticClass:"comment__header"},[e("span",{staticClass:"comment__author"},[t._v(t._s(t.actorDisplayName))]),t._v(" "),t.isOwnComment&&t.id&&!t.loading?e("NcActions",{staticClass:"comment__actions"},[t.editing?e("NcActionButton",{on:{click:t.onEditCancel},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconClose",{attrs:{size:20}})]},proxy:!0}],null,!1,2888946197)},[t._v("\n\t\t\t\t\t"+t._s(t.t("comments","Cancel edit"))+"\n\t\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onEdit},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,649782975)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Edit comment"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionSeparator"),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":""},on:{click:t.onDeleteWithUndo},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDelete",{attrs:{size:20}})]},proxy:!0}],null,!1,881161434)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("comments","Delete comment"))+"\n\t\t\t\t\t")])]],2):t._e(),t._v(" "),t.id&&t.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):t.creationDateTime?e("NcDateTime",{staticClass:"comment__timestamp",attrs:{timestamp:t.timestamp,"ignore-seconds":!0}}):t._e()],1),t._v(" "),t.editor||t.editing?e("form",{staticClass:"comment__editor",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"comment__editor-group"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":t.autoComplete,contenteditable:!t.loading,label:t.editor?t.t("comments","New comment"):t.t("comments","Edit comment"),placeholder:t.t("comments","Write a comment …"),value:t.localMessage,"user-data":t.userData,"aria-describedby":"tab-comments__editor-description"},on:{"update:value":t.updateLocalMessage,submit:t.onSubmit}}),t._v(" "),e("div",{staticClass:"comment__submit"},[e("NcButton",{attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":t.t("comments","Post comment"),disabled:t.isEmptyMessage},on:{click:t.onSubmit},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("IconArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,758946661)})],1)],1),t._v(" "),e("div",{staticClass:"comment__editor-description",attrs:{id:"tab-comments__editor-description"}},[t._v("\n\t\t\t\t"+t._s(t.t("comments","@ for mentions, : for emoji, / for smart picker"))+"\n\t\t\t")])]):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":t.expanded},domProps:{innerHTML:t._s(t.renderedContent)},on:{click:t.onExpand}})])])}),[],!1,null,"4372eeea",null).exports;var ht=o(29999),At=o(90176);const gt=async function(t,e){var n;let{resourceType:o,resourceId:i}=t;const s=["",o,i].join("/"),r=e.datetime?"<oc:datetime>".concat(e.datetime.toISOString(),"</oc:datetime>"):"",a=await Q.customRequest(s,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(null!==(n=e.limit)&&void 0!==n?n:20,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(e.offset||0,"</oc:offset>\n\t\t\t\t").concat(r,"\n\t\t\t</oc:filter-comments>")},e)),c=await a.text(),l=await(0,G.h4)(c),m=ft(l,!0);return(0,ht.hq)(a,m,!0)},ft=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:n}}=t;return n.map((t=>{const n=t.propstat.prop;return(0,At.ch)(n,n.id.toString(),e)}))};var vt=o(32981);const Ct=(0,r.pM)({props:{resourceId:{type:Number,required:!0},resourceType:{type:String,default:"files"}},data:()=>({editorData:{actorDisplayName:(0,s.HW)().displayName,actorId:(0,s.HW)().uid,key:"editor"},userData:{}}),methods:{async autoComplete(t,e){const{data:n}=await W.Ay.get((0,q.KT)("core/autocomplete/get"),{params:{search:t,itemType:"files",itemId:this.resourceId,sorter:"commenters|share-recipients",limit:(0,vt.C)("comments","maxAutoCompleteResults")}});return n.ocs.data.forEach((t=>{this.userData[t.id]=t})),e(Object.values(this.userData))},genMentionsData(t){return Object.values(t).flat().forEach((t=>{var e;this.userData[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(null===(e=(0,s.HW)())||void 0===e?void 0:e.uid)===t.mentionId}})),this.userData}}});var yt=o(96763);r.Ay.use(c.Ay),r.Ay.use(y);const bt={name:"Comments",components:{Comment:pt,NcEmptyContent:b.A,NcButton:_.A,RefreshIcon:k,MessageReplyTextIcon:T,AlertCircleOutlineIcon:D},mixins:[Ct],data(){return{error:"",loading:!1,done:!1,currentResourceId:this.resourceId,offset:0,comments:[],cancelRequest:()=>{},Comment:pt,userData:{}}},computed:{hasComments(){return this.comments.length>0},isFirstLoading(){return this.loading&&0===this.offset}},watch:{resourceId(){this.currentResourceId=this.resourceId}},methods:{t:i.Tl,async onVisibilityChange(t){if(t)try{await((t,e,n)=>{const o=["",t,e].join("/"),i=n.toUTCString();return Q.customRequest(o,{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:readMarker>'.concat(i,"</oc:readMarker>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")})})(this.resourceType,this.currentResourceId,new Date)}catch(t){(0,a.Qg)(t.message||(0,i.Tl)("comments","Failed to mark comments as read"))}},async update(t){this.currentResourceId=t,this.resetState(),this.getComments()},onScrollBottomReached(){this.error||this.done||this.loading||this.getComments()},async getComments(){this.cancelRequest("cancel");try{this.loading=!0,this.error="";const{request:t,abort:e}=function(t){const e=new AbortController,n=e.signal;return{request:async function(e,o){return await t(e,Object.assign({signal:n},o))},abort:()=>e.abort()}}(gt);this.cancelRequest=e;const{data:n}=await t({resourceType:this.resourceType,resourceId:this.currentResourceId},{offset:this.offset})||{data:[]};this.logger.debug("Processed ".concat(n.length," comments"),{comments:n}),n.length<20&&(this.done=!0),this.comments.push(...n),this.offset+=20}catch(t){if("cancel"===t.message)return;this.error=(0,i.Tl)("comments","Unable to load the comments list"),yt.error("Error loading the comments list",t)}finally{this.loading=!1}},onNewComment(t){this.comments.unshift(t)},onDelete(t){const e=this.comments.findIndex((e=>e.props.id===t));e>-1?this.comments.splice(e,1):yt.error("Could not find the deleted comment in the list",t)},resetState(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}};var _t=o(18604),xt={};xt.styleTagTransform=mt(),xt.setAttributes=rt(),xt.insert=it().bind(null,"head"),xt.domAPI=nt(),xt.insertStyleElement=ct(),tt()(_t.A,xt),_t.A&&_t.A.locals&&_t.A.locals;const wt=(0,w.A)(bt,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"comments",class:{"icon-loading":t.isFirstLoading}},[e("Comment",t._b({staticClass:"comments__writer",attrs:{"auto-complete":t.autoComplete,"resource-type":t.resourceType,editor:!0,"user-data":t.userData,"resource-id":t.currentResourceId},on:{new:t.onNewComment}},"Comment",t.editorData,!1)),t._v(" "),t.isFirstLoading?t._e():[!t.hasComments&&t.done?e("NcEmptyContent",{staticClass:"comments__empty",attrs:{name:t.t("comments","No comments yet, start the conversation!")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("MessageReplyTextIcon")]},proxy:!0}],null,!1,1033639148)}):e("ul",t._l(t.comments,(function(n){return e("Comment",t._b({key:n.props.id,staticClass:"comments__list",attrs:{tag:"li","auto-complete":t.autoComplete,"resource-type":t.resourceType,message:n.props.message,"resource-id":t.currentResourceId,"user-data":t.genMentionsData(n.props.mentions)},on:{"update:message":function(e){return t.$set(n.props,"message",e)},delete:t.onDelete}},"Comment",n.props,!1))})),1),t._v(" "),t.loading&&!t.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):t.hasComments&&t.done?e("div",{staticClass:"comments__info"},[t._v("\n\t\t\t"+t._s(t.t("comments","No more messages"))+"\n\t\t")]):t.error?[e("NcEmptyContent",{staticClass:"comments__error",attrs:{name:t.error},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircleOutlineIcon")]},proxy:!0}],null,!1,66050004)}),t._v(" "),e("NcButton",{staticClass:"comments__retry",on:{click:t.getComments},scopedSlots:t._u([{key:"icon",fn:function(){return[e("RefreshIcon")]},proxy:!0}],null,!1,3924573781)},[t._v("\n\t\t\t\t"+t._s(t.t("comments","Retry"))+"\n\t\t\t")])]:t._e()]],2)}),[],!1,null,"fac4b554",null).exports;o.nc=btoa((0,s.do)()),r.Ay.mixin({data:()=>({logger:Y}),methods:{t:i.Tl,n:i.zw}});var kt=o(96763);window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:class{constructor(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n={...n,propsData:{...null!==(t=n.propsData)&&void 0!==t?t:{},resourceType:e}},new(r.Ay.extend(wt))(n)}}}),kt.debug("OCA.Comments.View initialized")},88951:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var o=n(71354),i=n.n(o),s=n(76314),r=n.n(s)()(i());r.push([t.id,".comment[data-v-4372eeea]{display:flex;gap:8px;padding:5px 10px}.comment__side[data-v-4372eeea]{display:flex;align-items:flex-start;padding-top:6px}.comment__body[data-v-4372eeea]{display:flex;flex-grow:1;flex-direction:column}.comment__header[data-v-4372eeea]{display:flex;align-items:center;min-height:44px}.comment__actions[data-v-4372eeea]{margin-left:10px !important}.comment__author[data-v-4372eeea]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-4372eeea],.comment__timestamp[data-v-4372eeea]{margin-left:auto;text-align:right;white-space:nowrap;color:var(--color-text-maxcontrast)}.comment__editor-group[data-v-4372eeea]{position:relative}.comment__editor-description[data-v-4372eeea]{color:var(--color-text-maxcontrast);padding-block:var(--default-grid-baseline)}.comment__submit[data-v-4372eeea]{position:absolute !important;bottom:0;right:0}.comment__message[data-v-4372eeea]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden;margin-top:-6px}.comment__message--expanded[data-v-4372eeea]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-4372eeea]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAKA,0BACC,YAAA,CACA,OAAA,CACA,gBAAA,CAEA,gCACC,YAAA,CACA,sBAAA,CACA,eAAA,CAGD,gCACC,YAAA,CACA,WAAA,CACA,qBAAA,CAGD,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CAGD,mCACC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,gBAAA,CACA,kBAAA,CACA,mCAAA,CAGD,wCACC,iBAAA,CAGD,8CACC,mCAAA,CACA,0CAAA,CAGD,kCACC,4BAAA,CACA,QAAA,CACA,OAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA3EiB",sourcesContent:['\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tdisplay: flex;\n\tgap: 8px;\n\tpadding: 5px $comment-padding;\n\n\t&__side {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tpadding-top: 6px;\n\t}\n\n\t&__body {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-direction: column;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t}\n\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\ttext-align: right;\n\t\twhite-space: nowrap;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__editor-group {\n\t\tposition: relative;\n\t}\n\n\t&__editor-description {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tpadding-block: var(--default-grid-baseline);\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tbottom: 0;\n\t\tright: 0;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\tmargin-top: -6px;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]);const a=r},18604:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var o=n(71354),i=n.n(o),s=n(76314),r=n.n(s)()(i());r.push([t.id,".comments[data-v-fac4b554]{min-height:100%;display:flex;flex-direction:column}.comments__empty[data-v-fac4b554],.comments__error[data-v-fac4b554]{flex:1 0}.comments__retry[data-v-fac4b554]{margin:0 auto}.comments__info[data-v-fac4b554]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AACA,2BACC,eAAA,CACA,YAAA,CACA,qBAAA,CAEA,oEAEC,QAAA,CAGD,kCACC,aAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n.comments {\n\tmin-height: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__empty,\n\t&__error {\n\t\tflex: 1 0;\n\t}\n\n\t&__retry {\n\t\tmargin: 0 auto;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]);const a=r},42634:()=>{},15340:()=>{},79838:()=>{}},s={};function r(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,loaded:!1,exports:{}};return i[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=i,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(m=0;m<e.length;m++){n=e[m][0],o=e[m][1],i=e[m][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(m--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[n,o,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{4254:"5c2324570f66dff0c8a1",5528:"231caad2efb966b857ef",9480:"419dcd686610813eaa23"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},o="nextcloud:",r.l=(t,e,i,s)=>{if(n[t])n[t].push(e);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),m=0;m<l.length;m++){var d=l[m];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+i){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+i),a.src=t),n[t]=[e];var u=(e,o)=>{a.onerror=a.onload=null,clearTimeout(p);var i=n[t];if(delete n[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(o))),e)return e(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=7062,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={7062:0};r.f.j=(e,n)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,i)=>o=t[e]=[n,i]));n.push(o[2]=i);var s=r.p+r.u(e),a=new Error;r.l(s,(n=>{if(r.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,s=n[0],a=n[1],c=n[2],l=0;if(s.some((e=>0!==t[e]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var m=c(r)}for(e&&e(n);l<s.length;l++)i=s[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(m)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var a=r.O(void 0,[4208],(()=>r(7751)));a=r.O(a)})();
//# sourceMappingURL=comments-comments-app.js.map?v=0f39928c7938bcfabe9e