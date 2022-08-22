import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import LoginApp from './LoginApp.vue'

let app = createApp(LoginApp);
app.use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)
  .mount('#loginApp');