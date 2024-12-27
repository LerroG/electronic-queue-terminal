<template>
  <div class="center">
    <!-- <h2>ЗАГРУЗКА ...</h2>
    <router-link :to="{ name: 'pageNext', params: { id: 1} }">asdasdasdasdasd</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      idElement: 0,
      isActive: "",
      isTabs: 2,
      isParam: 1,
      isAlert: false,
      lang: "ru",
      numpadText: "",
      pageId: "",
      bodyWidth: "",
      bodyHeight: "",
      settings: [],
      resurs: {
        design: {
          PageBackground: "#fff",
        },
      },
      loading: false,
      info: [],
    };
  },
  beforeMount() {
    this.settings = window.MY_SETINGS_TERMINAL_DESIGN;
  },
  mounted() {
    this.pageId = +window.location.href.split("/")[3];
    localStorage.setItem("lang", this.settings.lang);
    // console.log(this.settings.api);

    if (this.$route.query.designId == undefined) {
      this.$router
        .push({
          name: "pageNext",
          params: {
            id: this.settings.firstPage,
          },
          query: {
            designId: 1038,
          },
        })
        .catch(() => {});
    } else {
      setTimeout(() => {
        this.getTotemDesign();
        // this.getClerks();
      }, 1000);
    }
  },
  methods: {
    IsJsonString(str) {
      try {
        var json = JSON.parse(str);
        if (typeof json === "object") {
          return json;
        }
      } catch (e) {
        return false;
      }
    },
    getTotemDesign() {
      axios
        .get(
          `${this.settings.api}/GetTotemDesign?DesignId=${this.$route.query.designId}`
        )
        .then((response) => {
          const info = JSON.parse(response.data.Design);
          // console.log(JSON.parse(info.elements.Main));
          // console.log(info);
          const body = {
            bodyWidth: info.body.bodyWidth,
            bodyHeight: info.body.bodyHeight,
          };
          this.$store.dispatch("AC_PAGE_SIZE", body);
          // this.$store.dispatch('AC_TIMEPROGRESBAR', response.data.timeProgresBar);

          const pageArray = new Array();
          const keys = Object.keys(info.elements);
          // console.log(keys);

          for (let index = 0; index < keys.length; index++) {
            const designPage = this.IsJsonString(info.elements[keys[index]]);
            const infoDesign = {
              id: index + 1,
              pageName: keys[index],
              design: {
                Page: designPage.Page,
                PageBackground: designPage.PageBackground,
              },
            };
            pageArray.push(infoDesign);
          }

          let print = [];

          // console.log(Object.keys(info.elements).length);
          // console.log(Object.keys(info.elements));

          let filteredKeys = [];
          for (let key in info.elements) {
            //фильтрует для ключи обекта на слова Print
            if (key.startsWith("Print")) {
              filteredKeys.push(key);
            }
          }

          for (let index = 0; index < filteredKeys.length; index++) {
            const designPage = this.IsJsonString(
              info.elements[filteredKeys[index]]
            );
            const infoDesign = {
              id: index + 1,
              pageName: filteredKeys[index],
              design: {
                Page: designPage.Page,
                PageBackground: designPage.PageBackground,
              },
            };
            print.push(infoDesign);
          }

          // console.log(filteredKeys);

          // if(Object.keys(info.elements.Print).length != 0) {
          //   print = JSON.parse(info.elements.Print);
          // } else {
          //   print  = [];
          // }
          // console.log(print);s
          this.$store.dispatch("AC_PAGES", pageArray);
          this.$store.dispatch("AC_PRINT_PAGES", print);
          this.$router
            .push({
              name: "pageNext",
              params: {
                id: this.settings.firstPage,
              },
              query: {
                designId: this.$route.query.designId,
              },
            })
            .catch(() => {});
          this.$store.dispatch("AC_NEXT_PAGE", this.settings.firstPage);
          this.$emit("updateLoading");
        })
        .catch((e) => console.log(e));
    },
    // getClerks() {
    //   axios.get(`${this.settings.api2}/getClerks`)
    //     .then(response => {
    //       // console.log(response.data.Design);
    //       this.$store.dispatch('AC_CLERKS', response.data);
    //     })
    //     .catch(e => console.log(e));
    // }
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  h2 {
    font-family: "Roboto";
    font-size: 50px;
    color: #000;
  }
}
</style>
