// Pinia
import useSetDataStore from "@/stores/setData";
import useSiteDataStore from "@/stores/siteData";
import useSiteGroupDataStore from "@/stores/siteGroupData";
import useStatusDataStore from "@/stores/statusData";

export const setStore = () => useSetDataStore();
export const siteStore = () => useSiteDataStore();
export const siteGroupStore = () => useSiteGroupDataStore();
export const statusStore = () => useStatusDataStore();
