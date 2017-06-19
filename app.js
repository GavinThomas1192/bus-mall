'use-strict';

var allProducts = [];

function saleItem(name, path, tally, views) {
  this.name = name;
  this.path = path;
  this.tally = tally;
  this.views = views;
  allProducts.push(this);
};

var chair = new saleItem('bag', 'img/bag.jpg', 0, 0);
var chair = new saleItem('banana', 'img/banana.jpg', 0, 0);
var chair = new saleItem('bathroom', 'img/bathroom.jpg', 0, 0);
var chair = new saleItem('boots', 'img/boots.jpg', 0, 0);
var chair = new saleItem('breakfast', 'img/breakfast.jpg', 0, 0);
var chair = new saleItem('bubblegum', 'img/bubblegum.jpg', 0, 0);
var chair = new saleItem('chair', 'img/chair.jpg', 0, 0);
var chair = new saleItem('cthulhu', 'img/cthulhu.jpg', 0, 0);
var chair = new saleItem('dog-duck', 'img/dog-duck.jpg', 0, 0);
var chair = new saleItem('dragon', 'img/dragon.jpg', 0, 0);
var chair = new saleItem('pen', 'img/pen.jpg', 0, 0);
var chair = new saleItem('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
var chair = new saleItem('scissors', 'img/scissors.jpg', 0, 0);
var chair = new saleItem('shark', 'img/shark.jpg', 0, 0);
var chair = new saleItem('sweep', 'img/sweep.jpg', 0, 0);
var chair = new saleItem('tauntaun', 'img/tauntaun.jpg', 0, 0);
var chair = new saleItem('unicorn', 'img/unicorn.jpg', 0, 0);
var chair = new saleItem('usb', 'img/usb.jpg', 0, 0);
var chair = new saleItem('water-can', 'img/water-can.jpg', 0, 0);
var chair = new saleItem('wind-glass', 'img/wind-glass.jpg', 0, 0);

console.log(allProducts);
