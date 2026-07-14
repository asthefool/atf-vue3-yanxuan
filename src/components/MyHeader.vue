<template>
  <div class="my-header w">
    <!-- 上部区域 -->
    <div class="header-top">
      <!-- logo -->
      <h1 class="logo"><router-link to="/"></router-link></h1>
      <!-- 搜索 -->
      <div class="center">
        <div class="center-search">
          <input type="search" aria-label="搜索商品" placeholder="搜索商品" />
          <button type="button" class="search-btn">搜索</button>
        </div>
        <!-- 搜索下面的导航 -->
        <ul class="center-navs">
          <li><a href="#">电器</a></li>
          <li><a href="#">内裤</a></li>
          <li><a href="#">拖鞋</a></li>
          <li><a href="#">毛巾</a></li>
          <li><a href="#">枕头</a></li>
          <li><a href="#">洗护</a></li>
          <li><a href="#">孕婴</a></li>
          <li><a href="#">服装</a></li>
          <li><a href="#">杂货</a></li>
        </ul>
      </div>

      <!-- 购物车 -->
      <div class="cart">
        <a href="#" aria-label="购物车，当前 2 件商品">
          <i class="iconfont icon-gouwuche"></i>
          <span class="cart-text">购物车</span>
          <em>2</em>
        </a>
      </div>
    </div>

    <!--二级导航 -->
    <AppHeaderNav />
  </div>
</template>

<script>
import AppHeaderNav from "@/components/AppHeaderNav.vue";
import { useStore } from "vuex";
export default {
  components: {
    AppHeaderNav,
  },
  setup(props) {
    const store = useStore();
    // 触发action
    store.dispatch("category/getAllCategory");
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 148px;
  padding-top: 25px;
  background: #fff;

  .header-top {
    display: grid;
    grid-template-columns: 330px minmax(0, 1fr) 150px;
    gap: 20px;
    align-items: start;

    .logo {
      width: 330px;
      height: 60px;

      a {
        display: block;
        height: 60px;
        width: 100%;
        background: url("../assets/images/logo.webp") 0 -960px no-repeat;
      }
    }

    .center {
      min-width: 0;

      .center-search {
        display: flex;
        width: 100%;
        max-width: 540px;
        height: 35px;

        input {
          flex: 1;
          min-width: 0;
          height: 35px;
          border: 1px solid @xtxColor;
          border-radius: 20px 0 0 20px;
          padding: 0 15px;
        }

        .search-btn {
          flex: 0 0 100px;
          height: 35px;
          background-color: @xtxColor;
          border-radius: 0 20px 20px 0;
          border: 1px solid @xtxColor;
          color: white;
          font-size: 16px;
          cursor: pointer; //鼠标移上时呈现出可点击
        }
      }

      .center-navs {
        display: flex;
        width: 100%;
        max-width: 540px;
        overflow: hidden;

        li {
          flex: 0 0 auto;
          height: 32px;
          padding: 5px;

          a {
            padding: 0 5px;
            border-right: 1px solid #ccc;
            &:hover {
              color: @xtxColor;
            }
          }
        }
        li:last-child a {
          border: 0;
        }
      }
    }

    .cart {
      width: 150px;
      height: 35px;
      line-height: 35px;
      border-radius: 20px;
      border: 1px solid @xtxColor;
      font-size: 16px;
      text-align: center;

      a {
        display: block;
        color: @xtxColor;
      }

      i {
        color: @xtxColor;
        font-size: 16px;
      }

      em {
        background-color: red;
        border-radius: 50%;
        padding: 2px 5px;
        color: #fff;
        height: 12px;
        font-size: 12px;
        display: inline-block;
        line-height: 12px;
      }
    }
  }
}

@media (max-width: 1023px) {
  .my-header {
    height: auto;
    padding-top: 16px;
  }

  .my-header .header-top {
    grid-template-columns: 220px minmax(0, 1fr) 120px;
    gap: 16px;
    align-items: center;
  }

  .my-header .header-top .logo {
    width: 220px;
    height: 40px;
    margin: 0;
    overflow: hidden;
  }

  .my-header .header-top .logo a {
    width: 330px;
    height: 60px;
    transform: scale(0.66);
    transform-origin: left top;
  }

  .my-header .header-top .center .center-search {
    max-width: none;
  }

  .my-header .header-top .center .center-navs {
    max-width: none;
  }

  .my-header .header-top .cart {
    width: 120px;
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .my-header {
    padding-top: 12px;
  }

  .my-header .header-top {
    grid-template-areas:
      "logo cart"
      "search search";
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 12px;
  }

  .my-header .header-top .logo {
    grid-area: logo;
    width: 165px;
    height: 32px;
  }

  .my-header .header-top .logo a {
    transform: scale(0.5);
  }

  .my-header .header-top .center {
    grid-area: search;
  }

  .my-header .header-top .cart {
    grid-area: cart;
    position: relative;
    width: 44px;
    height: 44px;
    margin-left: auto;
    line-height: 42px;
    border-radius: 50%;
  }

  .my-header .header-top .cart i {
    font-size: 20px;
  }

  .my-header .header-top .cart-text {
    display: none;
  }

  .my-header .header-top .cart em {
    position: absolute;
    top: -5px;
    right: -5px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    line-height: 18px;
  }

  .my-header .header-top .center .center-search {
    max-width: none;
    height: 44px;
  }

  .my-header .header-top .center .center-search input,
  .my-header .header-top .center .center-search .search-btn {
    height: 44px;
  }

  .my-header .header-top .center .center-search input {
    font-size: 16px;
  }

  .my-header .header-top .center .center-search .search-btn {
    flex-basis: 76px;
  }

  .my-header .header-top .center .center-navs {
    display: none;
  }
}
</style>
