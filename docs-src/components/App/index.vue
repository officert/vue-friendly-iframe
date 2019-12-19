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
// --------- GLOBALS --------- //
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
input[type="submit"][disabled],
input[readonly] {
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

@media screen and (min-width: 64em) {
    .btn {
        padding: 0.75rem 1rem;
    }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
    .btn {
        padding: 0.6rem 0.9rem;
        font-size: 0.9rem;
    }
}
@media screen and (max-width: 42em) {
    .btn {
        display: block;
        width: 100%;
        padding: 0.75rem;
        font-size: 0.9rem;
    }
    .btn+.btn {
        margin-top: 1rem;
        margin-left: 0;
    }
}
.page-header {
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
}
@media screen and (min-width: 64em) {
    .page-header {
        padding: 5rem 6rem;
    }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
    .page-header {
        padding: 3rem 4rem;
    }
}
@media screen and (max-width: 42em) {
    .page-header {
        padding: 2rem 1rem;
    }
}
.project-name {
    margin-top: 0;
    margin-bottom: 0.1rem;
}
@media screen and (min-width: 64em) {
    .project-name {
        font-size: 3.25rem;
    }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
    .project-name {
        font-size: 2.25rem;
    }
}
@media screen and (max-width: 42em) {
    .project-name {
        font-size: 1.75rem;
    }
}
.project-tagline {
    margin-bottom: 2rem;
    font-weight: normal;
    opacity: 0.7;
}
@media screen and (min-width: 64em) {
    .project-tagline {
        font-size: 1.25rem;
    }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
    .project-tagline {
        font-size: 1.15rem;
    }
}
@media screen and (max-width: 42em) {
    .project-tagline {
        font-size: 1rem;
    }
}
.main-content {
    word-wrap: break-word;
}
.main-content :first-child {
    margin-top: 0;
}
@media screen and (min-width: 64em) {
    .main-content {
        max-width: 64rem;
        margin: 0 auto;
        font-size: 1.1rem;
    }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
    .main-content {
        padding: 2rem 4rem;
        font-size: 1.1rem;
    }
}
@media screen and (max-width: 42em) {
    .main-content {
        padding: 2rem 1rem;
        font-size: 1rem;
    }
}
.main-content img {
    max-width: 100%;
}
.main-content p {
    margin-bottom: 1em;
}
code {
    padding: 2px 4px;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 0.9rem;
    color: #567482;
    background-color: #f3f6fa;
    border-radius: 0.3rem;
}
pre {
    padding: 0.8rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font: 1rem Consolas, "Liberation Mono", Menlo, Courier, monospace;
    color: #567482;
    word-wrap: normal;
    background-color: #f3f6fa;
    border: solid 1px #dce6f0;
    border-radius: 0.3rem;

    > code {
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
        color: #567482;
        word-break: normal;
        white-space: pre;
        background: transparent;
        border: 0;
    }
}
.highlight {
    margin-bottom: 1rem;
}
.highlight pre {
    margin-bottom: 0;
    word-break: normal;
}
.highlight pre,
pre {
    padding: 0.8rem;
    overflow: auto;
    font-size: 0.9rem;
    line-height: 1.45;
    border-radius: 0.3rem;
    -webkit-overflow-scrolling: touch;
}
pre code,
pre tt {
    display: inline;
    max-width: initial;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
}
pre code:after,
pre code:before,
pre tt:after,
pre tt:before {
    content: normal;
}
.main-content ol,
.main-content ul {
    margin-top: 0;
}
.main-content blockquote {
    padding: 0 1rem;
    margin-left: 0;
    color: #819198;
    border-left: 0.3rem solid #dce6f0;
}
.main-content blockquote > :first-child {
    margin-top: 0;
}
.main-content blockquote > :last-child {
    margin-bottom: 0;
}
.main-content table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    -webkit-overflow-scrolling: touch;
}
.main-content table th {
    font-weight: bold;
}
.main-content table td,
.main-content table th {
    padding: 0.5rem 1rem;
    border: 1px solid #e9ebec;
}
.main-content dl {
    padding: 0;
}
.main-content dl dt {
    padding: 0;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
}
.main-content dl dd {
    padding: 0;
    margin-bottom: 1rem;
}
.main-content hr {
    height: 2px;
    padding: 0;
    margin: 1rem 0;
    background-color: #eff0f1;
    border: 0;
}
.site-footer {
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: solid 1px #eff0f1;
}
@media screen and (min-width: 64em) {
    .site-footer {
        font-size: 1rem;
    }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
    .site-footer {
        font-size: 1rem;
    }
}
@media screen and (max-width: 42em) {
    .site-footer {
        font-size: 0.9rem;
    }
}
.site-footer-owner {
    display: block;
    font-weight: bold;
}
.site-footer-credits {
    color: #819198;
}
/* ---------------------------- */
body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #606c71;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #0c94fd;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
}
a {
    text-decoration: none;
    color: #1e6bb8;
}
.btn {
    display: inline-block;
    margin-bottom: 1rem;
    color: rgba(255,255,255,0.7);
    background-color: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.2);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;

    @media screen and (min-width: 64em) {
        padding: 0.75rem 1rem;
    }
}
.page-header {
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #9069FD, #0C94FD);
    padding-bottom: 4rem;

    .project-name {
        color: white;
        margin-top: 0;
        margin-bottom: 0.1rem;

        @media screen and (min-width: 64em) {
            font-size: 3.25rem;
        }
    }

    .project-tagline {
        color: white;
        margin-bottom: 2rem;
        font-weight: normal;
        opacity: 0.7;

        @media screen and (min-width: 64em) {
            font-size: 1.25rem;
        }
    }

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
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    padding: 0;

    .right-panel {
        padding: 40px;
        flex: 1;
        min-height: 600px;
    }
}

code {
    &.type {
        margin-left: 10px;
        color: blue;
    }
}

.options-table {
    margin-bottom: 25px;
}
</style>
