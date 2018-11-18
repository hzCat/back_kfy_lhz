import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue-lazyload";

Vue.use(VueLazyLoad, { lazyComponent: true });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
