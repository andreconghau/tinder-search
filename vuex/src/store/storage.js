import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const storage = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getTotalCounter: state => {
      return state.counter * 10;
    }
  }
});

export default storage;
