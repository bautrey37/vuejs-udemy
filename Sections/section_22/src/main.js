import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://vue-practice-4455d.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'sdfsdf';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqId = axios.interceptors.request.use((config) => {
  console.log('request interceptor', config);
  return config;
});
const resId = axios.interceptors.response.use((res) => {
  console.log('response interceptor', +res);
  return res;
});

// axios.interceptors.request.eject(reqId);
// axios.interceptors.request.eject(resId);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
