const state = {
  name: "",
  age: 0,
  gender: "male",
}


const getters = {
  getName: state => {
    return state.name;
  },
}

const mutations = {
  getYearAge: state => {
    return 2020 - state.age;
  },
}


const actions = {
  syncAgeYear: (injectee, payload) => {
    injectee.commit('getYearAge');
  },
}

export default {
  state, mutations, getters, actions
}
