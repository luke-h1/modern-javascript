let num = 103.941;
console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// CHALLENGE :

// function take in persons guest single arg generator random number and figure out if guess was correct
// 1-5 - true if corrent false if not
// console.log(makeGuess(1))  = return true if true return false if wrong

let getGuess = function (guess) {
    let min = 1;
    let max = 10;
    let num = Math.floor(Math.random() * (min - max + 1)) + min;
    if (num === guess) {
        return `your guess was right. The result was ${num}`;
    } else if (num !== guess) {
        return `your guess was wrong. The right number was ${num}`;
    }
};

let a = getGuess(1);
console.log(a);
