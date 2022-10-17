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
        <button @click="addToHome">Add</button>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "price"],
  data() {
    return {};
  },
  methods: {
    addToHome() {
      return 0;
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