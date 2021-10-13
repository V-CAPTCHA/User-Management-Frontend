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
            reject(res.data.message);
          }
        })
        .catch(err => {
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
            resolve(res)
          }
          else {
            resolve(res.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
      })
    },
  },
  getters: {
    userData: state => state.user
  }
}