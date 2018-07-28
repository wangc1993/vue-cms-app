let util = {};
let store = window.localStorage;
let cart = JSON.parse(store.getItem('cart') ||'{}');

/*添加商品(更新)*/
util.addCart = function(prod) {
  if(cart[prod.id]){
    cart[prod.id] += prod.num;
  }else {
    cart[prod.id] = prod.num;
  }
  /*保存到localStorage*/
  this.saveToStore();
}

util.deleteCart = function(id){
  delete cart[id];
  this.saveToStore();
}

/*获取到storage*/
util.getCarts = function(){
return JSON.parse(store.getItem('cart')||'{}');
}

/*获取总数*/
util.getTotalCount = function(){
  let sum = 0;
  for(let id in cart){
    sum += cart[id];
  }
  return sum;
}

util.saveToStore = function() {
  store.setItem('cart',JSON.stringify(cart));
}

export default util;
