import{_ as i,c as a,a2 as e,o as n}from"./chunks/framework.D3xnaaT3.js";const k=JSON.parse('{"title":"UI 库替换篇","description":"","frontmatter":{},"headers":[],"relativePath":"base/7-ui.md","filePath":"base/7-ui.md","lastUpdated":1734704359000}'),t={name:"base/7-ui.md"};function l(p,s,o,d,c,h){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="ui-库替换篇" tabindex="-1">UI 库替换篇 <a class="header-anchor" href="#ui-库替换篇" aria-label="Permalink to &quot;UI 库替换篇&quot;">​</a></h1><h2 id="默认-ui-库" tabindex="-1">默认 UI 库 <a class="header-anchor" href="#默认-ui-库" aria-label="Permalink to &quot;默认 UI 库&quot;">​</a></h2><p><code>q-uniapp</code> 经过几次更迭，先后使用 <code>uni-ui</code>、<code>uv-ui</code>作为默认 UI 库，目前使用 <code>wot-ui</code> 为默认 UI 库。</p><p><code>wot-ui</code> 是 <code>vue3+ts</code> 编写的全端支持的 UI 库，编码体验比 <code>uv-ui</code> 更好；而官方维护的 <code>uni-ui</code> 则样式略丑，组件较少，故弃之。</p><blockquote><p><code>wot-ui</code> 全称 <code>wot-design-uni</code>，是 <code>wot-design</code> 的 <code>uniapp</code> 版本，文档地址：<a href="https://wot-design-uni.netlify.app/" target="_blank" rel="noreferrer">https://wot-design-uni.netlify.app/</a>.</p></blockquote><hr><p>很多群友反馈有其他 <code>UI</code> 库的需求，那么更换 <code>UI 库</code> 需要哪些步骤呢？</p><ul><li>先卸载原有的 <code>wot-ui</code> 库</li><li>再安装其他 <code>UI 库</code></li></ul><p>下面我们简单描述一下更换 2 个主流 <code>UI库</code> —— <code>uni-ui</code> + <code>uv-ui</code> 的过程。</p><blockquote><p>当然也支持同时存在多个 <code>UI 库</code>，有 ES 摇树特性，不必担心打包后的体积。</p></blockquote><h2 id="卸载-wot-ui-库" tabindex="-1">卸载 wot-ui 库 <a class="header-anchor" href="#卸载-wot-ui-库" aria-label="Permalink to &quot;卸载 wot-ui 库&quot;">​</a></h2><p>卸载 <code>wot-ui</code> 过程如下：</p><ul><li><ol><li>删除 <code>wot-ui</code> 库：</li></ol></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> un</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wot-design-uni</span></span></code></pre></div><ul><li><ol start="2"><li><code>pages.config.ts</code> 文件 <code>easycom.custom</code> 删除相关配置：</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">easycom: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    autoscan: true,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    custom: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-     &#39;^wd-(.*)&#39;: &#39;wot-design-uni/components/wd-$1/wd-$1.vue&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">},</span></span></code></pre></div><ul><li><ol start="3"><li><code> tsconfig.json</code> 文件 <code>compilerOptions.types</code> 删除相关配置：</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&quot;types&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;@dcloudio/types&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;@types/wechat-miniprogram&quot;,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-   &quot;wot-design-uni/global.d.ts&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;./components.d.ts&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;./global.d.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">]</span></span></code></pre></div><h2 id="安装-uni-ui-库" tabindex="-1">安装 <code>uni-ui</code> 库 <a class="header-anchor" href="#安装-uni-ui-库" aria-label="Permalink to &quot;安装 \`uni-ui\` 库&quot;">​</a></h2><ul><li><ol><li>安装 <code>uni-ui</code> 库：</li></ol></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @dcloudio/uni-ui</span></span></code></pre></div><ul><li><ol start="2"><li><code>pages.config.ts</code> 文件 <code>easycom.custom</code> 添加相关配置：</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">easycom: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  autoscan: true,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  custom: {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+   &#39;^uni-(.*)&#39;: &#39;@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">},</span></span></code></pre></div><ul><li><ol start="3"><li><code> tsconfig.json</code> 文件 <code>compilerOptions.types</code> 添加相关配置：</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&quot;types&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;@dcloudio/types&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;@types/wechat-miniprogram&quot;,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+   &quot;@uni-helper/uni-ui-types&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;./components.d.ts&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &quot;./global.d.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">]</span></span></code></pre></div><h2 id="安装-uv-ui-库" tabindex="-1">安装 <code>uv-ui</code> 库 <a class="header-anchor" href="#安装-uv-ui-库" aria-label="Permalink to &quot;安装 \`uv-ui\` 库&quot;">​</a></h2><ul><li><ol><li>安装 <code>uv-ui</code> 库：</li></ol></li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @climblee/uv-ui</span></span></code></pre></div><ul><li><ol start="2"><li><code>pages.config.ts</code> 文件 <code>easycom.custom</code> 添加相关配置：</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">easycom: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  autoscan: true,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  custom: {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+   &#39;^uv-(.*)&#39;: &#39;@climblee/uv-ui/components/uv-$1/uv-$1.vue&#39;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">},</span></span></code></pre></div><ul><li><ol start="3"><li><code> tsconfig.json</code> 文件 <code>compilerOptions.types</code> 添加相关配置：</li></ol></li></ul><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&quot;types&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;@dcloudio/types&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;@types/wechat-miniprogram&quot;,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ &quot;@ttou/uv-typings/shim&quot;,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ &quot;@ttou/uv-typings/v2&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;./components.d.ts&quot;,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  &quot;./global.d.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">]</span></span></code></pre></div><blockquote><p>其他 UI 库的安装类似，不再赘述。</p></blockquote>`,33)]))}const r=i(t,[["render",l]]);export{k as __pageData,r as default};
