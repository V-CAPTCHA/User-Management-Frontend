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
              @click="changeUserData()"
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
              @click="changePassword()"
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
            @click="deleteAccount()"
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
    },
    methods: {
      changeUserData: function() {
        const user = {
          first_name: this.firstName,
          last_name: this.lastName,
        }
        this.$store.dispatch('changeUserData', user)
        .then(() => {
          //
        })
        .catch(err => {
          console.log(err)
        })
      },
      changePassword: function() {
        console.log('password')
      },
      deleteAccount: function() {
        console.log('delete')
      },
    },
    created() {
      if(!this.$store.getters.isLoggedIn) {
        this.$router.replace('/login')
      }

      //get user data on created
      this.$store.dispatch('getUserData')
      .then((user) => {
        this.firstName = user.first_name;
        this.lastName = user.last_name;
      })
      .catch(err => {
        console.log(err)
      });
    },
    computed: {
      isLoggedIn: function() {
        return this.$store.getters.isLoggedIn
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