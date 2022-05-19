/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-17 17:30:43
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-17 18:08:56
 * @Description:
 *
 */
import { createPinia } from "pinia";

const store = createPinia();
export function setupStore(app: any) {
  app.use(store);
}
export { store };
