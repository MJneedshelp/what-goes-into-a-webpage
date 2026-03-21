const button = document.getElementById("myButton");
const title = document.getElementById("title");

button.addEventListener("mouseenter", function () {
  button.innerText = "Button hovered!";
});

button.addEventListener("click", function () {
  title.innerText = "Button clicked!";
});