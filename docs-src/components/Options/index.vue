<template src="./template.html">
</template>

<script>
export default {
  name: 'options',
  data() {
    return {
      params: [{
        name: 'src',
        type: 'String',
        desc: 'Iframe\'s url',
        default: null
      }, {
        name: 'className',
        type: 'String',
        desc: 'Iframe\'s class attribute',
        default: null
      }, {
        name: 'crossorigin',
        type: 'String',
        desc: 'Iframe\'s crossorigin attribute',
        default: 'anonymous'
      }, {
        name: 'target',
        type: 'String',
        desc: 'Iframe\'s target attribute',
        default: '_parent'
      }, {
        name: 'allow',
        type: 'String',
        desc: 'Iframe\'s allow attribute',
        default: null
      }, {
        name: 'name',
        type: 'String',
        desc: 'Iframe\'s name attribute',
        default: null
      }]
    }
  },
  methods: {}
};
</script>
<style lang="less">
</style>
