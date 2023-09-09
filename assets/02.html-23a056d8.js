import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c as o,b as e,d as a,a as s,f as d}from"./app-4e8d5300.js";const c="/assets/image-20230411070305528-2d7fd37f.png",p="/assets/image-20230520193735778-74cd85f6.png",h="/assets/image-20230308234139526-e3e3140d.png",l="/assets/image-20230611150634840-e60a547c.png",m="/assets/75-p480-02b06895.jpeg",g={},u=d('<h1 id="《微信小游戏开发》勘误与增补列表" tabindex="-1"><a class="header-anchor" href="#《微信小游戏开发》勘误与增补列表" aria-hidden="true">#</a> 《微信小游戏开发》勘误与增补列表</h1><p>由于水平有限，时间仓促，书中难免有遗漏、错愕之处，恳求读者朋友斧正。如有发现，可以给我发邮件9830131@qq.com，或加我的微信（9830131）告诉我。</p><p>下面是2023年2月&amp;3月版本1已经发现的勘误列表。</p><h2 id="前端篇" tabindex="-1"><a class="header-anchor" href="#前端篇" aria-hidden="true">#</a> 前端篇</h2><h3 id="p17" tabindex="-1"><a class="header-anchor" href="#p17" aria-hidden="true">#</a> P17</h3><figure><img src="https://cdn.jsdelivr.net/gh/rixingyike/images@master/202320230711225054-2023-07-11-22-50-56.png" alt="20230711225054-2023-07-11-22-50-56" tabindex="0" loading="lazy"><figcaption>20230711225054-2023-07-11-22-50-56</figcaption></figure><p>有读者找不到，在箭头处可以添加一句：具体见后端篇第16课拓展部分。</p><h3 id="p55" tabindex="-1"><a class="header-anchor" href="#p55" aria-hidden="true">#</a> P55</h3><p>如下所示，<code>0+&quot;10&quot;</code>结果是&quot;010&quot;，并不是数值10，红框内应改为：</p><blockquote><p>使用加号与一个数字拼接：+ &quot;10&quot;，这种方式最简单直接，其实本质上也是隐式转换。</p></blockquote><figure><img src="'+c+'" alt="image-20230411070305528" tabindex="0" loading="lazy"><figcaption>image-20230411070305528</figcaption></figure><p>该处由@<strong>MuninnC</strong>指出，感谢勘误。</p><h3 id="p156-增补" tabindex="-1"><a class="header-anchor" href="#p156-增补" aria-hidden="true">#</a> P156(增补)</h3><img src="'+p+`" alt="image-20230520193735778" style="zoom:67%;"><p>在箭头所示的地方（“..进行改写。”）添加这样一段话：</p><blockquote><p>..进行改写。注意这里的3处事件，指代码清单4-2中的click、mousemove、click三个事件，分别将以touchEnd、touchMove和touchEnd事件改写。</p></blockquote><h3 id="p262" tabindex="-1"><a class="header-anchor" href="#p262" aria-hidden="true">#</a> P262</h3><p>第一处，第4行、第5行，两行注释应改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4.let d = {num: 100} // 变量d存在于栈中，{mum: 100}作为对象存在于堆内存中
5.let e = [100, 200] // 变量e存在于栈中，[100, 200]作为对象存在于堆内存中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二处，划线部分应改为：</p><p>其中c、b、a位于栈内存，我们是直接操作的；而e、d保存的是引用地址......</p><img src="`+h+'" alt="image-20230308234139526" style="zoom:25%;"><h3 id="p281" tabindex="-1"><a class="header-anchor" href="#p281" aria-hidden="true">#</a> P281</h3><figure><img src="'+l+'" alt="image-20230611150634840" tabindex="0" loading="lazy"><figcaption>image-20230611150634840</figcaption></figure><p>这里在“第7行...”这一段的后面，可能需要加一段解释内容。内容如下：</p><p>注意第9行这里的代码，让#pos指向defaultPos，为什么也没用？原因是这样的：如果使用第9行、而不是第10～11行的代码，在第一次执行reset时，会把defaultPos这个引用对象赋值给#pos，之后小球在运动过程中，更新的都是#pos——同时也是defaultPos对象，也就是说，defaultPos这个默认值对象被“污染”了，从第二次调用reset开始，它再也不能作为默认值对象被使用了——它里面的x、y值已经不是默认值，而是小球运动最后停止时的位置。这是一处因为引用对象而产生的“陷阱”，JS中引用对象在赋值时不会产生拷贝，可能会因此产生许多问题，这里是一个很好的示例。</p><h3 id="p480" tabindex="-1"><a class="header-anchor" href="#p480" aria-hidden="true">#</a> P480</h3><p>划线部分应改为：渲染上下文对象属于哪个画布，就对哪个画布生效。</p><figure><img src="'+m+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="后端篇" tabindex="-1"><a class="header-anchor" href="#后端篇" aria-hidden="true">#</a> 后端篇</h2><p>无</p>',31),f={href:"https://item.jd.com/10070363837259.html",target:"_blank",rel:"noopener noreferrer"};function _(b,x){const t=r("ExternalLinkIcon");return n(),o("div",null,[u,e("p",null,[a("京东购买链接："),e("a",f,[a("https://item.jd.com/10070363837259.html"),s(t)])])])}const q=i(g,[["render",_],["__file","02.html.vue"]]);export{q as default};
