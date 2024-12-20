import{_ as o,c as d,a2 as a,o as i}from"./chunks/framework.D3xnaaT3.js";const c="/q-uniapp-docs/assets/11-1.C8NDrjBL.png",t="/q-uniapp-docs/assets/11-2.uCp95fqP.png",s="/q-uniapp-docs/assets/11-3.CGKECzRY.png",p="/q-uniapp-docs/assets/11-4.DE9uX9J6.png",l="/q-uniapp-docs/assets/11-13.GoNQNSo0.png",n="/q-uniapp-docs/assets/11-5.DLGPBHAM.png",u="/q-uniapp-docs/assets/11-7.AsGn1B1-.png",r="/q-uniapp-docs/assets/11-9.AexLfCHq.png",h="/q-uniapp-docs/assets/11-100.S7zWX1wz.png",k="/q-uniapp-docs/assets/11-10.BDMtgU3D.png",q="/q-uniapp-docs/assets/11-11.v5s-2o-3.png",b="/q-uniapp-docs/assets/11-12.CWkwnHyx.png",f=JSON.parse('{"title":"运行发布","description":"","frontmatter":{},"headers":[],"relativePath":"base/11-build.md","filePath":"base/11-build.md","lastUpdated":1734704359000}'),m={name:"base/11-build.md"};function g(x,e,_,P,B,A){return i(),d("div",null,e[0]||(e[0]=[a('<h1 id="运行发布" tabindex="-1">运行发布 <a class="header-anchor" href="#运行发布" aria-label="Permalink to &quot;运行发布&quot;">​</a></h1><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><ul><li><p><code>h5 平台</code>： <code>pnpm dev:h5</code>（ 或者简单点 <code>pnpm dev</code> ），然后浏览器打开 <code>http://localhost:9000/</code>。</p></li><li><p><code>wx 小程序</code>：<code>pnpm dev:mp-weixin</code>，然后打开微信开发者工具，导入本地文件夹，选择本项目的 <code>dist/dev/mp-weixin</code> 文件。</p></li><li><p><img src="'+c+'" alt="alt text"></p></li><li><p><code>APP 平台</code>：<code>pnpm dev:app</code>，然后打开 <code>HBuilderX</code>，导入刚刚生成的 <code>dist/dev/app</code> 文件夹，选择运行到 <code>模拟器</code>( <code>开发时优先使用</code> )，或者 <code>运行到安卓/ios 基座</code> (真机调试时使用) 。</p></li></ul><p><img src="'+t+'" alt="alt text"></p><p><img src="'+s+'" alt="alt text"><img src="'+p+'" alt="alt text"></p><blockquote><p>如果需要配置其他模拟器，可以参考：<a href="https://uniapp.dcloud.net.cn/tutorial/run/installSimulator.html" target="_blank" rel="noreferrer">安装模拟器</a></p></blockquote><blockquote><p>这样操作的话，开发时都会有热更新，开发体验很爽！</p></blockquote><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h2><ul><li><code>h5 平台</code>： <code>pnpm build:h5</code>，打包后的文件在 <code>dist/build/h5</code>，可以放到 web 服务器，如 nginx 运行。如果最终不是放在根目录，可以在 <code>manifest.config.ts</code> 文件的 <code>h5.router.base</code> 属性进行修改。</li><li><code>wx 小程序</code>：<code>pnpm build:mp-weixin</code>，打包后的文件在 <code>dist/build/mp-weixin</code>，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。</li><li><code>APP 平台</code>：<code>pnpm build:app</code>，然后打开 <code>HBuilderX</code>，导入刚刚生成的 <code>dist/build/app</code> 文件夹，选择 <code>发行</code> - <code>原生APP-云打包</code>。</li></ul><p><img src="'+l+'" alt="alt text"><img src="'+n+'" alt="alt text"></p><blockquote><p>熟悉原生 APP 开发的开发者也可以使用 <code>原生APP-本地打包</code>。</p></blockquote><h2 id="app-打包注意事项-上" tabindex="-1">APP 打包注意事项（上） <a class="header-anchor" href="#app-打包注意事项-上" aria-label="Permalink to &quot;APP 打包注意事项（上）&quot;">​</a></h2><p>很多开发者发现打包失败，或者打包白屏，这里简单说明一下。</p><ul><li><ol><li>重新获取自己的 <code>AppId</code></li></ol></li></ul><p><img src="'+u+'" alt="alt text"></p><ul><li><ol start="2"><li>根据上面获取到的 <code>AppId</code> 修改 <code>env/.env</code> 文件的 <code>VITE_UNI_APPID</code> 字段</li></ol></li><li><ol start="3"><li>（可选）云打包如果有出现解析时出问题的，把 <code>minSdkVersion</code> 版本改低一点就好了，比如 <code>21</code>。（最低 <code>21</code>，不能低于 <code>21</code>；我模板里面设置的是 <code>30</code>）。</li></ol></li></ul><p><img src="'+r+'" alt="alt text"></p><h2 id="app-打包注意事项-下" tabindex="-1">APP 打包注意事项 （下） <a class="header-anchor" href="#app-打包注意事项-下" aria-label="Permalink to &quot;APP 打包注意事项 （下）&quot;">​</a></h2><h3 id="uni-app-sdk-版本" tabindex="-1"><code>uni-app SDK</code> 版本 <a class="header-anchor" href="#uni-app-sdk-版本" aria-label="Permalink to &quot;`uni-app SDK` 版本&quot;">​</a></h3><blockquote><p>特别备注：<code>2024-05-03</code>，新的 <code>base</code> 模板的 <code>uni-app SDK</code> 版本已经升级到 <code>4.14</code> 了。</p><p><img src="'+h+`" alt="alt text"></p></blockquote><p><code>2024-04-14</code>，新的 <code>base</code> 模板的 <code>uni-app SDK</code> 版本已经升级到 <code>4.08</code> ，记得更新您的 <code>HBuilderx</code> 版本。</p><p><code>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-4000820240401001&quot;</code> 表示 <code>uni-app</code> 为 <code>3.0.0</code> 版本，对应的 <code>HBuilderx</code> 版本为 <code>4.08</code>，后面的 <code>20240401001</code> 是发布日期。</p><blockquote><p><code>40008</code> 第一个数字 <code>4</code> 表示主要版本，后面每 <code>2</code> 位数为一组，所以代表 <code>4.0.8</code>。</p><p>类似的，<code>30812</code> 代表 <code>3.8.12</code> 版本，<code>30909</code> 代表 <code>3.9.9</code> 版本。</p><p>另外，从 <code>3.99</code> 开始，后面 2 个小版本合并书写，于是 <code>3.9.9</code> 变成 <code>3.99</code>，<code>4.0.8</code> 变成 <code>4.08</code>。</p></blockquote><p><code>q-uniapp</code> 历史用过的 <code>@dcloudio/uni-app</code> 版本：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-3081220230817001&quot;,  =&gt; 3.8.12</span></span>
<span class="line"><span>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-3090920231225001&quot;,  =&gt; 3.99</span></span>
<span class="line"><span>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-4000820240401001&quot;,  =&gt; 4.08</span></span>
<span class="line"><span>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-4010420240430001&quot;,  =&gt; 4.14</span></span></code></pre></div><p><img src="`+k+'" alt="alt text"></p><h3 id="uni-app-sdk-版本匹配-hbuilderx" tabindex="-1"><code>uni-app SDK</code> 版本匹配 <code>HBuilderX</code> <a class="header-anchor" href="#uni-app-sdk-版本匹配-hbuilderx" aria-label="Permalink to &quot;`uni-app SDK` 版本匹配 `HBuilderX`&quot;">​</a></h3><blockquote><p>温馨提示：下面的部分是使用 <code>uni-app</code> 版本为 <code>3.8.12</code> 时写的文档，适当参考~</p></blockquote><p>本模板使用的是 <code>3.8.12</code> 的库版本(<code>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-3081220230817001&quot;,</code>)，所以尽量使用 <code>3.8.12</code> 版本的 <code>HBuilderX</code> 来打包，否则可能有未知的风险，出现情况如下图。</p><blockquote><p>原来的图不见了，重新补了一张。</p></blockquote><p><img src="'+q+'" alt="alt text"></p><p>上图表示您的 <code>HBuilderX</code> 版本是 <code>4.08</code>，但是代码 <code>uni-app SDK</code> (即 <code>&quot;@dcloudio/uni-app&quot;: &quot;3.0.0-4010420240430001&quot;</code> ) 是 <code>4.14</code>，版本不匹配。</p><ul><li>点击 <code>ignore</code>（忽略） 后若可以正常使用，那就不用管。（可选添加如下配置）</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">app-plus</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> : </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;"> &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">compatible</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;"> &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ignoreVersion</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre></div><ul><li>如果出现白屏啥的，请更新您的 <code>HBuilderX</code> 到 <code>uni-app SDK</code> 相同版本（这里是 <code>4.14</code> ）。</li></ul><h3 id="多个-hbuilderx-版本安装" tabindex="-1">多个 <code>HBuilderX</code> 版本安装 <a class="header-anchor" href="#多个-hbuilderx-版本安装" aria-label="Permalink to &quot;多个 `HBuilderX` 版本安装&quot;">​</a></h3><blockquote><p>温馨提示：下面的部分是使用 <code>uni-app</code> 版本为 <code>3.8.12</code> 时写的文档，适当参考~</p></blockquote><p><code>MAC</code> 可以安装多个版本的软件，如下图我安装了 <code>3.8.12</code> (3.8.12.20230817) 和最新的 <code>3.99</code> (3.99.2023122611) 两个版本，平时的项目使用 <code>3.99</code>, 打包 <code>q-uniapp</code> 的时候使用 <code>3.8.12</code>。</p><p><img src="'+b+'" alt="alt text"></p><blockquote><p><code>window</code> 系统也可以同时安装多个 <code>HBuilderX</code> 版本，安装时选择安装到不同目录下即可。</p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本文描述了多端的运行和发布，希望对您有帮助。</p>',42)]))}const y=o(m,[["render",g]]);export{f as __pageData,y as default};
