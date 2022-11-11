<template>
  <li>
    <div class="card">
      <div class="card-header">
        {{ date }}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text">Source: {{ source }}</p>
        <a :href="url" class="btn btn-primary"> Visit the Article!</a>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["id", "title", "description", "url", "date", "source"],
  data() {
    return {};
  },
};
</script>
<style scoped>
li {
  list-style: none;
  margin: 30px;
}
</style>