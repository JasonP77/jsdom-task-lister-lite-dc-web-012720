document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".form");
  form.addEventListener('submit', createTodo)}
);
;

function createTodo(e) {
  e.preventDefault();
  let ul = getUl();
  let li = createLi();
  let input = document.querySelector(".input_field").value;
  li.innerText = input;
  let button = createButton();
  ul.appendChild(li);
  li.appendChild(button);
  e.target.reset()
}

function getUl(){
  return document.querySelector('#tasks');
}

function createLi(){
  let li = document.createElement("li");
  return li
}

function createButton() {
  let button = document.createElement("button")
  button.innerText = "Delete"
  button.addEventListener('click', deleteItem)
  return button 
}

function deleteItem(e) {
  e.preventDefault()
  let selection = e.target.parentElement 
  selection.remove() 
}
