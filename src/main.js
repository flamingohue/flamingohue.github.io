

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

createApp(App).use(router).use(BootstrapVue3).component("Carousel",Carousel).component("Slide",Slide).component("Pagination",Pagination).component("Navigation",Navigation).mount('#app')
