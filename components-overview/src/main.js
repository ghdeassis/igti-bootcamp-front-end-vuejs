import GlobalComponent from './components/GlobalComponent.vue'

import { createApp } from 'vue'
import App from './App.vue'
import PageA from "./components/PageA";
import PageB from "./components/PageB";
import PageC from "./components/PageC";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/pageA", component: PageA },
    { path: "/pageB", component: PageB },
    { path: "/pageC", component: PageC },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');




app.component('GlobalComponent', GlobalComponent);
