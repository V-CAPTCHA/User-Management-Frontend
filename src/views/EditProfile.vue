<template>
  <div class="editProfile">
    <v-card outlined elevation="0" width="720" class="mx-auto pb-6">
      <!--Edit Profile-->
      <v-form>
        <v-container>
          <h3 class="mb-3">Edit Profile</h3>
          <!--Text Field-->
          <v-text-field
            id="firstName"
            v-model="firstName"
            label="First Name"
            outlined
            dense
            type="text"
          ></v-text-field>

          <v-text-field
            id="lastName"
            v-model="lastName"
            label="Last Name"
            outlined
            dense
            type="text"
          ></v-text-field>

          <div class="buttonContainer">
            <!--Button-->
            <v-btn
              id="saveBtn" 
              color="#1a73e8" 
              depressed dark
            >Save</v-btn>

            <v-btn
              class="ml-2"
              id="cancelBtn" 
              color="grey" 
              depressed dark 
            >Cancel</v-btn>
          </div>
        </v-container>
      </v-form>

      <!--Change Password-->
      <v-form>
        <v-container>
          <h3 class="mb-3">Change Password</h3>
          <!--Text Field-->
          <v-text-field
            id="currentPassword"
            v-model="currentPassword"
            label="Current Password"
            outlined
            dense
            type="text"
          ></v-text-field>

          <v-text-field
            id="newPassword"
            v-model="newPassword"
            label="New Password"
            outlined
            dense
            type="text"
          ></v-text-field>

          <v-text-field
            id="passwordConfirmation"
            v-model="confirmationPassword"
            label="Password Confirmation"
            outlined
            dense
            type="text"
          ></v-text-field>

          <div class="buttonContainer">
            <!--Button-->
            <v-btn
              id="saveBtn" 
              color="#1a73e8" 
              depressed dark
            >Save</v-btn>

            <v-btn
              class="ml-2"
              id="cancelBtn" 
              color="grey" 
              depressed dark 
            >Cancel</v-btn>
          </div>
        </v-container>
      </v-form>

      <!--Delete Account-->
      <v-form>
        <v-container>
          <h3 class="mb-3">Delete Account</h3>
          <span>Click on delete button </span>
          <v-btn
            class="ml-2"
            id="cancelBtn" 
            color="red" 
            depressed dark 
          >Delete</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>

  export default {
    name: 'EditProfile',
    data() {
      return {
        firstName: "",
        lastName: "",
        currentPassword: "",
        newPassword: "",
        confirmationPassword: "",
      }
    }
  }
</script>


<style scope>
.editProfile h3 {
  border-bottom: 1px solid lightgrey;
}

.buttonContainer {
  display: flex;
  justify-content: flex-end;
}
</style>