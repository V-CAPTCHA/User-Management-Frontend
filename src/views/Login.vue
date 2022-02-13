<template>
  <div class="login" v-if="!this.$store.getters.isLoggedIn">
    <center>
      <h2>Login to VCAPTCHA</h2>
    </center>
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-form>
        <v-container>
          <!-- Email -->
          <v-text-field
            id="email"
            v-model="email"
            :rules="[rules.required, rules.email, rules.counter]"
            counter
            maxlength="50"
            label="Email"
            outlined
            dense
            type="email"
          ></v-text-field>

          <!-- Password -->
          <v-text-field
            id="password"
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :rules="[rules.required, rules.counter, rules.minimum]"
            counter
            maxlength="50"
            label="Password"
            outlined
            dense
          ></v-text-field>

          <router-link id="forgot-password" to="/recoverpassword" class="text-caption">Forgot your password ?</router-link>
          
          <!-- Submit -->
          <v-btn 
            id="loginBtn" 
            class="my-6" 
            color="#1a73e8" 
            depressed block dark 
            @click="login()"
          >
            Login
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
    <center>
      <span id="registereNow">Don't have an account yet? </span><router-link to="/register">Register now</router-link>
    </center>
  </div>
</template>

<script>

export default {
  name: 'Login',
  metaInfo: {
    title: "Login | VCAPTCHA"
  },
  data() {
    return {
      email: '',
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 50 || 'Max 50 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        minimum: value => value.length >= 8 || 'Min 8 characters.',
      },
      showPassword: false,
    }
  },
  methods: {
    login: function(){
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
      .then(() => {      
        this.$router.replace('/dashboard')
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


<style scoped>
</style>