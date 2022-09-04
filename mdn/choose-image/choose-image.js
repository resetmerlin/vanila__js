const myImage = document.querySelector("img");

// myImage.onclick=()=>{
//     const mySrc = myImage.getAttribute('src');
//     if (mySrc === 'mdn\choose-image\mustard.jpg'){
//         myImage.setAttribute('src','mdn\choose-image\java.png');

//     }else{
//         myImage.setAttribute('src','mdn\choose-image\mustard.jpg');
//     }



// }


function onclick(){
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'mdn\choose-image\mustard.jpg'){
        myImage.setAttribute('src','mdn\choose-image\java.png');

    }else{
        myImage.setAttribute('src','mdn\choose-image\mustard.jpg');
    }

}

myImage.addEventListener("click",onclick);


//이게 궁금하긴 함... 왜 ?()=> 이걸 쓰는 거지?
