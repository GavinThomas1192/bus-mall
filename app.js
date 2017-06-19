'use-strict';

var allProducts = [];

function saleItem(name, path, tally, views) {
  this.name = name;
  this.path = path;
  this.tally = tally;
  this.views = views;
  allProducts.push(this);
};

var chair = new saleItem('Chair', 'img/chair.jpg', 2, 34);
console.log(allProducts);
