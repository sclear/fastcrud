import{g as o,h as p,d as t,e as u,r as a,o as m,c as s,u as d}from"../app.37470486.js";const _={__name:"rule",setup(f){const r=o(),n=p({form:[{type:"Input",label:"\u59D3\u540D",model:"name",row:[12]},{type:"Input",label:"\u7535\u8BDD",model:"phone",row:[12]},{align:"center",render(){return t(a("el-button"),{type:"primary",onClick:()=>{r.value.validate()}},{default:()=>[u("validate")]})}}],createRule(e,l){return{name:e.required(),phone:e.required().phone()}},onSuccess(){alert("\u901A\u8FC7")},onError(){alert("\u5931\u8D25")},data:o({name:"",phone:""})});return(e,l)=>{const c=a("Form");return m(),s("div",null,[t(c,{ref_key:"formRef",ref:r,createOption:d(n)},null,8,["createOption"])])}}};export{_ as default};
