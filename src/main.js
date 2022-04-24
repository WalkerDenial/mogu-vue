import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import "@/style/index.scss";
import Mui from "@/components";
import "@/mock";
import "lib-flexible/flexible.js";

createApp(App).use(store).use(router).use(Mui).mount("#app");
