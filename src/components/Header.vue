<script setup>
import { RouterLink } from "vue-router";
import Profile from "./Profile.vue";
</script>

<template>
  <header>
    <div class="left-menu">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <nav class="nav">
        <RouterLink to="/">Your beer </RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <Profile />
  </header>
</template>

<style>
@import "@/assets/base.css";
header {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.left-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav {
  display: flex;
  gap: 3rem;
}

.nav a {
  position: relative;
  text-decoration: none;
  color: var(--color-text-light);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.5s;
}

.nav a.router-link-active {
  color: var(--color-beer-pale-gold);
}

.nav a:hover {
  opacity: 0.7;
}

.nav a.router-link-active::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  height: 3px;
  width: 0%;
  background-color: var(--color-beer-pale-gold);
  animation: underline 0.3s forwards;
}

.logo {
  width: 100px;
}

@keyframes underline {
  100% {
    width: 100%;
  }
}
</style>
