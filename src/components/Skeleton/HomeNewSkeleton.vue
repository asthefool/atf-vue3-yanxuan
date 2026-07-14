<template>
  <div>
    <ul class="goods-list">
      <li class="item" v-for="i in 4" :key="i">
        <!-- 图片 -->
        <AppSkeleton class="image-skeleton" width="100%" height="auto" bg="#ddd" />
        <!-- 文字 -->
        <AppSkeleton class="text-skeleton" width="100%" height="100px" bg="#f5f5f5" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.goods-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  .item {
    min-width: 0;
  }

  .image-skeleton {
    aspect-ratio: 1;
  }
}

@media (max-width: 1023px) {
  .goods-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .goods-list .text-skeleton {
    height: 76px !important;
  }
}
</style>
