const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  
  
  
  function newTodo() {
    
    const todoText = prompt("Add a todo!")
  
    
    todoElement = makeTodo(todoText)
  
   
    render(todoElement, list)
  
    
    countNewTodo(itemCountSpan)
  
 
    countUncheckedTodo(uncheckedCountSpan)
  
    
    const checkbox = todoElement.lastElementChild
  
  
    checkbox.addEventListener("click", function(event) {
      if (event.target.checked) {
        countCheckedTodo(uncheckedCountSpan)
      } else {
        countUncheckedTodo(uncheckedCountSpan)
      }
    })
  
  }
  
  
  
  function makeTodo(todoText) {
 
    const li = document.createElement("li")
  
    addStyle(classNames.TODO_ITEM, li)
  
 
    const span = document.createElement("span")
  
    addStyle(classNames.TODO_TEXT, span)
  
   
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
  
    addStyle(classNames.TODO_CHECKBOX, checkbox)
  
   
    span.textContent = todoText
  

    render(span, li)
  
    
    render(checkbox, li)
  
   
    return li
  
  }
  
  
  
  function render(element, destination) {
    destination.appendChild(element)
  }
  
  
 
  function countNewTodo(element) {
    count(element)
  }
  
  

  function countUncheckedTodo(element) {
    count(element)
  }
  
  
  function count(element) {
    let count = Number(element.innerHTML)
    count++
    element.innerHTML = count.toString()
  }
  
  
  
  function countCheckedTodo(element) {
    let count = Number(element.innerHTML)
    count--
    element.innerHTML = count.toString()
  }
  
  
  function addStyle(style, element) {
    element.setAttribute("class", style)
  }
  function removeTodo() {
   a=0;
    list.removeChild(list.lastElementChild);
    list.removeChild(list.lastElementChild);
    list.removeChild(list.lastElementChild);

    
    if(a == 0){
      itemCountSpan.innerHTML = a;
      uncheckedCounSpan.innerHTML = unchecked;
    }
    else{
      a--;
      itemCountSpan.innerHTML = a;
      unchecked--;
      uncheckedCounSpan.innerHTML = unchecked;
    }
  }