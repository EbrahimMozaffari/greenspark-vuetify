/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from "./router";
import store from './stores/index';

import "./styles/index.css";

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(router);
app.use(store);

app.mount('#app')
