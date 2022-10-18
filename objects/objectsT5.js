//T5

function sum(a, ...rest) {
    return a + rest.reduce((a, i) => a + i, 0);
};

console.log(sum(1, 2, 3)); 
console.log(sum(2, 2)); 
console.log(sum(10, 15, 249, 653, 846)); 
console.log(sum(10, 15, 249, 653, 846, 1000, 1000, 1000)); 
console.log(sum(10)); 