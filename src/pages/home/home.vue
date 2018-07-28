<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(swipe, index) in swipeArr" :key="index">
        <a :href="swipe.url">
          <img :src="swipe.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name: 'newsList'}">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name: 'photoList'}">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name: 'goodsList'}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">搜索资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        swipeArr: [
          {
            url: 'http://www.baidu.com',
            img: require('../../assets/images/1.png')
          },
          {
            url: 'http://www.baidu.com',
            img: require('../../assets/images/2.png')
          },
          {
            url: 'http://www.baidu.com',
            img: require('../../assets/images/3.png')
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .home {
    margin-top: 40px;
    /*轮播图样式*/
    .mint-swipe{
        height:187px;
    }
    .mint-swipe img {
        height: 100%;
        width: 100%;
    }
    /* 九宫格样式 */
    .mui-grid-view.mui-grid-9{
      border: 0;
      background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 {
      .mui-table-view-cell {
        border: 0;
        background-color: #fff;
      }
    }
    /*九宫格清除字体图标*/
    .mui-icon-home,
    .mui-icon-email,
    .mui-icon-chatbubble,
    .mui-icon-location,
    .mui-icon-search,
    .mui-icon-phone{
        &:before{
          content: '';
          }
    }
    /*九宫格背景图片*/
    .mui-icon-home{
        background-image: url('../../assets/images/news.png');
        background-repeat: round;
    }
    .mui-icon-email{
        background-image: url('../../assets/images/picShare.png');
        background-repeat: round;
    }
    .mui-icon-chatbubble{
        background-image: url('../../assets/images/goodShow.png');
        background-repeat: round;
    }
    .mui-icon-location{
        background-image: url('../../assets/images/feedback.png');
        background-repeat: round;
    }
    .mui-icon-search{
        background-image: url('../../assets/images/search.png');
        background-repeat: round;
    }
    .mui-icon-phone{
        background-image: url('../../assets/images/callme.png');
        background-repeat: round;
    }
    /*九宫格图标宽高*/
    .mui-icon{
        height: 40px;
        width:40px;
    }
    /* 九宫格字体样式 */
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
      font-size: 13px;
    }
  }
</style>
