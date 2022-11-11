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
          :coinId="id"
          :coinName="name"
          :coinInterval="interval"
        ></chart-component>
      </keep-alive>
    </span>
  </li>
</template>
  
  <script>
import ChartComponent from "./ChartComponent.vue";
export default {
  data() {
    return {
      // interval: "",
      // isActive: "",
    };
  },
  components: { ChartComponent },
  props: ["id", "name", "price", "interval"],
  methods: {
    spliceFromStorage() {
      this.$store.dispatch("UserCoins/spliceFromStorage", {
        name: this.name,
      });
    },
    // changeInterval(value) {
    //   this.$refs.chart.LoadChart();
    //   this.interval = value;
    //   this.isActive = value;
    // },
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