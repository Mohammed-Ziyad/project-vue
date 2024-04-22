import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/main.scss';
import '../node_modules/modern-normalize/modern-normalize.css';
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
