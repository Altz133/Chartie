<template>
  <div class="idk" v-if="empty">
    <p>Go to "Crypto Coins" and add some cryptocurrencies first!</p>
  </div>
  <ul v-auto-animate class="columns is-multiline">
    <keep-alive>
      <home-list-element
        v-for="item in userCoinStorage"
        class="box"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :interval="item.interval"
      ></home-list-element>
    </keep-alive>
  </ul>
</template>

<script>
import HomeListElement from "../components/HomeListElement.vue";
export default {
  data() {
    return {
      timer: null,
      counter: 4,
      empty: true,
    };
  },
  components: { HomeListElement },
  computed: {
    userCoinStorage() {
      return this.$store.getters["UserCoins/getCoins"];
    },
  },
  methods: {
    update() {
      this.timer = setInterval(() => {
        if (this.$store.getters["UserCoins/getCoins"].length > 0) {
          this.$store.dispatch("UserCoins/updateStorage");
          this.empty = false;
          console.log("price update");
        } else {
          this.empty = true;
          console.log("store is empty - nothing to update");
        }
      }, 5000);
    },
  },
  beforeMount() {
    this.update();
    if (this.$store.getters["UserCoins/getCoins"].length > 0) {
      this.empty = false;
    }
  },
  unmounted() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped>
.columns {
  margin-top: 1px;
}
.box {
  margin: 3px;
  height: 600px;
}
.idk {
  width: 100%;
  height: 300px;
}
p {
  margin: 15% 30%;
  font-size: 24px;
}
</style>