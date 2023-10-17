import{_ as s,o as a,c as n,d as p}from"./app.e0257bf6.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"demo/mock/index.md","lastUpdated":null}'),l={name:"demo/mock/index.md"},o=p(`<h2 id="mock-\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">Mock \u7684\u57FA\u672C\u4F7F\u7528</h2><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528</h2><p>\u5B9A\u4E49 Mock \u7684\u6A21\u62DF\u6570\u636E</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">user</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">createApiModule</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">  list: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    method: </span><span style="color:#A5D6FF;">&quot;get&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    url: </span><span style="color:#A5D6FF;">&quot;list&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    Mock: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      code: </span><span style="color:#79C0FF;">200</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      message: </span><span style="color:#A5D6FF;">&quot;ok&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">      data: [],</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span></code></pre></div><h2 id="\u52A8\u6001-mock" tabindex="-1">\u52A8\u6001 Mock</h2><p>\u5B9A\u4E49\u52A8\u6001\u7684 Mock \u7684\u6A21\u62DF\u6570\u636E</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">user</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">createApiModule</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">  list: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    method: </span><span style="color:#A5D6FF;">&quot;get&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    url: </span><span style="color:#A5D6FF;">&quot;list&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">Mock</span><span style="color:#C9D1D9;">({ </span><span style="color:#FFA657;">data</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">urlParams</span><span style="color:#C9D1D9;"> }) {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        code: data.num </span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">?</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">200</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">500</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">        data: [{ like: </span><span style="color:#A5D6FF;">&quot;\u5531\u8DF3RAP\u7BEE\u7403&quot;</span><span style="color:#C9D1D9;"> }],</span></span>
<span class="line"><span style="color:#C9D1D9;">      };</span></span>
<span class="line"><span style="color:#C9D1D9;">    },</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,D,y,i,C){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{d as __pageData,u as default};
