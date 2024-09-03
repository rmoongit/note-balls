import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import NotesView from "@/views/NotesView.vue";
import StatsView from "@/views/StatsView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: NotesView,
    },
    {
      path: "/stats",
      name: "stats",
      component: StatsView,
    },
  ],
});

createApp(App).use(router).mount("#app");
