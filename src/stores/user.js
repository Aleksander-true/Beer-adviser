import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = reactive({ rawData: {} });

  user.name = computed(() => user.rawData?.first_name);
  user.avatar = computed(() => user.rawData?.avatar);

  user.fullName = computed(
    () => `${user.rawData?.first_name} ${user.rawData?.last_name}`
  );
  user.position = computed(() => user.rawData?.employment?.title);

  user.birth = computed(() =>
    new Date(user.rawData?.date_of_birth).toLocaleDateString("en", {
      weekday: "long",
    })
  );

  user.age = computed(
    () =>
      new Date().getFullYear() -
      new Date(user.rawData?.date_of_birth).getFullYear()
  );
  return { user };
});
