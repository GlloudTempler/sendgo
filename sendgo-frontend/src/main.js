import { createApp } from 'vue'
import App from './App.vue'
import routers from "./routes" // router import

// createApp(App).mount('#app')

const app = createApp(App)
app.use(routers) // router 추가
app.mount("#app")