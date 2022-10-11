import { createApp } from 'vue';
import './style.css';
import DisplayApp from './DisplayApp.vue';

import { apiAttachToApp } from './api_js/attachAPI';

apiAttachToApp(createApp(DisplayApp)).mount('#displayApp');
