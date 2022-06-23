'use strict;'

// Create a constructor function that creates an object associated with each product, and has the following properties:

let allProducts = [];
let maxClicks = 25;
// this array is going to hold
let productNames = ['bag','banana','bathroom','boots'];
let totalClicks = 0;
let timesClicked = [];

// this array holds number of times clicked

// to do. make a times clicked array. push 3 clicks inside images inside the array.

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// an algorithm is a step list of instructions to be executed.
// this is a constructor it makes objects
function Product(name,path){
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.timeShown = 0;
    this.timesClicked = 0;
    this.name=name;
    this.path=path;
    this.trackClicks
    allProducts.push(this);
    }
    
    // Product.trackClicks = function(){
    //     console.log('you clicked image' + this.name);
    //     }

function getRandomImage(){
    // gives me a whole number
    return Math.floor(Math.random()*productnames.length)
}


// get elements from HTML file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let img_one = document.querySelector('#image-container img:first-child')
let img_two = document.querySelector('#image-container img:nth-child(2)')
let img_three = document.querySelector('#image-container img:nth-child(3)')
let resultsButton = document.getElementById('results-button')

// instance variable -> Objects

function constructImages(){


    let bag = new Product('bag','./assets/bag.jpg');
    let banana = new Product('banana','./assets/banana.jpg');
    let bathroom = new Product('bathroom','./assets/bathroom.jpg');
    // let bag0 = new Product(productNames(0),'./assets' + productNames(0) + '.png' )


    //I want to make an image for every time in the production array
    // for(let i = 0;i<productNames.length;i++){
        // get both images and

         // add the src attribute to the images

    img_one.setAttribute('src',bag.path);
    img_two.setAttribute('src',banana.path);
    img_three.setAttribute('src',bathroom.path);
    img_one.setAttribute('alt',bag.name);
    img_two.setAttribute('alt',banana.name);
    img_three.setAttribute('alt',bathroom.name);


    
   
    // trackClicks(banana)
    img_one.addEventListener('click',function(){
    trackClicks(bag)
    timeShown(bag)

    });
    img_two.addEventListener('click',function(){
        trackClicks(banana);
        timesShown(banana);
    });
    
    img_three.addEventListener('click',function(){
        trackClicks(bathroom);
        timeShown(bathroom);
    
    });

    }
    
    
    // function trackClicks (e){
    //     console.log('you clicked on '+ productNames.length);
    // }

    constructImages()

    // make a function to randomly display images
    function displayRandomImage(){

       // this function needs to call the randomizer algorithm
    }
    
    
// make a function to keep track of the times a certain object was clicked
function trackClicks(product){

// need to pass an object to this function

    console.log(product)

// IF the object is clicked ->
// check the timeClicked property against the max clicks
if(product.timesClicked < 25){
// THEN increase the value of timesClicked by one per click
product.timesClicked++
console.log(product.timesClicked)
}
else{
     timesClicked.push(bag.timesClicked, banana.timesClicked, bathroom.timesClicked, boots.timesClicked);
    alert('too many clicks')
}
}

// make a function that keeps track of how many times an image was shown
function timeShown(product){
// we need to pass an object to this function
if(product.name === img_one['alt']){
    console.log(product.name + ' is on the page')
}
else{
    console.log('there is no image here')
}
//IF 
}

function displayResults(productsArray){
    
for(let i=0;i<productsArray.length;i++){
    product = productsArray[i]
    // console.log(product)
    // let resultMessage =
    console.log('this product was clicked'+ product.time)
    console.log('this product was shown' + product.timeShown + 'times')
    console.log('this product is called' + product.name )             // ${}
    console.log('you can find this product at : ' + product.path + '!!!')
}
}


function showResults () {
    if(totalClicks === maxClicks){
        displayResults(allProducts)
    }
}

let canvas = document.getElementById('myChart');
  
// next we need to create a chart.
const ctx = canvas.getContext('2d'); // making an object to draw 2d!

// This is my chart!!
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: productNames, // pass array to our label data! 
      datasets: [{
          label: '# of Clicks',
          data: totalClicks, // Has to match the label data!!
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});




displayResults(allProducts)

constructImages()