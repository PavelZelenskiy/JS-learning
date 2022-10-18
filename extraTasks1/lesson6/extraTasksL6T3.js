//T3

const password = prompt(`Введите пароль`).trim();

let upperSymbol = 'false';
for (let i = 0; i < password.length; i++) {
   if (password[i] === password[i].toUpperCase() && !Number.isInteger(Number(password[i]))) {
    upperSymbol = 'true';
   }; 
};
console.log(upperSymbol);

let number = 'false';
for (let i = 0; i < password.length; i++) {
   if (Number.isInteger(Number(password[i]))) {
    number = 'true';
   }; 
};
console.log(number);

if (password.length >= 3 && password.length <= 30 && upperSymbol === 'true' &&  number === 'true') {
    alert(`Пароль валидный. Добро пожаловать в аккаунт!`);
} else {
    alert(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`);
};