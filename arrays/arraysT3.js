//T3

const coffees = ["Latte", "Cappuccino", "Americano"];

let coffeeName = prompt(`Поиск кофе по названию`).trim();

let userCoffee = coffees.findIndex((item) => {
    return item.toLowerCase() === coffeeName.toLowerCase();
});
//console.log(userCoffee);

if (userCoffee >= 0) {
    alert(`Держите ваш любимый кофе ${coffees[userCoffee]}. Он ${userCoffee + 1} по популярности в нашей кофейне.`)
} else {
    alert(`К сожалению, такого вида кофе нет в наличии`)
};
