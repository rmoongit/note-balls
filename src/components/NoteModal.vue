<template>
  <div class="modal is-active px-4">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p>Are you sure you want to delete this note?</p>
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" @click="closeModal">Cancel</button>
          <button class="button is-danger has-text-white">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

// Close modal fn
const closeModal = () => {
  emit('update:modelValue', false);
};

// Outside click to close
const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

// Keyboard action on close
const handleKeyboard = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

// Add listener onMounted hook
onMounted(() => {
  document.addEventListener('keyup', handleKeyboard);
});

// Remove listener UnMountedHook
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard);
});
</script>
