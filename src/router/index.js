import { createWebHistory, createRouter } from "vue-router"
import PageNotFound from '@/views/PageNotFound.vue'
import About from '@/views/AboutView.vue'
import Home from '@/views/HomeView.vue'
import Projects from '@/views/projectView.vue'
import Contact from '@/views/ContactView.vue'
import Experience from '@/views/ExperienceView.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: About,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
    {
        path: '/experience',
        name: "Experience",
        component: Experience,
    },
    {
        path: '/projects',
        name: "projects",
        component: Projects,
    },
    {
        path: '/contacts',
        name: "contacts",
        component: Contact,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router