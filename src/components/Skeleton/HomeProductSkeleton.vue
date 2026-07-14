<template>
  <div class="product-skeleton">
    <div class="header-skeleton">
      <AppSkeleton width="180px" height="32px" bg="#e9e9e9" />
      <AppSkeleton width="80px" height="20px" bg="#f0f0f0" />
    </div>

    <div class="goods-skeleton">
      <AppSkeleton class="cover-skeleton" width="100%" height="100%" bg="#e9e9e9" />
      <ul class="goods-list">
        <li v-for="item in 8" :key="item">
          <AppSkeleton class="image-skeleton" width="100%" height="auto" bg="#e9e9e9" />
          <AppSkeleton class="title-skeleton" width="72%" height="18px" bg="#f0f0f0" />
          <AppSkeleton class="price-skeleton" width="44%" height="18px" bg="#f0f0f0" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.product-skeleton {
  padding-bottom: 40px;
}

.header-skeleton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
}

.goods-skeleton {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 10px;
}

.cover-skeleton {
  min-height: 610px;
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.goods-list li {
  min-width: 0;
  padding: 8px;
  border: 1px solid #eee;
}

.image-skeleton {
  aspect-ratio: 1;
}

.title-skeleton,
.price-skeleton {
  display: block;
  margin-top: 12px;
}

@media (max-width: 1023px) {
  .goods-skeleton {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .product-skeleton {
    padding-bottom: 24px;
  }

  .header-skeleton {
    padding: 24px 0 16px;
  }

  .goods-skeleton {
    display: block;
  }

  .cover-skeleton {
    min-height: 0;
    aspect-ratio: 2 / 1;
    margin-bottom: 10px;
  }

  .goods-list {
    gap: 10px;
  }
}
</style>
