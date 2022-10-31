<template>
  <h3>This is news page</h3>
  <button @click="loadNews">LoadNEws</button>
  <ul>
  <p v-if="!loaded"> Loading...</p>
  <news-card
  v-for="item in getNews"
  :id="item.id"
  :key="item.key"
  :title="item.title"
  :description="item.description"
  :url="item.url"
  :date="item.date"
  :source="item.source"></news-card>
  </ul>
</template>

<script>

import NewsCard from '../components/NewsCard.vue'
import newsInstance from '../helpers/news.js';
export default{
  data(){
    return{
      loaded:true
    }
  },
  components:{NewsCard},
  computed:{
    getNews(){
      return this.$store.getters["FinanceNews/getNews"]
    }
  },
  methods:{
    async loadNews(){
        this.loaded = false,
        this.$store.dispatch('FinanceNews/clearStorage')
        newsInstance.news().then((response) => {
        console.log(response);
        const items = response.data.data
        const total =  response.data.data.length;
        for(let i =0; i< total; i++)
        {
          this.$store.dispatch("FinanceNews/addToStore",{
            id: i,
            title: items[i].title,
            description: items[i].description,
            url: items[i].url,
            date: items[i].published_at,
            source: items[i].source,
          })
        }
        this.loaded = true
      })
    }
  }
}
</script>

<style>

</style>