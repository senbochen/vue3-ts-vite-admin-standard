/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-18 15:49:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-18 16:55:18
 * @Description:
 */
import { resolve } from "path";
export function getLessVarGenerate() {
  return {
    hack: `true;@import (reference) "${resolve("src/styles/less/config.less")}";`,
    // namespace: "dg-Admin",
  };
}
