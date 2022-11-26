<script setup lang="ts">
    import { ref, onMounted } from "vue";

    import { apiValidateSession, apiAuthenticate } from "../api_js/serverAPI";
    import { jump_to_after_login, notify_error } from "./Helpers";

    const username = ref("");
    const password = ref("");

    onMounted(() => {
        apiValidateSession()
            .then( () => { jump_to_after_login(); } )
            .catch( (_error: any) => { /* Validation failed, so allow login */ } );
    });

    function form_submit(_ev: Event) {
        apiAuthenticate(username.value, password.value)
            .then( () => {
                apiValidateSession()
                    .then( () => { jump_to_after_login(); } )
                    .catch( (error: any) => {
                        notify_error(`Logged in, but validation error: ${error}`);
                    } );
            })
            .catch( (error: any) => { notify_error(`Login failed: ${error}`); } );
    }
</script>

<template>
    <section id="intro">
        <h1>Running Stream Player</h1>
    </section>
    <section id="login">
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
    </section>
    <section id="links">
        <h2>Apps</h2>
        <h3>
            <a href="https://runningstream.cc">Management Console</a>
            <a href="https://channelstore.roku.com/details/707afc86801deb28e35d3984cdc59b68/running-stream">Roku Channel</a>
        </h3>
        <h2>Documentation</h2>
        <h3>
            <a href="https://docs.runningstream.cc/">Getting Started</a>
        </h3>
    </section>
</template>

<style scoped>
    div {
        padding: 1em;
    }
    section {
        text-align: center;
    }
    #intro, #links {
        background-color: var(--color-scarlet);
        color: var(--color-ltolive);
    }
    #intro, #login, #links {
        padding: 100px 25px;
    }
    #links a {
        display: block;
        padding: .5em;
    }
</style>
