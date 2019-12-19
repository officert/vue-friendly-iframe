<template src="./template.html">
</template>

<script>
export default {
  name: 'events',
  data() {
    return {
      events: [{
        name: 'iframe-load',
        description: 'Triggered when the iframe\'s body <code>onload</code> event is triggered'
      }, {
        name: 'load',
        description: 'Triggered after the iframe\'s <code>document.onreadystatechange</code> triggers and the document\s <code>readyState</code> is <code>complete</code>'
      }]
    }
  },
  methods: {}
};
</script>
