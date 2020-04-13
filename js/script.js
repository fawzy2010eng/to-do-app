'use strict'

//assigning the buttons
var addbtn = document.querySelector('#add');
var clearbtn = document.querySelector('#clear');
//var delbtn = document.querySelectorAll('.fa-times-circle');

//function for adding item to the list
function additem(){
    var input = document.querySelector('input');
    if(input.value != ''){
        var item = document.createElement("div");
        item.className = 'item';
        var task = document.createElement("H4");
        var content = document.createTextNode(input.value);
        task.appendChild(content);                                  
        item.appendChild(task);
        var items = document.querySelector('div');
        item.innerHTML = item.innerHTML + '<i onclick="delitem()" class="far fa-times-circle"></i>';
        item.innerHTML = item.innerHTML + '<i class="far fa-edit"></i>';
        item.innerHTML = item.innerHTML + '<i class="far fa-check-circle"></i>';
        items.appendChild(item);
        input.value = '';
    }else{
        alert('no item added')
    }
}

//function for clearing te list
function clearitems(){
    var items = document.querySelector('div');
    items.innerHTML = ''
}

//function for deleting item from the list
function delitem(){
    var item = this.parentElement;
    item.parentElement.removeChild(item)
}

addbtn.addEventListener('click',additem);

clearbtn.addEventListener('click',clearitems);
