<template src="./template.html">
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="less">
#home {
    iframe {
        border: 1px solid #EFEFEF;
    }

    .page-header {
        color: #fff;
        text-align: center;
        background-color: #159957;
        background-image: linear-gradient(120deg, #9069FD, #0C94FD);
        padding-bottom: 4rem;

        .logo {
            text-align: center;
            height: 100px;
            width: 100px;
            margin: 0 auto;
            border-radius: 100%;
            background: white;
            margin-bottom: 40px;

            img {
                height: 60px;
                position: relative;
                top: 26px;
            }
        }

        .demo-btn {
            margin-top: 40px;
        }
    }

    .main-content {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: #0C94FD;
        }

        .example-1 {
            iframe {
                height: 600px;
                width: 100%;
            }
        }
    }
}
</style>
