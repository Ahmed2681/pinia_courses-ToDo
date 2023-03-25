import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";

import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import EmailPassword from "supertokens-web-js/recipe/emailpassword";
import EmailVerification from "supertokens-web-js/recipe/emailverification";

import App from "./App.vue";

import "./assets/main.css";
import "vue-toastification/dist/index.css";

import router from "./router";

SuperTokens.init({
  appInfo: {
    appName: "Beez Assistant App",
    apiDomain: "http://localhost:4101",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [
    EmailVerification.init({
      mode: "REQUIRED",
    }),
    EmailPassword.init(),
    Session.init(),
  ],
});

const app = createApp(App);

app.use(createPinia());

app.use(Toast, {
  maxToasts: 1,
  timeout: 2000,
});

app.use(router);

app.mount("#app");
