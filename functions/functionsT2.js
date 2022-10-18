//T2

function getSumOfNumbers(number, type = 'odd') {
    let sum = 0;

            switch (type) {
                case '':
                    for (let i = 0; i <= number; i++) {
                    sum = sum + i;
                    };
                    break;
                case 'odd':
                    for (let i = 1; i <= number; i = i + 2) {    
                    sum = sum + i;
                    };
                    break;
                case 'even':
                    for (let i = 0; i <= number; i = i + 2) {
                    sum = sum + i;
                    };
                    break;
            };
    
        return sum;
};
console.log(getSumOfNumbers(10, ''));
console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10));