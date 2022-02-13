<template>
  <div>
    <!-- Values -->
    <v-row>
      <!-- Total Request -->
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
      
      <!-- Valid Request -->
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4 class="green--text text--lighten-1">Valid Request</h4>
          </v-card-title>
          <v-card-subtitle class="text--primary" style="text-align: center">
            <p class="text-h2 green--text" v-if="validRequest === '-'">-</p>
            <p class="text-h2 green--text" v-else>{{validRequest}}</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
      
      <!-- Invalid Request -->
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4 class="red--text text--lighten-1">Invalid Request</h4>
          </v-card-title>
          <v-card-subtitle class="text--primary" style="text-align: center">
            <p class="text-h2 red--text" v-if="invalidRequest === '-'">-</p>
            <p class="text-h2 red--text" v-else>{{invalidRequest}}</p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Graph -->
    <v-row>
      <!-- Total Request Chart -->
      <v-col lg="12">
        <v-card elevation="0" outlined>
          <v-card-title class="text--secondary">
            <h4>Total Requests</h4>
          </v-card-title>
          <v-card-subtitle>
            <TotalChart :requestValue="totalRequestArray" />
            <div class="loading" v-if="isTotalRequestLoading">
              <v-progress-circular
                indeterminate
                color="#505050"
                :size="100"
              >loading</v-progress-circular>
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Valid request chart -->
      <v-col lg="6">
        <v-card elevation="0" outlined>
          <v-card-title class="green--text text--lighten-1">
            <h4>Total Valid Requests</h4>
          </v-card-title>
          <v-card-subtitle>
            <ValidChart :requestValue="totalValidRequestArray" />
            <div class="loading" v-if="isValidRequestLoading">
              <v-progress-circular
                indeterminate
                color="#66bb6a"
                :size="100"
              >loading</v-progress-circular>
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col>

      <!-- Invalid request chart -->
      <v-col lg="6">
        <v-card elevation="0" outlined>
          <v-card-title class="red--text text--lighten-1">
            <h4>Total Invalid Requests</h4>
          </v-card-title>
          <v-card-subtitle>
            <InvalidChart :requestValue="totalInvalidRequestArray" />
            <div class="loading" v-if="isInvalidRequestLoading">
              <v-progress-circular
                indeterminate
                color="#ef5350"
                :size="100"
              >loading</v-progress-circular>
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.loading {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8) ;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>

<script>
import TotalChart from '../components/Charts/TotalChart.vue';
import ValidChart from '../components/Charts/ValidChart.vue';
import InvalidChart from '../components/Charts/InvalidChart.vue';

export default {
  name: 'Dashboard',
  metaInfo: {
    title: 'Dashboard | VCAPTCHA '
  },
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
    //Get total request
    this.$store.dispatch("getTotalRequest")
    .then(data => {
      this.totalRequest = data.totalRequest;
      this.totalRequestArray = data.totalRequestPerDay;
    })

    //Get valid reqeust
    this.$store.dispatch("getValidRequest")
    .then(data => {
      this.validRequest = data.validPercent;
      this.totalValidRequestArray = data.validRequestPerDay;
    })

    //Get invalid request
    this.$store.dispatch("getInvalidRequest")
    .then(data => {
      this.invalidRequest = data.invalidPercent;
      this.totalInvalidRequestArray = data.invalidRequestPerDay;
    })
  },
  computed: {
    isTotalRequestLoading: function() {
      return this.$store.getters.totalRequestStatus === 'loading';
    },
    isValidRequestLoading: function() {
      return this.$store.getters.validRequestStatus === 'loading';
    },
    isInvalidRequestLoading: function() {
      return this.$store.getters.invalidRequestStatus === 'loading';
    },
  }
}
</script>
