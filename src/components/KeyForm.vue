<template>
  <div class="key-form">
    <v-card width="640" class="form-box">
      <v-card-title>
        {{title}}
      </v-card-title>

      <v-card-text>
        <!-- Name -->
        <v-text-field
          id="name"
          v-model="name"
          label="Display Name"
          :rules="[rules.required]"
          counter="50"
          required
          outlined
          dense
        ></v-text-field>

        <!-- Domain -->
        <v-text-field
          id="domain"
          v-model="domain"
          :rules="[rules.required]"
          label="Domain"
          counter="50"
          required
          outlined
          dense
        ></v-text-field>
      </v-card-text>

      <v-container class="pt-0 buttonContainer">
          <!-- Confirm btn -->
          <v-btn 
            id="confirmBtn" 
            color="#1a73e8" 
            depressed dark text
            @click="confirm()"
          >
            Confirm
          </v-btn>

          <!-- Cancel btn -->
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
      rules: {
        required: value => !!value || 'Required.',
      }
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
  z-index: 5;
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