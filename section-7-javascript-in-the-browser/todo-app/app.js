const todos = [
    {
        text: 'Learn more Javascript',
        completed: false,
    },
    {
        text: 'Exercise',
        completed: false,
    },
    {
        text: 'buy food',
        completed: true,
    },
    {
        text: 'work on automation',
        completed: true,
    },
    {
        text: 'clean Kitchen',
        completed: true,
    },
];

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('btn was pressed');
// });

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
});

const summary = document.createElement('p');
summary.textContent = `you have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
});

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove();
    } else {
        console.log('no need 😇');
    }
});




// listen for new todo creation 

document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('add new todo')
}); 




document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(e.target.value)
}); 


