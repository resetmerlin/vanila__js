const images =[
    "wp2608224-wallpaper-4k.jpg",
    "wp4676574-4k-pc-wallpapers.jpg",
    "wp4676613-4k-pc-wallpapers.png",
];

const chosenImage = images[([Math.floor(Math.random()*images.length)])];

const image= document.createElement("img");
// javascript에서 element를 만드는 것임...
image.src=`img/${chosenImage}`;
// src 설정 

document.body.appendChild(image)
//document.body.appendChild()의 기능은 body에 html을 추가하는 것!