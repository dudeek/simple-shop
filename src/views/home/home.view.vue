<script setup lang="ts">
import mainTemplate from '@/views/main-template/main-template.view.vue';
import cInput from '@/components/input/input.component.vue';
</script>

<template>
  <main-template />
  <div>Home</div>
  <c-input label="Kod rabatowy"
           :show-approve="true" />
</template>

<style lang="scss" scoped></style>
