import backend from "@/backend.js";

export class AuthService {

    static login(email, password) {
        return backend.post("login", {
            email,
            password
        })
    }

}