import{_ as s,o as a,c as n,V as p}from"./chunks/framework.b2940161.js";const C=JSON.parse('{"title":"由鸭子测试看Go语言的接口实现","description":"","frontmatter":{"sidebar":false,"date":"2022-10-14T00:00:00.000Z","category":["编程"],"tag":["语言"]},"headers":[],"relativePath":"posts/2022/1014.md","filePath":"posts/2022/1014.md","lastUpdated":1691329720000}'),l={name:"posts/2022/1014.md"},o=p(`<h1 id="由鸭子测试看go语言的接口实现" tabindex="-1">由鸭子测试看Go语言的接口实现 <a class="header-anchor" href="#由鸭子测试看go语言的接口实现" aria-label="Permalink to &quot;由鸭子测试看Go语言的接口实现&quot;">​</a></h1><p>「If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.」</p><p>中文：「如果一只鸟它走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。」</p><p>这便是「鸭子测试」，它是一种判定思想。这句话据记载来源于美国的一个诗人，叫詹姆斯·惠特科姆·莱利，他曾说过或写过这样一句话：</p><p>「When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.」</p><p>中文：「当我看到一只鸟像鸭子一样走路，像鸭子一样游泳，像鸭子一样呱呱叫，我就叫它鸭子。」</p><p>无法确定莱利写这句诗的具体时间，不过绝不会晚于 1916 年，因为这一年莱利人去世了。在 1916 年，计算机都还没有诞生。关于「鸭子测试」的思想，最先并不是应用在计算机领域，而是政治领域。1946 年，也就是 ENIAC 计算机诞生的那一年，美国有个工会领导在一个公开集会中这样指责一个共产主义者：</p><p>「我无法证明你是共产主义者。但当我看见一只鸟叫得像鸭子，游得像鸭子，也走得像鸭子，长着羽毛也有脚蹼，还和鸭子在一起，那我当然会判断它是个鸭子。」</p><p>这句话很讽刺，且无理。</p><p>历史上也曾有记者用「鸭子测试」的逻辑，去指责另一个人的独裁行为：</p><p>「我无法证明你是一位独裁者。但当我看见一个人他说话像独裁者，行动像独裁者，还身处独裁者的机构和组织之中，和独裁者在一起，那我当然会认为他就是一名独裁者。」</p><p>「鸭子测试」的思想之所以在多个领域被人们乐于运用，在于它是一种归纳思想。它不严谨，但却能普遍被人们在有限范围内接受。后来计算机诞生以后，这个判定思想又被应用于编程之中，并派生出一种「鸭子类型（duck typing）」。所谓鸭子类型，顾名思义就是可以应用鸭子测试判定或与之有关的类型。</p><p>如果你还没有理解这种编程中的「鸭子类型」，我在这里尝试翻译一下：</p><p>假设类型 I 有 A、B、C 三个方法。如果对象 O 既实现了方法 A，也实现了方法 B，又实现了方法 C，那么我们便可以认为对象 O 就是 I 类型。</p><p>鸭子类型有时候在动态语言中，被用于实现多态。下面看一个多态的例子，它是Python语言的。</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassA</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">“</span><span style="color:#F78C6C;">10</span><span style="color:#82AAFF;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">class</span><span style="color:#82AAFF;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">”</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassB</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">“</span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">class</span><span style="color:#82AAFF;"> b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">”</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printIt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">instance</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ClassA</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">printIt</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">instance</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ClassB</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">printIt</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">instance</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>作为同一个变量 instance，当我们准备调用它的 print 方法的时候，它既可以是 ClassA，也可以是 ClassB。在实例方法 print 被调用的时候，两个类型完全可以有不同的表现。在这个类型中，我们可以认为 ClassA 和 ClassB 是一对鸭子类型。</p><p>动态语言的这种「鸭子类型」方便性，既是它的优点，也是它的缺点。它可以让程序员不必费力地像 Java 那样先定义接口然后再实现接口，可以直接调用，只要方法存在。缺点也很明显，如果代码有问题，例如调用了没有定义的方法，异常只有在运行时才会爆发出来。静态类型的编译型语言就没有这个缺陷，变量都有严格的类型，类型上有什么方法，没有什么方法，在编译的时候就能提前确定并暴露给开发者，这是静态语言的优点。</p><p>Go 语言作为高级编程语言的后起之秀，它兼具了静态语言和动态语言在类型设计上的优点，它既让开发者没有类型声明之累，又可以在编译阶段就确定类型错误。在这一点上，Go 语言是怎么做到了呢？</p><p>就是依靠「鸭子测试」的判定思想，下面看一个 Go 语言实现接口的例子。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IGreeting</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Duck</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">d Duck</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi，LIYI。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 测试</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sayIt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">speaker IGreeting</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	speaker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	speaker </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Duck</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">sayIt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">speaker</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>解释一下这个代码示例：</p><ul><li>第 4 行 Duck 是一个结构体，Go 语言的结构体相当于 Java 的 class。</li><li>第 1 行的 IGreeting 是一个接口，从表面上看，没有任何类型与它有关系。其实不然，第 5 行，因为我们在 Duck 类型上实现了 say 方法——即接口 IGreeting 的唯一成员，所以 Duck 类型就被认为实现了接口 IGreeting。</li><li>第 9 行，函数 sayIt 需要一个 IGreeting 类型的参数，在第 14 行，我们可以把 speaker 传递给 sayIt，因为 Duck 类型已经实现了接口 IGreeting。</li></ul><p>Go 语言关于接口的实现，就是一种「鸭子测试」的判定，只要一个结构体实现了某个接口的所有方法，就认为该结构体实现了该接口。这种做法简直太方便了！</p><p>我 10 年前第一次在公司项目中使用这种语言，用了一次就爱不释手了，那时候我就想，不出十年，Go 语言就会被大多数程序员接受。果然，今天 Go 语言已经被称为互联网时代的 C 语言，在腾讯内部提交的代码中，据统计 Go 语言已经超过 C++ 成为第一热门语言。国内外有越来越多的程序员，还有公司，无论大厂小厂，都选择学习并在生产环境中应用了 Go 语言。</p><p>最后，留一个问题给你：玩具大黄鸭经过「鸭子测试」的判定，被当成了鸭子，但其实它不是鸭子，如果有一天有人要给它喂食，还要它下蛋，怎么办？在 Go 语言中，还以本文中的示例为例，假设未来某一天接口 IGreeting 因为需求扩展添加了一位新成员 walk，但是 Duck 没有实现 walk 啊，这时候编译软件肯定会报错啊。如果项目中像 Duck 一样的结构体少还好办，如果很多且分散于项目各处，这种情况应当怎么办呢？</p>`,26),e=[o];function t(c,r,F,D,y,A){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
