<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import { useBeerStore } from "@/stores/beers";

const beerStore = useBeerStore();
const beer = beerStore.beer;
const user = reactive({
  rawData: {},
});
const isOpen = ref(false);

user.fullName = computed(
  () => `${user.rawData?.first_name} ${user.rawData?.last_name}`
);

user.position = computed(() => user.rawData?.employment?.title);

const dateOptions = {
  weekday: "long",
};
user.birth = computed(() =>
  new Date(user.rawData?.date_of_birth).toLocaleDateString("en", dateOptions)
);

user.age = computed(
  () =>
    new Date().getFullYear() -
    new Date(user.rawData?.date_of_birth).getFullYear()
);

onMounted(() => getProfile());

function toogleSidebar() {
  isOpen.value = !isOpen.value;
}

async function getProfile() {
  try {
    const request = await fetch(
      "https://random-data-api.com/api/users/random_user"
    );
    if (request.ok) {
      user.rawData = await request.json();
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
</script>

<template>
  <div class="avatar__wraper" @click="toogleSidebar">
    <span class="avatar__name">{{ user.rawData?.first_name }}</span>
    <img class="avatar__img" v-bind:src="user.rawData?.avatar" alt="avatar" />
  </div>

  <div :class="{ open: isOpen }" class="sidebar">
    <div class="sidebar__title">Profile</div>
    <img
      class="sidebar__photo"
      v-bind:src="user.rawData?.avatar"
      alt="avatar"
    />
    <div class="sidebar__name">{{ user.fullName }}</div>
    <div class="sidebar__item">Position: {{ user.position }}</div>
    <div class="sidebar__birthday">Birthday: {{ user.birth }}</div>
    <div class="sidebar__age">Age: {{ user.age }}</div>
    <div class="sidebar__beer">Beer: {{ beer.descp.name }}</div>
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
  padding-top: 1rem;
  border-top: 2px #fff solid;
  grid-area: beer;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
