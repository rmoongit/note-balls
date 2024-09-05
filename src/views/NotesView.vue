<template>
    <div class="main">
        <NoteField @text-value="handleTextValue" @add-new-note="handleAddNote" />
        <NoteItem v-for="note in notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import NoteField from '@/components/NoteField.vue';
import NoteItem from '@/components/NoteItem.vue';

import { ref } from 'vue';

const textValue = ref('');
const notes = ref([
    {
        id: 1,
        text: 'lorem test lorem test',
    },
]);

const handleTextValue = (newValue) => {
    textValue.value = newValue;
};

const handleAddNote = () => {
    const currentDate = new Date().getTime();
    const id = currentDate.toString();

    const createNote = {
        id: id,
        text: textValue.value,
    };

    notes.value.unshift(createNote);
};
</script>

<style scoped></style>
