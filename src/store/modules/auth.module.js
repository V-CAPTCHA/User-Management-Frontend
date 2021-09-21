import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export const auth = {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    loadingStatus: false,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
      state.loadingStatus = false
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    set_loading(state, newLoading) {
      state.loadingStatus = newLoading
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        commit('set_loading', true)

        axios.post(API_URL+'/login', user)
        .then((res) => {
          if(res.data.message === 'authorization successfully') {
            const token = res.data.token

            localStorage.setItem('token', token)
            axios.defaults.headers.common['x-access-token'] = token
              
            commit('set_loading')
            commit('auth_success', token)
            resolve(res)
          }
          else {
            commit('auth_error')
            reject(res.data.message)
          }
        })
        .catch((err) => {
          commit('auth_error')
          reject(err)
        })
      })
    },
    logout({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['x-access-tokens']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    loadingStatus: state => state.loadingStatus
  }
}