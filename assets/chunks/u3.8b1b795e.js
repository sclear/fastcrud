import{i as o,g as h,r as c,o as v,c as x,e,u as t,w as l,b as r,a as s}from"../app.e0257bf6.js";const k=s("h4",null,"1. \u53CC\u5411\u7ED1\u5B9A\u67E5\u8BE2\u6761\u4EF6",-1),C=s("h4",{class:"mt-10px"},"2. \u4F20\u5165\u54CD\u5E94\u5F0F\u5BF9\u8C61",-1),y=s("h4",{class:"mt-10px"},"3. \u901A\u8FC7run\u4F20\u5165params",-1),g={__name:"u3",setup(V){const a=o({api:"full",data:{name:"hello"}}),i=h({title:"hello"}),p=o({api:"full",data:i}),m=o({api:"full"});function d(){m.run({data:{des:"test"}})}return(b,u)=>{const _=c("el-input"),n=c("el-button");return v(),x("div",null,[k,e(_,{modelValue:t(a).config.data.value.name,"onUpdate:modelValue":u[0]||(u[0]=f=>t(a).config.data.value.name=f)},null,8,["modelValue"]),e(n,{class:"mt-10px",onClick:t(a).run,type:"primary"},{default:l(()=>[r("run")]),_:1},8,["onClick"]),C,e(n,{class:"mt-10px",onClick:t(p).run,type:"primary"},{default:l(()=>[r("run")]),_:1},8,["onClick"]),y,e(n,{onClick:d,type:"primary"},{default:l(()=>[r("run")]),_:1})])}}};export{g as default};
