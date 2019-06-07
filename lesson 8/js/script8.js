// Задание 8

"use strict";

let startBtn = document.getElementById("start"),   // кнопка "Начать расчет"
    budgetValue = document.getElementsByClassName("budget-value")[0],   // доход
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],   // бюджет на 1 день
    levelValue = document.getElementsByClassName("level-value")[0],   // уровень дохода
    expensesValue = document.getElementsByClassName("expenses-value")[0],   // объязательные расходы
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],   // возможные траты
    incomeValue = document.getElementsByClassName("income-value")[0],   // дополнительный доход
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],   // накопления за месяц
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0], // накопления за год

    expensesItem = document.getElementsByClassName("expenses-item"),   // ввод объязательных расходов    
    expensesItemBtn = document.getElementsByTagName("button")[0],   // кнопка "Утвердить" объязательные расходы
    optionalExpensesBtn = document.getElementsByTagName("button")[1],   // кнопка "Утвердить" не объязательные расходы
    countBudgetBtn = document.getElementsByTagName("button")[2],   // кнопка "Рассчитать" дневной бюджет
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),   // ввод не объязательных расходов
    chooseIncome = document.querySelector(".choose-income"),   // ввод возможных доходов
    savings = document.querySelector("#savings"),   // checkbox - есть ли накопления
    chooseSum = document.querySelector(".choose-sum"),   // сумма
    choosePercent = document.querySelector(".choose-percent"),   // процент
    yearValue = document.querySelector(".year-value"),   // год
    monthValue = document.querySelector(".month-value"),   // месяц
    dayValue = document.querySelector(".day-value");   // день

let money, time;

expensesItemBtn.disabled = true;    // отключаем кнопку ввода объязательных расходов
optionalExpensesBtn.disabled = true;    // отключаем кнопку ввода не объязятельных расходов
countBudgetBtn.disabled = true;     // отключаем кнопку расчета дневного бюджета

startBtn.addEventListener("click", function() {     // назначаем событие на кнопку "Начать расчет"
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {      // проверяем то что ввел пользователь в бюджет
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;     // помещаем бюджет в наш объект
    appData.timeData = time;    // помещаем дату в наш объект
    budgetValue.textContent = money.toFixed();    // выводим бюджет
    yearValue.value = new Date(Date.parse(time)).getFullYear();     // выводим дату
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;    // выводим месяц
    dayValue.value = new Date(Date.parse(time)).getDate();      // выводим день

    expensesItemBtn.disabled = false;   // включаем кнопку ввода объязательных расходов
    optionalExpensesBtn.disabled = false;   // включаем кнопку ввода не объязятельных расходов
    countBudgetBtn.disabled = false;    // включаем кнопку расчета дневного бюджета
});

let sum = 0;

expensesItemBtn.addEventListener("click", function() {      // назначаем событие на кнопку "Утвердить" объязательные расходы
    for (let i = 0; i < expensesItem.length; i++) {     // колличество полей для ввода объязательных расходов
        let a = expensesItem[i].value,      // название которое ввел пользователь
            b = expensesItem[++i].value;    // цена которую ввел пользователь
    
        if  ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {    // проверяем то что ввел пользователь
            console.log("done");
            appData.expenses[a] = b;    // помещаем объязательные расходы в наш объект
            sum += +b;      // присваиваем общую сумму объязательных расходов переменной "sum"
        } else {
            console.log("Вы ввели некорректные данные");
            i--;    // если проверка не пройдена, то повторяем цикл
        }
    }
    expensesValue.textContent = sum;    // выводим общую сумму объязательных расходов
});

optionalExpensesBtn.addEventListener("click", function() {      // назначаем событие на кнопку "Утвердить" не объязательные расходы
    for (let i = 0; i < optionalExpensesItem.length; i++) {     // колличество полей для ввода не объязательных расходов
        let opt = optionalExpensesItem[i].value;    // переменной "opt" присваиваем то что ввел пользователь
        appData.optionalExpenses[i] = opt;    // содержимое переменной "opt" помещаем в наш объект
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';     // выводим список не объязательных расходов
    }
});

countBudgetBtn.addEventListener("click", function() {   // назначаем событие на кнопку "Рассчитать" дневной бюджет
    if (appData.budget != undefined) {      //  проверяем чтобы бюджет не равнялся "undefined"
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();      // помещаем дневной бюджет в наш объект
        dayBudgetValue.textContent = appData.moneyPerDay;   // выводим дневной бюджет
    
        if (appData.moneyPerDay < 100) {    // проверяем уровень достатка
            levelValue.textContent = "Минимальный уровень достатка";    // выводим результат
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {   // проверяем уровень достатка
            levelValue.textContent = "Средний уровень достатка";    // выводим результат
        } else if (appData.moneyPerDay > 2000) {    // проверяем уровень достатка
            levelValue.textContent = "Высокий уровень достатка";    // выводим результат
        } else {
            levelValue.textContent = "Произошла ошибка";    // выводим результат на случай если что-то пошло не так
        }
    }else{
        dayBudgetValue.textContent = "Произошла ошибка";    // выводим результат на случай если что-то пошло не так
    }
});

chooseIncome.addEventListener("input", function() {     // назначаем событие на поле для ввода возможных доходов
    let items = chooseIncome.value;     // переменной "items" присваиваем то что ввел пользователь
    appData.income = items.split(', ');     // превращаем возможные доходы в массив и помещаем в наш объект
    incomeValue.textContent = appData.income;   // выводим возможные доходы
});

savings.addEventListener("click", function() {      // назначаем событие на checkbox - есть ли накопления
    if (appData.savings == true) {
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function() {    // назначаем событие на поле для ввода суммы
    if(appData.savings == true) {   // проверяем свойство объекта "savings"
        let sum = chooseSum.value,      // переменной "sum" присваиваем то что ввел пользователь в поле "Сумма"
            percent = choosePercent.value;      // переменной "percent" присваиваем то что ввел пользователь в поле "Процент"

        appData.monthIncome = sum/100/12*percent;   // помещаем в наш объект месячный доход с процентов
        appData.yearIncome = sum/100*percent;   // помещаем в наш объект годовой доход с процентов

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);     // выводим месячный доход с процентов, с округлением числа до одного значения после запятой
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);       // выводим годовой доход с процентов, с округлением числа до одного значения после запятой
    }
});

choosePercent.addEventListener("input", function() {    // Делаем все тоже самое с полем для ввода процентов, что делали с полем для ввода суммы
    if(appData.savings == true) {
        let sum = chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {     // наш объект
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: false
};