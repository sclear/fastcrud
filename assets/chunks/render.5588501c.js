import{N as l,r as a,o as c,c as p,e as o,u as s,b as u}from"../app.e0257bf6.js";const d={__name:"render",setup(i){const r=l({api:"user.list",autoRun:!0,column:[{type:"Index",prop:"type",label:"\u6392\u5E8F"},{prop:"type",label:"\u7231\u597D"},{prop:"age",label:"\u5E74\u9F84",render(t,n,e){return o(a("el-button"),{type:"success",onClick:()=>{alert(t+e)}},{default:()=>[u("click")]})}}]});return(t,n)=>{const e=a("Table");return c(),p("div",null,[o(e,{createOption:s(r)},null,8,["createOption"])])}}};export{d as default};