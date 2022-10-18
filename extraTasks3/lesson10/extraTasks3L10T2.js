//T2

const hero = {
    name: "Batman",
    health: 100,
    hitEnemy: (enemy) => {return enemy.health = enemy.health - 10}
  };
  const enemy = {
    name: "Joker",
    health: 100,
    hitHero:  (hero) => {return hero.health = hero.health - 10}
  };


  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function startGame(heroPlayer, enemyPlayer) {
        while (heroPlayer.health > 0 && enemyPlayer.health > 0)  {
            let randomNumber = getRandomNumberInRange(0,1);
            if (randomNumber === 0) {
                //console.log(randomNumber);
                console.log(`${heroPlayer.name} бьет ${enemyPlayer.name}`)
                heroPlayer.hitEnemy(enemyPlayer);
                console.log(`У ${enemyPlayer.name}а осталось ${enemyPlayer.health} жизней`);
            };
            if (randomNumber === 1) {
                //console.log(randomNumber);
                console.log(`${enemyPlayer.name} бьет ${heroPlayer.name}`)
                enemyPlayer.hitHero(heroPlayer);
                console.log(`У ${heroPlayer.name}а осталось ${heroPlayer.health} жизней`);
            };
        };
        if (enemyPlayer.health === 0) {
            console.log(`${heroPlayer.name} ПОБЕДИЛ!`);
            alert(`${heroPlayer.name} ПОБЕДИЛ, у него осталось ${heroPlayer.health} здоровья`)
        };
        if (heroPlayer.health === 0) {
            console.log(`${enemyPlayer.name} ПОБЕДИЛ!`);
            alert(`${enemyPlayer.name} ПОБЕДИЛ, у него осталось ${enemyPlayer.health} здоровья`)
        };
  };

  startGame(hero, enemy);

