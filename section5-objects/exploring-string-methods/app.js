let name = 'Luke Howsam  ';

// Length property
console.log(name.length);

// convert to upper case
console.log(name.toUpperCase());

// convert to lower case
console.log(name.toLowerCase());

// includes method

// let password = 'passwordab123';
// console.log(password.includes('password'));

// trim method
let name1 = 'Luke Howsam  ';
console.log(name1.trim());


// CHALLENGE 


let isValidPassword = function (password) {
    if (password.includes('password') || password.length < 8) {
        console.log('password is not valid');
        return false;
    } else if (password.length > 8 && !password.includes('password')){ 
        console.log('password is valid')
        return true;
    }
};

let a = isValidPassword('thisisatest');
let b = isValidPassword('password123')
console.log(a); 
console.log(b); 

