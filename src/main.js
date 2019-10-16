import Vue from 'vue'
import router from './routers'
import App from './App.vue'
import('normalize.css');
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css' //导入代码高亮样式
import demoLayout from './components/demoLayout'
//自定义一个代码高亮指令
Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false
Vue.component('demoLayout', demoLayout);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});