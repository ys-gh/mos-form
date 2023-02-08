import Vue from "vue";
import VueRouter from "vue-router";
import DemoPage from "../views/DemoPage.vue";
import FormPage from "../views/FormPage.vue";
import PostPage from "../views/PostPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DemoPage",
    component: DemoPage,
  },
  {
    path: "/form",
    name: "FormPage",
    component: FormPage
  },
  {
    path: "/posted",
    name: "Posted",
    component: PostPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
