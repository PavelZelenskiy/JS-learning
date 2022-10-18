//T2

const mathSings = [">", "<", "=", "+", "-", "*", "/"];



function getMathResult(expression) {
    if (expression.length < 3) {
        return `Ошибка`;
    };

   
    let mathSing = expression.filter(item => mathSings.includes(item));
    //console.log(mathSing);
    
    
    numberedExpression = expression.map(Number);
    let mathArr = [];
     for(let i = 0; i < numberedExpression.length; i++) {
        if (String(numberedExpression[i]) !== 'NaN' && numberedExpression[i] !== undefined) {
            mathArr.push(numberedExpression[i]);
        };
    };
    //console.log(mathArr);

    mathArr = [mathArr[0], String(mathSing[0]), mathArr[1]];

    //console.log(mathArr);
   


    let a = Number(mathArr[0]);
    let b = Number(mathArr[2]);


    switch (mathArr[1]) {
        case ">":
            return a > b;
        case "<":
            return a < b;
        case "=":
            return Boolean(a = b);
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return `Ошибка`;
    };
};


console.log(getMathResult(["200", "+", 300])); // 500
console.log(getMathResult(["20", "-", "5"])); // 15
console.log(getMathResult([100, "/", 100])); // 1
console.log(getMathResult([2, "-", 2])); // 0
console.log(getMathResult(["5", ">", "10"])); // false
console.log(getMathResult(["5", "<", "10"])); // true
console.log(getMathResult(["1", "=", 1])); // true
console.log(getMathResult(["1", "**", 1])); // 'Ошибка'
console.log(getMathResult([2,4])); //'Ошибка'
console.log(getMathResult(["100", "hello", "javascript", , "help200", "+", 4])); // 104
console.log(getMathResult(["100", "300", "javascript", , "-", "+", 4])); // -200
