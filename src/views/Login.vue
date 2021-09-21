<template>
  <div class="login">
    <center>
      <h2>Login to VCAPTCHA</h2>
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
            type="email"
          ></v-text-field>

          <v-text-field
            id="password"
            v-model="password"
            label="Password"
            outlined
            dense
            type="password"
          ></v-text-field>

          <router-link id="forgot-password" to="/recoverpassword" class="text-caption">Forgot your password ?</router-link>
          
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
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function(){
      alert('login')
    }
  }
}
</script>


<style scoped>
</style>