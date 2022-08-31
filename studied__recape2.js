const player = {
    name:"Nico",
    age:98,
};

player.name="Merln";
console.log(player);


// they look very similar but 
// the thing is console is an 'OBJEST'

player.small="165cm";
// I can put this on 'player' object
console.log(player);


function plus(a, b){
    console.log(a+b);
}

plus();

alert('alalalaalall');

function minusFive(potato){
    console.log(potato-5);
}

minusFive(10,10,12,34,4,5,6,7);

// this is calculator

const calculator = {
    add: function(a,b){
        alert(a+b);
    },

    minus: function(a,b){
        alert(a-b);
    },
    muitiply: function(a,b){
        alert(a*b);
    },
    divide: function(a,b){
        alert(a/b);
    },
    powerOf: function(a,b){
        alert(a**b);
    },
};

calculator.add(5,1);
calculator.minus(5,1);
calculator.muitiply(5,1);
calculator.divide(5,1);
calculator.powerOf(5,1);

console.log(calculator.add(5,1));
// this is calculator