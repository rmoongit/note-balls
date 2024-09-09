<template>
  <div class="note-edit">
    <NoteEditField v-model="editContentValue" bg-color="success" placeholder="Change text & save it" label="Edit Note">
      <template #buttons>
        <button
          class="button has-background-white has-text-success is-size-6 is-family-code mr-2"
          @click="$router.push('/')"
        >
          Cancel
        </button>

        <button
          class="button has-background-white has-text-grey is-size-6 is-family-code"
          :disabled="!editContentValue"
          @click="updateContent"
        >
          Save Note
        </button>
      </template>
    </NoteEditField>
  </div>
</template>

<script setup>
import NoteEditField from '@/components/NoteEditField.vue';
import { ref } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';

// Store
const storeNotes = useNotesStore();
const editContentValue = ref('');

// router
const route = useRoute();
const router = useRouter();

// Update edit value content by ID content from store
editContentValue.value = storeNotes.getTextContent(route.params.id) || '';

// update content text from edit note
const updateContent = () => {
  // check length of notes
  if (!storeNotes.$state.notes.length) {
    return;
  }

  storeNotes.updateContentNote(route.params.id, editContentValue.value);
  router.push('/');
};
</script>
