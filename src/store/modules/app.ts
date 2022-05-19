/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-17 17:32:04
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-17 17:59:26
 * @Description:
 */
import { defineStore } from "pinia";
interface AppState {
  collapsed: boolean;
}
export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    collapsed: false,
  }),
  getters: {
    getCollapsed(): boolean {
      return this.collapsed;
    },
  },
  actions: {
    setCollapsed(collapsed: boolean): void {
      this.collapsed = collapsed;
    },
  },
});
