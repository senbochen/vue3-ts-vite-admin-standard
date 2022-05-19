/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 14:03:55
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-18 17:50:02
 * @Description:
 */
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "@/styles/less/index.less";
import "@/styles";
import { createApp } from "vue";

import { setupRouter } from "@/router";
import { setupStore } from "@/store";

const app = createApp(App);
setupRouter(app);
setupStore(app);
app.mount("#app");
