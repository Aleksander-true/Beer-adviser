<script setup>
import { useBeerStore } from "@/stores/beers";
import { updateBeer } from "../services/updateBeer";
import BeerLabel from "./BeerLabel.vue";
import { ADVISE_BEER_BTN_TEXT, UPDATE_BEER_BTN_TEXT } from "./../constants";

const beerHistory = useBeerStore();
const beer = beerHistory.beer;
</script>

<template>
  <div v-if="!beer.descp" class="wrapper">
    <button @click="updateBeer" class="advise-btn">
      {{ ADVISE_BEER_BTN_TEXT }}
    </button>
  </div>
  <div v-else-if="beer.descp === 'loading'" class="wrapper">
    <div class="spinner"></div>
  </div>
  <div v-else class="beer-wrapper">
    <BeerLabel />
    <button @click="updateBeer" class="another-beer-btn">
      {{ UPDATE_BEER_BTN_TEXT }}
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.beer-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
}
.advise-btn {
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background-color: var(--button-primary-color);
  color: var(--color-text-light);
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;

  position: relative;
  transition: all 700ms ease;
}

.advise-btn:before {
  content: "";
  position: absolute;
  border: #a22828 solid 3px;
  border-radius: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.advise-btn:hover {
  background-color: var(--button-primary-hover-color);
}

.advise-btn:hover:before,
.advise-btn:focus:before,
.advise-btn:active:before {
  animation: ripple-out forwards 0.7s;
}

.loading-text {
  font-size: 2rem;
  font-weight: 700;
}

@keyframes ripple-out {
  100% {
    top: -1rem;
    right: -1rem;
    bottom: -1rem;
    left: -1rem;
    opacity: 0;
  }
}

.another-beer-btn {
  position: relative;
  align-self: center;
  width: fit-content;
  border-radius: 25px;
  padding: 1rem;
  margin-top: 3rem;
  background-color: var(--button-primary-color);
  border: none;
  color: var(--color-text-light);
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  transition: all 0.7s ease;
}

.another-beer-btn:hover {
  background-color: var(--button-primary-hover-color);
}
</style>
