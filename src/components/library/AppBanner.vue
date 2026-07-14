<template>
  <el-carousel height="clamp(180px, 28vw, 400px)">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img class="banner-image" :src="item.imgUrl" :alt="item.name || '商品活动'" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.banner-image {

  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.el-carousel__item:nth-child(2n)) {
  background-color: #99a9bf;
}

:deep(.el-carousel__item:nth-child(2n + 1)) {
  background-color: #d3dce6;
}

@media (max-width: 767px) {
  :deep(.el-carousel__button) {
    width: 18px;
  }
}
</style>
