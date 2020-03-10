document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".form");
  form.addEventListener('submit', createTodo)}
);
;

function createTodo(e) {
  e.preventDefault();
  let ul = getUl();
  let li = createLi();
  ul.appendChild(li);
  let input = document.querySelector(".input_field").value;
  li.innerText = input;
}

function getUl(){
  return document.querySelector('#tasks');
}

function createLi(){
  let li = document.createElement("li");
  return li
}

