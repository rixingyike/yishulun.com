const e=JSON.parse('{"key":"v-37886432","path":"/posts/2022/0913.html","title":"二极管工作原理","lang":"zh-CN","frontmatter":{"sidebar":false,"date":"2022-09-13T00:00:00.000Z","category":["编程"],"tag":["计算机原理"],"description":"二极管工作原理 数字信号纯粹是给我们人类阅读和理解用的，在计算机的物质世界里，就是不同的具象化形态。这和我们人类的「意识」很像，人到底有没有意识？人的意识就像计算机世界的数字信号一样，其实是不存在的。当医生把死人的大脑打开的时候，和我们把磁盘打开看到的东西是一样的，什么也没有。 二极管的工作原理是什么？ 还有这三个问题： 机器指令（整数）是如何转换成高低电平，从而被硬件识别？ 计算机最底层的机器语言是如何变成物理电平信号输给 CPU 的呢？ 程序里 0 和 1 是怎么转化成高低电平的？（最初的受 0 和 1 控制的高低电平如何产生的）？ 这三个问题本质上是一个问题，并且，和二极管的工作原理是密不可分的。","head":[["meta",{"property":"og:url","content":"https://yishulun.com/posts/2022/0913.html"}],["meta",{"property":"og:site_name","content":"艺述论博客"}],["meta",{"property":"og:title","content":"二极管工作原理"}],["meta",{"property":"og:description","content":"二极管工作原理 数字信号纯粹是给我们人类阅读和理解用的，在计算机的物质世界里，就是不同的具象化形态。这和我们人类的「意识」很像，人到底有没有意识？人的意识就像计算机世界的数字信号一样，其实是不存在的。当医生把死人的大脑打开的时候，和我们把磁盘打开看到的东西是一样的，什么也没有。 二极管的工作原理是什么？ 还有这三个问题： 机器指令（整数）是如何转换成高低电平，从而被硬件识别？ 计算机最底层的机器语言是如何变成物理电平信号输给 CPU 的呢？ 程序里 0 和 1 是怎么转化成高低电平的？（最初的受 0 和 1 控制的高低电平如何产生的）？ 这三个问题本质上是一个问题，并且，和二极管的工作原理是密不可分的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://yishulun.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-06T13:48:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二极管工作原理"}],["meta",{"property":"article:author","content":"LIYI"}],["meta",{"property":"article:tag","content":"计算机原理"}],["meta",{"property":"article:published_time","content":"2022-09-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-06T13:48:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二极管工作原理\\",\\"image\\":[\\"https://yishulun.com/\\"],\\"datePublished\\":\\"2022-09-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-06T13:48:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LIYI\\",\\"url\\":\\"https://yishulun.com/\\"}]}"]]},"headers":[{"level":2,"title":"什么是半导体？","slug":"什么是半导体","link":"#什么是半导体","children":[]},{"level":2,"title":"二极管的构成","slug":"二极管的构成","link":"#二极管的构成","children":[]},{"level":2,"title":"二极管的工作原理是什么？","slug":"二极管的工作原理是什么","link":"#二极管的工作原理是什么","children":[{"level":3,"title":"正向偏置和反向偏置","slug":"正向偏置和反向偏置","link":"#正向偏置和反向偏置","children":[]},{"level":3,"title":"伏安特性曲线","slug":"伏安特性曲线","link":"#伏安特性曲线","children":[]},{"level":3,"title":"什么是二极管的击穿态？","slug":"什么是二极管的击穿态","link":"#什么是二极管的击穿态","children":[]}]},{"level":2,"title":"电信号怎么转化为数字信号？","slug":"电信号怎么转化为数字信号","link":"#电信号怎么转化为数字信号","children":[{"level":3,"title":"数字信号在计算机内是如何暂存的？","slug":"数字信号在计算机内是如何暂存的","link":"#数字信号在计算机内是如何暂存的","children":[]},{"level":3,"title":"计算机内的高低电平是怎么产生的？","slug":"计算机内的高低电平是怎么产生的","link":"#计算机内的高低电平是怎么产生的","children":[]}]},{"level":2,"title":"相关问题","slug":"相关问题","link":"#相关问题","children":[{"level":3,"title":"二极管正负极如何判定？","slug":"二极管正负极如何判定","link":"#二极管正负极如何判定","children":[]},{"level":3,"title":"什么是二极管思维？","slug":"什么是二极管思维","link":"#什么是二极管思维","children":[]}]},{"level":2,"title":"送一张畅学卡","slug":"送一张畅学卡","link":"#送一张畅学卡","children":[]}],"git":{"createdTime":1671674770000,"updatedTime":1691329720000,"contributors":[{"name":"LIYI","email":"9830131@qq.com","commits":4}]},"readingTime":{"minutes":13.22,"words":3966},"filePathRelative":"posts/2022/0913.md","localizedDate":"2022年9月13日","excerpt":"<h1> 二极管工作原理</h1>\\n<blockquote>\\n<p>数字信号纯粹是给我们人类阅读和理解用的，在计算机的物质世界里，就是不同的具象化形态。这和我们人类的「意识」很像，人到底有没有意识？人的意识就像计算机世界的数字信号一样，其实是不存在的。当医生把死人的大脑打开的时候，和我们把磁盘打开看到的东西是一样的，什么也没有。</p>\\n</blockquote>\\n<p>二极管的工作原理是什么？</p>\\n<p>还有这三个问题：</p>\\n<ul>\\n<li>机器指令（整数）是如何转换成高低电平，从而被硬件识别？</li>\\n<li>计算机最底层的机器语言是如何变成物理电平信号输给 CPU 的呢？</li>\\n<li>程序里 0 和 1 是怎么转化成高低电平的？（最初的受 0 和 1 控制的高低电平如何产生的）？</li>\\n</ul>\\n<p>这三个问题本质上是一个问题，并且，和二极管的工作原理是密不可分的。</p>\\n","copyright":{"author":"LIYI","license":"CC BY-NC-ND 4.0"},"autoDesc":true}');export{e as data};
