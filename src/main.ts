import { createApp } from "vue";
import rootApp from "./App.vue";
import router from "./router";

const app = createApp(rootApp);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
