<template>
  <li class="column is-third">
    <div class="d-flex">
      <span class="p-2">
        {{ name }}
      </span>
      <span class="p-2">
        {{ price }}
      </span>
      <span class="ml-auto p-2">
        <button
          @click="spliceFromStorage"
          class="is-small button is-danger justify-content-between"
        >
          <b> X </b>
        </button>
      </span>
    </div>
    <span>
      <keep-alive>
        <chart-component
          :coinName="name"
          :interval="interval"
          ref="chart"
        ></chart-component>
      </keep-alive>
    </span>
    <span>
      <button
        class="button is-info is-outlined"
        :class="{ active: isActive == '1s' }"
        @click="changeInterval('1s')"
      >
        1s
      </button>
      <button
        class="button is-info is-outlined"
        :class="{ active: isActive == '1m' }"
        @click="changeInterval('1m')"
      >
        1m
      </button>
      <button
        class="button is-info is-outlined"
        :class="{ active: isActive == '1h' }"
        @click="changeInterval('1h')"
      >
        1h
      </button>
      <button
        class="button is-info is-outlined"
        :class="{ active: isActive == '1d' }"
        @click="changeInterval('1d')"
      >
        1d
      </button>
      <button
        class="button is-info is-outlined"
        :class="{ active: isActive == '1w' }"
        @click="changeInterval('1w')"
      >
        1w
      </button>
    </span>
  </li>
</template>
  
  <script>
import ChartComponent from "./ChartComponent.vue";
export default {
  data() {
    return {
      interval: "",
      isActive: "",
    };
  },
  components: { ChartComponent },
  props: ["id", "name", "price"],
  methods: {
    spliceFromStorage() {
      this.$store.dispatch("UserCoins/spliceFromStorage", {
        name: this.name,
      });
    },
    changeInterval(value) {
      this.$refs.chart.LoadChart();
      this.interval = value;
      this.isActive = value;
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
.active {
  text-decoration: underline;
}
.coinPrice {
  margin-left: 30px;
}
</style>