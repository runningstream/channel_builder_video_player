// Must be attached to the app using attachAPI.js
// After importing this, but still during setup and before running an API func
// run apiInitialize.  Perhaps in a base page that gets used everywhere

import { inject } from "vue";

let axios = undefined;

export function apiInitialize() {
    axios = inject("axios");
}

export function apiValidateSession() {
    validateInitialized();
    return axios.get("validate_session_fe");
}


export function apiAuthenticate(username, password) {
    validateInitialized();
    const data = {
        "username": username,
        "password": password,
    };
    return axios.post("authenticate_fe", data);
}

export function apiLogout() {
    validateInitialized();
    return axios.get("logout_session_fe");
}

export function apiGetChannelLists() {
    return axios.get("get_channel_lists");
}

export function apiGetChannelList(list) {
    return axios.get(`get_channel_list?list_name=${list}`);
}

function validateInitialized() {
    if ( axios === undefined ) {
        console.error("axios is undefined - run apiInitialize in component setup");
    }
}
