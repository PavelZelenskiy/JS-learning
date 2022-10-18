//T1

const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();

/* работает
let message = '';
if (userLogin.trim() === existingUserLogin && userPassword.trim() === existingUserPassword) {
    message = `Добро пожаловать, ${userLogin}!`}
    else {
        message = `Логин и (или) Пароль введены неверно!`;};

alert(message);
*/

/* не работает
const match = userLogin.trim() === existingUserLogin && userPassword.trim() === existingUserPassword;
const nomatch = userLogin.trim() !== existingUserLogin || userPassword.trim() !== existingUserPassword;

switch (match) {
    case match:
        alert(`Добро пожаловать, ${userLogin}!`);
        break;
    case nomatch:
        alert(`Логин и (или) Пароль введены неверно!`);
        break;
};
*/


userLogin.trim() === existingUserLogin && userPassword === existingUserPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert(`Логин и (или) Пароль введены неверно!`);


