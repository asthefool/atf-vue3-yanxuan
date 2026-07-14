const isProduction = process.env.NODE_ENV === 'production'

const base = {
    baseUrl: 'https://you.163.com',
    categoryUrl: '/api/xhr/globalinfo/queryTop.json',
    findNew: '/api/xhr/item/getNewItem.json', //首页主体--新鲜好物

    bannerUrl: isProduction ? '/mock/banner.json' : '/foo/home/banner',
    findHot: isProduction ? '/mock/hot.json' : '/foo/home/hot',
    product: isProduction ? '/mock/product.json' : '/foo/home/product' 
}
export default base;