import{_ as a,o as e,c as t,V as o}from"./chunks/framework.b2940161.js";const s="/assets/image-20230411070305528.2d7fd37f.png",p="/assets/image-20230520193735778.74cd85f6.png",r="/assets/image-20230308234139526.e3e3140d.png",l="/assets/image-20230611150634840.e60a547c.png",i="/assets/75-p480.02b06895.jpeg",f=JSON.parse('{"title":"微信小游戏开发》勘误与增补列表","description":"","frontmatter":{"title":"微信小游戏开发》勘误与增补列表","date":"2023-03-08T23:33:47.000Z","bookToc":false,"star":true},"headers":[],"relativePath":"posts/2023/02.md","filePath":"posts/2023/02.md","lastUpdated":1691717014000}'),n={name:"posts/2023/02.md"},c=o('<h1 id="《微信小游戏开发》勘误与增补列表" tabindex="-1">《微信小游戏开发》勘误与增补列表 <a class="header-anchor" href="#《微信小游戏开发》勘误与增补列表" aria-label="Permalink to &quot;《微信小游戏开发》勘误与增补列表&quot;">​</a></h1><p>由于水平有限，时间仓促，书中难免有遗漏、错愕之处，恳求读者朋友斧正。如有发现，可以给我发邮件9830131@qq.com，或加我的微信（9830131）告诉我。</p><p>下面是2023年2月&amp;3月版本1已经发现的勘误列表。</p><h2 id="前端篇" tabindex="-1">前端篇 <a class="header-anchor" href="#前端篇" aria-label="Permalink to &quot;前端篇&quot;">​</a></h2><h3 id="p17" tabindex="-1">P17 <a class="header-anchor" href="#p17" aria-label="Permalink to &quot;P17&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images@master/202320230711225054-2023-07-11-22-50-56.png" alt="20230711225054-2023-07-11-22-50-56"></p><p>有读者找不到，在箭头处可以添加一句：具体见后端篇第16课拓展部分。</p><h3 id="p55" tabindex="-1">P55 <a class="header-anchor" href="#p55" aria-label="Permalink to &quot;P55&quot;">​</a></h3><p>如下所示，<code>0+&quot;10&quot;</code>结果是&quot;010&quot;，并不是数值10，红框内应改为：</p><blockquote><p>使用加号与一个数字拼接：+ &quot;10&quot;，这种方式最简单直接，其实本质上也是隐式转换。</p></blockquote><p><img src="'+s+'" alt="image-20230411070305528"></p><p>该处由@<strong>MuninnC</strong>指出，感谢勘误。</p><h3 id="p156-增补" tabindex="-1">P156(增补) <a class="header-anchor" href="#p156-增补" aria-label="Permalink to &quot;P156(增补)&quot;">​</a></h3><img src="'+p+`" alt="image-20230520193735778" style="zoom:67%;"><p>在箭头所示的地方（“..进行改写。”）添加这样一段话：</p><blockquote><p>..进行改写。注意这里的3处事件，指代码清单4-2中的click、mousemove、click三个事件，分别将以touchEnd、touchMove和touchEnd事件改写。</p></blockquote><h3 id="p262" tabindex="-1">P262 <a class="header-anchor" href="#p262" aria-label="Permalink to &quot;P262&quot;">​</a></h3><p>第一处，第4行、第5行，两行注释应改为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">4.let d = {num: 100} // 变量d存在于栈中，{mum: 100}作为对象存在于堆内存中</span></span>
<span class="line"><span style="color:#A6ACCD;">5.let e = [100, 200] // 变量e存在于栈中，[100, 200]作为对象存在于堆内存中</span></span></code></pre></div><p>第二处，划线部分应改为：</p><p>其中c、b、a位于栈内存，我们是直接操作的；而e、d保存的是引用地址......</p><img src="`+r+'" alt="image-20230308234139526" style="zoom:25%;"><h3 id="p281" tabindex="-1">P281 <a class="header-anchor" href="#p281" aria-label="Permalink to &quot;P281&quot;">​</a></h3><p><img src="'+l+'" alt="image-20230611150634840"></p><p>这里在“第7行...”这一段的后面，可能需要加一段解释内容。内容如下：</p><p>注意第9行这里的代码，让#pos指向defaultPos，为什么也没用？原因是这样的：如果使用第9行、而不是第10～11行的代码，在第一次执行reset时，会把defaultPos这个引用对象赋值给#pos，之后小球在运动过程中，更新的都是#pos——同时也是defaultPos对象，也就是说，defaultPos这个默认值对象被“污染”了，从第二次调用reset开始，它再也不能作为默认值对象被使用了——它里面的x、y值已经不是默认值，而是小球运动最后停止时的位置。这是一处因为引用对象而产生的“陷阱”，JS中引用对象在赋值时不会产生拷贝，可能会因此产生许多问题，这里是一个很好的示例。</p><h3 id="p480" tabindex="-1">P480 <a class="header-anchor" href="#p480" aria-label="Permalink to &quot;P480&quot;">​</a></h3><p>划线部分应改为：渲染上下文对象属于哪个画布，就对哪个画布生效。</p><p><img src="'+i+'" alt="img"></p><h2 id="后端篇" tabindex="-1">后端篇 <a class="header-anchor" href="#后端篇" aria-label="Permalink to &quot;后端篇&quot;">​</a></h2><p>无</p><p>京东购买链接：<a href="https://item.jd.com/10070363837259.html" target="_blank" rel="noreferrer">https://item.jd.com/10070363837259.html</a></p>',32),d=[c];function h(m,u,_,g,q,P){return e(),t("div",null,d)}const k=a(n,[["render",h]]);export{f as __pageData,k as default};
