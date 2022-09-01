const title = document.querySelector(".hello:first-child h1");

console.log(title);

// how to listen an event

function handleTitleClick(){
    title.style.color="blue";
}

function handleMouseEnter(){
    title.innerText= "Mouse is here!";

}

function handleMouseLeave(){
    title.innerText="Mous is gone!";

}
title.onclik("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);