import { createRouter, createWebHistory } from 'vue-router';
import { verifyTokenInterceptor } from './auth/interceptors/verifyTokenInterceptor'

import UserPage from '@/users/components/pages/UserIndexPage.vue'
import LoginPage from '@/auth/components/pages/LoginPage.vue'
import UnauthorizedPage from '@/auth/components/pages/UnauthorizedPage.vue'

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
    }, {
        path: '/403',
        name: '403',
        component: UnauthorizedPage
    }]
});

router.beforeEach(verifyTokenInterceptor);

export { router };