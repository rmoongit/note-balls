<template>
  <div class="note-edit">
    <NoteEditField>
      <template #buttons>
        <button class="button has-background-white has-text-dark is-size-7 is-family-code">Edit</button>
      </template>
    </NoteEditField>
  </div>
</template>

<script setup>
import NoteEditField from '@/components/NoteEditField.vue';
</script>
