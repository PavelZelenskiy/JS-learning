//T6

const numbers = [10, 4, 100, -5, 54, 2];

let sum = 0;
for (i = 0; i < numbers.length; i++) {
    let num = numbers[i] ** 3;
    sum += num;
};
console.log(sum);


let sum1 = 0;
for (const num of numbers) {
    sum1 += num **3;
};
console.log(sum1);


let sum2 = 0;
numbers.forEach((num) => {
    sum2 += num ** 3;
});
console.log(sum2);


const sum3 = numbers.reduce((acc, num) => {
    return acc += num ** 3;
}, 0);
console.log(sum3);
