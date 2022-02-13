import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  refrechOnceOnNavigation: true,
})

Vue.config.productionTip = false

// Get token from header
axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
