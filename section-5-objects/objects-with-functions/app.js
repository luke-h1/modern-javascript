let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: '326',
};

let otherBook = {
    title: 'A peoples History',
    author: 'Howard zinn',
    pageCount: '723',
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
    };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.pageCountSummary);
console.log(bookSummary.summary);

// CHALLENGE
// create function that returns object
// create function - take fahrenheit in - return object with all three (fahrenheit, celcius, kelvin)

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celcius: (fahrenheit - 32) * (5 / 9),
    };
};

let temps = convertFahrenheit(86); 
console.log(temps);  


let temp2 = convertFahrenheit(86).kelvin  
console.log(temp2)