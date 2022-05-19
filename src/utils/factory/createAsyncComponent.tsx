/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 17:07:42
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-16 17:23:03
 * @Description:
 */
import { defineAsyncComponent } from "vue";
import { Spin } from "ant-design-vue";

export function createAsyncComponent(loader: any, options: any) {
  const { size = "small", delay = 100, timeout = 30000, loading = false, retry = true } = options;
  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,
    timeout,
    delay,
    onError: !retry
      ? () => {}
      : (error, retry, fail, attempts) => {
          if (error.message.match(/fetch/) && attempts <= 3) {
            retry();
          } else {
            fail();
          }
        },
  });
}
