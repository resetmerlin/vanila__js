console.log("Hello my name is Nico");
console.log("Hello my name is hi");
console.log("Hello my name is hi");
console.log("Hello my name is hi");
console.log("Hello my name is hi");
console.log("Hello my name is hi");


const a = ['a', 'b', 'c', 'd'];

function sayHello(a){
    console.log("Hello my name is", a);


}


sayHello("nico");

console.log(a)


function sayHello(nameOfPerson, age){
    console.log("Hello my name is", nameOfPerson, "and I am" + age);
}

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber){
    console.log(firstNumber+secondNumber);
}

function divide(a,b){
    console.log(a/b);
}

plus(19,20);

divide(20,10);
// functions part three 

const player={
    name:"nico",
    sayHello: function(otherPersionsName){
        console.log("heloo", otherPersionsName, "nice to meet u");
    },
};

console.log(player.name);
player.sayHello("lynn");