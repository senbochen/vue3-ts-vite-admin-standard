/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 15:42:07
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-17 10:55:53
 * @Description:
 */
const modules = import.meta.globEager("./modules/**/*.ts");

const routeModuleList: any = [];
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
var a = 1;
export const basicRoutes = [
  {
    path: "/",
    name: "Root",
    redirect: "/role/basic",
    meta: {
      title: "Root",
    },
  },
  ...routeModuleList,
];
