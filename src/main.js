import Vue from 'vue'
import router from './routers'
import App from './App.vue'
import('normalize.css');
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式


Vue.config.productionTip = false
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
