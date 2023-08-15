import{_ as e,o as a,c as s,V as t}from"./chunks/framework.b2940161.js";const A=JSON.parse('{"title":"AS3事件机制概述","description":"","frontmatter":{"sidebar":false,"date":"2008-05-01T00:00:00.000Z","tag":["AS3 Expert"]},"headers":[],"relativePath":"posts/2009/01.md","filePath":"posts/2009/01.md","lastUpdated":1691329720000}'),n={name:"posts/2009/01.md"},l=t(`<h1 id="as3事件机制概述" tabindex="-1">AS3事件机制概述 <a class="header-anchor" href="#as3事件机制概述" aria-label="Permalink to &quot;AS3事件机制概述&quot;">​</a></h1><p>目录</p><nav class="table-of-contents"><ul><li><a href="#_1-as3事件机制的主要成员">1，AS3事件机制的主要成员</a></li><li><a href="#_2-观察者模式">2，观察者模式</a></li><li><a href="#_3-显示列表中事件流的三个阶段">3，显示列表中事件流的三个阶段</a></li><li><a href="#_4-ieventdispatcher接口讲解">4，IEventDispatcher接口讲解</a></li><li><a href="#_5-event类实例化讲解">5，Event类实例化讲解</a></li><li><a href="#_6-mouseevent事件">6，MouseEvent事件</a></li><li><a href="#_7-flash-player内部对事件的强力支持">7，Flash Player内部对事件的强力支持</a></li><li><a href="#_8-事件与代的概念">8，事件与代的概念</a></li><li><a href="#_9-为什么要有事件流三阶段">9，为什么要有事件流三阶段？</a></li><li><a href="#_10-优化程序性能的第一准则">10，优化程序性能的第一准则</a></li><li><a href="#_11-停止冒泡事情的派发">11，停止冒泡事情的派发</a></li></ul></nav><p>事件机制是AS3的核心功能之一，没有充分掌握事件机制的方方面面，就不能算是精通AS3语言。</p><h2 id="_1-as3事件机制的主要成员" tabindex="-1">1，AS3事件机制的主要成员 <a class="header-anchor" href="#_1-as3事件机制的主要成员" aria-label="Permalink to &quot;1，AS3事件机制的主要成员&quot;">​</a></h2><ul><li>IEventDispatcher：事件派发对象接口，定义了添加、派发、移除、是否监听指定事件、是否触发指定事件接口</li><li>EventDispatcher：事件派发对象接口的实现者，用户无法撇开EventDispatcher而自行实现IEventDispatcher接口，无法直接继承</li><li>EventDispatcher时，必须把EventDispatcher作为实例变量。</li><li>Event：事件基类，所有事件类均基于此类实现</li></ul><h2 id="_2-观察者模式" tabindex="-1">2，观察者模式 <a class="header-anchor" href="#_2-观察者模式" aria-label="Permalink to &quot;2，观察者模式&quot;">​</a></h2><p>AS3事件机制实现的是观察者模式。</p><p>IEventDispatcher充当了Subject角色，EventDispatcher相当于ConcreteSubject对象，Event相当于Observer，ConcreteSbserver相当于Event的子类。Attach相当于addEventListener，Detach相当于removeEventListener，Notify相当于dispatchEvent。Event没有Update。</p><h2 id="_3-显示列表中事件流的三个阶段" tabindex="-1">3，显示列表中事件流的三个阶段 <a class="header-anchor" href="#_3-显示列表中事件流的三个阶段" aria-label="Permalink to &quot;3，显示列表中事件流的三个阶段&quot;">​</a></h2><p>在一个事件的整个生命周期内，共分为三个阶段：</p><p>在捕获阶段与冒泡阶段均可能经过N个节点，在目标阶段仅可能有一个节点。</p><p>使用stopPropagation可阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。使用stopImmediatePropagation可阻止对事件流中当前节点中和所有后续节点中的事件侦听器进行处理。</p><p>显示列表中事件流三阶段与事件机制本身没有直接关系。在AS3显示列表中，为什么要有事件流，为什么不是直接到达目标对象？</p><h2 id="_4-ieventdispatcher接口讲解" tabindex="-1">4，IEventDispatcher接口讲解 <a class="header-anchor" href="#_4-ieventdispatcher接口讲解" aria-label="Permalink to &quot;4，IEventDispatcher接口讲解&quot;">​</a></h2><p>AS3事件机制的精髓基本全在这个接口中。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(type:String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> listener:Function</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> useCapture:Boolean </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> priority:int </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> useWeakReference:Boolean </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">):</span><span style="color:#89DDFF;">void</span></span></code></pre></div><p>使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。</p><p>最常用的是前面二个参数。第三个参数标识该监听器是否会在捕获阶段被触发。第四个参数priority标识该同类事情监听器被调用的优化级。第五个参数标识该监听器是否易于被回收，默认为false，并且永远应该默认为false，如果监听器可以被回收，应该手动处理，而不是交给Flash Player。</p><p>对于监听同一类事件的监听器，priority高者优化被调用。在FP及Flex SDK中，priority最大不会超过200，因此，如果要设置top level的事件监听，此值应该设置在200以上。</p><p>在大型应用中，最好把各个层所要用到的priority分一下组，例如200-220分派给Core Level。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">removeEventListener(type:String, listener:Function, useCapture:Boolean = false):void</span></span>
<span class="line"><span style="color:#A6ACCD;">// 从 EventDispatcher 对象中删除侦听器</span></span></code></pre></div><p>如果在addEventListener时，useCapture为true，此时在removeEventListener时，useCapture参数应与之相同。EventDispatcher内部维护了两个listener集合，一个盛装useCapture为false的listener，另一个盛装为true的。</p><h2 id="_5-event类实例化讲解" tabindex="-1">5，Event类实例化讲解 <a class="header-anchor" href="#_5-event类实例化讲解" aria-label="Permalink to &quot;5，Event类实例化讲解&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Event</span><span style="color:#A6ACCD;">(type:String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bubbles:Boolean </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cancelable:Boolean </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>创建一个作为参数传递给事件侦听器的 Event 对象。</p><p>Event 类的方法可以在事件侦听器函数中使用以影响事件对象的行为。某些事件有关联的默认行为。例如，doubleClick 事件有关联的默认行为，此行为突出显示事件发生时鼠标指针下的词。通过调用 preventDefault() 方法，您的事件侦听器可以取消此行为。通过调用 stopPropogation() 或 stopImmediatePropogation() 方法，还可以使当前事件侦听器成为要处理事件的最后一个事件侦听器。</p><p>cancelable标识该事件是否可阻止与取消。一般FP定义的内部事件类型均不可以取消，如CANCEL，CLOSE，OPEN，ADDED等，一般IMG事件均可以取消，如CLOSING，EXITING等，凡是可以取消的事件，均有一个关联的可以取消的行为。开发者在自定义事件也应遵守这一规则。</p><p>开发者应当保证type在应用程序中是唯一的，bubbles用于标识事件在到达目标对象后是否仍向下传递。</p><p>Event对象在事情流结束之后，如果没有其它引用，即可被GC回收。当前Event需要二次派发时，使用clone方法复制事件。</p><h2 id="_6-mouseevent事件" tabindex="-1">6，MouseEvent事件 <a class="header-anchor" href="#_6-mouseevent事件" aria-label="Permalink to &quot;6，MouseEvent事件&quot;">​</a></h2><p>鼠标事件是FP内InactiveObject对象内在支持的事件，这个事情由InactiveObject实例化、派发，并且总是bubble等于true的。对于不需要鼠标事件的对象，应当把mouseChildren与mouseEnabled设为flase，以优化程序性能。</p><h2 id="_7-flash-player内部对事件的强力支持" tabindex="-1">7，Flash Player内部对事件的强力支持 <a class="header-anchor" href="#_7-flash-player内部对事件的强力支持" aria-label="Permalink to &quot;7，Flash Player内部对事件的强力支持&quot;">​</a></h2><p>FP本身是多线程的，只不过目前未对开发者开放API。在FP内部，有一个线程专门用于处理事件，事件的处理总是在桢周期的前期进行，并且不会受到其它线程的影响。</p><p>FP是异步的，Event的派发与listener的执行并不是紧密衔接的，当你派发一个事件之后，不能指望监听这个Event的Listener马上执行。 PureMVC放弃AS3内部支持的事情机制不用，自己用观察者模式实现了一套Command体系，是对FP中独立事件线程的非合理浪费。</p><h2 id="_8-事件与代的概念" tabindex="-1">8，事件与代的概念 <a class="header-anchor" href="#_8-事件与代的概念" aria-label="Permalink to &quot;8，事件与代的概念&quot;">​</a></h2><p>在FP内部，从宏观上讲，总是派发一拔事件，处理一拔代码，然后再派发一拔事件，再处理一拔代码，如此反复，看起来事件具有代(generation)的概念。代与事件流有关，也与桢周期内的执行模式有关。</p><h2 id="_9-为什么要有事件流三阶段" tabindex="-1">9，为什么要有事件流三阶段？ <a class="header-anchor" href="#_9-为什么要有事件流三阶段" aria-label="Permalink to &quot;9，为什么要有事件流三阶段？&quot;">​</a></h2><p>当用户在FP中单击时，宿主环境仅能告诉FP用户进行了单击行为以及单击的坐标，却并不能告诉FP到底单击了哪一个对象，哪一个MC，这是不可能的，因为是什么对象、有什么对象，只有FP自已知道。</p><p>在FP中，共有两种渲染模式，一种为保留模式，另一种为立即模式，无论是哪一种渲染模式，FP交给浏览器或操作系统的最终渲染内容总是一张张图片，FP像幻灯片放映一样向用户展示互动与动画。所以，当用户单击时，永远只是单击点，看得见的点，FP拿到这些点之后，在内部的显示列表结构上遍历，首先从上向下走，只要当前显示对象囊括了单击点，并且是透明的（下面还有显示对象），便一直往下走，直到目标对象，然后再原路一路向上走，这便是事件机制的三阶段。</p><p>由于显示对象可以是透明的，FP并不知道开发者设想的用户真正想单击的是不是目标对象，有可能是捕获阶段的对象，同样的对象也有可能想在冒泡阶段处理，为了提供更大的灵活性，FP在显示列表中实现了事件流的三步机制，数以千万开发者的实践证明它是非常有阶值的。</p><p>单击之外的其它鼠标事情与之类似。</p><h2 id="_10-优化程序性能的第一准则" tabindex="-1">10，优化程序性能的第一准则 <a class="header-anchor" href="#_10-优化程序性能的第一准则" aria-label="Permalink to &quot;10，优化程序性能的第一准则&quot;">​</a></h2><p>及时移除不再需要的事情监听，是保证垃圾回收、优化程序性能的最浅显、最容易、最为开发者所忽视的行码准则之一。以下代码是通用的，在函数内部移除事件监听的方法：</p><p>e.currentTarget.removeEventListener(e.type, arguments.callee);</p><h2 id="_11-停止冒泡事情的派发" tabindex="-1">11，停止冒泡事情的派发 <a class="header-anchor" href="#_11-停止冒泡事情的派发" aria-label="Permalink to &quot;11，停止冒泡事情的派发&quot;">​</a></h2><p>除了移除不必要的事情监听，停止冒泡事情的继续派发也是提高程序运行效率的常用方法之一。该方法多用于MouseEvent事情，代码为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopPropagation</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">or</span></span>
<span class="line"><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopImmediatePropagation</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>但是事情冒泡有时却是十分有用的，在某处阻止了事件冒泡，有可能因此另一处的监听无法触发，这种bug十分隐蔽。</p><p>2009年5月27日</p>`,50),p=[l];function o(r,i,c,h,d,C){return a(),s("div",null,p)}const D=e(n,[["render",o]]);export{A as __pageData,D as default};
