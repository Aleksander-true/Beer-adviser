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
  border: none;
  outline: none;
}

#app {
  display: grid;
  grid-template-rows: 6rem auto;
  width: 100%;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (max-width: 425px) {
  #app {
    padding: 0.5rem;
    grid-template-rows: 4rem auto;
  }
}

.spinner {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.spinner:after {
  animation: changeContent 0.8s linear infinite;
  display: block;
  content: "⠋";
  font-size: 80px;
}

@keyframes changeContent {
  10% {
    content: "⠙";
  }
  20% {
    content: "⠹";
  }
  30% {
    content: "⠸";
  }
  40% {
    content: "⠼";
  }
  50% {
    content: "⠴";
  }
  60% {
    content: "⠦";
  }
  70% {
    content: "⠧";
  }
  80% {
    content: "⠇";
  }
  90% {
    content: "⠏";
  }
}
</style>
