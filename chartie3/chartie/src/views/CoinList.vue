<template>
  <button @click="activateInstance">Activate Instace</button>
  <ul class="list-group">
    <list-element
      v-for="item in coinsStorage"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :price="item.price"
    ></list-element>
  </ul>
</template>

<script>
import binance from "@/helpers/instance.js";
import ListElement from "../components/ListElement.vue";

export default {
  components: { ListElement },
  computed: {
    coinsStorage() {
      return this.$store.getters["getStore"];
    },
  },
  methods: {
    activateInstance() {
      binance
        .exchangeInfo()
        .then((response) => {
          const allItems = response.data;
          console.log(allItems);
          const total = allItems.length;
          console.log(total);
          for (let i = 0; i < total; i++) {
            this.$store.dispatch("addToStore", {
              id: i,
              name: allItems[i].symbol,
              price: allItems[i].price,
            });
          }
        })
        .catch(console.log);
    },
  },
};
</script>

<style>
</style>