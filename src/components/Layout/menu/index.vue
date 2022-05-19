<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-17 10:23:02
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-17 17:12:58
 * @Description: 
-->
<script lang="tsx">
  import { defineComponent, computed, unref } from "vue";
  import MenuLogo from "./MenuLogo.vue";
  import MenuContent from "./MenuContent.vue";
  export default defineComponent({
    name: "LayoutMenu",
    setup(props) {
      const renderMenuHeader = () => {
        return <MenuLogo />;
      };
      const renderMenuContent = () => {
        return <MenuContent />;
      };
      return () => {
        return (
          <>
            {renderMenuHeader()}
            {renderMenuContent()}
          </>
        );
      };
    },
  });
</script>
