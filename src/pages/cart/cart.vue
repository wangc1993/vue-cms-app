<template>
  <div class="cart temp">
    <NavBar text="购物车"></NavBar>
    <div class="pay-detail">
        <ul>
            <li v-for="(goods,index) in goodsList" :key="goods.id"  class="p-list">
                <mt-switch v-model="goods.isPicked"></mt-switch>
                <img :src="goods.thumb_path">
                <div class="pay-calc">
                    <p v-text="goods.title"></p>
                    <div class="calc">
                        <span>￥{{goods.sell_price}}</span>
                        <span @click="reduce(index)">-</span>
                        <span >{{goods.num}}</span>
                        <span @click="add(index)">+</span>
                        <a href="javascript:;" @click="del(index)">删除</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="show-price">
        <div class="show-1">
            <p>总计(不含运费):</p>
            <span>已经选择商品{{payment.num}}件，总价￥{{payment.sum}}元</span>
        </div>
        <div class="show-2">
            <mt-button type="danger" size="large">去结算</mt-button>
        </div>
    </div>
  </div>
</template>

<script>
  import { getCartInfo } from '@/api/api.js';
  import util from '@/utils/utils.js';
  export default {
    name: 'cart',
    data() {
      return {
        goodsList: []
      }
    },
    created() {
      let storeCart = util.getCarts();
      /*获取key组成的数组*/
      let keyArr = Object.keys(storeCart);
      /*如果没有商品则不发送请求*/
      if(keyArr.length === 0) return;
      getCartInfo({cartIds:keyArr}).then(res => {
        this.goodsList = res.data.data;
        this.goodsList.forEach(good => {
          if(storeCart[good.id]){
            /*在vue中添加属性，是没有办法做到响应，setter
            ele.num = prods[ele.id];
            ele.isPicked = true;
            添加属性一定要this.$set*/
            this.$set(good,'num',storeCart[good.id]);
            this.$set(good,'isPicked',true);
          }
        })
      }).catch(err => {
        console.log(err);
      })
    },
    computed: {
      payment() {
        /*总数量*/
        let num = 0;
        /*总价格*/
        let sum = 0;
        this.goodsList.forEach(good => {
          if(good.isPicked){
            /*选中的*/
            num += good.num;
            sum += good.num * good.sell_price;
          }
        });
        return {num, sum}
      }
    },
    methods: {
      /*添加商品数量*/
      add(index) {
        this.goodsList[index].num += 1;
        /*修改小图标数量*/
        this.$emit('addToCart', 1);
        /*更新缓存的内容*/
        util.addCart({
          id: this.goodsList[index].id,
          num: 1
        });
      },
      /*减少商品数量*/
      reduce(index) {
        if(this.goodsList[index].num >1){
          this.goodsList[index].num += -1;
          this.$emit('addToCart', -1);
          util.addCart({
            id: this.goodsList[index].id,
            num: -1
          });
        }
      },
      /*删除对应商品*/
      del(index) {
        let good = this.goodsList[index];
        /*更新缓存*/
        util.deleteCart(good.id);
        /*更新小图标*/
        this.$emit('addToCart', -good.num);
        /*更新goodsList*/
        this.goodsList.splice(index,1);
      }
    }
  }
</script>

<style scoped lang="scss">
  .cart {
    .mint-switch {
      display: inline-block;
    }
    .pay-detail {
      ul {
        padding-left: 5px;
        margin-top: 5px;
        li {
          list-style: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 3px;
          p {
            color: blue;
          }
          img {
            width: 80px;
            height: 80px;
            display: inline-block;
            vertical-align: top;
            margin-top: 10px;
          }
          &:nth-child(1), &:nth-child(3) {
            display: inline-block;
          }
        }
      }
    }
    .calc {
      &:nth-child(1) {
        color: red;
        font-size: 20px;
      }
      a {
        margin-left: 20px;
      }
      span {
        &:not(:nth-child(1)) {
          border: 1px solid rgba(0, 0, 0, 0.3);
          display: inline-block;
          width: 20px;
          text-align: center;
        }
      }
    }
    .show-price {
      background-color: rgba(0, 0, 0, 0.2);
      .show-1,
      .show-2 {
        height: 50px;
        font-size: 12px;
        display: inline-block;
        margin-left: 30px;
      }
    }
  }
</style>
