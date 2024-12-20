import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.D3xnaaT3.js";const l="/q-uniapp-docs/assets/5-9.DZ2MSubu.png",p="/q-uniapp-docs/assets/5-10.bJ29tv3u.png",e="/q-uniapp-docs/assets/5-11.MsJ7W7FS.png",h="/q-uniapp-docs/assets/5-13.DDhOMza-.png",k="/q-uniapp-docs/assets/5-14.DgbLFpei.png",o="/q-uniapp-docs/assets/5-14.DgbLFpei.png",c="/q-uniapp-docs/assets/5-18.BzpASQPS.png",d="/q-uniapp-docs/assets/5-21.BL9bWHcY.png",r="/q-uniapp-docs/assets/5-20.amNKiK4p.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/iconfont/iconfont.md","filePath":"other/iconfont/iconfont.md","lastUpdated":1734704359000}'),g={name:"other/iconfont/iconfont.md"};function y(B,s,f,A,u,m){return t(),a("div",null,s[0]||(s[0]=[n('<h2 id="iconfont-图标库" tabindex="-1">iconfont 图标库 <a class="header-anchor" href="#iconfont-图标库" aria-label="Permalink to &quot;iconfont 图标库&quot;">​</a></h2><p><code>iconfont</code> 同样有海量免费的图标，同时支持上传自己的图标。公司项目通常会有自己的图标，由专业的 <code>UI设计师</code> 设计，这时通常会使用 <code>iconfont</code> 方式使用图标。</p><ul><li><ol><li>打开<code>阿里巴巴矢量图标库 iconfont</code>，地址：<a href="https://www.iconfont.cn/%EF%BC%8C%E5%B9%B6%E7%99%BB%E5%BD%95%E3%80%82" target="_blank" rel="noreferrer">https://www.iconfont.cn/，并登录。</a></li></ol></li><li><ol start="2"><li>寻找需要的图标，加入项目，也可以上传自己的图标。</li></ol></li></ul><p><img src="'+l+'" alt="alt text"></p><p><img src="'+p+'" alt="alt text"></p><p><img src="'+e+'" alt="alt text"></p><blockquote><p>初次接触 <code>iconfont</code> 的同学，可能会找不到自己的项目，如下图：资源管理 -- 我的项目</p></blockquote><ul><li>3.图标方式选择，如下图有 <code>Unicode</code> <code>Font class</code> <code>Symbol</code> 三种方式，分别预览和使用如下：</li></ul><p><img src="'+h+'" alt="alt text"></p><p><img src="'+k+'" alt="alt text"></p><ul><li><code>Unicode</code> 的方式太落后，语义化不明显，不推荐；</li><li><code>Symbol</code> 的方式太先进（背后原理是生成了 <code>SVG</code> 雪碧图），先进到 <code>小程序</code> 和 <code>APP</code> 都不支持，只能无奈放弃。</li></ul><blockquote><p><code>Symbol</code> 的方式生成 <code>svg</code> 雪碧图</p></blockquote><ul><li><p><code>Font class</code> 则是我们最合适的选择，有 <code>Symbol</code> 一样的语义化（都是<code>icon-xxx</code>方式），引入和使用也方便（ <code>Symbol</code> 是一个 <code>js</code> 文件，<code>Font class</code> 是一个 <code>css</code> 文件）。</p></li><li><ol start="3"><li>点击选中 <code>Font class</code> 后再点击 <code>查看在线连接</code> 按钮，可以拿到一个 <code>css</code> 的链接，如 <a href="//at.alicdn.com/t/c/font_4032028_mbcuy517h6.css" target="_blank" rel="noreferrer">//at.alicdn.com/t/c/font_4032028_mbcuy517h6.css</a> ，如果期间新加入了图标，记得点击更新链接，会重新生成一个链接，只有最后面一串 hash 有改变，并且旧的链接依然可以访问。</li></ol></li></ul><p><img src="'+o+'" alt="alt text"></p><p>我们使用的是 <code>Font class</code> 的方式，只需要这一个 <code>css</code> 链接就行，无需 <code>下载至本地</code>，想要本地预览的话才需要 <code>下载至本地</code>。</p><blockquote><p><code>iconfont</code> 有默认的前缀 <code>icon-</code>，可以设置为其他的，如我的一个项目设置为 <code>bap-icon-</code>，以防跟其他的冲突。</p></blockquote><p><img src="'+c+`" alt="alt text"></p><blockquote><p>注意 <code>uniapp</code> 项目拿到 <code>css</code> 链接放到 <code>index.html</code> 是不对的，这样做只在 <code>h5</code> 中生效，<code>小程序</code> 和 <code>APP</code> 都不生效，正确的做法是放到代码里面显示引入。下面会讲：</p></blockquote><ul><li>4.在 <code>style/index.scss</code> 中写上上面的 <code>css</code> 链接里面的内容（<code>style/index.scss</code> 已经在 <code>main.ts</code> 引入了，<code>q-uniapp</code> 模板已经内置），如下</li></ul><blockquote><p>注意： <code>url(//at.alicdn.com)</code> 里面的路径要改为 <code>url(https://at.alicdn.com)</code>，因为 APP 里面 <code>//</code> 是文件协议。 —— 设定 <code>https</code> 协议</p></blockquote><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">font-face</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  font-family</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> iconfont</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> /* Project id 4032028 */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//at.alicdn.com/t/c/font_4032028_mbcuy517h6.woff2?t=1713685013355</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> format</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">woff2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//at.alicdn.com/t/c/font_4032028_mbcuy517h6.woff?t=1713685013355</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      format</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">woff</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//at.alicdn.com/t/c/font_4032028_mbcuy517h6.ttf?t=1713685013355</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> format</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">truetype</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">iconfont</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  font-family</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> iconfont </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">!important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  font-size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  font-style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> normal</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  -webkit-font-smoothing</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> antialiased</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  -moz-osx-font-smoothing</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> grayscale</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-facebook</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">before</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\e87d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-twitter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">before</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\e646</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">icon-telegram</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">before</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\f245</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><ul><li><ol start="5"><li>编写代码，<code>&lt;i class=&quot;iconfont icon-facebook&quot;&gt;&lt;/i&gt;</code></li></ol></li><li><ol start="6"><li>预览，<code>h5 </code>端正常，APP 端不正常，小程序端看着正常，控制台也会报错</li></ol></li><li><ol start="7"><li>这个怎么处理呢？转成 <code>base64</code> 是最快捷的，<code>iconfont</code> 本身就支持， <code>3</code>步搞定：</li></ol><ul><li><p>7.1 如下图，勾选 <code>Base64</code></p><p><img src="`+d+'" alt="alt text"></p></li><li><p>7.2 生成新链接，并得到新的 <code>css</code> 代码</p></li></ul><p><img src="'+r+'" alt="alt text"></p><ul><li>7.3 引入新代码，刷新界面，小程序不报错了，APP 也正常了！</li></ul></li></ul>',22)]))}const _=i(g,[["render",y]]);export{b as __pageData,_ as default};
