<template>
  <div class="home-product">
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
  </div>
</template>

<script>
import MyGoodsItem from '@/components/MyGoodsItem.vue';
import MyPanel from '@/components/MyPanel.vue';
import {getProducts} from '@/api'
import {ref} from 'vue'
    export default {
      components:{
        MyPanel,
        MyGoodsItem
      },
      setup(props){
        const products=ref([])
        const getProduct=async ()=>{
            try{
                const res=await getProducts();
                console.log(res)
                if(res.msg=='操作成功'){
                    products.value=res.result;
                }
            }catch(error){
                console.log(error)
            }
        }
        getProduct();
        return{products}
    }
    }
</script>

<style lang="less" scoped>
.home-product {
  padding-bottom: 40px;
  background-color: #fff;

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
}
</style>
