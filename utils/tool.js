const Tool = {
  // 持久化一个定时器 timer
  timer : null,
  // debounce函数用来包裹我们的事件
  debounce(fn, delay) {
    let that = this;
    // 闭包函数可以访问 timer
    return function () {
      // 通过 'this' 和 'arguments'
      // 获得函数的作用域和参数
      let context = this;
      let args = arguments;
      // 如果事件被触发，清除 timer 并重新开始计时
      clearTimeout(that.timer);
      console.log('timer:' +that.timer)
      that.timer = setTimeout(function () {
        console.log('我执行了');
        fn.apply(context, args);
      }, delay);
    }
  }
}
export default Tool;