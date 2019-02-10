<template>
<div class="vue-friendly-iframe">
</div>
</template>

<script>
import uuidV1 from 'uuid/v1';

import utils from 'src/utils/utils';

function generateGuid() {
  return uuidV1();
}

export default {
  name: 'friendly-iframe',
  props: {
    src: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      iframeEl: null,
      iframeLoadedMessage: `IFRAME_LOADED_${generateGuid()}`,
      iframeOnReadyStateChangeMessage: `IFRAME_ON_READ_STATE_CHANGE_${generateGuid()}`
    };
  },
  computed: {},
  watch: {
    src() {
      this.reinitIframe(this);
    }
  },
  methods: {
    removeIframe() {
      while (this.$el.firstChild) {
        this.$el.removeChild(this.$el.firstChild);
      }
    },
    setIframeUrl() {
      const iframeDoc = this.iframeEl.contentWindow.document;
      iframeDoc.open()
        .write(
          `
          <body onload="window.location.href='${this.src}'; parent.postMessage('${this.iframeLoadedMessage}', '*')"></body>
          <script>
            window.document.onreadystatechange = function () {
              if(window.document.readyState === 'complete') {
                parent.postMessage('${this.iframeOnReadyStateChangeMessage}', '*')
              }
            };
          <\/script>
          `
        );

      iframeDoc.close(); //iframe onload event happens
    },
    reinitIframe: utils.debounce(vm => {
      vm.removeIframe();
      vm.initIframe();
    }, 200),
    initIframe() {
      this.iframeEl = document.createElement('iframe');
      this.iframeEl.setAttribute('crossorigin', 'anonymous');
      this.iframeEl.setAttribute('target', '_parent');
      this.iframeEl.setAttribute('style', 'visibility: hidden; position: absolute; top: -99999px');
      if (this.className) this.iframeEl.setAttribute('class', this.className);

      this.$el.appendChild(this.iframeEl);

      this.setIframeUrl();
    },
    listenForEvents() {
      // Create IE + others compatible event handler
      const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
      const eventer = window[eventMethod];
      const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

      // Listen to message from child window
      eventer(messageEvent, event => {
        if (event.data === this.iframeLoadedMessage) {
          this.$emit('iframe-load');

          this.iframeEl.setAttribute('style', 'visibility: visible;');
        }

        if (event.data === this.iframeOnReadyStateChangeMessage) {
          this.$emit('document-load');

          this.$emit('load');
        }
      }, false);
    }
  },
  mounted() {
    this.listenForEvents();

    this.initIframe();
  }
};
</script>
