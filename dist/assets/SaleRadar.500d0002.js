import{a as i,w as r,N as s,o as l,l as n,B as d,k as m,bz as u,m as f}from"./index.314cb164.js";import{C as c}from"./index.bac827c9.js";import"./index.c1f39743.js";import"./index.d86be4eb.js";import{u as h}from"./useECharts.983f2e5c.js";import"./index.eae0d10d.js";import"./useRefs.57282ad5.js";const x=i({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=r(null),{setOptions:o}=h(t);return s(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(p,g)=>(l(),n(f(c),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:d(()=>[m("div",{ref_key:"chartRef",ref:t,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{x as default};
