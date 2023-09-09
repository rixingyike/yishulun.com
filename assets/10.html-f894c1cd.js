import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as s,b as e,d as n,a as t}from"./app-4e8d5300.js";const a={},c=e("h1",{id:"关于近期微信小程序登陆鉴权机制修改的小说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于近期微信小程序登陆鉴权机制修改的小说明","aria-hidden":"true"},"#"),n(" 关于近期微信小程序登陆鉴权机制修改的小说明")],-1),_=e("p",null,"最近微信小程序的登录鉴权机制又修改了，这是历史上第三次变动了，这次变动添加了新接口wx.getUserProfile，可以在用户任意单击事件后获取用户信息，并且每次都有弹窗提示。原open-type等于getUserInfo的button单击获取准备废弃了。",-1),p=e("p",null,[e("strong",null,"有啥直接影响？")],-1),d=e("p",null,[n("1，如果你的代码原来是仅靠getUserInfo获取用户信息的，没有通过后端解密，对不起，代码不能正常工作了"),e("br"),n(" 2，如果是通过后端解密的，没有关系，通过getUserInfo button先拉取加密信息，再到后端解密这种方式仍然有效")],-1),h=e("p",null,"为了解释这个问题，我专门录制了一个不专业的视频。",-1),u=e("p",null,"此外，由于小程序项目工程的复杂性，这种复杂性有时候让我自己看以前的源码都会产生迷惑，为了避免读者产生这种困扰，我在下面视频中，还讲了如何使用充电平台的课程源码，及需要注意的事项。",-1),g=e("p",null,"由于视频是临时录制，就不上传视频号或其它网站了，感兴趣可以直接下载：",-1),m=e("br",null,null,-1),f={href:"https://pan.baidu.com/s/1vkYMM-GK6Fh1_DkCAhD_6Q",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),k=e("br",null,null,-1),x=e("p",null,"2021年4月21日",-1),v=e("ul",null,[e("li",null,"视频中提到的相关课程及错误信息截图：")],-1),q={href:"https://time.geekbang.org/course/detail/100052401-289862",target:"_blank",rel:"noopener noreferrer"},w=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021042121003420210421202300image-20210421202258167.png",alt:"image-20210421202258167",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20210421202258167")],-1),U={href:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=login",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html",target:"_blank",rel:"noopener noreferrer"};function I(D,L){const o=r("ExternalLinkIcon");return i(),s("div",null,[c,_,p,d,h,u,g,e("blockquote",null,[e("p",null,[n("关于微信登陆机制修改与源码使用的说明.mp4"),m,n(" 链接："),e("a",f,[n("https://pan.baidu.com/s/1vkYMM-GK6Fh1_DkCAhD_6Q"),t(o)]),b,n(" 提取码：liyi"),k,n(" 复制这段内容后打开百度网盘手机App，操作更方便哦")])]),x,v,e("p",null,[n("课程链接："),e("a",q,[n("https://time.geekbang.org/course/detail/100052401-289862"),t(o)])]),w,e("ul",null,[e("li",null,[e("p",null,[n("登录接口调整官方说明："),e("a",U,[n("https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=login"),t(o)])])]),e("li",null,[e("p",null,[n("新接口getUserProfile地址："),e("a",y,[n("https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html"),t(o)])])])])])}const A=l(a,[["render",I],["__file","10.html.vue"]]);export{A as default};
