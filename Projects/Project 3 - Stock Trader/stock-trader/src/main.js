import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://vuejs-stock-trader-9409f.firebaseio.com/';
axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
