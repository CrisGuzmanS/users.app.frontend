import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/global.css'

loadFonts()

import UserPage from '@/users/components/pages/UserIndexPage.vue'
import LoginPage from '@/auth/components/pages/LoginPage.vue'
import { verifyTokenInterceptor } from './auth/interceptors/verifyTokenInterceptor'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/usuarios',
        name: 'users.index',
        component: UserPage,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/login',
        name: 'login',
        component: LoginPage
    }]
});

router.beforeEach(verifyTokenInterceptor);

createApp(App).use(router).use(vuetify).mount('#app')
