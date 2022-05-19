<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-16 17:27:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-16 17:41:01
 * @Description: 
-->
<template>
  <div>
    <PageLayout />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import PageLayout from "@/components/Layout/page/index.vue";
  export default defineComponent({
    name: "DefaultLayout",
    components: { PageLayout },
    setup() {
      return {};
    },
  });
</script>
<style lang="less" scoped></style>
