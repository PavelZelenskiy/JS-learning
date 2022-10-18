//T2

function getSumOfSequence(number) {
    let array = [];
    for (let i = 1; i <= number; i++) {
        array.push(i);
        //console.log(array);
    };
    //console.log(array.length);
    return array[0] + array[array.length - 1];
};

console.log(getSumOfSequence(5));
console.log(getSumOfSequence(10));
console.log(getSumOfSequence(8));
