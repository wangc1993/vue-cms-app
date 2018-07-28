<template>
  <div class="newsList temp">
    <NavBar text="新闻列表"></NavBar>
    <ul class="mui-table-view">
      <li v-for="(item, index) in listArr" :key="item.id" class="mui-table-view-cell mui-media">
        <router-link :to="{name: 'newsDetail', query: {id: item.id}}">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class='mui-ellipsis'>
              {{item.title}}
            </p>
            <div class="list-bottom">
              <span>点击数：{{item.click}}</span>
              <span>发表时间：2018-07-03</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'newsList',
    data() {
      return {
        listArr: [
          {
            id: 1,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 2,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 3,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 4,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 5,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 6,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 7,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 8,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          },
          {
            id: 9,
            title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
            click: 23,
            img_url: require('../../assets/images/news.png')
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .newsList {
    .mui-ellipsis {
      text-overflow: clip;
      color: #666;
    }
    .list-bottom {
      display: flex;
      font-size: 12px;
      color: blue;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
