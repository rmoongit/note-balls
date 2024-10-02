<template>
  <div class="card is-family-code">
    <div class="card-content">
      <div class="content">
        <p class="mb-4">{{ note.text }}</p>
        <div class="columns is-mobile">
          <small class="column has-text-grey-light">{{ dateFormatted }}</small>
          <small class="column has-text-grey-light has-text-right">{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink class="card-footer-item has-text-black" :to="`/edit-note/${note.id}`">Edit</RouterLink>
      <button class="card-footer-item has-text-black" @click="modal.deleteNote = true">Delete</button>
    </footer>
    <NoteModal v-if="modal.deleteNote" v-model="modal.deleteNote" :note-id="note.id" />
  </div>
</template>

<script setup>
import { defineProps, computed, reactive } from 'vue';
import { useDateFormat } from '@vueuse/core';
import NoteModal from './NoteModal.vue';

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const charactersLength = computed(() => {
  const charLength = props.note.text.length;
  const description = charLength > 1 ? 'characters' : 'character';
  return `${charLength} ${description}`;
});

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));

  return useDateFormat(date, 'DD.MM.YYYY / HH:mm');
});

// use reactive variables for Modal
const modal = reactive({
  deleteNote: false,
});
</script>
