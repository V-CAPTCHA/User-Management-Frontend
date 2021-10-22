<template>
  <div class="key-form">
    <v-card width="640" class="form-box">
      <v-card-title>
        {{title}}
      </v-card-title>

      <v-card-text>
        <v-text-field
          id="name"
          v-model="name"
          label="Display Name"
          counter="50"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          id="domain"
          v-model="domain"
          label="Domain"
          counter="50"
          required
          outlined
          dense
        ></v-text-field>
      </v-card-text>

      <v-container class="pt-0 buttonContainer">
          <v-btn 
            id="confirmBtn" 
            color="#1a73e8" 
            depressed dark text
            @click="confirm()"
          >
            Confirm
          </v-btn>
          <v-btn 
            id="cancleBtn" 
            color="red" 
            depressed dark text
            @click="cancel()" 
          >
            Cancel
          </v-btn>
        </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "KeyForm",
  props: {
    confirm: Function,
    cancel: Function,
    title: String
  },
  data() {
    return {
      name: "",
      domain: "",
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.key-form {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.form-box {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.buttonContainer {
  display: flex;
  justify-content: flex-end;
}
</style>