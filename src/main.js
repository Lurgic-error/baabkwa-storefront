import { createApp } from "vue";
import App from "./App.vue";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from "./router";
import Unicon from 'vue-unicons'
import { uniEstate, uniShop, uniShoppingBag, uniRestaurant, uniShoppingCart,uniHeart } from 'vue-unicons/dist/icons'




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/styles.css";
import "./styles/bss.css";
import "./styles/responsive.css";
import "./styles/ui.css";

Unicon.add([uniEstate, uniShop, uniShoppingBag, uniRestaurant, uniShoppingCart,uniHeart])

const app = createApp(App);

app.use(router);
app.use(Unicon, {
    fill: '#1B3764',
    height: 20,
    width: 20,
    hoverFill:"#F78E1E",
  });

app.mount("#app");
