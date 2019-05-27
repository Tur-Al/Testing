//Задание 1

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a1 = prompt("Во сколько обойдется?", ''),
	a2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a3 = prompt("Во сколько обойдется?", '');

appData.expenses.a = a1;
appData.expenses.a2 = a3;

alert(appData.budget / 30);