<template>
  <div class="note-field p-4 mb-4" :class="`has-background-${props.bgColor}`">
    <div class="field">
      <label class="label has-text-white is-family-code">{{ props.label }}</label>
      <div class="control">
        <textarea
          ref="textreaRef"
          v-auto-focus
          :value="props.modelValue"
          class="textarea is-family-code"
          :placeholder="props.placeholder"
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
import { ref, defineEmits, defineExpose } from 'vue';
import { vAutoFocus } from '@/directives/vAutoFocus';

const textreaRef = ref(null);

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },

  bgColor: {
    type: String,
    default: 'dark',
  },

  placeholder: {
    type: String,
    default: 'Add a new note...',
  },

  label: {
    type: String,
    default: 'Enjoy with your notes',
  },
});

// update text
const updateText = (event) => {
  emit('update:modelValue', event.target.value);
};

// focus textarea
const focusTextArea = () => {
  textreaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
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
