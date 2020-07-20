const account = {
    name: 'Luke',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount,
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        })

        return `${this.name} has £${totalExpenses}.00 in expenses.`;
    } 
} 

account.addExpense('coffee', 2);
account.addExpense('rent', 950);


console.log(account.getAccountSummary())