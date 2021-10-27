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
            <h4>Total Request</h4>
          </v-card-title>
          <v-card-subtitle>
            <TotalChart />
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="6">
        <v-card elevation="0" outlined>
          <v-card-title class="green--text text--lighten-1">
            <h4>Total Invalid Request</h4>
          </v-card-title>
          <v-card-subtitle>
            <ValidChart />
          </v-card-subtitle>
        </v-card>
      </v-col>

      <v-col lg="6">
        <v-card elevation="0" outlined>
          <v-card-title class="red--text text--lighten-1">
            <h4>Total Request</h4>
          </v-card-title>
          <v-card-subtitle>
            <InvalidChart />
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
    }
  }
}
</script>
