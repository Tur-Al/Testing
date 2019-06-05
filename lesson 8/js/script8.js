// Задание 8

"use strict";

let startBtn = document.getElementById("start"),   // Кнопка начать расчет
    budgetValue = document.getElementsByClassName("budget-value")[0],   // Доход
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],   // Бюджет на 1 день
    levelValue = document.getElementsByClassName("level-value")[0],   // Уровень дохода
    expensesValue = document.getElementsByClassName("expenses-value")[0],   // Объязательные расходы
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],   // Возможные траты
    incomeValue = document.getElementsByClassName("income-value")[0],   // Дополнительный доход
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],   // Накопления за месяц
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0], // Накопления за год

    expensesItem = document.getElementsByClassName("expenses-item"),   // Ввод объязательных расходов    
    expensesItemBtn = document.getElementsByTagName("button")[0],   // Кнопка утвердить объязательные расходы
    optionalExpensesBtn = document.getElementsByTagName("button")[1],   // Кнопка утвердить не объязательные расходы
    countBudgetBtn = document.getElementsByTagName("button")[2],   // Кнопка рассчитать дневной бюджет
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),   // Ввод не объязательных расходов
    chooseIncome = document.querySelector(".choose-income"),   // Ввод возможных доходов
    savings = document.querySelector("#savings"),   // Есть ли накопления - checkbox
    chooseSum = document.querySelector(".choose-sum"),   // Сумма
    choosePercent = document.querySelector(".choose-percent"),   // Процент
    yearValue = document.querySelector(".year-value"),   // Год
    monthValue = document.querySelector(".month-value"),   // Месяц
    dayValue = document.querySelector(".day-value");   // День

let money, time;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

let sum = 0;

expensesItemBtn.addEventListener("click", function() {
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if  ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Вы ввели некорректные данные");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener("click", function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    }else{
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener("input", function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum = chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum = chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: false
};