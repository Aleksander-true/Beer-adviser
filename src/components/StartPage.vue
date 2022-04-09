<script setup>
import { useBeerStore } from "@/stores/beers";
import { updateBeer } from "../services/updateBeer";

const beerHistory = useBeerStore();
const beer = beerHistory.beer;
</script>

<template>
  <div v-if="!beer.descp.name" class="start-page__wrapper">
    <button @click="updateBeer" class="advise-btn">Advise</button>
  </div>
  <div v-else class="beer__wrapper">
    <div class="beer__alc">Alc: {{ beer.descp.alcohol }}</div>
    <div class="beer__title">"{{ beer.descp.name }}"</div>
    <div class="beer__sub-title">{{ beer.descp.brand }}</div>

    <div class="beer__item">
      <span class="beer__item_legend">Style: </span>{{ beer.descp.style }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Bitterness: </span>{{ beer.descp.blg }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Hop variety: </span>{{ beer.descp.hop }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Yeast: </span>{{ beer.descp.yeast }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Malts: </span>
      {{ beer.descp.malts }}
    </div>

    <button @click="updateBeer" class="another-beer-btn">Another Beer</button>
  </div>
</template>

<style scoped>
.start-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.advise-btn {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;

  background-color: #a52a2a7b;
  border: none;

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

.beer__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  padding: 2rem;
  min-width: max-content;
  width: 500px;
  border: 3px #ccc solid;
  border-radius: 15px;
}

.beer__title {
  color: var(--color-beer-pale-gold);
  font-size: 3rem;
  align-self: center;
}

.beer__sub-title {
  font-size: 1.5rem;
  font-style: italic;
  align-self: center;
  margin-bottom: 2rem;
}

.beer__item {
  font-size: 1.2rem;
}

.beer__item::after {
  content: "";
  display: block;
  height: 2px;
  background-color: #cccccc99;
}
.beer__item_legend {
  font-weight: bold;
  margin-right: 0.5rem;
}

.beer__alc {
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
