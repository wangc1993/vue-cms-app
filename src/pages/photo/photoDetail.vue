<template>
  <div class="photoDetail temp">
    <NavBar text="图文详情"></NavBar>
    <div class="photo-title">
        <p v-text="imgInfo.title"></p>
        <div>
          <span>发起日期：{{imgInfo.add_time}}</span>
          <span>{{imgInfo.click}}次浏览</span>
          <span>分类：民生经济</span>
        </div>
    </div>
    <div class="preview">
      <vue-preview :slides="imgs" @close="handleClose"></vue-preview>
    </div>
    <div class="photo-desc">
        <p v-html="imgInfo.content"></p>
    </div>
    <Comment :cid="commentId"></Comment>
  </div>
</template>

<script>
  import { getPhotoDetailInfo } from '@/api/api.js';
  export default {
    name: 'photoDetail',
    data() {
      return {
        imgInfo: {},
        imgs: [],
        commentId:''
      }
    },
    created() {
      getPhotoDetailInfo(this.$route.query.id).then(res => {
        this.commentId = res.data.data.cid;
        this.imgInfo = res.data.data;
        this.imgs = res.data.data.imgs;
        this.imgs.forEach((ele)=>{
            ele.w=300;
            ele.h=200;
            ele.msrc = ele.src;
        })
      })
    },
    methods: {
      handleClose () {
          console.log('close event')
        }
    }
  }
</script>

 <style scoped lang="scss">
  .photoDetail {
    .photo-title,
    .photo-desc {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-bottom: 5px;
      margin-bottom: 5px;
      padding-left: 5px;
    }
    .photo-title {
      font-size: 12px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      p {
        color: #13c2f7;
        font-size: 20px;
        font-weight: bold;
      }
      span {
        margin-right: 20px;
      }
    }
    .photo-desc {
      p {
        font-size: 18px;
      }
    }
  }
 </style>
