const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

// const HIDDEN_CLASSNAME = 'hidden';
// 관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.


function onLogSubmit(event){
    event.preventDefault();    // default beavior is what usually browser do

    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); 
    paintGreetings(username);

    // greeting.innerText= "Hello "+ username;

    // greeting.innerText= `Hello ${username}`;     //둘다 똑같다. 둘다 string이랑 변수를 하나로 합쳐주고 있다.
                                                        // 규칙1: 네가 만약 변수와 string을 결합하고 싶다면 또는 변수를 string안에 집어넣고 싶다면 
                                                        //${username} 하면 됨. 
                                                        //가장 중요한것은 ``걸로 시작해야 함.  


    // console.log(greeting);
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    

    // localStorage.setItem("username",USERNAME_KEY);     //만약 지우고 싶다면 localStorage.getItem("username")



}

function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLogSubmit) // const savedUsrname= localStorage.getItem("username")

const userNameList = localStorage.getItem(USERNAME_KEY)

if(userNameList == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogSubmit)


}else{

    paintGreetings(userNameList);




}
// const savedUsrname= localStorage.getItem("username")



