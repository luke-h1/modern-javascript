const todos = [
    {
        text: 'Order cat food',
        completed: true,
    },

    {
        text: 'clean kitchen',
        completed: false,
    },
    {
        text: 'buy food',
        completed: true,
    },
    {
        text: 'Do work',
        completed: false,
    },
    {
        text: 'Exercise',
        completed: true,
    },
];


const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    });
};


console.log(getThingsToDo(todos)) 


