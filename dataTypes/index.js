//T2

let number = 1;
let string = 'string';
let bool = true;

number = '1';
string = 11;
bool = null;

alert(number);
alert(string);
alert(bool);

//T3

let ageOfPerson1 = 18;
let ageOfPerson2 = "20";
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = "JavaScript";
const bestProgrammingLanguage2 = "Java";
console.log('Переменную с const переопределить нельзя', bestProgrammingLanguage1, typeof bestProgrammingLanguage1, bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log('var является устаревшим', isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

let helloText1 = "Hello!";
let helloText2 = "Привет!";
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);