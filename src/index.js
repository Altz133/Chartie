import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue';
import NewsView from './views/NewsView.vue';
import ListOfCoins from './views/CoinList.vue';
import StockList from './views/StockList.vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/news",
    name: "news",
    component: NewsView
  },
  {
    path: "/coins",
    name: "coins",
    component: ListOfCoins
  },
  {
    path: "/stock",
    name: "stock",
    component: StockList,
  }
]

let router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  routes,
})
export default router;
