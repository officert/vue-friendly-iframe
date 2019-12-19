import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Install from './components/Install';
import Events from './components/Events';
import Examples from './components/Examples';

Vue.use(VueRouter);

const routes = [{
  name : 'Home',
  path: '*',
  redirect: '/home'
}, {
  name : 'Home',
  path: '/',
  redirect: '/home'
}, {
  name : 'Home',
  path: '/home',
  component: Home
}, {
  name : 'Install',
  path: '/install',
  component: Install
}, {
  name : 'Events',
  path: '/events',
  component: Events
}, {
  name : 'Examples',
  path: '/examples',
  component: Examples
}];

export default new VueRouter({
  base: '/vue-friendly-iframe/',
  routes
});
