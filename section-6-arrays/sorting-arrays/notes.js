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

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortNotes(notes) 
console.log(notes)