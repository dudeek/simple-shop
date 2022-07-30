<script lang="ts">
import { RouterLink } from "vue-router";
import dummyLogo from "@/assets/dummy-logo.vue";
</script>

<template>
  <nav class="c-navbar">
    <div class="c-navbar__logo">
      <dummy-logo />
    </div>
    <div class="c-navbar__links">
      <RouterLink to="/" class="c-navbar__link">Home</RouterLink>
      <RouterLink to="/shop" class="c-navbar__link">Shop</RouterLink>
      <RouterLink to="/contact" class="c-navbar__link">Contact</RouterLink>
      <RouterLink to="/help" class="c-navbar__link">Help</RouterLink>
    </div>
    <div></div>
  </nav>
</template>

<style lang="scss" scoped>
.c-navbar {
  display: flex;

  &__links {
    display: flex;
    gap: 2rem;
  }

  &__link {
    text-decoration: none;
  }
}
</style>
