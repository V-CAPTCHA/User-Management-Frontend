<template>
  <div class="reset-password">
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
    data() {
      return {
        newPassword: '',
        confirmNewPassword: '',
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
          alert("reset password successfully")
          this.$router.replace('/login')
        })
        .catch((err) => {
          alert(err.message)
          console.log(err)
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
