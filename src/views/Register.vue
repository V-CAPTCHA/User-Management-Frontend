<template>
  <div>
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
      <h2>Register to VCAPTCHA</h2>
    </center>
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-form>
        <v-container>
          <v-text-field
            id="first-name"
            v-model="firstName"
            label="First Name"
            counter="50"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            id="last-name"
            v-model="lastName"
            label="Last Name"
            counter="50"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            id="email"
            v-model="email"
            label="Email"
            outlined
            dense
            width="50%"
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

          <v-text-field
            id="confirm-password"
            v-model="confirmPassword"
            label="Confirm Password"
            outlined
            dense
            type="password"
          ></v-text-field>

          <v-btn 
            id="loginBtn" 
            class="my-6" 
            color="#1a73e8" 
            depressed block dark 
            @click="register()"
          >
            Register
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
    <center>
      <span id="registereNow">Already have email and password? </span><router-link to="/login">Login</router-link>
    </center>
  </div>
</template>

<script>

export default {
  name: 'Register',
  metaInfo: {
    title: 'Register | VCAPTCHA '
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      text: '',
      snackbar: false,
    }
  },
  methods: {
    register: function() {
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password
      }

      const loginData = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('register', data)
      .then(() => {
        //Login after register success
        this.$store.dispatch('login', loginData)
        .then(() => {
          this.$router.replace('/dashboard')
        })
        .catch(err => {
          this.snackbar = true
        })
      })
      .catch(err => {
        this.snackbar = true
        this.text = "Information can not be empty"
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
