import { TokenService } from '../services/TokenService.js';

export const verifyTokenInterceptor = (to, from, next) => {

    console.log("🟣 Middleware requiresAuth");

    if (!to.meta.requiresAuth) {
        return next();
    }

    const token = TokenService.get();

    if (!token) {
        next({ name: 'login' });
    }

    next();
}