<template>
  <div class="main">
    <NoteEditField ref="noteEditRef" v-model="modelValue" :value="modelValue">
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

    <NoteItem v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import NoteEditField from '@/components/NoteEditField.vue';
import NoteItem from '@/components/NoteItem.vue';

import { ref } from 'vue';
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

// use fn from "use folder"
useWatchCharacters(modelValue);
</script>

<style scoped></style>
