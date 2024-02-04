import { createRouter, createWebHistory } from 'vue-router';
import { verifyTokenInterceptor } from './auth/interceptors/verifyTokenInterceptor'

import UserPage from '@/users/components/pages/UserIndexPage.vue'
import LoginPage from '@/auth/components/pages/LoginPage.vue'

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

export { router };