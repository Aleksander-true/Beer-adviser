import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useBeerStore = defineStore("beerStore", () => {
  const beers = reactive([]);

  const lastBeer = computed(() => beers[beers.length - 1]);

  function pushTpBeerStore(beer) {
    beers.push(beer);
  }

  return { beers, pushTpBeerStore, lastBeer };
});

/*
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
*/
