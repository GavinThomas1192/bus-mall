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
  while (queProducts.length < 3) {
    for (var i = 0; i < 3; i++) {
      var randomDigit = Math.floor(Math.random() * allProducts.length);
      allProducts[randomDigit].shownTally += 1;
      queProducts.push(allProducts[randomDigit]);
    }
    unique();
  }
};

function unique() {
  var a = [], // uniques get placed into here
    b = 0; // counter to test if value is already in array 'a'

  for (i = 0; i < queProducts.length; i++) {
    var current = queProducts[i]; // get a value from the original array

    for (j = 0; j < a.length; j++) { // loop and check if value is in new array
      if (current != a[j]) {
        b++; // if its not in the new array increase counter
      }
    }

    if (b == a.length) { // if the counter increased on all values
      // then its not in the new array yet
      a.push(current); // put it in
    }

    b = 0; // reset counter
  }

  queProducts.length = 0; // after new array is finished creating delete the original array
  for (i = 0; i < a.length; i++) {
    queProducts.push(a[i]); // push all the new values into the original
  }

  return this; // return this to allow method chaining
}

function renderImage() {
  var itemChoices = document.getElementById('itemChoices');
  itemChoices.innerHTML = '';
  for (var i = 0; i < 3; i++) {
    imgEl = document.createElement('img');
    imgEl.src = queProducts[i].path;
    imgEl.id = queProducts[i].name;
    itemChoices.appendChild(imgEl);

  }
  queProducts = [];
};

container.addEventListener('click', handleClick);

function handleClick(e) {
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.id === allProducts[i].name) {
      allProducts[i].tally += 1;
    }

  }
  calcRandomNumber();
  unique();
  renderImage();
};
