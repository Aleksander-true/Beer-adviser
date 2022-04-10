<script setup>
import { useBeerStore } from "@/stores/beers";

const beerHistory = useBeerStore();
const beer = beerHistory.beer;
</script>

<template>
  <div class="beer-label">
    <div class="alc">Alc: {{ beer.descp.alcohol }}</div>
    <div class="title">"{{ beer.descp.name }}"</div>
    <div class="sub-title">{{ beer.descp.brand }}</div>

    <div class="descp">
      <span class="descp-label">Style: </span>{{ beer.descp.style }}
    </div>
    <div class="descp">
      <span class="descp-label">Bitterness: </span>{{ beer.descp.blg }}
    </div>
    <div class="descp">
      <span class="descp-label">Hop variety: </span>{{ beer.descp.hop }}
    </div>
    <div class="descp">
      <span class="descp-label">Yeast: </span>{{ beer.descp.yeast }}
    </div>
    <div class="descp">
      <span class="descp-label">Malts: </span>
      {{ beer.descp.malts }}
    </div>
  </div>
</template>

<style scoped>
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

.descp {
  font-size: 1.2rem;
}

.descp::after {
  content: "";
  display: block;
  height: 2px;
  background-color: #76767645;
}
.descp-label {
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
