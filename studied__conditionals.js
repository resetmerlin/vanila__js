const age= parseInt(prompt("How old are u"));
// prompt function을 사용하는 이유는 css 삽입도 불가능하고 팝업 제한도 있음/
// 그리고 이걸 응답해야지 다른 것도 작동이 되어서 별로... 너무 오래된 것임,..

parseInt(age);
// it converts to INt type
console.log(typeof age);


// conditionals par TWO!!!!!

console.log(isNaN(age));
// isNaN 사용시 인수가 number 인지 아닌지 나타낸다~~ true or false
// isNaN 이니까 age 값이 Number일시 false로 나온다. 왜? number 맞으니까!~!!


if(isNaN(age) || age<0){
// condition ==  true
console.log("please write a real positive number");
} else if(age<18){
    console.log("You are too young.");
}else if(age>=18 && age<=50){
    console.log("you can drink.");
} else if(age>50&&age<=80){
    console.log("You should excercise");
}else if(age>80){
    console.log("You can do whatever you want.");
}

if(false){
    console.log("hi")
}else{
    console.log("bye")
}
// if(false)는 작동이 전혀 안된다. 당연한것이다.


if((a&&b) || (c&&d) || (x||w)){

}