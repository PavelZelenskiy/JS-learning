//T2

console.log(Number("10")); // явное
typeof Number("10"); 
//1
console.log(+"50"); //неявное
console.log(Number('50'));
console.log(typeof Number('50'));
//2
console.log(Number("100")); //явное
console.log (typeof Number("100"));
//3
console.log("" + 1); //неявное
console.log(String(1));
console.log(typeof String(1));
//4
console.log(String(1)); //явное
console.log(typeof String(1));
//5
console.log(Boolean(0)); //явное
console.log(typeof Boolean(0));
//6
console.log(+"001"); //неявное
console.log(Number("001"));
console.log(typeof Number("001"));
//7
console.log(1 + ""); //неявное
console.log(String(1));
console.log(typeof String(1));
//8
console.log(Boolean(1)); //явное
console.log(typeof Boolean(1));
//9
console.log(String(001)); //явное
console.log(typeof String(001));
//10
console.log(Number("Hello World")); //явное
console.log(typeof Number("Hello World"));

//T3

console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(Number({name: 'Maxim'}), Boolean({name: 'Maxim'}), String({name: 'Maxim'}));
console.log(Number(Symbol('key')), Boolean(Symbol('key')), String(Symbol('key')));
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(''), Boolean(''), String(''));
console.log(Number(0), Boolean(0), String(0));
console.log(Number(-10), Boolean(-10), String(-10));
console.log(Number('-105'), Boolean('-105'), String('-105'));

//T4

// 1
console.log(Number(" 1 2 3 4 5")); //1 2 3 4 5 (NaN)
// 2
console.log(Number("1234 5")); //1234 5 (NaN)
// 3
console.log(Number("12345")); //12345 (+)
// 4 
console.log(String(false)); //'false' (+)
// 5
console.log(Boolean(0000000)); //false (+)
// 6
console.log(Boolean(0.0000001)); //true (+)
// 7
console.log(String(undefined)); //'undefined' (+)
// 8
console.log(Number("100f")); //NaN (+)
// 9
console.log(Number("100")); //100 (+)
// 10
console.log(Number("000001")); //1 (+)
