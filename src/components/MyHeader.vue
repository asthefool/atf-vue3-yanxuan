<template>
  <div class="my-header w">
    <!-- 上部区域 -->
    <div class="header-top">
      <!-- logo -->
      <h1 class="logo"><router-link to="/"></router-link></h1>
      <!-- 搜索 -->
      <div class="center">
        <div class="center-search">
          <input type="text" placeholder="618...." />
          <button class="search-btn">搜索</button>
        </div>
        <!-- 搜索下面的导航 -->
        <ui class="center-navs">
          <li><a href="#">电器</a></li>
          <li><a href="#">内裤</a></li>
          <li><a href="#">拖鞋</a></li>
          <li><a href="#">毛巾</a></li>
          <li><a href="#">枕头</a></li>
          <li><a href="#">洗护</a></li>
          <li><a href="#">孕婴</a></li>
          <li><a href="#">服装</a></li>
          <li><a href="#">杂货</a></li>
        </ui>
      </div>

      <!-- 购物车 -->
      <div class="cart">
        <a href="#">
          <i class="iconfont icon-gouwuche"></i>
          购物车
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
  height: 120px;
  padding: 25px 0 0 0;

  background: #fff;
  .header-top {
    display: flex;
    .logo {
      width: 330px;
      height: 60px;
      a {
        display: inline-block;
        height: 60px;
        width: 100%;
        background: url("../assets/images/logo.webp") 0 -960px no-repeat;
      }
    }

    .center {
      flex: 1;
      .center-search {
        width: 540px;
        height: 35px;
        input {
          box-sizing: border-box;
          width: 440px;
          height: 35px;
          border: 1px solid @xtxColor;
          border-radius: 20px 0 0 20px;
          padding-left: 15px;
        }
        .search-btn {
          float: right;
          width: 100px;
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
        width: 540px;
        li {
          float: left;
          height: 32px;
          padding: 5px;
          list-style-type: none;
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
      box-sizing: border-box;
      width: 150px;
      height: 35px;
      line-height: 35px;
      border-radius: 20px;
      border: 1px solid @xtxColor;
      font-size: 16px;
      text-align: center;
      a {
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
</style>
