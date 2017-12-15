<template>
<div>
</div>
</template>

<script>
import uuidV1 from 'uuid/v1';

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
      iframeLoadedMessage: `LOADED_IFRAME_${generateGuid()}`
    };
  },
  computed: {},
  methods: {
    listenForEvents() {
      // Create IE + others compatible event handler
      const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
      const eventer = window[eventMethod];
      const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

      // Listen to message from child window
      eventer(messageEvent, event => {
        if (event.data === this.iframeLoadedMessage) {
          this.$emit('load');

          this.iframeEl.setAttribute('style', 'visibility: visible;');
        }
      }, false);
    }
  },
  mounted() {
    this.listenForEvents();

    this.iframeEl = document.createElement('iframe');
    this.iframeEl.setAttribute('crossorigin', 'anonymous');
    this.iframeEl.setAttribute('scrolling', 'no');
    this.iframeEl.setAttribute('target', '_parent');
    this.iframeEl.setAttribute('style', 'visibility: hidden; position: absolute; top: -99999px');

    if (this.className) this.iframeEl.setAttribute('class', this.className);
    this.$el.replaceWith(this.iframeEl);

    const iframeDoc = this.iframeEl.contentWindow.document;
    iframeDoc.open().write(`<body onload="window.location.href='${this.src}'; parent.postMessage('${this.iframeLoadedMessage}', '*')"></body>`);

    iframeDoc.close(); //iframe onload event happens
  }
};
</script>
