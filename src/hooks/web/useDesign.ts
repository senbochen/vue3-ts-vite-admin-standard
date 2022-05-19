/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-18 10:34:52
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-18 14:53:28
 * @Description:
 */
import { inject } from "vue";
import type { Provider } from "#/app";
export function useDesign(scope: string) {
  const values = inject("context") as Provider;

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  };
}
