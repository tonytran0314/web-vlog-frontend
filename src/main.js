import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@/assets/css/main.css'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara'

const app = createApp(App)
const pinia = createPinia()

// THE LINE BELOW MUST BE PLACED AFTER 'CONST APP = CREATEAPP(APP)' OR SOME FONTAWESOME ICONS WOULD NOT WORKING
library.add(fas) 
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(Toast)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
})

app.mount('#app')
