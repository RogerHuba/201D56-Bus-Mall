'use strict';

let allProducts = [];
let productPicture1 = document.getElementById('pod-pic1');
let productPicture2 = document.getElementById('pod-pic1');
let productPicture3 = document.getElementById('pod-pic1');
let rnd;

// Variable to change the number of click selections.  Can change for testing.
let maxTotalClicks = 25;

// TODO: Refactor to change the number of pictures to be displayed in the screen
// let picturesToDisplayOnScreen = 3;

// Calls the function to push data through the constructor function.
seedData();

// Calls the function to populate random products.
populateRandomProduct();

// TODO: Refactor to a single event listener on div or section.
productPicture1.addEventListener('click', handleClick);
productPicture2.addEventListener('click', handleClick);
productPicture3.addEventListener('click', handleClick);


function MallProduct(name)
{
  this.filePath = `img/${name}.jpg`;
  this.name = name;
  this.productViews = 0;
  this.productClicks = 0;

  allProducts.push(this);
}

function populateRandomProduct () {
  if (maxTotalClicks > 0) {
    randomizer(rnd);
    while ((productPicture1.alt === allProducts[rnd].name)  && (productPicture2.alt === allProducts[rnd].name
      && productPicture3.alt === allProducts[rnd].name)){
      randomizer();
      console.log('Dupe Detect');
    }

    maxTotalClicks -= 1;
    allProducts[rnd].productViews += 1;
    productPicture1.src = allProducts[rnd].filePath;
    productPicture1.alt = allProducts[rnd].name;
    productPicture1.title = allProducts[rnd].name;
  } else {
    productPicture1.removeEventListener('click', displayTotals)
  }
}

function handleClick(event) {
  console.log(event.target)

  populateRandomProduct()
}

//TODO: Refactor to add to local storage.
function seedData()
{
  new MallProduct('bag');
  new MallProduct('banana');
  new MallProduct('bathroom');
  new MallProduct('boots');
  new MallProduct('breakfast');
  new MallProduct('bubblegum');
  new MallProduct('chair',);
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
  console.table(allProducts);
}

function randomizer (rnd){
  rnd = Math.floor(Math.random() * allProducts.length);
  return rnd;
}
