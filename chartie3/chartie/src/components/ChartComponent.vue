<template>
    <p v-if="!loaded">Loading... </p>
    <Line :chart-data="chartData" />
    <button @click="LoadChart">Reload</button>
</template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  import binance from '../helpers/instance.js'
  ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement)

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
              label: "price",
              backgroundColor: '#f87979',
              data: [],
            }
          ]
        }
      }),
      methods:{
        async LoadChart(){
          this.loaded = false;

       binance.klines(this.coinName, this.interval).then((response) => {
        const allItems = response.data;
        const total = allItems.length;
        // this.chartData.labels = []
        // this.chartData.datasets[0].data = []
        for(let i = 0; i < total; i++)
            {
                this.chartData.datasets[0].data[i] = allItems[i][1]
                let time = new Date(allItems[i][0])
                this.chartData.labels[i] = time.toLocaleString()
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