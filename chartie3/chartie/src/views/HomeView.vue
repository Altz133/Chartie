<template>
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
          console.log("update");
        } else {
          console.log("store is empty - nothing to update");
        }
      }, 5000);
    },
  },
  beforeMount() {
    this.update();
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
</style>