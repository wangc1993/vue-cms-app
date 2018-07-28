<template>
  <div class="goodsList temp" style="height:430px;"">
    <NavBar text="商品列表"></NavBar>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="isAutoFill" ref="loadmore">
      <ul class="mui-table-view mui-grid-view">
          <li v-for="good in goodsList" :key="good.id" class="mui-table-view-cell mui-media mui-col-xs-6">
              <router-link :to="{name: 'goodDetail', query:{id: good.id}}">
                <img class="mui-media-object" :src="good.image_url">
                <div class="mui-media-body">{{good.title}}</div>
                <div class="desc">
                  <div class="sell">
                    <span>￥{{good.sell_price}}</span>
                    <s>￥{{good.market_price}}</s>
                  </div>
                  <div class="detail">
                    <div class="hot">
                      热卖中
                    </div>
                    <div class="count">
                      剩{{good.stock_quantity}}件
                    </div>
                  </div>
                </div>
              </router-link>
          </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  import { getGoodsList } from '@/api/api.js';
  export default {
    name: 'GoodsList',
    data() {
      return {
        goodsList: [],
        pageIndex: 1,
        allLoaded: false,//是否禁止触发上拉函数
        isAutoFill:false,//是否自动触发上拉函数
      }
    },
    created() {
      getGoodsList(this.pageIndex).then(res => {
        this.goodsList = res.data.data;
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      loadBottom() {
        getGoodsList(++this.pageIndex).then(res => {
          this.goodsList = this.goodsList.concat(res.data.data);
          /*判断是否还有数据*/
          if(res.data.data.length != 7){
              /*数据不到7条，就是剩余的所有了,禁止调用上拉函数了*/
              this.allLoaded = true;
          }
          /*通知上啦操作已经完结*/
          this.$refs.loadmore.onBottomLoaded();
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .goodsList {
    overflow: scroll;
    .mui-table-view.mui-grid-view {
      .mui-table-view-cell {
        .mui-media-object {
          height: 100px;
        }
        a {
          &:not(.mui-btn) {
            margin: 0px;
            padding: 0px;
            border: 1px solid #5c5c5c;
            box-shadow: 0 0 4px #666;
          }
        }
      }
    }
    .desc {
      color: rgba(92, 92, 92, 0.8);
      background-color: rgba(0, 0, 0, 0.2);
    }
    .sell, .detail {
      display: flex;
      flex-direction: wrap;
      justify-content: space-around;
    }
    .sell {
      span {
        color: red;
      }
    }
    .detail {
      font-size: 14px;
    }
  }
</style>
