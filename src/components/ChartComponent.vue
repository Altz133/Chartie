<template>
  <p v-if="!loaded">Loading...</p>
  <keep-alive>
    <Line :chart-data="chartData" :styles="myStyles" />
  </keep-alive>
  <button class="button" @click="LoadChart(coinName, coinInterval)">
    Reload
  </button>
  <span>
    <button
      class="button is-info is-outlined"
      :class="{ active: coinInterval == '1s' }"
      @click="changeInterval('1s')"
    >
      1s
    </button>
    <button
      class="button is-info is-outlined"
      :class="{ active: coinInterval == '1m' }"
      @click="changeInterval('1m')"
    >
      1m
    </button>
    <button
      class="button is-info is-outlined"
      :class="{ active: coinInterval == '1h' }"
      @click="changeInterval('1h')"
    >
      1h
    </button>
    <button
      class="button is-info is-outlined"
      :class="{ active: coinInterval == '1d' }"
      @click="changeInterval('1d')"
    >
      1d
    </button>
    <button
      class="button is-info is-outlined"
      :class="{ active: coinInterval == '1w' }"
      @click="changeInterval('1w')"
    >
      1w
    </button>
  </span>
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
  props: ["coinId", "coinName", "coinInterval"],
  data: () => ({
    gradient: null,
    loaded: false,
    isActive: "coinInverval",
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
        width: "450px",
      };
    },
  },
  methods: {
    async LoadChart(coinName, interval) {
      binance.klines(coinName, interval).then((response) => {
        const allItems = response.data;
        const total = allItems.length;
        for (let i = 0; i < total; i++) {
          this.chartData.datasets[0].data[i] = allItems[i][1];
          let time = new Date(allItems[i][0]);
          this.chartData.labels[i] = time.toLocaleString();
        }
        this.loaded = true;
      });
    },
    changeInterval(newInterval) {
      this.loaded = false;
      this.$store.dispatch("UserCoins/changeInterval", {
        id: this.coinName,
        interval: newInterval,
      });

      this.LoadChart(this.coinName, newInterval);
    },
  },
  created() {
    this.LoadChart(this.coinName, this.coinInterval);
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
.active {
  text-decoration: underline;
}
</style>