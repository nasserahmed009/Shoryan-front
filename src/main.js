import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/Plugins/axios";

import "materialize-css/sass/materialize.scss";
// import "@/assets/styles/variables.scss";
import "materialize-css";
import "@/assets/global.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
