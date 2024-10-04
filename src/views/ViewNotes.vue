<template>
  <div class="main">
    <NoteEditField ref="noteEditRef" v-model="modelValue">
      <template #buttons>
        <button
          class="button has-background-white has-text-dark is-size-6 is-family-code"
          :disabled="!modelValue"
          @click.prevent="addNewNote"
        >
          Add a new note
        </button>
      </template>
    </NoteEditField>

    <progress v-if="!storeNotes.notesLoaded" class="progress is-small is-danger" max="100" />

    <template v-else>
      <NoteItem v-for="note in storeNotes.notes" :key="note.id" :note="note" />

      <div v-if="!storeNotes.notes.length">
        <p class="is-size-3 has-text-centered has-text-grey-light py-6">The field is empty !</p>
      </div>
    </template>
  </div>
</template>

<script setup>
import NoteEditField from '@/components/NoteEditField.vue';
import NoteItem from '@/components/NoteItem.vue';

import { ref, onMounted } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';

// Store
const storeNotes = useNotesStore();

const modelValue = ref('');
const noteEditRef = ref(null);

// add New note
const addNewNote = () => {
  storeNotes.addNote(modelValue.value);
  modelValue.value = '';

  noteEditRef.value.focusTextArea();
};

// mount
onMounted(() => {
  storeNotes.getNotes();
});

// use fn from "use folder"
useWatchCharacters(modelValue);
</script>

<style scoped></style>
