<template>
  <div class="reset-password">
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
      <h2>Reset Password</h2>
    </center>
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-form>
        <v-container>
          <v-text-field
            id="newPassword"
            v-model="newPassword"
            label="New Password"
            outlined
            dense
            type="password"
          ></v-text-field>

          <v-text-field
            id="confirmNewPassword"
            v-model="confirmNewPassword"
            label="Confirm New Password"
            outlined
            dense
            type="password"
          ></v-text-field>
          
          <v-btn 
            id="loginBtn" 
            class="mb-6" 
            color="#1a73e8" 
            depressed block dark
            @click="resetPassword()"
          >
            Reset Password
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>

  export default {
    name: 'ResetPassword',
    metaInfo: {
      title: 'Reset Password | VCAPTCHA '
    },
    data() {
      return {
        newPassword: '',
        confirmNewPassword: '',
        snackbar: false,
        text: '',
      }
    },
    methods: {
      resetPassword: function() {
        const data = {
          new_password: this.newPassword,
          token: this.$route.params.token
        }

        this.$store.dispatch('resetPassword', data)
        .then(() => {
          this.$router.replace('/login')
        })
        .catch((err) => {
          this.text = "Reset password failed"
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
