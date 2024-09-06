import { createRouter, createWebHashHistory } from 'vue-router';

import NotesView from '@/views/NotesView.vue';
import StatsView from '@/views/StatsView.vue';
import NoteEditView from '@/views/NoteEditView.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: NotesView,
    },
    {
      path: '/edit-note/:id',
      name: 'edit-note',
      component: NoteEditView,
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView,
    },
  ],
});
