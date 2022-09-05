const generatedNumber = document.querySelector("#inputNumber");
const generateYourNumber = generatedNumber.querySelector("#inputNumber input");

const quessedNumber = document.querySelector("#quessNumber");
const quessedYourNumber = quessedNumber.querySelector("#quessNumber input");

const losehiddenElement = document.querySelector(".losehidden");
const wonhiddenElement = document.querySelector(".wonhidden");

const yourNumberList=[];
const NUMBER_KEY="numbers";

const HIDDEN_CLASSNAME= "losehidden";

function numberChosen(event){

    event.preventDefault();   


     randomNumberGenerator();

 

    


}



function randomNumberGenerator(){
        
    generated= parseInt(generateYourNumber.value);
    choice = parseInt(quessedYourNumber.value);
    const randomNumber= Math.floor(Math.random() * generated);
    console.log(randomNumber);  
    
    const span= document.createElement("span");

    const oldtext = `You chose: ${choice},the machine chose:${randomNumber}`;
    yourNumberList.push(oldtext);
   
    const lastNumber=(parseInt(yourNumberList.length)-1);

    span.innerText=yourNumberList[lastNumber];
    if(randomNumber!==choice){


        
        
        
        losehiddenElement.appendChild(span);
     

        losehiddenElement.classList.remove(HIDDEN_CLASSNAME);
      

        span.remove();







    } else{
        
     
        
        
        wonhiddenElement.appendChild(span);
     

        const youLost = document.querySelector(".losehidden strong")

        if(youLost===null){
            wonhiddenElement.classList.remove("wonhidden");

        }else{
            youLost.classList.add(HIDDEN_CLASSNAME);

            wonhiddenElement.classList.remove("wonhidden");
        }
 

    }

}


quessedNumber.addEventListener("submit",numberChosen);



