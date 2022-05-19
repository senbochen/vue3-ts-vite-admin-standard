<!--
 * @Author: MrAlenZhong
 * @Date: 2022-05-19 08:47:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-05-19 08:51:09
 * @Description: 
-->
<script lang="tsx">
  import { defineComponent, computed, ref, watchEffect, toRefs } from "vue";
  export default defineComponent({
    name: "demopage",
    setup(props) {
      return () => {
        const list = [1, 2, 3, 4];
        return (
          <>
            {list.map((item) => {
              return <p>{item}</p>;
            })}
          </>
        );
      };
    },
  });
</script>
