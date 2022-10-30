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
        <chart-component :coinName="name" :interval="interval"></chart-component>
      </span>
      <span>
      <button @click = "changeInterval('1s')">1s</button>
      <button @click = "changeInterval('1m')">1m</button>
      <button @click = "changeInterval('1h')">1h</button>
      <button @click = "changeInterval('1d')">1d</button>
      <button @click = "changeInterval('1w')">1w</button>
      </span>
    </div>
  </li>
</template>
  
  <script>
import ChartComponent from "./ChartComponent.vue";
export default {
  data(){
    return{
      interval: '1h',
    }
  },
  components: { ChartComponent },
  props: ["id", "name", "price"],
  methods: {
    spliceFromStorage() {
      this.$store.dispatch("UserCoins/spliceFromStorage", {
        name: this.name,
      });
    },
    changeInterval(value){
      this.interval = value;
    }
    
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