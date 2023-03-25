import { createRouter, createWebHistory } from "vue-router";
import Session from "supertokens-web-js/recipe/session";
import { EmailVerificationClaim } from "supertokens-web-js/recipe/emailverification";

import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import AuthView from "@/views/AuthView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/auth/verify-email",
    name: "auth",
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const publicPages = ["Login", "Register", "auth"];
  const authRequired = !publicPages.includes(to.name);

  const doesSessionExist = await Session.doesSessionExist();
  let isVerified = false;

  if (doesSessionExist) {
    isVerified = await Session.getClaimValue({
      claim: EmailVerificationClaim,
    });
  }

  console.log("doesSessionExist", doesSessionExist);
  console.log("isVerified", isVerified);

  if (doesSessionExist && isVerified && authRequired) {
    console.log("first");
    return true;
  } else if (!((!doesSessionExist || !isVerified) && !authRequired)) {
    if (to.name !== "Login") {
      return { name: "Login" };
    } else {
      return { path: from.path };
    }
  } else {
    console.log("else");
    return true;
  }
});

export default router;
