import {Box, Typography} from "@mui/material";
import {useEffect, useRef} from "react";

export default function Touch() {
  const refreshContainerEl = useRef(null), refreshTextEl = useRef(null);
  let startPos = 0, transitionHeight = 0; // 移动的距离

  useEffect(() => {
    refreshContainerEl.current?.addEventListener("touchstart", (e) => {
      startPos = e.touches[0].pageY;
      refreshContainerEl.current.style.position = "relative";
      refreshContainerEl.current.style.transition = "transform 0s";
    });
    refreshContainerEl.current?.addEventListener("touchmove", (e) => {
      transitionHeight = e.touches[0].pageY - startPos;
      if (transitionHeight > 0 && transitionHeight < 60) {
        refreshTextEl.current.innerText = "下拉刷新";
        refreshContainerEl.current.style.transform = "translateY(" + transitionHeight + "px)";

        if (transitionHeight > 55) {
          refreshTextEl.current.innerText = "释放更新";
        }
      }
    });
    refreshContainerEl.current?.addEventListener("touchend", () => {
      refreshContainerEl.current.style.transition = "transform 0.5s ease 1s";
      refreshContainerEl.current.style.transform = "translateY(0px)";
      refreshTextEl.current.innerText = "更新中...";
    });
  }, []);

  return (
    <Box id="Touch">
      <Typography>
        <a href="https://www.cnblogs.com/xiaodongxier/p/javascript-ru-he-shi-xian-shang-la-jia-zai-xia-la.html">原文</a>
        一、前言#
        下拉刷新和上拉加载这两种交互方式通常出现在移动端中

        本质上等同于PC网页中的分页，只是交互形式不同

        开源社区也有很多优秀的解决方案，如iscroll、better-scroll、pulltorefresh.js库等等

        这些第三方库使用起来非常便捷

        我们通过原生的方式实现一次上拉加载，下拉刷新，有助于对第三方库有更好的理解与使用
      </Typography>
      <Typography>
        二、实现原理#
        上拉加载及下拉刷新都依赖于用户交互

        最重要的是要理解在什么场景，什么时机下触发交互动作

        上拉加载#
        首先可以看一张图
        <img src="https://img2020.cnblogs.com/blog/2082008/202105/2082008-20210512092746798-1735689861.jpg" alt="..."/>
        上拉加载的本质是页面触底，或者快要触底时的动作

        判断页面触底我们需要先了解一下下面几个属性

        scrollTop：滚动视窗的高度距离window顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值

        clientHeight:它是一个定值，表示屏幕可视区域的高度；

        scrollHeight：页面不能滚动时是不存在的，body长度超过window时才会出现，所表示body所有元素的长度

        综上我们得出一个触底公式：

        scrollTop + clientHeight >= scrollHeight

        简单实现

        `let clientHeight = document.documentElement.clientHeight; //浏览器高度

        let scrollHeight = document.body.scrollHeight;

        let scrollTop = document.documentElement.scrollTop;

        let distance = 50; //距离视窗还用50的时候，开始触发；

        if ((scrollTop + clientHeight) >= (scrollHeight - distance))

        console.log("开始加载数据");


        `

        下拉刷新#
        下拉刷新的本质是页面本身置于顶部时，用户下拉时需要触发的动作

        关于下拉刷新的原生实现，主要分成三步：

        监听原生touchstart事件，记录其初始位置的值，e.touches[0].pageY；

        监听原生touchmove事件，记录并计算当前滑动的位置值与初始位置值的差值，大于0表示向下拉动，并借助CSS3的translateY属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；

        监听原生touchend事件，若此时元素滑动达到最大值，则触发callback，同时将translateY重设为0，元素回到初始位置

        举个例子：
      </Typography>
      <p ref={refreshTextEl} className="refreshText"></p>
      <ul ref={refreshContainerEl} id="refreshContainer">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        ...
      </ul>
    </Box>
  );
}
