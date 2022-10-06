var surName = prompt("Введите ваше фамилия");
var firstName = prompt("Введите ваше имя");
var age = prompt("Введите свой возраст");
var myInfo = "Я " + surName + " " + firstName + " " + "мне " + age;
console.log(myInfo);
alert(myInfo);

var sumAnswer = prompt("Введите свой ответ: 20 + 22 = ?");
var minusAnswer = prompt("Введите свой ответ: 60 - 14 = ?");
var multiplyAnswer = prompt("Введите свой ответ: 6 * 3 = ?");
var divisionAnswer = prompt("Введите свой ответ: 46 % 9 = ?");

var sum = 44;
var minus = 46;
var multiply = 18;
var division = 1;

alert("12 + 34" + " = " + sum + " (Ваш ответ " + sumAnswer + ")");
alert("50 - 19" + " = " + minus + " (Ваш ответ " + minusAnswer + ")");
alert("9 * 7" + " = " + multiply + " (Ваш ответ " + multiplyAnswer + ")");
alert("57 % 9" + " = " + division + " (Ваш ответ " + divisionAnswer + ")");

console.log("12 + 34" + " = " + sum + " (Ваш ответ " + sumAnswer + ")");
console.log("50 - 19" + " = " + minus + " (Ваш ответ " + minusAnswer + ")");
console.log("9 * 7" + " = " + multiply + " (Ваш ответ " + multiplyAnswer + ")");
console.log("57 % 9" + " = " + division + " (Ваш ответ " + divisionAnswer + ")");
