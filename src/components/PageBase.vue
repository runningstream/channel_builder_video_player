<script setup lang="ts">
    import { onMounted } from "vue";

    import { apiInitialize, apiValidateSession } from "../api_js/serverAPI";
    import { jump_to_login } from "./Helpers";

    import Logout from "./Logout.vue";
    import HelpLink from "./HelpLink.vue";

    const props = defineProps({
        // Set this if the page should only be accessible when logged in
        loggedIn: Boolean,
    });

    apiInitialize();

    onMounted( () => {
        if( props.loggedIn ) {
            apiValidateSession()
                .catch( (error: any) => { jump_to_login(); } );
        }
    });
</script>

<template>
    <div>
        <div id="header_area">
            <div id="hdr_name" v-if="loggedIn">Running Stream</div>
            <div id="mgmt_btns" v-if="loggedIn">
                <HelpLink />
                <Logout />
            </div>
        </div>
        <div id="screen_area">
            <slot />
        </div>
    </div>
</template>

<style>
    :root {
        --color-scarlet: #b85042;
        --color-dkscarlet: #8f1014;
        --color-ltolive: #e7e8d1;
        --color-teal: #a7beae;
        --color-ltteal: #dbeee1;
    }

    /* Quick reset */
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    .bigger_text {
        font-weight: 700;
        font-size: 1em;
        padding: 10px 15px;
    }

    body {
        background: var(--color-ltolive);
        color: var(--color-dkscarlet);
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: serif;
    }

    input[type="text"], input[type="password"] {
        background-color: var(--color-ltolive);
        border: 1px var(--color-scarlet) solid;
        border-radius: 10px;
        color: var(--color-dkscarlet);
        padding: 5px;
        margin: 5px;
        max-width: 100%;
    }

    input[type="submit"], input[type="button"], .input_button {
        background-color: var(--color-scarlet);
        border: 1px var(--color-ltolive) solid;
        border-radius: 20px;
        color: var(--color-ltolive);
        margin: 5px;
        font-family: sans-serif;
        text-decoration: none;
        text-shadow: none;
    }

    input[type="submit"]:active, input[type="button"]:active, .input_button:active {
        box-shadow: inset 5px 5px var(--color-dkscarlet);
    }

    a {
        color: inherit;
    }

    h1 {
        font-size: 5em;
        font-weight: bold;
    }

    h2 {
        font-size: 2em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.5em;
        font-weight: bold;
    }

    @media (max-width: 700px) {
        h1 {
            font-size: 3em;
        }
        h3 {
            font-size: 1.5em;
        }
    }
</style>

<style scoped>
    #header_area {
        position: fixed;
        min-height: 2em;
        height: -moz-fit-content;
        height: fit-content;
        width: 100%;
        left: 0px;
        top: 0px;
        background-color: var(--color-scarlet);
        z-index: 1;
        display: flex;
    }

    #hdr_name {
        font-size: 1.5em;
        font-weight: bold;
        color: var(--color-ltolive);
    }

    #mgmt_btns {
        display: flex;
        margin-left: auto;
    }

    #mgmt_btns > div, #mgmt_btns > a {
        background-size: cover;
        height: 2em;
        width: 2em;
        cursor: pointer;
        text-decoration: none;
        margin-right: .5em;
    }

    #screen_area {
        margin-bottom: 0;
        margin-top: 2em;
    }
</style>
