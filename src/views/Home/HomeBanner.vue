<template>
  <div class="home-banner">
    <HomeBannerSkeleton v-if="loading" />

    <div v-else-if="error" class="state-error">
      <span>{{ error }}</span>
      <button type="button" @click="getBannerList">重新加载</button>
    </div>

    <div v-else-if="!list.length" class="state-empty">暂无轮播内容</div>

    <AppBanner v-else :list="list" />
  </div>
</template>

<script>
import { ref } from "vue";
import { getBanner } from "@/api";
import HomeBannerSkeleton from "@/components/Skeleton/HomeBannerSkeleton.vue";

export default {
  components: { HomeBannerSkeleton },
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const error = ref("");

    const getBannerList = async () => {
      loading.value = true;
      error.value = "";

      try {
        const res = await getBanner();
        if (res.msg !== "操作成功") {
          throw new Error(res.msg || "轮播图请求失败");
        }
        list.value = Array.isArray(res.result) ? res.result : [];
      } catch (err) {
        list.value = [];
        error.value = "轮播图加载失败";
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    getBannerList();

    return { list, loading, error, getBannerList };
  },
};
</script>

<style lang="less" scoped>
.state-error,
.state-empty {
  display: flex;
  min-height: clamp(180px, 28vw, 400px);
  align-items: center;
  justify-content: center;
  gap: 12px;
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
</style>
