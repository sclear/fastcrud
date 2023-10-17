import{_ as s,o as n,c as a,d as p}from"./app.e0257bf6.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"useServer/serverSetting/index.md","lastUpdated":null}'),l={name:"useServer/serverSetting/index.md"},e=p(`<h2 id="\u914D\u7F6Eapi" tabindex="-1">\u914D\u7F6Eapi</h2><p>\u5728 <code>createApi</code> \u5185\u53EF\u914D\u7F6Eapi, \u652F\u6301\u5D4C\u5957\u4E00\u5C42</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// user.ts</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">user</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    create: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        method: </span><span style="color:#A5D6FF;">&#39;get&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">        url: </span><span style="color:#A5D6FF;">&#39;http://xxx.com&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// server/index.ts</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    createApi</span></span>
<span class="line"><span style="color:#C9D1D9;">} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;@/hook/useServer/lib/store&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">createApi</span><span style="color:#FFA657;">({</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">user</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">list: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        method: </span><span style="color:#A5D6FF;">&#39;get&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">        url: </span><span style="color:#A5D6FF;">&#39;http://xxx.com&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#FFA657;">})</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// use:  api: user.create</span></span>
<span class="line"><span style="color:#8B949E;">// use:  api: list</span></span>
<span class="line"></span></code></pre></div>`,3),o=[e];function t(c,r,i,D,y,F){return n(),a("div",null,o)}const C=s(l,[["render",t]]);export{_ as __pageData,C as default};
