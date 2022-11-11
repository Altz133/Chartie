<template>
  <p v-if="!loaded">Loading...</p>
  <keep-alive>
    <Line :chart-data="chartData" :styles="myStyles" />
  </keep-alive>
  <button class="button" @click="LoadChart">Reload</button>
</template>
<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
import binance from "../helpers/instance.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  name: "LineChart",
  components: { Line },
  props: ["coinName", "interval"],
  data: () => ({
    gradient: null,
    loaded: false,
    responsive: false,
    chartData: {
      labels: [],
      datasets: [
        {
          label: "price",
          backgroundColor: "transparent",
          borderColor: "rgba(1, 116, 188, 0.50)",
          pointBackgroundColor: "red",
          data: [],
        },
      ],
    },
  }),
  computed: {
    myStyles() {
      return {
        height: "450px",
        width: "450px",
      };
    },
  },
  methods: {
    async LoadChart() {
      binance.klines(this.coinName, this.interval).then((response) => {
        const allItems = response.data;
        const total = allItems.length;
        // this.chartData.labels = []
        // this.chartData.datasets[0].data = []
        for (let i = 0; i < total; i++) {
          this.chartData.datasets[0].data[i] = allItems[i][1];
          let time = new Date(allItems[i][0]);
          this.chartData.labels[i] = time.toLocaleString();
        }
        this.loaded = true;
      });
    },
  },
  created() {
    this.LoadChart();
  },
};
</script>
<style scoped>
.button,
.button:active,
.button:hover {
  background-color: rgb(52, 152, 96);
  color: white;
}
</style>