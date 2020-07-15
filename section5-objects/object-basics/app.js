// book object:

let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: "326",
};
console.log(myBook);
console.log(myBook.author);
console.log(`${myBook.title} by ${myBook.author}`);
myBook.title = "Animal Farm";
console.log(`${myBook.title} by ${myBook.author}`);

// CHALLENGE :

// MODEL A PERSON

/* =========
   PROPERTIES
   ========== */
//    name
//    age
//    location
// generate a string based on object property values
// name is age and lives in location

let person = {
  name: "luke",
  age: "21",
  location: "United Kingdom",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

// // map[key] = (map[key]+1)
// let a = 1;
// a++;
// ++a;// Decrement
// let b = 1;
// b--;
// --b;
