<template>
  <div>
    <!-- Values -->
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="4" xl="4">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4>Total Request</h4>
          </v-card-title>
          <v-card-subtitle class="text--primary" style="text-align: center">
            <p class="text-h2">{{totalRequest}}</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4 class="green--text text--lighten-1">Valid Request</h4>
          </v-card-title>
          <v-card-subtitle class="text--primary" style="text-align: center">
            <p class="text-h2 green--text">{{validRequest}}%</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4 class="red--text text--lighten-1">Invalid Request</h4>
          </v-card-title>
          <v-card-subtitle class="text--primary" style="text-align: center">
            <p class="text-h2 red--text">{{invalidRequest}}%</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Graph -->
    <v-row>
      <v-col lg="12">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4>Total Requests</h4>
          </v-card-title>
          <v-card-subtitle>
            <TotalChart :requestValue="totalRequestArray" />
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="6">
        <v-card elevation="0" outlined>
          <v-card-title class="green--text text--lighten-1">
            <h4>Total Valid Requests</h4>
          </v-card-title>
          <v-card-subtitle>
            <ValidChart :requestValue="totalValidRequestArray" />
          </v-card-subtitle>
        </v-card>
      </v-col>

      <v-col lg="6">
        <v-card elevation="0" outlined>
          <v-card-title class="red--text text--lighten-1">
            <h4>Total Invalid Requests</h4>
          </v-card-title>
          <v-card-subtitle>
            <InvalidChart :requestValue="totalInvalidRequestArray" />
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TotalChart from '../components/Charts/TotalChart.vue';
import ValidChart from '../components/Charts/ValidChart.vue';
import InvalidChart from '../components/Charts/InvalidChart.vue';

export default {
  name: 'Dashboard',
  components: {
    TotalChart,
    ValidChart,
    InvalidChart,
  },
  data() {
    return {
      totalRequest: 0,
      validRequest: 0,
      invalidRequest: 0,
      totalRequestArray: new Array(90).fill(0),
      totalValidRequestArray: new Array(90).fill(0),
      totalInvalidRequestArray: new Array(90).fill(0),

    }
  },
  created() {
    //Fake value
    this.totalRequest = 9868
    this.validRequest = 96
    this.invalidRequest = 4

    this.totalRequestArray = []
    for(var i=0; i<=90; i++) {
      this.totalRequestArray.push(Math.floor(Math.random() * (95-85))+85)
    }

    this.totalValidRequestArray = []
    for(var i=0; i<=90; i++) {
      this.totalValidRequestArray.push(Math.floor(Math.random() * (85-75))+75)
    }

    this.totalInvalidRequestArray = []
    for(var i=0; i<=90; i++) {
      this.totalInvalidRequestArray.push(Math.floor(Math.random() * (5-0))+0)
    }
    

  }
}
</script>
