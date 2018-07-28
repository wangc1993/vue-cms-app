import Mock from 'mockjs';

const photoList = [];
for (let i = 0; i < 21; i++) {
  photoList.push(Mock.mock({
          'type': i,
          'id': Mock.Random.guid(),
          'image_url': Mock.Random.image('120x660','#ccc'),
          'title': Mock.Random.ctitle(20),
          'content': Mock.Random.cparagraph(5)
        }));
}

const photoDetailList = [];
for (let i = 0; i < 21; i++) {
  photoDetailList.push(Mock.mock({
          'id': i.toString(),
          'cid': i,
          'click': Mock.Random.natural(10,30),
          'add_time': Mock.Random.date('yyyy-MM-dd'),
          'title': Mock.Random.ctitle(20),
          'content': Mock.Random.cparagraph(5),
          'imgs': [
            {'src': Mock.Random.image('100x60','#ccc')},
            {'src': Mock.Random.image('100x60','#ccc')},
            {'src': Mock.Random.image('100x60','#ccc')},
            {'src': Mock.Random.image('100x60','#ccc')},
            {'src': Mock.Random.image('100x60','#ccc')}
          ]
        }));
}

const commentList = [];
for (let i = 0; i < 20; i++) {
  commentList.push(Mock.mock({
          'id': i,
          'user_name': `自定义用户${i}`,
          'content': Mock.Random.ctitle(10),
          'add_time': Mock.Random.date('yyyy-MM-dd')
        }));
}

const goodsList = [];
for (let i = 0; i < 20; i++) {
  goodsList.push(Mock.mock({
          'id': i,
          'title': Mock.Random.ctitle(10),
          'sell_price': Mock.Random.natural(1000,2000),
          'market_price': Mock.Random.natural(2000,3000),
          'stock_quantity': Mock.Random.natural(9,99),
          'image_url': Mock.Random.image('100x50','#ccc'),
        }));
}

const goodDetailList = [];
for (let i = 0; i < 20; i++) {
  goodDetailList.push(Mock.mock({
          'id': i,
          'title': Mock.Random.ctitle(10),
          'sell_price': Mock.Random.natural(1000,2000),
          'market_price': Mock.Random.natural(2000,3000),
          'stock_quantity': Mock.Random.natural(9,99),
          'goods_no': Mock.Random.string(5),
          'add_time': Mock.Random.date('yyyy-MM-dd'),
          'imgs': [
            {
              'url': 'http://www.baidu.com',
              'img': Mock.Random.image('100x60','#ccc')
            },
            {
              'url': 'http://www.baidu.com',
              'img': Mock.Random.image('100x60','#ccc')
            }
          ]
        }));
}

const cartInfoList = [];
for (let i = 0; i < 20; i++) {
  cartInfoList.push(Mock.mock({
          'cou': 1,
          'id': i,
          'title': Mock.Random.ctitle(10),
          'sell_price': Mock.Random.natural(1000,2000),
          'thumb_path': Mock.Random.image('100x60','#ccc')
        }));
}

export { photoList, photoDetailList, commentList, goodsList, goodDetailList, cartInfoList };
