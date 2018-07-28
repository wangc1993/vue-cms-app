import Vue from 'vue';
import Router from 'vue-router';
import routes from './router.js';

Vue.use(Router);

const router = new Router({
    linkActiveClass: "mui-active",
    mode: 'history',
    routes: routes
})

/*全局前置守卫*/
router.beforeEach( (to, from, next) => {
  /*动态设置html中的title*/
  if(to.meta.title) {
      document.title = to.meta.title;
  }
  next()
})

/*路由错误处理*/
router.onError((callback) => {
    console.log('路由错误：', callback);
});

export default router;
