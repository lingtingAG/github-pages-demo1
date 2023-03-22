import { createApp } from "vue";
import { App } from "./App";
import router from "./router/routes";
import "vant/lib/index.css";
import "@svgstore";

const app = createApp(App);
app.use(router);
app.mount("#app");
