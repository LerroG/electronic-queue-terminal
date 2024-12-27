import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/design/",
    name: "page",
    component: () => import("@/views/Page.vue"),
  },
  {
    path: "/design/:id",
    name: "pageNext",
    component: () => import("@/views/PageNext.vue"),
  },
  {
    path: "/design/print-page/:id",
    name: "Print",
    component: () => import("@/views/Print.vue"),
  },
  // {
  //   path: '/design/page/:id',
  //   name: 'nextPage',
  //   component: PageNext
  // }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.afterEach((to) => {
  const designId = Number(to.query.designId) || 1038; // используем designId из query или значение по умолчанию
  let pageName;

  // Если маршрут начинается с '/', то это "Main"
  if (to.path === "/") {
    pageName = "Main";
  } else {
    // Если есть динамический ID у страницы, подставляем его
    const dynamicId = to.params.id;
    pageName = dynamicId ? dynamicId : "Main";
  }

  // Отправляем POST-запрос
    axios.post(`${window.MY_SETINGS_TERMINAL_DESIGN.api}/CountView`, {
      DesignId: designId,
      PageName: pageName,
    });
});

export default router;
