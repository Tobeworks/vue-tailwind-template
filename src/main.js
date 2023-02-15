import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style.css'
import VueMeta from 'vue-meta'

const Vue = createApp(App);

Vue.use(VueMeta)
Vue.mount('#app')
