<template>
  <div class="app">
    <v-app>
      <Navbar/>

      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>

      <v-footer color="#1a73e8" dark>
        <p class="footer">© 2021 VCAPTCHA</p>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  width: 100%;
  overflow-x: hidden;
  overflow-y:auto;
}

.footer {
  text-align: center;
  width: 100%;
  margin: 0;
}
</style>
