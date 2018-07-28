<template>
  <div class="navBar">
    <header id="header" class="mui-bar mui-bar-nav">
      <a @click="goBack" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">{{text}}</h1>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['text'],
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">
  #header {
    margin-top: 40px;
  }
</style>
