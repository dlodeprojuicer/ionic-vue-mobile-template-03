import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    catalogue: []
  },
  getters: {
    catalogue({ catalogue }) {
      return catalogue;
    }
  },
  mutations: {},
  actions: {}
});

export default store;
