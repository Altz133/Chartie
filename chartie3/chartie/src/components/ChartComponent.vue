<template>
    <Line :chart-data="chartData" />
  </template>
  
  <script>
  // DataPage.vue
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  import binance from '../helpers/instance.js'
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)
  
  export default {
    name: 'LineChart',
    components: { Line },
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'coin placeholder',
              backgroundColor: '#f87979',
              data: [],
            }
          ]
        }
      }
    },
    mounted(){
      binance.klines("BTCUSDT", "1m").then((response) => {
        const allItems = response.data;
        console.log(allItems);
        const total = allItems.length;
        console.log(total);
        for(let i = 0; i < total; i++)
            {
                this.chartData.datasets[0].data.push(allItems[i][0])
                this.chartData.labels.push(allItems[i][0])
            }
       
      });
    },
    }
  
  </script>