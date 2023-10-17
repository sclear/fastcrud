import{_ as s,o as n,c as a,d as o}from"./app.e0257bf6.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"demo/mockOnOff/index.md","lastUpdated":null}'),p={name:"demo/mockOnOff/index.md"},l=o(`<h2 id="mock-\u7684\u62D4\u63D2" tabindex="-1">Mock \u7684\u62D4\u63D2</h2><p>\u5728\u914D\u7F6E\u73AF\u5883\u53D8\u91CF<code>env</code>\u6587\u4EF6\u5185\u914D\u7F6E Mock \u7684\u542F\u7528, env \u6587\u4EF6\u5185\u7684\u914D\u7F6E\u4E3A\u6700\u9AD8\u6743\u91CD, \u4EE5\u786E\u4FDD\u5728\u751F\u4EA7\u73AF\u5883\u9694\u79BB Mock \u9009\u9879</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#8B949E;">// .env.development || .env.production</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// 1 \u5F00\u542F 0\u5173\u95ED</span></span>
<span class="line"><span style="color:#C9D1D9;">VITE_API_Mock_ </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5728 Api \u4E2D\u914D\u7F6E<code>Mock</code>,\u5C06\u4F1A\u9ED8\u8BA4\u5F00\u542F Mock \u9009\u9879, \u4E5F\u53EF\u4EE5\u901A\u8FC7<code>_Mock_</code>\u914D\u7F6E Mock \u7684\u5173\u95ED\u6216\u8005\u5F00\u542F, \u5176\u5173\u95ED\u6743\u91CD\u5747\u4F4E\u4E8E<code>env</code>\u4E2D\u7684\u914D\u7F6E</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">user</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">createApiModule</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">  list: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    method: </span><span style="color:#A5D6FF;">&quot;get&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    url: </span><span style="color:#A5D6FF;">&quot;list&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    _Mock_: </span><span style="color:#79C0FF;">false</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    Mock: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      code: </span><span style="color:#79C0FF;">200</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      message: </span><span style="color:#A5D6FF;">&quot;ok&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      data: [],</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span></code></pre></div>`,5),e=[l];function c(t,r,D,i,d,y){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{C as __pageData,u as default};
