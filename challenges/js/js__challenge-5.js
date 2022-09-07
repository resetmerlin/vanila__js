const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  
 

  function getRandomColor() {

    randomColorList =[];

    const colorLength = parseInt(colors.length-1);
    console.log(colorLength);


    for(i=0; i<2; i++){
        createValue = colors[Math.floor(Math.random()*(colorLength-0))]
        console.log(createValue);
        randomColorList.push(createValue);

        console.log(randomColorList);

        
       

    }

    let first = randomColorList[randomColorList.length-1];
    let second = randomColorList[randomColorList.length-2];
    console.log(first);
    
    getCssBody.style.background= `linear-gradient(${first}, ${second})`;

    

  }
  
  const getCssBody = document.querySelector("body");
  
  const getButton = document
    .querySelector("body button")
    .addEventListener("click", getRandomColor);
  