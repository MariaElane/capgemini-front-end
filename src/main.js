import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'


// const app = createApp(App)
// app.use(router)
// app.use(moshaToast)
// app.mount('#app')

createApp(App).use(router).use(moshaToast).mount('#app')
