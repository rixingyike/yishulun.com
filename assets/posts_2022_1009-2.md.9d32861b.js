import{_ as a,o as e,c as t,V as r}from"./chunks/framework.b2940161.js";const g=JSON.parse('{"title":"互联网下的微服务架构模式有哪些？","description":"","frontmatter":{"sidebar":false,"date":"2022-10-09T00:00:00.000Z","category":["编程"],"tag":["微服务","架构"]},"headers":[],"relativePath":"posts/2022/1009-2.md","filePath":"posts/2022/1009-2.md","lastUpdated":1691329720000}'),i={name:"posts/2022/1009-2.md"},p=r('<h1 id="互联网下的微服务架构模式有哪些" tabindex="-1">互联网下的微服务架构模式有哪些？ <a class="header-anchor" href="#互联网下的微服务架构模式有哪些" aria-label="Permalink to &quot;互联网下的微服务架构模式有哪些？&quot;">​</a></h1><p>下面列举的肯定不是全部，仅是一些例子。</p><ul><li><p>API 网关模式。负载均衡、服务发现、数据过滤、权限验证等，都可以放在这里。这里就像城门，来自客户端的请求想进城，都必须通过这里。服务发现简单理解是，为客户端找到它需要并可以连接的服务器 IP 地址。这个模式像传统的代理模式。</p><p>在此模式下，<a href="https://github.com/apache/apisix" target="_blank" rel="noreferrer">APISIX</a> 是 Apache 软件基金会下一个云原生 API 网关软件，也也是一款不可多得的国产开源软件，它兼具动态、实时、高性能等特点，提供了负载均衡、动态上游、灰度发布、服务熔断、身份认证、可观测性等流量管理功能。它主要采用 Lua 语言编写。</p></li><li><p>客户端 UI 组合模式。像桌面上的 Widget 一样，每一块都是独立的，可以独立请求和展示数据。优点是组合方便，缺点是资源请求可能多且浪费。像传统的外观模式。</p></li><li><p>服务与数据库一一对应模式。<strong>一个服务对应一个 Schema 是实现数据私有化的最佳选择</strong>，可以为每个子系统的开发团队单独配置一个数据库连接账号，这样便可以限制每个子系统的数据访问权限。优点是数据各自为政，架构清晰简单；缺点是设计多个微服务或团队的查询等操作变得复杂了。这个模式不像任何一个传统的设计模式，它像面向对象的基本特征之一：封装。</p></li><li><p>Saga 模式。这种模式是上一种架构模式的补充，Saga 是一种本地跨语言的事务链，它不仅有本地事务编配、编排，还有总事务失败后的补偿机制。像传统的责任链模式。</p><p>在此模式下，<a href="https://github.com/apache/servicecomb-pack" target="_blank" rel="noreferrer">Apache ServiceComb Pack </a>提供了技术解决方案，它主要基于 Java 语言实现。</p></li><li><p>断路器模式。就是熔断模式，像股票一样，跌的太狠了，强制关停，避免事态进一步恶化。具体实现方式可能是这样的：在网关处记名监听来自客户端的网络请求，如果某个客户端屡屡请求失败，则强制断开和限制其连接，避免发生雪崩效应；在一定时间后，再允许这个客户端发起限量连接。</p></li><li><p>子域分解模式。按照业务将大系统拆分为小系统，由各个小分队分别折腾。像传统的组合模式。</p></li><li><p>绞杀榕模式。类似传统的装饰模式，像一个含羞草慢慢将旧系统包裹、吃掉、重构、关停。慢慢外界不知道这个系统，直到有一天在数据检测中发现无人使用了，将其关停。</p></li><li><p>反腐蚀层模式。这个模式厉害，它要确保<strong>旧的系统不需要做出改变，同时新系统也不需要在设计和技术方面做出妥协</strong>。**计算机世界的任何问题，都可以通过添加一个新的层来解决。**这个模式可能是这样实现的：添加一个新的层，用于新旧数据的转换——当然前提是，新旧数据在理论上可以相互转换。像传统的代理模式。</p></li></ul><p>参考链接</p><ul><li><a href="https://www.infoq.cn/article/Pv1qlEa1GgU7m0sWBmdI" target="_blank" rel="noreferrer">https://www.infoq.cn/article/Pv1qlEa1GgU7m0sWBmdI</a></li><li><a href="https://github.com/apache/servicecomb-pack" target="_blank" rel="noreferrer">https://github.com/apache/servicecomb-pack</a></li><li><a href="https://github.com/apache/apisix" target="_blank" rel="noreferrer">https://github.com/apache/apisix</a></li></ul>',5),l=[p];function c(s,o,h,n,_,m){return e(),t("div",null,l)}const f=a(i,[["render",c]]);export{g as __pageData,f as default};
