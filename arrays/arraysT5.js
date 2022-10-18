//T5

const clientsEstimations = [];

function askClientToGiveEstimation() {
    let estimation = prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`).trim();
    if (Number(estimation) >= 1 && Number(estimation) <= 10 ) {
        clientsEstimations.push(estimation);
    };
};

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation()
};

console.log(clientsEstimations);

const goodEstimations = clientsEstimations.filter((item) => {
    return item > 5;
});
console.log(goodEstimations);

const notGoodEstimations = clientsEstimations.filter((item) => {
    return item <= 5;
});
console.log(notGoodEstimations);

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);