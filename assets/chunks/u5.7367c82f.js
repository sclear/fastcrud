import{g as c,i as d,r as i,o as m,c as p,b as e,t,a as n,u as o,e as _,w as f,F as g}from"../app.e0257bf6.js";const h={__name:"u5",setup(v){const a=c({num:0}),{data:s,loading:r}=d({api:"user.list",deps:[a],default:["default \u80FD\u591F\u534F\u52A9\u8BBE\u7F6E\u521D\u59CB\u6570\u636E"]});function l(){a.value.num=Math.random()}return(x,N)=>{const u=i("el-button");return m(),p(g,null,[e(t(a.value)+" ",1),n("div",null,[n("div",null,"data: "+t(o(s)),1),_(u,{onClick:l,type:"primary",loading:o(r)},{default:f(()=>[e("run")]),_:1},8,["loading"])])],64)}}};export{h as default};