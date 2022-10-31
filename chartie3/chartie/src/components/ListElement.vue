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
        <button @click="add">add</button>
      </span>
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
      for(let i=0 ; i < data.length; i++)
      {
        if(this.id == data[i].id)
        {
          alert("Coin already exist in Home View")
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
</style>