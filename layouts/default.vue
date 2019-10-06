<template lang="pug">
  .container
    header
      nuxt-link(to="/").title: span Jinrou
      ul
        li: nuxt-link(to="/game") はじめる
    nuxt
    footer
      a.twitter-link(href="https://twitter.com/jinrou-league")
        img.twitter-icon(src="~/assets/icons/twitter.svg")

      a.twitter-link(href="https://github.com/hxdegawa/web-jinrou")
        img.twitter-icon(src="~/assets/icons/github.svg")

</template>

<script>
export default {
  transition: 'bounce'
}
</script>

<style lang="scss">
html {
  overflow: hidden;
}

body {
  margin: 0;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.container {
  header {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
    height: 60px;
    font-size: 24px;
    font-family: 'norms';

    .title {
      color: #000000;
      text-decoration: none;
    }

    ul {
      padding: 0;
      margin: 0;
      display: inline-block;

      li {
        display: inline-block;
        padding: 0;
        height: 60px;
        list-style: none;
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }

        * {
          font-family: 'Noto Sans JP', sans-serif;
          color: #000000;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-decoration: none;
        }
      }
    }

    & > * {
      line-height: 60px;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    .twitter-link,
    .developer-link {
      line-height: 60px;

      .twitter-icon {
        vertical-align: middle;
        max-height: 30px;
        max-width: 30px;
        object-fit: contain;
      }
    }
  }
}

@font-face {
  font-family: 'norms';
  src: url('~assets/fonts/TT-Norms.ttf');
}
</style>
