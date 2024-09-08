import { createRouter, createWebHashHistory } from 'vue-router';

import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';
import ViewNoteEdit from '@/views/ViewNoteEdit.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes,
    },
    {
      path: '/edit-note/:id',
      name: 'edit-note',
      component: ViewNoteEdit,
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats,
    },
  ],
});
