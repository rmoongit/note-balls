<template>
    <div class="main">
        <TextField @text-value="handleTextValue" @add-new-note="handleAddNote" />
        <CardItem :notes="notes" />
    </div>
</template>

<script setup>
import TextField from '@/components/TextField.vue';
import CardItem from '@/components/CardItem.vue';

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

    console.log(createNote);

    notes.value.unshift(createNote);
};
</script>

<style scoped></style>
