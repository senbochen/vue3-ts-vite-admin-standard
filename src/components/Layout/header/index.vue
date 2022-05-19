<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-18 17:53:04
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-19 10:30:27
 * @Description: 
-->
<template>
  <a-layout-header :class="prefixCls">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </a-layout-header>
</template>
<script lang="ts">
  import { useAppStore } from "@/store/modules/app";
  import { ref, watch, defineComponent } from "vue";
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from "@ant-design/icons-vue";
  import { useDesign } from "@/hooks/web/useDesign";
  export default defineComponent({
    name: "LayoutHeader",
    components: {
      UserOutlined,
      VideoCameraOutlined,
      UploadOutlined,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
    },
    setup() {
      let { prefixCls } = useDesign("default-layout-header");
      let collapsed = ref<boolean>(false);
      const appStore = useAppStore();
      watch(
        collapsed,
        (value) => {
          appStore.setCollapsed(value);
        },
        { immediate: true }
      );
      return {
        prefixCls,
        collapsed,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-default-layout-header";
  .@{prefix-cls} {
    background: @header-bg;
    padding: @header-pdding;
    height: @header-height;
    line-height: @header-height;
  }
</style>
