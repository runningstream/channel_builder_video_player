// Sets up axios to be used/provided to the app

import axios from 'axios';
import VueAxios from 'vue-axios';

export function apiAttachToApp(app) {
    app.use(VueAxios, axios);

    let ax_obj = app.config.globalProperties.axios;
    ax_obj.defaults.baseURL = "http://192.168.86.11:3031/api/v1/";
    //ax_obj.defaults.baseURL = "https://api.runningstream.cc/api/v1/";
    ax_obj.defaults.withCredentials = true;

    // Changes requests to use url form encoding instead of JSON, thus
    // avoiding a preflight
    ax_obj.defaults.transformRequest = [(data, headers) => {
        return new URLSearchParams(data);
    }];

    return app.provide('axios', app.config.globalProperties.axios);
}
