function calc() {
    let persons = document.querySelectorAll(".counter-block-input")[0],     // колличество людей
    restDays = document.querySelectorAll(".counter-block-input")[1],    // колличество дней
    place = document.getElementById("select"),      // базы отдыха
    totalValue = document.getElementById("total"),      // общая сумма
    personsSum = 0,     // переменная для колличества людей
    daysSum = 0,    // переменная для колличества дней
    total = 0;      // переменная для общей суммы

    totalValue.innerHTML = 0;   // обнуляем общую сумму

    persons.addEventListener("input", function() {
        personsSum = +this.value;   // присваиваем переменной "personSum" колличество людей из поля для ввода людей
        total = (daysSum + personsSum)*4000;    // присваиваем переменной "total" общую сумму дней и людей умноженную на 4000

        if(restDays.value == "" || persons.value == "") {      // если поле для ввода дней и людей пустое
            totalValue.innerHTML = 0;   // то в общей сумме показываем 0 
        } else {
            totalValue.innerHTML = total;   // иначе показываем общую сумму дней и людей умноженную на 4000
        }
    });

    restDays.addEventListener("input", function() {     
        daysSum = +this.value;      // присваиваем переменной "daysSum" колличество дней из поля для ввода дней
        total = (daysSum + personsSum)*4000;    // присваиваем переменной "total" общую сумму дней и людей умноженную на 4000

        if(persons.value == "" || restDays.value == "") {   // если поле для ввода людей и дней пустое
            totalValue.innerHTML = 0;   // то в общей сумме показываем 0
        } else {
            totalValue.innerHTML = total;   // иначе показываем общую сумму дней и людей умноженную на 4000
        }
    });

    place.addEventListener("input", function() {
        if (restDays.value == "" || persons.value == "") {      // если поля для ввода дней и людей пустые
            totalValue.innerHTML = 0;   // то в общей сумме показываем 0
        } else {
            let a = total;      // иначе переменной "а" присваиваем общую сумму дней и людей умноженную на 4000
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;      // показываем общую сумму дней и людей умноженную на 4000, и умноженную на "value" элемента "option" (внутри которых указаны базы отдыха)
        }                                                                          
    });
}
module.exports = calc;