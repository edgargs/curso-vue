import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

VueQueryPlugin.install( app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60 //
            }
        }
    }
});

app.mount('#app')
