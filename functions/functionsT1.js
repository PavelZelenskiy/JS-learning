//T1

function getName1(name) {
   return `Имя равно ${name}`
};
console.log(getName1('Pavel'));

const getName2 = function(name) {
    return `Имя равно ${name}`
};
console.log(getName1('Pavel'));

const getName3 = (name) => {return `Имя равно ${name}`};
console.log(getName1('Pavel'));
