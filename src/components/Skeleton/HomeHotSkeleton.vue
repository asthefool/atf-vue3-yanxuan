<template>
  <ul class="goods-list">
    <li v-for="item in 4" :key="item" class="item">
      <AppSkeleton class="image-skeleton" width="100%" height="auto" bg="#e9e9e9" />
      <AppSkeleton class="text-skeleton" width="72%" height="20px" bg="#f0f0f0" />
    </li>
  </ul>
</template>

<style lang="less" scoped>
.goods-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 40px;
}

.item {
  min-width: 0;
  padding-bottom: 24px;
  background: #f5f5f5;
}

.image-skeleton {
  aspect-ratio: 1;
}

.text-skeleton {
  display: block;
  margin: 18px auto 0;
}

@media (max-width: 767px) {
  .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 24px;
  }
}
</style>
