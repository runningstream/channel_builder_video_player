<script setup>
    import { apiInitialize, apiLogout, apiValidateSession } from "../api_js/serverAPI.js";
    import { jump_to_login, notify_error } from "./Helpers.js";

    function logout() {
        apiLogout()
            .then( jump_to_login )
            .catch( (error) => { notify_error(`Logout failure: ${error}`); } );
    }
</script>

<template>
    <div @click="logout()" title="Logout">
    </div>
</template>

<style scoped>
    div {
        background-image: url(img/logout.svg);
    }
</style>
