import{aE as x,a as y,aO as S,K as H,c7 as k,w as t,c as z,h as p,m as e,o as R,j as B,q as C,B as E,k as L,s as m,bz as u,be as T}from"./index.314cb164.js";import{u as $}from"./useWindowSizeFn.871352f3.js";import{a as N}from"./useContentViewHeight.233b7170.js";const V=["src"],W=y({__name:"frameSrc",props:{frameSrc:S.string.def("")},setup(j){const{meta:D,query:a}=H(),{setTitle:g}=k(),i=t(!0),h=t(50),o=t(window.innerHeight),r=t(),{headerHeightRef:_}=N(),c=t(""),{prefixCls:d}=z("iframe-page");$(f,150,{immediate:!0});const v=p(()=>(a==null?void 0:a.url)||"https://so.com"),l=p(()=>({height:`${e(o)}px`}));function f(){const s=e(r);if(!s)return;const n=_.value;h.value=n,o.value=window.innerHeight-n;const w=document.documentElement.clientHeight-n;s.style.height=`${w}px`,c.value=(a==null?void 0:a.title)||document.title,g(c.value)}function b(){i.value=!1,f()}return(s,n)=>(R(),B("div",{class:m(e(d)),style:u(e(l))},[C(e(T),{spinning:i.value,size:"large",style:u(e(l))},{default:E(()=>[L("iframe",{src:e(v),class:m(`${e(d)}__main`),ref_key:"frameRef",ref:r,onLoad:b},null,42,V)]),_:1},8,["spinning","style"])],6))}});var O=x(W,[["__scopeId","data-v-3dafa772"]]);export{O as default};