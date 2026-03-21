const form = document.getElementById("LoginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const button = document.getElementById("btn");
const resultMsg = document.getElementById("result");


form.addEventListener("submit", (e) =>
{
    
    e.preventDefault();
    const username = username.value;
    const password = password.value

    if (!username)
    {
        resultMsg.innerText = "Username required";
    }
    else if (!password)
    {
        resultMsg.innerText = "Password required";
    }
    else
    {
        resultMsg.innerText = "Success";
    }

});