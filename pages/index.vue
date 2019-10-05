<template lang="pug">
.hero
  .quote-box
    span.quote "Lamb calls
    span.quote Wolf strikes."
    button.start-button はじめる

</template>

<style lang="scss">
.hero {
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
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px 20px;
      border-radius: 5px;
      margin: 0;
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
      cursor: pointer;

      &:hover {
        background-color: #000000;
        color: #ffffff;
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
