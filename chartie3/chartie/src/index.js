import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue';
import NewsView from './views/NewsView.vue';
import ListOfCoins from './views/CoinList.vue';

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
  }
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})
// const router = createRouter({
//   history: createWebHistory(),
//   router: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       name: 'news',
//       path: '/news',
//       component: NewsView
//     }
//   ]
// });

export default router;