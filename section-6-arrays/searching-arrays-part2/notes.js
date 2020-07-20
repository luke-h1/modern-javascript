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



const findNote = function (notes, noteTitle) { 
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// };

const note = findNote(notes, 'office modifications'); 
console.log(note);

// const index = notes.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'habbits to work on';
// });
// console.log(index);
