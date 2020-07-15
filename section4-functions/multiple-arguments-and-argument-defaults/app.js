// MULTIPLE ARGS 
let add = function(a, b, c) { 
    return a + b + c 
}; 

let result = add(10, 1, 5);  
console.log(result); 


// DEFAULT ARGUMENTS 

let getScoreText = function(name = 'Anonymous', score = 0) {  
    return '- Name: ' + name  + ' ' + '- Score: ' + score 

}; 

let ScoreText = getScoreText(undefined, 16)

console.log(ScoreText); 

// CHALLENGE (tip calculator)

// total, tipPercent(default=.2) * total 



// let tipPercent = function(total = 0, tip = '.2') { 
//         return tip * 100  + total 
// }; 


// let money = tipPercent(20, .5); 

let getTip = function(total, tipPercent = .2) { 
    return total * .2 
}

let a = getTip(40, .25); 
console.log(a); 


