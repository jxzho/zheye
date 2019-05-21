export default {
  "primary": [
    {
      "title": "第1步",
      "content": "#### \"工欲善其事必先利其器\" - 前端开发编辑器\n`Sublime text`\n> 最性感的编辑器，搭配插件各种好用\n\n[点击下载](https://www.sublimetext.com/3)\n\n---\n\n`WebStorm`\n> 功能强大，学生可以免费用的前端开发IDE\n\n[点击下载](https://www.jetbrains.com/webstorm/)\n\n---\n\n`VSCode`\n> 免费。 建立在开源之上。到处运行。\n\n[点击下载](https://code.visualstudio.com/Download)\n\n---\n\n`Atom`\n> 作为开源老大哥GitHub出的一款代码编辑器，和上面那个比较而言，插件略少，但和GitHub无缝结合，尤其是markdown编写，界面也很漂亮。\n\n[点击下载](https://sourceforge.net/projects/atom.mirror/)"
    },
    {
      "title": "第2步",
      "content": "#### 设计软件\n\n> 虽然现在`前端`已不需要自己切图，但前端还是有必要的需要掌握一定的设计软件能力，例如：一些设计软件的基础操作和切图方法。这里我们只提供了外部的学习方法。\n\n- Photoshop 运用最广泛的设计软件，大部分人都在用它，很有必要学习一下\n\n [掌握的PS技能——切图篇](http://www.imooc.com/learn/506)\n\n- Sketch 轻量且功能强大，切图迅速高效，为UI设计而生的Mac App。\n\n [轻量且功能强大，切图迅速高效，为UI设计而生的Mac App](http://www.sketchcn.com/sketch-chinese-user-manual.html)\n\n\n"
    },
    {
      "title": "第3步",
      "content": "#### 代码管理\n> 不光要学会写代码，也要学会管理你的代码。在工作中你可能会遇到需要自己部署代码的情况；不停地修改迭代重构，当然也需要你掌握版本控制软件。\n\n- Linux 你需要学会在命令行打开移动复制文件等最基本的操作\n \n [链接：Linux常用指令合集](https://www.eebreakdown.com/2016/08/linux.html)\n\n- Git 写代码一定会用到的版本控制软件，入门很快就能学会\n\n [链接：git学习教程](https://backlog.com/git-tutorial/cn/)"
    },
    {
      "title": "第4步",
      "content": "### 学习HTML\n> HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 CSS），或功能与行为（如 JavaScript）。\n\n[进入HTML文档](http://localhost:3000/DOC-HTML)"
    },
    {
      "title": "第5步",
      "content": "### 学习CSS\n> 层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。\n\n---\n\n> CSS 是开放网络的核心语言之一，由 W3C 规范 实现跨浏览器的标准化。CSS节省了大量的工作。 样式可以通过定义保存在外部.css文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1 是推荐标准， CSS3 分成多个小模块且正在标准化中。\n\n---\n\n[进入CSS文档](http://localhost:3000/DOC-CSS)"
    },
    {
      "title": "第6步",
      "content": "#### 学习JavaScript\n> JavaScript ( JS ) 是一种具有函数优先的轻量级解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，例如Node.js、 Apache CouchDB 和Adobe Acrobat。JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。了解更多 JavaScript。\n\n[进入JavaScript文档](http://localhost:3000/DOC-JavaScript)"
    },
  ],
  "mid": [
    {
      title: "第1步",
      content: "### 学习前端代码规范\n> 最佳原则，坚持制定好的代码规范。无论团队人数多少，代码应该同出一门。\n\n--- \n\n#### 项目命名\n全部采用小写方式， 以下划线分隔。\n\n`例：my_project_name`\n\n#### 目录命名，参照项目命名规则；有复数结构时，要采用复数命名法。\n\n`例：scripts, styles, images, data_models`\n\n#### JS文件命名，参照项目命名规则。\n\n`例：account_model.js`\n\n---\n\n#### HTML\n`语法`\n- 缩进使用soft tab（4个空格）；\n- 嵌套的节点应该缩进；\n- 在属性上，使用双引号，不要使用单引号；\n- 属性名全小写，用中划线做分隔符；\n- 不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；\n- 不要忽略可选的关闭标签，例：</li> 和 </body>。\n\n#### 字符编码\n`通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。`\n\n#### 引入CSS, JS\n> 根据HTML5规范, 通常在引入CSS和JS时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。\n\n`HTML5 规范链接`\n- [使用link](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)\n- [使用style](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)\n- [使用script](http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)\n\n#### 属性顺序\n> 属性应该按照特定的顺序出现以保证易读性；\n\n- `class`\n- `id`\n- `name`\n- `data-*`\n- `src, for, type, href, value , max-length, max, min, pattern`\n- `placeholder, title, alt`\n- `aria-*, role`\n- `required, readonly, disabled`\n\n#### JS生成标签\n> 在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。\n\n---\n\n#### CSS代码\n- `缩进`\n使用soft tab（4个空格）。\n- `分号`\n每个属性声明末尾都要加分号。\n- `空格`\n> 以下几种情况不需要空格：\n\n属性名后\n多个规则的分隔符','前\n!important '!'后\n- 属性值中'('后和')'前\n行末不要有多余的空格\n以下几种情况需要空格：\n\n- 属性值前\n- 选择器'>', '+', '~'前后\n'{'前\n- !important '!'前\n- @else 前后\n- 属性值中的','后\n注释'/*'后和'*/'前\n\n`空行`\n> 以下几种情况需要空行：\n\n- 文件最后保留一个空行\n- '}'后最好跟一个空行，包括scss中嵌套的规则\n- 属性之间需要适当的空行，具体见属性声明顺序\n\n---\n\n`换行`\n> 以下几种情况不需要换行：\n\n- '{'前\n\n> 以下几种情况需要换行：\n\n- '{'后和'}'前\n- 每个属性独占一行\n- 多个规则的分隔符','后\n\n---\n\n`注释`\n\n注释统一用'/* */'（scss中也不要用'//'），具体参照右边的写法；\n\n缩进与下一行代码保持一致；\n\n可位于一个代码行的末尾，与代码间隔一个空格。"
    },
    {
      title: "第2步",
      content: "`Ethan Marcotte`曾经在A List Apart发表过一篇文章[“Responsive Web Design”](http://www.alistapart.com/articles/responsive-web-design/)，文中援引了响应式建筑设计的概念：\n> 最近出现了一门新兴的学科——“响应式建筑(responsive architecture)”——提出，物理空间应该可以根据存在于其中的人的情况进行响应。结合嵌入式机器人技术以及可拉伸材料的应用，建筑师们正在尝试建造一种可以根据周围人群的情况进行弯曲、伸缩和扩展的墙体结构；还可以使用运动传感器配合气候控制系统，调整室内的温度及环境光。已经有公司在生产“智能玻璃”：当室内人数达到一定的阀值时，这种玻璃可以自动变为不透明，确保隐私。\n\n#### 调整分辨率\n---\n> 不同的设备都有各自的屏幕分辨率、清晰度以及屏幕定向方式，不断被研发着的各种新设备也将带来新的屏幕尺寸规格。有些设备基于竖屏(portrait)，有些是横屏(landscape)，甚至还有正方形；对于日益流行的iPhone、iPad及其他一些智能手机、平板电脑，用户还可以通过转动设备来任意切换屏幕的定向方式。怎样才能做到让一种设计方案满足所有情况？\n![](http://beforweb.com/sites/default/files/images/201110/responsive-web-design-screen-portrait-landscape.jpg)\n\n#### 部分解决方案：一切弹性化\n---\n> 几年前，弹性布局(flexible layout)几乎是一种奢侈品，所谓弹性，也只是体现在竖排布局以及字号等方面；图片始终可以轻易的破坏页面结构，而且即使是哪些弹性的元素结构，在很极端的情况下，仍会破坏布局。所以，所谓的弹性布局其实并非那样弹性，它有时甚至不能适应台式机与笔记本的屏幕分辨率差异，更不用说手机等移动设备了。\n现在，我们可以通过响应式的设计和开发思路让页面更加“弹性”了。图片的尺寸可以被自动调整，页面布局再不会被破坏。虽然永远没有最完美的解决方案，但它给了我们更多选择。无论用户切换设备的屏幕定向方式，还是从台式机屏幕转到iPad上浏览，页面都会真正的富有弹性。\n\n---\n如果我们将浏览器窗口不断调小，会发现logo图片的文字部分始终会保持同比缩小，保证其完整可读，而不会和周围的插图一样被两边裁掉。所以整个logo其实包括两部分：插图作为页面标题的背景图片，会保持尺寸，但会随着布局调整而被裁切；文字部分则是一张单独的图片。"
    },
    {
      title: "第3步",
      content: "#### CSS篇\n> CSS animations 使得可以将从一个CSS样式配置转换到另一个CSS样式配置。动画包括两个部分:描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。\n\n`相较于传统的脚本实现动画技术，使用CSS动画有三个主要优点：`\n- 能够非常容易地创建简单动画，你甚至不需要了解JavaScript就能创建动画。\n- 动画运行效果良好，甚至在低性能的系统上。渲染引擎会使用跳帧或者其他技术以保证动画表现尽可能的流畅。而使用JavaScript实现的动画通常表现不佳（除非经过很好的设计）。\n- 让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率。\n\n#### 配置动画\n> 创建动画序列，需要使用animation属性或其子属性，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由 @keyframes规则实现，具体情况参见使用keyframes定义动画序列小节部分。\n\n**animation的子属性有:**\n\n`animation-delay`\n\n设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。\n\n`animation-direction`\n设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。\n\n`animation-duration`\n设置动画一个周期的时长。\n\n`animation-iteration-count`\n设置动画重复次数， 可以指定infinite无限次重复动画\n\n`animation-name`\n指定由@keyframes描述的关键帧名称。\n\n`animation-play-state`\n允许暂停和恢复动画。\n\n`animation-timing-function`\n设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。\n\n`animation-fill-mode`\n\n指定动画执行前后如何为目标元素应用样式。\n\n#### 使用keyframes定义动画序列\n> 一旦完成动画的时间设置， 接下来就需要定义动画的表现。通过使用@keyframes建立两个或两个以上关键帧来实现。每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。\n\n因为动画的时间设置是通过CSS样式定义的，关键帧使用percentage来指定动画发生的时间点。0%表示动画的第一时刻，100%表示动画的最终时刻。因为这两个时间点十分重要，所以还有特殊的别名：from和to。这两个都是可选的，若from/0%或to/100%未指定，则浏览器使用计算值开始或结束动画。\n\n也可包含额外可选的关键帧，描述动画开始和结束之间的状态。\n\n---\n\n**示例**\n\n`示例`\n```\np {\n  animation-duration: 3s;\n  animation-name: slidein;\n}\n\n@keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%; \n  }\n\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n```\n\n\n\n\n\n\n\n\n\n\n"
    }
  ],
  "high": [
    {
      title: "第1步",
      content: ""
    }
  ]
}