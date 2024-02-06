<template>

    <v-card>
        <v-form @submit.prevent="onSubmit">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="email" label="Correo electrónico" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="name" label="Nombre" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="password" type="password" label="Contraseña" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="repeatedPassword" type="password" label="Verificar contraseña" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-btn type="submit" color="primary">
                            Crear usuario
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>

</template>
<script>

import backend from '@/backend.js';

import Swal from 'sweetalert2';

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            repeatedPassword: '',
        }
    },

    methods: {
        async onSubmit(){

            if(this.password != this.repeatedPassword){
                return Swal.fire({
                    icon: "error",
                    title: "¡Ups!",
                    text: 'Las contraseñas ingresadas no coinciden',
                });
            }

            try{
                await backend.post('usuarios', {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                });
            } catch(error) {
                return Swal.fire({
                    icon: "error",
                    title: "¡Ups!",
                    text: error.response.data.message ?? null,
                });
            }


            this.$router.push({ name: 'users.index'});
        }
    }
}

</script>