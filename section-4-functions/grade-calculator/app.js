// two args: student score, total possible score 
// if you did get 15/20 -> you got a C (75%) ! 
// A 90-100, B = 80-89, C = 70-79, D = 60-69, F = 0-59   
// call function 
// console.log it 

const calculation = function (score, totalScore) { 
    const percent = (score / totalScore) * 100  
    let letterGrade = '' 

    if (percent >=90) {  
        letterGrade = 'A'
        return `you got an ${letterGrade} (${percent}%) !` 
    }else if (percent >=80) {
        letterGrade = 'B'

    }else if (percent >=70) { 
        letterGrade = 'C'
    }else if (percent >=60){ 
        letterGrade ='D' 
    }else if (percent >=0){ 
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%) !`
}; 


let result = calculation(11, 20)
console.log(result);  
 