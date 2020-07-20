//  Multiple ARGS 

let add = function(a, b, c) { 
    return a + b + c 
}; 

let result = add(10, 1, 1); 
console.log(result); 

// default ARGUMENTS 

let getScoreText = function (name = 'anon', score = 0) { 
        return `Name: ${name} - Score; ${score}` 
    //return 'Name: ' + name + ' score: ' + score 
}; 

let scoreText = getScoreText(undefined, 80); 
console.log(scoreText); 



// let getTip = function (total, tipPercent= .2) { 
//     return `${total} (*) ${tipPercent}`
//     return total * tipPercent
// }; 
// let tip = getTip(40, .25) 
// console.log(tip); 

// let name = 'luke'; 
// let age = '21'; 


// CHALLENGE 
// tipCalcultor as a template literal  
// a: 25% tip on $40 would be: $10  
//  

// let getTip = function (total, tipPercent = .2) { 
//     let percent = tipPercent * 100
//     let tipCalculation = total * tipPercent
//     return `A ${percent}% tip on ${total}$ would be ${tipCalculation}$`
  
//  };
 
// template literal string. Much easier to read 
// makes codebase easier to read and more maintainable 

let getTip = function(total, tipPercent = .2) { 
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}` 
}; 

let c = getTip(40, .50); 
console.log(c); 



let b = getTip(40, .50); 
console.log(b); 



