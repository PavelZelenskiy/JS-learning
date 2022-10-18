//T2

const clientName = prompt('Введите имя клиента').trim();
let clientSpendToday = Number(prompt('Сколько клиент потратил сегодня?').trim());
let clientSpendForAllTime = Number(prompt(`Сколько клиент потратил за все время?`).trim());
let discount = 0;

//console.log(clientSpendToday);

if (clientSpendToday.toString() === 'NaN') {
    alert(`Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.`);
} else if (clientSpendForAllTime.toString() === 'NaN') {
    alert(`Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.`);
} else {
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
};


