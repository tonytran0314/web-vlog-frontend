import { createApp } from 'vue'
import App from './App.vue'

import './assets/config.scss'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(fas) // THIS MUST BE PLACED AFTER 'CONST APP = CREATEAPP(APP)' OR SOME FONTAWESOME ICONS WOULD NOT WORKING
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
