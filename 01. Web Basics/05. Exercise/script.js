const form = document.getElementById("LoginForm")
const button = document.getElementById("btn");
const resultMsg = document.getElementById("result");

button.addEventListener("click", function (event) 
    {
        event.preventDefault();
        resultMsg.innerText = "Loading...";
    }
);