<template>
    <div v-for="note in notes" :key="note.id" class="card">
        <div class="card-content">
            <div class="content">
                {{ note.text }}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item has-text-black">Edit</a>
            <a href="#" class="card-footer-item has-text-black">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    notes: {
        type: Object,
        default: () => ({}),
    },
});
</script>
