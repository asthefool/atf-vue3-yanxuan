<template>
  <div class="goods-item">
    <router-link to="/" class="images">
      <img :src="good.picture" :alt="good.name" />
    </router-link>
    <div class="title ellipsis-2">
      {{ good.name }}
    </div>
    <div class="type">海鲜年货</div>
    <div class="price">￥{{ good.price }}</div>
    <div class="extra">
      <router-link to="/">
        <span>找相似</span>

        <span>发现更多宝贝</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  border: 1px solid #ccc;
  width: 100%;
  min-width: 0;
  min-height: 300px;
  margin-bottom: 7px;
  overflow: hidden;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  .images {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
    }
  }

  .title {
    min-height: 48px;
    padding: 8px 10px 0;
    font-size: 16px;
    line-height: 1.5;
  }

  .type {
    font-size: 14px;
    color: #888;
    margin: 5px 10px;
  }

  .price {
    padding: 0 10px 12px;
    color: @priceColor;
    font-size: 16px;
  }

  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: @xtxColor;
    height: 85px;
    transform: translate3d(0, 100%, 0);
    transition: transform 0.25s ease;
    span {
      display: block;
      margin: 10px 0;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
    span:last-child {
      font-size: 14px;
    }
  }
  &:hover {
    border: 1px solid @xtxColor;
    .extra {
      transform: none;
    }
  }
}

@media (max-width: 1023px), (hover: none) {
  .goods-item {
    min-height: 0;
  }

  .goods-item .extra {
    display: none;
  }
}

@media (max-width: 767px) {
  .goods-item .title {
    min-height: 50px;
    padding: 8px 8px 0;
    font-size: 14px;
  }

  .goods-item .type {
    margin: 4px 8px;
    font-size: 12px;
  }

  .goods-item .price {
    padding: 0 8px 10px;
    font-size: 15px;
  }
}
</style>
