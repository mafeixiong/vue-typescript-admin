import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import router from './router'
import store from './store'
import 'normalize.css'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
