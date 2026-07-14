<template>
  <div class="home-product">
    <HomeProductSkeleton v-if="loading" />

    <div v-else-if="error" class="state-error">
      <span>{{ error }}</span>
      <button type="button" @click="getProductList">重新加载</button>
    </div>

    <div v-else-if="!products.length" class="state-empty">暂无商品专区</div>

    <template v-else>
      <MyPanel
        v-for="item in products"
        :key="item.id"
        :title="item.name"
        subTitle=""
      >
        <template #right>
          <div class="sub">
            <router-link v-for="sub in item.children" :key="sub.id" to="/">
              {{ sub.name }}
            </router-link>
          </div>
          <AppMore />
        </template>

        <div class="goods">
          <router-link class="left" to="/">
            <img :src="item.picture" :alt="item.name" />
          </router-link>

          <div class="right">
            <ul class="goods-list">
              <li v-for="good in item.goods" :key="good.id">
                <MyGoodsItem :good="good" />
              </li>
            </ul>
          </div>
        </div>
      </MyPanel>
    </template>
  </div>
</template>

<script>
import MyGoodsItem from '@/components/MyGoodsItem.vue';
import MyPanel from '@/components/MyPanel.vue';
import { getProducts } from '@/api';
import { ref } from 'vue';
import HomeProductSkeleton from '@/components/Skeleton/HomeProductSkeleton.vue';
    export default {
      components:{
        MyPanel,
        MyGoodsItem,
        HomeProductSkeleton
      },
      setup(){
        const products = ref([]);
        const loading = ref(false);
        const error = ref('');
        const getProductList = async () => {
          loading.value = true;
          error.value = '';

          try {
            const res = await getProducts();
            if (res.msg !== '操作成功') {
              throw new Error(res.msg || '商品专区请求失败');
            }
            products.value = Array.isArray(res.result) ? res.result : [];
          } catch (err) {
            products.value = [];
            error.value = '商品专区加载失败';
            console.error(err);
          } finally {
            loading.value = false;
          }
        };
        getProductList();
        return { products, loading, error, getProductList };
      }
    }
</script>

<style lang="less" scoped>
.home-product {
  padding-bottom: 40px;
  background-color: #fff;

  .state-error,
  .state-empty {
    display: flex;
    min-height: 360px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #666;
  }

  .state-error button {
    padding: 6px 12px;
    border: 1px solid #999;
    background: #fff;
    color: inherit;
    cursor: pointer;
  }

  .sub {
    a {
      margin: 0 7px;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background-color: @xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 40px;
      }
    }
  }

  .goods {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 10px;

    .left {
      min-height: 610px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .right {
      min-width: 0;

      .goods-list {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 8px;

        li {
          min-width: 0;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .home-product .sub {
    display: none;
  }

  .home-product .goods {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .home-product .goods .right .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .home-product {
    padding-bottom: 24px;
  }

  .home-product .goods {
    display: block;
  }

  .home-product .goods .left {
    display: block;
    min-height: 0;
    margin-bottom: 10px;
    aspect-ratio: 2 / 1;
    overflow: hidden;
  }

  .home-product .goods .right .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .home-product .state-error,
  .home-product .state-empty {
    min-height: 220px;
  }
}
</style>
