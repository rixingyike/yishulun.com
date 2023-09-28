import{_ as p,C as l,o,c as e,k as s,H as t,Q as c,a}from"./chunks/framework.25d5caa7.js";const r="/assets/image-20230923200916559.33335673.png",y="/assets/image-20230923192404581.014a15d3.png",E="/assets/image-20230923193325205.de12a8f1.png",i="/assets/image-20230923193548972.abb3faa5.png",d="/assets/image-20230923194108099.2df5456d.png",A=JSON.parse('{"title":"Bun 介绍：bun 到底会吃掉多少内存？为何一个不大的博客程序就能吃掉700+MB内存?（二）","description":"","frontmatter":{"date":"2023-09-24T16:27:50.000Z","tags":["bun"]},"headers":[],"relativePath":"posts/2023/06.md","filePath":"posts/2023/06.md"}'),u={name:"posts/2023/06.md"},F=c("",45),h=s("p",null,"没有问题。",-1),g=s("p",null,[a("在同一个项目中，可以写 ts 代码，也可以写 jsx 代码，并且不需要额外的配置。bun 靠文件的后缀名决定要启用什么样的加载器，"),s("strong",null,"当我们在文件内使用 jsx 语法时，文件后缀就必须写成 tsx 或 jsx"),a("。")],-1),b=s("p",null,"除此之外，react 与 react-dom 还是要安装的，bun 只是替代了网络基础软件层次的 Node.js，它并没有替代业务软件层次的框架，诸如 Vue、React、Vite 等类库，如果在项目中用到它们了，首先还是需要使用 bun install 指令安装的。",-1),C=s("p",null,"这一篇就说到这里，主要介绍了 bun 在运行时会占用大量内存，以及如何使用 jsx 语法，下一篇继续介绍 bun。",-1);function v(B,m,k,_,x,q){const n=l("Message");return o(),e("div",null,[F,s("blockquote",null,[t(n,{text:"Hello world!"})]),h,g,b,C])}const D=p(u,[["render",v]]);export{A as __pageData,D as default};
