//T3

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
/*
let totalJuniorDevelopersSalary;
console.log(typeof totalJuniorDevelopersSalary); // выводит NaN, необходимо число
debugger;
*/
let totalJuniorDevelopersSalary = 0;
console.log(typeof totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;
  totalJuniorDevelopersSalary += salaryWithTax;
}
console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);
