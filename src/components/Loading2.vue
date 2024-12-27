<template>
  <div class="loading">
    <h1>Baraka Texnika</h1>
    <div class="psoload">
      <div class="straight"></div>
      <div class="curve"></div>
      <div class="center"></div>
      <div class="inner"></div>
    </div>
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
  background: radial-gradient(circle, rgba(52,69,91,1) 0%, rgba(0,0,0,1) 100%);
  h1 {
    font-family: 'Roboto';
    font-size: 46px;
    font-weight: 700;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .psoload,
  .psoload *,
  .psoload *:before,
  .psoload *:after {
    box-sizing: border-box;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  .psoload {
    position: relative;
    // margin: 30px auto;
    height: 150px;
    width: 150px;
    transform: scale(4.5);
  }

  .psoload .straight,
  .psoload .curve {
    position: absolute;
    top: 17.5%;
    left: 17.5%;
    width: 65%;
    height: 65%;
    border-radius: 100%;
    animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
    -webkit-animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
  }

  .psoload .straight:before,
  .psoload .straight:after {
    content: '';
    position: absolute;
    width: 20%;
    border-bottom: 3px solid #eee;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .psoload .straight:before {
    top: 5px;
    left: 5px;
  }

  .psoload .straight:after {
    bottom: 5px;
    right: 5px;
  }

  .psoload .curve:before,
  .psoload .curve:after {
    content: '';
    position: absolute;
    width: 45px;
    height: 10px;
    border: solid 3px transparent;
    border-top-color: #eee;
    border-radius: 50%/10px 10px 0 0;
    z-index: 90001;
  }

  .psoload .curve:before {
    transform: rotate(-63deg) translateX(-29px) translateY(-4px);
    -webkit-transform: rotate(-63deg) translateX(-27px) translateY(-4px);
  }

  .psoload .curve:after {
    bottom: 5px;
    right: 5px;
    transform: rotate(115deg) translateX(-21px) translateY(-12px);
    -webkit-transform: rotate(115deg) translateX(-26px) translateY(-12px);
  }

  .psoload .center {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    border-radius: 100%;
    border: 3px solid #eee;
  }

  .psoload .inner {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    border-radius: 100%;
    animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite reverse;
    -webkit-animation: arrow-spin 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite reverse;
  }

  .psoload .inner:before,
  .psoload .inner:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-width: 11px;
    border-bottom-color: #eee;
  }

  .psoload .inner:before {
    top: 12px;
    left: 12px;
    transform: rotate(128deg);
    -webkit-transform: rotate(128deg);
  }

  .psoload .inner:after {
    bottom: 12px;
    right: 12px;
    transform: rotate(-48deg);
    -webkit-transform: rotate(-48deg);
  }

  @keyframes arrow-spin {
    100% {
      transform: rotate(179deg);
    }
  }

  @-webkit-keyframes arrow-spin {
    100% {
      -webkit-transform: rotate(179deg);
    }
  }
}
</style>