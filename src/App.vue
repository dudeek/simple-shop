<script setup lang="ts">
import { RouterView } from "vue-router";
// import main-template from "@/views/main-template/main-template.view.vue";
import vHome from "@/views/home/home.view.vue";
import dummyLogo from "@/assets/dummy-logo.vue";
</script>

<template>
  <v-home />
  <dummy-logo />
  <RouterView />
</template>

<style scoped lang="scss"></style>
