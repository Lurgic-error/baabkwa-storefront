import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/styles.css";
import "./styles/bss.css";
import "./styles/responsive.css";
import "./styles/ui.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
