<template>
  <div class="loading">
    <div class="image">
      <div class="image__wrapper">
        <img src="/design/img/Baraka.gif" alt="logo">
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background: radial-gradient(circle, rgb(254,254,254) 10%, rgb(52,91,109) 100%);
  div {
    &:nth-child(2) {
      width: 680px;
      height: 680px;
      background: rgb(52,91,109);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 8;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(3) {
      width: 880px;
      height: 880px;
      background: rgb(41, 70, 85);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 7;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(4) {
      width: 1080px;
      height: 1080px;
      background: rgb(33, 56, 68);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 6;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(5) {
      width: 1280px;
      height: 1280px;
      // border: 50px solid red;
      background: rgb(22, 38, 46);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(6) {
      width: 1480px;
      height: 1480px;
      background: rgb(22, 38, 46);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 4;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(7) {
      width: 1680px;
      height: 1680px;
      background: rgb(22, 38, 46);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(8) {
      width: 1880px;
      height: 1880px;
      background: rgb(22, 38, 46);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(9) {
      width: 2080px;
      height: 2080px;
      background: rgb(22, 38, 46);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:nth-child(10) {
      width: 2280px;
      height: 2280px;
      background: rgb(22, 38, 46);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, black 100%);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

  }
  .image {
    position: relative;
    z-index: 99;
    &__wrapper {
      border-radius: 50%;
      overflow: hidden;
      img {
        transform: scale(1.5);
      }
    }
    // &::before {
    //   content: "";
    //   display: inline-block;
    //   width: 100%;
    //   height: 100%;
    //   border: 10px solid rgb(52,91,109);
    //   border-radius: 50%;
    //   position: absolute;
    //   top: -10px;
    //   left: -10px;
    // }
    
  }
}
</style>