let greetUser = function () {
  console.log("hello!");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
console.log(value);

// CHALLENGE
// convert farenheit to celcius
// call function
// print value

// let kelvinConversion =  'kelvin result: ' + 1.6 + 273.15;

//  CONVERT FAHRENHEIT TO CELCIUS AND LOG RESULT IN TEMP1
let convertFahrenheitToCelcius = function (e) {
  let celcius = ((e - 32) * 5) / 9;
  return celcius;
};

let temp1 = convertFahrenheitToCelcius(5);
console.log(temp1);

let kelvinConversion = function (b) {
  let kelvin = b + 0 + 273.15;
  return kelvin;
};

let temp2 = kelvinConversion(5);
console.log(temp2);

let celciusToFahrenheit = function (c) {
  let fah = ((c + 0) * 9) / 5 + 32;
  return fah;
};

let temp3 = celciusToFahrenheit(55);
console.log(temp3);
