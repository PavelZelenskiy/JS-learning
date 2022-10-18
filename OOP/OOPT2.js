//T2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    compareAge(who) {
        if (this.age < who.age) {
            alert(`${this.name} младше, чем ${who.name}`)
        } else {
            alert(`${this.name} старше, чем ${who.name}`)    
        }
    }
};

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

// console.log(person1);
// console.log(person2);
// console.log(person3);

person1.compareAge(person2);
person2.compareAge(person3);
person3.compareAge(person1);