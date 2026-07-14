<template>
  <div class="home-hot">
    <MyPanel title="人气推荐" subTitle="人气爆款 不容错过">
      <HomeHotSkeleton v-if="loading" />

      <div v-else-if="error" class="state-error">
        <span>{{ error }}</span>
        <button type="button" @click="getHotList">重新加载</button>
      </div>

      <div v-else-if="!hot.length" class="state-empty">暂无推荐商品</div>

      <ul v-else class="goods-list">
        <li class="item" v-for="item in hot" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" :alt="item.name" />
            <div class="title ellipsis-2">{{ item.name }}</div>
          </router-link>
        </li>
      </ul>
    </MyPanel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import { getHot } from "@/api";
import { ref } from "vue";
import HomeHotSkeleton from "@/components/Skeleton/HomeHotSkeleton.vue";
export default {
  components: {
    MyPanel,
    HomeHotSkeleton,
  },
  setup() {
    const hot = ref([]);
    const loading = ref(false);
    const error = ref("");
    const getHotList = async () => {
      loading.value = true;
      error.value = "";

      try {
        const res = await getHot();
        if (res.msg !== "操作成功") {
          throw new Error(res.msg || "人气推荐请求失败");
        }
        hot.value = Array.isArray(res.result) ? res.result : [];
      } catch (err) {
        hot.value = [];
        error.value = "人气推荐加载失败";
        console.error(err);
      } finally {
        loading.value = false;
      }
    };
    getHotList();
    return { hot, loading, error, getHotList };
  },
};
</script>

<style lang="less" scoped>
.home-hot {
  .state-error,
  .state-empty {
    display: flex;
    min-height: 260px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    background: #f5f5f5;
    color: #666;
  }

  .state-error button {
    padding: 6px 12px;
    border: 1px solid #999;
    background: #fff;
    color: inherit;
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
    }
  }
}

@media (max-width: 1023px) {
  .home-hot .goods-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .home-hot .goods-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 24px;
  }

  .home-hot .goods-list .item {
    padding-bottom: 10px;
  }

  .home-hot .goods-list .item .title {
    padding: 12px 8px;
    font-size: 15px;
  }

  .home-hot .state-error,
  .home-hot .state-empty {
    min-height: 180px;
    margin-bottom: 24px;
  }
}
</style>
