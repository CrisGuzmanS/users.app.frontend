<template>

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

</template>
<script>

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
        onSubmit(){
            console.log({
                email: this.email,
                name: this.name,
                password: this.password,
                repeatedPassword: this.repeatedPassword,
            });
        }
    }
}

</script>