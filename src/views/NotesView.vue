<template>
  <div class="main">
    <NoteEditField v-model="modelValue" :value="modelValue">
      <template #buttons>
        <button
          class="button has-background-white has-text-dark is-size-7 is-family-code"
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

const storeNotes = useNotesStore();

const modelValue = ref('');

// add New note
const addNewNote = () => {
  storeNotes.addNote(modelValue.value);
  modelValue.value = '';
};
</script>

<style scoped></style>
