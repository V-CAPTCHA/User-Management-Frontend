<template>
  <div class="key-management">     
    <div class="header">
      <v-btn text color="#1a73e8" class="mb-2" @click="showCreateBox()">
        + CREATE KEY
        </v-btn>
    </div>

    <v-simple-table>
      <template v-slot:default>
        <!-- Headers -->
        <thead>
          <tr>
            <th class="text-left" style="color: white;">Name</th>
            <th class="text-left" style="color: white;">Create Date</th>
            <th class="text-left" style="color: white;">Key ID</th>
            <th class="text-left" style="color: white;">Domain</th>
            <th class="text-left" style="color: white;"></th>
          </tr>
        </thead>
        
        <!-- Body -->
        <tbody v-if="!!keys">
          <tr v-for="key in keys" :key="key.key_id">
            <td>{{ key.key_name }}</td>
            <td>{{ key.creation_date }}</td>
            <td>{{ key.key_value }}</td>
            <td>
              <a :href="'https://www.'+key.domain" target="_blank">{{ key.domain }}</a>
            </td>
            <td>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs}">
                  <v-btn icon text v-on="on" v-bind="attrs">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-btn plain color="#1a73e8" @click="showEditBox(key.key_id, key.key_name, key.domain)">Edit</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn plain color="red" @click="deleteKey(key.key_id)">Delete</v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>         
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td></td>
            <td></td>
            <td>ไม่มี</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <!-- Create key -->
    <KeyForm 
      title="Create Key" 
      v-if="createBoxIsShow" 
      :isCreate="true"
      :cancel="closeCreateBox" 
    />

    <!-- Edit key -->
    <KeyForm 
      title="Edit Key" 
      v-if="editBoxIsShow" 
      :isEdit="true"
      :cancel="closeEditBox"
      :key_id="id"
      :key_name="name" 
      :key_domain="domain" 
    />

  </div>
</template>

<script>
import KeyForm from '../components/KeyForm.vue';

export default {
  name: 'Home',
  metaInfo: {
    title: 'Key Management | VCAPTCHA '
  },
  components: {
    KeyForm,
  },
  data() {
    return {
      id: '',
      name: '',
      domain: '',
      keys: [],
      createBoxIsShow: false,
      editBoxIsShow: false,
    }
  },
  methods: {
    getAllKey: function() {
      this.$store.dispatch('getAllKey')
      .then((keys) => {
        if(keys === "key does not exist") {
          this.keys = [];
        }
        else {
          this.keys = keys
        }
      })
    },
    showCreateBox: function() {
      this.createBoxIsShow = true;
    },
    closeCreateBox: function() {
      this.createBoxIsShow = false;
    },
    showEditBox: function(id, name, domain) {
      this.id = id;
      this.name = name;
      this.domain = domain;
      this.editBoxIsShow = true;
    },
    closeEditBox: function() {
      this.editBoxIsShow = false;
    },
    confirmCreate: function() {
      console.log('create');
    },
    deleteKey(id) {
      this.$store.dispatch('deleteKey', id)
      .then(() => this.getAllKey())
      
    },
  },
  beforeUpdate() {
    this.getAllKey();
  },
  mounted() {
    this.getAllKey();
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}

thead {
  background-color: #1a73e8;
}

</style>