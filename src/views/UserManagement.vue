<template>
  <div>
    <v-card outlined>
      <v-container>
        <v-tabs class="mb-2">
          <v-tab :to="{name: 'Dashboard'}">Dashboard</v-tab>
          <v-tab :to="{name: 'KeyManagement'}">Keys</v-tab>
        </v-tabs>

        <router-view></router-view>
      </v-container>
    </v-card>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    metaInfo: {
      title: 'VCAPTCHA'
    },
    beforeUpdate() {
      //check expire token
      this.$store.dispatch('checkTokenExp')
      .catch(err => {
        if(err === "expired") {
          this.$store.dispatch('logout')
          this.$router.replace('/login')
        }
      })
    },
    mounted() {
      //check expire token
      this.$store.dispatch('checkTokenExp')
      .catch(err => {
        if(err === "expired") {
          this.$store.dispatch('logout')
          this.$router.replace('/login')
        }
      })
    }
  }
</script>
