import Vue from 'vue';
import App from './App.vue';

// global filter
Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

// global mixin
Vue.mixin({
  created() {
    console.log('global mixin created hook');
  },
});

new Vue({
  el: '#app',
  render: (h) => h(App),
});
