const state = {
  text: "",
  user_name: ""
}


const getters = {
  getText: state => {
    return text;
  },
}

const mutations = {
  getAuthor: state => {
    return "Author:" + state.user_name;
  },
}


const actions = {
  syncAgeYear: (injectee, payload) => {
    injectee.commit('getAuthor');
  },
}

export default {
  state, mutations, getters, actions
}
