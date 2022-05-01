<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [HTML，CSS](#htmlcss)
- [JavaScript](#javascript)
- [Vue](#vue)
- [Node](#node)
- [网络和安全方面](#%E7%BD%91%E7%BB%9C%E5%92%8C%E5%AE%89%E5%85%A8%E6%96%B9%E9%9D%A2)
- [浏览器以及操作系统相关](#%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BB%A5%E5%8F%8A%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3)
- [Webpack以及优化](#webpack%E4%BB%A5%E5%8F%8A%E4%BC%98%E5%8C%96)
- [数据结构](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
- [算法和手写题](#%E7%AE%97%E6%B3%95%E5%92%8C%E6%89%8B%E5%86%99%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## HTML，CSS
- 盒模型有哪些？有哪些使用场景？
  - 标准盒模型（content-box）：设置的width和height就是内容的宽度和高度
  - IE盒模型（border-box）：设置的width是content+padding+border的总宽度，设置的height也是content+padding+border的总和。
- 实现一个等腰三角形
```html
<style>
  #box {
    border-width: 100px;
    border-color: transparent transparent transparent red;
    border-style: solid;
  }
</style>
<div id='box'></div>
```
- BFC是什么？有什么用？
  - BFC(块级格式上下文)可以**包含内部浮动（可以让内部浮动元素撑起父元素的高度），排除外部浮动（正常文档流中建立的 BFC 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。），阻止外边距重叠。**
  - 创建BFC：
    - 根元素（html）
    - display: flow-root(可以创建一个无副作用的BFC)
    - float不为none
    - 绝对定位或者固定定位
    - 行内块元素display：inline-block 
    - overflow不为visible
    - flex布局
- 列出 flex 常用属性和值，并解释。
```css
/* flex container 的属性 */
/* 设置主轴方向 */
flex-direction: row; /*默认值，沿着x轴 从左到右*/
                row-reverse  /* 沿着x轴 从右到左 */
                column  /* 沿着y轴，从上到下 */
                column-reverse /* 沿着y轴，从下到下 */ 
/* flex container 的属性 */
/* justify-content 决定了flex items 在主轴（main axis）上的对其方式 */
justify-content: flex-start; /* 默认值 与main start 对齐 */
                 flex-end /* 与main-end对齐 */
                 center /* 居中对齐 */
                 space-between  /* flex items 之间距离相等，与main start，main end两端对齐 */
                 space-around /* flex items 之间距离相等，与main start，main end之间的距离是flex items 之间距离的一半 */
                 space-evently /* flex items 之间距离相等，与main start，main end之间的距离等于flex items 之间的距离 */
/* flex container 的属性 */
/* align-items 决定了flex items 在交叉轴（cross axis）上的对齐方式 */
align-items: normal; /* 在弹性布局中flex items cross axis方向的size为auto ，效果和stretch一样 */
             stretch /* flex items 在cross axis方向的size为auto时，会自动拉伸至填充flex container */
             flex-start /* 与cross start对齐 */
             flex-end /* 与cross end对齐 */
             center /* 居中对齐 */
             baseline /* 与基线对齐 */
/* flex-wrap 改变换行方式 默认情况下 所有的flex items都会才一行显示 */
flex-wrap: nowrap; /* 默认值，不换行 */
           wrap  /* 换行 */
           wrap-reverse /* 换行且在cross axis 翻转 */
flex-flow /* 是flex-direction 和 flex-wrap的简写（可以只写一个） 可以省略，顺序任意 */
/* flex items 的属性 */
order  /* 决定了flex items的排布顺序  可以设置任意整数，值越小越排在前面， 默认值是0*/
/* flex items 的属性 */
align-self  /* 可以单独决定flex items在cross axis的对齐方式，会覆盖父元素的align-items */

```
- 文档流有了解吗？
  - 文档流也称常规流
  - 脱离文档流（float，绝对定位，固定定位）
- css的href属性和script的src属性的区别？
  - href：用于在当前文档和引用资源之间确立联系，当浏览器遇到href会并行下载资源并且不会停止对当前文档的处理。
  - src：用于替换当前内容，当浏览器解析到src，会暂停其他资源的下载和处理，知道该资源加载或执行完毕。
- 容器固宽 一行元素的时候居中 多行的时候左对齐？
```html
<style>
    .content {
      width: 200px;
      border: 1px solid red;
      text-align: center;
    }

    .content p {
      /* 将p设置为行内块，这样p的宽度就是由内容撑开
        当一行时，p的宽度小于content的宽度，所以content的text-align: center可以让p整体居中
        当多行时，p的宽度等于content的宽度，所以text-align：left可以让p的文本左对齐
      */
      display: inline-block;
      text-align: left;
    }
  </style>
  <body>
    <div class="content">
      <p>内容只有一行居中</p>
    </div>
    <br />
    <div class="content">
      <p>内容多行左对齐，内容多行左对齐</p>
    </div>
```
- z-index 在什么情况下会失效？
  - z-index属性作用在被定位的元素上，如果在一个没有设置定位的元素上使用z-index是不会有效果的。
  - 元素的z-index效果是会受到父元素的z-index的影响，如果父元素的z-index很小，那么子元素的z-index取很大爷不起作用。
- position: sticky 的作用？
  - 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
- 有一个类似表格（或者日历）的布局，每个单元格的border为1px，相邻单元格中间的border也为1px，怎么实现？现在要实现选择某一单元格会高亮，怎么实现？
- html中link一个很大的css文件，导致加载很慢。那用户看到的浏览器加载过程是怎样的，是一直空白么？还是先出现个骨架？还是什么？如果中间有js语句，会怎么样？页面加载会终止么？
  - css加载**不会阻塞DOM树的解析，但是会阻塞DOM的渲染**。所以当link一个很大的css文件时，页面是一直空白。
  - css文件加载会阻塞后面的js代码执行，这是因为js代码可能会操作之前的DOM节点和css样式。
  - js会阻塞DOM解析。
  - 如果页面同时存在css和js，并且存在js文件在css后面，则DOMContentLoaded事件会在css加载完毕后才执行。
  - 其他情况DOMContentLoaded事件都不会等待css加载。
- HTML：meta标签干什么的，都有什么属性；doctype是干嘛的，都有哪些属性？
- HTML：语义化标签说出几个；form表单的属性说一说？
- 怎么实现抽屉侧边栏？
- head 有啥标签，各有啥用？
- 设置一个元素margin-top: -20%，具体是什么效果？
- 元素line-height设置为1，具体是多少像素，怎么计算？
- 如何计算1rem具体等于多少像素？
- 图片渲染下方有一条白线是什么原因造成的？
- css实现一个梯形？
- CSS动画 GPU加速开启（3d属性）与原理（GPU）？
- 伪类与伪元素差别？
- Flex: 0 1 auto是代表什么？
- 了解iframe吗？
- script标签属性defer和async的作用，什么区别？
- 类选择器和伪类的区别及优先级？
- 用css实现一个模态窗口，要从窗口下面向上弹的动画？
- 讲一讲flex布局？给子元素设置flex:1是什么含义？flex是哪几个属性的简写？flex-shrink默认值是几？剩余空间的分配规则是怎样的？
- CSS单位 px rem em vw vh？如果窗口尺寸调整，vw，vh会产生变化吗？
- BFC会与float元素相互覆盖吗？
- css选择器优先级排序？
- CSS实现一个秒针效果（一分钟转一圈，匀速和一秒一走）？
- CSS实现类似微信朋友圈的效果，要求根据图片数量显示不同的布局。（一张时占比50%，四张是田字布局，九张时九宫格布局）？
- box-sizing的意义是什么？
## JavaScript
- 遍历object的value方法？
- js如何实现继承？
- 数据类型有哪些，为什么存在栈和堆？
- 如何捕获async await的异常，如果不写await promise报错了你的try catch 能捕获到错误么？
- 如何在不使用ES6的情况下，达到let的效果？
- map和Object的区别？
- js垃圾回收机制？
- 函数创建和执行的过程？
- css 动画与 js动画区别？
- for in / for of/object.key的区别
- js能表示的最大整数，小数在计算机内部的存储过程？
- 怎么判断是不是空对象？
- 静态作用域和动态作用域？
- 如何排查内存泄漏？ 火焰图接触过吗？
- 浏览器的事件模型？在当前的事件模型中，哪些事件可以冒泡，哪些不会冒泡，为什么？不会冒泡的怎么实现事件委托？
- 从继承,多态,封装三方面讲一下js是怎么实现的？
- 为什么JS执行的时候要阻塞HTML解析？
- setInterval 的细节？
- v8引擎的sort()实现？
- removeEventListener(eventName,callback)拿不到函数名(callback)怎么办？
- JS里面印象最深刻的技术，说三个？
- 创建一个原型链只有name属性的对象（除了name属性其他属性都没有）？
- ES6 module和commonjs的区别？
- e.target和e.currentTarget的区别？
- addEventLisenter的第三个参数？
- with 的了解？
- 页面有一个iframe，将主页面的一个数组传到iframe中再用 instanceof 判断数组是否可行？
- Fetch API与传统 XHR 的区别？
- JS如何性能监测，如何监测用户页面是否卡顿？
- sort()是内部使用了什么算法 时间复杂度是多少 indexOf()的时间复杂度是多少？
- 宏任务、微任务的区别是什么，除了执行流程还有什么区别？
- postMessage、fetch是宏任务还是微任务？
- 区别微任务宏任务的标准是什么？
- 递归和循环在代码的执行层面有什么区别？
- 闭包是什么，有什么作用？
- 事件循环？
- 在js中0.1+0.2===0.3吗？如果不相等如何解决？
- localStorage里可以存图片吗，怎么存？
## Vue
- vue2和vue3的区别？
- 原生框架和Vue框架有什么不同？Vue给你带来了一些什么？
- 从应用方面，比如性能方面，Vue带来了什么？
- 什么场景下用单页应用会好，什么时候用多页应用会好？
- 不同组件进行通信有哪些方式？
- keep-alive是如何实现缓存的，keep-alive原理？
- 怎么理解单一职责性，为什么要遵循这一原则？
- diff算法？
- Vue Scoped CSS 是做什么的，怎么实现的，如果让你自己实现有什么思路？
- 你对于封装、模块化的理解，项目中自己封装过组件吗？
- vue中的scoped style是如何实现作用域样式以及为什么vue不使用css module来实现作用域？
- watch和computed的区别？
- MVC MVVC MVP的异同？
- 使用框架一定比原生的或者jQuery好吗？为什么？
- vue框架有什么特点？
- vuex的mutation和action的区别，为什么要设立两个而不是直接都用mutation操作state？
- 框架里用到了哪些设计模式？
- vue3的代理对比vue2的defineProperty有什么优点？
- vuex使用，原理？
- SPA是什么？
## Node
- 用过nodejs吗，nodejs的架构？
- nodejs如何开启多进程？如何开启多线程？
- Koa洋葱圈模型？
- koa 的原理 与express 的对比？
- 非js写的Node.js模块是如何使用Node.js调用的？
- node为什么是异步？
- node如何充分利用CPU？
- node如果想多开几个进程该怎么操作？
## 网络和安全方面
- 输入url到显示全过程？
- get post的区别？
- DNS使用什么协议传输？为什么？
- 如果TCP传输中第二个包丢失了，会怎么办？
- cookie相关，相同一级域名跨域、不同一级域名跨域？
- 常见的Http状态码？
- Http头的字段你了解哪些？
- http压缩你除了gzip还了解哪些？
- gzip是有损压缩还是无损压缩？
- https加密的具体过程？
- CA证书的作用？
-  tcp 的可靠性怎么实现的，tcp 复用是怎么实现的？
- http 缓存，不同资源一般采取什么缓存方式？
- dns解析，七层协议，应用层有什么协议，浏览器缓存，http状态码？
- url由哪些部分组成？
- cookie的空间大小？怎么验证呢？cookie有哪些字段？
- 跨域是什么？有哪些实现方式？CORS响应头？
- 怎么让跨域请求携带Cookie，协议名不一样算跨域吗？
- 讲一下JWT机制？
- 常见的协议有哪些？
- 最上面两层里面的协议？
- 非简单请求为什么要发options，有什么用吗？
- 服务端如何检查用户是否登录？
- 如何预防xss/csrf攻击？
- samesite属性说一下？  samesite属性的lax值？  domain属性说一下 ？ 如何配置跨域允许携带cookie？子域也能携带cookie吗？
- 如何获取重定向后的地址？
- http和https的区别？
- HTTP协议的各个版本的特性都是什么？
- TCP和UDP的区别?   TCP是怎么保证数据准确可靠的 ? TCP的拥塞控制,校验和是怎么做的?
- HTTP和HTTPS 的区别?  HTTPs的加密方式? 除了安全性还有没有其他的优点?
- https的加密方式有了解吗?CA证书客户端放在哪里?
- 知道数字签名和数字信封吗？
- 怎么确定哪个CDN节点离用户最近呢？
- DNS使用什么网络协议？
- https全过程 握手的每一步？
- ssl tls有什么区别讲一下？
- 对称加密非对称加密？
- DNS递归查找的弊端？
- 正向代理、反向代理？
## 浏览器以及操作系统相关
- Number精度丢失问题，底层原因，解决方案？
- 32bit和64bit的区别
- 说说进程、线程是什么，了解协程么？
- 说说读写锁？
- 浏览器进程和线程？
- 线程与进程的关系？JS为什么是单线程的？
- 如何计算浏览器的帧？
- 浏览器的多个标签页如何通信？
- 进程的调度策略，线程的同步和线程间通讯？
- 为什么32位操作系统最大支持内存为4GB?
- 内存大了有啥好处？
- 线程共享为什么比进程共享容易？
- 计算机的原码、反码、补码？
- 为什么要有协程？协程的目的？
- 进程和线程有什么区别？如果某个线程挂掉了，这个进程会挂掉吗？如果某个线程修改了内存，另一个线程能感知到吗？
- 浏览器几个进程，之间有什么关系，解释一下？
## Webpack以及优化
- 前端模块化的优势？
- 对前端工程化的理解？
- 前端性能优化？
- 讲讲性能优化，能实际实现的？
- Webpack构建流程？
- HMR 热更替原理？
- loader与plugin plugin遵循的事件流机制？
- webpack打包过程？
- 怎样从零搭建项目？
- packjson文件里有一些key，value。其中一个key叫dependencies和devDependencies，能说说作用吗？
- externals是怎么实现的？
- CDN优化时，你是如何判断该将哪些包分离。？
- loader与plugin的区别？
## 数据结构
- 数据结构有哪些，每种的特点，给数据结构分类的方法？
- 快排 原理和优化 分析复杂度？
- hash表结构，解决冲突的办法，hash函数有什么类型？
- 学数据结构或者算法过程中，有没有什么地方觉得很巧妙？
- 数组和链表的区别？
## 算法和手写题
- 给定一个二叉树与一个值，找到和为该值的二叉树的所有路径？
- 数组去重，不使用ES6语法，要求时间复杂度低？
- 给两个矩形，有每个矩形点坐标以及长宽高，判断是否相交（包含也算相交）？
- 如何在不使用ES6的情况下，达到let的效果？
- 求一个数组的最大连续子数组，输出他们的和？
- 常见排序算法？
- 找出dom节点下所有标签类型？
- 最短路径和？
- 深度遍历 dom，打印遍历路径？
- vue：实现一个模态框组件，过深的组件该怎么配合定位属性？
- 在很多数中怎么查找前10个大的数？
- 最长无重复子串？
- K 个一组翻转链表？
- 手写jsonp？
- 计算中缀表达式的值？
- 求两个数组交集？
- 在字符串里面找到第k个唯一出现一次的字符串？
- 怎么实现抽屉侧边栏？
- 1123456789 -> 1,123,456,789  
- 二叉树最近公共祖先？
- 最长不重复子串？
- 把数字的0都移到数组末端？
- 打印蛇形矩阵？
- 传入一个正整数 n, 输出一个"内卷"形输出, 如

        输入 1, 输出:1
        输入 2, 输出:1, 2，
                    4, 3

- 求最长回文字符串
- 说代码结果及原因：

        [1]==[1]
        [1]===[1]
        0.1+0.2==0.3
- 二叉树先序中序 生成后序 ？
- 二叉树的最大深度？
- 2维数组斜45度输出？
- 字符串匹配，大概是给一个str，再给一个exp，判断str能否被exp匹配（如"sss"可以被".*"匹配）？
- 二分查找？
- 手写深拷贝？
-  a=[1,[2,[3,[4,null]]]], 实现数组 b=[4,[3,[2,[1,null]]]]？
- 实现一个计算器，求字符串的值，例如((2 + (3 * 2) ) * (2 + 3) + (3 - 1) )
- 数组随机排序？
- 判断对称二叉树？
- 写一段匹配URL的正则，包括协议、域名、端口、path、hash、querystring？
- 两个链表找相交节点？
- 创建一个原型链只有name属性的对象？
- leetcode 112路径总和？
- 手写reduce？
- fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']
- 写一个事件代理函数，需要判断child是parent的子节点？
- 给数组中的字符串编号，f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']
- 无重复字符的最长子串？
-  最长回文子串？
- 斐波那契（尾递归优化）？
- 给定一个正整数数组和n，求最短子数组，要求子数组之和大于等于n（滑动窗口）？
- 爬楼梯？
- JavaScript实现一个带并发限制的异步调度器，保证同时最多运行2个任务？
- 实现一个防抖函数 function debounce() {}，资源竞态的情况怎么处理？
- 用css实现一个模态窗口，要从窗口下面向上弹的动画？
- 用reduce实现map的功能？
- 树的遍历，前序和中序能确定一颗树吗？
- 给定一个数组，返回最小的k个数字，数组中可能会有重复数字，不需要去重，用快排的思想？
- 实现一个订阅发布模式的类，要求另外加一个once方法，实现仅触发一次响应事件？
- 力扣，最小栈？
- js实现树的深度优先搜索、广度优先搜索？
- arr是number数组，k是number，返回前k个最小的数字组成的数组，保持相对顺序

        输入:[1,2,3,4,5,3,2]，3，输出：[1,2,2]
        输入:[1,2,3,4,5,3,2]，4，输出：[1,2,3,2]
        输入:[1,2,3,4,5,3,2]，5，输出：[1,2,3,3,2]
- 二叉树的右视图
- if ([] == false) {console.log(1);};

    if ({} == false ) {console.log(2);};

    if ([]) {console.log(3);};

    if ([1] == [1]) {console.log(4);};
- 实现ES5中Function原型的bind方法？
- repeat 实现，使用JS实现一个repeat方法？
- 如何实现一个 setTimeout？
- 递归和循环的方式写一个斐波那契？
- 查出数组中次数超过一半的数？
- 一杯咖啡5元 每个人只买一杯 分别可能付5元 10元 20元 （补充每个人只买一杯咖啡 一杯咖啡的售价为5元 每个人可能付 5元 10元 20元 一开始咖啡店没有零钱 问是否每次是否能找零
样例 1 输入 10 5 5 结果 false (第一次别人付10元 我们没有5元零钱)
样例 2 输入 5 10 5 20 结果 true (第一次别人付5元 我们不需要找零 然后第二次付10元 我们找零5元 第三次付5元 不需要找零 第四次付20元 找零15元)

- CSS实现一个秒针效果（一分钟转一圈，匀速和一秒一走）