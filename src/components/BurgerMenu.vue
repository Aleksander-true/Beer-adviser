<script setup>
import { RouterLink } from "vue-router";
import { HOME_LINK, ABOUT_LINK } from "./../constants";
import { ref } from "vue";

const isOpen = ref(false);

function togleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="burger-menu" :class="{ open: isOpen }" @click="togleMenu">
    <span class="burger-menu__item"></span>
    <span class="burger-menu__item"></span>
    <span class="burger-menu__item"></span>
  </div>

  <nav class="burger-nav" :class="{ open: isOpen }">
    <div class="burger-logo">
      <span>BEER</span>
      <img alt="logo" src="@/assets/logo.svg" />
      <span>ADVISER</span>
    </div>
    <RouterLink to="/">{{ HOME_LINK }}</RouterLink>
    <RouterLink to="/about">{{ ABOUT_LINK }}</RouterLink>
  </nav>
</template>

<style>
.burger-nav {
  position: fixed;
  top: 0;
  left: -16rem;
  display: none;
  flex-direction: column;
  gap: 2rem;
  width: 16rem;
  padding: 5rem 1rem 2rem;
  background-color: var(--color-background-sidebar);
  border-radius: 0 15px 15px 0;
  transition: left 0.7s ease-in-out;
  z-index: 1;
}

.burger-nav.open {
  left: 0;
}

.burger-nav a {
  position: relative;
  text-decoration: none;
  color: var(--color-text-light);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.5s;
}

.burger-nav a.router-link-active {
  color: var(--color-beer-pale-gold);
}

.burger-nav a:hover {
  opacity: 0.7;
}

.burger-logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}

.burger-logo img {
  width: 3rem;
}

.burger-menu {
  display: none;
  z-index: 10;
}

.burger-menu__item {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}
.burger-menu__item:first-child {
  transform-origin: 0% 0%;
}

.burger-menu__item:nth-last-child(2) {
  transform-origin: 0% 100%;
}

.open .burger-menu__item {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -4px);
  background: #ccc;
}

.open .burger-menu__item:nth-last-child(2) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.open .burger-menu__item:nth-last-child(1) {
  transform: rotate(-45deg) translate(0, -2px);
}

@media (max-width: 550px) {
  .burger-nav {
    display: flex;
  }
}
</style>
