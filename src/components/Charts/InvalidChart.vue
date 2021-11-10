<template>
  <div class="invalid-container">
    <canvas id="invalid-chart" height="200"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { generateDateLabel } from '../../util/generateDateLabel';

export default {
  name: 'InvalidChart',
  props: {
    requestValue: Array,
  },
  data() {
    return {
      requestData: this.requestValue
    }
  },
  watch: {
    requestValue() {
      this.requestData = this.requestValue
      const dayList = generateDateLabel();

      var chartData = {
        type: "line",
        data: {
          labels: dayList,
          datasets: [{
            data: this.requestValue,
            lineTension: 0,
            label: 'Total Invalid Requests',
            fill: 'start',
            borderColor: 'rgb(239, 83, 80)',
            backgroundColor: "rgba(239, 83, 80, 0.4)",
          }]
        },
        options: {
          type: 'line',
          responesive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              // suggestedMax: 100,
            },
          },    
        },
      }

      const totalchart = document.getElementById('invalid-chart');
      new Chart(totalchart, chartData);
    }
  }
}
</script>