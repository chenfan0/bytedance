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
  - css动画相对而言比较简单但是可操作性性没有js动画那么高，同时浏览器可以会一些css动画进行优化,性能相对优于js动画
  - js动画相对css动画会更加复杂，可操作性比css高。
- for in / for of/object.key 的区别
  - for in 会遍历原型上的属性
  - for of 只能用于可迭代对象
  - Object.keys可以获取对象上的key属性，不能获取不可遍历属性以及symbol属性。
- js 能表示的最大整数，小数在计算机内部的存储过程？
  - Number.MAX_VALUE
  - IEEE754双精确度(64位)：1位符号位，11位指数位，52位尾数（由于默认这个数的第一位总是1，所以可以被舍去，只保存后面部分，这样就可以节省1位有效数字，所以为53位）。0.1转换成二进制数为无线循环小数，0.2也是一样，所以需要对0.1,0.2进行截取，0舍1入（这里就产生了进位误差），然后在进行相加，最后得到的结果就会有误差。
- 怎么判断是不是空对象？
  - Reflect.ownKeys.length === 0
- 为什么有了Object还需要有Reflect？
  - 配合Proxy使用，更加方便
  - 可以代替 in， delete这些看起来有点奇怪的操作符。
- 静态作用域和动态作用域？
  - 静态作用域：又称词法作用域，函数的作用域在函数定义时就决定了。
  - 动态作用域：函数的作用域在函数调用时才决定。
- 如何排查内存泄漏？ 火焰图接触过吗？
  - Performance
- 浏览器的事件模型？在当前的事件模型中，哪些事件可以冒泡，哪些不会冒泡，为什么？不会冒泡的怎么实现事件委托？
  - DOM0事件模型
  - DOM2事件模型
  - 不会冒泡的事件：scroll，blur，focus，mouseleave，mouseenter，resize
  - 不会冒泡的可以通过事件捕获进行事件委托
- 为什么 JS 执行的时候要阻塞 HTML 解析？
  - 因为js执行可能会对DOM进行操作，如果不阻塞HTML的解析，那么解析出来的HTML可能是错误了，需要重新解析。
- setInterval 的细节？
   - setInterval在每次把任务push到任务队列前，都要判断当前队列是否有上一次的任务，如果有则会跳过当前要添加的任务。
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
  - commonJS是同步的可以动态加载语句，代码发生在运行时，导出的值是拷贝值。
  - ESM是静态的，不可以动态加载（如果想要的话要通过import函数），只能声明在文件的最顶部。esm导出的值是可读当时不可修改的，同时导入的值不实时与导出时保持一致。
- e.target 和 e.currentTarget 的区别？
  - e.target是当前触发事件的元素
  - e.currentTarget是当前绑定事件的那个元素
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
  name: 'aaa',
  age: 18
}

with(obj) {
  // 这里的name和age就会默认去obj找
  console.log(name)
  console.log(age)
}

