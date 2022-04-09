<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

body {
  color: var(--color-text-light);
  overflow-x: hidden;
}

main {
  min-height: 100%;
}

button {
  cursor: pointer;
}

#app {
  display: grid;
  grid-template-rows: 100px auto;
  width: 100%;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
