/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-17 16:25:27
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-17 16:26:57
 * @Description:
 */
export function getAppEnv() {
  const ENV = import.meta.env.DEV ? "dev" : "prod";
}
