import { defineStore } from "pinia";
import defaultGroupShortCut from "@/assets/defaultGroupShortCut";

const useSiteDataStore = defineStore("siteGroupData", {
  state: () => {
    return {
      // 捷径数据
      shortcutGroupData: defaultGroupShortCut,
    };
  },
  actions: {
    setShortcutGroupData(value) {
      this.shortcutGroupData = value;
    },
  },
  // 开启数据持久化
  persist: {
    key: "siteGroupData",
    storage: window.localStorage,
  },
});

export default useSiteDataStore;
