const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function buttonClick(){
    console.log("click!");
}
loginButton.addEventListener("click", buttonClick);


// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");