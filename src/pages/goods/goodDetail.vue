<template>
  <div class="goodDetail temp">
    <NavBar text="商品详情"></NavBar>
    <Swiper :swipeArr="prodInfo.imgs"></Swiper>
    <div class="product-desc">
      <ul>
        <li><span class="product-desc-span">
          {{prodInfo.title}}
        </span></li>
        <li class="price-li">市场价：
          <s>￥{{prodInfo.market_price}}</s> 销售价：<span>￥{{prodInfo.sell_price}}</span></li>
        <li class="number-li">购买数量：<span @click="reduce">-</span><span>{{num}}</span><span @click="add">+</span></li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addToCart">加入购物车</mt-button>
        </li>
      </ul>
    </div>
    <transition name="ball" @after-enter="afterEnter">
        <div class="ball" v-if="isShow"></div>
    </transition>
    <div class="product-props">
        <ul>
            <li>商品参数</li>
            <li>商品货号：{{prodInfo.goods_no}}</li>
            <li>库存情况：{{prodInfo.stock_quantity}}件</li>
            <li>上架时间：{{prodInfo.add_time}}</li>
        </ul>
    </div>
    <div class="product-info">
        <ul>
            <li>
                <mt-button type="primary" size="large" plain @click="toPicInfo">图文介绍</mt-button>
            </li>
            <li>
                <mt-button type="danger" size="large" plain @click="toGoodComment">商品评论</mt-button>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
  import { getGoodDetail } from '@/api/api.js';
  import util from '@/utils/utils.js';
  export default {
    name: 'goodDetail',
    data() {
      return {
        prodInfo: {},
        num: 1,
        isShow: false
      }
    },
    created() {
      getGoodDetail(this.$route.query.id).then(res => {
        this.prodInfo = res.data.data;
      })
    },
    methods: {
      reduce() {
        if(this.num >1){
          this.num = this.num -1;
        }
      },
      add() {
        /*是否超出库存*/
        if(this.num < this.prodInfo.stock_quantity){
          this.num = this.num + 1;
        }
      },
      addToCart() {
        this.isShow = true;
        /*加入购物车*/
        this.$emit('addToCart', this.num);
        util.addCart({
          id: this.prodInfo.id,
          num: this.num
        });
      },
      /*处理过渡效果进入之后的行为*/
      afterEnter() {
        this.isShow = false;
      },
      toGoodComment() {
        this.$router.push({name: 'goodComment', query: {id: this.prodInfo.id}})
      },
      toPicInfo() {
        this.$router.push({
          name: 'goodPicInfo',
          query: {id: this.prodInfo.id}
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .goodDetail {
    .swiper {
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin: 8px;
      width: 95%;
      border-radius: 15px;
      overflow: hidden;
    }
    .outer-swiper,
    .product-desc,
    .product-props,
    .product-info {
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin: 3px;
    }
    ul {
      padding-left: 10px;
    }
    li {
      list-style: none;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 8px;
    }
    .ball {
      border-radius: 50%;
      background-color: red;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 400px;
      left: 160px;
      display: inline-block;
      z-index: 9999;
      opacity: 0.6;
    }
    /* 小球的动画效果 */
    .ball-enter-active {
      animation: bounce-in .5s;
    }
    @keyframes bounce-in {
      0% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        /*x,y,z轴的位置*/
        transform: translate3d(40px, -30px, 0);
      }
      75% {
        transform: translate3d(60px, 0px, 0);
      }
      100% {
        transform: translate3d(40px, 300px, 0);
      }
    }
    .product-desc {
      ul {
        padding-bottom: 4px;
        &:nth-child(1) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
          span {
            color: blue;
            font-size: 22px;
            font-weight: bold;
          }
        }
      }
    }
    .price-li {
      span {
        color: red !important;
        font-size: 25px !important;
      }
      s {
        margin-right: 16px;
      }
    }
    /* 加减 */
    .number-li {
      span {
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.1);
        width: 25px;
        color: rgba(0, 0, 0, 0.5) !important;
        font-size: 16px !important;
      }
    }
    /*商品参数*/
    .product-props {
      ul {
        &:nth-child(1) {
          text-align: left;
        }
        &:not(:nth-child(1)) {
          margin-left: 40px;
        }
      }
    }
    .product-info {
      ul {
        margin-bottom: 10px;
        padding: 0 5px;
      }
    }
    .number-li {
      span {
        text-align: center;
      }
      &:nth-child(2) {
        width: 40px;
      }
    }
  }
</style>
