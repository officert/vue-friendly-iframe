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
      iframeLoading: true,
      documentLoading: true
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
