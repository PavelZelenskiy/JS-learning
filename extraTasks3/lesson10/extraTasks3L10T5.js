// T5

const usersArray = [
    { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
    { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
    { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
    { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
    { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 }
  ];


const usersObject = {
  "34rdca3eeb7f6fgeed471198": {
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25
  },
  "76rdca3eeb7f6fgeed471100": {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15
  },
  "12rdca3eeb7f6fgeed4711012": {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13
  },
  "32rdca3eeb7f6fgeed471101": {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31
  },
  "98rdca3eeb7f6fgeed471102": {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18
  }
};


function getAdultUsers(users) {
    // console.log(Array.isArray(users));
    if (Array.isArray(users)) {
            return users.filter(x => x.age >= 18);
    } else if (typeof users === 'object') {
        let filtredObj = {};
        // console.log(Object.keys(users));
        for (const key in users) {
            // console.log(key);
           if (users[key].age >= 18) {
            // console.log(users[key]);
            filtredObj[key] = users[key];
           };
        };
        return filtredObj;
    };
};

console.log(getAdultUsers(usersArray));
console.log(getAdultUsers(usersObject));

