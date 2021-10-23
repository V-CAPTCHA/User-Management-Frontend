import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL


export const key = {
  state: {
    key: []
  },
  mutations: {
    key_success(state, key) {
      state.key = key
    }
  },
  actions: {
    //get all key
    getAllKey({commit}) {
      return new Promise((resolve, reject) => {

        axios.get(API_URL+'/keys')
        .then(res => {
          if(res.data.message === "get all keys successfully") {
            let keys = res.data.data;
            resolve(keys);
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
  },
}