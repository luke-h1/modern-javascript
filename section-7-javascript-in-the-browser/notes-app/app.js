const notes = [
    {
        title: 'my next trip',
        body: 'I would like to go to Amsterdam',
    },
    {
        title: 'Habbits to work on',
        body: 'learn more javascript',
    },
    {
        title: 'office Modification',
        body: 'get a new monitor',
    },
];

// event handler
document.querySelector('#add-note').addEventListener('click', function (e) {
    e.preventDefault();
    e.target.textContent = 'the button was pressed!';
});

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove();
    });
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes;
});

const filters = {
    searchText: '',
};


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title
            .toLowerCase()
            .includes(filters.searchText.toLowerCase());
    });

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);
