// T1 innerHTML

const body = document.querySelector('body');
// console.log(body);

body.innerHTML = `<form class="create-user-form">
<label>
  Имя
  <input type="text" name="userName" placeholder="Введите ваше имя" />
</label>
<label>
  Пароль
  <input type="password" name="password" placeholder="Придумайте Пароль" /></label><button type="submit">
  Подтвердить
</button>
</form>`;


// T1 document.createElement

const form = document.createElement('form');
    form.className = 'create-user-form';

const labelName = document.createElement('label');
    labelName.innerText = 'Имя ';

const inputUserName = document.createElement('input');
    inputUserName.type = 'text';
    inputUserName.name = 'userName';
    inputUserName.placeholder = 'Введите Ваше имя';

const labelPassword = document.createElement('label');
    labelPassword.textContent = ' Пароль ';
   
const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Придумайте пароль';

const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Подтвердить';

body.append(form);
form.prepend(labelName);
labelName.append(inputUserName);
labelName.after(labelPassword);
labelPassword.append(inputPassword);
labelPassword.after(button);


// console.log(body);



