<template>
<li>
    <div>
        <h3>{{ title }}</h3>
        <h4>{{ description }}</h4>
        <a :href=url>Link to the article!</a>
        <li>{{ date }}</li>
        <p>Source: {{ source }}</p>
    </div>
</li>
</template>
<script>
export default{
    props:["id","title","description", "url","date","source"],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
li {
  list-style: none;
}
</style>