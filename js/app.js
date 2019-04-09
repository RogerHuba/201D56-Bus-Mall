'use strict';

let allProducts = [];
let productPicture1 = document.getElementById('pod-pic1');
let productPicture2 = document.getElementById('pod-pic2');
let productPicture3 = document.getElementById('pod-pic3');
let randomArray = [];

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
    let rnd1 = Math.floor(Math.random() * allProducts.length);
    while (randomArray.includes(rnd1) === true) {
      rnd1 = Math.floor(Math.random() * allProducts.length);
    }
    if (randomArray.length < 6) {
      randomArray.push(rnd1);
    } else {
      randomArray.pop();
      randomArray.unshift(rnd1);
    }
    allProducts[rnd1].productViews +=1;

    let rnd2 = Math.floor(Math.random() * allProducts.length);
    while (randomArray.includes(rnd2) === true) {
      rnd2 = Math.floor(Math.random() * allProducts.length);
    }
    if (randomArray.length < 6) {
      randomArray.push(rnd2);
    } else {
      randomArray.pop();
      randomArray.unshift(rnd2);
    }
    allProducts[rnd2].productViews +=1;

    let rnd3 = Math.floor(Math.random() * allProducts.length);
    while (randomArray.includes(rnd3) === true) {
      rnd3 = Math.floor(Math.random() * allProducts.length);
    }
    if (randomArray.length < 6) {
      randomArray.push(rnd3);
    } else {
      randomArray.pop();
      randomArray.unshift(rnd3);
    }
    allProducts[rnd3].productViews +=1;

    while ((productPicture1.alt === allProducts[rnd1].name) && (productPicture2.alt === allProducts[rnd2].name
      && productPicture3.alt === allProducts[rnd3].name)) {
      rnd1 = Math.floor(Math.random() * allProducts.length);
    }

    //TODO: Refactor to loop through to add new pictures.
    maxTotalClicks -= 1;
    allProducts[rnd1].productViews += 1;
    productPicture1.src = allProducts[rnd1].filePath;
    productPicture1.alt = allProducts[rnd1].name;
    productPicture1.title = allProducts[rnd1].name;

    allProducts[rnd2].productViews += 1;
    productPicture2.src = allProducts[rnd2].filePath;
    productPicture2.alt = allProducts[rnd2].name;
    productPicture2.title = allProducts[rnd2].name;

    allProducts[rnd3].productViews += 1;
    productPicture3.src = allProducts[rnd3].filePath;
    productPicture3.alt = allProducts[rnd3].name;
    productPicture3.title = allProducts[rnd3].name;

  } else {
    productPicture1.removeEventListener('click', displayTotals);
    productPicture2.removeEventListener('click', displayTotals);
    productPicture3.removeEventListener('click', displayTotals);

  }
}

function handleClick(event) {
  populateRandomProduct()
  //TODO: Add product click handler
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
  for (let i=0; i < allProducts.length; i++){
    console.table(allProducts);
  }
}

//TODO: Make a random function.
