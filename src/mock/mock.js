import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { photoList, photoDetailList, commentList, goodsList, goodDetailList, cartInfoList } from './data/user';
let _photoList = photoList;
let baseUrl="http://172.20.23.99";

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);
    /*获取图文列表信息*/
    mock.onGet(`${baseUrl}/data/photoList.php`).reply(config => {
      let filterList;
      if(config.params === 0){
        filterList = _photoList;
      }else {
        filterList = _photoList.filter(photo => {
          if(photo.type >= config.params && photo.type <= (config.params + 5)){
            return true;
          }
        })
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code:"1000",
            data:filterList
          }]);
        }, 1000);
      });
    });
    /*获取图文详情信息*/
    mock.onGet(`${baseUrl}/data/photoDetail.php`).reply(config => {
      let photoDetail = '';
      for(let i=0; i<photoDetailList.length; i++){
        if(config.params.toString() === photoDetailList[i].id){
          photoDetail = photoDetailList[i];
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code:"1000",
            data:photoDetail
          }]);
        }, 1000);
      });
    });
    /*获取评论信息*/
    mock.onGet(`${baseUrl}/data/comment.php`).reply(config => {
      let newComment = [];
      for(let i=0; i<commentList.length; i++){
        if((parseInt(config.params.pageIndex) - 1) * 5 <= commentList[i].id && commentList[i].id < parseInt(config.params.pageIndex) * 5){
          newComment.push(commentList[i]);
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code:"1000",
            data:newComment
          }]);
        }, 1000);
      });
    });
    /*收到comment提交*/
    mock.onPost(`${baseUrl}/sendComment.php`).reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            data: JSON.parse(config.data)
          }]);
        }, 1000);
      });
    });
    /*获取商品列表*/
    mock.onGet(`${baseUrl}/goodsList.php`).reply(config => {
      let newGoods = [];
      for(let i=0; i<goodsList.length; i++){
        if((parseInt(config.params) - 1) * 7 <= goodsList[i].id && goodsList[i].id < parseInt(config.params) * 7){
          newGoods.push(goodsList[i]);
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code:"1000",
            data:newGoods
          }]);
        }, 1000);
      });
    });
    /*获取商品详情*/
    mock.onGet(`${baseUrl}/goodDetail.php`).reply(config => {
      let newGood = {};
      for(let i=0; i<goodDetailList.length; i++){
        if(parseInt(config.params) === goodDetailList[i].id){
          newGood = goodDetailList[i];
          break;
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code:"1000",
            data:newGood
          }]);
        }, 1000);
      });
    });
    /*获取购物车信息*/
    mock.onGet(`${baseUrl}/cartInfo.php`).reply(config => {
      let newCart = [];
      let ids = config.params.cartIds;
      for(let i=0; i<cartInfoList.length; i++){
        for(let j=0; j<ids.length; j++){
          if(cartInfoList[i].id === parseInt(ids[j])) {
            newCart.push(cartInfoList[i])
          }
        }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code:"1000",
            data:newCart
          }]);
        }, 1000);
      });
    });
  }
};
