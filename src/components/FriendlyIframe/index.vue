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
    crossorigin: {
      type: String,
      required: false,
      default: 'anonymous'
    },
    target: {
      type: String,
      required: false,
      default: '_parent'
    },
    className: {
      type: String,
      required: false
    },
    frameborder: {
      type: String,
      required: false
    },
    gesture: {
      type: String,
      required: false
    },
    allow: {
      type: String,
      required: false
    },
    allowfullscreen: {
      type: String,
      required: false
    },
    scrolling: {
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
      this.iframeEl.setAttribute('iframe-src', this.src);
      this.iframeEl.setAttribute('crossorigin', this.crossorigin);
      this.iframeEl.setAttribute('target', this.target);
      this.iframeEl.setAttribute('style', 'visibility: hidden; position: absolute; top: -99999px');
      if (this.className) this.iframeEl.setAttribute('class', this.className);
      if (this.class) this.iframeEl.setAttribute('class', this.class);
      if (this.frameborder) this.iframeEl.setAttribute('frameborder', this.frameborder);
      if (this.gesture) this.iframeEl.setAttribute('gesture', this.gesture);
      if (this.allow) this.iframeEl.setAttribute('allow', this.allow);
      if (this.allowfullscreen) this.iframeEl.setAttribute('allowfullscreen', this.allowfullscreen);
      if (this.scrolling) this.iframeEl.setAttribute('scrolling', this.scrolling);

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
