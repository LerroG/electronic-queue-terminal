<template>
  <div id="app">
    <router-view @updateLoading="loadingActive()" />
    <Loading v-show="loading == true" />
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    this.loading = true;
  },
  methods: {
    loadingActive() {
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
#app {
  position: relative;
  background: #000;
}
p {
  margin: 0;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  text-align: center;
  white-space: normal;
  transition: transform 0.3s;
  // box-shadow: 0px 5px 10px 10px rgba(211, 211, 211, 0.3) inset;
  // &:active {
  //   box-shadow: 0px 5px 10px 10px rgba(78, 78, 78, 0) inset;
  //   transform: scale(0.98);
  // }
}
.text {
  display: table-cell;
  // justify-content: center;
  // align-items: center;
  // position: absolute;
  margin-bottom: 0;
  white-space: normal;
  vertical-align: middle;
  // word-wrap: break-word;
  transition: transform 0.3s;
}
.image {
  position: absolute;
  transition: transform 0.3s;
}
.box {
  position: absolute;
  transition: transform 0.3s;
}
.numpad {
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  // width: 200px;
  // height: 200px;
  input {
    display: inline-block;
    margin-bottom: 20px;
    outline: none;
    padding: 3px 8px;
  }
  .number {
    width: 240px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 10px;
    // grid-auto-rows: auto;
    background-color: #333;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
    padding: 8px;
    &__item {
      width: 56px;
      height: 56px;
      font-family: "Roboto";
      font-size: 2em;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
      color: #fff;
      background: #484747;
      border: 1px solid #bbb;
      border-radius: 4px;
      margin: 8px;
      transition: 0.2s all ease-in-out;
      outline: none;
      transition: transform 0.3s;
      &:hover {
        border-color: rgb(126, 126, 126);
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
}
body {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
  overflow: hidden;
}

///////////////////////// Roboto /////////////////////////
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("./assets/fonts/Roboto/Roboto-Thin.ttf") format("truetype");
  font-weight: 100;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("./assets/fonts/Roboto/Roboto-Light.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("./assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("./assets/fonts/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("./assets/fonts/Roboto/Roboto-Bold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("./assets/fonts/Roboto/Roboto-Black.ttf") format("truetype");
  font-weight: 700;
}

///////////////////////// Montserrat /////////////////////////
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Thin.ttf") format("truetype");
  font-weight: 100;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Light.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Black.ttf") format("truetype");
  font-weight: 700;
}

///////////////////////// Roboto /////////////////////////
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
    url("./assets/fonts/Open_Sans/OpenSans-Light.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
    url("./assets/fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
    url("./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
    url("./assets/fonts/Open_Sans/OpenSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
    url("./assets/fonts/Open_Sans/OpenSans-ExtraBold.ttf") format("truetype");
  font-weight: 800;
}

///////////////////////// Inter /////////////////////////
@font-face {
  font-family: "Inter";
  src: local("Inter Thin"),
    url("./assets/fonts/Inter/Inter-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter ExtraLight"),
    url("./assets/fonts/Inter/Inter-ExtraLight.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter Light"),
    url("./assets/fonts/Inter/Inter-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter Regular"),
    url("./assets/fonts/Inter/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter Medium"),
    url("./assets/fonts/Inter/Inter-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter SemiBold"),
    url("./assets/fonts/Inter/Inter-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter Bold"),
    url("./assets/fonts/Inter/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter ExtraBold"),
    url("./assets/fonts/Inter/Inter-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: local("Inter Black"),
    url("./assets/fonts/Inter/Inter-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

::-webkit-scrollbar {
  width: 8px;
  // height: 5px;
  // transition: 0.3s ease-in-out;
  &:hover {
    width: 12px;
    // height: 100%;
  }
}
// ::-webkit-scrollbar-button {  background-color: #666; }
// ::-webkit-scrollbar-track {  background-color: #999;}
::-webkit-scrollbar-track-piece {
  background-color: #dfe3e7;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #0081cf;
  border-radius: 3px;
}
::-webkit-scrollbar-corner {
  background-color: #0081cf;
}
::-webkit-resizer {
  background-color: #0081cf;
}
::-webkit-scrollbar-thumb {
  background-color: #0164a1;
}
</style>
