import{_ as i,c as a,a2 as e,o as n}from"./chunks/framework.D3xnaaT3.js";const t="/q-uniapp-docs/assets/3-1.Cd6FstN8.png",g=JSON.parse('{"title":"uni 插件","description":"","frontmatter":{},"headers":[],"relativePath":"base/3-plugin.md","filePath":"base/3-plugin.md","lastUpdated":1734704359000}'),l={name:"base/3-plugin.md"};function p(h,s,k,d,o,r){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="uni-插件" tabindex="-1">uni 插件 <a class="header-anchor" href="#uni-插件" aria-label="Permalink to &quot;uni 插件&quot;">​</a></h1><h2 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h2><p>第一次看到 <code>q-uniapp</code> 里面 <code>vue</code> 文件 <code>route-block</code> 这种写法，表示很奇怪，重来没见过！</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">json5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  layout: &#39;demo&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  style: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    navigationBarTitleText: &#39;标题&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">text-green-500</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 菲鸽，你好，我喜欢你！ </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="uni-插件总览" tabindex="-1">uni 插件总览 <a class="header-anchor" href="#uni-插件总览" aria-label="Permalink to &quot;uni 插件总览&quot;">​</a></h2><p>哈哈，这个当然是 <code>uni插件</code> 的功劳了，具体点是 <code>@uni-helper/vite-plugin-uni-pages</code> 插件的功劳，该插件由 <code>uni-helper</code> 官方团队开发。</p><p>本文就来说说 <code>q-uniapp</code> 都引入了哪些有用的 <code>uni插件</code>。下面这个表格描述了各个插件的主要作用。</p><table tabindex="0"><thead><tr><th style="text-align:center;">插件名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">@dcloudio/vite-plugin-uni</td><td style="text-align:left;"><strong>最核心的 <code>uni 插件</code></strong>，没有它就不能在 vite 项目跑 uniapp，其他所有的 <code>uni插件</code> 都需要经通过它的手来编译，所以写法上，都是先写 <code>UniXXX</code>，再写 <code>Uni</code>，见下文</td></tr><tr><td style="text-align:center;">@uni-helper/vite-plugin-uni-pages</td><td style="text-align:left;"><code>uni 插件</code>，也是 <code>q-uniapp 灵魂插件</code>，<code>route-block</code> 就是它的功劳，让你可以直接在本文件就能设置页面的路元信息，无需跑去 <code>pages.json</code> 配置，同时支持 <code>pages.config.ts</code> 编写 <code>pages.json</code></td></tr><tr><td style="text-align:center;">@uni-helper/vite-plugin-uni-layouts</td><td style="text-align:left;"><code>uni 插件</code>，支多种 <code>layouts</code> 布局，群友脑洞大开，充分利用这个特性实现平时不容实现的写法</td></tr><tr><td style="text-align:center;">@uni-helper/vite-plugin-uni-manifest</td><td style="text-align:left;"><code>uni 插件</code>，支持 <code>manifest.config.ts</code> 编写 <code>manifest.json</code></td></tr></tbody></table><p><code>UniXXX()</code> 插件都需要在 <code>uni()</code> 之前引入，因为最终都需要 <code>Uni</code> 来处理所有的代码。如下图： <img src="`+t+`" alt="vite uni plugin"></p><p>接下来介绍一下 <code>uni 插件</code>，其他 <code>通用插件</code> 大家都比较熟悉，不再赘述。</p><p><code>q-uniapp</code> 引入了 <code>uni-helper</code> 团队的几个重要插件，少了它们 <code>q-uniapp</code> 就缺少了灵魂，感谢 <code>uni-helper</code> 团队的贡献。<code>Uni 插件</code> 列表如下：</p><ul><li><p><code>vite-plugin-uni-pages</code></p><ul><li>介绍：为 <code>Vite</code> 下的 <code>uni-app</code> 提供基于文件系统的路由</li><li>额外：使用 <code>TypeScript</code> 来编写 <code>uni-app</code> 的 <code>pages.json</code></li><li>访问地址：<a href="https://github.com/uni-helper/vite-plugin-uni-pages" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-pages</a></li></ul></li><li><p><code>vite-plugin-uni-layouts</code></p><ul><li>介绍：为 <code>Vite</code> 下的 <code>uni-app</code> 提供类 <code>nuxt</code> 的 <code>layouts</code> 系统</li><li>访问地址：<a href="https://github.com/uni-helper/vite-plugin-uni-layouts" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-layouts</a></li></ul></li><li><p><code>vite-plugin-uni-manifest</code></p><ul><li>介绍：使用 <code>TypeScript</code> 来编写 <code>uni-app</code> 的 <code>manifest.json</code></li><li>访问地址：<a href="https://github.com/uni-helper/vite-plugin-uni-manifest" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-manifest</a></li></ul></li></ul><h2 id="vite-plugin-uni-pages" tabindex="-1">vite-plugin-uni-pages <a class="header-anchor" href="#vite-plugin-uni-pages" aria-label="Permalink to &quot;vite-plugin-uni-pages&quot;">​</a></h2><p>得益于 <a href="https://github.com/uni-helper/vite-plugin-uni-pages" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-pages</a>，约定式路由（文件路由）的实现轻而易举。</p><p><code>src/pages</code> 目录下的每个文件都代表着一个路由。要创建新页面，只需要在这个目录里新增 <code>.vue</code> 文件，插件会自动生成对应的 <code>pages.json</code> 文件。</p><p><code>route</code> 代码块则可以配置页面相关信息，这些信息会自动同步到 <code>page.json</code>，无需切换到 <code>page.json</code> 进行配置。</p><blockquote><p><code>pages.json</code> 文件是自动生成的，请不要手动修改，全局的东西请在 <code>pages.config.ts</code> 里面配置，页面上的东西请在 <code>vue</code> 文件的 <code>route</code> 代码块配置，如下图。</p></blockquote><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 使用 type=&quot;home&quot; 属性设置首页，其他页面不需要设置，默认为page --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 推荐使用json5，更强大，且允许注释 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">json5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">home</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  style: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    navigationStyle: &#39;custom&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    navigationBarTitleText: &#39;首页&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">欢迎使用 q-uniapp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">q-uniapp - uniapp 开发框架</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">h4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">json5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  style: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    navigationBarTitleText: &#39;关于&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">通过 \`/pages/about\` 来访问这个页面</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h3 id="设置首页" tabindex="-1">设置首页 <a class="header-anchor" href="#设置首页" aria-label="Permalink to &quot;设置首页&quot;">​</a></h3><p>通过在 <code>route-block</code> 里面配置 <code>type=&quot;home&quot;</code> 即可，尽量保证一个项目 <code>只有一个</code> 这个配置，如果有多个，会按照字母顺序来排列，最终可能不是您想要的效果。</p><h3 id="设置-pages-过滤和分包" tabindex="-1">设置 pages 过滤和分包 <a class="header-anchor" href="#设置-pages-过滤和分包" aria-label="Permalink to &quot;设置 pages 过滤和分包&quot;">​</a></h3><ul><li><p>过滤：默认 <code>src/pages</code> 里面的 <code>vue</code> 文件都会生成一个页面，如果不需要生成页面可以对 <code>vite.config.ts</code> 中的 <code>UniPages</code> 进行 <code>exclude</code> 配置。</p></li><li><p>分包：如果需要设置 <code>分包</code> 则可以通过 <code>subPackages</code> 进行配置，该配置项是个数组，可以配置多个 <code>分包</code>，注意分包的目录不能为 <code>src/pages</code> 里面的子目录。</p></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">UniPages</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  exclude</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**/components/**/**.*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  subPackages</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">src/pages-sub</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">], </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 是个数组，可以配置多个，但不能为 \`src/pages\` 里面的子目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><h2 id="vite-plugin-uni-layouts" tabindex="-1">vite-plugin-uni-layouts <a class="header-anchor" href="#vite-plugin-uni-layouts" aria-label="Permalink to &quot;vite-plugin-uni-layouts&quot;">​</a></h2><p>得益于 <a href="https://github.com/uni-helper/vite-plugin-uni-layouts" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-layouts</a>，你可以轻松地切换不同的布局。</p><p><code>src/layouts</code> 文件夹下的 <code>vue</code> 文件都会自动生成一个布局，默认的布局文件名为 <code>default</code> ，路径 <code>src/layouts/default.vue</code> 。</p><p>如果需要修改使用的布局，可以通过 <code>vue</code> 文件内 <code>route</code> 代码块指定需要的布局，如下示例使用 <code>demo</code> 布局。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">json5</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  layout: &#39;demo&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  style: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    navigationBarTitleText: &#39;关于&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">route</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    &lt;!-- 这里可以写通用的布局，比如导航栏，tabbar等 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    &lt;!-- slot里面装的就是子页面的内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">slot</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">view</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="vite-plugin-uni-manifest" tabindex="-1">vite-plugin-uni-manifest <a class="header-anchor" href="#vite-plugin-uni-manifest" aria-label="Permalink to &quot;vite-plugin-uni-manifest&quot;">​</a></h2><p>得益于 <a href="https://github.com/uni-helper/vite-plugin-uni-manifest" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-manifest</a>，你可以使用 <code>TypeScript</code> 来编写 <code>manifest.json</code>。</p><blockquote><p><code>manifest.json</code> 文件是自动生成的，请不要手动修改，需要配置的内容请在 <code>manifest.config.ts</code> 里面配置。</p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文介绍了 <code>q-uniapp</code> 引入的几个重要的 <code>uni插件</code>。</p><p>如果还想了解更多信息，可以去 <code>uni-helper</code> <a href="https://github.com/uni-helper" target="_blank" rel="noreferrer">github 仓库</a> 看看。</p>`,36)]))}const u=i(l,[["render",p]]);export{g as __pageData,u as default};