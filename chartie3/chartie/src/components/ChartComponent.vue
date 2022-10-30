<template>
    <p v-if="!loaded">Loading... </p>
    <Line v-if="loaded" :chart-data="chartData" />
    <button @click="LoadChart">Reaload</button>
</template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  import binance from '../helpers/instance.js'
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)
  
  export default {
    name: 'LineChart',
    components: { Line },
    props:['coinName','interval'],
    data: () => ({
    loaded: false,
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
      }),
      methods:{
        async LoadChart(){
          this.loaded = false;
          this.chartData.labels = []
          this.chartData.datasets[0].data = []
       binance.klines(this.coinName, this.interval).then((response) => {
        const allItems = response.data;
        const total = allItems.length;
        for(let i = 0; i < total; i++)
            {
                this.chartData.datasets[0].data.push(allItems[i][1])
                let time = new Date(allItems[i][0])
                this.chartData.labels.push(time.toLocaleString())
            }
       this.loaded = true;
      });
        }
      },
    mounted(){
      this.LoadChart()
    },
    }
  
  </script>