```
- 页面有一个 iframe，将主页面的一个数组传到 iframe 中再用 instanceof 判断数组是否可行？
  - 不可行
- JS 如何性能监测，如何监测用户页面是否卡顿？
  - 可以通过performance进行查看FPS。
- postMessage、fetch 是宏任务还是微任务？
 - fetch微任务
- 闭包是什么，有什么作用？
- 在 js 中 0.1+0.2===0.3 吗？如果不相等如何解决？
  - 不相等
  - 只要判断误差 < Number.EPSILON 即可认为他们相等
- localStorage 里可以存图片吗，怎么存？
  - 将图片转为DATA URL的形式，然后保存起来

## Vue

- vue2 和 vue3 的区别？
- 原生框架和 Vue 框架有什么不同？Vue 给你带来了一些什么？
- 从应用方面，比如性能方面，Vue 带来了什么？
- 什么场景下用单页应用会好，什么时候用多页应用会好？
- 不同组件进行通信有哪些方式？
- keep-alive 是如何实现缓存的，keep-alive 原理？
- 怎么理解单一职责性，为什么要遵循这一原则？
- diff 算法？
- Vue Scoped CSS 是做什么的，怎么实现的，如果让你自己实现有什么思路？
- 你对于封装、模块化的理解，项目中自己封装过组件吗？
- vue 中的 scoped style 是如何实现作用域样式以及为什么 vue 不使用 css module 来实现作用域？
- watch 和 computed 的区别？
- MVC MVVM MVP 的异同？
- 使用框架一定比原生的或者 jQuery 好吗？为什么？
- vue 框架有什么特点？
- vuex 的 mutation 和 action 的区别，为什么要设立两个而不是直接都用 mutation 操作 state？
- 框架里用到了哪些设计模式？
- vue3 的代理对比 vue2 的 defineProperty 有什么优点？
- vuex 使用，原理？
- SPA 是什么？

## Node

- 用过 nodejs 吗，nodejs 的架构？
- nodejs 如何开启多进程？如何开启多线程？
- Koa 洋葱圈模型？
- koa 的原理 与 express 的对比？
- 非 js 写的 Node.js 模块是如何使用 Node.js 调用的？
- node 为什么是异步？
- node 如何充分利用 CPU？
- node 如果想多开几个进程该怎么操作？

## 网络和安全方面

- 输入 url 到显示全过程？
- get post 的区别？
- DNS 使用什么协议传输？为什么？
- 如果 TCP 传输中第二个包丢失了，会怎么办？
- cookie 相关，相同一级域名跨域、不同一级域名跨域？
- 常见的 Http 状态码？
- Http 头的字段你了解哪些？
- http 压缩你除了 gzip 还了解哪些？
- gzip 是有损压缩还是无损压缩？
- https 加密的具体过程？
- CA 证书的作用？
- tcp 的可靠性怎么实现的，tcp 复用是怎么实现的？
- http 缓存，不同资源一般采取什么缓存方式？
- dns 解析，七层协议，应用层有什么协议，浏览器缓存，http 状态码？
- url 由哪些部分组成？
- cookie 的空间大小？怎么验证呢？cookie 有哪些字段？
- 跨域是什么？有哪些实现方式？CORS 响应头？
- 怎么让跨域请求携带 Cookie，协议名不一样算跨域吗？
- 讲一下 JWT 机制？
- 常见的协议有哪些？
- 最上面两层里面的协议？
- 非简单请求为什么要发 options，有什么用吗？
- 服务端如何检查用户是否登录？
- 如何预防 xss/csrf 攻击？
- samesite 属性说一下？ samesite 属性的 lax 值？ domain 属性说一下 ？ 如何配置跨域允许携带 cookie？子域也能携带 cookie 吗？
- 如何获取重定向后的地址？
- http 和 https 的区别？
- HTTP 协议的各个版本的特性都是什么？
- TCP 和 UDP 的区别? TCP 是怎么保证数据准确可靠的 ? TCP 的拥塞控制,校验和是怎么做的?
- HTTP 和 HTTPS 的区别? HTTPs 的加密方式? 除了安全性还有没有其他的优点?
- https 的加密方式有了解吗?CA 证书客户端放在哪里?
- 知道数字签名和数字信封吗？
- 怎么确定哪个 CDN 节点离用户最近呢？
- DNS 使用什么网络协议？
- https 全过程 握手的每一步？
- ssl tls 有什么区别讲一下？
- 对称加密非对称加密？
- DNS 递归查找的弊端？
- 正向代理、反向代理？

## 浏览器以及操作系统相关

- Number 精度丢失问题，底层原因，解决方案？
- 32bit 和 64bit 的区别
- 说说进程、线程是什么，了解协程么？
- 说说读写锁？
- 浏览器进程和线程？
- 线程与进程的关系？JS 为什么是单线程的？
- 如何计算浏览器的帧？
- 浏览器的多个标签页如何通信？
- 进程的调度策略，线程的同步和线程间通讯？
- 为什么 32 位操作系统最大支持内存为 4GB?
- 内存大了有啥好处？
- 线程共享为什么比进程共享容易？
- 计算机的原码、反码、补码？
- 为什么要有协程？协程的目的？
- 进程和线程有什么区别？如果某个线程挂掉了，这个进程会挂掉吗？如果某个线程修改了内存，另一个线程能感知到吗？
- 浏览器几个进程，之间有什么关系，解释一下？

## Webpack 以及优化

- 前端模块化的优势？
- 对前端工程化的理解？
- 前端性能优化？
- 讲讲性能优化，能实际实现的？
- Webpack 构建流程？
- HMR 热更替原理？
- loader 与 plugin plugin 遵循的事件流机制？
- webpack 打包过程？
- 怎样从零搭建项目？
- package.json 文件里有一些 key，value。其中一个 key 叫 dependencies 和 devDependencies，能说说作用吗？
- externals 是怎么实现的？
- CDN 优化时，你是如何判断该将哪些包分离。？
- loader 与 plugin 的区别？

## 数据结构

- 数据结构有哪些，每种的特点，给数据结构分类的方法？
- 快排 原理和优化 分析复杂度？
- hash 表结构，解决冲突的办法，hash 函数有什么类型？
- 学数据结构或者算法过程中，有没有什么地方觉得很巧妙？
- 数组和链表的区别？

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
   - 排序去前10个
   - 先对数据进行使用set进行去重，然后在进行查找。
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
