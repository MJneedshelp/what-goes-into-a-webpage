const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "test@test.com" && password === "123") {
    message.innerText = "Login success";
  } else {
    message.innerText = "Login failed";
  }
});