<template>
  <div class="category w">
    <!-- 1.面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 2.轮播图 -->
    <AppBanner :list="banner" />

    <!-- 3.分类展示 -->
     <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
            <li v-for="item in category.subCateList" :key="item.id">
                <a href="#">
                    <img :src="item.bannerUrl" :alt="item.name">
                    <div class="name">{{ item.name }}</div>
                </a>
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
import { getBanner } from '@/api';
import { useStore } from 'vuex';
import {computed, ref} from 'vue'
import { useRoute } from 'vue-router';

export default {
    setup(props){
        // 轮播图
        const banner = ref([])
        getBanner().then(res=>{
            console.log(res)
            if(res.msg=='操作成功'){
                banner.value=res.result;
            }
        }).catch(err=>{
            console.log(err)
        })
        
        // 列表
        const store =useStore();
        const route=useRoute();
        // 查找跟路由中id相等的分类
        const category = computed(()=>{
        let cate = {}
            const item = store.state.category.cateList.find(item=>{
                
                return item.id==route.params.id
            })
            if(item) cate= item
            console.log(cate);
            
            return cate;
        })



        return {banner,category}
    }
};
</script>

<style lang="less" scoped>
.category {
  padding-top: 10px;
  padding-bottom: 32px;

  .breadcrumb {
    padding: 20px 0;
    overflow-x: auto;
  }

  .sub-list {
    margin-top: 20px;

    h3 {
      font-size: 32px;
      text-align: center;
      font-weight: normal;
      line-height: 100px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 16px;

      li {
        min-width: 0;
        text-align: center;

        a {
          display: block;
          padding: 12px 8px;
        }

        img {
          width: 90px;
          height: 90px;
          margin: 0 auto 8px;
          object-fit: cover;
        }

        &:hover .name {
          color: @xtxColor;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .category .sub-list ul {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .category {
    padding-top: 0;
    padding-bottom: 24px;
  }

  .category .breadcrumb {
    padding: 16px 0;
  }

  .category .sub-list {
    margin-top: 8px;
  }

  .category .sub-list h3 {
    font-size: 24px;
    line-height: 72px;
  }

  .category .sub-list ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .category .sub-list ul li a {
    padding: 8px 4px;
  }

  .category .sub-list ul li img {
    width: min(80px, 100%);
    height: auto;
    aspect-ratio: 1;
  }
}
</style>
