//T3

let arr = [];

for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for (let y = 0; y < 5; y++) {
        let x = 0;
        x = y + 1;
        innerArr.push(x);
    };
    arr.push(innerArr);
};

console.log(arr);

