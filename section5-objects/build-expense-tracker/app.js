// CHALLENGE
let myAccount = {
    name: 'Luke',
    expenses: 0,
    income: 0,
};

let addExpense = function (account, amount) {
    // add expense function
    return account.expenses = account.expenses + amount; 
};

let addIncome = function (account, income) {
    // add income function
    return account.income = account.income + income;
};

let resetAccount = function (account) {
    // reset account function
     account.income = 0;
     account.expenses = 0;
};

let getAccountBalance = function (account) {
    // get account balance function
    return balance = account.income - account.expenses;
 
};

let getAccountSummary = function (account) {
    return `${account.name} has an income of ${account.income}, expenses of ${
        account.expenses
    } and a balance of ${getAccountBalance(myAccount)}`;
};

let a = addExpense(myAccount, 500);
console.log(a);

let b = addIncome(myAccount, 1000);
console.log(b);

let c = getAccountBalance(myAccount);
console.log(c);

let d = getAccountSummary(myAccount);
console.log(d);

addIncome(myAccount, 1000);
