<template>
  <div class="comment">
    <ul>
      <li class="header-comment">
        <div>
          <span>评论</span>
          <span><a @click="goBack">返回</a></span>
        </div>
      </li>
      <li class="txt-comment">
        <textarea v-model="msg"></textarea>
      </li>
      <li>
        <mt-button @click="sendComment" size="large" type="primary">发表评论按钮</mt-button>
      </li>
      <li class="footer-comment">
        <div>
          <span>评论列表</span>
          <span>66条评论</span>
        </div>
      </li>
    </ul>
    <ul class="comment-list">
      <li v-for="(comment,index) in comments" :key="index">
        {{comment.user_name}}：{{comment.content}} {{comment.add_time}}
      </li>
    </ul>
    <div v-if="moreBool">
      <mt-button type="danger" size="large" plain @click="loadByPage">加载更多</mt-button>
    </div>
    <div v-else>
      <mt-button type="danger" size="large" plain>已全部加载</mt-button>
    </div>
  </div>
</template>

<script>
  import { getCommentInfo, sendComment } from '@/api/api.js';
  export default {
    name: 'Comment',
    props: ['cid'],
    data() {
      return {
        msg: '',
        comments: [],
        pageIndex: 1,
        moreBool: true
      }
    },
    created() {
      getCommentInfo({cid: this.cid, pageIndex: this.pageIndex}).then(res => {
        this.comments = res.data.data;
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      sendComment() {
        sendComment({msg: this.msg}).then(res => {
          this.msg = '';
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      },
      loadByPage() {
        getCommentInfo({cid: this.cid, pageIndex: ++this.pageIndex}).then(res => {
          if(res.data.data.length === 0){
            this.moreBool = false;
          }else{
            this.comments = this.comments.concat(res.data.data);
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  /*评论样式 开始*/
  .comment {
    padding: 0 2px;
    .header-comment, .footer-comment {
      height: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      line-height: 30px;
      margin-bottom: 5px;
      div {
        display: flex;
        flex-direction: wrap;
        justify-content: space-between;
        span {
          padding: 0 5px;
          &:nth-child(1) {
            font-weight: bold;
          }
        }
      }
    }
    .txt-comment {
      padding: 5px;
      textarea {
        margin-bottom: 5px;
      }
    }
  }
  /*评论样式 结束*/
</style>
