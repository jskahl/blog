import "./assets/main.css";
import App from "./App.vue";
import router from "./router/index.ts";
import 'highlight.js/styles/github.css'
import 'highlight.js/styles/github-dark.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from "vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
