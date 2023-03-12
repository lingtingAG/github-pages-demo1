import { createApp } from 'vue'
import { App } from './App'
import router from './router/routes'

const app = createApp(App);
app.use(router);
app.mount('#app');
