import VueFriendlyIframe from './components/FriendlyIframe';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({
    install(NewVue) {
      NewVue.component('vue-friendly-iframe', VueFriendlyIframe);
    }
  });
}

export default {
  install: function(NewVue) {
    NewVue.component('vue-friendly-iframe', VueFriendlyIframe);
  },
  VueFriendlyIframe
};
