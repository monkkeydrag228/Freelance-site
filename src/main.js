import { createApp } from 'vue'
import App from './App.vue'
import {router} from '../src/router.js'
import './theme.css'

createApp(App)
.use(router)
.mount('#app')
