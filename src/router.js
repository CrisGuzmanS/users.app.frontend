import { createRouter, createWebHistory } from 'vue-router';
import { verifyTokenMiddleware } from './auth/middlewares/verifyTokenMiddleware.js'

import UserPage from '@/users/components/pages/UserIndexPage.vue'
import CreateUserPage from '@/users/components/pages/CreateUserPage.vue'
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
    },{
        path: '/usuarios/crear',
        name: 'users.create',
        component: CreateUserPage,
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

router.beforeEach(verifyTokenMiddleware);

export { router };