import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth.module.js'
import { user } from './modules/user.module.js'
import { key } from './modules/key.module.js'
import { dashboard } from './modules/dashboard.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    key,
    dashboard
  },
  state: {
    snackbar: false,
    text: "",
  },
  mutations: {
    updateSnackbar(state, payload) {
      state.snackbar = false;
      state.snackbar = payload.snackbar;
      state.text = payload.text;
    },
  },
  actions: {
    snackbarOff({commit}) {
      let payload = {
        text: '',
        snackbar: false
      }
      commit('updateSnackbar', payload)
    }
  },
  getters: {
    getSnackbar: state => state.snackbar,
    getText: state => state.text
  }
})
