<template lang="pug">
main
  .game
    .intro-anims(:class="{ finished: animFinished }")
      .introL
      .introL
      .introL
      .introR
      .introR
      .introR

      .title
        .title-wrapper
          span 人狼ゲーム

      .credit
        .credit-wrapper
          span Made with ❤ and Javascript by Hiro Degawa
</template>

<script>
export default {
  data() {
    return {
      animFinished: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.animFinished = true
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
main {
  display: block;
  position: relative;
  max-width: 1366px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);

  .game {
    position: absolute;
    display: block;
    margin: 0 auto;
    height: 500px;
    width: 100%;
    top: calc(50% - 250px);

    .intro-anims {
      .introL,
      .introR {
        position: absolute;
        top: 0;
        height: 1px;
        width: 2px;
      }

      .introL {
        left: 0;

        &:nth-of-type(1) {
          animation: intro-anim 1.5s 0s ease forwards,
            intro-anim 1.5s 7.2s ease forwards reverse;
          background-color: #ee5253;
        }

        &:nth-of-type(2) {
          animation: intro-anim 1.5s 0.1s ease forwards,
            intro-anim 1.5s 7.1s ease forwards reverse;
          background-color: #222f3e;
        }

        &:nth-of-type(3) {
          animation: intro-anim 1.5s 0.2s ease forwards,
            intro-anim 1.5s 7s ease forwards reverse;
          background-color: #000000;
        }
      }

      .introR {
        right: 0;

        &:nth-of-type(4) {
          animation: intro-anim 1.5s 0s ease forwards,
            intro-anim 1.5s 7.2s ease forwards reverse;
          background-color: #ee5253;
        }

        &:nth-of-type(5) {
          animation: intro-anim 1.5s 0.1s ease forwards,
            intro-anim 1.5s 7.1s ease forwards reverse;
          background-color: #222f3e;
        }

        &:nth-of-type(6) {
          animation: intro-anim 1.5s 0.2s ease forwards,
            intro-anim 1.5s 7s ease forwards reverse;
          background-color: #000000;
        }
      }

      .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;

        &:before {
          content: '';
          position: absolute;
          background-color: #ffffff;
          animation: title-anim 0.8s 2s ease forwards,
            title-anim 0.8s 5s ease forwards reverse;
          height: 100%;
          width: 0px;
        }

        .title-wrapper {
          position: relative;
          padding: 5px 15px;

          & > span {
            display: inline-block;
            font-weight: 700;
            letter-spacing: 3px;
            font-size: 14px;
            line-height: 16px;
            transform: translateY(-1px);
            animation: appear 2s 0s forwards, appear 0s 5.8s forwards reverse;
          }
        }
      }

      .credit {
        @extend .title;
        left: auto;
        top: auto;
        right: 10px;
        bottom: 10px;
        transform: none;

        &:before {
          animation: title-anim 0.8s 2.8s ease forwards,
            title-anim 0.8s 5.8s ease forwards reverse;
        }

        .credit-wrapper {
          @extend .title-wrapper;
          padding: 2px 10px;

          & > span {
            font-weight: 500;
            letter-spacing: 1px;
            font-size: 9px;
            line-height: 10px;
            transform: translateY(-3px);
            animation: appear 2.8s 0s forwards, appear 0s 6.6s forwards reverse;
          }
        }
      }
    }

    @keyframes intro-anim {
      from {
        height: 0%;
        width: 2px;
      }

      50% {
        height: 100%;
        width: 2px;
      }

      to {
        height: 100%;
        width: 50%;
      }
    }

    @keyframes title-anim {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
  }

  @keyframes appear {
    0%,
    99% {
      opacity: 0;
      pointer-events: none;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
