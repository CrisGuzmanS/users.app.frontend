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
                const response = await AuthService.login(this.email,this.password);

                if(response.token){
                    this.$router.push({ name: 'users.index' });
                }
            }
        }

    };
</script>