import { useBeerStore } from "@/stores/beers";

async function updateBeer() {
  const beerHistory = useBeerStore();
  try {
    const request = await fetch(
      "https://random-data-api.com/api/beer/random_beer"
    );
    if (request.ok) {
      const data = await request.json();
      beerHistory.$patch({ beer: { descp: data } });
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}

export { updateBeer };
