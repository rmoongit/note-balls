<template>
  <div class="card is-family-code">
    <div class="card-content">
      <div class="content">
        <p class="mb-4">{{ note.text }}</p>
        <div class="has-text-right">
          <small class="has-text-grey-light">{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button class="card-footer-item has-text-black">Edit</button>
      <button class="card-footer-item has-text-black" @click="storeNotes.deleteNote(note.id)">Delete</button>
    </footer>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';

const storeNotes = useNotesStore();

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
</script>
