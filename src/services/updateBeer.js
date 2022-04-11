import { useBeerStore } from "@/stores/beers";
import { BEER_DATA_URL, UPDATE_BEER_ERROR_MESSAGE } from "../constants";
import { api } from "./api";

async function updateBeer() {
  const beerStory = useBeerStore();
  beerStory.$patch({ beer: { descp: "loading" } });
  const apiResponse = await api.get(BEER_DATA_URL);

  console.log("beerStory", beerStory.beer.descp);
  if (apiResponse.isSuccess) {
    const data = await apiResponse.response.json();
    beerStory.$patch({ beer: { descp: data } });
  } else {
    alert(UPDATE_BEER_ERROR_MESSAGE);
  }
}

export { updateBeer };
