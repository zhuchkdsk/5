var F=Object.defineProperty;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&f(t,o,e[o]);if(l)for(var o of l(e))b.call(e,o)&&f(t,o,e[o]);return t};var c=(t,e,o)=>new Promise((r,i)=>{var m=s=>{try{a(o.next(s))}catch(n){i(n)}},p=s=>{try{a(o.throw(s))}catch(n){i(n)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(m,p);a((o=o.apply(t,e)).next())});import{B as v,t as S}from"./useForm.15613cdc.js";import{b as _}from"./data.c645d3fc.js";import{U as B,g as w}from"./user.987aa398.js";import{aE as y,a as U,i as C,w as O,O as R,aG as $,c1 as E,y as I,o as M,l as k,G as D}from"./index.314cb164.js";import"./index.05a83db7.js";import"./index.d86be4eb.js";import"./_baseIteratee.fd1a2cd7.js";import"./get.96830a59.js";import"./useSize.7ea8df22.js";import"./index.f3ab6787.js";import"./index.b5d67dff.js";import"./index.0919dd1a.js";import"./index.f71492b4.js";import"./index.30d3c472.js";import"./index.f58a858b.js";import"./eagerComputed.40a2d445.js";import"./transButton.e721f95b.js";import"./index.c6f2c71e.js";import"./useWindowSizeFn.871352f3.js";import"./FullscreenOutlined.be23287c.js";import"./useRefs.57282ad5.js";import"./download.79fb128a.js";import"./index.1194be5e.js";import"./index.eae0d10d.js";import"./uniqBy.8ff2060d.js";const G=U({components:{BasicForm:v},setup(){const t=C(),e=t.getUserInfo||{},{createMessage:o}=D(),r=O(!1),[i,{setFieldsValue:m,updateSchema:p,resetFields:a,validate:s}]=S({labelWidth:240,baseColProps:{span:24},schemas:_,showSubmitButton:!0,actionColOptions:{span:23},submitButtonOptions:{text:"OK"}});R(()=>c(this,null,function*(){yield m(d({},e))}));function n(u){return c(this,null,function*(){r.value=!0,yield B(u).then(()=>c(this,null,function*(){const g=yield w();t.setUserInfo(g),o.warning("\u4FEE\u6539\u6210\u529F"),r.value=!1})).finally(()=>{r.value=!1})})}return{registerForm:i,handleSubmit:n,userinfo:e,loadingRef:r}}});function x(t,e,o,r,i,m){const p=$("BasicForm"),a=E("loading");return I((M(),k(p,{onRegister:t.registerForm,onSubmit:t.handleSubmit},null,8,["onRegister","onSubmit"])),[[a,t.loadingRef]])}var po=y(G,[["render",x]]);export{po as default};
