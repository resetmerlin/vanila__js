

const age= 96;
function calculateKrAge(ageOfForeinger){
    return ageOfForeinger +2;

}

const krAge = calculateKrAge(age);
console.log(krAge);


const calculator = {
    add: function(a,b){
        return a+b;
    },

    minus: function(a,b){
        return a-b;
    },
    muitiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    powerOf: function(a,b){
        return a**b;
    },
};


const plusResult=calculator.add(2,3);
// console 은 그냥 printf 입니다. 즉 그냥 보여주는 것이며 console안에서 뭘 가져올 수는 없어요.
console.log(plusResult);
const minusResult = calculator.minus(plusResult,10);
const muitiplyResult = calculator.muitiply(10, minusResult);
const divideResult=calculator.divide(muitiplyResult, plusResult);
const powerResult = calculator.powerOf(muitiplyResult,minusResult);

// 한번 return 하면 function 작동이 끝난다. 예로 들어서 return 후에 뭘 적어도 값은 
// 안 나온다는 것이다.

