/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 14:03:55
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-18 17:40:25
 * @Description:
 */
import { ConfigEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { loadEnv } from "vite";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { getLessVarGenerate } from "./build/lessVarGenerate";
import { createHtmlPlugin } from "vite-plugin-html";

export default ({ command, mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    resolve: {
      alias: {
        "#": resolve(__dirname, "types"),
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: getLessVarGenerate(),
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
    ],
  };
};
