const notes = ['Note 1', 'Note 2', 'Note 3'];
// console.log(notes.shift())
// console.log(notes)
// console.log(notes.unshift('Note555'))
// console.log(notes)
// b = notes.forEach(function (item, index, array) {
//     console.log(item, index);
// });
console.log(notes);
notes.splice(1, 1);
console.log(notes);
notes.splice(1, 0, 'this is the new note 2!');
console.log(notes);

notes.forEach(function (item, index) {
    console.log(item);
});

// for loop
// counting ...count, 1, 2, 3

for (let count = 0; count <= 2; count++) {
    console.log(count);
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count]);
}
console.clear()

// reverse array 
for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}


