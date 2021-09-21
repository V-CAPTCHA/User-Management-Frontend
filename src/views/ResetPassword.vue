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
          ></v-text-field>

          <v-text-field
            id="confirmNewPassword"
            v-model="confirmNewPassword"
            label="Confirm New Password"
            outlined
            dense
          ></v-text-field>
          
          <v-btn 
            id="loginBtn" 
            class="mb-6" 
            color="#1a73e8" 
            depressed block dark 
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
    }
  }
</script>
