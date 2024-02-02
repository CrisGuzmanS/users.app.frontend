import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import UserPage from './components/users/pages/UserIndexPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/usuarios',
        name: 'users',
        component: UserPage
    }]
})

createApp(App).use(router).mount('#app')
