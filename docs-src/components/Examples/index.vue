<template src="./template.html">
</template>

<script>
export default {
  name: 'examples',
  data() {
    return {
      example1Form: {
        src: 'https://www.pexels.com/search',
        searchTerm: 'tiger'
      },
      iframeLoading: true
    }
  },
  methods: {
    onLoad() {
      console.log('iframe loaded');

      this.iframeLoading = false;
    },
    onIframeLoad() {
      console.log('iframe loaded');
    }
  }
};
</script>

<style lang="less">
#examples {
    .iframe-wrapper {
        border: 1px solid gray;
        height: 600px;

        .vue-friendly-iframe {
            height: 100%;
            width: 100%;
            iframe {
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>
