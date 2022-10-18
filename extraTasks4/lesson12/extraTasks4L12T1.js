// T1

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    improveArmy() {
        for (const key in this) {
            if (typeof this[key] === 'number') {
            this[key] += 5;
            };
        };
    },
    checkChancesToWin(defender) {
        let chanceArr = [0, Object.keys(defender).length];
        // console.log(chanceArr);
        for (const key in this) {
            if (this[key] > defender[key]) {
                chanceArr[0] += 1;
            };
        };
        return chanceArr;
    },
    attack(defender) {
        let chanceArr = this.checkChancesToWin(defender);
        if (((chanceArr[0] / chanceArr[1]) * 100) < 70) {
            alert(`Наши шансы равны ${chanceArr[0]}/${chanceArr[1]}. Необходимо укрепление!`);
            this.improveArmy();
        } else {
            alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
        };
       return this;
    }
  };

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
  };


// console.log(attacker);
attacker.attack(defender);
// console.log(attacker);
attacker.attack(defender); 
// console.log(attacker);
attacker.attack(defender); 