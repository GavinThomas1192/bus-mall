'use-strict';
//TOdo
//****I need to put titles, percentages, and votesForTitles into local data
var titles = [];
var percentages = [];
var votesForTitles = [];
var graphShownTally = [];
var prodNew = [];
var prodLast = [];
var queProducts = [];
SaleItem.allProducts = [];
SaleItem.totalTally = [];
SaleItem.container = document.getElementById('itemChoices');
SaleItem.chartButton = document.createElement('button');

updateDataSet();

function SaleItem(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.shownTally = 0;
  this.conversion = 0;
  SaleItem.allProducts.push(this);
};

function updateDataSet() {
  var storedAllProducts = JSON.parse(localStorage.getItem('dataObject'));
  if (storedAllProducts !== null) {
    SaleItem.allProducts = storedAllProducts;
  } else {
    var bag = new SaleItem('bag', 'img/bag.jpg');
    var banana = new SaleItem('banana', 'img/banana.jpg');
    var bathroom = new SaleItem('bathroom', 'img/bathroom.jpg');
    var boots = new SaleItem('boots', 'img/boots.jpg');
    var breakfast = new SaleItem('breakfast', 'img/breakfast.jpg');
    var bubblegum = new SaleItem('bubblegum', 'img/bubblegum.jpg');
    var chair = new SaleItem('chair', 'img/chair.jpg');
    var cthulhu = new SaleItem('cthulhu', 'img/cthulhu.jpg');
    var dogDuck = new SaleItem('dog-duck', 'img/dog-duck.jpg');
    var dragon = new SaleItem('dragon', 'img/dragon.jpg');
    var pen = new SaleItem('pen', 'img/pen.jpg');
    var petSweep = new SaleItem('pet-sweep', 'img/pet-sweep.jpg');
    var scissors = new SaleItem('scissors', 'img/scissors.jpg');
    var shark = new SaleItem('shark', 'img/shark.jpg');
    var sweep = new SaleItem('sweep', 'img/sweep.png');
    var tauntaun = new SaleItem('tauntaun', 'img/tauntaun.jpg');
    var unicorn = new SaleItem('unicorn', 'img/unicorn.jpg');
    var usb = new SaleItem('usb', 'img/usb.gif');
    var waterCan = new SaleItem('water-can', 'img/water-can.jpg');
    var wineGlass = new SaleItem('wine -glass', 'img/wine-glass.jpg');
  }
}

function updateGraphArrays() {
  for (var i = 0; i < SaleItem.allProducts.length; i++) {
    titles.push(SaleItem.allProducts[i].name);
    votesForTitles.push(SaleItem.allProducts[i].tally);
    graphShownTally.push(SaleItem.allProducts[i].shownTally);
    percentages.push(SaleItem.allProducts[i].conversion);
  }
};


function calcConversion() {
  for (var i = 0; i < SaleItem.allProducts.length; i++) {
    if (SaleItem.allProducts[i].tally === 0) {
      SaleItem.allProducts[i].conversion = 0;
    } else {
      SaleItem.allProducts[i].conversion = SaleItem.allProducts[i].tally / SaleItem.allProducts[i].shownTally;
    }
  }
};

function getImage() {
  prodNew = [];
  while (prodNew.length < 3) {
    var select = Math.floor(Math.random() * (SaleItem.allProducts.length));
    if (checkMatch(prodNew, SaleItem.allProducts[select]) && checkMatch(queProducts, SaleItem.allProducts[select])) {
      prodNew.push(SaleItem.allProducts[select]);
      SaleItem.allProducts[select].shownTally++;
    }
  }
  queProducts = prodNew;
}

function checkMatch(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

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

SaleItem.chartButton.addEventListener('click', startGraphButton);
SaleItem.container.addEventListener('click', handleClick);

function startGraphButton(r) {
  alert('This data represents all participants who completed the survey.');
  updateGraphArrays();
  renderChart();
}


function handleClick(e) {
  for (var i = 0; i < SaleItem.allProducts.length; i++) {
    if (event.target.id === SaleItem.allProducts[i].name) {
      SaleItem.allProducts[i].tally += 1;
      SaleItem.totalTally.push(SaleItem.allProducts[i]);
    }

  }
  getImage();
  calcConversion();
  renderImage();
  unique();
  if (SaleItem.totalTally.length == 25) {
    SaleItem.container.removeEventListener('click', handleClick, false);
    SaleItem.container.innerHTML = 'Thank you for participating!';
    SaleItem.chartButton.textContent = 'View Results';
    SaleItem.container.appendChild(SaleItem.chartButton);
  }
  localStorage.setItem('dataObject', JSON.stringify(SaleItem.allProducts));
};

var data = {
  label: 'Description of Objects',
  labels: titles, // titles array we declared earlier
  datasets: [{
    label: 'Times Clicked',
    data: votesForTitles, // votes array we declared earlier
    backgroundColor: [
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',
      'rgba(45, 142, 244, 0.5)',

    ],
    hoverBackgroundColor: [
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb',
      '#bbb'
    ],
  }, {
    label: 'Times Shown',
    data: graphShownTally,
    backgroundColor: [
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)',
      'rgba(233, 43, 17, 0.5)'
    ]
  }, {
    label: 'Percentage Picked of Total Times Shown',
    data: percentages,
    backgroundColor: [
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000',
      '#000'

    ]
  }]
};

function renderChart() {
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      title: {
        display: true,
        text: 'Participants Choices',
        fontSize: 32,
        fontColor: '#000'
      },

    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1,
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 40
        }
      }]
    }
  });
  chartDrawn = true;
}
