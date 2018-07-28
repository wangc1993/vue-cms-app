<template>
  <div class="goodComment temp">
    <NavBar text="商品评论"></NavBar>
    <Comment :cid="$route.query.id"></Comment>
  </div>
</template>
