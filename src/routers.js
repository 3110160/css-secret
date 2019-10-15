import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter);

import Home from './pages/index'
console.log(Home)

const arr = [];
const cache = {};

function importAll(r) {
  r.keys().forEach(key => cache[key] = r(key));
}
// return a map 类型
importAll(require.context('./pages/demos', true, /index\.vue$/));
// {./demo1/index.v:'context'}
Object.keys(cache).forEach(path => {
  console.log(`/css/${path.match(/^\/.*/)}`)
  arr.push({
    path: `/css/${cache[path].default.name}`,
    component: cache[path].default,
    name: cache[path].default.name || '请在组件内设置'
  })
})

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/index',
      component: h=>h(< Home list='2312' />)
    },
    {
      path: '/',
      redirect: '/index'
    },
    ...arr,
  ]
})

export default router;