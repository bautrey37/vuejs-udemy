import Vue from 'vue';
import App from './App.vue';
import ServersList from './ServersList.vue';

Vue.component('app-servers', ServersList);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
