<template>
  <v-app>
    <Navbar/>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer color="#1a73e8" dark>
      <p class="footer">copy right 2021</p>
    </v-footer>
  </v-app>
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
.footer {
  text-align: center;
  width: 100%;
  margin: 0;
}
</style>
