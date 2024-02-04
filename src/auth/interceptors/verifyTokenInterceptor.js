import { TokenService } from './auth/services/TokenService';

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