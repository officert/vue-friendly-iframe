import Vue from 'vue';
import VueFriendlyIframe from '../src/index';

import App from './components/App';
import Install from './components/Install';
import Events from './components/Events';
import Examples from './components/Examples';
import router from './router';

Vue.component('vue-friendly-iframe', VueFriendlyIframe);
Vue.component('install', Install);
Vue.component('events', Events);
Vue.component('examples', Examples);

new Vue({
    template: '<App></App>',
    router,
    components: {
      App
    }
  })
  .$mount('#app');
