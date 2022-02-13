<template>
  <div id="home">
    <v-card id="home-container" max-width="1000" class="mx-auto pt-6" elevation="0">
      <v-img src="../assets/logo.png" width="300px"></v-img>

      <p class="text-h3">VCAPTCHA</p>
      <p class="text-h5 text-center">Human Verification Service using Voice Recongnition</p>
      <p class="text-center">
        Human Verification Service using Voice Recognition The purpose is to create a system to determine that users are human instead of using images. 
        As an alternative way to test whether the user is human or not. By displaying a picture or story and letting users speak what they see. 
        The system then determines whether the user interaction is human or not.
      </p>
      <v-btn 
        id="loginBtn" 
        class="" 
        color="#1a73e8" 
        depressed dark
        :to="{name: 'Guide'}"
      >
        Get Started
      </v-btn>

      <hr class="divider my-9">

      <!-- Features -->
      <v-row 
        justify="space-between"
        width="100%"
        class="mb-8"
      >
        <v-col elevation="0" width="100%" cols="12" md="4">
          <center><v-icon color="#1a73e8" aria-hidden="false" size="150">mdi-account-voice</v-icon></center> 
          <center><h3>Using Human Voice Verification</h3></center>
          <center><p>Voice Recognition Technology</p></center>
        </v-col>

        <v-col elevation="0" width="100%" cols="12" md="4">
          <center><v-icon color="#1a73e8" aria-hidden="false" size="150">mdi-comment-question</v-icon></center>
          <center><h3>Using Complex Questions </h3></center>
          <center><p>Story-based sentences, complex and difficult to predict</p></center>
        </v-col>

        <v-col elevation="0" width="100%" cols="12" md="4">
          <center><v-icon color="#1a73e8" aria-hidden="false" size="150">mdi-desktop-mac-dashboard</v-icon></center>
          <center><h3>Dashboard</h3></center>
          <center><p>Easily manage and monitoring</p></center>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    metaInfo: {
      title: 'Home | VCAPTCHA '
    }
  }
</script>


<style scoped>
#home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  width: 100%;
}
</style>