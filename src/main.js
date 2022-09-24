import Vue from 'vue';
import App from './main/app';
import router from './main/router';
import store from './main/store';
import i18n, { setApp } from './main/i18n';
import vuetify from './main/vuetify';
import './main/meta';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app');

setApp(app);
