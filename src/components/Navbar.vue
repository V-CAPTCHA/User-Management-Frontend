<template>
  <div>
    <v-app-bar color="#1a73e8" dark dense>
      <!-- Logo -->
      <img src="../assets/logo.png" alt="logo" width="48px"/>
      <v-app-bar-title>
        <v-btn plain :to="{name: 'Home'}"  class="text-h5">VCAPTCHA</v-btn>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- Hidden on xs size -->
      <div class="d-none d-sm-flex">
        <v-btn plain :to="{name: 'Home'}">Home</v-btn>
        <v-btn plain :to="{name: 'Guide'}">Guide</v-btn>
        <v-btn plain href="https://github.com/V-CAPTCHA" target="_blank">
          <v-icon aria-hidden="false" dense>mdi-github</v-icon> 
          Github
          <v-icon aria-hidden="false" small>mdi-open-in-new</v-icon>
        </v-btn>
        
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
      </div>

      <!-- Visible on xs	-->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-none"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      :width="512"
    >
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item :to="{name: 'Home'}">
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'Guide'}">
            <v-list-item-title>Guide</v-list-item-title>
          </v-list-item>

          <v-list-item href="https://github.com/V-CAPTCHA" target="_blank">
            <v-list-item-title>Github <v-icon aria-hidden="false">mdi-github</v-icon></v-list-item-title>
          </v-list-item>

          <div v-if="!isLoggedIn">
            <v-list-item :to="{name: 'Login'}">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{name: 'Register'}">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </div>

          <div v-else>
            <v-list-item :to="{name: 'Dashboard'}">
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{name: 'KeyManagement'}">
              <v-list-item-title>Key Management</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{name: 'EditProfile'}">
              <v-list-item-title>Edit Profile</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logOut()">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Loading bar -->
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
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
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
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped>

</style>