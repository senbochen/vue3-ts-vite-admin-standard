<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 15:08:18
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-18 18:07:41
 * @Description: 
-->
<template>
  <a-layout :class="prefixCls">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <LayoutMenu />
    </a-layout-sider>
    <a-layout>
      <LayoutHeader />

      <LayoutContent />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
  import LayoutMenu from "./menu/index.vue";
  import LayoutHeader from "./header/index.vue";
  import LayoutContent from "./content/index.vue";
  import { defineComponent, ref, watch, computed } from "vue";
  import { useAppStore } from "@/store/modules/app";
  import { useDesign } from "@/hooks/web/useDesign";
  export default defineComponent({
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutMenu,
    },
    setup() {
      const { prefixCls } = useDesign("default-layout");
      const appStore = useAppStore();
      let selectedKeys = ref<string[]>(["1"]);
      let collapsed = computed(() => appStore.collapsed);
      return {
        // menuData,
        collapsed,
        selectedKeys,
        prefixCls,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-default-layout";
  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    flex-direction: column;
  }
</style>
