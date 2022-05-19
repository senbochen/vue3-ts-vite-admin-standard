/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 15:37:28
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-16 18:19:24
 * @Description:
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes";

console.log("basicRoutes  ", basicRoutes);

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: any) {
  app.use(router);
}
