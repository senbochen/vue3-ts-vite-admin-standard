/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 15:49:58
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-16 18:20:42
 * @Description:
 */
// import { Layout } from "ant-design-vue";
import { LAYOUT } from "@/router/routes/constant";

const role = {
  path: "/role",
  name: "Role",
  component: LAYOUT,
  redirect: "/role/basic",
  meta: {
    orderNo: 2,
    icon: "ion:layers-outline",
    title: "角色管理",
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: "basic",
      name: "RoleBasic",
      component: () => import("@/views/modules/role/index.vue"),
      meta: {
        icon: "ion:layers-outline",
        title: "角色管理",
        hideMenu: true,
      },
    },
  ],
};

export default role;
