//T3

function getDivisorsCount(number = 1) {
    let count = 0;
    if (number < 0 || !Number.isInteger(number)) {
        alert(`${number} должен быть целым числом и больше нуля!`);
    } else {
            for (let i = 1; i <= number; i++) {
                if (number%i == 0) {
                     count++
                    };
                };
            };
        return count;
    };

  
console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));
console.log(getDivisorsCount(-18));
console.log(getDivisorsCount(6.8));

