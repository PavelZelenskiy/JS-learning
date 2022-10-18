//T4

const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((item) => {
    return item * 1.5;
});
//console.log(updatedPrices);

coffees.forEach((name, index) => {
    alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
});
