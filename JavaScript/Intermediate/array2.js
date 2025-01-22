// function isEven(element){
// return (element % 2 === 0);
// }

// var num = [2,4,6,8];
// console.log(num.every(isEven))

// console.log(num.every((e) => (e % 2 === 0)));

// const newNumber = [2,4,6,7,9,5,1];
// console.log(newNumber.fill("G", 1,4));

// console.log(newNumber.filter((newNumbers) => newNumbers > 5));

// const users = ["aa", "bb", "cc", "dd", "ee", "ff"];
// console.log(users.slice(2,4));
// users.splice(1,4, "Hi", "bye");
//  console.log(users);

const marvel_heros = ["ironman", "hulk", "thor"];
const dc_heros = ["superman","batman","flash"];

// const all_heros = marvel_heros.concat(dc_heros);
console.log(...marvel_heros,...dc_heros)
