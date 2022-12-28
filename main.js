const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add=document.querySelector('.add');

if(window.localStorage.getItem("todos")== undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item{
    construtor(name){
        this.createItem(name);

    }
    createitem(name){
        var itembox = document.createElement('div');
        itembox.classList.add('item');

        var input = document.createElement('input');
        input.type ="text";
        input.disabled=true;
        input.value =name;
        input.classList.add('item_input');

        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHtml= "EDIT";
        edit.addEventListener('click', () => this.remove(itemBox,name));

        var remove =document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input,name){
        if(input.disabled== true){
            input.disabled=!input.disabled;
        }
        else{
            
        }
    }
}