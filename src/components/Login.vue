<script setup>
    import { ref, onMounted } from "vue";

    import { apiValidateSession, apiAuthenticate } from "../api_js/serverAPI.js";
    import { jump_to_display, notify_error } from "./Helpers.js";

    const username = ref("");
    const password = ref("");

    onMounted(() => {
        apiValidateSession()
            .then( () => { jump_to_display(); } );
    });

    function form_submit(ev) {
        apiAuthenticate(username.value, password.value)
            .then( () => {
                apiValidateSession()
                    .then( () => { jump_to_display(); } )
                    .catch( (error) => {
                        notify_error(`Logged in, but validation error: ${error}`);
                    } );
            })
            .catch( (error) => { notify_error(`Login failed: ${error}`); } );
    }
</script>

<template>
    <form @submit.prevent="form_submit">
        <div>
            <label for="login_user">Username:</label>
            <input type="text" autocomplete="username" id="login_user" v-model="username">
        </div>
        <div>
            <label for="login_pass">Password:</label>
            <input type="password" autocomplete="password" id="login_pass" v-model="password">
        </div>
        <div>
            <input class="bigger_text" type="submit" value="Login">
        </div>
    </form>
</template>

<style scoped>
    div {
        padding: 1em;
    }
    form {
        text-align: center;
    }
</style>
