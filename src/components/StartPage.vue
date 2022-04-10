<script setup>
import { useBeerStore } from "@/stores/beers";
import { updateBeer } from "../services/updateBeer";
import BeerLabel from "./BeerLabel.vue";

const beerHistory = useBeerStore();
const beer = beerHistory.beer;
</script>

<template>
  <div v-if="!beer.descp.name" class="wrapper">
    <button @click="updateBeer" class="advise-btn">Advise</button>
  </div>
  <div v-else class="beer-wrapper">
    <BeerLabel />
    <button @click="updateBeer" class="another-beer-btn">Another Beer</button>
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
  width: 200px;
  height: 200px;
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
  background-color: #a52a2a;
}

.advise-btn:hover:before,
.advise-btn:focus:before,
.advise-btn:active:before {
  animation: ripple-out forwards 0.7s;
}

@keyframes ripple-out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
}

.beer-label {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-width: max-content;
  width: 500px;
  border: 3px #ccc solid;
  border-radius: 15px;
}

.title {
  color: var(--color-beer-pale-gold);
  font-size: 3rem;
  align-self: center;
}

.sub-title {
  font-size: 1.5rem;
  font-style: italic;
  align-self: center;
  margin-bottom: 2rem;
}

.descr {
  font-size: 1.2rem;
}

.descr::after {
  content: "";
  display: block;
  height: 2px;
  background-color: #cccccc99;
}
.descr-label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.alc {
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: 700;
}

.another-beer-btn {
  position: relative;
  align-self: center;
  width: fit-content;
  border-radius: 25px;
  padding: 1rem;
  margin-top: 3rem;
  background-color: #a52a2a7b;
  border: none;
  color: var(--color-text-light);
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  transition: all 700ms ease;
}

.another-beer-btn:hover {
  background-color: #a52a2a;
}
</style>
