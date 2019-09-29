import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter);

const Home = ()=>import('./pages/index');
const DEMO1 = ()=>import('./pages/demo1-background-clip');

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/index', component: Home },
    { 
      path: '/css/demo1/background-clip', 
      component: DEMO1 ,
      name:'background-clip',
    },
  ]
})

export default router;