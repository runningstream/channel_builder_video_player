<script setup lang="ts">
    import { apiInitialize, apiLogout, apiValidateSession } from "../api_js/serverAPI";
    import { jump_to_login, notify_error } from "./Helpers";

    function logout() {
        apiLogout()
            .then( jump_to_login )
            .catch( (error: any) => { notify_error(`Logout failure: ${error}`); } );
    }
</script>

<template>
    <div @click="logout()" title="Logout">
    </div>
</template>

<style scoped>
    div {
        background-image: url(/img/logout.svg);
    }
</style>
