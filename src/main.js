import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MyHome from './pages/MyHome.vue'
import About from './pages/MyProfil.vue'
import Board from './pages/NoticeBoard.vue'
import BoardShow from './pages/BoardShow.vue'
import Contact from './pages/FormContact.vue'

const routes = [
    { path: '/', component: MyHome },
    { path: '/about', component: About},
    { name:'board', path: '/board', component: Board},
    { name:'boardDetail',path: '/board/show/:pageId?', component: BoardShow},
    { path: '/contact', component: Contact}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$storeList = [
  {
    title: "스타벅스",
    distance: 200,
    categroy: "카페",
    imageLink: "https://www.haeundae.go.kr/upload_data/board_data/BBS_0000050/157915039396198.png",
    location: "부산 해운대구 좌동로 12",
  },
  {
    title: "아뮤즈",
    distance: 100,
    categroy: "회사",
    imageLink:"https://pds.saramin.co.kr/company/logo/201806/20/palxv1_fk8r-3xinat_logo.jpg",
    location: "부산광역시 부산진구 중앙대로 615 2001호",
  },
  {
    title: "뽀로로병원",
    distance: 150,
    categroy: "병원",
    imageLink: "https://i.ytimg.com/vi/sZkRT09tXEc/maxresdefault.jpg",
    location: "눈 덮힌 숲속마을"
  }
]