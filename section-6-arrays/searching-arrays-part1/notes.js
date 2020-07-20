// const notes = ['Note 1', 'Note 2', 'Note 3'];

const notes = [
    {
        title: 'My Next Trip',
        body: 'I would like to go to spain',
    },
    {
        title: 'habbits to work on',
        body: 'exercise',
    },
    {
        title: 'office modifications',
        body: 'get a new desk',
    },
];

console.log(notes);
console.log(notes.indexOf('this is the new note 2!')); // index of method

const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === 'habbits to work on';
});

console.log(index);

// let someObject = {};
// let otherObject = someObject;

// console.log(someObject === otherObject);
