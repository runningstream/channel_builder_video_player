// Must be attached to the app using attachAPI.js
// After importing this, but still during setup and before running an API func
// run apiInitialize.  Perhaps in a base page that gets used everywhere

import { inject } from "vue";

export interface VideoType {
    name?: string,
    type?: string,
    image?: string,
    videourl?: string,
    entries?: Array<VideoType>,
}
export interface ChannelData {
    data: { entries: Array<VideoType>, },
}

let axios: any = undefined;

export function apiInitialize() : void{
    axios = inject("axios");
}

export function apiValidateSession() : Promise<void> {
    validateInitialized();
    return axios.get("validate_session_di");
}


export function apiAuthenticate(username: string, password: string) : Promise<void> {
    validateInitialized();
    const data = {
        "username": username,
        "password": password,
    };
    return axios.post("authenticate_di", data);
}

export function apiLogout() : Promise<void> {
    validateInitialized();
    return axios.get("logout_session_di");
}

export function apiGetChannelLists() : Promise<string[]> {
    return axios.get("get_channel_lists_di");
}

export function apiGetActiveChannel() : Promise<ChannelData> {
    return axios.get("get_active_channel_di");
}

export function apiGetChannelList(list: string) : Promise<ChannelData> {
    return axios.get(`get_channel_list_di?list_name=${list}`);
}

function validateInitialized() : void {
    if ( axios === undefined ) {
        console.error("axios is undefined - run apiInitialize in component setup");
    }
}
