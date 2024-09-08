<template>
  <div class="note-edit">
    <NoteEditField v-model="modelValue" bg-color="success" placeholder="Change text & save it" label="Edit Note">
      <template #buttons>
        <button
          class="button has-background-white has-text-success is-size-6 is-family-code mr-2"
          @click="$router.push('/')"
        >
          Cancel
        </button>

        <button class="button has-background-white has-text-grey is-size-6 is-family-code" :disabled="!modelValue">
          Save Note
        </button>
      </template>
    </NoteEditField>
  </div>
</template>

<script setup>
import NoteEditField from '@/components/NoteEditField.vue';
import { ref } from 'vue';

const modelValue = ref('');
</script>
