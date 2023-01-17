import{_ as s,c as n,o as a,b as l}from"./app.b7c1347a.js";const u=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础使用","slug":"基础使用","link":"#基础使用","children":[]},{"level":2,"title":"完整功能","slug":"完整功能","link":"#完整功能","children":[]},{"level":2,"title":"去掉底部操作栏","slug":"去掉底部操作栏","link":"#去掉底部操作栏","children":[]}],"relativePath":"useServer/dialog/index.md","lastUpdated":null}'),p={name:"useServer/dialog/index.md"},o=l(`<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h1><p><code>dialog</code> 使用命令式来进行开关, 减少代码冗余</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">Dialog</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">ref</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;dialogRef&quot;</span><span style="color:#C9D1D9;">&gt; hello &lt;/</span><span style="color:#7EE787;">Dialog</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;font-style:italic;">ElButton</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">@click</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;openDialog&quot;</span><span style="color:#C9D1D9;">&gt;open&lt;/</span><span style="color:#FFA198;font-style:italic;">ElButton</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;tsx&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> Dialog </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;@/components/Dialog&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">dialogRef</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ref</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">openDialog</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  dialogRef.value.</span><span style="color:#D2A8FF;">open</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">    title: </span><span style="color:#A5D6FF;">&quot;标题&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">  });</span></span>
<span class="line"><span style="color:#C9D1D9;">};</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="完整功能" tabindex="-1">完整功能 <a class="header-anchor" href="#完整功能" aria-hidden="true">#</a></h2><p>当传入<code>confirm</code> 函数,将会认定你需要控制 loading 与关闭情况 并且开启 loading 效果, 当调用 done() dialog 会关闭. 调用 done(false) dialog 不会关闭, loading 会关闭</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">Dialog</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">:confirm</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;confirm&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">ref</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;dialogRef&quot;</span><span style="color:#C9D1D9;">&gt; hello &lt;/</span><span style="color:#7EE787;">Dialog</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;font-style:italic;">ElButton</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">@click</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;openDialog&quot;</span><span style="color:#C9D1D9;">&gt;open&lt;/</span><span style="color:#FFA198;font-style:italic;">ElButton</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;tsx&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> Dialog </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;@/components/Dialog&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">dialogRef</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ref</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">confirm</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">done</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">cancel</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">openDialog</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  dialogRef.value.</span><span style="color:#D2A8FF;">open</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">    title: </span><span style="color:#A5D6FF;">&quot;标题&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">  });</span></span>
<span class="line"><span style="color:#C9D1D9;">};</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="去掉底部操作栏" tabindex="-1">去掉底部操作栏 <a class="header-anchor" href="#去掉底部操作栏" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">Dialog</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">ref</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;dialogRef&quot;</span><span style="color:#C9D1D9;">&gt; hello &lt;/</span><span style="color:#7EE787;">Dialog</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;font-style:italic;">ElButton</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">@click</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;openDialog&quot;</span><span style="color:#C9D1D9;">&gt;open&lt;/</span><span style="color:#FFA198;font-style:italic;">ElButton</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;tsx&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> Dialog </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;@/components/Dialog&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">dialogRef</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">ref</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">openDialog</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  dialogRef.value.</span><span style="color:#D2A8FF;">open</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">    disabled: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    title: </span><span style="color:#A5D6FF;">&quot;标题&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">  });</span></span>
<span class="line"><span style="color:#C9D1D9;">};</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,9),e=[o];function t(c,r,D,i,y,F){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
