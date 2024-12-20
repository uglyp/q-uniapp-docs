import{_ as e,c as d,a2 as r,o as i}from"./chunks/framework.D3xnaaT3.js";const p=JSON.parse('{"title":"UI 库选型篇","description":"","frontmatter":{},"headers":[],"relativePath":"base/ui/ui.md","filePath":"base/ui/ui.md","lastUpdated":1734704359000}'),o={name:"base/ui/ui.md"};function a(n,t,l,c,u,s){return i(),d("div",null,t[0]||(t[0]=[r('<h1 id="ui-库选型篇" tabindex="-1">UI 库选型篇 <a class="header-anchor" href="#ui-库选型篇" aria-label="Permalink to &quot;UI 库选型篇&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p><code>q-uniapp</code> 作为 <code>uniapp</code> 的开发框架，<code>UI 框架</code> 的选择特别重要。</p><p><code>q-uniapp</code> 作为 <code>vue3</code> 项目，<code>vue2</code> 时代的 <code>uview</code> 就不考虑在内了。但是在 <code>uview</code> 的基础上衍生出来的支持 <code>vue3</code> 的 <code>uview 系</code> 的 <code>ui框架</code> 还有不少，而且热度很高。</p><p>官方维护的 <code>uni-ui</code>，支持全端，而且有类型提示，但样式略丑，且其他优秀的 <code>UI 库</code> 已经包含了 <code>uni-ui</code> 的组件，所以直接用第三方 <code>UI 库</code> 就好了。</p><blockquote><p>tip1: <code>uni-ui</code> 本身是 <code>js</code> 开发的，但是官方提供了完备的类型提示( by <code>@uni-helper/uni-ui-types</code>)所以看起来就像是 <code>ts</code> 开发的一样，开发体验很好。所有的组件都有提示，很方便，很贴心。</p></blockquote><blockquote><p>tip2: 再次重申一下 <code>uview</code> 不支持 <code>Vue3</code>，不然又有人问我为啥不用 <code>uview</code>。（臣妾做不到啊~）</p></blockquote><h2 id="ui-库总览" tabindex="-1">UI 库总览 <a class="header-anchor" href="#ui-库总览" aria-label="Permalink to &quot;UI 库总览&quot;">​</a></h2><p>经过搜寻了一番，目前参加对比的 UI 框架有：</p><ul><li>uv-ui (uveiw 系) - <a href="https://www.uvui.cn/" target="_blank" rel="noreferrer">文档地址</a></li><li>uview-plus (uveiw 系) - <a href="https://uiadmin.net/uview-plus/" target="_blank" rel="noreferrer">文档地址</a></li><li>Wot Design Uni (wot 系) - <a href="https://wot-design-uni.netlify.app/" target="_blank" rel="noreferrer">文档地址</a></li><li>TuniaoUI （图鸟系） - <a href="https://vue3.tuniaokj.com/zh-CN/" target="_blank" rel="noreferrer">文档地址</a></li></ul><p>还有 2 个 UI 框架也很优秀，但是只有部分组件开源免费，大半组件收费，咱暂不考虑。</p><ul><li>FirstUI <a href="https://doc.firstui.cn/" target="_blank" rel="noreferrer">文档链接</a></li><li>ThorUI <a href="https://thorui.cn/doc/" target="_blank" rel="noreferrer">文档链接</a></li></ul><hr><p>下面通过几个方面对 <code>UI 库</code> 进行对比</p><h2 id="开源热度" tabindex="-1">开源热度 <a class="header-anchor" href="#开源热度" aria-label="Permalink to &quot;开源热度&quot;">​</a></h2><p>截止到 <code>2024-05-30</code> 发表文章时的数据:</p><table tabindex="0"><thead><tr><th>UI 框架</th><th style="text-align:center;">uv-ui</th><th style="text-align:center;">uview-plus</th><th style="text-align:center;">wot-ui</th><th style="text-align:center;">TuniaoUI</th></tr></thead><tbody><tr><td>github stars</td><td style="text-align:center;">568</td><td style="text-align:center;">362</td><td style="text-align:center;">492</td><td style="text-align:center;">192</td></tr><tr><td>gitee stars</td><td style="text-align:center;">555</td><td style="text-align:center;">126</td><td style="text-align:center;">35</td><td style="text-align:center;">-</td></tr><tr><td>github forks</td><td style="text-align:center;">1.1k</td><td style="text-align:center;">158</td><td style="text-align:center;">188</td><td style="text-align:center;">20</td></tr><tr><td>gitee forks</td><td style="text-align:center;">75</td><td style="text-align:center;">4</td><td style="text-align:center;">30</td><td style="text-align:center;">-</td></tr></tbody></table><p>其实到这里就一决高下了，<code>github star 数</code>： <code>uv-ui(568)</code> &gt; <code>wot-ui(492)</code> &gt; <code>uview-plus(362)</code> &gt; <code>TuniaoUI(192)</code>，其中 <code>uv-ui</code> 和 <code>wot-ui</code> 拔得头筹。</p><p><a href="https://star-history.com/#Moonofweisheng/wot-design-uni&amp;climblee/uv-ui&amp;ijry/uview-plus&amp;tuniaoTech/tuniaoui-rc-vue3-uniapp&amp;Date" target="_blank" rel="noreferrer"><img src="https://api.star-history.com/svg?repos=Moonofweisheng/wot-design-uni,climblee/uv-ui,ijry/uview-plus,tuniaoTech/tuniaoui-rc-vue3-uniapp&amp;type=Date" alt="Star History Chart"></a></p><p>源码仓库地址展示如下</p><table tabindex="0"><thead><tr><th>UI 框架</th><th>文档地址</th><th>github</th><th>gitee</th></tr></thead><tbody><tr><td>uv-ui</td><td><a href="https://www.uvui.cn/" target="_blank" rel="noreferrer">https://www.uvui.cn/</a></td><td><a href="https://github.com/climblee/uv-ui" target="_blank" rel="noreferrer">https://github.com/climblee/uv-ui</a></td><td><a href="https://gitee.com/climblee/uv-ui" target="_blank" rel="noreferrer">https://gitee.com/climblee/uv-ui</a></td></tr><tr><td>uview-plus</td><td><a href="https://uiadmin.net/uview-plus/" target="_blank" rel="noreferrer">https://uiadmin.net/uview-plus/</a></td><td><a href="https://github.com/ijry/uview-plus" target="_blank" rel="noreferrer">https://github.com/ijry/uview-plus</a></td><td><a href="https://gitee.com/uiadmin/uview-plus" target="_blank" rel="noreferrer">https://gitee.com/uiadmin/uview-plus</a></td></tr><tr><td>wot-ui</td><td><a href="https://wot-design-uni.netlify.app/" target="_blank" rel="noreferrer">https://wot-design-uni.netlify.app/</a></td><td><a href="https://github.com/Moonofweisheng/wot-design-uni" target="_blank" rel="noreferrer">https://github.com/Moonofweisheng/wot-design-uni</a></td><td><a href="https://gitee.com/wot-design-uni/wot-design-uni" target="_blank" rel="noreferrer">https://gitee.com/wot-design-uni/wot-design-uni</a></td></tr><tr><td>TuniaoUI</td><td><a href="https://vue3.tuniaokj.com/zh-CN/" target="_blank" rel="noreferrer">https://vue3.tuniaokj.com/zh-CN/</a></td><td><a href="https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp" target="_blank" rel="noreferrer">https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp</a></td><td>-</td></tr></tbody></table><h2 id="多端支持情况" tabindex="-1">多端支持情况 <a class="header-anchor" href="#多端支持情况" aria-label="Permalink to &quot;多端支持情况&quot;">​</a></h2><table tabindex="0"><thead><tr><th>UI 框架</th><th>uv-ui</th><th>uview-plus</th><th>wot-ui</th><th>TuniaoUI</th></tr></thead><tbody><tr><td>h5</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>app(ios)</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>app(android)</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>微信小程序</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>支付宝小程序</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>QQ 小程序</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>百度小程序</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>头条小程序</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr></tbody></table><h2 id="组件数量" tabindex="-1">组件数量 <a class="header-anchor" href="#组件数量" aria-label="Permalink to &quot;组件数量&quot;">​</a></h2><table tabindex="0"><thead><tr><th>UI 框架</th><th style="text-align:center;">uv-ui</th><th style="text-align:center;">uview-plus</th><th style="text-align:center;">wot-ui</th><th style="text-align:center;">TuniaoUI</th></tr></thead><tbody><tr><td>总数</td><td style="text-align:center;">67</td><td style="text-align:center;">67</td><td style="text-align:center;">71</td><td style="text-align:center;">55</td></tr><tr><td>基础组件</td><td style="text-align:center;">8</td><td style="text-align:center;">11</td><td style="text-align:center;">8</td><td style="text-align:center;">5</td></tr><tr><td>表单组件</td><td style="text-align:center;">16</td><td style="text-align:center;">17</td><td style="text-align:center;">20</td><td style="text-align:center;">14</td></tr><tr><td>数据组件</td><td style="text-align:center;">13</td><td style="text-align:center;">4</td><td style="text-align:center;">18</td><td style="text-align:center;">4</td></tr><tr><td>反馈组件</td><td style="text-align:center;">8</td><td style="text-align:center;">10</td><td style="text-align:center;">16</td><td style="text-align:center;">8</td></tr><tr><td>布局组件</td><td style="text-align:center;">7</td><td style="text-align:center;">9</td><td style="text-align:center;">-</td><td style="text-align:center;">8</td></tr><tr><td>导航组件</td><td style="text-align:center;">8</td><td style="text-align:center;">8</td><td style="text-align:center;">9</td><td style="text-align:center;">5</td></tr><tr><td>其他组件</td><td style="text-align:center;">7</td><td style="text-align:center;">8</td><td style="text-align:center;">-</td><td style="text-align:center;">5</td></tr><tr><td>内容组件</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">6</td></tr></tbody></table><p>组件数：<code>wot(71)</code> &gt; <code>uv-ui(67)</code> = <code>uview-plus(67)</code> &gt; <code>TuniaoUI(55)</code></p><h2 id="ts-支持情况" tabindex="-1"><code>ts</code> 支持情况 <a class="header-anchor" href="#ts-支持情况" aria-label="Permalink to &quot;`ts` 支持情况&quot;">​</a></h2><p>查看 4 个组件库的源码，可以了解到：</p><ul><li><code>uv-ui</code> 和 <code>uView-plus</code> 都是 <code>js</code> 写的，并非 <code>ts</code>，可以通过 <code>ttou/uv-typings</code> 提供类型支持。</li><li><code>wot</code> 和 <code>TuniaoUI</code> 都是 <code>ts</code> 写的，编码体验会好很多。</li></ul><blockquote><p>小知识：代码里如何辨别一个库是否有 ts 支持，写代码的时候按 <code>ctrl + i</code> (Mac 里 <code>cmd + i</code>)，如果有提示就是有，啥都没有就是没有。</p><p>举个例子，编写 <code>&lt;xx-button type=&quot;&quot; ...</code>，在 <code>type=&quot;&quot;</code> 双引号里面按 <code>ctrl + i</code>，看提示就知道了。</p></blockquote><ul><li><p><code>wot</code> 有提示</p></li><li><p><s><code>uv-ui</code> 无提示</s></p></li></ul><p>把 <code>tsconfig.json</code> 文件里面 <code>types</code> 里面的 <code>@ttou/uv-typings/v3</code> 改为 <code>@ttou/uv-typings/v2</code> 就正常了（也是群友发现的），如下。</p><h2 id="wot-ui-和-uv-ui" tabindex="-1"><code>wot-ui</code> 和 <code>uv-ui</code> <a class="header-anchor" href="#wot-ui-和-uv-ui" aria-label="Permalink to &quot;`wot-ui` 和 `uv-ui`&quot;">​</a></h2><p><code>wot-ui</code> 和 <code>uv-ui</code></p><p><a href="https://star-history.com/#Moonofweisheng/wot-design-uni&amp;climblee/uv-ui&amp;Date" target="_blank" rel="noreferrer"><img src="https://api.star-history.com/svg?repos=Moonofweisheng/wot-design-uni,climblee/uv-ui&amp;type=Date" alt="Star History Chart"></a></p><p>目前 <code>wot-ui</code> 还是比不过 <code>uv-ui</code> 的，但是 <code>wot-ui</code> 有反超的势头。主要是看了源码后，还是选定了 <code>vue3+ts</code> 编写的 <code>wot-ui</code>。</p>',36)]))}const g=e(o,[["render",a]]);export{p as __pageData,g as default};
