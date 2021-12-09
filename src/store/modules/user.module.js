import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL

export const user = {
  state: {
    user: "",
  },
  mutations: {
    user_request(state) {
      state.status = 'loading'
    },
    user_success(state, user) {
      state.user = user
    },
    user_error(state) {
      state.status = 'error'
    },
  },
  actions: {
    //get user data
    getUserData({commit}) {
      return new Promise((resolve, reject) => {
        
        axios.get(API_URL+'/users')
        .then(res => {
          if(res.data.message === "get user successfully") {
            let userData = res.data.data;
            resolve(userData);
          }
          else {
            let payload = {
              text: "Something wrong please try again",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            reject(res.data.message);
          }
        })
        .catch(err => {
          let payload = {
            text: "Something wrong please try again",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          reject(err)
        })
      })
    },    
    //change user data
    changeUserData({commit}, user) {
      return new Promise((resolve, reject) => {

        axios.post(API_URL+'/users', user)
        .then(res => {
          if(res.data.message === "change first name and last name successfully") {
            let payload = {
              text: "Change your information success",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            resolve(res)
          }
          else {
            let payload = {
              text: "Change your information failed",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            resolve(res.data.message)
          }
        })
        .catch(err => {
          let payload = {
            text: "Change your information failed",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          reject(err)
        })
      })
    },
    //change password
    changePassword({commit}, password) {
      return new Promise((resolve, reject) => {

        axios.post(API_URL+'/users/password', password)
        .then(res => {
          if(res.data.message === "change password successfully"){
            let payload = {
              text: "Change password success",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            resolve(res)
          }
          else {
            let payload = {
              text: "Change password failed",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            resolve(res.data.message)
          }
        })
        .catch(err => {
          let payload = {
            text: "Change password failed",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          reject(err)
        })
      })
    },
    //delete account
    deleteAccount({commit}) {
      return new Promise((resolve, reject) => {
        axios.delete(API_URL+'/users')
        .then(res => {
          if (res.data.message === "delete account successfully") {
            let payload = {
              text: "Delete account sucess",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            resolve.apply(res)
          }
          else {
            let payload = {
              text: "Delete account failed",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            resolve(res.data.message)
          }
        })
        .catch(err => {
          let payload = {
            text: "Delete account failed",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          reject(err)
        })
      })
    }
  },
  getters: {
    userData: state => state.user
  }
}