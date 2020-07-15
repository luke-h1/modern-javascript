// Global scope (convertFahrenheitToCelcius, tempOne, tempTwo)
    // Local Scope (fahrenheit, celcius)
        // Local scope (isFreezing )

let convertFahrenheitToCelcius = function (fahrenheit) { 
    let celcius = (fahrenheit - 32) * 5/9 

    if (celcius <= 0) { 
        let isFreezing = true 
    }; 

    return celcius
}; 

let tempOne = convertFahrenheitToCelcius(32); 
let tempTwo = convertFahrenheitToCelcius(66); 

console.log(tempOne); 
console.log(tempTwo); 