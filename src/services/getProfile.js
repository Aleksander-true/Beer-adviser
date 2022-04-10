import { useUserStore } from "@/stores/user";
import { USER_DATA_URL } from "../constants";
import { api } from "./api";

async function getProfile() {
  const userStore = useUserStore();
  const user = userStore.user;
  const apiResponse = await api.get({ url: USER_DATA_URL });
  console.log("apiRequest", apiResponse);
  if (apiResponse.isSuccess) {
    const data = await apiResponse.response.json();
    const avaterImgUrl = data.avatar;
    const checkAvatar = await api.get({ url: avaterImgUrl });
    console.log("checkAvatar.response", checkAvatar?.response);
    if (checkAvatar.isSuccess) {
      user.rawData = data;
    } else {
      console.log("try another profile");
      setInterval(getProfile, 1000);
    }
  }
}

export { getProfile };
