// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//or


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// let inputArray = ["null"];


// function onClick(){

   
//         inputArray.push(loginInput.value);
//         console.log(inputArray);
    
// }


// loginButton.addEventListener("click",onClick)


function onLoginClick(){
    console.log(loginInput.value);
    console.log("clickkk");
}
// 단점은 위 코드 쓰면 input value에 텍스트를 안써도 값이 똑같이 나옴. 원래 안 나와야 하는디


loginButton.addEventListener("click",onLoginClick);