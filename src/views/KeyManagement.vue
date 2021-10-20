<template>
  <div class="key-management">  
    <div class="header">
      <v-btn text color="#1a73e8" class="mb-2">+ CREATE KEY</v-btn>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="color: white;">Name</th>
            <th class="text-left" style="color: white;">Create Date</th>
            <th class="text-left" style="color: white;">Key ID</th>
            <th class="text-left" style="color: white;">Domain</th>
            <th class="text-left" style="color: white;"></th>
          </tr>
        </thead>
        
        <tbody v-if="!!keys">
          <tr v-for="key in keys" :key="key.id">
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
                    <v-btn plain color="#1a73e8">Edit</v-btn>
                  </v-list-item>
                  <v-list-item>
                    <v-btn plain color="red">Delete</v-btn>
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      keys: [ 
        {
          "key_id": 3,
          "key_name": "google",
          "creation_date": "2021-09-16",
          "domain": "goole.com",
          "key_value": "fBldgwJUnDqRQhDWe5GMX"
        },
        {
          "key_id": 4,
          "key_name": "twitter",
          "creation_date": "2021-09-16",
          "domain": "twitter.com",
          "key_value": "s8oRwnejo1xeFEpxiH_Ry"
        },
        {
          "key_id": 5,
          "key_name": "youtube",
          "creation_date": "2021-09-16",
          "domain": "youtube.com",
          "key_value": "V2eQcD-xpKP5V8DhHPUL3"
        },
        {
          "key_id": 6,
          "key_name": "instagram",
          "creation_date": "2021-09-16",
          "domain": "instagram.com",
          "key_value": "-XokP1tnfshZ2Kz4qNZcw"
        }
      ]
    }
  }
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