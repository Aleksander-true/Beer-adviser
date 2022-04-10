import { useBeerStore } from "@/stores/beers";
import handleHttpErrors from "./handleHttpErrors";

async function updateBeer() {
  const beerHistory = useBeerStore();
  try {
    const request = await fetch(
      "https://random-data-api.com/api/beer/random_beer"
    );
    if (request.status == 200) {
      const data = await request.json();
      beerHistory.$patch({ beer: { descp: data } });
    } else {
      handleHttpErrors(request);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}

export { updateBeer };
