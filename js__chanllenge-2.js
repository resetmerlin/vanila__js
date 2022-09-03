const body = document.querySelector("body")

const color = ["#EEBC12", "#2C8CD4" ,"#2E8CD5"];


const windowResizeHandler = {

        

    windowResize: function handleWindwoResize(){
        let intViewportWidth = window.innerWidth;
        let pastViewportWidth = intViewportWidth;

        if(intViewportWidth< pastViewportWidth){
            body.style.color = background-color[2];

        } else if(intViewportWidth>pastViewportWidth) {
            body.style.color = background-color[0];

        }else{
            body.style.color = background-color[1];

        }

    }

}



window.addEventListener("resize",windowResizeHandler.windowResize)