import { createApp } from 'vue'

import App from './App.vue'
import mitt from 'mitt'

import "./assets/css/ayoflex.css";
// import "ayoflex/dist/ayoflex.min.css";

import "./assets/css/example.css";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// import "./assets/css/bootstrap.css"
// import "./assets/js/jquery-3.7.1.min.js"
// import "./assets/js/bootstrap.bundle.js"


let eventBus = mitt();
const app= createApp(App);
app.config.globalProperties.$eventBus = eventBus;
app.mount('#app');
