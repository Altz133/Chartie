<template>
  <li class="column is-one-third">
    <div class="box">
      <div class="d-flex">
        <span class="p-2 is-size-4">
          {{ name }}
        </span>
        <span class="coinPrice p-2 is-size-4">
          {{ price }}
        </span>
        <span class="ml-auto p-2">
          <button class="button is-secondary" @click="add">add</button>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "price"],
  data() {
    return {
      check: [],
    };
  },
  methods: {
    addToHome() {
      return 0;
    },
    add() {
      const data = this.$store.getters["UserCoins/getCoins"];
      for (let i = 0; i < data.length; i++) {
        if (this.id == data[i].id) {
          alert("Coin already exist in Home View");
          return;
        }
      }
      this.$store.dispatch("UserCoins/AddToUsersCoinList", {
        id: this.id,
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
.box {
  width: 260;
  height: 80;
}
</style>