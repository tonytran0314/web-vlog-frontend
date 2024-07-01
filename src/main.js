import { createApp } from 'vue'
import App from './App.vue'

import './assets/config.scss'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Skeleton from 'primevue/skeleton'
import Slider from 'primevue/slider'

const app = createApp(App)

// THE LINE BELOW MUST BE PLACED AFTER 'CONST APP = CREATEAPP(APP)' OR SOME FONTAWESOME ICONS WOULD NOT WORKING
library.add(fas) 
app.component('font-awesome-icon', FontAwesomeIcon)

app.component('Skeleton', Skeleton)
app.component('Slider', Slider)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.use(router)
app.mount('#app')
