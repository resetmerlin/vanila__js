const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");



function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
    // if(username===""){
    //     alert("Please write your name");

    // } else if(username.length>15 ){
    //     alert("Your name is too long.")
    // }


    // html속 form을 사용해서 할 수 있지만 만약 input하고 버튼을 누를시
    //submit가 되어 브라우저가 재시작된다.

}



loginButton.addEventListener("click", onLoginBtnClick)