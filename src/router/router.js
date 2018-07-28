const indexRouter = {
  path: '/',
  redirect: '/home'
}
/*首页路由配置*/
const homeRouter = {
    path: '/home',
    name: 'home',
    meta: {
        title: 'CMS-home'
    },
    component: resolve => { require(['@/pages/home/home.vue'], resolve); }
};
/*会员路由配置*/
const vipRouter = {
    path: '/vip',
    name: 'vip',
    meta: {
        title: 'CMS-vip'
    },
    component: resolve => { require(['@/pages/vip/vip.vue'], resolve); }
};
/*购物车路由配置*/
const cartRouter = {
    path: '/cart',
    name: 'cart',
    meta: {
        title: 'CMS-cart'
    },
    component: resolve => { require(['@/pages/cart/cart.vue'], resolve); }
};
/*搜索页路由配置*/
const searchRouter = {
    path: '/search',
    name: 'search',
    meta: {
        title: 'search'
    },
    component: resolve => { require(['@/pages/search/search.vue'], resolve); }
};
/*新闻列表页*/
const newsListRouter = {
    path: '/news/list',
    name: 'newsList',
    meta: {
        title: 'news-list'
    },
    component: resolve => { require(['@/pages/news/newsList.vue'], resolve); }
};
/*新闻详情页*/
const newsDetailRouter = {
    path: '/news/detail',
    name: 'newsDetail',
    meta: {
        title: 'news-detail'
    },
    component: resolve => { require(['@/pages/news/newsDetail.vue'], resolve); }
};
/*图文分享页*/
const photoListRouter = {
    path: '/photo/list',
    name: 'photoList',
    meta: {
        title: 'photo-list'
    },
    component: resolve => { require(['@/pages/photo/photoList.vue'], resolve); }
};
/*图文详情页*/
const photoDetailRouter = {
    path: '/photo/detail',
    name: 'photoDetail',
    meta: {
        title: 'photo-detail'
    },
    component: resolve => { require(['@/pages/photo/photoDetail.vue'], resolve); }
};
/*商品列表页*/
const goodsListRouter = {
    path: '/goods/list',
    name: 'goodsList',
    meta: {
        title: 'goods-list'
    },
    component: resolve => { require(['@/pages/goods/goodsList.vue'], resolve); }
};
/*商品详情页*/
const goodDetailRouter = {
    path: '/goods/detail',
    name: 'goodDetail',
    meta: {
        title: 'good-detail'
    },
    component: resolve => { require(['@/pages/goods/goodDetail.vue'], resolve); }
};
/*商品评论页*/
const goodCommentRouter = {
    path: '/goods/comment',
    name: 'goodComment',
    meta: {
        title: 'good-detail'
    },
    component: resolve => { require(['@/pages/goods/goodComment.vue'], resolve); }
};
/*商品图片信息页*/
const goodPicInfoRouter = {
    path: '/goods/picInfo',
    name: 'goodPicInfo',
    meta: {
        title: 'good-picInfo'
    },
    component: resolve => { require(['@/pages/news/newsDetail.vue'], resolve); }
};

/*所有上面定义的路由合并下面的routes里*/
const routes = [
  indexRouter,
  homeRouter,
  vipRouter,
  cartRouter,
  searchRouter,
  newsListRouter,
  newsDetailRouter,
  photoListRouter,
  photoDetailRouter,
  goodsListRouter,
  goodDetailRouter,
  goodCommentRouter,
  goodPicInfoRouter
];

export default routes;
