import{aE as L,a as M,cQ as I,bk as w,bF as b,aO as $,c as E,e as U,i as N,b1 as O,h as P,aG as r,o as n,j as S,q as t,B as m,l as h,n as g,k as a,s,t as A,F as B}from"./index.314cb164.js";import{c as C,u as V}from"./index.bad22820.js";import{u as F}from"./index.c6f2c71e.js";import{h as R}from"./header.d801b988.js";import"./FullscreenOutlined.be23287c.js";import"./index.77a4b66f.js";import"./useWindowSizeFn.871352f3.js";import"./useContentViewHeight.233b7170.js";import"./uniqBy.8ff2060d.js";import"./_baseIteratee.fd1a2cd7.js";import"./get.96830a59.js";import"./index.c1f39743.js";import"./useRefs.57282ad5.js";import"./RedoOutlined.4270a312.js";import"./lock.2900f517.js";const z=M({name:"UserDropdown",components:{Dropdown:I,Menu:w,MenuItem:C(()=>b(()=>import("./DropMenuItem.df507126.js"),["assets/DropMenuItem.df507126.js","assets/index.314cb164.js","assets/index.02f2d2be.css"])),MenuDivider:w.Divider,LockAction:C(()=>b(()=>import("./LockModal.d00d2be5.js"),["assets/LockModal.d00d2be5.js","assets/LockModal.0068f88c.css","assets/index.314cb164.js","assets/index.02f2d2be.css","assets/index.c6f2c71e.js","assets/index.27ee24a6.css","assets/useWindowSizeFn.871352f3.js","assets/FullscreenOutlined.be23287c.js","assets/useForm.15613cdc.js","assets/useForm.ec62b839.css","assets/index.05a83db7.js","assets/index.5f63745a.css","assets/index.d86be4eb.js","assets/index.a18cc309.css","assets/_baseIteratee.fd1a2cd7.js","assets/get.96830a59.js","assets/useSize.7ea8df22.js","assets/index.f3ab6787.js","assets/index.f67ccf1b.css","assets/index.b5d67dff.js","assets/index.5d5186e9.css","assets/index.0919dd1a.js","assets/index.c9fe752a.css","assets/index.f71492b4.js","assets/index.7d114a34.css","assets/index.30d3c472.js","assets/index.9ad3837e.css","assets/index.f58a858b.js","assets/index.7b8b5e30.css","assets/eagerComputed.40a2d445.js","assets/transButton.e721f95b.js","assets/useRefs.57282ad5.js","assets/download.79fb128a.js","assets/index.1194be5e.js","assets/index.cb030764.css","assets/index.eae0d10d.js","assets/uniqBy.8ff2060d.js","assets/lock.2900f517.js","assets/header.d801b988.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=E("header-user-dropdown"),{t:f}=U(),{getShowDoc:_,getUseLockPage:v}=V(),d=N(),k=O(),o=P(()=>{const{realName:c="",avatar:D,desc:x}=d.getUserInfo||{};return{realName:c,avatar:D||R,desc:x}}),[i,{openModal:p}]=F();function l(){p(!0)}function u(){d.confirmLoginOut()}function y(c){switch(c.key){case"logout":u();break;case"edtPassWord":k("/profile/password");break;case"lock":l();break}}return{prefixCls:e,t:f,getUserInfo:o,handleMenuClick:y,getShowDoc:_,register:i,getUseLockPage:v}}}),T=["src"];function G(e,f,_,v,d,k){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),u=r("LockAction");return n(),S(B,null,[t(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(p,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(n(),h(o,{key:"edtPassWord",text:e.t("lang.\u4FEE\u6539\u5BC6\u7801"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(n(),h(i,{key:1})):g("",!0),e.getUseLockPage?(n(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,T),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(u,{onRegister:e.register},null,8,["onRegister"])],64)}var ae=L(z,[["render",G]]);export{ae as default};