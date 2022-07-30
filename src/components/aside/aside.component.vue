<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="c-aside">
    <span class="c-aside__title">{{ title }}</span>
    <div class="c-aside__image" />
    <div>
      <span>Kod rabatowy:</span>
      <div>
        <input>
        <button>ELO</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-aside {
  padding: 2rem;

  &__image {
    background-color: red;
  }
}
</style>
