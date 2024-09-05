<template>
  <div class="note-field p-4 has-background-dark mb-4">
    <div class="field">
      <label class="label has-text-white is-family-code">Enjoy with your notes</label>
      <div class="control">
        <textarea
          ref="newNoteRef"
          v-model="textValue"
          class="textarea is-family-code"
          placeholder="Add a new note here..."
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link has-background-white has-text-dark is-size-7 is-family-code"
          :disabled="!textValue"
          @click.prevent="addNewNote"
        >
          Add a new note
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const textValue = ref('');
const newNoteRef = ref(null);

const emit = defineEmits(['textValue', 'addNewNote']);

const addNewNote = () => {
  emit('textValue', textValue.value);
  emit('addNewNote');
  textValue.value = '';

  newNoteRef.value.focus();
};
</script>

<style scoped>
.note-field {
  border-radius: 0.75rem;
}

textarea:focus-within {
  box-shadow: transparent;
  border-color: transparent;
}
</style>
