<template>
  <div class="main">
    <NoteField @text-value="updateText" @add-new-note="addNewNote" />
    <NoteItem v-for="note in notes" :key="note.id" :note="note" @delete-note-clicked="deleteNote" />
  </div>
</template>

<script setup>
import NoteField from '@/components/NoteField.vue';
import NoteItem from '@/components/NoteItem.vue';

import { ref } from 'vue';

const textValue = ref('');
const notes = ref([]);

// update text value
const updateText = (newValue) => {
  textValue.value = newValue;
};

// add New note
const addNewNote = () => {
  const currentDate = new Date().getTime();
  const id = currentDate.toString();

  const createNote = {
    id: id,
    text: textValue.value,
  };

  notes.value.unshift(createNote);
};

// delete note by click
const deleteNote = (id) => {
  const filteredArray = notes.value.filter((note) => note.id !== id);

  notes.value = filteredArray;
};
</script>

<style scoped></style>
