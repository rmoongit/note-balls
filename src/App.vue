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
import { useAuthStore } from './stores/storeAuth';

const authStore = useAuthStore();

// onMounted main app function
onMounted(() => {
  authStore.initUser();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
