//T2

function getDaysBeforeBirthday(nextBirthdayDate) {
    const innerNextBirthdayDate = new Date (nextBirthdayDate);
    const nextBirthdayDateTime = innerNextBirthdayDate.getTime();
    const today = Date.now();
    return Math.round((nextBirthdayDateTime - today)/1000/60/60/24);
};

console.log(getDaysBeforeBirthday('June 06, 2023'));
console.log(getDaysBeforeBirthday('February 11, 2023'));
console.log(getDaysBeforeBirthday('December 31, 2022'));
