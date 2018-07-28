// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Mint from 'mint-ui';
import Mock from './mock';
import NavBar from './components/navBar.vue';
import Comment from './components/comment.vue';
import Swiper from './components/swiper.vue';
import 'mint-ui/lib/style.css';
import './assets/global.css';
/*引入mui样式*/
import './assets/mui/dist/css/mui.min.css';
/*引入iconFont样式*/
import './assets/iconfont/iconfont.css';

/*VuePreview:引入vue-preview*/
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

/*注册全局组件*/
Vue.component('NavBar', NavBar);
Vue.component('Comment', Comment);
Vue.component('Swiper', Swiper);

/*axios拦截器*/
axios.interceptors.request.use((config) => {
  /*显示图标*/
  Mint.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
axios.interceptors.response.use(function(response){
  /*隐藏图标*/
  Mint.Indicator.close();
  /*获取到response中的data，进行加工*/
  return response;
});

/*开启模拟数据*/
Mock.bootstrap();

Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
