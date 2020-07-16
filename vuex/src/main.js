import Vue from 'vue'
import App from './App.vue'
import storage from "./store/storage";

Vue.filter('toLowerCase', function (value) {
  return value.toLowerCase();
})

new Vue({
  el: '#app',
  store: storage,
  render: h => h(App)
})
