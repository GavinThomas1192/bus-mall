'use-strict';
//TOdo
//**Make random number function
//**Link to picutres
var allProducts = [];
var queProducts = [];
var container = document.getElementById('itemChoices');

function saleItem(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.shownTally = 0;
  allProducts.push(this);
};

var bag = new saleItem('bag', 'img/bag.jpg');
var banana = new saleItem('banana', 'img/banana.jpg');
var bathroom = new saleItem('bathroom', 'img/bathroom.jpg');
var boots = new saleItem('boots', 'img/boots.jpg');
var breakfast = new saleItem('breakfast', 'img/breakfast.jpg');
var bubblegum = new saleItem('bubblegum', 'img/bubblegum.jpg');
var chair = new saleItem('chair', 'img/chair.jpg');
var cthulhu = new saleItem('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new saleItem('dog-duck', 'img/dog-duck.jpg');
var dragon = new saleItem('dragon', 'img/dragon.jpg');
var pen = new saleItem('pen', 'img/pen.jpg');
var petSweep = new saleItem('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new saleItem('scissors', 'img/scissors.jpg');
var shark = new saleItem('shark', 'img/shark.jpg');
var sweep = new saleItem('sweep', 'img/sweep.png');
var tauntaun = new saleItem('tauntaun', 'img/tauntaun.jpg');
var unicorn = new saleItem('unicorn', 'img/unicorn.jpg');
var usb = new saleItem('usb', 'img/usb.gif');
var waterCan = new saleItem('water-can', 'img/water-can.jpg');
var windGlass = new saleItem('wind-glass', 'img/wine-glass.jpg');

console.log(allProducts);

//Math function
function calcRandomNumber() {
  for (var i = 0; i < 3; i++) {
    var randomDigit = Math.floor(Math.random() * allProducts.length);
    queProducts.push(allProducts[randomDigit]);
  }
};

function renderImage() {
  var itemChoices = document.getElementById('itemChoices');
  itemChoices.innerHTML = '';
  for (var i = 0; i < queProducts.length; i++) {
    imgEl = document.createElement('img');
    imgEl.src = queProducts[i].path;
    itemChoices.appendChild(imgEl);
  }
  queProducts = [];
};

container.addEventListener('click', handleClick);

function handleClick(e) {
  calcRandomNumber();
  renderImage();
};

// function handleClick(e) {
//   console.log(event.target);
//   if (event.target.id === 'stooges') {
//     alert('You had one job! Click on only the h2 please!');
//   }
//
//   var larry = document.getElementById('larry');
//   var curly = document.getElementById('curly');
//   var moe = document.getElementById('moe');
//   var iggy = document.getElementById('iggy');
//
//   if (event.target.id === 'larry') {
//     larryClicks += 1;
//     console.log('Larry has been clicked ' + larryClicks + ' times.');
//   }
//   if (event.target.id === 'curly') {
//     curlyClicks += 1;
//     console.log('Curly has been clicked ' + curlyClicks + ' times.');
//   }
//   if (event.target.id === 'moe') {
//     moeClicks += 1;
//     console.log('Moe has been clicked ' + moeClicks + ' times.');
//   }
//   if (event.target.id === 'iggy') {
//     iggyClicks += 1;
//     console.log('Iggy has been clicked ' + iggyClicks + ' times.');
//   }
// };
//     console.log('Iggy has been clicked ' + iggyClicks + ' times.');
//   }
// };
