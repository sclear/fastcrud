import{h as a,d as r,e as n,r as t,g as m,o as u,c,u as d}from"../app.2d7386e0.js";const s={__name:"renderFormItem",setup(f){const o=a({form:[{label:"left",model:"left",renderFormItem(){return r(t("el-button"),{type:"primary"},{default:()=>[n("left")]})}},{label:"center",model:"center",renderFormItem(){return r(t("el-button"),{type:"primary"},{default:()=>[n("center")]})}},{label:"right",model:"right",renderFormItem(){return r(t("el-button"),{type:"primary"},{default:()=>[n("right")]})}}],data:m({left:"",center:"",right:""}),createRule(e){return{left:e.required(),center:e.required(),right:e.required()}}});return(e,i)=>{const l=t("Form");return u(),c("div",null,[r(l,{createOption:d(o)},null,8,["createOption"])])}}};export{s as default};