<template>
  <div @click="progres()" class="print"
    :style="{
      background: print.design.PageBackground.Color
    }">
    <!-- <img @click="clear()" v-if="print.PageBackground.Image != ''" :src="print.PageBackground.Image" class="bg" alt="bodyBackgroundImage"> -->
    <img v-if="print.design.PageBackground.Image != ''" :src="print.design.PageBackground.Image" class="bg" alt="bodyBackgroundImage">
    <div v-for="item in print.design.Page" :key="item.id" class="item"
      :style="{
        position: 'absolute',
        top: item.position.top + 'px',
        left: item.position.left + 'px',
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        zIndex: item.position.zIndex
      }"
    >

      <p v-if="item.parametr == 'text' && lang == 'ru'" class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          textAlign: item.textAlign,
          zIndex: item.position.zIndex
        }"
      >{{ item.textRU }}
      </p>
      <p v-if="item.parametr == 'text' && lang == 'uz'" class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          whiteSpace: 'normal',
          textAlign: item.textAlign,
          zIndex: item.position.zIndex
        }"
      >{{ item.textUZ }}
      </p>
      <p v-if="item.parametr == 'text' && lang == 'en'" class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          whiteSpace: 'normal',
          textAlign: item.textAlign,
          zIndex: item.position.zIndex
        }"
      >{{ item.textEN }}
      </p>
      <p v-if="item.parametr == 'text' && lang == 'oz'" class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          whiteSpace: 'normal',
          textAlign: item.textAlign,
          zIndex: item.position.zIndex
        }"
      >{{ item.textOZ }}
      </p>
      
      <img @click="all(item)" v-if="item.parametr == 'image'" :src="item.urlImage" alt="" class="image"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          borderWidth: item.border.borderWidth + 'px',
          borderStyle : 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          zIndex: item.position.zIndex
        }"
      >

      <span v-if="item.parametr == 'box'" class="box"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle : 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          zIndex: item.position.zIndex
        }"
      ></span>

      <div v-if="item.parametr == 'progresbar'" class="progresbar"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          zIndex: item.position.zIndex
        }"
      >
        <div id="bar"
          :style="{
            width:'0%',
            height: '100%',
            background: item.backColor,
            borderWidth: item.border.borderWidth + 'px',
            borderStyle : 'solid',
            borderColor: item.border.borderColor,
            borderRadius: item.border.borderRadius + 'px',
          }"
        ></div>
      </div>
    </div>
    <!-- <div class="progres-bar">
      <div id="bar"></div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Print',
  data() {
    return {
      i: 0,
      // lang: 'ru',
    }
  },
  // emits: ["printClose"],
  props: ['info', 'time', 'lang'],
  mounted() {
    this.print.design.Page.find(item => {
      if(item.parametr == 'progresbar') {
        this.progres();
      }
    });
  },
  computed: {
    ...mapGetters({
      print: "getPagePrint"
    })
  },
  methods: {
    progres() {
      if (this.i == 0) {
        this.i = 1;
        var elem = document.getElementById("bar");
        var width = 0;
        var id = setInterval(function () { 
          if (width >= 100) {
            clearInterval(id);
            this.i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }, 10 * this.time);
      }
      
      setTimeout(() => {
        this.$emit('printClose', false);
      }, this.time * 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.print {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 50px;
  .info {
    .title {
      font-family: 'Roboto';
      font-weight: 500;
      font-size: 36px;
      line-height: 36px;
      color: #000;
      margin-bottom: 100px;
      padding: 0 70px;
      text-align: center;
    }
  }
  .progres-bar {
    position: absolute;
    // width: 100%;
    // // background-color: #fff;
    // #bar {
    //   width: 0%;
    //   height: 100px;
    //   background-color: #000;
    // }
  }
  #bar {
    transition: width 0.1s ease;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>