import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter);

const arr = [];
const cache = {};

function importAll(r) {
  r.keys().forEach(key => cache[key] = r(key));
}
// return a map 类型
importAll(require.context('./pages/demos', true, /index\.vue$/));
// {./demo1/index.v:'context'}
Object.keys(cache).forEach(path => {
  arr.push({
    path: `/css/${cache[path].default.name}`,
    component: cache[path].default,
    name: cache[path].default.name
  })
})

import Home from './pages/index'

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/index',
      component: Home
    },
    {
      path: '/',
      redirect: '/index'
    },
    ...arr,
  ]
})

export default router;