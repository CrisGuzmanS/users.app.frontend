<template>

<v-card v-if="display" class="pt-4" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
    <div class="d-flex mb-2" style="justify-content: center">
        <div style="width: 150px; height: 150px; background: gray; border-radius: 50%; background-image: url('./user.png'); background-size: contain"></div>
    </div>
    <v-card-title class="text-center" style="padding: 0px">
        {{user.name}}
    </v-card-title>
    <v-card-subtitle class="text-center" style="margin-top: -8px">
        {{user.email}}
    </v-card-subtitle>
    <v-card-actions>
        <v-row>
        <v-col cols="6">
            <v-btn style="width: 100%" v-on:click="onDeleteUser">
                eliminar
            </v-btn>
        </v-col>
        <v-col cols="6">
            <v-btn style="width: 100%" v-on:click="onEditUser">
                editar
            </v-btn>
        </v-col>
        </v-row>
    </v-card-actions>
</v-card>

</template>
<script>

import backend from '@/backend';
import Swal from 'sweetalert2';

export default {
    props: {
        user: Object
    },

    data() {
        return {
            display: true
        }
    },

    methods: {
        async onDeleteUser() {

            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: `¿Quieres eliminar al usuaroo ${this.user.name}?`,
                icon: 'warning',
                showCancelButton: true,
            });

            if(!result.isConfirmed) {
                return;
            }

            await backend.delete(`usuarios/${this.user.id}`);
            this.display = false;

            Swal.fire('Eliminado',`${this.user.name} ha sido eliminado`);
        },

        async onEditUser(){
            this.$router.push({name: 'users.edit', params: {id: this.user.id} });
        }
    }
}

</script>