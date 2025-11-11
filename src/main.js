import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import Error from './pages/Error.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faFigma,
  faGithub,
  faTrello
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faCode,
  faServer
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faFigma,
  faGithub,
  faTrello,
  faDatabase,
  faCode,
  faServer
)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/error', component: Error },
    { path: '/:pathMatch(.*)*', component: Error }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
