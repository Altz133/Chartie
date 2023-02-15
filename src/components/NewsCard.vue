<template>
  <li>
    <div class="card">
      <div class="card-header">
        {{ date }}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text" style="margin-top:10px;">Source: {{ source }}</p>
        <a :href="url" class="btn btn-primary external-link" target=”_blank” > Visit the Article!</a>
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
.btn{
  margin:15px 0px 5px 0px;
}

</style>