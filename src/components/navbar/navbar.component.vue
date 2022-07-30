<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import dummyLogo from '@/assets/icons/dummy-logo.vue';
import shoppingBag from '@/assets/icons/shopping-bag-logo.vue';
import { navbarLinks } from '@/helpers/variables';
import { useShopStore } from '@/stores/shop';
import ArrowDownIcon from '../../assets/icons/arrow-down.icon.vue';

const store = useShopStore();

const itemsCounter = computed((): number => store.itemsCounter);

</script>

<template>
  <nav class="c-navbar">
    <div class="c-navbar__logo">
      <dummy-logo />
    </div>
    <div class="c-navbar__links">
      <RouterLink v-for="link in navbarLinks"
                  :key="link.url"
                  :to="link.url"
                  class="c-navbar__links--static">
        {{ link.label }}            
      </RouterLink>
    </div>
    
    <div class="c-navbar__account">
      Account
      <arrow-down-icon />
    </div>
    <div class="c-navbar__summary">
      <shopping-bag class="c-navbar__shopping-icon" />
      {{ itemsCounter }} items
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.c-navbar {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  border-bottom: .1rem solid var(--grey-200);
  padding: 1rem 2rem;
  height: 10rem;

  &__logo {
    grid-column: 1 / 2;
  }

  &__links {
    grid-column: 4/7;
    display:flex;
    justify-content: space-between;

    &--static {
      text-decoration: none;
      font-size: 1.6rem;
      color: var(--black-700);
    }
  }

  &__account {
    grid-column: 11/12;
    color: var(--black-700);
    font-size: 1.6rem;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
  }

  &__summary {
    grid-column: 12/13;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    font-size: 1.6rem;
    color: var(--black-700);
  }

  &__shopping-icon {
    width: 2rem;
    height: auto;
  }
}
</style>
