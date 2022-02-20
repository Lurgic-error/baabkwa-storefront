import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/styles.css";
import "./styles/ui.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
