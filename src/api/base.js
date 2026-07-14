const isProduction = process.env.NODE_ENV === 'production'

const base = {
    categoryUrl: isProduction
        ? '/mock/category.json'
        : '/api/xhr/globalinfo/queryTop.json',

    findNew: isProduction
        ? '/mock/new.json'
        : '/api/xhr/item/getNewItem.json',

    bannerUrl: isProduction ? '/mock/banner.json' : '/foo/home/banner',
    findHot: isProduction ? '/mock/hot.json' : '/foo/home/hot',
    product: isProduction ? '/mock/product.json' : '/foo/home/product'
}
export default base;