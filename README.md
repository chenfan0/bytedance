<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [HTML，CSS](#htmlcss)
- [JavaScript](#javascript)
- [Vue](#vue)
- [Node](#node)
- [网络和安全方面](#%E7%BD%91%E7%BB%9C%E5%92%8C%E5%AE%89%E5%85%A8%E6%96%B9%E9%9D%A2)
- [浏览器以及操作系统相关](#%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BB%A5%E5%8F%8A%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3)
- [Webpack 以及优化](#webpack%E4%BB%A5%E5%8F%8A%E4%BC%98%E5%8C%96)
- [数据结构](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
- [算法和手写题](#%E7%AE%97%E6%B3%95%E5%92%8C%E6%89%8B%E5%86%99%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## HTML，CSS

- 盒模型有哪些？有哪些使用场景？
  - 标准盒模型（content-box）：设置的 width 和 height 就是内容的宽度和高度
  - IE 盒模型（border-box）：设置的 width 是 content+padding+border 的总宽度，设置的 height 也是 content+padding+border 的总和。
- 实现一个等腰三角形

```html
<style>
  #box {
    border-width: 100px;
    border-color: transparent transparent transparent red;
    border-style: solid;
  }
</style>
<div id="box"></div>
```

- BFC 是什么？有什么用？
  - BFC(块级格式上下文)可以**包含内部浮动（可以让内部浮动元素撑起父元素的高度），排除外部浮动（正常文档流中建立的 BFC 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。），阻止外边距重叠。**
  - 创建 BFC：
    - 根元素（html）
    - display: flow-root(可以创建一个无副作用的 BFC)
    - float 不为 none
    - 绝对定位或者固定定位
    - 行内块元素 display：inline-block
    - overflow 不为 visible
    - flex 布局
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
- css 的 href 属性和 script 的 src 属性的区别？
  - href：用于在当前文档和引用资源之间确立联系，当浏览器遇到 href 会并行下载资源并且不会停止对当前文档的处理。
  - src：用于替换当前内容，当浏览器解析到 src，会暂停其他资源的下载和处理，知道该资源加载或执行完毕。
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
</body>
```

- z-index 在什么情况下会失效？
  - z-index 属性作用在被定位的元素上，如果在一个没有设置定位的元素上使用 z-index 是不会有效果的。
  - 元素的 z-index 效果是会受到父元素的 z-index 的影响，如果父元素的 z-index 很小，那么子元素的 z-index 取很大爷不起作用。
- position: sticky 的作用？
  - 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
- 有一个类似表格（或者日历）的布局，每个单元格的 border 为 1px，相邻单元格中间的 border 也为 1px，怎么实现？现在要实现选择某一单元格会高亮，怎么实现？
- html 中 link 一个很大的 css 文件，导致加载很慢。那用户看到的浏览器加载过程是怎样的，是一直空白么？还是先出现个骨架？还是什么？如果中间有 js 语句，会怎么样？页面加载会终止么？
  - css 加载**不会阻塞 DOM 树的解析，但是会阻塞 DOM 的渲染**。所以当 link 一个很大的 css 文件时，页面是一直空白。
  - css 文件加载会阻塞后面的 js 代码执行，这是因为 js 代码可能会操作之前的 DOM 节点和 css 样式。
  - js 会阻塞 DOM 解析。
  - 如果页面同时存在 css 和 js，并且存在 js 文件在 css 后面，则 DOMContentLoaded 事件会在 css 加载完毕后才执行。
  - 其他情况 DOMContentLoaded 事件都不会等待 css 加载。
- HTML：meta 标签干什么的，都有什么属性？

  - <meta>元素表示哪些不能由其他html元相关元素之一表示的任何元数据信息。

  ```html
  <!-- 描述HTML文档的编码类型 -->
  <meta charset="UTF-8" />

  <!-- 如果设置了http-equiv属性，则meta元素是编译指令，提供的信息类似于命名的HTTP头部 -->
  <meta http-equiv="refresh" content="2;url=http://www.baidu.com" />

  <!-- name属性和content属性 -->

  <!-- description用来告诉搜索引擎当前网页的主要内容，是关于网站的一段描述信息 -->
  <meta name="description" content="this is my HTML" />
  <!-- keywords设置网页的关键字，告诉浏览器关键字是什么 -->
  <meta name="keywords" content="nba" />
  <!-- robots告诉搜索机器人哪些页面需要索引哪些不需要 -->
  <meta name="robots" content="all" />
  <!-- 设置浏览器视图 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

- doctype 是干嘛的，都有哪些属性？
  - 告知浏览器采取什么样的文档类型进行解析
  - <\!DOCTYPE html5>
- HTML：语义化标签说出几个?
  - h1-h6
  - header
  - footer
  - menu
  - aside
  - article
  - main
  - nav
- form 表单的属性说一说？
  - name：表单名称
  - action：表单提交的 url
  - enctype：当 method 为 post，将表单内容提交给服务器的类型（multipart/form-data，application/x-www-form-urlencoded，text/plain）
  - method：使用哪种请求方式（get/post）
  - target：表单提交后，在哪里显示响应信息。（\_self, \_blank, \_parent, \_top）
- 怎么实现抽屉侧边栏？

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #mark {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #808080;
        opacity: 0.5;
      }

      #drawer {
        position: fixed;
        top: 0;
        left: 100%;
        bottom: 0;
        right: 0;
        transition: all 0.5s;
        background-color: red;
        z-index: 100;
      }
    </style>
  </head>
  <body>
    <div id="mark"></div>
    <div id="drawer">drawer</div>
    <button id="btn">点击</button>

    <script>
      const mark = document.querySelector("#mark");
      const drawer = document.querySelector("#drawer");
      const btn = document.querySelector("#btn");

      btn.addEventListener("click", function (e) {
        mark.style.display = "block";
        drawer.style.left = "80%";
      });

      mark.addEventListener("click", function (e) {
        mark.style.display = "none";
        drawer.style.left = "100%";
      });
    </script>
  </body>
</html>
```

- head 有啥标签，各有啥用？
  - meta 标签
  - title 标签：显示 title
    -link 标签可以加载 css 文件
- 设置一个元素 margin-top: -20%，具体是什么效果？
  - margin 取值为%时，百分比是相对于包含块的宽度。（padding 也是一样）
- 元素 line-height 设置为 1，具体是多少像素，怎么计算？
  - line-height 设置为 1 时，取值就相当于 1\*font-size
- 如何计算 1rem 具体等于多少像素？
  - 1rem 就等于 html 标签设定的 font-size
- 图片渲染下方有一条白线是什么原因造成的？
  - 因为图片默认是基线对齐，可以设置`vertical-align:middle`设置居中对齐。
  - 可以将图片转换为块级元素去除掉空白
  - 对图片进行设置浮动
- css 实现一个梯形？

  ```html
  <style>
    #box {
      /* 这样设置是三角形 */
      /* width: 0;
     height: 0; */

      width: 20px;
      height: 20px;
      border: 50px solid red;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
    }
  </style>
  <div id="box"></div>
  ```

- CSS 动画 GPU 加速开启（3d 属性）与原理（GPU）？
  - transform 和 opacity 两个属性可以开启优化合成。
- 伪类与伪元素差别？
  - 伪类是选择器的一种，它用于选择处于特定状态的元素
  - 伪元素可以创建一个元素，不过该元素不会出现在 dom 树上。
- Flex: 0 1 auto 是代表什么？
  - flex-grow：0 代表就算 flex-container 还有剩余空间 flex-item 也不会扩大
  - flex-shrink：1 代表当 flex-container 的空间不满足 flex-item 设置的宽度时，flex-item 会进行缩小
  - flex-basis：auto 指定 flex-item 在主轴方向上的初始大小。
- 了解 iframe 吗？
  - \<iframe\>可以将另一个页面嵌入到当前页面中。
- script 标签属性 defer 和 async 的作用，什么区别？
  - defer：并行加载 js 文件，等到解析完 html 后再执行 js 文件
  - async：并行加载 js 文件，当该文件加载完成后就执行 js 文件
- 类选择器和伪类的区别及优先级？
  - 类选择器和伪类选择器的优先级是一样的
- 用 css 实现一个模态窗口，要从窗口下面向上弹的动画？
- CSS 单位 px rem em vw vh？如果窗口尺寸调整，vw，vh 会产生变化吗？
  - rem 是相对于 root 标签的 font-size
  - em 是相对于父元素的 font-size
  - vw：整个窗口的宽度为 100vw
  - vh：整个窗口的高度为 100vh
  - 窗口尺寸调整，vw 和 vh 会发生变化
- BFC 会与 float 元素相互覆盖吗？
  - 不会
- css 选择器优先级排序？
  - id 选择器 > class 选择器 > 标签选择器 > 通配符选择器
  - 内联样式 > id 选择器
  - !important 优先级最高
- box-sizing 的意义是什么？
  - 设置盒子的模型（border-box，content-box）

## JavaScript

- 遍历 object 的 value 方法？
  - Reflect.ownKeys
  - for...in
  - 通过 Object.keys 获取 keys 数组，在进行遍历
- 数据类型有哪些，为什么存在栈和堆？
  - 基本数据类型：Number，String，Boolean，Null，Undefined，Symbol，BigInt
  - 引用数据类型：Object
  - 栈存放着基本数据类型以及堆中对象的引用（长度固定）。
  - 堆中存放着对象（可能会出现动态增长）。
- 如何捕获 async await 的异常，如果不写 await promise 报错了你的 try catch 能捕获到错误么？
  - 使用 try...catch 捕获异常
  - 如果不写 await 不能捕获到错误
- map 和 Object 的区别？
  - Map 的键值对是有序的，而 Object 是无序的。
  - Map 是可迭代的，Object 不可以
  - Map 的 key 可以是任何类型，Object 的 key 只能是 symbol 或者 string
  - Map 默认不包含任何键，Object 默认会有一个原型对象
  - Map 可以直接通过 size 获取个数，而 Object 需要手动计算
  - Map 在频繁增删键值对时性能比 Object 好
- js 垃圾回收机制？
  - https://juejin.cn/post/7042968897800601608
- 函数创建和执行的过程？
  -
- css 动画与 js 动画区别？
  - css 动画相对而言比较简单但是可操作性性没有 js 动画那么高，同时浏览器可以会一些 css 动画进行优化,性能相对优于 js 动画
  - js 动画相对 css 动画会更加复杂，可操作性比 css 高。
- for in / for of/object.key 的区别
  - for in 会遍历原型上的属性
  - for of 只能用于可迭代对象
  - Object.keys 可以获取对象上的 key 属性，不能获取不可遍历属性以及 symbol 属性。
- js 能表示的最大整数，小数在计算机内部的存储过程？
  - Number.MAX_VALUE
  - IEEE754 双精确度(64 位)：1 位符号位，11 位指数位，52 位尾数（由于默认这个数的第一位总是 1，所以可以被舍去，只保存后面部分，这样就可以节省 1 位有效数字，所以为 53 位）。0.1 转换成二进制数为无线循环小数，0.2 也是一样，所以需要对 0.1,0.2 进行截取，0 舍 1 入（这里就产生了进位误差），然后在进行相加，最后得到的结果就会有误差。
- 怎么判断是不是空对象？
  - Reflect.ownKeys.length === 0
- 为什么有了 Object 还需要有 Reflect？
  - 配合 Proxy 使用，更加方便
  - 可以代替 in， delete 这些看起来有点奇怪的操作符。
- 静态作用域和动态作用域？
  - 静态作用域：又称词法作用域，函数的作用域在函数定义时就决定了。
  - 动态作用域：函数的作用域在函数调用时才决定。
- 如何排查内存泄漏？ 火焰图接触过吗？
  - Performance
- 浏览器的事件模型？在当前的事件模型中，哪些事件可以冒泡，哪些不会冒泡，为什么？不会冒泡的怎么实现事件委托？
  - DOM0 事件模型
  - DOM2 事件模型
  - 不会冒泡的事件：scroll，blur，focus，mouseleave，mouseenter，resize
  - 不会冒泡的可以通过事件捕获进行事件委托
- 为什么 JS 执行的时候要阻塞 HTML 解析？
  - 因为 js 执行可能会对 DOM 进行操作，如果不阻塞 HTML 的解析，那么解析出来的 HTML 可能是错误了，需要重新解析。
- setInterval 的细节？
  - setInterval 在每次把任务 push 到任务队列前，都要判断当前队列是否有上一次的任务，如果有则会跳过当前要添加的任务。
- v8 引擎的 sort()实现？
  - 当数据量小时会采用插入排序
  - 当数据量大时会采用快速排序。
- removeEventListener(eventName,callback)拿不到函数名(callback)怎么办？
- JS 里面印象最深刻的技术，说三个？
  - proxy
  - 模板字符串
  - 解构赋值
- 创建一个原型链只有 name 属性的对象（除了 name 属性其他属性都没有）？
  - Object.create(null, {name: {value: ''}})
- ES module 和 commonjs 的区别？
  - commonJS 是同步的可以动态加载语句，代码发生在运行时，导出的值是拷贝值。
  - ESM 是静态的，不可以动态加载（如果想要的话要通过 import 函数），只能声明在文件的最顶部。esm 导出的值是可读当时不可修改的，同时导入的值不实时与导出时保持一致。
- e.target 和 e.currentTarget 的区别？
  - e.target 是当前触发事件的元素
  - e.currentTarget 是当前绑定事件的那个元素
- addEventListener 的第三个参数？

```js
  // 第三个参数
  {
    capture: 'boolean', // 是否开启捕获模式，默认为false
    once: 'boolean', // 是否在被调用后自动移除
    passive: 'boolean', // 设置为true表示永远不会调用preventDefault()，如果调用了，则会忽略并且抛出一个警告。
    signal: 'AbortSignal', // 该AbortSignal的abort方法被调用时，监听器会被移除。
  }
```

- with 的了解？

```js
const obj = {
  name: "aaa",
  age: 18,
};

with (obj) {
  // 这里的name和age就会默认去obj找
  console.log(name);
  console.log(age);
}
```

- 页面有一个 iframe，将主页面的一个数组传到 iframe 中再用 instanceof 判断数组是否可行？
  - 不可行
- JS 如何性能监测，如何监测用户页面是否卡顿？
  - 可以通过 performance 进行查看 FPS。
- postMessage、fetch 是宏任务还是微任务？
- fetch 微任务
- 闭包是什么，有什么作用？
- 在 js 中 0.1+0.2===0.3 吗？如果不相等如何解决？
  - 不相等
  - 只要判断误差 < Number.EPSILON 即可认为他们相等
- localStorage 里可以存图片吗，怎么存？
  - 将图片转为 DATA URL 的形式，然后保存起来

## Vue

- vue2 和 vue3 的区别？
  - vue2 的响应式是通过 Object.defineProperty，而 vue3 是通过 proxy 进行实现的。
  - vue3 新增了 compositionApi
  - vue3 对 ts 的支持比 vue2 更加好
  - 新增 Fragment，teleport
- 原生框架和 Vue 框架有什么不同？Vue 给你带来了一些什么？
  - 我觉得 vue 和原生框架最大的不同就是，使用 vue 的时候在绝大多数的情况下都不需要我们手动去进行 dom 操作，而使用原生时，我们需要编写很多的原生 dom 操作。而操作 dom 是非常消耗性能的，不同人编写的原生代码可能性能会相差非常大，这对于我们的心智负担是非常大的。而 vue 帮我们隔离了元生的去操作 dom，它可以保证我们即使编写出很糟糕的代码，也能提供过得去的性能。
- 从应用方面，比如性能方面，Vue 带来了什么？
  - 从理论上讲，编写 vue 代码的性能是不能比编写原生的性能好。但是，如果想要编写出性能非常好的原生代码，这对程序员的要求是非常高的。而 vue 使用了虚拟 DOM 先找出需要变化的 DOM，然后在进行 DOM 操作，在理论上 vue 写出来的代码是没有原生好的，但是 vue 给程序员降低了心智负担，它可以让我们即使编写出非常差的代码，也能提供过的去的性能。
- 什么场景下用单页应用会好，什么时候用多页应用会好？
  - 单页面在页面跳转的时候不需要进行刷新，用户体验会相对较好
  - 多页面对 seo 的优化会比单页面要好，首屏加载时间也会比单页面快。
  - 单页面适合用在一些对 seo 不是很在意的网站，比如后台管理系统
  - 多页面适合一些官网，电商页面，这些页面对首屏和 seo 要求相对较高。
- 不同组件进行通信有哪些方式？
  - 父子组件可以通过 props 和 emit
  - 可以通过 provide 和 inject 进行父组件与后代组件的通信。
  - 通过 eventBus 可以实现兄弟组件的通信。
  - 可以通过 ref 获取到组件实例然后进行通信。
  - 通过 vuex 进行通信
- keep-alive 是如何实现缓存的，keep-alive 原理？
- 怎么理解单一职责性，为什么要遵循这一原则？
- diff 算法？
- Vue Scoped CSS 是做什么的，怎么实现的，如果让你自己实现有什么思路？
  - scoped 是让 css 只应用到当前组件的元素上。
  - 当设置了 scoped 时，会添加上 data-vxxx 的属性，然后通过属性选择器进行选择该元素。
- 你对于封装、模块化的理解，项目中自己封装过组件吗？
- vue 中的 scoped style 是如何实现作用域样式以及为什么 vue 不使用 css module 来实现作用域？
  - 当设置了 scoped 时，会添加上 data-vxxx 的属性，然后通过属性选择器进行选择该元素。
  - vue 可以使用 css module 实现作用域
- MVC MVVM MVP 的异同？
  -
- 使用框架一定比原生的或者 jQuery 好吗？为什么？
  - 不一定。使用框架是声明式，而使用原生或者 jquery 是命令式。声明式代码性能在理论上是不可能优于命令式的代码。因最终还是要进行原生的 dom 操作。
- vue 框架有什么特点？
  - 渐进式
  - 响应式
  - 组件化
- vuex 的 mutation 和 action 的区别，为什么要设立两个而不是直接都用 mutation 操作 state？
  - mutation 是唯一可以修改 state 状态的地方，mutation 只能进行同步操作
  - action 可以进行异步操作
  - 因为每一条 mutation 记录都会被记录，devtools 需要捕捉到前一状态和后一状态，而如果 mutation 里面有异步函数，那么就会导致状态改变变得不可追踪。
- vue3 的代理对比 vue2 的 defineProperty 有什么优点？
  - proxy 比 defineProperty 的功能更加强大，他可以代理数组，可以代理新增的属性。这都是 defineProperty 做不到的。
  - 使用 defineProperty 进行响应式处理时，默认会递归对该对象进行处理。而使用 proxy 时，会用到才处理，所以从这点来看性能会好一点。
  - proxy 兼容性没有 defineProperty 好，它不兼容 ie
- SPA 是什么？
  - 单页面应用，只需要加载一个入口 html，然后 html 的内容都是通过加载 js 文件以及 css 文件进行填充的。spa 会导致 seo 优化不好，首屏加载时间长，但是 spa 在页面跳转时，不会刷新页面体验好，对服务器的压力也相对没有那么大。

## Node

- 用过 nodejs 吗，nodejs 的架构？
  - V8 引擎，Node.jsBindings,LIBUV(用 C 语言编写的)
  - 我们编写的 js 代码会经过 v8 引擎，再通过 NodejsBindings，将任务放到 Libuv 的事件循环中
  - Libuv 提供事件循环，文件系统读写，网络 IO，线程池等等内容。
- nodejs 如何开启多进程？如何开启多线程？
  - 可以通过 child_process 创建子进程（spawn，exec）
  - 通过 worker_threads 获取 Worker 类，然后 new Worker
- Koa 洋葱圈模型？
  - 在 koa 中，中间件被`next()`方法分成了两部分。next()方法上面的部分会先执行，下面部分会在后续中间件执行全部结束之后再执行。

## 网络和安全方面

- 输入 url 到显示全过程？
- get post 的区别？
  - get 一般是用来获取数据，post 一般是用来提交数据
  - get 参数是跟在 url 后面的有长度限制，而 post 是放在请求体，没有长度限制。
  - get 是幂等额，post 不是
  - get 一般是会被浏览器缓存的，而 post 不会。
- DNS 的递归查询和迭代查询？
  - 递归查询：a 向 b 发送请求，如果 b 不知道 a 请求的内容，那么 b 会代替 a 去请求，然后将得到的结果返回给 a
  - 迭代查询：a 向 b 发送请求，如果 b 不知道 a 请求的内容，那么 b 会告诉 a 它要请求的内容（IP 地址）要去哪里请求。
- DNS 使用什么协议传输？为什么？
  - TCP 和 UDP 都有
  - 在大多数情况下，DNS 都是采用的 UDP 协议进行传输。因为 UDP 面向无连接速度比 TCP 快。但是因为 TCP 是面向报文的（没有像 TCP 一样的序列号机制来标识报文），所以会导致 UDP 报文被限制在 512 字节，如果 DNS 的报文超过了 512 字节，那么 UDP 就会进行截断，那么用户就会获取到不完整的报文。所以这个时候就得采用 tcp。
  - 当客户端事先知道 DNS 响应报文会大于 512 字节时，直接使用 TCP 建立连接
  - 当客户端事先不知道 DNS 响应报文的长度时，会使用 UDP，当响应报文被截断时，会有标志进行标记，然后采用 tcp 再次发送请求。
- 如果 TCP 传输中第二个包丢失了，会怎么办？
  - 发送确认收到第一个包的响应
- 常见的 Http 状态码？
  - 200：成功
  - 204：no content
  - 301：永久重定向
  - 302：临时重定向
  - 304：no modify
  - 400：请求语法错误
  - 401：未授权
  - 403：禁止访问
  - 404：找不到
  - 405：该资源不支持该请求方法
  - 429：限制请求速率
  - 500：服务器错误
  - 501：服务器不支持该请求方法
- Http 头的字段你了解哪些？
  - Accept-Encoding：用户支持的压缩方式
  - Access-Control-Allow-Origin：设置跨域的
  - Access-Control-Allow-Credentials：设置携带 cookie
  - Cache-Control：设置缓存的
  - Set-Cookie：设置 cookie
  - Etag：用于协商缓存
  - Last-Modify：用于协商缓存
  - Content-Type：请求体类型
  - Referer：浏览器所访问的请一个页面
  - Expires：指定一个过期时间
- http 压缩你除了 gzip 还了解哪些？
  - deflate
  - gzip
  - br
- gzip 是有损压缩还是无损压缩？
  - 无损
- https 加密的具体过程？
  - client-hello：告诉服务器浏览器支持的 tls 版本，加密套件，client random
  - 服务器会返回使用的 tls 版本，选择的加密套件，server random，被 ca 签名的公钥证书，server params（ECDHE 密钥交换算法的一个参数）
  - 客户端验证公钥的真实性，如果验证通过会发送 client params 给客户端。然后根据 server params 和 client params 生成 pre random，在根据 client random ，server random， pre random 生成最终进行加密的密钥。然后告知服务器接下来的通信会进行加密，发送 finish 报文将连接到现在的全部报文的摘要值，加密发送给服务器。
  - 服务器也是和客户端一样进行密钥的生成，然后告诉客户端接下来的的通信会进行加密，然后发送 finish 报文。
- CA 证书的作用？
  - 防止得到的公钥是伪造的
  - 证书上会有认证机构的数字签名，保证公钥不会被伪造
- tcp 的可靠性怎么实现的？
  - 停止等待ARQ协议，服务器发送一个包，会等到客户端返回一个接受到该包的响应后再继续发送下一个包。如果客户端没有返回响应，那么服务器会在一定时间后触发超时重传。
  - 连续ARQ和滑动窗口协议：服务器根据客户端的接收窗口的大小，一次发送多个包，客户端只需要对这多个包返回一个响应报文就可以了。这样就可以大大提高传输效率。
  - SACK：连续ARQ中，如果发送1，2，3，4四个包，如果第二个包丢了，那么客户端会发送接收到了第一个包的响应。服务器就会发送2,3,4三个包给客户端。可是3,4客户端已经拥有了，所以就会产生不必要的资源浪费，而SACK可以做到，然服务器只重新发送丢失的那个包。（SACK在请求头加上了一些字段来实现这个功能）
- http 缓存，不同资源一般采取什么缓存方式？
  - http缓存分为强缓存和协商缓存
  - 浏览器发送请求前会查看是否命中强缓存，如果命中直接使用。
  - 如果没有命中则进入协商缓存阶段，浏览器会向服务器发起请求，同时会携带上响应的协商缓存字段，然后服务器根据请求的协商缓存字段进行判断资源是否修改过，如果没有修改则返回304，如果修改了这返回新的资源。
  - 协商缓存的字段有etag和In-None-Match，以及Last-Modify和If-Modify-Since
- dns 解析，七层协议，应用层有什么协议？
  - 七层协议：物理层，数据链路层，网络层，传输层，会话层，表示层，应用层
  - DNS解析：输入网址后，首先会在**本地的域名服务器中查找**，如果没有找到就会去**根域名服务器查找**，根域名服务器会返回该网址所对应的顶级域名服务器IP地址，然根据该ip地址去顶级域名服务器查找，顶级域名服务器会返回该网址对应的二级域名服务器的ip地址，一直这样知道找到为止。
  - 应用层有：DNS协议，HTTP协议
- url 由哪些部分组成？
  - 协议，域名，端口，路径，参数
- cookie 的空间大小？怎么验证呢？cookie 有哪些字段？
  - 4k大小
  - secure：设置只能在https中使用
  - httponly：不允许客户端操作cookie
  - samesite：设置哪些跨站可以携带cookie
  - max-age：设置过期时间
  - Domain：设置可以携带cookie的域名
  - path：设置路径
- 跨域是什么？有哪些实现方式？CORS 响应头？
  - 当协议，域名，端口号，三者有一个不同时，就算跨域了。
  - 跨域可以通过jsonp，cors，开启proxy代理来解决。
- 怎么让跨域请求携带 Cookie，协议名不一样算跨域吗？
  - 服务器设置access-control-allow-credentials：true
  - 客户端发送时，打开withCredentials属性
- 讲一下 JWT 机制？
  - jwt由三部分组成：
    - header（头部）：是一个JSON对象，描述jwt的元数据。（typ，alg）
    - payload（载荷）：也是json对象，用来存放实际需要传递的数据。
    - signature（签名）：对前面两部分的前面，防止数据篡改。
  - 算出签名后，把header，payload，signature三个部分拼成一个字符串，每个部分用.分割就可以返回给用户了。
  - JWT默认是不加密的
  - JWT最大的缺点是无法在使用过程废弃某个token，或者修改某个token。除非服务器部署额外的逻辑
- 最上面两层里面的协议？
  - 传输层：TCP，UDP
  - 应用层：DNS，HTTP，FTP
- 非简单请求为什么要发 options，有什么用吗？
  - 获取服务器是否允许该实际请求
- 服务端如何检查用户是否登录？
  - 使用token
  - cookie和session
- 如何预防 xss/csrf 攻击？
  - xss攻击：跨站脚本攻击。
    - 存储型：将恶意脚本存储到服务器中（比如提交留言，提交评论），然后在客户端执行这些脚本从而达到攻击的效果。
    - 反射型：将恶意脚本通过作为网络请求的参数，经过服务器，再反射到HTML中。反射型是不会存储到服务器中的。
    - 文档型：不会进过服务器，而是数据传输过程中被中间人劫持并修改了**里面的HTML文档**。
  - 防范xss攻击：
    - 无论是在前端还是在服务端，都要对用户的输入进行转义或者过滤。
    - 利用浏览器的CSP（内容安全策略）：决定浏览器加载哪些资源，可以限制其他域下的资源加载，禁止向其它域提交数据，提供上报机制，能帮助我们及时发现XSS攻击。
    - 利用**HttpOnly**，禁止通过JavaScript获取cookie。
  - CSRF攻击：跨站请求伪造，诱导用户点击链接跳转到新的页面，然后利用服务器的**验证漏洞和用户之前的登录状态**来模拟用户进行操作。
  - 防范CSRF：
    - 利用cookie中的**sameSite**属性
      - strict模式：只能在同一个域名下才能携带cookie
      - lax模式
      - none模式：默认
    - 验证来源站点：
      - Origin：包含了域名信息
      - referer：包含了具体的url路径。
- samesite 属性说一下？ samesite 属性的 lax 值？ domain 属性说一下 ？ 如何配置跨域允许携带 cookie？子域也能携带 cookie 吗？
  - SameSite接受三个值：strict，lax，none
  - 设置strict，不允许第三个网站发起的请求携带cookie
  - 设置lax，只允许第三个网站发起的get请求携带cookie
  - none：允许跨域发送（需要设置secure）
- 如何获取重定向后的地址？
  - location字段
- http 和 https 的区别？
- HTTP 协议的各个版本的特性都是什么？
  - 0.9：只支持get
  - 1.0：新增post，delete，put，head方式，增加了请求头和响应头的概念
  - 1.1：新增keep-alive值可以让连接保持不断开，新增cache-control字段
  - 2.0：二进制分帧，多路复用，头部压缩，服务器推送，设置优先级。
- TCP 和 UDP 的区别?  TCP 的拥塞控制,校验和是怎么做的?
  - tcp是可靠传输，udp是不可靠传输
  - 流量控制是点到点的，而拥塞控制是对整个网络的。

  - 慢开始
  - 拥塞避免
  - 快重传
  - 快恢复

  一开始会将拥塞窗口设置为只允许一个包，等到接收到响应之后，会将拥塞窗口扩大一倍，然后接收到响应后继续翻倍。当拥塞窗口增大到慢开始阈值时，会执行啊拥塞避免算法也就是将拥塞窗口变成线性增长。当出现网络拥塞时，也就是丢包（接收到3次重复确认）会进行快重传重新发送丢失的包。同时将慢开始阈值变为当前拥塞窗口的一半，并且进行快恢复将拥塞窗口变为新的慢开始阈值，然后继续进行拥塞避免算法。
- HTTP 和 HTTPS 的区别? HTTPS 的加密方式? 除了安全性还有没有其他的优点?
  - https比http多了一层tls。
  - https的加密方式：结合对称加密和非对称加密两种方式。
  - https的搜索引擎排名也会相对更高
- 知道数字签名和数字信封吗？
  - 数字签名：发送方用自己的私钥对原始数据进行加密生成签名，接收方使用发送方的公钥进行解密验证
  - 数字信封：发送者先利用随机生的堆成密码加密信息，然后使用接收方的公钥加密该随机生成的密码。接收方先用自己的私钥解密获得加密信息的对称密钥，然后在通过对称密钥加密信息。
- 怎么确定哪个 CDN 节点离用户最近呢？
  - 可以根据IP地址判断哪个节点里用户最近
- ssl tls 有什么区别讲一下？
  - tls是ssl的更新版本
- 对称加密非对称加密？
  - 对称加密：加密和解密都是用同一个钥匙
  - 非对称加密：公钥加密，私钥解密。私钥加密，公钥解密
- DNS 递归查找的弊端？
  - 容易遭到攻击。当递归DNS服务器向另外一台服务器请求IP地址是，如果被拦截并且给出假的响应。那么DNS服务器不仅向原始客户端发送次IP地址，还有将该错误的响应保存起来，任何请求相同域名IP的用户都会被发送到恶意的网站。
- 正向代理、反向代理？
  - 正向代理：对客户端进行代理，比如绕开防火墙。
  - 反向代理：对服务器进行代理，比如进行负载均衡。

## 浏览器以及操作系统相关
- Number 精度丢失问题，底层原因，解决方案？
  - IEEE754 双精确度(64 位)：1 位符号位，11 位指数位，52 位尾数（由于默认这个数的第一位总是 1，所以可以被舍去，只保存后面部分，这样就可以节省 1 位有效数字，所以为 53 位）。0.1 转换成二进制数为无线循环小数，0.2 也是一样，所以需要对 0.1,0.2 进行截取，0 舍 1 入（这里就产生了进位误差），然后在进行相加，最后得到的结果就会有误差。
  - 当两个数相差小于某一个值时，就认为它们是相同的。可以和Number.EPSILON对比。
- 32bit 和 64bit 的区别
  - 32位cpu一次最多能处理32位数据，64位一次能处理64位数据
  - 32位无法使用大于4G内存，因为32位系统上，这个地址是2^32次方差不多就是4G
- 说说进程、线程是什么，了解协程么？
  - 进程是操作系统分配资源的最小单位
  - 线程是cpu调度的最小单位
  - 一个进程由一个或多个线程组成。
  - 进程间相互独立，但同一进程下的各个线程共享内存空间。
  - 协程是一种用户态的轻量级线程
- 浏览器进程和线程？
  - 浏览器进程：浏览器主进程，负责协调，主控
  - GPU进程：用户绘制
  - 渲染进程：每个tab也就是一个进程。
  - 第三方插件进程

  - GUI线程
  - js线程
  - 事件触发线程
  - 定时器线程
  - 网络请求线程
- JS 为什么是单线程的？
  - 如果js是多线程的话，那么就可能出现一个线程删除dom，一个线程修改dom，那么就不知道以谁为主了。
- 浏览器的多个标签页如何通信？
  - localStorage
  - shareWorker

## Webpack 以及优化
- 前端模块化的优势？
  - 避免变量污染，命名冲突
  - 因为模块是独立的，所以它的可维护性会更高。
  - 便于重用代码
- 对前端工程化的理解？
  - 我觉得前端工程化是一种思想，主要目的是为了提高效率和降低成本，提高开发过程的效率，减少不必要的重复时间。
  - 我觉得前端工程化可以包括：命名规范，接口规范，eslint保证代码规范，commitlint保证提交规范.
- 前端性能优化？
  - 减少http请求
  - 使用HTTP2
  - 使用CDN
  - 将css放头部，js放底部
  - 利用好缓存
  - 压缩文件
  - tree-shaking消除无用代码
  - 减少重绘重排
- 讲讲性能优化，能实际实现的？
  - 使用浏览器缓存
  - 使用import函数实现懒加载
  - 使用cdn
  - 使用prefetch进行预加载
- Webpack 构建流程？
  - 解析配置文件初始化参数
  - 找到入口点。
  - 根据入口点构建依赖关系，递归的解析文件
  - 运用loader进行处理
  - 完成编译并输出。
- HMR 热更替原理？
  - webpack-dev-server会创建两个服务：提供静态资源的服务（express）和socket服务
  - 当服务器监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）
  - 然后将这两个文件主动发送给浏览器
  - 浏览器拿到这两个文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新。

## 数据结构
- 数据结构有哪些，每种的特点，给数据结构分类的方法？
  - 数组：一块连续的空间，可以通过索引访问到对应的元素。
  - 栈：先进后出，只能在尾部进行插入和删除
  - 队列：先进先出，只能在首部进行删除，在尾部进行插入
  - 链表：链表的每一个元素由一个存储元素本身的节点和一个指向下一个元素的指针。链表中元素的内存不必是连续的空间。
  - 哈希表：可以提供非常快速的插入-删除-查找操作，但是哈希表中的数据是没有顺序的，通常情况下哈希表的key是不允许重复的。哈希表可以将值与下标进行一种转换（哈希函数），这样就可以通过值很快查找到对应的下标。
  - 哈希表的概念：
    - 哈希化：将大数字转换成范围内下标的过程，称之为哈希化
    - 哈希函数：将值转换成大数字，再讲大数字进行哈希化。这样的函数就称为哈希函数。
  - 图：有定点和边，入度出度。有向图，无向图
    - 可以通过邻接矩阵来表示：如果图是一个稀疏图，那么邻接矩阵会存在大量的0，造成空间的浪费。
    - 邻接表：可以简单的得出出度，但是计算入度比较麻烦
  - 堆：
  - 树：
- 快排 原理和优化 分析复杂度？
- hash 表结构，解决冲突的办法，hash 函数有什么类型？
  - 解决冲突的两种方案
      - 链地址法：每个数组单元存储的不再是单个数据，而是一个链表
      - 开放地址法：寻找空白的单元格来放置冲突的数据项。
        - 线性探测：当冲突时，从index+1的位置找到空的位置进行存放。（删除的时候不能直接设置为空，否则会影响之后的查询操作，可以对这个位置进行特殊处理，比如设置为-1）。容易造成聚集，影响哈希表的性能。
        - 二次探测：index + 1 ^ 2, index + 2 ^2，一次性探测比较长的距离。会造成步长不一的聚集。
        - 在哈希化：对相同的值，重新进行哈希化。第二次哈希化要满足：不能和第一个哈希函数相同，不能输出为0.
  - hash函数类型：直接定址法，除留余数法，数字分析法。
- 学数据结构或者算法过程中，有没有什么地方觉得很巧妙？
- 数组和链表的区别？
  - 数组的内容时连续的而链表不需要
  - 数组可以通过索引直接访问对应的元素，而链表必须从头开始遍历
  - 数组新增或者删除时性能比较差，链表新增或者删除时性能比较好。

## 算法和手写题
- 给定一个二叉树与一个值，找到和为该值的二叉树的所有路径？
- 数组去重，不使用 ES6 语法，要求时间复杂度低？
- 给两个矩形，有每个矩形点坐标以及长宽高，判断是否相交（包含也算相交）？
- 如何在不使用 ES6 的情况下，达到 let 的效果？
- 求一个数组的最大连续子数组，输出他们的和？
- 常见排序算法？
- 找出 dom 节点下所有标签类型？
- 最短路径和？
- 深度遍历 dom，打印遍历路径？
- 在很多数中怎么查找前 10 个大的数？
  - 排序去前 10 个
  - 先对数据进行使用 set 进行去重，然后在进行查找。
- 最长无重复子串？
- K 个一组翻转链表？
- 手写 jsonp？
- 计算中缀表达式的值？
- 求两个数组交集？
- 在字符串里面找到第 k 个唯一出现一次的字符串？
- 1123456789 -> 1,123,456,789
- 二叉树最近公共祖先？
- 最长不重复子串？
- 把数字的 0 都移到数组末端？
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
- 2 维数组斜 45 度输出？
- 字符串匹配，大概是给一个 str，再给一个 exp，判断 str 能否被 exp 匹配（如"sss"可以被".\*"匹配）？
- 二分查找？
- 手写深拷贝？
- a=[1,[2,[3,[4,null]]]], 实现数组 b=[4,[3,[2,[1,null]]]]？
- 实现一个计算器，求字符串的值，例如((2 + (3 _ 2) ) _ (2 + 3) + (3 - 1) )
- 数组随机排序？
- 判断对称二叉树？
- 写一段匹配 URL 的正则，包括协议、域名、端口、path、hash、querystring？
- 两个链表找相交节点？
- 创建一个原型链只有 name 属性的对象？
- leetcode 112 路径总和？
- 手写 reduce？
- fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']
- 写一个事件代理函数，需要判断 child 是 parent 的子节点？
- 给数组中的字符串编号，f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']
- 无重复字符的最长子串？
- 最长回文子串？
- 斐波那契（尾递归优化）？
- 给定一个正整数数组和 n，求最短子数组，要求子数组之和大于等于 n（滑动窗口）？
- 爬楼梯？
- JavaScript 实现一个带并发限制的异步调度器，保证同时最多运行 2 个任务？
- 实现一个防抖函数 function debounce() {}，资源竞态的情况怎么处理？
- 用 css 实现一个模态窗口，要从窗口下面向上弹的动画？
- 用 reduce 实现 map 的功能？
- 树的遍历，前序和中序能确定一颗树吗？
- 给定一个数组，返回最小的 k 个数字，数组中可能会有重复数字，不需要去重，用快排的思想？
- 实现一个订阅发布模式的类，要求另外加一个 once 方法，实现仅触发一次响应事件？
- 力扣，最小栈？
- js 实现树的深度优先搜索、广度优先搜索？
- arr 是 number 数组，k 是 number，返回前 k 个最小的数字组成的数组，保持相对顺序

        输入:[1,2,3,4,5,3,2]，3，输出：[1,2,2]
        输入:[1,2,3,4,5,3,2]，4，输出：[1,2,3,2]
        输入:[1,2,3,4,5,3,2]，5，输出：[1,2,3,3,2]

- 二叉树的右视图
- if ([] == false) {console.log(1);};

  if ({} == false ) {console.log(2);};

  if ([]) {console.log(3);};

  if ([1] == [1]) {console.log(4);};

- 实现 ES5 中 Function 原型的 bind 方法？
- repeat 实现，使用 JS 实现一个 repeat 方法？
- 如何实现一个 setTimeout？
- 递归和循环的方式写一个斐波那契？
- 查出数组中次数超过一半的数？
- 一杯咖啡 5 元 每个人只买一杯 分别可能付 5 元 10 元 20 元 （补充每个人只买一杯咖啡 一杯咖啡的售价为 5 元 每个人可能付 5 元 10 元 20 元 一开始咖啡店没有零钱 问是否每次是否能找零
  样例 1 输入 10 5 5 结果 false (第一次别人付 10 元 我们没有 5 元零钱)
  样例 2 输入 5 10 5 20 结果 true (第一次别人付 5 元 我们不需要找零 然后第二次付 10 元 我们找零 5 元 第三次付 5 元 不需要找零 第四次付 20 元 找零 15 元)

- CSS 实现一个秒针效果（一分钟转一圈，匀速和一秒一走）
