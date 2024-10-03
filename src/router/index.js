import { createRouter, createWebHashHistory } from 'vue-router';

import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';
import ViewNoteEdit from '@/views/ViewNoteEdit.vue';
import ViewAuth from '@/views/ViewAuth.vue';

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
    {
      path: '/auth',
      name: 'auth',
      component: ViewAuth,
    },
  ],
});
