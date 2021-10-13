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
          let userData = res.data.data;
          resolve(userData);
        })
        .catch(err => {
          commit('auth_error');
          reject(err)
        })
      })
    },
  },
  getters: {
    userData: state => state.user
  }
}