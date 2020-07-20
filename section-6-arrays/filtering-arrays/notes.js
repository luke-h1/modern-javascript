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

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
// };

// const note = findNote(notes, 'office modifications');
// console.log(note);

const findNotes = function (notes, searchTerm) {
    return notes.filter(function (note, index) {
        const isTitle = note.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const isBody = note.body
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return isTitle || isBody;
    });
};

console.log(findNotes(notes, 'ex'));
