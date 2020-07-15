// Challenge
let myAccount = {
    name: 'Luke',
    expenses: 0,
    income: 0,
};

let addExpense = function (account, amount) {
    // add expense function
    account.expenses = account.expenses + amount;
};

addExpense(myAccount, 2.5);
console.log(myAccount);

let addIncome = function (account, income) {
    // add income function
    account.income = account.income + income;
};
addIncome(myAccount, 200);
console.log(myAccount);

let resetAccount = function (account) {
    // reset account function
    account.income = 0;
    account.expenses = 0;
};
resetAccount(myAccount);
console.log(myAccount);

let getAccountSummary = function (account) {
    return {
        summary: `The account owner is ${account.name}, their expenses are: ${account.expenses} and their income is ${account.income}`,
    };
};

let h = getAccountSummary(myAccount) 
console.log(h)



// functions to add:
// add income to account (account, amount of income)
// resetAccount (account, expense) = 0
// getAccountSummary template string (account, expenses, income) return string and print with console.log()

// add income
// add expense x2
// check account with getAccountSummary
// resetAccount
// getAccountSummary
