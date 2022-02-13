<template>
  <div class="app">
    <!-- Alert box -->
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="#e74c3c"
          text
          v-bind="attrs"
          @click="snackbarOff"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>   

    <v-app>
      <!-- Navbar -->
      <Navbar/>

      <!-- App -->
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>

      <!-- Footer -->
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
  metaInfo: {
    title: 'VCAPTCHA'
  },
  components: {
    Navbar
  },
  data: () => ({
    timeout: 4000,
  }),
  methods: {
    snackbarOff: function() {
      this.$store.dispatch('snackbarOff')
    }
  },
  computed: {
    snackbar: {
      get() { return this.$store.getters.getSnackbar },
      set(value) { 
        this.$store.dispatch('snackbarOff');
        return value ;
      }
    },
    text: {
      get() { return this.$store.getters.getText },
      set(value) { return value }
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}

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
