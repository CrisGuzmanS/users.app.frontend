<template>

    <label>Correo electrónico</label>
    <v-text-field v-model="email"></v-text-field>

    <label>Contraseña</label>
    <v-text-field v-model="password" type="password"></v-text-field>

    <v-btn v-on:click="onLogin()">Iniciar sesión</v-btn>

</template>
<script>

    import { AuthService } from "@/auth/services/AuthService.js";

    export default {
        
        data(){
            return {
                email: '',
                password: '',
            }
        },

        methods: {
            async onLogin() {
                console.log( await AuthService.login(this.email,this.password) )
            }
        }

    };
</script>