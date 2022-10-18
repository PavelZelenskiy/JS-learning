//T1

const goals = [8, 1, 1, 3, 2, -1, 5];

let filtredGoals = goals.filter((item) => {
    return item > 0;
});

//#1
let maxGoals = Math.max(...goals);
let bestMatch = (goals.indexOf(maxGoals)) + 1;
//console.log(maxGoals);
//console.log(bestMatch);
alert(`Самый результативный матч был под номером ${bestMatch}. В нем было забито ${maxGoals} гол(ов).`);

//#2
let minGoals = Math.min(...filtredGoals);
console.log(minGoals);

let worstMatchs = [];
for (let i = 0; i < goals.length; i++) {
    if (goals[i] === minGoals) {
        worstMatchs.push(i + 1);
    };
};
//console.log(worstMatchs);
alert(`Самые не результативные матчи были под номерами ${worstMatchs}. В каждом из них было забито по ${minGoals} мячу(а).`)

//#3
let goalsSum = 0;
for (num of goals) {
    if(num > 0) {
        goalsSum += num;
    };
};
alert(`Общее количество голов за сезон равно ${goalsSum}`);

//#4
const isAutoLoose = goals.some((item) => {
    return item < 0;
});
if (isAutoLoose === true) {
    alert(`Были автоматические поражения: да`);
} else {
    alert(`Были автоматические поражения: нет`)
};

//#5
let averageGoalsSum = goalsSum/filtredGoals.length;
alert(`Среднее количество голов за сезон равно ${averageGoalsSum}`);

//#6
const sortedGoals = filtredGoals.sort((a,b) => {
    return a - b;
});
alert(sortedGoals);








