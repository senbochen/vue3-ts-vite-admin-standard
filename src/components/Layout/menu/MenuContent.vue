<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-17 16:42:52
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-18 18:08:16
 * @Description: 
-->
<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item v-for="(item, index) in menuData" :key="index">
      <template #icon>
        <component :is="item.icon"></component>
      </template>
      <router-link :to="item.path">
        <span>{{ item.name }}</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
  import { ref, defineComponent, computed } from "vue";
  import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons-vue";
  // import { useAppStore } from "@/store/modules/app";

  export default defineComponent({
    name: "MenuContent",
    setup() {
      let menuData = ref([
        {
          name: "user",
          icon: UserOutlined,
          path: "/user",
        },
        {
          name: "role",
          icon: VideoCameraOutlined,
          path: "/role",
        },
      ]);
      const selectedKeys = ["1"];

      // const appStore = useAppStore();
      // let collapsed = computed(() => appStore.collapsed);
      return {
        menuData,
        selectedKeys,
        // collapsed,
      };
    },
  });
</script>
<style lang="less" scoped></style>
