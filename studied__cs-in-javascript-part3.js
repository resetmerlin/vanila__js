const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){


    // if(h1.classList.contatins(clickedClass)){
    //     h1.className.remove(clickedClass);
    // } else{ 
    //     h1.classList.add(clickedClass);
    // }
    // this code is easy...


// using class is more convinient.

//this is exactly same with the code I wrote before.
h1.classList.toggle("clicked");

//toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
//만약 있다면, toggle이 clicked를 제거 해줌. 만약 없으면 추가해줌

}

h1.addEventListener("click",handleTitleClick);