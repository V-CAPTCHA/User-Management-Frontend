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
  }
})
