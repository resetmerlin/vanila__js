const title = document.getElementById("something");
// getElementById는 Html에서 id를 통해 element를 찾아주는 역할을 함.
title.innerText="GOT u"

// cosole.dir element 더 자세히 보여줌

console.log(title.id);
console.log(title.className);



// 브라우저에서 그냥 사용할 수 있는 'document'라는 object를 배웠다 !
// document의 함수 중에는 getElementById 라는 함수가 있는데,
// 이 함수가 HTML에서 id를 통해 element를 찾아준다.
// element를 찾고 나면, JS로 해당 HTML의 무엇이든 바꿀 수 있다.
// ex. element의 innerText를 바꾼다던가 (title.innerText = "Got you!";)
// id, className 등을 가져 올 수 있음. (cosole.log(title.id);)