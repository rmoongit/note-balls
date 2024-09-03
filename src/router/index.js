import { createRouter, createWebHashHistory } from "vue-router";

import NotesView from "@/views/NotesView.vue";
import StatsView from "@/views/StatsView.vue";

export const router = createRouter({
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
