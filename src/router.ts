import { createMemoryHistory, createRouter } from 'vue-router'

import ColtExpress from './pages/about/ColtExpress.vue'
import About from './pages/about/index.vue'

const routes = [
    { path: '/ColtExpress', component: ColtExpress },
    { path: '/', component: About },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router