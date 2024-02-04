import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/global.css'

loadFonts()

import UserPage from '@/users/components/pages/UserIndexPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/usuarios',
        name: 'users',
        component: UserPage
    }]
})

createApp(App).use(router).use(vuetify).mount('#app')
