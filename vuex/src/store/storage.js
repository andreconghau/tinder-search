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
    },
    getCounter: state => {
      return state.counter;
    }
  },
  mutations: {
    plusCounterByParam: (state, param) => {
      state.counter = state.counter + param;
    },
    minusCounterByParam: (state, payload) => {
      state.counter = state.counter - payload.number;
    }
  }
});

export default storage;
