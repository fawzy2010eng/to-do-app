'use strict'
//////////////////////////////////////////////////
////////////////the cart section//////////////////
//////////////////////////////////////////////////
var cartitem = document.querySelectorAll('.cartitem');
var delitembtn = document.querySelectorAll('.fa-trash')
var clearcartbtn = document.querySelector('#clearcart');
var checkoutbtn = document.querySelector('#checkout');
var totalprice = document.querySelector('.cacher > h3');
var cartbtn = document.querySelector('.cart');
//deleting item from the cart
function delitem(){
    var val = parseInt((this.parentElement.querySelector('h5').innerHTML).slice(0,-1));
    
    var current = parseInt((totalprice.innerHTML).substring(1));
    
    totalprice.innerHTML = '$' + (current-val);
    
    var item = this.parentElement;
    item.parentElement.removeChild(item);
}

//calc the price of te whole cart
function calcprice(){
    var total = 0;
    for(var i = 0; i < cartitem.length; i++){
            
    }
    alert(cartitem.length)
}

//clear the cart 
function clearcart(){
    document.querySelector('.items').innerHTML = ''
    totalprice.textContent = '$0'
}

//adding the event to the trash icon
for(var i = 0; i < delitembtn.length; i++){
    delitembtn[i].addEventListener('click',delitem)
}

//adding the event to clear the cart 
clearcartbtn.addEventListener('click',clearcart);

//showing and hiding the cart
cartbtn.addEventListener('click',function(){
    if((document.querySelector('div').classList).contains('on')){
        document.querySelector('.cacher').classList = 'off cacher'
    }else{
        document.querySelector('.cacher').classList = 'on cacher'
    }
    
})






///////////////////////////////////////////
///////////the filter section/////////////
//////////////////////////////////////////
var nameOfProduct = document.querySelectorAll('.images > div > div >h4');
var priceOfProduct = document.querySelectorAll('.images > div > div >h5');
//the divs of images classes
var firstdivs = document.querySelectorAll('.images > div ');
var images = document.querySelectorAll('.images > div img');
var cupcakes = [];
var sweets = [];
var cakes = [];
var doughnuts = [];
var allbtn = document.getElementById('all');
var cakebtn = document.getElementById('cake');
var cupcakebtn = document.getElementById('cupcake');
var sweetbtn = document.getElementById('sweet');
var doughnutbtn = document.getElementById('doughnut');
var input = document.querySelector('input');
var searchbtn = document.querySelector('.search > i');
var addToCartbtn = document.querySelectorAll('.images .image i');

//adding names and prices to products
for (var i = 0; i < images.length; i++){
    var name = images[i].getAttribute('src');
    if(name.includes('cup')){
        nameOfProduct[i].textContent = 'cupcake';
        priceOfProduct[i].textContent = '10$';
        cupcakes.push(images[i].parentElement.parentElement)
    }
    else if(name.includes('cake')){
        nameOfProduct[i].textContent = 'cake';
        priceOfProduct[i].textContent = '12$';
        cakes.push(images[i].parentElement.parentElement)
    }
    else if(name.includes('sweets')){
        nameOfProduct[i].textContent = 'sweets';
        priceOfProduct[i].textContent = '5$';
        sweets.push(images[i].parentElement.parentElement);
    }
    else{
        nameOfProduct[i].textContent = 'doughnut';
        priceOfProduct[i].textContent = '20$';
        doughnuts.push(images[i].parentElement.parentElement);
    }    
    
};

//adding to cart function to all buttons
for(var i = 0; i < addToCartbtn.length;i++){
    addToCartbtn[i].addEventListener('click',addtocart)
}

//creating functions for filtering
function showall(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "block";
        firstdivs[i].className = ''
    }
    for(var i = 1; i < firstdivs.length; i = i+3){
        firstdivs[i].className = 'mid'
    }
}

function showcupcake(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        cupcakes[i].style.display = 'block'
    }
    cupcakes[0].className = '';
    cupcakes[1].className = 'mid';
    cupcakes[2].className = ''
}

function showcake(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        cakes[i].style.display = 'block'
    }
    cakes[0].className = '';
    cakes[1].className = 'mid';
    cakes[2].className = ''
}

function showsweet(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        sweets[i].style.display = 'block'
    }
    sweets[0].className = '';
    sweets[1].className = 'mid';
    sweets[2].  className = ''    
}

function showdoughnut(){
    for(var i = 0; i < firstdivs.length; i++){
        firstdivs[i].style.display = "none";
    }
    for(var i = 0; i < cupcakes.length; i++){
        doughnuts[i].style.display = 'block'
    }
    doughnuts[0].className = '';
    doughnuts[1].className = 'mid';
    doughnuts[2].className = ''
}

function search(){
    var producttype = input.value;
      if(producttype === 'cake'){
          showcake();
      }else if(producttype === 'cupcake'){
          showcupcake()
      }else if(producttype === 'sweet'){
          showsweet()
      }else if(producttype === 'doughnut'){
          showdoughnut()
      }else if(producttype === 'all' || producttype == ''){
          showall()
      }else{
          alert('dosn\'t exsist')
      }
}

function addtocart(){
//    getting data from current product 
    var name = this.parentElement.parentElement.querySelector('h4').textContent;
    var price = this.parentElement.parentElement.querySelector('h5').textContent;
    var imagesrc = this.parentElement.querySelector('img').getAttribute('src');
    
//    creating new div 
    var item  = document.createElement('div');
    item.className = 'cartitem';
    item.innerHTML = `<img src=${imagesrc}>`;
    
    var cach = document.createElement('div');
    cach.className = 'cash';
    var h4 = document.createElement('h4');
    h4.textContent = name;
    cach.appendChild(h4);
    var h5 = document.createElement('h5');
    h5.textContent = price;
    cach.appendChild(h5);
    item.appendChild(cach);
    
    var icon = document.createElement('i');
    icon.classList = "fas fa-trash";
    item.appendChild(icon);
    icon.addEventListener('click',delitem)
    
//    adding the div to the cart
    document.querySelector('.items').appendChild(item);
    
    var newprice = parseInt(price.slice(0,-1));
    
    var current = parseInt((totalprice.textContent).substring(1));
    
    totalprice.textContent = '$' + (current+newprice);
}

allbtn.addEventListener('click',showall);

cupcakebtn.addEventListener('click',showcupcake);

doughnutbtn.addEventListener('click',showdoughnut);

cakebtn.addEventListener('click',showcake);

sweetbtn.addEventListener('click',showsweet);

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      search()
  }
});

searchbtn.addEventListener('click',function(){
    search()
})
