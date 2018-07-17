import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';

Vue.use(VueRouter);

const routes = [{
    path: '*',
    redirect: '/home'
  }, // catch all route to redirect 404s
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
];

export default new VueRouter({
  base: '/vue-slideout-panel/',
  routes
});
