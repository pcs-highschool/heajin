import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MyHome from './MyHome.vue'

const routes = [
    { path: '/', component: MyHome },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App)
app.use(router)

app.mount('#app')
