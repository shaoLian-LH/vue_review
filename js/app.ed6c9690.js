(function(e){function t(t){for(var c,r,s=t[0],i=t[1],d=t[2],u=0,b=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue_review/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"156f":function(e,t,n){},"19d3":function(e,t,n){},2150:function(e,t,n){"use strict";n("19d3")},"2ac8":function(e,t,n){},3303:function(e,t,n){"use strict";n("d1cd")},"42e4":function(e,t,n){"use strict";n("2ac8")},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=a,e.exports=o,o.id="4678"},"4da2":function(e,t,n){"use strict";n("5c31")},"5c31":function(e,t,n){},"5ca9":function(e,t,n){},"848e":function(e,t,n){"use strict";n("e078")},"91bb":function(e,t,n){"use strict";n("156f")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(e,t){var n=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(n)}n("3303");const a={};a.render=o;var r=a,s=(n("c975"),n("6c02")),i={class:"basic-layout-wrapper"};function d(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])("div",i,[Object(c["createVNode"])(s)])}var l={};n("2150");l.render=d;var u=l,b={key:0,class:"logo"},j={key:1,class:"logo"},f=Object(c["createVNode"])("span",null,"列表页",-1),p=Object(c["createTextVNode"])("登出");function m(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("user-outlined"),i=Object(c["resolveComponent"])("a-menu-item"),d=Object(c["resolveComponent"])("a-menu"),l=Object(c["resolveComponent"])("a-layout-sider"),u=Object(c["resolveComponent"])("menu-unfold-outlined"),m=Object(c["resolveComponent"])("menu-fold-outlined"),O=Object(c["resolveComponent"])("a-button"),h=Object(c["resolveComponent"])("a-layout-header"),v=Object(c["resolveComponent"])("router-view"),k=Object(c["resolveComponent"])("a-layout-content"),y=Object(c["resolveComponent"])("a-layout");return Object(c["openBlock"])(),Object(c["createBlock"])(y,{id:"components-layout-custom-trigger"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{collapsed:e.collapsed,"onUpdate:collapsed":t[2]||(t[2]=function(t){return e.collapsed=t}),trigger:null,collapsible:""},{default:Object(c["withCtx"])((function(){return[e.collapsed?(Object(c["openBlock"])(),Object(c["createBlock"])("div",b,"L")):(Object(c["openBlock"])(),Object(c["createBlock"])("div",j,"LOGO")),Object(c["createVNode"])(d,{theme:"dark",mode:"inline",selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=function(t){return e.selectedKeys=t})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{style:{"margin-top":"15px"},key:"dashboard"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s),f]})),_:1})]})),_:1},8,["selectedKeys"])]})),_:1},8,["collapsed"]),Object(c["createVNode"])(y,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{style:{background:"#fff"}},{default:Object(c["withCtx"])((function(){return[e.collapsed?(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:0,class:"trigger",onClick:e.changeCollapsed},null,8,["onClick"])):(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:1,class:"trigger",onClick:e.changeCollapsed},null,8,["onClick"])),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("span",null,Object(c["toDisplayString"])("admin"===e.identity?"管理员":"kaopuyun"),1),Object(c["createVNode"])(O,{type:"link",size:"small",onClick:e.logout},{default:Object(c["withCtx"])((function(){return[p]})),_:1},8,["onClick"])])]})),_:1}),Object(c["createVNode"])(k,{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v)]})),_:1})]})),_:1})]})),_:1})}var O=n("5502"),h=n("edc4"),v=n("3e17"),k=n("fdf4"),y=n("f64c"),g=Object(c["defineComponent"])({components:{UserOutlined:h["a"],MenuUnfoldOutlined:v["a"],MenuFoldOutlined:k["a"]},setup:function(){var e=Object(O["b"])(),t=Object(s["c"])(),n=e.getters.isValidate,o=Object(c["ref"])(!1),a=function(){o.value=!o.value};n||(y["a"].error("未知身份"),setTimeout((function(){y["a"].destroy()}),1e3),t.push("/"));var r=Object(c["computed"])((function(){return e.state.identity})),i=function(){e.dispatch("logout").then((function(){y["a"].info("成功登出"),setTimeout((function(){y["a"].destroy()}),1e3),t.push("/")}))};return{selectedKeys:["dashboard"],collapsed:o,isValidate:n,identity:r,logout:i,changeCollapsed:a}}});n("848e");g.render=m;var C=g,x={class:"login-wrapper"},w=Object(c["createTextVNode"])(" 以 Admin 身份登录 "),V=Object(c["createTextVNode"])(" 以 kaopuyun 身份登录 ");function N(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("a-button"),i=Object(c["resolveComponent"])("a-card");return Object(c["openBlock"])(),Object(c["createBlock"])("div",x,[Object(c["createVNode"])(i,{title:"选择身份",style:{width:"520px",height:"230px"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(s,{class:"login-btn",type:"primary",size:"large",onClick:t[1]||(t[1]=function(t){return e.loginAction("admin")})},{default:Object(c["withCtx"])((function(){return[w]})),_:1}),Object(c["createVNode"])(s,{class:"login-btn",type:"primary",size:"large",onClick:t[2]||(t[2]=function(t){return e.loginAction("kaopuyun")})},{default:Object(c["withCtx"])((function(){return[V]})),_:1})]})),_:1})])}var z=Object(c["defineComponent"])({name:"Login",setup:function(){var e=Object(O["b"])(),t=Object(s["c"])(),n=function(n){e.dispatch("login",n).then((function(){y["a"].success("登录成功!",100),setTimeout((function(){t.push("/dashboard"),y["a"].destroy()}),500)}))};return{loginAction:n}}});n("42e4");z.render=N;var B=z,_={class:"common-list-wrapper"},A=Object(c["createTextVNode"])("查看详情");function L(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("a-button"),i=Object(c["resolveComponent"])("a-table");return Object(c["openBlock"])(),Object(c["createBlock"])("div",_,[Object(c["createVNode"])(i,{columns:e.columns,"data-source":e.data,rowKey:"id"},{action:Object(c["withCtx"])((function(t){var n=t.record;return[Object(c["createVNode"])("span",null,[Object(c["createVNode"])(s,{type:"link",size:"small",disabled:!e.isAdmin,onClick:function(t){return e.goDetail(n.id)}},{default:Object(c["withCtx"])((function(){return[A]})),_:2},1032,["disabled","onClick"])])]})),_:1},8,["columns","data-source"])])}var T=[{title:"时间",dataIndex:"time",key:"time"},{title:"终局",dataIndex:"end",key:"end"},{title:"排名",dataIndex:"rank",key:"rank"},{title:"点数",key:"point",dataIndex:"point"},{title:"操作",key:"action",slots:{customRender:"action"}}],U=Object(c["defineComponent"])({name:"commonList",setup:function(){var e=Object(O["b"])(),t=Object(c["computed"])((function(){return e.getters.isAdmin})),n=e.getters.dataArr,o=Object(s["c"])(),a=function(e){o.push("/dashboard/detail/".concat(e))};return{isAdmin:t,columns:T,data:n,goDetail:a}}});n("efed");U.render=L;var I=U,M={class:"detail-wrapper"},S={class:"detail-header"},D=Object(c["createTextVNode"])("返回"),K={ref:"chartsdom",style:{width:"1200px",height:"600px"}};function P(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("backward-outlined"),i=Object(c["resolveComponent"])("a-button");return Object(c["openBlock"])(),Object(c["createBlock"])("div",M,[Object(c["createVNode"])("div",S,[Object(c["createVNode"])(s,{style:{"padding-top":"4px"}}),Object(c["createVNode"])(i,{type:"link",size:"small",onClick:e.goBack},{default:Object(c["withCtx"])((function(){return[D]})),_:1},8,["onClick"])]),Object(c["createVNode"])("div",K,null,512)])}var E=n("a0d9"),q=n("313e"),F=Object(c["defineComponent"])({name:"commonDetail",components:{BackwardOutlined:E["a"]},setup:function(){var e=Object(s["c"])(),t=function(){e.push("/dashboard/commonList")},n=Object(c["ref"])(null),o=null,a=function(){o=Object(q["init"])(n.value);var e={title:{text:"最近排名"},legend:{data:["排名"]},xAxis:{type:"category",data:["2021年1月1日 19:35:26","2021年1月2日 19:35:26","2021年1月3日 19:35:26","2021年1月4日 19:35:26","2021年1月5日 19:35:26","2021年1月6日 19:35:26"]},yAxis:{inverse:!0,scale:!0,minInterval:1,axisLabel:{formatter:"第{value}位"}},tooltip:{},series:[{name:"排名",type:"line",data:[1,4,3,2,3,4]}]};o&&o.setOption(e)};return Object(c["onMounted"])((function(){a()})),Object(c["onBeforeUnmount"])((function(){o&&o.clear()})),{goBack:t,chartsdom:n}}});n("91bb");F.render=P;var J=F,G={class:"not-found"},H=Object(c["createVNode"])("span",null,"404",-1),R=Object(c["createTextVNode"])("返回首页");function Q(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",G,[Object(c["createVNode"])("div",null,[H,Object(c["createVNode"])(s,{to:"/"},{default:Object(c["withCtx"])((function(){return[R]})),_:1})])])}var W={};n("4da2");W.render=Q;var X=W,Y=n("323e"),Z=n.n(Y),$=(n("a5d8"),n("4de4"),Object(O["a"])({state:{identity:"unkown",data:[{id:"1",time:"2021年1月1日 19:35:26",end:"南风四",rank:"1",point:"52800"},{id:"2",time:"2021年1月2日 19:35:26",end:"东风一",rank:"4",point:"-11000"},{id:"3",time:"2021年1月3日 19:35:26",end:"南风二",rank:"3",point:"28800"},{id:"4",time:"2021年1月4日 19:35:26",end:"东风三",rank:"2",point:"36400"},{id:"5",time:"2021年1月5日 19:35:26",end:"东风一",rank:"4",point:"25000"}]},mutations:{setUserIdentity:function(e,t){e.identity=t},clearStore:function(e){e.identity="unkown"}},actions:{login:function(e,t){var n=e.commit;"admin"!==t&&"kaopuyun"!==t&&(t="unkown"),n("setUserIdentity",t)},logout:function(e){var t=e.commit;t("clearStore")}},getters:{isValidate:function(e){return"unkown"!==e.identity},isAdmin:function(e){return"admin"===e.identity},dataArr:function(e){return e.data},dataById:function(e){return function(t){var n=e.data,c=n.filter((function(e){if(e.id&&e.id===t)return e}));return c}}},modules:{}})),ee=[{path:"/",name:"basiclayout",component:u,redirect:"/login",children:[{path:"/login",name:"Login",component:B}]},{path:"/dashboard",name:"userLayout",component:C,redirect:"/dashboard/commonList",meta:{title:"登录后可查看",roles:["admin","kaopuyun"]},children:[{path:"/dashboard/commonList",name:"commonList",component:I},{path:"/dashboard/detail/:id",name:"commonDetail",component:J,meta:{title:"管理员可查看",roles:["admin"]}}]},{path:"/:catchAll(.*)",name:"404",component:X}],te=Object(s["a"])({history:Object(s["b"])(),routes:ee});te.beforeEach((function(e,t,n){if(Z.a.start(),e.meta.roles){var c=e.meta.roles,o=$.state.identity;-1!==c.indexOf(o)?n():(y["a"].error("权限不足"),n({path:"/"}),Z.a.done())}else n()})),te.afterEach((function(){Z.a.done()}));var ne=te,ce=n("cdeb"),oe=n("5efb"),ae=n("98c5"),re=n("55f1"),se=n("0020");n("2fbf");Object(c["createApp"])(r).use($).use(ne).use(ce["a"]).use(oe["a"]).use(ae["a"]).use(re["a"]).use(se["a"]).mount("#shaolian")},d1cd:function(e,t,n){},e078:function(e,t,n){},efed:function(e,t,n){"use strict";n("5ca9")}});
//# sourceMappingURL=app.ed6c9690.js.map