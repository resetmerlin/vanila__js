

// // function nowDay(){

// //     const timeNow = new Date();

    
// //     const presentFullYear= timeNow.getFullYear();
    
// //     const presentMonth = timeNow.getMonth();
    
// //     const presentDate = timeNow.getDate();

// //     const presentHours = timeNow.getHours();
    
// //     const presentMinutes = timeNow.getMinutes();
    
// //     const presentSeonds = timeNow.getSeconds();
    
    
// //     const totalTodayTimeString = `${presentDate}d ${presentHours}h ${presentMinutes}m ${presentSeonds}s`;
// //     time.innerText = totalTodayTimeString;

    
// //     const notChristmas = [presentFullYear, presentMonth,presentDate,presentHours,presentMinutes,presentSeonds];




// //     const christmas = [2022, 12 ,24 , 0, 0,0];
// //     notchristmasLength = notChristmas.length;

// //     if(notChristmas!==christmas){
// //         let i = 0;
// //         while(i<(parseInt(notchristmasLength))){

// //             let howManyLeft = parseInt(christmas[i]) - parseInt(notChristmas[i]);
            
// //             if(parseInt(howManyLeft[0]) > 0 ){
// //                 parseInt(christmas[1])= parseInt(christmas[1])+12*parseInt(howManyLeft[0]);
// //                 console.log(christmas[1]);
// //             }

// //             if(parseInt(howManyLeft[1]) > 0 ){
// //                 parseInt(christmas[2]) = parseInt(christmas[2]) + 31*parseInt(howManyLeft[1]);
// //                 console.log(christmas[2]);

// //             }
            
            
// //         }
// //     }

// //     const leftover =  Math.round(Math.abs(parseInt(christmas) - parseInt(MathNow)));
// //     console.log(leftover)
  
// // }


// // renewTime = setInterval(nowDay,1000);


// const clock=document.querySelector("h3");


// function getClock(){
//     const date = new Date();
//     const fulldate= date.getTime();
//     console.log(fulldate)
    


       
//         const year = String(date.getFullYear()).padStart(4,"0")
//         const months = String(date.getMonth()).padStart(2,"0")
//         const days = String(date.getDate()).padStart(3,"0")
//         const hours = String(date.getHours()).padStart(2,"0");
//         const minutes = String(date.getMinutes()).padStart(2,"0");
//         const seconds = String(date.getSeconds()).padStart(2,"0");
        
//         // let convertmonths = (parseInt(months)*30 + parseInt(days))*60*60;

//         // let DaysLeft = String((christmas- convertmonths)/(60));
//         // let hoursLeft=String((christmas- convertmonths));
//         // let minutesLeft=String((christmas- convertmonths)/(60));
//         // let secondsLeft= convertmonths




 
    
    
        
//         // const newDate = Date(`${year},${months},${days},${hours},${minutes},${seconds}`);
//         // const converter =  months
//         // const christmas = Date('2022,12,24,0,0,0');

//         // console.log(newDate)

//         // let leftTime = Math.abs(christmas - newDate);
//         // console.log(leftTime)
        
        
        
//         // clock.innerText=(`${leftTime}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`);
        

    
    
   
    






//     clock.innerText=(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

// }


// // padStart(2,"0")
// // 만약 길이가 1이 문자가 있으면 + 길이가 2로 되게 0을 붙여준다.

// // setTimeout(sayHello, 5000);
// getClock();
// // it immediately change 


// setInterval(getClock,1000);

//  const timeNow = new Date();

    
// const presentFullYear= timeNow.getFullYear();
    
// const presentMonth = timeNow.getMonth();
    
//   const presentDate = timeNow.getDate();

//  const presentHours = timeNow.getHours();
    
//  const presentMinutes = timeNow.getMinutes();
    
//  const presentSeonds = timeNow.getSeconds();
    
//  const totalTodayTimeString = Date(`${presentDate}/${presentMonth}/${presentFullYear}`);
//  console.log(totalTodayTimeString)
// const date1 = totalTodayTimeString
// const date2 = new Date(`24-12-${presentFullYear}`);
// const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 

// alert(diffDays )



const time = document.querySelector("h3");

function getTime() {
    const xmasDay = new Date("2022-12-24");
    const currDay = new Date();
  
    let diff = xmasDay - currDay;
    console.log(diff);
    const diffDays = Math.floor((xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24));
    diff -= diffDays * (1000 * 60 * 60 * 24);
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    diff -= diffHours * (1000 * 60 * 60);
    const diffMin = Math.floor(diff / (1000 * 60));
    diff -= diffMin * (1000 * 60);
    const diffSec = Math.floor(diff / 1000);
    
    time.innerText = (`${diffDays < 10 ? `0${diffDays}` : diffDays}d ${diffHours < 10 ? `0${diffHours}` : diffHours}h ${diffMin < 10 ? `0${diffMin}` : diffMin}m ${diffSec < 10 ? `0${diffSec}` : diffSec}s`);
  
  }

renewTime = setInterval(getTime,1000);
