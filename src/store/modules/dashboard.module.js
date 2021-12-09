import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL


export const dashboard = {
  state: {
    total_request_status: '',
    valid_request_status: '',
    invalid_request_status: '',
  },
  mutations: {
    //total reqeust state
    total_request_request(state) {
      state.total_request_status = 'loading'
    },
    total_request_success(state) {
      state.total_request_status = 'success'
    },
    total_reuquest_error(state) {
      state.total_request_status = 'error'
    },
    //valid request state
    valid_request_request(state) {
      state.valid_request_status = 'loading'
    },
    valid_request_success(state) {
      state.valid_request_status = 'success'
    },
    valid_reuquest_error(state) {
      state.valid_request_status = 'error'
    },
    //invalid request state
    invalid_request_request(state) {
      state.invalid_request_status = 'loading'
    },
    invalid_request_success(state) {
      state.invalid_request_status = 'success'
    },
    invalid_reuquest_error(state) {
      state.invalid_request_status = 'error'
    }
  },
  actions: {
    //get total request
    getTotalRequest({commit}) {
      return new Promise((resolve, reject) => {
        commit('total_request_request')

        axios.get(API_URL+'/dashboard/total-request')
        .then(res => {
          if(res.data.message === "get total request info successfully") {
            let data = {
              "totalRequest": res.data.total_request,
              "totalRequestPerDay": res.data.total_request_per_day
            }
            commit('total_request_success')
            resolve(data);
          }
          else {
            let payload = {
              text: "Something wrong please try again",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit('total_request_error')
            reject(res.data.message);
          }
        })
        .catch(err => {
          let payload = {
            text: "Something wrong please try again",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          commit('total_request_error')
          reject(err)
        })
      }) 
    },    
    //get valid request
    getValidRequest({commit}) {
      return new Promise((resolve, reject) => {
        commit('valid_request_request')

        axios.get(API_URL+'/dashboard/valid-request')
        .then(res => {
          if(res.data.message === "get valid request info successfully") {
            let data = {
              "validPercent": res.data.valid_percent,
              "validRequestPerDay": res.data.valid_request_per_day
            }
            resolve(data);
            commit("valid_request_success")
          }
          else {
            let payload = {
              text: "Something wrong please try again",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit("valid_request_error")
            reject(res.data.message);
          }
        })
        .catch(err => {
          let payload = {
            text: "Something wrong please try again",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          commit("valid_request_error")
          reject(err)
        })
      }) 
    },
    //get invalid request
    getInvalidRequest({commit}) {
      return new Promise((resolve, reject) => {
        commit('invalid_request_request')

        axios.get(API_URL+'/dashboard/invalid-request')
        .then(res => {
          if(res.data.message === "get invalid request info successfully") {
            let data = {
              "invalidPercent": res.data.invalid_percent,
              "invalidRequestPerDay": res.data.invalid_request_per_day
            }
            commit("invalid_request_success")
            resolve(data);
          }
          else {
            let payload = {
              text: "Something wrong please try again",
              snackbar: true
            }
            commit('updateSnackbar', payload, {root: true})
            commit("invalid_request_error")
            reject(res.data.message);
          }
        })
        .catch(err => {
          let payload = {
            text: "Something wrong please try again",
            snackbar: true
          }
          commit('updateSnackbar', payload, {root: true})
          commit("invalid_request_error")
          reject(err)
        })
      }) 
    },
  },
  getters: {
    totalRequestStatus: state => state.total_request_status,
    validRequestStatus: state => state.valid_request_status,
    invalidRequestStatus: state => state.invalid_request_status
  }
}