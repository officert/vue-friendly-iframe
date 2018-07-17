<template src="./template.html">
</template>

<script>
export default {
  name: 'app',
  computed: {
    version() {
      return VERSION;
    }
  }
}
</script>

<style lang="less">
.btn-xl {
  padding: 20px 30px;
  font-size: 22px;
}

button,
input[type="submit"] {
    display: inline-block;
    vertical-align: middle;
    background-color: #0C94FD;
    border: 1px solid #0C94FD;
    border-radius: 4px;
    padding: 8px 12px;
    font: 14px/18px Arial, Helverica, sans-serif;
    color: #fff;
    margin: 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    -webkit-transition: background-color 0.1s linear, color 0.1s linear, width 0.2s ease;
    transition: background-color 0.1s linear, color 0.1s linear, width 0.2s ease;
}

button[disabled],
input[type="submit"][disabled] {
    background: #a0d4de;
    border-color: #a0d4de;
    cursor: default;
}

button .promise-btn__spinner-wrapper {
    display: inline-block;
    margin: -8px 0;
}

button.hide-loader .hidden {
    display: none;
}

.site-footer {
    display: flex;
    justify-content: space-between;
}

.form-group {
    margin-bottom: 0.75rem;

    label {
        margin-bottom: 0.65rem;
        font-weight: bold;
        display: inline-block;
    }
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}
</style>
