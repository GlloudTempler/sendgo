import { createWebHistory, createRouter } from "vue-router";
import main from "../view/MainPage.vue";
import Header2 from "@/components/layout/Header2.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import message from "../view/MessagePage.vue";
import credit from "../view/CreditPage.vue";
import join from "../view/login_join/JoinPage.vue";
import login from "../view/login_join/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "main_page",
    components: {
      default: main,
      Header,
      Footer,
    },
  },
  {
    path: "/credit",
    name: "credit_page",
    components: {
      default: credit,
      Header2,
      Footer,
    },
  },
  {
    path: "/message",
    name: "message_page",
    components: {
      default: message,
      Header2,
      Footer,
    },
  },
  {
    path: "/join",
    name: "join_page",
    components: { default: join, Header2 },
  },
  {
    path: "/login",
    name: "login_page",
    components: { default: login, Header2 },
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
  routes,
});


export default router;