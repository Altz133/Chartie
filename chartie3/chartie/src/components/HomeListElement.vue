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

      </span>
      <span>
        <chart-component></chart-component>
      </span>
    </div>
  </li>
</template>
  
  <script>
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