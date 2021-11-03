<template>
  <div class="page-not-found">
    <v-card outlined elevation="0" width="480" class="mx-auto my-5 pt-6">
      <v-container>
        <v-icon aria-hidden="false" size="100">mdi-emoticon-sad-outline</v-icon>
        <h1>Page Not Found</h1>
        <p>The link you clicked may be broken or the page may have been removed or renamed</p>
        <v-btn color="#1a73e8" dark :to="{name: 'Home'}">
          <v-icon aria-hidden="false">mdi-arrow-left</v-icon>
          Go back
        </v-btn>
      </v-container>
    </v-card>
  </div>
</template>

<style scoped>
.page-not-found {
  text-align: center;
}
</style>

<script>

  export default {
    name: 'PageNotFound',
    metaInfo: {
      title: 'Page Not Found | VCAPTCHA '
    },
    methods: {
    }
  }
</script>
