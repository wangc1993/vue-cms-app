import axios from 'axios';

let baseUrl="http://172.20.23.99";
/*获取图文列表信息*/
export const getPhotoListInfo = params =>{ return axios.get(`${baseUrl}/data/photoList.php`,{params}) }
/*获取图文详情信息*/
export const getPhotoDetailInfo = params =>{ return axios.get(`${baseUrl}/data/photoDetail.php`,{params}) }
/*获取评论信息*/
export const getCommentInfo = params =>{ return axios.get(`${baseUrl}/data/comment.php`,{params}) }
/*提交评论*/
export const sendComment = params =>{ return axios.post(`${baseUrl}/sendComment.php`,params)}
/*获取商品列表*/
export const getGoodsList = params =>{ return axios.get(`${baseUrl}/goodsList.php`,{params})}
/*获取商品详情*/
export const getGoodDetail = params =>{ return axios.get(`${baseUrl}/goodDetail.php`,{params})}/*获取购物车信息*/
export const getCartInfo = params =>{ return axios.get(`${baseUrl}/cartInfo.php`,{params})}
