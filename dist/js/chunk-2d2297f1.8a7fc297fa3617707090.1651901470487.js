(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2297f1"],{de60:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("Card",{attrs:{shadow:""}},[e("p",{staticStyle:{"text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("订单统计")]),e("ChartBar",{staticStyle:{height:"400px"},attrs:{action:"dingdan"}})],1),e("Card",{attrs:{shadow:""}},[e("p",{staticStyle:{"text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("漏单统计")]),e("ChartBar",{staticStyle:{height:"400px"},attrs:{action:"loudan"}})],1),e("Card",{attrs:{shadow:""}},[e("p",{staticStyle:{"text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v("佣金统计("+t._s(t.userInfo.score)+"元)")]),e("ChartBar",{staticStyle:{height:"400px"},attrs:{action:"yongjin"}})],1)],1)},r=[],n=e("c9ae"),i={name:"",components:{ChartBar:n["a"]},data(){return{userInfo:{}}},computed:{},created(){let t=this,a=JSON.parse(sessionStorage.getItem("userData"));t.userInfo=a},mounted(){},methods:{},watch:{}},o=i,l=e("cba8"),c=Object(l["a"])(o,s,r,!1,null,"a60fed00",null);a["default"]=c.exports}}]);