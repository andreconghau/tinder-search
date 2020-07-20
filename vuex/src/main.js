import Vue from 'vue'
import App from './App.vue'
import storage from "./store/storage";
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.filter('toLowerCase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('global mixin');
  }
});


new Vue({
  el: '#app',
  store: storage,
  render: h => h(App)
})
