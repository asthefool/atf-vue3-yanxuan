// 导出所有接口请求函数
import base from './base'
import req from './req'
// 获取分类列表
export const getCategoryList = () => req.get(base.categoryUrl);

// 获取首页轮播图
export const getBanner = () => req.get(base.bannerUrl)

// 获取首页主体--新鲜好物
export const getNew = () => req.get(base.findNew)

// 获取首页主体--产品区块
export const getHot = () => req.get(base.findHot)

// 获取首页主体--产品区块
export const getProducts = () => req.get(base.product)

