//T1

const clientName = 'Igor';
let clientSpendToday = 25;
let clientSpendForAllTime = 110;
let discount = 0;

if (clientSpendForAllTime >= 100 && clientSpendForAllTime <= 300) {
    discount = 10;
} else if (clientSpendForAllTime >= 301 && clientSpendForAllTime <= 500) {
    discount = 20;
} else if (clientSpendForAllTime >= 501) {
    discount = 30;
};

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpendToday = clientSpendToday - (clientSpendToday * (discount/100));
clientSpendForAllTime += clientSpendToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpendToday}$. За все время в нашем ресторане вы потратили ${clientSpendForAllTime}$.`);


