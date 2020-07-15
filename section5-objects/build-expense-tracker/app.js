// CHALLENGE
let myAccount = {
    name: 'Luke',
    expenses: 0,
    income: 0,
};

let addExpense = function (account, amount) {
    // add expense function
    account.expenses = account.expenses + amount;
};

addExpense(myAccount, 500);

let addIncome = function (account, income) {
    // add income function
    account.income = account.income + income;
};
addIncome(myAccount, 1000);

let resetAccount = function (account) {
    // reset account function
    account.income = 0;
    account.expenses = 0;
};

let getAccountBalance = function (account) {
    // get account balance function
    let balance = account.income - account.expenses;
    {
        return balance;
    }
};

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
     return `${account.name} has an income of ${
        account.income
    }, expenses of ${account.expenses} and a balance of ${getAccountBalance(
        myAccount
    )}`;
};

let r = getAccountSummary(myAccount);
console.log(r);
