<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(swipe, index) in swipeArr" :key="index">
        <a :href="swipe.url">
          <img :src="swipe.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: ['swipeArr']
  }
</script>

<style scoped lang="scss">
  /*轮播图样式*/
  .swiper {
    .mint-swipe{
        height:187px;
    }
    .mint-swipe img {
        height: 100%;
        width: 100%;
    }
  }
</style>
