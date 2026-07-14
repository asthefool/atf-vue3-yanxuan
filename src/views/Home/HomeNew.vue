<template>
  <div class="home-new">
    <MyPanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <!-- 使用右侧插槽 -->
      <template #right>
        <AppMore path="/" />
      </template>

      <!-- 骨架屏 -->
      <HomeNewSkeleton v-if="loading" />

      <div v-else-if="error" class="state-error">
        {{ error }}
        <button @click="getNewList">重新加载</button>
      </div>

      <div v-else-if="!goods.length" class="state-empty">暂无商品</div>
      <!-- 使用默认插槽 -->
      <ul v-else class="goods-list">
        <li class="item" v-for="item in goods" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" :alt="item.name" />
            <div class="title ellipsis">{{ item.name }}</div>
            <div class="price">
              ￥{{ item.retailPrice }}
              <del>￥{{ item.counterPrice }}</del>
            </div>
          </router-link>
        </li>
      </ul>

      <!-- <div v-else class="goods-list">

        <el-skeleton v-for="i in 4" :key="i" style="width: 265px;height: 365px;">
          <template #template>
            <el-skeleton-item
              variant="image"
              style="width: 240px; height: 240px"
            />
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 50%" />
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-items: space-between;
                "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div> -->
    </MyPanel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import { ref } from "vue";
import { getNew } from "@/api";
import HomeNewSkeleton from "@/components/Skeleton/HomeNewSkeleton.vue";

export default {
  components: {
    MyPanel,
    HomeNewSkeleton,
  },
  setup() {
    const goods = ref([]);
    const loading = ref(false);
    const error = ref("");
    const getNewList = async () => {
      loading.value = true;
      error.value = "";

      try {
        const res = await getNew();
        console.log(res);
        if (String(res.code) !== "200") {
          throw new Error(res.msg || "接口请求失败");
        }

        goods.value = res.data?.result?.slice(0, 4) || [];
      } catch (err) {
        goods.value = [];
        error.value = "新鲜好物加载失败";
        console.log(err);
      } finally {
        loading.value = false;
      }
    };
    getNewList();

    return { goods, loading, error, getNewList };
  },
};
</script>

<style lang="less" scoped>
.home-new {
  .state-error,
  .state-empty {
    padding: 60px 0;
    text-align: center;
    color: #666;
  }

  .state-error button {
    margin-left: 12px;
    padding: 6px 12px;
    border: 1px solid #999;
    background: #fff;
    cursor: pointer;
  }
  .goods-list {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;

    .item {
      background-color: #f5f5f5;
      min-width: 0;
      padding-bottom: 18px;

      img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
      }

      .hovershadow();

      .title {
        font-size: 17px;
        text-align: center;
        padding: 15px 25px;
      }
      .price {
        color: @priceColor;
        font-size: 15px;
        text-align: center;
        del {
          color: #666;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .home-new .goods-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .home-new .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 24px;
  }

  .home-new .goods-list .item {
    padding-bottom: 12px;
  }

  .home-new .goods-list .item .title {
    padding: 12px 8px 8px;
    font-size: 15px;
  }

  .home-new .goods-list .item .price {
    font-size: 14px;
  }
}
</style>
