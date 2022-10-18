//Т2

let correctAnswers = 0;
let incorrectAnswers = 0;


const question1 = prompt('Сколько будет 2 + 2?');
const userAnswer1 = Number(question1.trim());
const correctAnswer1 = 4;

userAnswer1 === correctAnswer1 ? alert('Ответ верный') : alert('Ответ неверный');
userAnswer1 === correctAnswer1 ? correctAnswers = ++correctAnswers : incorrectAnswers = ++incorrectAnswers;


const question2 = prompt('Сколько будет 2 * 2?');
const userAnswer2 = Number(question2.trim());
const correctAnswer2 = 4;

userAnswer2 === correctAnswer2 ? alert('Ответ верный') : alert('Ответ неверный');
userAnswer2 === correctAnswer2 ? correctAnswers = ++correctAnswers : incorrectAnswers = ++incorrectAnswers;

const question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
const userAnswer3 = Number(question3.trim());
const correctAnswer3 = 1;

userAnswer3 === correctAnswer3 ? alert('Ответ верный') : alert('Ответ неверный');
userAnswer3 === correctAnswer3 ? correctAnswers = ++correctAnswers : incorrectAnswers = ++incorrectAnswers;

const question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
const userAnswer4 = Number(question4.trim());
const correctAnswer4 = 12;

userAnswer4 === correctAnswer4 ? alert('Ответ верный') : alert('Ответ неверный');
userAnswer4 === correctAnswer4 ? correctAnswers = ++correctAnswers : incorrectAnswers = ++incorrectAnswers;

const question5 = prompt('Сколько будет 2 + 2 * 2?');
const userAnswer5 = Number(question5.trim());
const correctAnswer5 = 6;

userAnswer5 === correctAnswer5 ? alert('Ответ верный') : alert('Ответ неверный');
userAnswer5 === correctAnswer5 ? correctAnswers = ++correctAnswers : incorrectAnswers = ++incorrectAnswers;

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);