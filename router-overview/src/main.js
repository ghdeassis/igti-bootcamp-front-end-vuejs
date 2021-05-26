import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import PageA from "./components/PageA";
import PageB from "./components/PageB";
import PageC from "./components/PageC";
import User from "./components/User";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/pageA", component: PageA },
    { path: "/pageB", component: PageB },
    { path: "/pageC", component: PageC },
    { path: "/user/:userId", name: "user", component: User }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
