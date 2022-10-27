<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="search" placeholder="Search for coins..." />
    <button v-if="getLength" @click="loadInstance">Load</button>
  </form>
  <ul class="list-group">
    <list-element
      v-for="item in getCoinsBySymbol(search)"
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
import { mapGetters } from "vuex";
export default {
  components: { ListElement },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["getCoinsBySymbol", "getLength"]),
  },
  methods: {
    loadInstance() {
      binance.tickerPrice().then((response) => {
        const allItems = response.data;
        const total = allItems.length;
        console.log(total);
        for (let i = 0; i < total; i++) {
          this.$store.dispatch("addToStore", {
            id: i,
            name: allItems[i].symbol,
            price: allItems[i].price,
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.invissable {
  display: none;
}
</style>