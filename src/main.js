import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

/* pinia */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far)

import './assets/main.css'

const app = createApp(App).component('fa', FontAwesomeIcon)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount('#app')
