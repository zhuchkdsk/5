(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d437c"],{"5fa6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Card",[n("markdown",{attrs:{content:t.content}})],1)],1)},a=[],s=n("43a5"),c=n("c24f"),r={name:"",components:{markdown:s["a"]},data(){return{query:"",content:"# 加载中...."}},computed:{},created(){console.log(this.$route);let t=this.$route.query;this.query=t,console.log(this.$route),this.getList()},mounted(){},methods:{getList(){let t=this;Object(c["a"])(t.query).then(e=>{t.content=e.data.data.content})}},watch:{$route(t,e){let n=this.$route.query;this.query=n,this.getList()}}},u=r,i=n("cba8"),d=Object(i["a"])(u,o,a,!1,null,"302c5eff",null);e["default"]=d.exports}}]);