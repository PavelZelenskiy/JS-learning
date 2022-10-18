//T1
/*
let health = prompt('Введите число параметра "здоровье" для персонажа')
console.log(typeof health); // выводит строку, необходимо число
debugger;
*/

let health = +prompt('Введите число параметра "здоровье" для персонажа');
console.log(typeof health);

if (health <= 0 || !health) {
	alert('Параметр "здоровье" должен быть больше нуля!')
} else {
	alert(`Параметр "здоровье" равен ${health}`);
};
