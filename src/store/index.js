import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './modules/auth.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    key,
  }
})
