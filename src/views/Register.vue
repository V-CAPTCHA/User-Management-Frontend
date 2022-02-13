<template>
  <div>
    <center>
      <h2>Register to VCAPTCHA</h2>
    </center>
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-form>
        <v-container>
          <!-- First name -->
          <v-text-field
            id="first-name"
            v-model="firstName"
            :rules="[rules.required]"
            label="First Name"
            counter="50"
            outlined
            dense
          ></v-text-field>

          <!-- Last name -->
          <v-text-field
            id="last-name"
            v-model="lastName"
            :rules="[rules.required]"
            counter="50"
            label="Last Name"
            outlined
            dense
          ></v-text-field>

          <!-- Email -->
          <v-text-field
            id="email"
            v-model="email"
            :rules="[rules.required, rules.email]"
            counter="50"
            label="Email"
            outlined
            dense
            width="50%"
            type="email"
          ></v-text-field>
          
          <!-- Password -->
          <v-text-field
            id="password"
            v-model="password"
            :rules="[rules.required, rules.minimum]"
            counter="50"
            label="Password"
            outlined
            dense
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <!-- Confirm password -->
          <v-text-field
            id="confirm-password"
            v-model="confirmPassword"
            :rules="[rules.required, rules.minimum, rules.confirm]"
            counter="50"
            label="Confirm Password"
            outlined
            dense
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          ></v-text-field>

          <!-- Submit -->
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
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 50 || 'Max 50 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        minimum: value => value.length >= 8 || 'Min 8 characters.',
        confirm: value => value === this.password || 'Password confirmation does not match.'
      },
      showPassword: false,
      showConfirmPassword: false,
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
