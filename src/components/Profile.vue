<script setup>
import { onMounted, ref } from "vue";
import { useBeerStore } from "@/stores/beers";
import { useUserStore } from "@/stores/user";
import { getProfile } from "../services/getProfile";
import { updateBeer } from "../services/updateBeer";

const beerStore = useBeerStore();
const beer = beerStore.beer;

const userStore = useUserStore();
const user = userStore.user;

const isOpen = ref(false);

onMounted(() => getProfile());

function toogleSidebar() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="avatar__wraper" @click="toogleSidebar">
    <span class="avatar__name">{{ user.name }}</span>
    <img class="avatar__img" v-bind:src="user.avatar" alt="avatar" />
  </div>

  <div
    :class="{ open: isOpen }"
    class="sidebar__backspace"
    @click="toogleSidebar"
  ></div>
  <div :class="{ open: isOpen }" class="sidebar">
    <div class="sidebar__title">Profile</div>
    <img class="sidebar__photo" v-bind:src="user.avatar" alt="avatar" />
    <div class="sidebar__name">{{ user.fullName }}</div>
    <div class="sidebar__item">Position: {{ user.position }}</div>
    <div class="sidebar__birthday">Birthday: {{ user.birth }}</div>
    <div class="sidebar__age">Age: {{ user.age }}</div>
    <div class="sidebar__beer">
      <span>Beer: </span>
      <span v-if="beer.descp.name">{{ beer.descp.name }}</span>
      <button v-else class="advise-beer-btn" @click="updateBeer">
        Click to advise
      </button>
    </div>
  </div>
</template>

<style>
.avatar__wraper {
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-end;
  cursor: pointer;
}

.avatar__name {
  font-size: 1.5rem;
  font-style: italic;
}

.avatar__img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--color-background-light);
}

.sidebar {
  position: fixed;
  display: grid;
  grid-template-areas:
    "title photo"
    "name photo"
    "age photo"
    "birthday photo"
    "item item"
    "beer beer";
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  width: 400px;
  padding: 2rem;
  border-radius: 15px 0 0 15px;
  top: 150px;
  right: -400px;
  transition: right 0.7s ease-in-out;
  background-color: #2a2a2a;
  font-size: 1.2rem;
  z-index: 100;
}

.sidebar.open {
  right: 0;
}

.sidebar__backspace {
  visibility: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #00000000;
  transition: background-color 0.5s;
  z-index: 99;
}

.sidebar__backspace.open {
  visibility: visible;
  background-color: #000000c3;
}

.sidebar__photo {
  width: 100%;
  text-align: end;
  grid-area: photo;
  border-radius: 15px;
  background-color: var(--color-background-light);
}

.sidebar__name {
  font-size: 1.5rem;
  grid-area: name;
  line-height: 1.6rem;
  margin-bottom: 0.5rem;
}

.sidebar__title {
  grid-area: title;
  color: var(--color-beer-pale-gold);
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}

.sidebar__item {
  grid-area: item;
}

.sidebar__age {
  grid-area: age;
}

.sidebar__beer {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 2px #fff solid;
  grid-area: beer;
  font-size: 1.5rem;
  font-weight: 700;
}

.advise-beer-btn {
  margin-left: 2rem;
  background-color: var(--button-primary-color);
  color: var(--color-text-light);
  border-radius: 15px;
  padding: 0.5rem;
  font-size: inherit;
}

.advise-beer-btn:hover {
  background-color: var(--button-primary-hover-color);
}
</style>
