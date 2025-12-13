import "./assets/main.css";
import App from "./App.vue";
import router from "./router/index.ts";

import { createApp } from "vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
