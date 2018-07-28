<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="信息资讯App"></mt-header>
    <transition name="router" mode="out-in">
      <router-view @addToCart="addNum"></router-view>
    </transition>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name: 'home'}">
        <span class="mui-icon iconfont icon-shouyeshouye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name: 'vip'}">
        <span class="mui-icon iconfont icon-huiyuan"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name: 'cart'}">
        <span class="mui-icon iconfont icon-gouwuche"><span class="mui-badge" v-show="num === 0 ? false : true">{{num}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name: 'search'}">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import util from '@/utils/utils.js';

export default {
  name: 'App',
  data() {
    return {
      num: util.getTotalCount()
    }
  },
  methods: {
    addNum(num) {
      this.num = this.num + num;
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    .router-enter-active,.router-leave-active{
        transition: opacity .5s
    }
    .router-enter,.router-leave-to{
        opacity: 0;
    }
  }
</style>
