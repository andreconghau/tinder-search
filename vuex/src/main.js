import Vue from 'vue'
import App from './App.vue'
import storage from "./store/storage";


new Vue({
  el: '#app',
  store: storage,
  render: h => h(App)
})
