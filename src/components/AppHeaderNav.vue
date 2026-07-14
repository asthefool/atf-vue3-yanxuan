<template>
  <div>
    <ul class="app-header-nav">
      <li class="item">
        <RouterLink class="link" to="/">首页</RouterLink>
      </li>
      <li
        class="item"
        v-for="item in list"
        :key="item.id"
        @mouseenter="show(item)"
        @mouseleave="hide(item)"
      >
        <RouterLink
          class="link"
          :to="'/category/' + item.id"
          @click="hide(item)"
        >
          {{ item.name }}
        </RouterLink>
        <!-- 弹出层 -->
        <div class="layer" :class="{ active: item.open }">
          <ul>
            <li v-for="ele in item.subCateGroupList" :key="ele.id">
              <a href="#">
                <img :src="ele.categoryList[0].bannerUrl" alt="" />
              </a>
              <div>{{ ele.name }}</div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup(props) {
    const store = useStore();
    // 从仓库读取分类列表
    const list = computed(() => {
      return store.state.category.cateList;
    });
    const show = (item) => {
      item.open = true;
    };
    const hide = (item) => {
      item.open = false;
    };

    return { list, show, hide };
  },
};
</script>

<style lang="less" scoped>
.app-header-nav {
  position: relative;
  display: flex;
  width: 100%;
  z-index: 999;

  .item {
    flex: 0 0 auto;
    padding: 0 10px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    // 选中高亮设置
    .router-link-exact-active {
      color: @xtxColor;
      border-bottom: 2px solid @xtxColor;
    }
    .link {
      padding-bottom: 10px;
      font-size: 15px;
    }
    // 划过
    &:hover {
      .link {
        color: @xtxColor;
        border-bottom: 2px solid @xtxColor;
      }
      .layer {
        opacity: 0;
        height: 120px;
      }
      .active {
        opacity: 1;
      }
    }
  }
  .layer {
    position: absolute;
    left: 0;
    top: 40px;
    opacity: 0;
    box-shadow: 0 0 5px #ccc;
    background-color: #fff;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.25s ease, opacity 0.2s ease;
    ul {
      display: flex;

      li {
        height: 100px;
        width: 100px;
        text-align: center;
        a {
          border-bottom: 0;
        }
        img {
          width: 50px;
          height: 50px;
        }
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .app-header-nav {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
  }

  .app-header-nav::-webkit-scrollbar {
    display: none;
  }

  .app-header-nav .item {
    padding: 0;
    height: 44px;
    line-height: 44px;
  }

  .app-header-nav .item .link {
    display: block;
    min-height: 44px;
    padding: 0 14px;
    line-height: 44px;
  }

  .app-header-nav .item .layer {
    display: none !important;
  }
}
</style>
