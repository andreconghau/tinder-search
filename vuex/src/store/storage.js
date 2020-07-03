import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const storage = new Vuex.Store({
  state: {
    counter: 0,
    value: ''
  },
  getters: {
    getTotalCounter: state => {
      return state.counter * 10;
    },
    getCounter: state => {
      return state.counter;
    },
    getValue: state => {
      return state.value;
    }
  },
  mutations: {
    plusCounterByParam: (state, param) => {
      state.counter = state.counter + param;
    },
    minusCounterByParam: (state, payload) => {
      state.counter = state.counter - payload.number;
    },
    upCounter: state => {
      state.counter++;
    },
    updateValue:(state, payload) => {
      state.value = payload.value;
    }
  },
  actions: {
    syncUpCounter: (injectee, payload) => {
      injectee.commit('upCounter');
    },
    asyncUpCounter: (injectee, payload) => {
      setTimeout(() => {
        injectee.commit('upCounter');
      }, 2000);

    },
    syncUpValue: (injectee, payload) => {
      injectee.commit('updateValue', payload);
    },
  }
});

export default storage;
