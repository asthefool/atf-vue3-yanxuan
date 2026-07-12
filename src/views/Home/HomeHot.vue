<template>
  <div class="home-hot">
    <MyPanel title="人气推荐" subTitle="人气爆款 不容错过">
      <ul class="goods-list">
        <li class="item" v-for="item in Hot" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" alt="" />
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
    overflow: hidden;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;

    .item {
      background-color: #f5f5f5;
      width: 265px;
      height: 365px;
      margin-right: 10px;

      img {
        width: 265px;
        height: 265px;
      }
      .hovershadow();
      .title {
        font-size: 17px;
        text-align: center;
        padding: 15px 25pxs;
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
</style>
