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
saleItem.allProducts = [];
saleItem.totalTally = [];
saleItem.container = document.getElementById('itemChoices');
saleItem.chartButton = document.createElement('button');

function saleItem(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.shownTally = 0;
  this.conversion = 0;
  saleItem.allProducts.push(this);
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
var wineGlass = new saleItem('wine-glass', 'img/wine-glass.jpg');

function updateGraphArrays() {
  for (var i = 0; i < saleItem.allProducts.length; i++) {
    titles.push(saleItem.allProducts[i].name);
    votesForTitles.push(saleItem.allProducts[i].tally);
    graphShownTally.push(saleItem.allProducts[i].shownTally);
    percentages.push(saleItem.allProducts[i].conversion);
  }
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

function calcConversion() {
  for (var i = 0; i < saleItem.allProducts.length; i++) {
    if (saleItem.allProducts[i].tally === 0) {
      saleItem.allProducts[i].conversion = 0;
    } else {
      saleItem.allProducts[i].conversion = saleItem.allProducts[i].tally / saleItem.allProducts[i].shownTally;
    }
  }
};

function getImage() {
  prodNew = [];
  while (prodNew.length < 3) {
    var select = Math.floor(Math.random() * (saleItem.allProducts.length));
    if (checkMatch(prodNew, saleItem.allProducts[select]) && checkMatch(queProducts, saleItem.allProducts[select])) {
      prodNew.push(saleItem.allProducts[select]);
      saleItem.allProducts[select].shownTally++;
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

saleItem.chartButton.addEventListener('click', startGraphButton);
saleItem.container.addEventListener('click', handleClick);

function startGraphButton(r) {
  updateGraphArrays();
  renderChart();
}


function handleClick(e) {
  for (var i = 0; i < saleItem.allProducts.length; i++) {
    if (event.target.id === saleItem.allProducts[i].name) {
      saleItem.allProducts[i].tally += 1;
      saleItem.totalTally.push(saleItem.allProducts[i]);
    }

  }
  getImage();
  calcConversion();
  renderImage();
  if (saleItem.totalTally.length == 25) {
    saleItem.container.removeEventListener('click', handleClick, false);
    saleItem.container.innerHTML = 'Thank you for participating! You may view your results in a table by clicking the button to the right.';
    saleItem.chartButton.textContent = 'View Results';
    saleItem.container.appendChild(saleItem.chartButton);

  }
  if (!window.localStore) {
    console.log('Exists');
    //These getItem out of localStorage
    titles = JSON.parse(localStorage.titles);
    percentages = JSON.parse(localStorage.percentages);
    votesForTitles = JSON.parse(localStorage.votesForTitles);
    graphShownTally = JSON.parse(localStorage.graphShownTally);
    //These setItem into localStorage
    localStorage.titles = JSON.stringify(titles);
    localStorage.percentages = JSON.stringify(percentages);
    localStorage.votesForTitles = JSON.stringify(votesForTitles);
    localStorage.graphShownTally = JSON.stringify(graphShownTally);
  }

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
