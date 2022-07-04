import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueDebounce from 'vue-debounce';
import './assets/style/app.scss';

Vue.config.productionTip = false;


Vue.use(vueDebounce, {
  lock: false,
  listenTo: 'keyup',
  defaultTime: '3000ms',
  fireOnEmpty: false,
  trim: false
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");


