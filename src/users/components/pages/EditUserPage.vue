<template>

    <v-card>
        <v-container>
            <v-form @submit.prevent="onSubmit">
                
                <v-row>
                
                    <v-col cols="12">

                        <v-text-field label="Correo electrónico" v-model="user.email"></v-text-field>
                    
                    </v-col>

                    <v-col cols="12">
                        <v-text-field label="Nombre" v-model="user.name"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-btn type="submit" color="primary">Guardar</v-btn>
                    </v-col>

                </v-row>

            </v-form>
        </v-container>
    </v-card>

</template>
<script>

import backend from "@/backend.js";

export default {

    data(){
        return {
            user: {
                email: '',
                name: '',
            }
        }
    },

    async mounted() {
        const userId = this.$route.params.id;
        this.user = (await backend.get(`usuarios/${userId}`)).data;
    },

    methods: {
        async onSubmit(){
            const response = await backend.patch(`usuarios/${this.$route.params.id}`, {
                email: this.user.email,
                name: this.user.name
            });

            console.log(response);
        }
    }

}

</script>