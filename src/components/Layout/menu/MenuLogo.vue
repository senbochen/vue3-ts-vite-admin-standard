<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-17 14:45:27
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-17 18:14:34
 * @Description: 
-->
<template>
  <div class="flex items-center justify-center h-10 m-2 bg-gray-400">
    <img class="h-8 text-center" src="../../../assets/logo.png" />
    <div class="ml-2 text-white truncate md:opacity-100" v-if="!collapsed"> {{ title }} </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from "vue";
  import { useAppStore } from "@/store/modules/app";
  const appStore = useAppStore();
  let collapsed = computed(() => appStore.collapsed);
  const { VITE_APP_TITLE: title } = import.meta.env;
</script>
<style lang="less" scoped></style>
