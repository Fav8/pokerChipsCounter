import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App).use(router)
app.use(pinia);
app.mount('#app')
