// T1

const peopleWithVisa = [
    {
      firstName: "Stasia",
      lastName: "Ward",
      criminalRecord: true,
      passportExpiration: "19.06.2040"
    },
    {
      firstName: "Elliot",
      lastName: "Baker",
      criminalRecord: false,
      passportExpiration: "04.06.2041"
    },
    {
      firstName: "Leighann",
      lastName: "Scott",
      criminalRecord: true,
      passportExpiration: "31.07.2039"
    },
    {
      firstName: "Nick",
      lastName: "Pop",
      criminalRecord: false,
      passportExpiration: "31.12.2010"
    }
  ];


  const allowVisa = (people) => {
    let filtredArr = [];
    for (const x of people) {
        let day = x.passportExpiration.slice(0, 2);
        // console.log(day);
        let month = x.passportExpiration.slice(3, 5);
        // console.log(month);
        let year = x.passportExpiration.slice(6, 10);
        // console.log(year);
        let date = new Date(year, month - 1, day).getTime();
        let dateNow = new Date().getTime();
        // console.log(date);
        // console.log(dateNow);
        if (date > dateNow && x.criminalRecord === false) {
          filtredArr.push(x);
        };
    };
    return filtredArr;
};

  const result = allowVisa(peopleWithVisa);
  console.log(result);