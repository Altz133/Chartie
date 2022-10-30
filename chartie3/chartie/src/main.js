import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import store from './modules/coins/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './index'
const app = createApp(App)
app.use(router);
app.use(store);
app.use(BootstrapVue3)


app.mount('#app')
