<template>
  <div>
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
            outlined
            dense
          ></v-text-field>

          <v-text-field
            id="last-name"
            v-model="lastName"
            label="Last Name"
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
          ></v-text-field>

          <v-text-field
            id="confirm-password"
            v-model="confirmPassword"
            label="Confirm Password"
            outlined
            dense
          ></v-text-field>

          <v-btn 
            id="loginBtn" 
            class="my-6" 
            color="#1a73e8" 
            depressed block dark 
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
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }
</script>
