import{_ as a,o as t,c as e,Q as s}from"./chunks/framework.25d5caa7.js";const o="/assets/22288.da063c69.jpeg",r="/assets/22291.b25591e0.png",n="/assets/22314.864b6845.jpeg",i="/assets/22317.b136fc09.png",p="/assets/22319.dd286fac.png",l="/assets/22328.7c30f6f0.jpeg",c="/assets/22346.c9644e3c.jpeg",h="/assets/22353.4c848922.jpeg",d="/assets/22362.45b5bb42.jpeg",g="/assets/22376.dbb9661c.jpeg",v=JSON.parse('{"title":"小程序从0到1：1月25日群问题集锦","description":"","frontmatter":{"tags":["小程序从0到1"],"sidebar":false,"date":"2018-01-25T00:00:00.000Z"},"headers":[],"relativePath":"posts/2018/03.md","filePath":"posts/2018/03.md"}'),_={name:"posts/2018/03.md"},m=s('<h1 id="小程序从0到1-1月25日群问题集锦" tabindex="-1">小程序从0到1：1月25日群问题集锦 <a class="header-anchor" href="#小程序从0到1-1月25日群问题集锦" aria-label="Permalink to &quot;小程序从0到1：1月25日群问题集锦&quot;">​</a></h1><h2 id="_1-大家都是在第三方平台上做的小程序吗" tabindex="-1"><strong>1，大家都是在第三方平台上做的小程序吗？</strong> <a class="header-anchor" href="#_1-大家都是在第三方平台上做的小程序吗" aria-label="Permalink to &quot;**1，大家都是在第三方平台上做的小程序吗？**&quot;">​</a></h2><p>据作者观察，大家好像还是用微信开发者工具最多。</p><h2 id="_2-有没有朋友遇到过-for循环节点显示不出来的情况" tabindex="-1"><strong>2，有没有朋友遇到过，for循环节点显示不出来的情况？</strong> <a class="header-anchor" href="#_2-有没有朋友遇到过-for循环节点显示不出来的情况" aria-label="Permalink to &quot;**2，有没有朋友遇到过，for循环节点显示不出来的情况？**&quot;">​</a></h2><p>​ <img src="'+o+'" alt="0" style="zoom:50%;"></p><p>这种情况，可以在Wxml面板中查看button节点有没有生成，如果有，再查看样式的设置是否正确。关于Wxml面板，如下所示。需要注意的是，在小游戏版本的微信开发者工具中，是没有Wxml面板的，虽然它们的名字一样。</p><p>​ <img src="'+r+'" alt="0" style="zoom:33%;"></p><h2 id="_3-一个帐号可以弄几个小程序啊" tabindex="-1"><strong>3，一个帐号可以弄几个小程序啊？</strong> <a class="header-anchor" href="#_3-一个帐号可以弄几个小程序啊" aria-label="Permalink to &quot;**3，一个帐号可以弄几个小程序啊？**&quot;">​</a></h2><p>企业、政府、媒体、其他组织主体可以注册50个小程序，个体户和个人类型主体可注册5个小程序。</p><h2 id="_4-这个是在什么地方设置呢" tabindex="-1"><strong>4，这个是在什么地方设置呢？</strong> <a class="header-anchor" href="#_4-这个是在什么地方设置呢" aria-label="Permalink to &quot;**4，这个是在什么地方设置呢？**&quot;">​</a></h2><p>​ <img src="'+n+'" alt="0" style="zoom:50%;"></p><p>在项目“详情”中</p><img src="'+i+'" alt="0" style="zoom:33%;"><p>反选“不检验安全域名”：</p><p>​ <img src="'+p+'" alt="0" style="zoom:50%;"></p><p>拟增加进快速创建项目，或第一次调用接口一节中。</p><h2 id="_5-第7-1-4节-命令行工具是指" tabindex="-1"><strong>5，第7.1.4节，命令行工具是指？</strong> <a class="header-anchor" href="#_5-第7-1-4节-命令行工具是指" aria-label="Permalink to &quot;**5，第7.1.4节，命令行工具是指？**&quot;">​</a></h2><p>​ <img src="'+l+'" alt="0" style="zoom:33%;"></p><p>在win上指命令行窗口（cmd），在mac和linux上指终端窗口。如果安装了git bash，在win上直接使用git bash就可以了。</p><h2 id="_6-建议群主搞个go和类库安装的详细说明-小白太多" tabindex="-1"><strong>6，建议群主搞个go和类库安装的详细说明，小白太多？</strong> <a class="header-anchor" href="#_6-建议群主搞个go和类库安装的详细说明-小白太多" aria-label="Permalink to &quot;**6，建议群主搞个go和类库安装的详细说明，小白太多？**&quot;">​</a></h2><p>书第7.1.1节，即是“安装Golang语言包”。Go语言类库的安装，十分简单，一条指令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">go get xx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">go get xx</span></span></code></pre></div><p>后面跟类库的git网址，一般是github的项目主页地址。</p><h2 id="_7-我从内嵌的h5页面跳转回小程序页面-怎么跳转" tabindex="-1"><strong>7，我从内嵌的H5页面跳转回小程序页面，怎么跳转？</strong> <a class="header-anchor" href="#_7-我从内嵌的h5页面跳转回小程序页面-怎么跳转" aria-label="Permalink to &quot;**7，我从内嵌的H5页面跳转回小程序页面，怎么跳转？**&quot;">​</a></h2><p>可以考虑 wx.miniProgram.navigateBack 接口。详见：</p><p><a href="https://mp.weixin.qq.com/debug/wxadoc/dev/component/web-view.html" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/debug/wxadoc/dev/component/web-view.html</a></p><h2 id="_8-服务器空间需要买多大的" tabindex="-1"><strong>8，服务器空间需要买多大的？</strong> <a class="header-anchor" href="#_8-服务器空间需要买多大的" aria-label="Permalink to &quot;**8，服务器空间需要买多大的？**&quot;">​</a></h2><p>如果选择了ubuntu系统，服务器主机默认一般有20G系统盘，足够了，程序基本不占空间。涉及的图像、视频的存储，建议用存储云；数据存储使用关系数据库，例如mysql。</p><h2 id="_9-关于js-js-not-defined-错误" tabindex="-1"><strong>9，关于js“js not defined”错误？</strong> <a class="header-anchor" href="#_9-关于js-js-not-defined-错误" aria-label="Permalink to &quot;**9，关于js“js not defined”错误？**&quot;">​</a></h2><p>​ <img src="'+c+'" alt="0" style="zoom:33%;"></p><p>这种错误一般是没有找到对应的文件，例如sim.js/index.js。请在资源管理器中查看一下文件是否存在，还有引入的路径有没有写错。</p><h2 id="_10-请问这种框是什么组件-电影选座页面" tabindex="-1"><strong>10，请问这种框是什么组件？电影选座页面</strong> <a class="header-anchor" href="#_10-请问这种框是什么组件-电影选座页面" aria-label="Permalink to &quot;**10，请问这种框是什么组件？电影选座页面**&quot;">​</a></h2><p>​ <img src="'+h+'" alt="0" style="zoom:25%;"></p><p>这种功能复杂的页面，都是自定义实现的。小程序自带的组件，大多数都极简单，像DataPicker已经算是复杂的组件了。</p><h2 id="_11-appid不够用了" tabindex="-1"><strong>11，AppID不够用了</strong> <a class="header-anchor" href="#_11-appid不够用了" aria-label="Permalink to &quot;**11，AppID不够用了**&quot;">​</a></h2><p>现在练习前后端，要输入小程序 的Appid，一个手机号只能注册5个小程序，那我现在练习这个是不是就占了一个？每练习一个就占一个名额？</p><p>重复使用一个就可以了。</p><h2 id="_12-请问老师第7章的服务器可以直接放在我的腾讯云服务器上运行-然后我通过服务器的ip地址访问吗" tabindex="-1"><strong>12，请问老师第7章的服务器可以直接放在我的腾讯云服务器上运行，然后我通过服务器的ip地址访问吗？</strong> <a class="header-anchor" href="#_12-请问老师第7章的服务器可以直接放在我的腾讯云服务器上运行-然后我通过服务器的ip地址访问吗" aria-label="Permalink to &quot;**12，请问老师第7章的服务器可以直接放在我的腾讯云服务器上运行，然后我通过服务器的ip地址访问吗？**&quot;">​</a></h2><p>完全可以，作者授权所有读者免费使用。上线后，可以通过IP访问。</p><h2 id="_13-笑林百家的图书存储-如果不用七牛空间怎么弄" tabindex="-1"><strong>13，笑林百家的图书存储，如果不用七牛空间怎么弄？</strong> <a class="header-anchor" href="#_13-笑林百家的图书存储-如果不用七牛空间怎么弄" aria-label="Permalink to &quot;**13，笑林百家的图书存储，如果不用七牛空间怎么弄？**&quot;">​</a></h2><p>​ <img src="'+d+'" alt="0" style="zoom:50%;"></p><p>可以尝试自己写一个直接存于硬盘，或者用腾讯的云存储。但这样的话，和上面的配置就没有任何关系了，它仅适用于qiniu的云存储。</p><p>话又说回来，为啥不用呢？许式伟还没有给我广告费，推荐读者用它，仅是因它免费易用。</p><h2 id="_14-控制台在那里" tabindex="-1"><strong>14，控制台在那里？</strong> <a class="header-anchor" href="#_14-控制台在那里" aria-label="Permalink to &quot;**14，控制台在那里？**&quot;">​</a></h2><p>微信开发者工具的console面板。同学，请注意看书，不要开小差。</p><h2 id="_15-浏览器访问接口没有正常输出" tabindex="-1"><strong>15，浏览器访问接口没有正常输出？</strong> <a class="header-anchor" href="#_15-浏览器访问接口没有正常输出" aria-label="Permalink to &quot;**15，浏览器访问接口没有正常输出？**&quot;">​</a></h2><p>​ <img src="https://note.youdao.com/yws/public/resource/b4464d346a4b64288ac091aa86b09291/xmlnote/4CBA46764F36457190BDDB3815A40247/22371" alt="0" style="zoom:50%;"></p><p>这里的地址，不用加s，使用http即可。另外，在启动debug.sh脚本后，出现如下的阻塞状态，这是正常的。</p><p>​ <img src="'+g+'" alt="0"></p>',49),b=[m];function u(f,q,x,k,P,j){return t(),e("div",null,b)}const w=a(_,[["render",u]]);export{v as __pageData,w as default};
