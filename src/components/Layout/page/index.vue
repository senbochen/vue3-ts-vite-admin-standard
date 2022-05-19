<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 17:30:37
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-16 17:56:54
 * @Description: 
-->
<template>
  <RouterView>
    <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </template>
  </RouterView>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "PageLayout",
    components: {},
    setup() {
      // const { route } = unref(this);
      // const { path } = route;
      // return {
      //     path
      // };
      return {};
    },
  });
</script>
<style lang="less" scoped></style>
