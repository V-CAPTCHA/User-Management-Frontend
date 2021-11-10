<template>
  <div class="total-container">
    <canvas id="total-chart" height="200"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { generateDateLabel } from '../../util/generateDateLabel';

export default {
  name: 'TotalChart',
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
            label: 'Total Requests',
            fill: 'start',
            borderColor: "rgb(80, 80, 80)",
            backgroundColor: "rgba(45, 45, 45, 0.4)",
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

      const totalchart = document.getElementById('total-chart');
      new Chart(totalchart, chartData);
    }
  }
}
</script>