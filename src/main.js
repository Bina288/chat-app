import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useStore } from "vuex";


const app = createApp(App)

app.use(router).use(useStore)

app.mount('#app')
