<script setup>
import { RouterLink } from "vue-router";
import Profile from "./Profile.vue";
import { HOME_LINK, ABOUT_LINK } from "./../constants";
import BurgerMenu from "./BurgerMenu.vue";
</script>

<template>
  <header>
    <BurgerMenu />
    <div class="menu">
      <img alt="logo" class="logo" src="@/assets/logo.svg" />
      <nav class="nav">
        <RouterLink to="/">{{ HOME_LINK }}</RouterLink>
        <RouterLink to="/about">{{ ABOUT_LINK }}</RouterLink>
      </nav>
    </div>

    <Profile />
  </header>
</template>

<style>
header {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
}

.menu {
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
  height: 6rem;
}

@keyframes underline {
  100% {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .logo {
    height: 5rem;
  }
}

@media (max-width: 550px) {
  .menu {
    display: none;
  }

  .burger-menu {
    display: block;
  }

  .logo {
    display: none;
  }

  .nav {
    gap: 2rem;
    flex-direction: column-reverse;
  }

  .nav a {
    font-size: 1.3rem;
  }

  .nav a.router-link-active::after {
    display: none;
  }
}
</style>
