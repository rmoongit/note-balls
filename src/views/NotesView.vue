<template>
  <div class="main">
    <NoteField @text-value="updateText" @add-new-note="addNewNote" />
    <NoteItem v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import NoteField from '@/components/NoteField.vue';
import NoteItem from '@/components/NoteItem.vue';

import { ref } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';

const storeNotes = useNotesStore();

const fieldValue = ref('');

// update text value
const updateText = (newValue) => {
  fieldValue.value = newValue;
};

// add New note
const addNewNote = () => {
  storeNotes.addNote(fieldValue.value);
};
</script>

<style scoped></style>
