/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 15:49:58
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-16 18:20:53
 * @Description:
 */
// import { Layout } from "ant-design-vue";
import { LAYOUT } from "@/router/routes/constant";

const user = {
  path: "/user",
  name: "User",
  component: LAYOUT,
  redirect: "/user/basic",
  meta: {
    orderNo: 1,
    icon: "ion:layers-outline",
    title: "用户管理",
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: "basic",
      name: "UserBasic",
      component: () => import("@/views/modules/user/index.vue"),
      meta: {
        icon: "ion:layers-outline",
        title: "用户管理",
        hideMenu: true,
      },
    },
  ],
};

export default user;
