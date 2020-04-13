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
        var i1 = document.createElement('I');
        i1.classList = 'far fa-times-circle';        
        i1.addEventListener('click',delitem);
        var i2 = document.createElement('I');
        i2.classList = 'far fa-edit';
        i2.addEventListener('click',edititem);
        var i3 = document.createElement('I');
        i3.classList = 'far fa-check-circle';
        i3.addEventListener('click',checkitem);        
        item.appendChild(i1);
        item.appendChild(i2);
        item.appendChild(i3);
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

function checkitem(){
    this.parentElement.firstChild.style.textDecoration = 'line-through';
    this.parentElement.firstChild.style.color = 'gray';
    this.style.color = 'rgba(187, 214, 155, 1)';
    this.style.cursor = 'context-menu'
}

function edititem(){
    var input = document.querySelector('input');
    input.value = this.parentElement.firstChild.innerHTML;
    var item = this.parentElement;
    item.parentElement.removeChild(item)
}

addbtn.addEventListener('click',additem);

clearbtn.addEventListener('click',clearitems);
