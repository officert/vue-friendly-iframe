import Vue from 'vue';
import VueFriendlyIframe from '../src/index';

import App from './components/App';
import router from './router';

Vue.component('vue-friendly-iframe', VueFriendlyIframe);

new Vue({
    template: '<App></App>',
    router,
    components: {
      App
    }
  })
  .$mount('#app');
