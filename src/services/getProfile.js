import {
  USER_DATA_URL,
  ATTEMTS_GETING_USER_DATA,
  TIMEOUT_API_REQUEST_MS,
} from "../constants";
import { useUserStore } from "@/stores/user";
import { api } from "./api";

async function getProfile(attemts = ATTEMTS_GETING_USER_DATA) {
  if (attemts <= 0) {
    return false;
  }
  const userStore = useUserStore();
  const apiResponse = await api.get(USER_DATA_URL);

  if (apiResponse.isSuccess) {
    const data = await apiResponse.response.json();
    const avaterImgUrl = data.avatar;
    const avatarImg = await api.get(avaterImgUrl);

    if (avatarImg.isSuccess) {
      userStore.$patch({ user: { rawData: data } });
    } else {
      setTimeout(() => getProfile(attemts - 1), TIMEOUT_API_REQUEST_MS);
    }
  }
}

export { getProfile };
