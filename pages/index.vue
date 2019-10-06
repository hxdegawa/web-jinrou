<template lang="pug">
.page-container
  .quote-box
    span.quote {{ quote1 }}
    span.quote {{ quote2 }}
    nuxt-link.start-button(to="/game") はじめる
    .particle-indicator
      .indicator
      .indicator
      .indicator

</template>

<script>
import quotes from '~/assets/settings/quotes.json'

export default {
  computed: {
    randomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)]
    },
    quote1() {
      return this.randomQuote.firstPhrase
    },
    quote2() {
      return this.randomQuote.secondPhrase
    }
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    appear: true
  }
}
</script>

<style lang="scss">
.page-container {
  display: block;
  min-height: calc(100vh - 120px);

  .quote-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .quote {
      display: block;
      line-height: 40px;
      font-size: 22px;
      letter-spacing: 1px;
      font-family: 'norms';
      pointer-events: none;

      &:first-child {
        transform: translateX(-20px);
        transition: 0.8s 0.4s ease;
      }

      &:last-of-type {
        transform: translateX(20px);
        transition: 0.8s 0.4s ease;
      }
    }

    .start-button {
      position: absolute;
      z-index: 2;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px 30px;
      border-radius: 5px;
      margin: 0;
      word-break: keep-all;
      text-decoration: none;
      border: 1px solid #000000;
      color: #000000;
      background-color: #ffffff;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 1.5px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s 0s ease, transform 0.4s 0s ease;
      outline: none;

      &:hover {
        background-color: #000000;
        color: #ffffff;
      }
    }

    .particle-indicator {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .indicator {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 0px;
        width: 0px;
        border-radius: 150px;
        border: rgba(0, 0, 0, 0) solid 5px;

        &:nth-child(1) {
          animation: explode 6s forwards 0s infinite ease;
        }

        &:nth-child(2) {
          animation: explode 6s forwards 2s infinite ease;
        }

        &:nth-child(3) {
          animation: explode 6s forwards 4s infinite ease;
        }
      }

      @keyframes explode {
        0% {
          border: solid 1px;
          opacity: 0;
          height: 0px;
          width: 0px;
        }
        10% {
          opacity: 0.2;
        }
        90% {
          opacity: 0.2;
        }
        100% {
          border: solid 1px;
          opacity: 0;
          height: 300px;
          width: 300px;
        }
      }
    }

    &:hover {
      .quote {
        &:first-child {
          transition: 0.8s 0s ease;
          transform: translateX(-100px);
          opacity: 0;
        }

        &:last-of-type {
          transition: 0.8s 0s ease;
          transform: translateX(100px);
          opacity: 0;
        }
      }

      .start-button {
        opacity: 1;
        transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease,
          background-color 0.2s 0s ease, color 0.2s 0s ease;
        pointer-events: all;
        cursor: pointer;
      }
    }
  }
}

@keyframes fadeout-quote1 {
  from {
    transform: translateX(-20px);
    opacity: 1;
  }

  to {
    transform: translateX(-100px);
    opacity: 0;
  }
}

@keyframes fadeout-quote2 {
  from {
    transform: translateX(20px);
    opacity: 1;
  }

  to {
    transform: translateX(100px);
    opacity: 0;
  }
}
</style>
