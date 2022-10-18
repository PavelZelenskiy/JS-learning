//T3

function addDays(date, days) {
    const innerDateTime = new Date(date).getTime();
    const daysTime = days * 24 * 60 * 60 * 1000;
    return new Date(innerDateTime + daysTime);
};

console.log(addDays('June 24, 2005', 1));
console.log(addDays('June 4, 2005', 5));
console.log(addDays('June 30, 2005', 5));