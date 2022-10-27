<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="wrapper">
      <span>
        {{ name }}
      </span>
      <span class="coinPrice">
        {{ price }}
      </span>
      <span>
        <button @click="spliceFromStorage">X</button>
      </span>
      <span>
        <button @click="klinesRequest">Active</button>
        <chart-component></chart-component>
      </span>
    </div>
  </li>
</template>
  
  <script>
import binance from "../helpers/instance.js";
import ChartComponent from "./ChartComponent.vue";
export default {
  components: { ChartComponent },
  props: ["id", "name", "price"],
  methods: {
    spliceFromStorage() {
      this.$store.dispatch("UserCoins/spliceFromStorage", {
        name: this.name,
      });
    },
    klinesRequest() {
      binance.klines("BTCUSDT", "1m").then((response) => {
        const allItems = response.data;
        console.log(allItems);
        const total = allItems.length;
        console.log(total);
      });
    },
  },
};
</script>
  
  <style scoped>
li {
  list-style: none;
}
span {
  padding: 3px;
}
</style>