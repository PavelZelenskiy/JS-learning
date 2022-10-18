//T1

let string ='string';
console.log(Number(string), Boolean(string), String(string));

let number = 1;
console.log(Number(number), Boolean(number), String(number));

let bool = true;
console.log(Number(bool), Boolean(bool), String(bool));

let nu = null;
console.log(Number(nu), Boolean(nu), String(nu));

let undefine = undefined;
console.log(Number(undefine), Boolean(undefine), String(undefine));

let object = {};
console.log(Number(object), Boolean(object), String(object));

let symbol = Symbol('simbol');
console.log(Number(symbol), Boolean(symbol), String(symbol));

let bigNumber = 1n;
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
