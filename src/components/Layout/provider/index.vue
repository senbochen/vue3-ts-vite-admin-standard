<script lang="ts">
  import { defineComponent, provide } from "vue";
  export default defineComponent({
    name: "Provider",
    components: {},
    setup(props, { slots }) {
      provide("context", {
        prefixCls: import.meta.env.VITE_APP_PREFIXCLS || "dg-Admin",
        isMobile: false,
      });
      return () => slots.default?.();
    },
  });
</script>
