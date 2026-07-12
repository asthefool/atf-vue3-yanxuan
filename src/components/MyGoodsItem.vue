<template>
  <div class="goods-item">
    <router-link to="/" class="images">
      <img :src="good.picture" alt="" />
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
      default: {},
    },
  },
};
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  border: 1px solid #ccc;
  width: 200px;
  height: 300px;
  margin-bottom: 7px;
  overflow: hidden;
  transition: all 0.5s;
  .images {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .title {
    font-size: 16px;
  }
  .type {
    font-size: 14px;
    color: #ccc;
    margin: 5px;
  }
  .price {
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
    transition: all 0.5s;
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
</style>
