<template>
  <div class="recover-password">
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>  

    <center>
      <h2>Recover Password</h2>
    </center>
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-form>
        <v-container>
          <v-text-field
            id="email"
            v-model="email"
            label="Email"
            outlined
            dense
          ></v-text-field>
          
          <v-btn 
            id="loginBtn" 
            class="mb-6" 
            color="#1a73e8" 
            depressed block dark
            @click="requestNewPassword()"
          >
            Recover Password
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
    <center>
      <router-link to="/login">Login </router-link><span id="registereNow">or </span><router-link to="/register">Register now</router-link>
    </center>
  </div>
</template>

<script>

export default {
  name: 'RecoverPassword',
  metaInfo: {
    title: 'Recover Password | VCAPTCHA '
  },
  data() {
    return {
      email: '',
      snackbar: false,
      text: '',
    }
  },
  methods: {
    requestNewPassword: function() {
      const data = {
        email: this.email
      }

      this.$store.dispatch('requestNewPassword', data)
      .then(() => {
        this.text = "Send link to reset password successfully"
        this.snackbar = true
      })
      .catch((err) => {
        this.text = "Send link to reset password failed"
        this.snackbar = true
      })
    }
  },
  created() {
    if(this.$store.getters.isLoggedIn) {
      this.$router.replace('/dashboard')
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
