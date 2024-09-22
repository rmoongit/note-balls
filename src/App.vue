<template>
  <NavBar />
  <main>
    <Wrapper>
      <RouterView />
    </Wrapper>
  </main>
</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue';
import NavBar from '@/components/NavBar.vue';
import { onMounted } from 'vue';
import { useNotesStore } from './stores/storeNotes';

const storeNotes = useNotesStore();

// onMounted main app function
onMounted(() => {
  storeNotes.getNotes();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
