<template>
<div>
</div>
</template>

<script>
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
      iframeEl: null
    };
  },
  computed: {},
  methods: {},
  mounted() {
    this.iframeEl = document.createElement('iframe');
    this.iframeEl.setAttribute('crossorigin', 'anonymous');
    this.iframeEl.setAttribute('scrolling', 'no');
    this.iframeEl.setAttribute('target', '_parent');
    if (this.className) this.iframeEl.setAttribute('class', this.className);
    this.$el.replaceWith(this.iframeEl);

    const iframeDoc = this.iframeEl.contentWindow.document;
    iframeDoc.open().write(`<body onload="window.location.href='${this.src}'"></body>`);

    iframeDoc.close(); //iframe onload event happens

    this.$emit('load');
  }
};
</script>
