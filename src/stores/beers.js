import { defineStore } from "pinia";
import { reactive } from "vue";

export const useBeerStore = defineStore("beerStore", () => {
  const beer = reactive({ descp: null });
  return { beer };
});
