<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a class="navbar-item is-size-5 is-family-code" href="#">NoteBalls</a>

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

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-end">
          <RouterLink class="navbar-item" active-class="is-active" to="/"
            >Notes</RouterLink
          >
          <RouterLink class="navbar-item" active-class="is-active" to="/stats"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(false);
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
