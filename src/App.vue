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
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
