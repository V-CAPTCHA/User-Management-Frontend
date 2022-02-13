<template>
  <div class="reset-password">
    <center>
      <h2>Reset Password</h2>
    </center>
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-form>
        <v-container>
          <!-- New password -->
          <v-text-field
            id="newPassword"
            v-model="newPassword"
            :rules="[rules.required, rules.minimum]"
            counter="50"
            label="New Password"
            outlined
            dense
            :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showNewPassword ? 'text' : 'password'"
            @click:append="showNewPassword = !showNewPassword"
          ></v-text-field>

          <!-- Confirm new password -->
          <v-text-field
            id="confirmNewPassword"
            v-model="confirmNewPassword"
            :rules="[rules.required, rules.minimum, rules.confirm]"
            counter="50"
            label="Confirm New Password"
            outlined
            dense
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          ></v-text-field>
          
          <!-- Submit -->
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
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 50 || 'Max 50 characters',
          minimum: value => value.length >= 8 || 'Min 8 characters.',
          confirm: value => value === this.password || 'Password confirmation does not match.'
        },
        showNewPassword: false,
        showConfirmPassword: false,
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
