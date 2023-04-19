import '@stripe/stripe-js';
import { createApp } from 'vue';
import BootstrapVue from 'bootstrap-vue-next';

import App from './App';
import router from './router';
import store from './store';

import './styles/styles.scss'

createApp(App)
  .use(router)
  .use(store)
  .use(BootstrapVue)
  .mount('#app');
