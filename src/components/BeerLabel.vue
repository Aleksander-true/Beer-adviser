<script setup>
import { useBeerStore } from "@/stores/beers";
import * as CONST from "./../constants";

const beerHistory = useBeerStore();
const beer = beerHistory.beer;
</script>

<template>
  <div class="beer-label">
    <div class="alc">{{ CONST.ALCOHOL_LABEL + beer.descp.alcohol }}</div>
    <div class="title">"{{ beer.descp.name }}"</div>
    <div class="sub-title">{{ beer.descp.brand }}</div>

    <div class="descp">
      <span class="descp-label">{{ CONST.STYLE_LABEL }}</span
      >{{ beer.descp.style }}
    </div>
    <div class="descp">
      <span class="descp-label">{{ CONST.BLG_LABEL }}</span
      >{{ beer.descp.blg }}
    </div>
    <div class="descp">
      <span class="descp-label">{{ CONST.YEAST_LABEL }}</span
      >{{ beer.descp.hop }}
    </div>
    <div class="descp">
      <span class="descp-label">{{ CONST.HOP_LABEL }}</span
      >{{ beer.descp.yeast }}
    </div>
    <div class="descp">
      <span class="descp-label">{{ CONST.MALTS_LABEL }}</span>
      {{ beer.descp.malts }}
    </div>
  </div>
</template>

<style scoped>
.beer-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: max-content;
  max-width: 90%;
  width: 30rem;
  border: 0.2rem #ccc solid;
  border-radius: 15px;
}

.title {
  color: var(--color-beer-pale-gold);
  font-size: 2.5rem;
  line-height: 3rem;
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
  font-weight: 500;
  margin-right: 0.5rem;
  letter-spacing: 0.05rem;
}

.alc {
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .beer-label {
  }
  .title {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

@media (max-width: 425px) {
  .beer-label {
    min-width: min-content;
    max-width: 100%;
    width: 400px;
    padding: 1.5rem;
  }
}

@media (max-width: 375px) {
  .beer-label {
    min-width: min-content;
    max-width: 100%;
    width: 300px;
    padding: 1.5rem;
  }
}
</style>
