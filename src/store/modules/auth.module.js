import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export const auth = {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
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
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    //Login
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')

        axios.post(API_URL+'/login', user)
        .then((res) => {
          if(res.data.message === 'authorization successfully') {
            const token = res.data.token

            localStorage.setItem('token', token)
            axios.defaults.headers.common['x-access-token'] = token
              
            let payload = {
              text: "Login Success",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
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
    //Logout
    logout({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['x-access-tokens']

        let payload = {
          text: "Logout success",
          snackbar: true,
        }
        commit('updateSnackbar', payload, {root: true})
        commit('logout')
        resolve()
      })
    },
    //Register
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')

        axios.post(API_URL+'/register', user)
        .then((res) => {
          if(res.data.message === "register successfully") {
            let payload = {
              text: "Register success",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit('auth_success')
            resolve(res)
          }
          else {
            let payload = {
              text: "Register failed",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit('auth_error')
            reject(res.data.message)
          }
        })
        .catch((err) => {
          let payload = {
            text: "Register failed",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          commit("auth_error")
          reject(err)
        })
      })
    },
    //RecoverPassword
    requestNewPassword({commit}, email) {
      return new Promise((resolve, reject) => {
        commit('auth_request')

        axios.post(API_URL+'/resetpassword/', email)
        .then((res) => {
          if(res.data.message === "send link to reset password successfully") {
            let payload = {
              text: "Send link to reset password successfully",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit("auth_success")
            resolve(res)
          }
          else {
            let payload = {
              text: "Something wrong or Your email not correct",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit('auth_error')
            reject(res.data.message)
          }
        })
        .catch((err) => {
          let payload = {
            text: "Something wrong or Your email not correct",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          commit("auth_error")
          reject(err)
        })
      })
    },
    //Reset Password
    resetPassword({commit}, data) {
      return new Promise((resolve, reject) => {
        commit('auth_request')

        axios.put(API_URL+'/resetpassword', data)
        .then((res) => {
          if(res.data.message === "reset password sucessfully") {
            let payload = {
              text: "Reset password success",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit("auth_success")
            resolve(res)
          }
          else {
            let payload = {
              text: "Something wrong or Your link not correct",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit('auth_error')
            reject(res.data.message)
          }
        })
        .catch((err) => {
          let payload = {
            text: "Something wrong or Your link not correct",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          commit("auth_error")
          reject(err)
        })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
}