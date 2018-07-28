<template>
  <div class="photoList temp">
    <NavBar text="图文分享"></NavBar>
    <div class="photo-header">
        <ul>
            <li v-for="category in categorys" :key="category.id">
                <a href="javascript:;" @click="loadImg(category.id)">{{category.title}}</a>
            </li>
        </ul>
    </div>
    <div class="photo-list">
        <ul>
            <li v-for="(photo, index) in photoList" :key="index">
                <router-link :to="{name: 'photoDetail', query:{id: photo.type}}">
                    <!-- 懒加载 -->
                    <img v-lazy="photo.image_url">
                    <p>
                        <span v-text="photo.title"></span>
                        <br>
                        <span v-text="photo.content"></span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
  import { getPhotoListInfo } from '@/api/api.js';
  export default {
    name: 'photoList',
    data() {
      return {
        categorys: [
          {
            id: 0,
            title: '全部'
          },
          {
            id: 1,
            title: '家居生活'
          },
          {
            id: 5,
            title: '摄影设计'
          },
          {
            id: 10,
            title: '明星美女'
          },
          {
            id: 15,
            title: '空间设计'
          },
          {
            id: 20,
            title: '古典美女'
          }
        ],
        photoList: []
      }
    },
    created() {
      /*第一次默认加载全部*/
      this.loadImg(0);
    },
    methods: {
      loadImg(id) {
        getPhotoListInfo(id).then(res => {
          this.photoList = res.data.data;
        }).catch(err=>{
            console.log(err);
        })
      }
    }
  }
</script>

 <style scoped lang="scss">
   .photoList {
    .photo-header ul {
      /*强制不换行*/
      white-space: nowrap;
      overflow-x: auto;
      padding-left: 0px;
      margin: 5px;
      li {
        list-style: none;
        display: inline-block;
        margin-left: 10px;
        height: 30px;
      }
    }
    .photo-list {
      ul {
        padding-left: 0px;
        margin: 0;
        li {
          list-style: none;
          position: relative;
          img {
            width: 100%;
            height: 230px;
            vertical-align: top;
          }
        }
      }
      p {
        position: absolute;
        bottom: 0px;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        margin-bottom: 0px;
        span {
          &:nth-child(1) {
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }
    /*图片懒加载的样式*/
    image[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
   }
 </style>
