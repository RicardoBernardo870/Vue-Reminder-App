import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import router from './router/index'


const app = createApp(App)

app.component('Header', Header)

app.use(router).mount('#app')
