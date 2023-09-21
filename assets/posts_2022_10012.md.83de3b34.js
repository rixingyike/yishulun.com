import{_ as a,o as e,c as l,Q as t}from"./chunks/framework.25d5caa7.js";const m=JSON.parse('{"title":"程序员的三个阶段与产品开发的两种哲学","description":"","frontmatter":{"sidebar":false,"date":"2022-10-01T00:00:00.000Z","category":["编程"]},"headers":[],"relativePath":"posts/2022/10012.md","filePath":"posts/2022/10012.md"}'),i={name:"posts/2022/10012.md"},p=t('<h1 id="程序员的三个阶段与产品开发的两种哲学" tabindex="-1">程序员的三个阶段与产品开发的两种哲学 <a class="header-anchor" href="#程序员的三个阶段与产品开发的两种哲学" aria-label="Permalink to &quot;程序员的三个阶段与产品开发的两种哲学&quot;">​</a></h1><blockquote><p>很多时候我们纠结，不知道如何选择，只是因为我们忘记了有当下处境这个变量。把处境考虑进去，所有问题都不会纠结。而如果没有处境，也没有产生纠结，这多半已经坏了，一定是我们看问题还不够全面。一个真正的问题，一定是充满矛盾，可以让我们说上一整天的话题。</p></blockquote><h2 id="人生的三个境界" tabindex="-1"><strong>人生的三个境界</strong> <a class="header-anchor" href="#人生的三个境界" aria-label="Permalink to &quot;**人生的三个境界**&quot;">​</a></h2><p>汪国真说人生有三个境界：</p><ul><li>第一境界，昨夜西风凋碧树，独上高楼，望尽天涯路；</li><li>第二境界，衣带渐宽终不悔，为伊消得人憔悴；</li><li>第三境界，众里寻他千百度，蓦然回首，那人却在灯火阑珊处。</li></ul><p>这应该是有能力上升到第三个境界的人，才能拥有的境界，对于大多数的人，第一个境界都不会觉醒，更不要说到达第二、第三境界了。</p><h2 id="程序员的三个阶段" tabindex="-1">程序员的三个阶段 <a class="header-anchor" href="#程序员的三个阶段" aria-label="Permalink to &quot;程序员的三个阶段&quot;">​</a></h2><p>今天听毕玄分享在淘宝做 HSF（High-speed Service Framework，是在阿里广泛使用的一个分布式 RPC 服务框架）时的经历，他将程序员生涯划分为了三个阶段：</p><ul><li>掌握了技能，可以快速进行业务开发的第一阶段；</li><li>善于解决问题的第二阶段；</li><li>善于将问题规避于无形之中的第三阶段。</li></ul><p>其中第二个阶段提一下。据说淘宝内部系统在增长到 100 个以后，在出现线上问题时，已经没有人明确知道是谁的问题并能推动问题得到处理了，这是大公司发展到一定程度就会出现的研发管理问题。幸运的是，当时淘宝有一帮聪明人，在一个运维人员的倡议下，他们建了一个内部群，这个群只能开发人员进入，多事的管理者不能进入。这个群存在的意义在于，它可以绕过一些规定，而快速定位和解决线上问题，而随着能解决的问题越多，也有更多的问题被投放到这个群里，这个群自然而然也变得重要起来</p><p>毕玄大佬提到的程序员第二阶段，就是在这样的一个群里成长起来的程序员。想要快速定位和解决问题，除了要先绕过一些腐朽的规定（例如后端的库前端不能访问，生产环境不能随便登录等）以外，更重要的是，要有扎实的计算机基础知识，要有广泛的技术知识积累，还要有敏锐的观察力。</p><p>第二阶段或许可以通过故障演练习得，但人为的故障演练的真实性和强度总是差一点；或许也可以通过阅读其他公司的事故报告而增加实践经验，但很少有公司愿意全盘分享自己的濒死经历。</p><p>第三个阶段可以通过经历第二经历而成长起来，然后在失败中总结经验，把代码写得鲁棒性更好、性能更好；也可以通过阅读，直接学习牛人总结的最佳实践。</p><h2 id="扁鹊大哥医于未病" tabindex="-1">扁鹊大哥医于未病 <a class="header-anchor" href="#扁鹊大哥医于未病" aria-label="Permalink to &quot;扁鹊大哥医于未病&quot;">​</a></h2><p>现在看一下《鹖/hé/冠子》世贤第十六篇，魏文王问扁鹊，他兄弟三人谁的医术最高。扁鹊说，他大哥的医术最高，他自己的最差。魏文王诧异，扁鹊解释说：「长兄于病视神，未有形而除之，故名不出于家。中兄治病，其在毫毛，故名不出于闾（lǘ，古代行政单位，周朝 25 户为一闾）。若扁鹊者，血脉、投毒药、副肌肤间，而名出闻于诸侯。」</p><p>什么意思？大概是说，他大哥在病还没有爆发的时候，就已经消灭了；他二哥是发现病刚有点苗头，就把病治了；而他自己，总是在病爆发的时候才施手治好。</p><p>这可能是扁鹊自谦，不过没有关系，这个故事可以帮助我们理解程序员的三个阶段。如果将扁鹊三兄弟对应于程序员的三个等级，是这样的：</p><ul><li>扁鹊处于第二阶段，善于定位与解决 Bug；</li><li>扁鹊二哥处于第二、第三阶段之间，Bug 还没有机会爆出，就被他重构掉了；</li><li>扁鹊大哥是第三阶段，预防 Bug 于写代码之时，所以外面没有人知道他的厉害。</li></ul><p>我们将程序员划分为三个阶段，而并不是三个等级，因为人的技术水平是会不断进步的。开始的时候是第一阶段，过一段时间可能就是第二、第三阶段了。能进入第一阶段的人，在接触到足够多的生产案例以后，也能步入到第二阶段；到达第二阶段后，稍加总结经验，也能步入第三阶段。或者直接从第一阶段学习最佳实践，先记下来并应用上，有人东西不懂也没有关系，先照做，在实践中慢慢会发现，哦，原来这个地方这么做是这个用意。</p><p>对于扁鹊，我更相信，很多时候并不是他不能医于未病，而是很多人病了之后才找他医治。对应于中小公司的开发，不一定是他们不懂得优化，很多时候他们更愿意牺牲性能和鲁棒性，而攫取更多的开发效率，毕竟生存大于一切，时间大于一切。</p><h2 id="面向不同读者群体的内容定位" tabindex="-1">面向不同读者群体的内容定位 <a class="header-anchor" href="#面向不同读者群体的内容定位" aria-label="Permalink to &quot;面向不同读者群体的内容定位&quot;">​</a></h2><p>当我们开发项目而进行技术选型时，我们应该选择脚本语言，还是应该选择编译型语言？我们应该使用跨平台的多段框架开发产品，还是应该分别在不同平台使用不同的原生技术开发产品？包括我们作者，在撰写相关的计算机图书时，我们应该如何界定一本书的读者群体呢？</p><p>这里涉及到两种开发哲学：</p><ul><li>一，尽快完成，用最快的效率先完成功能；</li><li>二，最大程度考虑到性能，将性能和稳定做到极致。</li></ul><p>对于中小公司，一般就是求快，先完成再说，所以他们倾向于选择脚本语言、选择跨平台的一站式开发框架。对于已经拥有高并发用户的大公司，他们倾向于选择编译型语言，将性能、鲁棒性、稳定性放在第一位考虑。</p><p>我们没有必要纠结要选择那种哲学，抛开团队所处的具体处境，而谈策略的选择是没有意义的，在艰难求生阶段，自然一切求快；而到了已经拥有大量用户和订单的阶段，自然求稳。</p><p>并且这两种生存哲学也不是矛盾的，团队开始起步的时候选择求快，后续发展起来了再选择求稳，都是正常选择。千万别自个跟自个别扭，在还没有达到温饱的时候就大搞优化；在应该求稳定的时候，又以敏捷开发和小步快跑要求自己，当开发进度和交付结果不如意的时候，又埋怨说：”多想回到刚开始创业的时候，那时候我们 3 小时就发布一个版本。“</p><p>呵呵，那个时候应该还可以更快，3 分钟就可以发布一个版本，因为根本没有用户嘛，什么问题都不会显现。联网软件，用户在 1000 个、1 万个、10 万个、100 万个、1000 万个的时候面临的问题是不一样的。所有的资源都是有限的，只有资源消耗大的时候，一些问题才会暴露出来。</p><p>当作者在写书时，也没有必要纠结应该选择定位哪一类读者。开发者都是会成长的，今天他们要求快，明天可能就求稳，如果明天他们还活着的话。</p><p>在任何时候，考虑任何问题，都应该把当下处境考虑进去，这是辩证法的基本原则。</p>',30),o=[p];function r(s,n,c,h,d,u){return e(),l("div",null,o)}const f=a(i,[["render",r]]);export{m as __pageData,f as default};
