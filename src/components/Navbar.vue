<template>
  <div>
    <v-app-bar color="#1a73e8" dark>
      <img src="../assets/logo.png" alt="logo" width="48px"/>
      <v-app-bar-title>
        <v-btn plain :to="{name: 'Home'}"  class="text-h5">VCAPTCHA</v-btn>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn plain :to="{name: 'Home'}">Home</v-btn>
      <v-btn plain :to="{name: 'Guide'}">Guide</v-btn>
      <v-btn plain href="https://github.com/V-CAPTCHA" target="_blank">Github</v-btn>
      
      <div v-if="!isLoggedIn">
        <v-btn plain :to="{name: 'Login'}">Login</v-btn>
        <v-btn plain :to="{name: 'Register'}">Register</v-btn>
      </div>

      <div v-else>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs}">
            <v-btn plain v-on="on" v-bind="attrs">
              Profile<v-icon aria-hidden="false">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-btn plain :to="{name: 'Dashboard'}">Dashboard</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn plain :to="{name: 'KeyManagement'}">Key Management</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn plain :to="{name: 'EditProfile'}">Edit Profile</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text plain @click="logOut()">Logout</v-btn>
            </v-list-item>
          </v-list>

        </v-menu>
      </div>
    </v-app-bar>

    <v-progress-linear
      v-if="isLoading"
      indeterminate
      color="#1a73e8"
    ></v-progress-linear>

    <v-progress-linear
      v-else
      value="100"
      color="#1a73e8"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logOut: function() {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    },
    isLoading: function() {
      return this.$store.getters.authStatus === 'loading'
    }
  }
}
</script>

<style scoped>

</style>