import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import router from './router'
import ElementPlus from 'element-plus'
import 'vueperslides/dist/vueperslides.css';
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app=createApp(App)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
