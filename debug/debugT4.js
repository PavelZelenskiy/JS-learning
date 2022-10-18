//T4 

let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
/*
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = numbers[i] ** 3; // создает массив с **3 элементами
  sum += numbers[i] ** 3;
};
console.log(sum); // 1158411
*/

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3;
};
console.log(sum); // 1158411
// Через цикл for of
/*
console.log(numbers); // выводит массив уже с увеличенными элементами, необходим исходный массив
debugger;
*/

sum = 0;
for (let num of numbers) {
  num = num ** 3;
  sum += num;
}
console.log(sum); // 1003904306910622800
