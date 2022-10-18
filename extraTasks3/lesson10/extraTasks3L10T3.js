// T3


function getKiller (suspectInfo, deadPeople) {
  // console.log(suspectInfo);
  // console.log(deadPeople);
    for (let key in suspectInfo) {
      // console.log(suspectInfo[key]);
    if (deadPeople.every(victimName => suspectInfo[key].includes(victimName))) {
      console.log(`Убийца ${key}`);
    };
    };
};

getKiller({
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"]
}, ["Lucas", "Bill"]);

getKiller({
  Brad: [],
  Megan: ["Ben", "Kevin"],
  Finn: []
}, ["Ben"]);