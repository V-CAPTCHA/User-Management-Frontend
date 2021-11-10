<template>
  <div class="valid-container">
    <canvas id="valid-chart" height="200"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { generateDateLabel } from '../../util/generateDateLabel';

export default {
  name: 'ValidChart',
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
            label: 'Total Valid Requests',
            fill: 'start',
            borderColor: 'rgb(102, 187, 106)',
            backgroundColor: "rgba(102, 187, 106, 0.4)",
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

      const totalchart = document.getElementById('valid-chart');
      new Chart(totalchart, chartData);
    }
  }
}
</script>