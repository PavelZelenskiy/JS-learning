//T2 

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" }
];


function giveTalonsInOrder (patients, orders) {
    let sortedArr = [];
        for (let i = 0; i < orders.length; i++) {
            for (let y = 0; y < orders.length; y++) {
                if (orders[i] === patients[y].id) {
            sortedArr.push(patients[y]);
            };
        };
    };
    return sortedArr;
};

const result = giveTalonsInOrder(people, ordersArr);
console.log(result);