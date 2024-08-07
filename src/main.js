import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TestView from './views/TestView.vue'

const app = createApp(App)

app.use(router)

router.addRoute(
    {
      path: '/test', component: TestView
    }
)

router.beforeEach(async (to, from, next) => {
  console.error(to);
  next();
  if (to.matched.length == 0) {
    // router.push({ path: to.fullPath })
    // we could also use this.$route or useRoute()
    router.replace(to.fullPath)
  }
})

app.mount('#app')
