//T1
/*
const myName = 'Pavel';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Vladilen Minin';
const reasonText = 'babosiki';
const numberOfMounth = 0;

console.log(`Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\n
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMounth} месяцев. Я уверен, что пройду данный курс до конца!`);

//T2

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\n
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMounth} месяцев. Я уверен, что пройду данный курс до конца!`;


myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

//T3

const userName = prompt('Как Вас зовут?');
alert(`Вас зовут ${userName.toUpperCase().trim()}`);

//T4

const userName1 = prompt('Как Вас зовут?');
const userAge = prompt('Сколько Вам лет?');
alert(`Вас зовут ${userName1.toUpperCase().trim()} и Вам ${Number(userAge.trim())} лет`);

//T5

const userString = prompt('Введи текст для обрезки');
const startSliceIndex = prompt('Введи индекс, с которого нужно начать обрезку строки');
const endSliceIndex = prompt('Введи индекс, которым нужно закончить обрезку строки');

let string = userString.slice(Number(startSliceIndex), Number(endSliceIndex)).trim();
alert(`Результат: ${string}`);

//T6
*/
const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введи слово из текста').trim();


let indexOfWord = userText.indexOf(wordFromText);
let indexOfText = userText.indexOf(userText[0]);
let string1 = userText.slice(indexOfText, indexOfWord);
alert(`Результат: ${string1}`);


