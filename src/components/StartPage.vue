<script setup>
import { reactive } from "vue";

const beer = reactive([]);

async function getBeer() {
  try {
    const request = await fetch(
      "https://random-data-api.com/api/beer/random_beer"
    );
    if (request.ok) {
      beer.push(await request.json());
    }
    console.log("beer", beer);
  } catch (err) {
    console.log("Error: ", err);
  }
}
</script>

<template>
  <div v-if="beer.length <= 0" class="start-page__wrapper">
    <button @click="getBeer" class="advise-btn">Advise</button>
  </div>
  <div v-else class="beer__wrapper">
    <div class="beer__alc">Alc: {{ beer[beer.length - 1].alcohol }}</div>
    <div class="beer__title">"{{ beer[beer.length - 1].name }}"</div>
    <div class="beer__sub-title">{{ beer[beer.length - 1].brand }}</div>

    <div class="beer__item">
      <span class="beer__item_legend">Style: </span
      >{{ beer[beer.length - 1].style }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Bitterness: </span
      >{{ beer[beer.length - 1].blg }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Hop variety: </span
      >{{ beer[beer.length - 1].hop }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Yeast: </span
      >{{ beer[beer.length - 1].yeast }}
    </div>
    <div class="beer__item">
      <span class="beer__item_legend">Malts: </span>
      {{ beer[beer.length - 1].malts }}
    </div>
  </div>
</template>

<style scoped>
.advise-btn {
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

.start-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.advise-btn {
  transform: translateZ(0);
  position: relative;
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
  max-width: 400px;
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
  background-color: rgba(204, 204, 204, 0.6);
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
</style>
