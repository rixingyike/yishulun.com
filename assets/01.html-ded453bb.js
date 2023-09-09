const t=JSON.parse('{"key":"v-3238a3bb","path":"/posts/2010/01.html","title":"命名空间：如何控制未知方法的调用","lang":"zh-CN","frontmatter":{"sidebar":false,"date":"2010-05-01T00:00:00.000Z","tag":["AS3 Expert"],"description":"命名空间：如何控制未知方法的调用 命名空间对于程序员来讲，应当不会陌生，几乎每写一行代码，就要用到一止一个命名空间。AS3默认大约打开了6个命名空间。 1，AS3提供的常用的7个命名空间 internal,private,protected,public,static,as3，前5个命名空间作为类属性访问控制说明，在AS3中 是默认打开的。最后一个命名空间as3，默认也是被打开的，一般很少显式用到它。flash_proxy命名空间在控制动态方法调用时很有用，默认它是关 闭的。 internal作为默认的命名空间，当程序员未显式使用访问控制说明时，它即被默认。","head":[["meta",{"property":"og:url","content":"https://yishulun.com/posts/2010/01.html"}],["meta",{"property":"og:site_name","content":"艺述论博客"}],["meta",{"property":"og:title","content":"命名空间：如何控制未知方法的调用"}],["meta",{"property":"og:description","content":"命名空间：如何控制未知方法的调用 命名空间对于程序员来讲，应当不会陌生，几乎每写一行代码，就要用到一止一个命名空间。AS3默认大约打开了6个命名空间。 1，AS3提供的常用的7个命名空间 internal,private,protected,public,static,as3，前5个命名空间作为类属性访问控制说明，在AS3中 是默认打开的。最后一个命名空间as3，默认也是被打开的，一般很少显式用到它。flash_proxy命名空间在控制动态方法调用时很有用，默认它是关 闭的。 internal作为默认的命名空间，当程序员未显式使用访问控制说明时，它即被默认。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-06T13:48:40.000Z"}],["meta",{"property":"article:author","content":"LIYI"}],["meta",{"property":"article:tag","content":"AS3 Expert"}],["meta",{"property":"article:published_time","content":"2010-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-06T13:48:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命名空间：如何控制未知方法的调用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2010-05-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-06T13:48:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LIYI\\",\\"url\\":\\"https://yishulun.com/\\"}]}"]]},"headers":[{"level":2,"title":"1，AS3提供的常用的7个命名空间","slug":"_1-as3提供的常用的7个命名空间","link":"#_1-as3提供的常用的7个命名空间","children":[]},{"level":2,"title":"2，如何继承Proxy实现匿名方法调用的控制","slug":"_2-如何继承proxy实现匿名方法调用的控制","link":"#_2-如何继承proxy实现匿名方法调用的控制","children":[]},{"level":2,"title":"3，如何自定义与使用命名空间","slug":"_3-如何自定义与使用命名空间","link":"#_3-如何自定义与使用命名空间","children":[]},{"level":2,"title":"4，包是什么？","slug":"_4-包是什么","link":"#_4-包是什么","children":[]},{"level":2,"title":"5，命名空间的无处不在","slug":"_5-命名空间的无处不在","link":"#_5-命名空间的无处不在","children":[]}],"git":{"createdTime":1671674770000,"updatedTime":1691329720000,"contributors":[{"name":"LIYI","email":"9830131@qq.com","commits":4}]},"readingTime":{"minutes":2.68,"words":803},"filePathRelative":"posts/2010/01.md","localizedDate":"2010年5月1日","excerpt":"<h1> 命名空间：如何控制未知方法的调用</h1>\\n<p>命名空间对于程序员来讲，应当不会陌生，几乎每写一行代码，就要用到一止一个命名空间。AS3默认大约打开了6个命名空间。</p>\\n<h2> 1，AS3提供的常用的7个命名空间</h2>\\n<p>internal,private,protected,public,static,as3，前5个命名空间作为类属性访问控制说明，在AS3中 是默认打开的。最后一个命名空间as3，默认也是被打开的，一般很少显式用到它。flash_proxy命名空间在控制动态方法调用时很有用，默认它是关 闭的。</p>\\n<p>internal作为默认的命名空间，当程序员未显式使用访问控制说明时，它即被默认。</p>","copyright":{"author":"LIYI","license":"CC BY-NC-ND 4.0"},"autoDesc":true}');export{t as data};
