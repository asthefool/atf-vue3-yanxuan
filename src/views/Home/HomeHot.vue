<template>
  <div class="home-hot">
    <MyPanel title="人气推荐" subTitle="人气爆款 不容错过">
      <ul class="goods-list">
        <li class="item" v-for="item in Hot" :key="item.id">
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
export default {
  components: {
    MyPanel,
  },
  setup(porps) {
    const Hot = ref([]);
    const Hotlist = async () => {
      try {
        const res = await getHot();
        console.log(res);
        if (res.msg == "操作成功") {
          Hot.value = res.result;
        }
      } catch (error) {
        console.log(error);
      }
    };
    Hotlist();
    return { Hot };
  },
};
</script>

<style lang="less" scoped>
.home-hot {
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
}
</style>
