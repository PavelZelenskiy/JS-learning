//T1

const peopleWaiting = [
    "Кристина",
    "Олег",
    "Кирилл",
    "Мария",
    "Светлана",
    "Артем",
    "Глеб"
  ];
/* ???? не работает, не могу понять почему
 peopleWaiting.forEach((name, index, array) => {
    if (??????) {
        peopleWaiting.shift();
        alert(`${name} получил(а) посылку. В очереди остались ${peopleWaiting.length} человек.`);
    } else  {
            peopleWaiting.shift();
            alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
    };
 });
*/

function giveParcel(array) {
    let name = array.shift();
    alert(`${name} получил(а) посылку. В очереди остались ${array.length} человек.`);
    console.log(array);
};

function leaveQueueWithoutParcel(array) {
    let name = array.shift();
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
    console.log(array);
}


for (i = 0; i < peopleWaiting.length; i){
 if (peopleWaiting.length > 4 ) {
    giveParcel(peopleWaiting);
    console.log(i);
 } else {
    leaveQueueWithoutParcel(peopleWaiting);
 };
};




