<template>
    <v-row>
        <v-col cols="12" md="6" lg="4">
            <v-card class="elevation-0 pt-4">
                <div class="d-flex" style="justify-content: center">
                    <div style="width: 150px; height: 150px; background: gray; border-radius: 50%; background-image: url('./user.png'); background-size: contain"></div>
                </div>
                <v-card-title class="text-center" style="padding: 0px">Nombre de usuario</v-card-title>
                <v-card-subtitle class="text-center" style="margin-top: -8px">Email</v-card-subtitle>
                <v-card-actions>
                    <v-btn>
                        eliminar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <v-card class="elevation-0">
                <v-card-title>Nombre de usuario</v-card-title>
                <v-card-subtitle>Email</v-card-subtitle>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <v-card class="elevation-0">
                <v-card-title>Nombre de usuario</v-card-title>
                <v-card-subtitle>Email</v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>

export default {
};

</script>