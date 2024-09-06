<template>
  <div class="note-field p-4 has-background-dark mb-4">
    <div class="field">
      <label class="label has-text-white is-family-code">Enjoy with your notes</label>
      <div class="control">
        <textarea
          ref="newNoteRef"
          :value="props.modelValue"
          class="textarea is-family-code"
          placeholder="Add a new note here..."
          @input="updateText"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const newNoteRef = ref(null);

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

// update text
const updateText = (event) => {
  emit('update:modelValue', event.target.value);

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
