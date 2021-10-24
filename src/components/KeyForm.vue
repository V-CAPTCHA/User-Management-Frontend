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
    cancel: Function,
    title: String,
    key_id: Number,
    key_name: String,
    key_domain: String,
    isCreate: Boolean,
    isEdit: Boolean,
  },
  data() {
    return {
      id: '',
      name: '',
      domain: '',
    }
  },
  methods: {
    confirm: function() {
      const key = {
        key_name: this.name,
        domain: this.domain,
      }

      //create key
      if(this.isCreate) {
        this.$store.dispatch("createKey", key)
        .then(() => {
          this.cancel();
        })
        .catch(err => {
          alert("Your keys has reached its activation limit")
          console.log(err)
        })
      }
      //edit key
      else if(this.isEdit) {
        const data = {
          id: this.id,
          key: key
        }
        this.$store.dispatch("editKey", data)
        .then(() => {
          this.cancel();
          alert('Update success')
        })
        .catch(err => {
          alert(err.message)
          console.log(err)
        })
      }
    }
  },
  mounted() {
    this.id = this.key_id;
    this.name = this.key_name;
    this.domain = this.key_domain;
  },
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