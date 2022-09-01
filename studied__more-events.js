const h1 = document.querySelector(".hello:first-child h1");

console.log(h1);

// how to listen an event

function handleTitleClick(){
    h1.style.color="blue";
}

function handleMouseEnter(){
    h1.innerText= "Mouse is here!";

}

function handleMouseLeave(){
    h1.innerText="Mous is gone!";

}

function handleWindwoResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOfline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All GooooD");
}
h1.onclick =("click" , handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

//nico teacher like more addEventListener cuz can use add removeEvent


window.addEventListener("resize", handleWindwoResize);
window.addEventListener("copy",handleWindowCopy)
window.addEventListener("offline",handleWindowOfline)
window.addEventListener("online",handleWindowOnline)