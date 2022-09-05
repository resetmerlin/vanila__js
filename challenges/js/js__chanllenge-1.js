const title = document.querySelector("h1");

const color = ["#64AEEB","#9355B4","#30B689","#E53E2F","#000000"];


const superEventHandler= {



    rightClick: function handleTitleClick(){
        title.innerText="That was a right click!";
        title.style.color= color[3];
    },
    
    mouseEnter: function handleMouseEnter(){
        title.innerText= "The mouse is here!";
        title.style.color=color[2];
    },
    
    mouseLeave: function handleMouseLeave(){
        title.innerText="The mouse is gone!";
        title.style.color= color[0];
    },
    
    
    windowResize: function handleWindwoResize(){
        title.innerText="You just resized!";
        title.style.color=color[1];
    },





}
    










title.addEventListener("mouseenter",superEventHandler.mouseEnter)
title.addEventListener("mouseleave",superEventHandler.mouseLeave)
window.addEventListener("resize",superEventHandler.windowResize)

window.addEventListener("mouseup", (e)=>{
    switch(e.button){
        case 2:
            superEventHandler.rightClick();
    }
})