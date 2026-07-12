<template>
  <div>
    <!--
        全局组件 
        步骤：
         1.封装一个轮播图xtx-carousel，注册成全局组件
         2.准备一个HomeBanner.vue,使用 -->
    <AppBanner :list="list" />
  </div>
</template>

<script>
import { ref } from "vue";
import { getBanner } from "@/api";
export default {
  setup(props) {
    const list = ref([]);
    getBanner()
      .then((res) => {
        console.log(res);
        if (res.msg === "操作成功") {
          list.value = res.result;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return { list };
  },
};
</script>

<style lang="less" scoped></style>
