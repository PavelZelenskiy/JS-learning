// T4

const todaysWinner = {
    prize: "10 000$"
  };
  
  const winnerApplicants = {
    "001": {
      name: "Максим",
      age: 25
    },
    "201": {
      name: "Светлана",
      age: 20
    },
    "304": {
      name: "Екатерина",
      age: 35
    }
  };

function getWinner (applicants, winnerObject) {
    let applicantsArr = Object.keys(applicants);
    let randomNumber = Math.floor(Math.random() * (applicantsArr.length));
    // console.log(randomNumber);
    let luckyKey = applicantsArr[randomNumber];
    // console.log(luckyKey);
    // console.log(applicants[luckyKey]);
    let winner = {
        ...winnerObject,
        ...applicants[luckyKey],
    };
    return console.log(winner);
};

getWinner(winnerApplicants, todaysWinner);