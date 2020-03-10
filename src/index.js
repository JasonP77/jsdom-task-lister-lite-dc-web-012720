document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".form");
  form.addEventListener('click', addFunction);
});

function addFunction() {
  let input = document.querySelector(".input_field").value; 
  console.log(input);
}
