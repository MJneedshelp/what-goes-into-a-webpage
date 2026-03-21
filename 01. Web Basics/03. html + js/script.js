const button = document.getElementById("myButton");
const title = document.getElementById("title");

button.addEventListener("click", function () {
  title.innerText = "Button clicked!";
});