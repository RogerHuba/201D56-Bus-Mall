'use strict';

let allProducts = [];
let productPicture1 = document.getElementById('pod-pic1');
let productPicture2 = document.getElementById('pod-pic2');
let productPicture3 = document.getElementById('pod-pic3');
let ctx = document.getElementById('summary').getContext('2d');
let clicks = [];
let name = [];

//removed for testing
// let displayResults = document.getElementById('click-results');
let randomArray = [0,0,0,0,0,0];

// Variable to change the number of click selections.  Can change for testing.
let clicksLeft = 25;

//Variable to change the number of pictures to display on screen.
let picturesToDisplayOnScreen = 4;

// Calls the function to push data through the constructor function.
seedData();

// Calls the function to populate random products.
populateRandomProduct();

// TODO: Refactor to a single event listener on div or section.
productPicture1.addEventListener('click', handleClick);
productPicture2.addEventListener('click', handleClick);
productPicture3.addEventListener('click', handleClick);

//Constructor Function to populate allProducts Array.
function MallProduct(name, productViews=0, productClicks=0)
{
  this.filePath = `img/${name}.jpg`;
  this.name = name;
  this.productViews = productViews;
  this.productClicks = productClicks;

  allProducts.push(this);
}

// Populate Random Product -> randomizer -> displayProductOnPage
function populateRandomProduct () {
  console.log('Clicks left: ',clicksLeft);
  if (clicksLeft > 0) {
    randomizer();
    clicksLeft -= 1;

  } else {
    productPicture1.removeEventListener('click', handleClick);
    productPicture2.removeEventListener('click', handleClick);
    productPicture3.removeEventListener('click', handleClick);
    displayTotals();
  }
}

function handleClick(event) {
  for (let i=0; i < allProducts.length;i++){
    if (event.target.alt === allProducts[i].name){
      allProducts[i].productClicks += 1;
    }
  }
  populateRandomProduct();
}

function seedData()
{
  new MallProduct('bag');
  new MallProduct('banana');
  new MallProduct('bathroom');
  new MallProduct('boots');
  new MallProduct('breakfast');
  new MallProduct('bubblegum');
  new MallProduct('chair');
  new MallProduct('cthulhu');
  new MallProduct('dog-duck');
  new MallProduct('dragon');
  new MallProduct('pen');
  new MallProduct('pet-sweep');
  new MallProduct('scissors');
  new MallProduct('shark');
  new MallProduct('sweep');
  new MallProduct('tauntaun');
  new MallProduct('unicorn');
  new MallProduct('usb');
  new MallProduct('water-can');
  new MallProduct('wine-glass');
}

//TODO: Refactor to display data in Chart JS Form.
function displayTotals(){
  updateChartArrays();
  getGraph();
  // for (let i=0; i < allProducts.length; i++){
  //   let newLine = `${allProducts[i].productClicks} votes for the ${allProducts[i].name}.`;
  //   let newElement = document.createElement('li');
  //   let newContent = document.createTextNode(newLine);
  //   newElement.appendChild(newContent);
  //   displayResults.appendChild(newElement);
  // }
}

function randomizer() {
  for (let i = 0; i < picturesToDisplayOnScreen; i++) {
    let rnd = Math.floor(Math.random() * allProducts.length);
    while (randomArray.includes(rnd) === true) {
      rnd = Math.floor(Math.random() * allProducts.length);
    }
    randomArray.pop();
    randomArray.unshift(rnd);
    allProducts[rnd].productViews += 1;

  }
    displayProductOnPage(randomArray[0],productPicture1);
    displayProductOnPage(randomArray[1],productPicture2);
    displayProductOnPage(randomArray[2],productPicture3);
}

function displayProductOnPage(number, element){
    allProducts[number].productViews += 1;
    element.src = allProducts[number].filePath;
    element.alt = allProducts[number].name;
    element.title = allProducts[number].name;
}

// function addElement(element, content, parent){
//   let docAdd = document.getElementsByTagName(parent);
//   let newElement = document.createElement(element);
//   let newContent = document.createTextNode(content);
//   newElement.appendChild(newContent);
//   docAdd.appendChild(newElement);
// }

function getGraph()
{
  let summary = new Chart(ctx,
    {
      type: 'bar',
      data:
        {
          //Need to loop through the name data
          labels: name,
          datasets: [
            {
              label: '# of Clicks',
              //Need to loop through the click data with %
              data: clicks,
              backgroundColor: [
                'crimson',
                'blue',
                'yellow',
                'orange',
                'violet',
                'crimson',
                'blue',
                'yellow',
                'orange',
                'violet',
                'crimson',
                'blue',
                'yellow',
                'orange',
                'violet',
                'crimson',
                'blue',
                'yellow',
                'orange',
                'violet'
              ]
            }]
        }
    });
}

function updateChartArrays() {
  for (let i = 0; i < allProducts.length; i++) {
    name[i] = allProducts[i].name;
    console.log('The click number is: ' + allProducts[i].productClicks);
    clicks[i] = allProducts[i].productClicks;

  }
}

// function clickOff() {
//   //Function added to remove the click from the event handler
// }
