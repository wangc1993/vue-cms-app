<template>
  <div class="newsDetail temp">
    <NavBar :text="title"></NavBar>
    <div>
      <div class="title">
        {{detail.title}}
      </div>
      <div class="des">
        <span>点击数：{{$route.query.id}}</span>
        <span>分类：{{detail.type}}</span>
        <span>发表时间：{{detail.time}}</span>
      </div>
      <p>
        {{detail.content}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsDetail',
    data() {
      return {
        detail: {
          title: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',
          click: 23,
          type: '民生经济',
          time: '2018-07-03',
          content: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
        },
        title: ''
      }
    },
    beforeRouteEnter(to, from, next) {
      let myTitle = '';
      if(to.name === 'newsDetail') {
        myTitle = '新闻详情';
      }else if(to.name === 'goodPicInfo'){
        myTitle = '图文介绍';
      }
      /*一定调用next,不然就没有任何效果*/
      next(vm => {
        /*此时组件还未加载，需要通过 `vm` 访问组件实例*/
        vm.title = myTitle;
      })
    }
  }
</script>

<style scoped lang="scss">
  .newsDetail {
    padding: 0 4px;
    .title {
      color: #26a2ff;
      font-weight: bold;
    }
    .des {
      font-size: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
    }
    p {
      text-indent: 2em;
      margin-top: 5px;
    }
  }
</style>
