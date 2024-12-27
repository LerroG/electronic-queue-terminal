import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

Vue.use(VueToast, {
  duration: 5000,
  dismissible: true,
  position: 'top-right'
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  mode: "history",
  render: h => h(App)
}).$mount('#app')
