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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (!b.completed && a.completed) {
            return 1;
        } else {
            return 0;
        }
    });
};

