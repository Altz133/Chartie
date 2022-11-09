<template>
  <ul class="list-group">
    <home-list-element
      v-for="item in userCoinStorage"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :price="item.price"
    ></home-list-element>
  </ul>
</template>

<script>
import HomeListElement from "../components/HomeListElement.vue";
export default {
  data() {
    return {
      timer: null,
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
  mounted() {
    this.update();
  },
  unmounted() {
    clearInterval(this.timer);
  },
};
</script>
<style>
</style>