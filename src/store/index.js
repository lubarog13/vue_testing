import Vue from 'vue'
import Vuex from 'vuex'
import profileModule from './profileModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: "rus"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profile: profileModule
  }
})
