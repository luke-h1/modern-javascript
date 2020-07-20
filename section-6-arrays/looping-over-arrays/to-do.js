const toDo = [
    'go for a walk',
    'pay the bills',
    'learn javascript',
    'drink enough water',
    'review PRs',
];
console.log(`You have ${toDo.length} things to do`);
console.log(`To-do : ${toDo[0]}`);
console.log(`To-do: ${toDo[toDo.length - 2]}`);

// CHALLENGE
// delete 3rd item ✅
// add new item onto end ✅
// Remove first item from array ✅
toDo.splice(2, 1); // removes "learn javascript"
toDo.push('get Coffee');
toDo.shift(1);
console.log(toDo);
console.clear() 
// challenge forEach:
// print items left to-do ✅
// 1. the first item, 2.second item ✅ 
// make sure array starts at 1 instead of 0 ✅

toDo.forEach(function (toDo, index) {
    const num = index + 1;
    console.log(`${num}. ${toDo}`); 
});
