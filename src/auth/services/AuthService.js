import backend from "@/backend.js";
import { TokenService } from "@/auth/services/TokenService.js";

export class AuthService {

    static async login(email, password) {
        const response = await backend.post("login", {
            email,
            password
        });

        const token = response.data.data.token;

        TokenService.set(token);

        return response.data.data;
    }

}