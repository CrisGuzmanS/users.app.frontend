<template>

    <v-form>
        <v-container>
        
        <v-row>
        
            <v-col>

                <v-text-field label="Correo electrónico" :value="user.email"></v-text-field>
            
            </v-col>

        </v-row>

        </v-container>

    </v-form>

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
        console.log(this.user.email)
    }

}

</script>