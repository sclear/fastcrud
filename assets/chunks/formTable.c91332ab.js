import{f,g as r,h as _,r as e,o as b,i as g,w as s,d as t,u,j as C,e as c,F}from"../app.37470486.js";const O=f({__name:"formTable",setup(k){const o=r(),l=_({api:"createUser",form:[{type:"Input",label:"\u6635\u79F0",model:"name",row:[24]},{type:"Input",label:"\u5E74\u9F84",model:"age"}],data:r({name:"",age:""}),labelWidth:60,createRule(a){return{name:a.required(),age:a.required()}}}),i=C({api:"list",column:[{prop:"name",label:"\u59D3\u540D"},{prop:"age",label:"\u5E74\u9F84"},{render(a,n){return t(F,null,[t(e("el-button"),{size:"small",onClick:()=>{o.value.open({title:"title",disabled:!0}),l.data.value=n}},{default:()=>[c("\u8BE6\u60C5")]}),t(e("el-button"),{type:"success",size:"small",onClick:()=>{o.value.open({title:"title"})}},{default:()=>[c("\u7F16\u8F91")]})])}}]});return(a,n)=>{const p=e("Form"),m=e("Dialog"),d=e("Table");return b(),g(d,{createOption:u(i)},{default:s(()=>[t(m,{ref_key:"dialogRef",ref:o},{default:s(()=>[t(p,{createOption:u(l)},null,8,["createOption"])]),_:1},512)]),_:1},8,["createOption"])}}});export{O as default};