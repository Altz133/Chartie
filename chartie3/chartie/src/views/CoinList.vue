<template>
  <form
    @submit.prevent="submitForm"
    class="is-justify-content-center is-align-self-center"
  >
    <input
      type="text"
      v-model="search"
      class="search is-size-4"
      placeholder="Search for coins..."
    />
  </form>
  <div v-if="!loaded" class="idk">
    <h1>Loading...</h1>
  </div>
  <ul class="columns is-multiline">
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
      loaded: false,
    };
  },
  computed: {
    ...mapGetters(["getCoinsBySymbol", "getLength"]),
  },

  async mounted() {
    (this.loaded = false),
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
        this.loaded = true;
      });
  },
  unmounted() {
    this.$store.dispatch("clearStorage");
  },
};
</script>

<style scoped>
.invissable {
  display: none;
}
.search {
  margin: 20px 43% 20px;
}
.idk {
  height: 500px;
  widows: 100%;
  margin: auto;
  box-sizing: border-box;
}
h1 {
  margin: 5% 50%;
  font-size: 24px;
}
</style>