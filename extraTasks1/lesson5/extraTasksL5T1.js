const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
const middleNumber = Math.floor((javaScriptDescription.length-1)/2);
let halfDescription = javaScriptDescription.slice(0,middleNumber);

halfDescription = halfDescription.replaceAll('а', 'А');
halfDescription = halfDescription.replaceAll('a', 'A');
halfDescription = halfDescription.replaceAll(' ', '');
halfDescription = halfDescription.repeat(3);

console.log(halfDescription[(halfDescription.length-1)/2]);
console.log(halfDescription);