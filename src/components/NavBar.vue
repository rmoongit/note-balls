<template>
  <nav ref="navBarRef" class="navbar is-dark mb-4 is-family-code" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item is-size-5" href="#">NoteBalls</a>

        <a
          role="button"
          class="navbar-burger has-text-white"
          :class="{ 'is-active': showMobileMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileMenu }">
        <div class="navbar-start">
          <button class="button is-danger is-outlined is-small m-3">Log out</button>
        </div>

        <div class="navbar-end">
          <RouterLink class="navbar-item" active-class="is-active" to="/" @click="showMobileMenu = false"
            >Notes</RouterLink
          >
          <RouterLink class="navbar-item" active-class="is-active" to="/stats" @click="showMobileMenu = false"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const navBarRef = ref(null);
const showMobileMenu = ref(false);

// clicked outside navbar fn
onClickOutside(navBarRef, () => {
  showMobileMenu.value = false;
});
</script>

<style scoped>
@media (max-width: 1023) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
